import "@/App.css";
import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ChatWidget from "@/components/ChatWidget";

// Lazy load pages for better performance
const HomePage = lazy(() => import("@/pages/HomePage"));
const AirportPage = lazy(() => import("@/pages/services/AirportPage"));
const CorporatePage = lazy(() => import("@/pages/services/CorporatePage"));
const WeddingPage = lazy(() => import("@/pages/services/WeddingPage"));
const EventsPage = lazy(() => import("@/pages/services/EventsPage"));
const HourlyPage = lazy(() => import("@/pages/services/HourlyPage"));
const CruisePage = lazy(() => import("@/pages/services/CruisePage"));
const SaintsPage = lazy(() => import("@/pages/services/SaintsPage"));
const FleetPage = lazy(() => import("@/pages/FleetPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const BookingPage = lazy(() => import("@/pages/BookingPage"));
const BlogsPage = lazy(() => import("@/pages/BlogsPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const RouteLandingPage = lazy(() => import("@/pages/RouteLandingPage"));

// MSY airport route landing pages (content lives in src/data/routesData.js)
const ROUTE_SLUGS = [
  "msy-to-new-orleans-downtown",
  "msy-to-french-quarter",
  "msy-to-metairie",
  "msy-to-baton-rouge",
  "msy-to-slidell",
  "msy-to-kenner",
  "msy-to-covington",
  "msy-to-mandeville",
  "msy-to-hammond",
  "msy-to-gretna",
  "msy-to-biloxi",
  "msy-to-gulf-shores",
  "msy-to-mobile-al",
  "msy-to-lafayette",
  "msy-to-lake-charles",
  "msy-to-natchez",
  "msy-to-jackson-ms",
  "msy-to-pensacola",
  "msy-to-shreveport",
  "msy-to-baton-rouge-downtown",
];

// Minimal loading spinner
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Canonical URL redirect: www to non-www
const useCanonicalRedirect = () => {
  useEffect(() => {
    const canonicalDomain = 'msylimoservice.com';
    if (window.location.hostname === `www.${canonicalDomain}`) {
      window.location.replace(
        `https://${canonicalDomain}${window.location.pathname}${window.location.search}${window.location.hash}`
      );
    }
  }, []); // Empty array is correct - runs once on mount
};

function App() {
  // Enforce canonical URL (redirect www to non-www)
  useCanonicalRedirect();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Service Pages */}
            <Route path="/services/airport-transportation" element={<AirportPage />} />
            <Route path="/services/corporate-transportation" element={<CorporatePage />} />
            <Route path="/services/wedding-limo" element={<WeddingPage />} />
            <Route path="/services/special-events" element={<EventsPage />} />
            <Route path="/services/hourly-charter" element={<HourlyPage />} />
            <Route path="/services/cruise-transportation" element={<CruisePage />} />
            <Route path="/services/saints-game-day" element={<SaintsPage />} />
            {/* Other Pages */}
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* MSY Airport Route Landing Pages */}
            {ROUTE_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<RouteLandingPage slug={slug} />} />
            ))}
            <Route path="/book" element={<BookingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster position="top-right" />
      <ChatWidget />
    </div>
  );
}

export default App;
