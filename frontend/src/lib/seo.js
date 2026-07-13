// Per-route SEO: title, description, and canonical (SPA-safe upserts).
const BASE = "https://msylimoservice.com";

export function setPageSeo({ title, description, path }) {
  if (title) document.title = title;
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", path === "/" ? BASE : `${BASE}${path}`);
}
