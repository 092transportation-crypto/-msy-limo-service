#!/usr/bin/env node
/* eslint-disable */
/**
 * Regenerates public/sitemap-static.xml from the site's own content data
 * files, so every static page, landing page (city/route/venue/event/service),
 * guide and blog post is listed — including any just added.
 *
 * Reads most data files as plain text with regex (not require/execute), the
 * same approach used by the data-file audit scripts in this project. Blog
 * posts are the exception: their slug set comes from evaluating the real
 * registry (src/data/blogPostsData.js), so scheduled posts are respected.
 * Existing URLs keep their previous <lastmod>.
 *
 * Run with: node scripts/generate-sitemap.js
 * (Also wired up as `npm run sitemap`.)
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "src", "data");
const OUT = path.join(ROOT, "public", "sitemap-static.xml");
const ORIGIN = "https://msylimoservice.com";
const TODAY = new Date().toISOString().slice(0, 10);

function slugsFromFile(file) {
  const full = path.join(DATA_DIR, file);
  if (!fs.existsSync(full)) return [];
  const text = fs.readFileSync(full, "utf8");
  const re = /\bslug:\s*"([^"]+)"|"slug":\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push(m[1] || m[2]);
  return out;
}

// <loc> -> <lastmod> from the sitemap currently on disk. URLs already listed
// keep their lastmod, so the daily scheduled-publishing rebuild (prebuild runs
// this script) doesn't stamp every page with today's date; only URLs new to
// the sitemap get today.
function previousLastmods() {
  const map = new Map();
  let xml = "";
  try {
    xml = fs.readFileSync(OUT, "utf8");
  } catch (e) {
    return map;
  }
  const re = /<loc>([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
  let m;
  while ((m = re.exec(xml))) map.set(m[1], m[2]);
  return map;
}
const PREVIOUS = previousLastmods();

function url(loc, { changefreq = "monthly", priority = "0.8" } = {}) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${PREVIOUS.get(loc) || TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

const entries = [];
const seen = new Set();
function add(locPath, opts) {
  const loc = locPath === "/" ? `${ORIGIN}/` : `${ORIGIN}${locPath}`;
  if (seen.has(loc)) return;
  seen.add(loc);
  entries.push(url(loc, opts));
}

// Static app routes (kept in sync with src/App.js).
add("/", { changefreq: "weekly", priority: "1.0" });
add("/fleet", { priority: "0.9" });
add("/about", { priority: "0.8" });
add("/contact", { priority: "0.9" });
add("/booking", { priority: "0.9" });
add("/faq", { priority: "0.7" });
add("/service-areas", { priority: "0.8" });
add("/blog", { priority: "0.8" });
add("/services/airport-transportation", { priority: "0.9" });
add("/services/corporate-transportation", { priority: "0.8" });
add("/services/wedding-limo", { priority: "0.8" });
add("/services/special-events", { priority: "0.8" });
add("/services/hourly-charter", { priority: "0.8" });
add("/services/cruise-transportation", { priority: "0.8" });
add("/services/saints-game-day", { priority: "0.8" });

// MSY airport route pages.
for (const slug of slugsFromFile("routesData.js")) add(`/${slug}`, { priority: "0.8" });

// Concert & event venue pages.
for (const slug of slugsFromFile("venuesData.js")) add(`/${slug}`, { priority: "0.8" });

// New Orleans / MSY-area city, neighborhood, service & event landing pages
// (base marylandPages.js array + its Louisiana batch files).
//
// IMPORTANT: discover batch files dynamically instead of hardcoding a list.
// A hardcoded list has previously gone stale here (and in sibling repos)
// and silently excluded newer batches from the sitemap, so new pages never
// got crawled even though they worked fine via client-side routing.
function discoverDataFiles(baseName, batchPrefix) {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f === baseName || (f.startsWith(batchPrefix) && f.endsWith(".js")))
    .sort((a, b) => {
      // Keep the base file first, then sort batch files numerically
      // (Batch2, Batch3, ..., Batch10, Batch11, ...) rather than lexically.
      if (a === baseName) return -1;
      if (b === baseName) return 1;
      const na = parseInt(a.match(/(\d+)/)?.[1] || "0", 10);
      const nb = parseInt(b.match(/(\d+)/)?.[1] || "0", 10);
      return na - nb;
    });
  return files;
}

const marylandFiles = discoverDataFiles("marylandPages.js", "marylandPagesBatch");
for (const file of marylandFiles) {
  for (const slug of slugsFromFile(file)) add(`/${slug}`, { priority: "0.8" });
}

// Root-level guide articles.
for (const slug of slugsFromFile("guides.js")) add(`/${slug}`, { priority: "0.7" });

// Standalone SEO blog posts.
//
// The slug SET comes from the real registry (BLOG_POSTS in
// src/data/blogPostsData.js), evaluated below, so scheduled posts
// (src/lib/publishSchedule.js) stay out until their date and batch files that
// exist on disk but aren't imported are never listed. Batch-file discovery
// only supplies a stable ORDER for the slugs.
function loadLiveBlogSlugs() {
  const babel = require("@babel/core");
  const Module = require("module");
  const SRC = path.join(ROOT, "src");
  const opts = {
    babelrc: false,
    configFile: false,
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  };
  const origJs = Module._extensions[".js"];
  const origResolve = Module._resolveFilename;
  Module._extensions[".js"] = (module, filename) =>
    filename.startsWith(SRC + path.sep)
      ? module._compile(babel.transformSync(fs.readFileSync(filename, "utf8"), { ...opts, filename }).code, filename)
      : origJs(module, filename);
  Module._resolveFilename = function (request, ...rest) {
    if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
    return origResolve.call(this, request, ...rest);
  };
  try {
    const { BLOG_POSTS } = require(path.join(DATA_DIR, "blogPostsData.js"));
    if (!Array.isArray(BLOG_POSTS) || !BLOG_POSTS.length) throw new Error("BLOG_POSTS is empty");
    return BLOG_POSTS.map((p) => p.slug);
  } finally {
    Module._extensions[".js"] = origJs;
    Module._resolveFilename = origResolve;
  }
}

const liveBlogSlugs = loadLiveBlogSlugs();
const liveBlogSet = new Set(liveBlogSlugs);
const orderedBlogSlugs = [];
const blogFiles = discoverDataFiles("blogPostsData.js", "blogPostsBatch");
for (const file of blogFiles) {
  for (const slug of slugsFromFile(file)) if (liveBlogSet.has(slug)) orderedBlogSlugs.push(slug);
}
for (const slug of liveBlogSlugs) orderedBlogSlugs.push(slug); // any the regex missed (add() dedupes)
for (const slug of orderedBlogSlugs) add(`/blog/${slug}`, { changefreq: "monthly", priority: "0.7" });

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("")}</urlset>\n`;
fs.writeFileSync(OUT, xml, "utf8");
console.log(`[sitemap] wrote ${entries.length} URLs to ${path.relative(ROOT, OUT)}`);
