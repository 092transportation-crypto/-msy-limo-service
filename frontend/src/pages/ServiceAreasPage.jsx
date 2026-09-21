import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { routes } from "@/data/routesData";
import { venues } from "@/data/venuesData";
import { MARYLAND_PAGES } from "@/data/marylandPages";
import { GUIDES } from "@/data/guides";

// Hub page: one crawlable link to every data-driven landing page. Most of
// these were previously reachable only from the sitemap or from each other.
const LA = (p) => p.schema && JSON.stringify(p.schema.areaServed || "").match(/Louisiana|New Orleans|Parish|LA\b/);
const md = (type, louisiana) =>
  MARYLAND_PAGES.filter((p) => p.type === type && Boolean(LA(p)) === louisiana).map((p) => ({ to: `/${p.slug}`, label: p.h1 }));

const SERVICES = [
  { to: "/services/airport-transportation", label: "MSY Airport Transportation" },
  { to: "/services/corporate-transportation", label: "Corporate Transportation" },
  { to: "/services/wedding-limo", label: "Wedding Limo Service" },
  { to: "/services/special-events", label: "Special Events" },
  { to: "/services/hourly-charter", label: "Hourly Charter" },
  { to: "/services/cruise-transportation", label: "Cruise Port Transportation" },
  { to: "/services/saints-game-day", label: "Saints Game Day Transportation" },
];

const GROUPS = [
  { title: "Chauffeur Services", items: [...SERVICES, ...md("service", true)] },
  { title: "Louisiana Cities", items: md("city", true) },
  { title: "Routes from MSY Airport", items: routes.map((r) => ({ to: `/${r.slug}`, label: r.h1 })) },
  { title: "New Orleans Events & Venues", items: [...venues.map((v) => ({ to: `/${v.slug}`, label: v.h1 })), ...md("event", true)] },
  { title: "Guides", items: GUIDES.map((g) => ({ to: `/${g.slug}`, label: g.title })) },
  { title: "Maryland, DC & Virginia Service", items: [...md("city", false), ...md("route", false), ...md("service", false), ...md("event", false)] },
];

const FAQS = [
  { q: "What areas does MSY Limo Service cover?", a: "Louis Armstrong New Orleans International Airport (MSY), New Orleans and Jefferson Parish, the Northshore, Baton Rouge and the Gulf Coast, with long-distance transfers across Louisiana, Mississippi and beyond." },
  { q: "My town is not listed — can I still book?", a: "Almost certainly. The listed pages are the places we are asked about most, not the limit of where we drive. Send your addresses through the booking form or call (877) 609-1919." },
  { q: "Is the rate the same from every town?", a: "No — rates depend on distance and vehicle. Every trip is quoted as a flat rate before you book, and the rate is confirmed with you before your card is charged." },
  { q: "Do you track flights for MSY pickups?", a: "Yes. Every airport pickup is flight-tracked, and airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals." },
  { q: "What is the cancellation policy?", a: "Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup." },
];

const ServiceAreasPage = () => (
  <div className="min-h-screen bg-black" data-testid="service-areas-page">
    <SEO
      title="Service Areas | New Orleans & Louisiana Car Service"
      description="Every city, MSY airport route, venue and service MSY Limo Service covers across New Orleans and Louisiana. Flat rates, 24/7. Call (877) 609-1919."
      path="/service-areas"
      schema={[buildFaqSchema(FAQS)]}
    />
    <Navigation />
    <main>
      <section className="pt-36 pb-14 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Service Areas</p>
          <h1 className="text-4xl sm:text-5xl font-medium mb-5 max-w-4xl leading-tight">Where MSY Limo Service Drives</h1>
          <p className="text-lg text-white/70 max-w-3xl">
            Chauffeured car service from MSY airport across New Orleans, the Northshore, Baton Rouge and the Gulf Coast —
            every route, city, venue and service we publish a page for, in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/booking" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-full transition-colors">
              Book a Ride
            </Link>
            <a href="tel:+18776091919" className="inline-flex items-center justify-center border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold px-7 py-3 rounded-full transition-colors">
              Call (877) 609-1919
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          {GROUPS.filter((g) => g.items.length).map((group) => (
            <div key={group.title} data-testid="service-area-group">
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-5">{group.title}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-white/70 hover:text-amber-400 transition-colors text-sm sm:text-base">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-black" data-testid="page-faq">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8 text-center">Service Area Questions</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-gray-900/60 border border-amber-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-white/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ServiceAreasPage;
