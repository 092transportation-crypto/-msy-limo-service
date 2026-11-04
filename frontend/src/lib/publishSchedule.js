// Scheduled publishing for blog posts.
//
// Opt-in: a post with `scheduled: true` whose `date` (America/New_York) is
// later than the build's publish cutoff is left out of BLOG_POSTS
// (src/data/blogPostsData.js), so it has no /blog/<slug> route, no card on
// /blog, no related-post link, no breadcrumb, no sitemap entry and no
// prerendered HTML. Posts without the flag are always live.
// A daily Vercel cron (api/cron/rebuild.js) redeploys the site, which moves the
// cutoff forward and publishes posts on their date with no manual step.
//
// `date` may be "YYYY-MM-DD" or this site's long form ("November 1, 2026").
//
// Import-free on purpose: scripts/generate-sitemap.js and scripts/prerender.js
// load it in Node as well as the browser bundle.
//
// Cutoff source: the client bundle gets REACT_APP_PUBLISH_CUTOFF inlined at
// build time (set in craco.config.js), so the browser never uses its own clock.
// Node scripts fall back to today's Eastern date.

export const PUBLISH_TZ = "America/New_York";

export function easternDate(d = new Date()) {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLISH_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// "2026-11-05" | "November 5, 2026" | "Nov 5, 2026" -> "2026-11-05" (or "" if unparseable).
export function toIsoDate(value) {
  if (typeof value !== "string") return "";
  const s = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const m = s.match(/^([A-Za-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/);
  if (!m) return "";
  const name = m[1].toLowerCase();
  const idx = MONTHS.findIndex((full) => full === name || (name.length >= 3 && full.startsWith(name)));
  if (idx < 0) return "";
  return `${m[3]}-${String(idx + 1).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
}

function readCutoff() {
  let fromEnv = "";
  try {
    // Written literally so CRA's DefinePlugin can inline it.
    fromEnv = process.env.REACT_APP_PUBLISH_CUTOFF || "";
  } catch (e) {
    fromEnv = "";
  }
  return /^\d{4}-\d{2}-\d{2}$/.test(fromEnv) ? fromEnv : easternDate();
}

export const PUBLISH_CUTOFF = readCutoff();

export function isPublished(post) {
  if (!post || post.scheduled !== true) return true;
  const iso = toIsoDate(post.date);
  // A scheduled post with an unreadable date stays hidden rather than leaking early.
  return iso !== "" && iso <= PUBLISH_CUTOFF;
}
