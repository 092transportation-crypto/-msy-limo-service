// Fire-and-forget lead webhook notifier. POSTs a JSON payload to
// LEAD_WEBHOOK_URL (e.g. a Zapier/Make/CRM hook) whenever a lead is captured
// from the chat widget or the on-site popups.
//
// Required environment variable: LEAD_WEBHOOK_URL
//
// This never throws and never hangs the caller: with no URL configured it is
// a silent no-op, and the request is bounded by a 6s timeout.

const TIMEOUT_MS = 6000;

async function notifyLeadWebhook(payload) {
  const url = (process.env.LEAD_WEBHOOK_URL || '').trim();
  if (!url) {
    console.log('notifyLeadWebhook skipped: LEAD_WEBHOOK_URL not configured');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload ?? {}),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error('Lead webhook failed:', res.status);
    }
  } catch (err) {
    console.error('Lead webhook error:', err.message);
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { notifyLeadWebhook };
