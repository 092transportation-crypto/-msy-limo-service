// Vercel serverless function: chat widget backend.
//
// POST /api/chat  body: { messages: [{ role, content }, ...] }
//
// Calls the Anthropic Messages API directly over HTTPS (no SDK dependency).
// Required env var: ANTHROPIC_API_KEY. Optional: ANTHROPIC_CHAT_MODEL
// (defaults to claude-haiku-5-5). With no API key configured this returns a
// 200 with an honest fallback reply instead of ever crashing.
//
// Two tools are exposed to the model:
//   - submit_booking_lead   (required) — dispatches an SMS + lead webhook
//     and composes the confirmation reply itself (no second model call).
//   - get_instant_quote     (optional) — reuses the existing bracket pricing
//     in ./_pricing.js and the existing distance lookup in ./distance.js
//     (via a same-deployment internal HTTP call) to get a REAL number, then
//     makes a second Anthropic call so the model can phrase a natural reply
//     around it.

const { computeQuote } = require('./_pricing.js');
const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';
const DEFAULT_MODEL = 'claude-haiku-5-5';
const MAX_TOKENS = 1024;

const PHONE_DISPLAY = '(877) 609-1919';
const BOOKING_PATH = '/booking';

const FALLBACK_REPLY =
  `I'm not able to chat live right now, but I'd love to help you get a ride booked. ` +
  `Please call us anytime at ${PHONE_DISPLAY} — we're available 24/7 — or fill out the quote form at ${BOOKING_PATH} and our team will follow up right away.`;

// ---------------------------------------------------------------------------
// Real site facts (New Orleans / MSY — not any other market). Kept in sync
// with src/pages/FleetPage.jsx (the 7 fleet categories) and the phone number
// used site-wide (ChatWidget.jsx's own old fallback, InquiryForm.jsx, etc).
// ---------------------------------------------------------------------------
const FLEET_LIST = [
  '- Business Sedan — Mercedes-Benz E-Class (or similar), seats up to 3 with 2 bags',
  '- First Class Sedan — BMW 7 Series / Mercedes S-Class (or similar), seats up to 3 with 2 bags',
  '- Midsize SUV — Lincoln Nautilus (or similar), seats up to 3 with 4 bags',
  '- Luxury SUV — Chevrolet Suburban (or similar), seats up to 5 with 5 bags',
  '- Premium SUV — Cadillac Escalade (or similar), seats up to 6 with 5 bags',
  '- Sprinter Shuttle — Mercedes Sprinter van (or similar), seats up to 13',
  "- Sprinter Executive — Mercedes Sprinter with captain's chairs (or similar), seats up to 13",
].join('\n');

const SYSTEM_PROMPT = `
You are the live chat assistant for MSY Limo Service, a licensed and insured chauffeured transportation company serving New Orleans, Louisiana and Louis Armstrong New Orleans International Airport (MSY). Write like a friendly, concise human dispatcher — not a generic bot. Keep replies short (a few sentences). No markdown headers or bullet lists in your chat replies.

REAL FACTS ABOUT THIS BUSINESS (use only these — never invent others):
- Phone: ${PHONE_DISPLAY} (answered 24/7)
- Online booking form: ${BOOKING_PATH} on this website
- Services offered: airport transportation, corporate transportation, wedding limo, special events, hourly charter, cruise port transportation, and Saints game day rides
- Fleet:
${FLEET_LIST}

GUARDRAILS — follow these exactly, every time:
1. FAQ categories you can answer: pricing (qualitative only — see rule 2), "what cars do you have" (use the real fleet list above, never invent a vehicle), and "how do I book" (point to ${BOOKING_PATH} or ${PHONE_DISPLAY}).
2. Never state a specific dollar price yourself, under any circumstance. The ONLY acceptable source of a price is a get_instant_quote tool result. If that tool isn't available, doesn't apply, or doesn't return a usable number, explain that pricing depends on distance and vehicle, and offer to collect trip details so a dispatcher can send an exact quote.
3. Never claim to know real-time calendar availability for any specific date. There is no live availability calendar. Say the fleet is large and availability is usually open, and offer to collect trip details so a dispatcher can confirm.
4. After 2–3 exchanges, or as soon as the visitor shows booking interest, ask: "Would you like to book a ride? I can get you a quote right now." If they say yes, collect — ONE AT A TIME, never more than one piece of information per message — in this order: name, then phone, then pickup location, then destination, then date, then time. Only once you have all six do you call submit_booking_lead. Never call it with information missing.
5. When the visitor has given you both a pickup location and a destination and wants to know a price, call get_instant_quote to get a real number before answering.
`.trim();

const PRICING_VEHICLE_KEYS = [
  'Business Sedan',
  'Mid-Size SUV',
  'Luxury SUV',
  'Premium SUV',
  'First Class',
  'Sprinter Van',
  'Sprinter Executive',
];

// Maps the user-facing fleet category names (FleetPage.jsx / InquiryForm.jsx)
// — and a few common aliases — onto the bracket-pricing table's vehicle keys
// in ./_pricing.js, which uses slightly different names.
const VEHICLE_ALIASES = {
  'business sedan': 'Business Sedan',
  'first class sedan': 'First Class',
  'first class': 'First Class',
  'midsize suv': 'Mid-Size SUV',
  'mid-size suv': 'Mid-Size SUV',
  'mid size suv': 'Mid-Size SUV',
  'luxury suv': 'Luxury SUV',
  'premium suv': 'Premium SUV',
  'sprinter shuttle': 'Sprinter Van',
  'sprinter van': 'Sprinter Van',
  'sprinter executive': 'Sprinter Executive',
};

function normalizeVehicle(raw) {
  const v = String(raw ?? '').trim().toLowerCase();
  if (!v) return 'Business Sedan';
  if (VEHICLE_ALIASES[v]) return VEHICLE_ALIASES[v];
  const exact = PRICING_VEHICLE_KEYS.find((k) => k.toLowerCase() === v);
  if (exact) return exact;
  if (v.includes('escalade') || v.includes('premium')) return 'Premium SUV';
  if (v.includes('suburban') || v.includes('luxury')) return 'Luxury SUV';
  if (v.includes('nautilus') || v.includes('mid')) return 'Mid-Size SUV';
  if (v.includes('sprinter') && v.includes('exec')) return 'Sprinter Executive';
  if (v.includes('sprinter')) return 'Sprinter Van';
  if (v.includes('s-class') || v.includes('7 series') || v.includes('first')) return 'First Class';
  return 'Business Sedan';
}

const TOOLS = [
  {
    name: 'submit_booking_lead',
    description:
      "Submit a captured booking lead. Call this only once you have ALL SIX fields from the conversation: the visitor's name, phone, pickup location, destination, date, and time.",
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: "Visitor's full name" },
        phone: { type: 'string', description: 'Visitor phone number' },
        pickup: { type: 'string', description: 'Pickup location or address' },
        destination: { type: 'string', description: 'Drop-off location or address' },
        date: { type: 'string', description: 'Trip date, as stated by the visitor' },
        time: { type: 'string', description: 'Trip pickup time, as stated by the visitor' },
      },
      required: ['name', 'phone', 'pickup', 'destination', 'date', 'time'],
    },
  },
  {
    name: 'get_instant_quote',
    description:
      "Get a REAL instant price quote using the live fare calculator (distance plus vehicle). Only call this once the visitor has given both a pickup location and a destination. Never state a dollar amount unless it came from this tool.",
    input_schema: {
      type: 'object',
      properties: {
        pickup: { type: 'string', description: 'Pickup address or location' },
        dropoff: { type: 'string', description: 'Destination address or location' },
        vehicle: {
          type: 'string',
          description:
            'Optional vehicle category: Business Sedan, First Class Sedan, Midsize SUV, Luxury SUV, Premium SUV, Sprinter Shuttle, or Sprinter Executive. Defaults to Business Sedan if not specified.',
        },
      },
      required: ['pickup', 'dropoff'],
    },
  },
];

const clip = (v, max) => String(v ?? '').trim().slice(0, max);

function extractText(message) {
  const content = message && Array.isArray(message.content) ? message.content : [];
  return content
    .filter((b) => b && b.type === 'text' && typeof b.text === 'string')
    .map((b) => b.text)
    .join('\n')
    .trim();
}

function selfOrigin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || (String(host || '').includes('localhost') ? 'http' : 'https');
  return `${proto}://${host}`;
}

// Reuses the existing /api/distance lookup (Google Distance Matrix with an
// OSRM fallback) via a same-deployment internal HTTP call, then the existing
// bracket pricing math in ./_pricing.js — no refactor of either file.
async function runInstantQuote(req, input) {
  const pickup = clip(input && input.pickup, 300);
  const dropoff = clip(input && input.dropoff, 300);
  if (pickup.length < 4 || dropoff.length < 4) {
    return { error: 'Pickup and destination need to be specific addresses or landmarks.' };
  }
  const vehicle = normalizeVehicle(input && input.vehicle);

  try {
    const origin = selfOrigin(req);
    const distRes = await fetch(`${origin}/api/distance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ origin: pickup, destination: dropoff }),
    });
    const distData = await distRes.json().catch(() => null);
    if (!distRes.ok || !distData || !distData.success) {
      return { error: "Couldn't calculate the distance for those locations." };
    }

    const quote = computeQuote(distData.miles, vehicle, false);
    if (!quote) {
      return { error: 'No instant pricing is available for that vehicle.' };
    }
    if (quote.overLimit) {
      return {
        overLimit: true,
        miles: quote.miles,
        message: `That trip is about ${quote.miles} miles, which is over the 150-mile instant-quote limit — a dispatcher can put together a custom quote.`,
      };
    }

    return {
      vehicle,
      miles: quote.miles,
      total: quote.total,
      baseFare: quote.baseFare,
      discount: quote.discount,
      cardFee: quote.cardFee,
    };
  } catch (err) {
    console.error('get_instant_quote failed:', err.message);
    return { error: "Couldn't calculate an instant quote right now." };
  }
}

async function callClaude(messagesForApi) {
  const model = (process.env.ANTHROPIC_CHAT_MODEL || DEFAULT_MODEL).trim() || DEFAULT_MODEL;
  const res = await fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': ANTHROPIC_VERSION,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages: messagesForApi,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Anthropic API ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const apiKey = (process.env.ANTHROPIC_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const messages = incoming
    .filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim()
    )
    .slice(-30)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (!messages.length) {
    return res.status(200).json({
      reply: "Hi! I'm the MSY Limo Service assistant — how can I help with your ride today?",
    });
  }

  try {
    const first = await callClaude(messages);
    const toolUseBlock = Array.isArray(first.content)
      ? first.content.find((b) => b && b.type === 'tool_use')
      : null;

    if (first.stop_reason === 'tool_use' && toolUseBlock) {
      if (toolUseBlock.name === 'submit_booking_lead') {
        const input = toolUseBlock.input || {};
        const name = clip(input.name, 120);
        const phone = clip(input.phone, 40);
        const pickup = clip(input.pickup, 300);
        const destination = clip(input.destination, 300);
        const date = clip(input.date, 60);
        const time = clip(input.time, 60);

        const smsBody = [
          'New chat lead — MSY Limo',
          `Name: ${name || '—'}`,
          `Phone: ${phone || '—'}`,
          `Pickup: ${pickup || '—'}`,
          `Destination: ${destination || '—'}`,
          `Date: ${date || '—'}`,
          `Time: ${time || '—'}`,
        ].join('\n');

        // Never let SMS/webhook failures or slowness fail (or truly block
        // past their own bounded timeouts) the chat response.
        await Promise.allSettled([
          sendSms(smsBody),
          notifyLeadWebhook({
            source: 'chat_widget',
            name,
            phone,
            pickup,
            destination,
            date,
            time,
            createdAt: new Date().toISOString(),
          }),
        ]);

        const firstName = (name.split(/\s+/)[0] || '').trim() || 'there';
        const reply =
          `Thanks, ${firstName}! I've got you down for pickup at ${pickup || 'your pickup spot'} heading to ` +
          `${destination || 'your destination'} on ${date || 'the date you gave'} at ${time || 'your requested time'}. ` +
          `A dispatcher will reach out to ${phone || 'you'} shortly to confirm everything. Anything else I can help with?`;

        return res.status(200).json({ reply, leadCaptured: true });
      }

      if (toolUseBlock.name === 'get_instant_quote') {
        const quoteResult = await runInstantQuote(req, toolUseBlock.input || {});
        const followUpMessages = [
          ...messages,
          { role: 'assistant', content: first.content },
          {
            role: 'user',
            content: [
              {
                type: 'tool_result',
                tool_use_id: toolUseBlock.id,
                content: JSON.stringify(quoteResult),
                ...(quoteResult && quoteResult.error ? { is_error: true } : {}),
              },
            ],
          },
        ];

        const second = await callClaude(followUpMessages);
        const reply = extractText(second) || FALLBACK_REPLY;
        return res.status(200).json({ reply });
      }

      // Unknown/unsupported tool name — fail soft.
      return res.status(200).json({ reply: FALLBACK_REPLY });
    }

    const reply = extractText(first) || FALLBACK_REPLY;
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('chat handler failed:', err.message);
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }
};
