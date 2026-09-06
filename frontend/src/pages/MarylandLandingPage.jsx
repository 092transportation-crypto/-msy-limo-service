import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { findMarylandPage } from "@/data/marylandPages";
import { MapPin, Clock, Route as RouteIcon, CheckCircle, Phone, ArrowRight, Users } from "lucide-react";

const SITE_URL = "https://msylimoservice.com";
const STAT_ICONS = [MapPin, Clock, RouteIcon, CheckCircle];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const heading = "text-3xl font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300";
const headingTight = "text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300";
const serif = { fontFamily: "'Playfair Display', serif" };

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

// Maryland city, route and service landing pages — same layout system as
// RouteLandingPage; content lives in src/data/marylandPages.js.
// Nested lists are assembled with plain loops (see buildSchema / buildBlocks)
// rather than nested .map callbacks, which the dev-only babel metadata plugin
// cannot analyse.
function buildSchema(page) {
  const canonical = `${SITE_URL}/${page.slug}`;
  const areaServed = [];
  for (const name of page.schema.areaServed) areaServed.push({ "@type": "Place", name });
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "MSY Limo Service",
      telephone: "+1-877-609-1919",
      url: SITE_URL,
      priceRange: "$$",
      areaServed,
      openingHours: "Mo-Su 00:00-23:59",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.schema.serviceType,
      url: canonical,
      description: page.metaDescription,
      areaServed,
      provider: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.h1, item: canonical },
      ],
    },
    buildFaqSchema(page.faqs),
  ];
}

function buildBlocks(page) {
  const stats = [];
  for (let i = 0; i < page.stats.length; i += 1) {
    const s = page.stats[i];
    const Icon = STAT_ICONS[i % STAT_ICONS.length];
    stats.push(
      <div key={s.label} className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2 text-amber-400 text-sm font-medium">
        <Icon className="w-4 h-4" /> {s.label}: {s.value}
      </div>
    );
  }

  const intro = [];
  for (let i = 0; i < page.intro.length; i += 1) {
    intro.push(
      <motion.p key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }} className="text-white/70 text-lg leading-relaxed">
        {page.intro[i]}
      </motion.p>
    );
  }

  const highlights = [];
  for (const feature of page.highlights) {
    highlights.push(
      <motion.div key={feature} variants={itemVariants} className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
        <span className="text-white/70">{feature}</span>
      </motion.div>
    );
  }

  const destinations = [];
  for (const dest of page.destinations || []) {
    destinations.push(
      <motion.div key={dest.name} variants={itemVariants} whileHover={{ y: -6 }} className="bg-gray-900/50 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/40 transition-all">
        <MapPin className="w-6 h-6 text-amber-400 mb-3" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold text-white mb-2">{dest.name}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{dest.blurb}</p>
      </motion.div>
    );
  }

  const sections = [];
  for (let idx = 0; idx < page.sections.length; idx += 1) {
    const s = page.sections[idx];
    const paragraphs = [];
    for (let i = 0; i < s.paragraphs.length; i += 1) {
      paragraphs.push(
        <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-white/70 leading-relaxed">
          {s.paragraphs[i]}
        </motion.p>
      );
    }
    sections.push(
      <section key={s.h2} className={idx % 2 === 0 ? "py-16 bg-gray-900" : "py-16 bg-black"}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2 {...fadeIn} className={headingTight} style={serif}>
            {s.h2}
          </motion.h2>
          <div className="space-y-5">{paragraphs}</div>
        </div>
      </section>
    );
  }

  const vehicles = [];
  for (const v of page.vehicles) {
    vehicles.push(
      <motion.div key={v.name} variants={itemVariants} className="bg-gray-900/50 border border-amber-500/20 p-6 rounded-xl">
        <p className="text-amber-400 text-xs tracking-wider uppercase">{v.cls}</p>
        <h3 className="text-lg font-semibold text-white mt-1">{v.name}</h3>
        <p className="text-white/60 text-sm mt-2 flex items-center gap-2">
          <Users className="w-4 h-4 text-amber-400" /> Up to {v.seats} · {v.best}
        </p>
      </motion.div>
    );
  }

  const faqs = [];
  for (let i = 0; i < page.faqs.length; i += 1) {
    const faq = page.faqs[i];
    faqs.push(
      <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-black/50 border border-amber-500/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
        <p className="text-white/60 leading-relaxed">{faq.a}</p>
      </motion.div>
    );
  }

  const related = [];
  for (const r of page.related) {
    related.push(
      <Link key={r.to} to={r.to} className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors">
        {r.label}
      </Link>
    );
  }

  return { stats, intro, highlights, destinations, sections, vehicles, faqs, related };
}

const MarylandLandingPage = ({ slug }) => {
  const page = findMarylandPage(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return null;

  const schema = buildSchema(page);
  const blocks = buildBlocks(page);

  return (
    <div className="min-h-screen bg-black" data-testid={`maryland-page-${page.slug}`}>
      <SEO title={page.metaTitle} description={page.metaDescription} path={`/${page.slug}`} schema={schema} />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-amber-400 text-sm tracking-wider mb-4 uppercase">
            {page.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={serif}
          >
            {page.h1}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4 mb-8">
            {blocks.stats}
          </motion.div>

          <div className="max-w-3xl space-y-5">{blocks.intro}</div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-4 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/booking" className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2" data-testid="maryland-book-cta">
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.a href="tel:+18776091919" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2" data-testid="maryland-call-cta">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 {...fadeIn} className={heading} style={serif}>
            What's Included with {page.name}
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blocks.highlights}
          </motion.div>
        </div>
      </section>

      {/* Destinations (routes and services) */}
      {blocks.destinations.length > 0 && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.h2 {...fadeIn} className={heading} style={serif}>
              {page.destinationsTitle}
            </motion.h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blocks.destinations}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content sections */}
      {blocks.sections}

      {/* Vehicles */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 {...fadeIn} className={heading} style={serif}>
            Vehicles for {page.name}
          </motion.h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.vehicles}
          </motion.div>
          <Link to="/fleet" className="inline-flex items-center gap-2 text-amber-400 font-medium mt-8 hover:text-amber-300">
            View the full fleet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2 {...fadeIn} className={heading} style={serif}>
            {page.name} FAQs
          </motion.h2>
          <div className="space-y-6">{blocks.faqs}</div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-medium mb-8 text-amber-400" style={serif}>
            Related Maryland Service
          </h2>
          <div className="flex flex-wrap gap-3">{blocks.related}</div>
        </div>
      </section>

      {/* CTA */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-medium mb-4 text-black" style={serif}>
            Reserve {page.name} Today
          </h2>
          <p className="text-black/70 mb-8">Flat rates, flight tracking and a professional chauffeur — available 24/7. Call (877) 609-1919.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/booking" className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-block">
                Book Now
              </Link>
            </motion.div>
            <motion.a href="tel:+18776091919" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block">
              Call (877) 609-1919
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default MarylandLandingPage;
