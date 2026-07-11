import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { getVenueBySlug, venues } from "@/data/venuesData";
import { MapPin, Music, CheckCircle, Phone, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const VenueLandingPage = ({ slug }) => {
  const venue = getVenueBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!venue) return null;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: venue.h1,
      serviceType: "Event transportation service",
      provider: {
        "@type": "LocalBusiness",
        name: "MSY Limo Service",
        telephone: "+1-877-609-1919",
        url: "https://msylimoservice.com",
      },
      areaServed: { "@type": "City", name: "New Orleans" },
      description: venue.metaDescription,
    },
    buildFaqSchema(venue.faqs),
  ];

  const otherVenues = venues.filter((v) => v.slug !== slug);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={venue.metaTitle}
        description={venue.metaDescription}
        path={`/${venue.slug}`}
        schema={schema}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            {venue.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {venue.h1}
          </motion.h1>

          {/* Venue stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {venue.stats.map((label, i) => {
              const Icon = i === 0 ? MapPin : Music;
              return (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-2 text-amber-400 text-sm font-medium"
                >
                  <Icon className="w-4 h-4" /> {label}
                </div>
              );
            })}
          </motion.div>

          <div className="max-w-3xl space-y-5">
            {venue.intro.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="text-white/70 text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2"
              >
                Book Your Ride <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.a
              href="tel:+18776091919"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> (877) 609-1919
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What's Included on Every {venue.shortName} Ride
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {venue.highlights.map((feature) => (
              <motion.div key={feature} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Venues / service details */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {venue.venuesTitle}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {venue.venues.map((item) => {
              const card = (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-gray-900/50 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/40 transition-all h-full"
                >
                  <Music className="w-6 h-6 text-amber-400 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.blurb}</p>
                  {item.link && (
                    <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium mt-3">
                      View venue page <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </motion.div>
              );
              return item.link ? (
                <Link key={item.name} to={item.link} className="block">
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {venue.whyTitle}
          </motion.h2>
          <div className="space-y-5">
            {venue.whyParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-white/70 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {venue.shortName} Transportation FAQs
          </motion.h2>
          <div className="space-y-6">
            {venue.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gray-900/50 border border-amber-500/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other event pages */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className="text-2xl font-medium mb-8 text-amber-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Concert & Event Transportation
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherVenues.map((v) => (
              <Link
                key={v.slug}
                to={`/${v.slug}`}
                className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
              >
                {v.shortName}
              </Link>
            ))}
            <Link
              to="/services/saints-game-day"
              className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
            >
              Saints Game Day
            </Link>
            <Link
              to="/services/special-events"
              className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
            >
              Special Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-3xl font-medium mb-4 text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your {venue.shortName} Ride Today
          </h2>
          <p className="text-black/70 mb-8">
            Flat rates, professional chauffeurs, and post-show pickup — available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-block"
              >
                Book Now
              </Link>
            </motion.div>
            <motion.a
              href="tel:+18776091919"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block"
            >
              Call (877) 609-1919
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default VenueLandingPage;
