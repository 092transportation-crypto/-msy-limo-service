// GET /sitemap.xml (rewritten here by vercel.json)
//
// Serves the static sitemap (public/sitemap-static.xml) plus every published
// event landing page from the 92 Limo platform, so auto-generated pages are
// listed the moment they are created.
const fs = require("fs");
const path = require("path");

const ORIGIN = "https://msylimoservice.com";
const PLATFORM_URL = "https://92limo-platform.vercel.app";
const SITE_KEY = "msy";
const EMPTY = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>';

async function staticSitemap(req) {
  try {
    return fs.readFileSync(path.join(__dirname, "..", "public", "sitemap-static.xml"), "utf8");
  } catch {}
  try {
    const proto = req.headers["x-forwarded-proto"] || "https";
    const r = await fetch(`${proto}://${req.headers.host}/sitemap-static.xml`);
    if (r.ok) return await r.text();
  } catch {}
  return EMPTY;
}

// Event pages come from another deployment: never let a slow or broken feed
// delay or corrupt the sitemap (Search Console reports "could not be read" on
// timeouts and on invalid <lastmod>/<loc> values).
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

async function eventEntries() {
  try {
    const r = await fetch(`${PLATFORM_URL}/api/event-pages/public?site=${SITE_KEY}`, {
      signal: AbortSignal.timeout(2500),
    });
    if (!r.ok) return "";
    const data = await r.json();
    return (data.pages || [])
      .filter((p) => p && SLUG_RE.test(String(p.slug || "")))
      .map((p) => {
        const date = String(p.updated_at || "").slice(0, 10);
        const lastmod = DATE_RE.test(date) ? `    <lastmod>${date}</lastmod>\n` : "";
        return `  <url>\n    <loc>${ORIGIN}/${p.slug}</loc>\n${lastmod}    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      })
      .join("");
  } catch {
    return "";
  }
}

module.exports = async (req, res) => {
  let xml = EMPTY;
  try {
    const [base, events] = await Promise.all([staticSitemap(req), eventEntries()]);
    const known = new Set([...base.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
    // Drop event slugs that already exist as static pages — duplicate <loc>s are invalid.
    const fresh = events
      .split(/(?<=<\/url>\n)/)
      .filter((u) => u && !known.has((u.match(/<loc>([^<]+)<\/loc>/) || [])[1]))
      .join("");
    if (base.includes("</urlset>")) xml = base.replace("</urlset>", `${fresh}</urlset>`);
  } catch {}
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.status(200).send(xml);
};
