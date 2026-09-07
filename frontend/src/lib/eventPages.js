// Event landing pages generated from the 92 Limo platform admin
// (Event Pages tool). They are fetched at runtime so a page is live on this
// site the moment it is created — no rebuild needed.
export const PLATFORM_URL = "https://92limo-platform.vercel.app";
export const SITE_KEY = "msy";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function fetchEventPage(slug) {
  if (!slug || !SLUG_RE.test(slug) || !slug.endsWith("-transportation")) return null;
  const res = await fetch(
    `${PLATFORM_URL}/api/event-pages/public?site=${SITE_KEY}&slug=${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`event page fetch failed: ${res.status}`);
  const data = await res.json();
  return data.page || null;
}

export async function fetchEventPageList() {
  const res = await fetch(`${PLATFORM_URL}/api/event-pages/public?site=${SITE_KEY}`, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data.pages) ? data.pages : [];
}
