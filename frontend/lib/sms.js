// Fire-and-forget SMS alerts via the Twilio REST API (raw HTTP — no Twilio
// SDK dependency). Used to notify the dispatch team the moment a new lead
// comes in from the chat widget or the on-site popups.
//
// Required environment variables (set in Vercel project settings):
//   TWILIO_ACCOUNT_SID
//   TWILIO_AUTH_TOKEN
//   TWILIO_FROM_NUMBER   — Twilio number the alert is sent from
//   ALERT_PHONE_NUMBER   — dispatch/staff number that receives the alert
//
// This never throws and never hangs the caller: any missing env var is a
// silent no-op, and the request is bounded by a 6s timeout.

const TIMEOUT_MS = 6000;

async function sendSms(body) {
  const accountSid = (process.env.TWILIO_ACCOUNT_SID || '').trim();
  const authToken = (process.env.TWILIO_AUTH_TOKEN || '').trim();
  const fromNumber = (process.env.TWILIO_FROM_NUMBER || '').trim();
  const toNumber = (process.env.ALERT_PHONE_NUMBER || '').trim();

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    console.log('sendSms skipped: Twilio env vars not fully configured');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');
    const params = new URLSearchParams({
      To: toNumber,
      From: fromNumber,
      Body: String(body ?? '').slice(0, 1500),
    });

    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('Twilio SMS failed:', res.status, text.slice(0, 300));
    }
  } catch (err) {
    console.error('Twilio SMS error:', err.message);
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { sendSms };
