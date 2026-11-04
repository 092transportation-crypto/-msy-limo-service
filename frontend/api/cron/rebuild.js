// GET /api/cron/rebuild — called once a day by Vercel Cron (vercel.json
// "crons"). Triggers a fresh production deploy through a Vercel Deploy Hook so
// the build's publish cutoff (src/lib/publishSchedule.js) moves to the new day
// and blog posts scheduled for today go live: listed on /blog, routed,
// prerendered and added to the sitemap.
//
// Env (production): CRON_SECRET — Vercel sends it as "Authorization: Bearer
// <secret>" on cron invocations; DEPLOY_HOOK_URL — the project's deploy hook
// for the main branch.
module.exports = async (req, res) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }
  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) {
    res.status(500).json({ ok: false, error: "DEPLOY_HOOK_URL not set" });
    return;
  }
  try {
    const r = await fetch(hook, { method: "POST" });
    const body = await r.text();
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, status: r.status, body: body.slice(0, 500) });
  } catch (e) {
    res.status(502).json({ ok: false, error: String(e && e.message) });
  }
};
