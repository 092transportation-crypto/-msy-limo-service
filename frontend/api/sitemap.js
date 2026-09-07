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

async function eventEntries() {
  try {
    const r = await fetch(`${PLATFORM_URL}/api/event-pages/public?site=${SITE_KEY}`);
    if (!r.ok) return "";
    const data = await r.json();
    return (data.pages || [])
      .map(
        (p) =>
          `  <url>\n    <loc>${ORIGIN}/${p.slug}</loc>\n    <lastmod>${String(p.updated_at || "").slice(0, 10)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`
      )
      .join("");
  } catch {
    return "";
  }
}

module.exports = async (req, res) => {
  const [base, events] = await Promise.all([staticSitemap(req), eventEntries()]);
  const xml = base.includes("</urlset>") ? base.replace("</urlset>", `${events}</urlset>`) : EMPTY;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  res.status(200).send(xml);
};
