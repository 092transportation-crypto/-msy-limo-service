import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { breadcrumbTrail, hasOwnBreadcrumbSchema } from "@/lib/breadcrumbs";

const ORIGIN = "https://msylimoservice.com";
const SCRIPT_ID = "breadcrumb-jsonld";

// Breadcrumb bar rendered at the top of <Footer> (every page mounts the footer)
// plus BreadcrumbList JSON-LD for page types that don't already emit their own.
const SiteBreadcrumbs = () => {
  const { pathname } = useLocation();
  const trail = useMemo(() => breadcrumbTrail(pathname), [pathname]);

  useEffect(() => {
    if (!trail || hasOwnBreadcrumbSchema(pathname.replace(/^\/|\/+$/g, ""))) return undefined;
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: `${ORIGIN}${c.to === "/" ? "" : c.to}`,
      })),
    });
    return () => {
      const s = document.getElementById(SCRIPT_ID);
      if (s) s.remove();
    };
  }, [trail, pathname]);

  if (!trail) return null;
  return (
    <nav aria-label="Breadcrumb" data-testid="breadcrumbs" className="bg-gray-900 border-t border-white/10">
      <ol className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-white/60">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="text-amber-400">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-amber-400 transition-colors">{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default SiteBreadcrumbs;
