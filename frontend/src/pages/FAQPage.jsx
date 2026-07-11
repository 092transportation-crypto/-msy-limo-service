import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { ChevronDown, Phone, HelpCircle, MessageCircle } from "lucide-react";

const faqData = [
  { q: "How do I book a limo service?", a: "You can book online through our reservation system, call us at (877) 609-1919, or email msylimoservices@gmail.com. We recommend booking 24-48 hours in advance for regular service, and 2-4 weeks for weddings." },
  { q: "What airports do you service?", a: "We provide airport transfers to MSY (Louis Armstrong New Orleans International) and NEW (Lakefront Airport). All airport transfers include flight tracking and complimentary wait time." },
  { q: "What vehicles are in your fleet?", a: "Our fleet includes Mercedes-Benz S-Class sedans, Cadillac Escalade SUVs, Mercedes Sprinter vans, stretch limousines, and executive mini-buses. All vehicles are late-model and meticulously maintained." },
  { q: "Do you offer wedding transportation?", a: "Yes! We specialize in wedding transportation throughout New Orleans, Kenner, Metairie, and surrounding areas. We offer stretch limos, luxury sedans, and can coordinate multiple vehicles for your entire wedding party." },
  { q: "What is your cancellation policy?", a: "Cancellations 24+ hours before service receive a full refund. Cancellations within 24 hours may be subject to a fee. Wedding and event bookings have specific terms in your contract." },
  { q: "Are your chauffeurs professionally trained?", a: "All chauffeurs are professionally licensed, background-checked, and trained in both safe driving and customer service. They maintain professional attire and know the Greater New Orleans region extensively." },
  { q: "Do you offer corporate accounts?", a: "Yes, we offer corporate accounts with simplified billing, priority booking, and dedicated account management. Contact us to set up a corporate account for your business." },
  { q: "What areas do you serve?", a: "We serve the entire Greater New Orleans area including New Orleans, Kenner, Metairie, the French Quarter, Garden District, Uptown, Mid-City, and surrounding Louisiana parishes." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="FAQ | MSY Airport Car Service & Limo Questions"
        description="Answers about MSY airport car service — booking, airports served, fleet, wait times, cancellations & corporate accounts. Call (877) 609-1919."
        path="/faq"
        schema={[buildFaqSchema(faqData)]}
      />
      <Navigation />
      
      <section className="pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <p className="text-amber-400 text-sm tracking-wider">HELP CENTER</p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed max-w-3xl"
          >
            Find answers to common questions about our limo services, booking process, and policies.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div 
                key={`faq-${faq.q.substring(0, 20)}`} 
                variants={itemVariants}
                className="border border-amber-500/20 rounded-xl overflow-hidden bg-black/30 hover:border-amber-500/40 transition-all"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-amber-500/5 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-amber-500 pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.p 
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-white/70 leading-relaxed"
                        >
                          {faq.a}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center bg-gray-900/50 border border-amber-500/20 rounded-2xl p-8"
          >
            <MessageCircle className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <p className="text-white/70 mb-6 text-lg">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="tel:+18776091919" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                <Phone className="w-4 h-4" /> Call (877) 609-1919
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-6 text-black" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Book?
          </motion.h2>
          <motion.a 
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors inline-block"
          >
            Online Reservations
          </motion.a>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-amber-500" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore More
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { to: "/services/airport-transportation", title: "Airport Service" },
              { to: "/fleet", title: "Our Fleet" },
              { to: "/services/wedding-transportation", title: "Weddings" },
              { to: "/contact", title: "Contact Us" },
            ].map((item) => (
              <motion.div key={item.to} variants={itemVariants} whileHover={{ y: -5 }}>
                <Link 
                  to={item.to} 
                  className="block bg-black/30 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-center"
                >
                  <h3 className="font-semibold text-amber-500">{item.title}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
