// Vercel serverless function: receives quote/contact form submissions and
// emails them to the team via Gmail SMTP.
//
// Required environment variables (set in Vercel project settings):
//   SMTP_USER          — Gmail address used to send
//   SMTP_PASSWORD      — 16-character Gmail app password
//   NOTIFICATION_EMAIL — where booking notifications are delivered (defaults to info@msylimoservice.com)

const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { computeQuote } = require('./_pricing.js');

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const field = (v, max) => String(v ?? '').trim().slice(0, max);

const isValidEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Masks an email for logs: "ab***@domain.com"
const maskEmail = (addr = '') =>
  addr.replace(/^([^@]{0,2})[^@]*(@.*)$/, '$1***$2') || '(empty)';

const usd = (v) => `$${Number(v || 0).toFixed(2)}`;
const CUSTOM_QUOTE_TEXT = 'Custom quote requested — no instant price calculated';

/**
 * Normalize the instant-quote pricing the form submits so the notification
 * email can show the fare breakdown. When the client says an instant price
 * was shown, the fare is RECOMPUTED here from miles + vehicle (same bracket
 * math as the Stripe endpoint) so the email always reflects our rate table.
 *
 *   { mode: 'instant', vehicle, vehicle_label, miles, base_fare, discount,
 *     surcharge, short_notice, card_fee, total, paid, payment_intent }
 *   { mode: 'custom', reason }   // Hourly / Wedding / Special Event, no
 *                                 // vehicle, over 150 miles, no distance …
 */
function normalizePricing(raw) {
  if (!raw || typeof raw !== 'object') {
    return { mode: 'custom', reason: 'No pricing data submitted' };
  }
  if (raw.mode !== 'instant') {
    return { mode: 'custom', reason: field(raw.reason, 200) || 'Custom quote' };
  }
  const miles = Number(raw.miles);
  const vehicle = field(raw.vehicle, 40);
  // The surcharge the customer saw is the source of truth for short notice.
  const shortNotice = Boolean(raw.short_notice) || Number(raw.surcharge) > 0;
  const q = computeQuote(miles, vehicle, shortNotice);
  if (!q) return { mode: 'custom', reason: 'Vehicle has no instant pricing' };
  if (q.overLimit) {
    return { mode: 'custom', reason: `Trip is ${q.miles} miles (over the 150-mile instant-quote limit)` };
  }
  return {
    mode: 'instant',
    vehicle,
    vehicle_label: field(raw.vehicle_label, 60) || vehicle,
    miles: q.miles,
    base_fare: q.baseFare,
    discount: q.discount,
    surcharge: q.surcharge,
    short_notice: shortNotice,
    card_fee: q.cardFee,
    total: q.total,
    paid: Boolean(raw.paid),
    payment_intent: field(raw.payment_intent, 80),
  };
}

/** [label, value] rows for the pricing section of the email. */
function pricingRows(p) {
  if (p.mode !== 'instant') {
    return [['Pricing', `${CUSTOM_QUOTE_TEXT}${p.reason ? ` (${p.reason})` : ''}`]];
  }
  return [
    ['Vehicle', p.vehicle_label],
    ['Distance', `${p.miles} miles`],
    ['Base fare', usd(p.base_fare)],
    ['Discount (10%)', `-${usd(p.discount)}`],
    ...(p.surcharge > 0 ? [['Short-notice surcharge (20%)', `+${usd(p.surcharge)}`]] : []),
    ['Card fee (3%)', `+${usd(p.card_fee)}`],
    ['TOTAL', usd(p.total)],
    [
      'Payment',
      p.paid
        ? `Paid online via Stripe${p.payment_intent ? ` (${p.payment_intent})` : ''}`
        : 'Not paid online — instant quote only',
    ],
  ];
}

function pricingSubjectSuffix(p) {
  if (p.mode !== 'instant') return 'Custom quote';
  return `${usd(p.total)}${p.paid ? ' PAID' : ''}`;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Env values pasted into dashboards often carry stray whitespace/newlines,
  // which malform the From header and trigger 5xx rejections.
  const smtpUser = (process.env.SMTP_USER || '').trim();
  const smtpPassword = (process.env.SMTP_PASSWORD || '').trim();
  const recipient =
    (process.env.NOTIFICATION_EMAIL || '').trim() || 'info@msylimoservice.com';
  if (!smtpUser || !smtpPassword) {
    console.error('SMTP_USER / SMTP_PASSWORD not configured');
    return res.status(500).json({ success: false, message: 'Email service not configured' });
  }
  console.log(
    'smtp env check:',
    JSON.stringify({
      SMTP_USER: maskEmail(smtpUser),
      SMTP_PASSWORD: 'set',
      NOTIFICATION_EMAIL: maskEmail(recipient),
    })
  );

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const inquiry = {
    name: field(body.name, 120) || 'Website Visitor',
    email: field(body.email, 200),
    phone: field(body.phone, 40),
    serviceType: field(body.serviceType || body.service_type, 80) || 'General inquiry',
    flightNumber: field(body.flightNumber || body.flight_number, 40),
    contactMethod: field(body.contactMethod || body.contact_method, 40),
    vehiclePreference: field(body.vehiclePreference || body.vehicle_preference, 80),
    hearAbout: field(body.hearAbout || body.hear_about, 120),
    smsConsent: body.smsConsent ?? body.sms_consent ? 'Yes' : 'No',
    pickupLocation: field(body.pickupLocation || body.pickup_location, 300),
    dropoffLocation: field(body.dropoffLocation || body.dropoff_location, 300),
    date: field(body.date, 40),
    time: field(body.time, 40),
    passengers: field(body.passengers, 10),
    message: field(body.message, 2000),
    source: field(body.source, 40) || 'Quote form',
  };

  if (!(inquiry.phone || inquiry.email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a phone number or email so we can reach you.',
    });
  }

  // Instant-quote pricing shown to the customer on the form (or the reason
  // no instant price was calculated).
  const pricing = normalizePricing(body.pricing);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const row = (label, value) =>
    `<tr><td style="padding:8px 12px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;">${label}</td><td style="padding:8px 12px;color:#111;${label === 'TOTAL' ? 'font-weight:bold;font-size:16px;' : ''}">${escapeHtml(value).replace(/\n/g, '<br>') || '&mdash;'}</td></tr>`;

  const html = `<!doctype html>
<html><body style="font-family:Arial,sans-serif;margin:0;padding:24px;background:#000;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:2px solid #fbbf24;">
    <div style="background:#000;color:#fbbf24;padding:18px 24px;">
      <h1 style="margin:0;font-size:22px;letter-spacing:0.04em;">MSY LIMO SERVICE &mdash; NEW QUOTE REQUEST</h1>
      <p style="margin:6px 0 0;color:#fff;font-size:13px;">Submitted ${createdAt} &middot; via ${escapeHtml(inquiry.source)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row('Name', inquiry.name)}
      ${row('Email', inquiry.email)}
      ${row('Phone', inquiry.phone)}
      ${row('Preferred Contact', inquiry.contactMethod)}
      ${row('Service Type', inquiry.serviceType)}
      ${inquiry.flightNumber ? row('Flight Number', inquiry.flightNumber) : ''}
      ${pricing.mode === 'instant' ? '' : row('Vehicle Preference', inquiry.vehiclePreference)}
      ${row('Pickup Location', inquiry.pickupLocation)}
      ${row('Drop-off Location', inquiry.dropoffLocation)}
      ${row('Date', inquiry.date)}
      ${row('Time', inquiry.time)}
      ${row('Passengers', inquiry.passengers)}
      ${pricingRows(pricing).map(([label, value]) => row(label, value)).join('\n      ')}
      ${row('Heard About Us Via', inquiry.hearAbout)}
      ${row('SMS Consent', inquiry.smsConsent)}
      ${row('Message', inquiry.message)}
      ${row('Inquiry ID', id)}
    </table>
    <div style="background:#000;color:#fff;padding:14px 24px;text-align:center;font-size:12px;">
      Reply directly to this email to respond to the customer.
    </div>
  </div>
</body></html>`;

  const text = [
    'NEW QUOTE REQUEST — MSY LIMO SERVICE',
    `Submitted: ${createdAt} (via ${inquiry.source})`,
    '',
    `Name:             ${inquiry.name}`,
    `Email:            ${inquiry.email || '—'}`,
    `Phone:            ${inquiry.phone || '—'}`,
    `Preferred Contact:${inquiry.contactMethod || '—'}`,
    `Service Type:     ${inquiry.serviceType}`,
    ...(inquiry.flightNumber ? [`Flight Number:    ${inquiry.flightNumber}`] : []),
    ...(pricing.mode === 'instant' ? [] : [`Vehicle:          ${inquiry.vehiclePreference || '—'}`]),
    `Pickup Location:  ${inquiry.pickupLocation || '—'}`,
    `Drop-off:         ${inquiry.dropoffLocation || '—'}`,
    `Date:             ${inquiry.date || '—'}`,
    `Time:             ${inquiry.time || '—'}`,
    `Passengers:       ${inquiry.passengers || '—'}`,
    // Fare breakdown the customer saw on the form, or the custom-quote line.
    ...pricingRows(pricing).map(([label, value]) =>
      `${label}:`.length >= 18 ? `${label}: ${value}` : `${`${label}:`.padEnd(18)}${value}`
    ),
    `Heard About Us:   ${inquiry.hearAbout || '—'}`,
    `SMS Consent:      ${inquiry.smsConsent}`,
    `Message:          ${inquiry.message || '—'}`,
    `Inquiry ID:       ${id}`,
  ].join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    // The From header AND the SMTP envelope sender (MAIL FROM) must both be
    // exactly the authenticated Gmail account — anything else is spoofing and
    // gets 550-rejected. The customer's address goes in Reply-To only, and
    // only when it is well-formed.
    const info = await transporter.sendMail({
      from: { name: 'MSY Limo Service Website', address: smtpUser },
      to: recipient,
      ...(isValidEmail(inquiry.email) ? { replyTo: inquiry.email } : {}),
      envelope: { from: smtpUser, to: [recipient] },
      subject: `${pricing.paid ? 'New Booking (PAID)' : 'New Quote Request'} — ${inquiry.serviceType} — ${inquiry.name} — ${pricingSubjectSuffix(pricing)}`,
      text,
      html,
      headers: {
        'X-Mailer': 'MSY Limo Service Website',
        'X-Inquiry-ID': id,
        'X-Auto-Response-Suppress': 'All',
      },
    });

    console.log(
      'quote email sent:',
      JSON.stringify({
        inquiryId: id,
        messageId: info.messageId,
        smtpResponse: info.response,
        accepted: (info.accepted || []).map(maskEmail),
        rejected: (info.rejected || []).map(maskEmail),
      })
    );

    return res.status(200).json({
      id,
      pricing,
      success: true,
      message: 'Quote request received. Our team will contact you shortly.',
    });
  } catch (err) {
    // Surface the exact SMTP rejection (e.g. the full 550 line) in the logs.
    console.error('Failed to send quote email:', err);
    console.error(
      'smtp failure detail:',
      JSON.stringify({
        inquiryId: id,
        code: err.code,
        command: err.command,
        responseCode: err.responseCode,
        response: err.response,
        rejected: (err.rejected || []).map(maskEmail),
        rejectedErrors: (err.rejectedErrors || []).map((e) => ({
          recipient: maskEmail(e.recipient),
          response: e.response,
        })),
      })
    );
    return res.status(500).json({
      success: false,
      message: 'Unable to send your request right now. Please call us directly.',
    });
  }
};
