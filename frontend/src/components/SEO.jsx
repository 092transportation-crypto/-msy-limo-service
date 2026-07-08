import { useEffect } from "react";

const BASE_URL = "https://msylimoservice.com";

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

// Builds a schema.org FAQPage object from an array of { q, a }
export const buildFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

/**
 * Per-page SEO manager for the SPA. Sets document title, description,
 * canonical URL, Open Graph / Twitter tags, and injects JSON-LD schema.
 *
 * @param {string} title      Meta title (keep under 60 characters)
 * @param {string} description Meta description (keep under 160 characters)
 * @param {string} path       Canonical path starting with "/" (e.g. "/msy-to-metairie")
 * @param {Array}  schema     Array of schema.org JSON-LD objects
 */
const SEO = ({ title, description, path = "/", schema = [] }) => {
  const schemaJson = JSON.stringify(schema);
  useEffect(() => {
    const url = `${BASE_URL}${path === "/" ? "" : path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Replace any previously injected page-level JSON-LD
    document.head
      .querySelectorAll('script[data-seo-jsonld="true"]')
      .forEach((node) => node.remove());
    JSON.parse(schemaJson).forEach((obj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
    });
  }, [title, description, path, schemaJson]);

  return null;
};

export default SEO;
