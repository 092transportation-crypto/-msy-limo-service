// Vercel serverless function: receives quote/contact form submissions and
// emails them to the team via Gmail SMTP.
//
// Required environment variables (set in Vercel project settings):
//   SMTP_USER          — Gmail address used to send
//   SMTP_PASSWORD      — 16-character Gmail app password
//   NOTIFICATION_EMAIL — where booking notifications are delivered (defaults to info@msylimoservice.com)

const nodemailer = require('nodemailer');
const crypto = require('crypto');

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const field = (v, max) => String(v ?? '').trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.NOTIFICATION_EMAIL || 'info@msylimoservice.com';
  if (!smtpUser || !smtpPassword) {
    console.error('SMTP_USER / SMTP_PASSWORD not configured');
    return res.status(500).json({ success: false, message: 'Email service not configured' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const inquiry = {
    name: field(body.name, 120),
    email: field(body.email, 200),
    phone: field(body.phone, 40),
    serviceType: field(body.serviceType || body.service_type, 80) || 'General inquiry',
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

  if (!inquiry.name || !(inquiry.phone || inquiry.email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name and a phone number or email.',
    });
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const row = (label, value) =>
    `<tr><td style="padding:8px 12px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;">${label}</td><td style="padding:8px 12px;color:#111;">${escapeHtml(value).replace(/\n/g, '<br>') || '&mdash;'}</td></tr>`;

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
      ${row('Vehicle Preference', inquiry.vehiclePreference)}
      ${row('Pickup Location', inquiry.pickupLocation)}
      ${row('Drop-off Location', inquiry.dropoffLocation)}
      ${row('Date', inquiry.date)}
      ${row('Time', inquiry.time)}
      ${row('Passengers', inquiry.passengers)}
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
    `Vehicle:          ${inquiry.vehiclePreference || '—'}`,
    `Pickup Location:  ${inquiry.pickupLocation || '—'}`,
    `Drop-off:         ${inquiry.dropoffLocation || '—'}`,
    `Date:             ${inquiry.date || '—'}`,
    `Time:             ${inquiry.time || '—'}`,
    `Passengers:       ${inquiry.passengers || '—'}`,
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

    await transporter.sendMail({
      from: `MSY Limo Service Website <${smtpUser}>`,
      to: recipient,
      replyTo: inquiry.email || smtpUser,
      subject: `New Quote Request — ${inquiry.serviceType} — ${inquiry.name}`,
      text,
      html,
    });

    return res.status(200).json({
      id,
      success: true,
      message: 'Quote request received. Our team will contact you shortly.',
    });
  } catch (err) {
    console.error('Failed to send quote email:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your request right now. Please call us directly.',
    });
  }
};
