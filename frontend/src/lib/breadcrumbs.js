// Breadcrumb trail for any pathname, from the site's data files. Used by
// <SiteBreadcrumbs> for the visible trail and the BreadcrumbList JSON-LD.
import { routes } from "@/data/routesData";
import { venues } from "@/data/venuesData";
import { MARYLAND_PAGES } from "@/data/marylandPages";
import { seoBlogPosts } from "@/data/blogPostsData";
import { GUIDES } from "@/data/guides";

const STATIC = {
  "/fleet": "Fleet",
  "/about": "About",
  "/contact": "Contact",
  "/faq": "FAQ",
  "/blog": "Blog",
  "/booking": "Book a Ride",
  "/service-areas": "Service Areas",
};
const SERVICE_LABELS = {
  "/services/airport-transportation": "Airport Transportation",
  "/services/corporate-transportation": "Corporate Transportation",
  "/services/wedding-limo": "Wedding Limo",
  "/services/special-events": "Special Events",
  "/services/hourly-charter": "Hourly Charter",
  "/services/cruise-transportation": "Cruise Transportation",
  "/services/saints-game-day": "Saints Game Day",
};
const HOME = { label: "Home", to: "/" };
const AREAS = { label: "Service Areas", to: "/service-areas" };
const BLOG = { label: "Blog", to: "/blog" };

// Maryland-shape landing pages already emit BreadcrumbList in their own JSON-LD.
export const hasOwnBreadcrumbSchema = (slug) => MARYLAND_PAGES.some((p) => p.slug === slug);

export const breadcrumbTrail = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/" || path === "") return null;
  const slug = path.slice(1);
  const here = (label) => ({ label, to: path });
  if (STATIC[path]) return [HOME, here(STATIC[path])];
  if (SERVICE_LABELS[path]) return [HOME, AREAS, here(SERVICE_LABELS[path])];
  if (path.startsWith("/blog/")) {
    const post = seoBlogPosts.find((p) => p.slug === slug.slice(5));
    return post ? [HOME, BLOG, here(post.title)] : null;
  }
  const guide = GUIDES.find((g) => g.slug === slug);
  if (guide) return [HOME, BLOG, here(guide.title)];
  const page = routes.find((p) => p.slug === slug) || venues.find((p) => p.slug === slug) || MARYLAND_PAGES.find((p) => p.slug === slug);
  return page ? [HOME, AREAS, here(page.h1)] : null;
};
