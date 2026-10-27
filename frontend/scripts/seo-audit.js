#!/usr/bin/env node
/**
 * Local SEO content-quality audit over build/**\/index.html.
 *
 * Adapted from the sibling 92limo repo's scripts/seo-audit.js, but this
 * repo's prerender (scripts/prerender.js) is a jsdom boot of the real <App>
 * rather than a hand-built HTML string, so pages carry the full React DOM
 * (nav, footer, motion wrappers, etc.) around the actual content. Rather than
 * loading jsdom per page (455 pages x full React-rendered DOM trees OOMs a
 * default Node heap), this strips boilerplate with light regexes: drop
 * <script>/<style>, drop the single top-level <nav>...</nav> and
 * <footer>...</footer> blocks (every page has exactly one of each, not
 * nested), then strip remaining tags for visible text.
 *
 * Flags, per page:
 *   - missing/empty <meta name="description">
 *   - thin content: visible body word count under 200 (after stripping
 *     nav/footer/script/style — the shared chrome every page carries)
 *   - near-duplicate content: normalized-text shingle fingerprint compared
 *     pairwise within reasonable buckets (same page "kind") above a
 *     similarity threshold
 *   - low text-to-HTML ratio
 *   - <img> tags with missing/empty alt
 *
 * Run with: node scripts/seo-audit.js   (after `npm run build`)
 */
const fs = require("fs");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const WORD_FLOOR = 200;
const RATIO_FLOOR = 0.08; // text bytes / html bytes
const DUP_THRESHOLD = 0.82; // Jaccard similarity on word-shingles

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, out);
    else if (name === "index.html") out.push(p);
  }
  return out;
}

function routeFromFile(file) {
  let rel = path.relative(BUILD, file).replace(/\/index\.html$/, "");
  if (rel === "index.html" || rel === "") return "/";
  return "/" + rel;
}

function stripTag(html, tag) {
  return html.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi"), " ");
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)));
}

function visibleText(html) {
  let body = html.replace(/^[\s\S]*?<body[^>]*>/i, "").replace(/<\/body>[\s\S]*$/i, "");
  for (const tag of ["script", "style", "noscript", "nav", "footer"]) body = stripTag(body, tag);
  const text = decodeEntities(body.replace(/<[^>]+>/g, " "));
  return text.replace(/\s+/g, " ").trim();
}

function shingles(text, n = 5) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}

function pageKind(route) {
  if (route.startsWith("/blog/")) return "blog";
  if (route.startsWith("/services/")) return "service";
  return "landing"; // city/route/venue/guide pages all share the landing template family
}

const files = walk(BUILD);
console.log(`Scanning ${files.length} pages...`);

const pages = [];
function attr(tagHtml, name) {
  const m = tagHtml.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  return m ? decodeEntities(m[2] !== undefined ? m[2] : m[3]) : null;
}

for (const file of files) {
  const route = routeFromFile(file);
  const html = fs.readFileSync(file, "utf8");

  const descMatch = html.match(/<meta\s+name=["']description["'][^>]*>/i);
  const desc = descMatch ? (attr(descMatch[0], "content") || "").trim() : "";

  const text = visibleText(html);
  const wordCount = text ? text.split(/\s+/).length : 0;
  const htmlBytes = Buffer.byteLength(html, "utf8");
  const textBytes = Buffer.byteLength(text, "utf8");
  const ratio = htmlBytes > 0 ? textBytes / htmlBytes : 0;

  const imgsMissingAlt = [];
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    // aria-hidden="true" decorative images (e.g. the nav/footer logo glyph)
    // are correctly given alt="" on purpose — that's the accessibility best
    // practice, not a content gap, so they're excluded here.
    if (/aria-hidden\s*=\s*["']true["']/i.test(m[0])) continue;
    const alt = attr(m[0], "alt");
    if (alt === null || alt.trim() === "") imgsMissingAlt.push(attr(m[0], "src") || "(no src)");
  }

  pages.push({
    route,
    kind: pageKind(route),
    desc,
    wordCount,
    ratio,
    imgsMissingAlt,
    shingles: shingles(text),
    textPreview: text.slice(0, 120),
  });
}

// --- Report ---
const missingDesc = pages.filter((p) => !p.desc);
const thin = pages.filter((p) => p.wordCount < WORD_FLOOR);
const lowRatio = pages.filter((p) => p.ratio < RATIO_FLOOR);
const missingAlt = pages.filter((p) => p.imgsMissingAlt.length > 0);

// Near-duplicate: compare pairwise within same kind bucket only (cross-kind
// comparisons, e.g. a guide vs a city page, are not meaningful duplicates).
const byKind = new Map();
for (const p of pages) {
  if (!byKind.has(p.kind)) byKind.set(p.kind, []);
  byKind.get(p.kind).push(p);
}
const dupPairs = [];
for (const [, group] of byKind) {
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const sim = jaccard(group[i].shingles, group[j].shingles);
      if (sim >= DUP_THRESHOLD) dupPairs.push([group[i].route, group[j].route, sim]);
    }
  }
}

console.log("\n=== SEO content audit ===");
console.log(`Total pages:              ${pages.length}`);
console.log(`Missing meta description: ${missingDesc.length}`);
console.log(`Thin content (<${WORD_FLOOR} words): ${thin.length}`);
console.log(`Low text/HTML ratio (<${RATIO_FLOOR}): ${lowRatio.length}`);
console.log(`Images missing alt:       ${missingAlt.length} pages (${missingAlt.reduce((a, p) => a + p.imgsMissingAlt.length, 0)} images)`);
console.log(`Near-duplicate pairs (>=${DUP_THRESHOLD}): ${dupPairs.length}`);

function printList(label, list, fmt) {
  if (!list.length) return;
  console.log(`\n--- ${label} (${list.length}) ---`);
  for (const item of list.slice(0, 500)) console.log(fmt(item));
}

printList("Missing meta description", missingDesc, (p) => `  ${p.route}`);
printList("Thin content", thin.sort((a, b) => a.wordCount - b.wordCount), (p) => `  ${p.route}  (${p.wordCount} words)`);
printList("Low text/HTML ratio", lowRatio.sort((a, b) => a.ratio - b.ratio), (p) => `  ${p.route}  (ratio ${p.ratio.toFixed(3)}, ${p.wordCount} words)`);
printList("Images missing alt", missingAlt, (p) => `  ${p.route}  -> ${p.imgsMissingAlt.join(", ")}`);
printList("Near-duplicate pairs", dupPairs.sort((a, b) => b[2] - a[2]), ([a, b, sim]) => `  ${(sim * 100).toFixed(1)}%  ${a}  <->  ${b}`);

const totalIssues = missingDesc.length + thin.length + lowRatio.length + missingAlt.length + dupPairs.length;
console.log(`\nTotal flagged issues: ${totalIssues}`);
process.exitCode = 0;
