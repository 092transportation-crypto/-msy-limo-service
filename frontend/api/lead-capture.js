// Vercel serverless function: captures leads from the on-site lead-capture
// popup and the exit-intent popup. Fires an SMS alert + lead webhook in
// parallel (never lets either block or fail the response) and always
// returns 201 once the input validates.

const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');

const field = (v, max) => String(v ?? '').trim().slice(0, max);
const phoneDigits = (v) => String(v ?? '').replace(/\D/g, '');
const isValidPhone = (v) => {
  const d = phoneDigits(v);
  return d.length >= 10 && d.length <= 15;
};
const isValidEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const name = field(body.name, 120);
  const phone = field(body.phone, 40);
  const email = field(body.email, 200);
  const source = field(body.source, 40) || 'lead_capture';

  if (!name) {
    return res.status(400).json({ success: false, message: 'Please enter your name.' });
  }
  if (!isValidPhone(phone)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
  }
  if (email && !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: "That email address doesn't look valid." });
  }

  const smsBody = [
    `New lead (${source}) — MSY Limo`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  // Never let an SMS/webhook failure (or slowness beyond their own timeouts)
  // turn into a failed lead-capture response.
  await Promise.allSettled([
    sendSms(smsBody),
    notifyLeadWebhook({
      source,
      name,
      phone,
      email: email || undefined,
      createdAt: new Date().toISOString(),
    }),
  ]);

  return res.status(201).json({
    success: true,
    message: "Thanks! We've got your info — our team will reach out shortly.",
  });
};
