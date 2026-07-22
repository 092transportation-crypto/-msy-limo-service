import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrustSignals from "@/components/TrustSignals";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden" data-testid="cta-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            READY TO EXPERIENCE <br className="hidden md:block" />PREMIUM TRANSPORTATION?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Book your ride today and discover why discerning travelers throughout Greater New Orleans 
            choose MSY Limo for their ground transportation needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded font-semibold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2"
              data-testid="cta-book"
            >
              Book Online Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+18776091919"
              className="border-2 border-amber-500 text-white px-8 py-4 rounded font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2"
              data-testid="cta-call"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (877) 609-1919
            </a>
          </motion.div>

          <TrustSignals className="mt-6" />

          {/* Internal Links for SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <Link to="/services/airport-transportation" className="text-white/50 hover:text-amber-400 transition-colors">Airport Transfers</Link>
            <Link to="/services/corporate-transportation" className="text-white/50 hover:text-amber-400 transition-colors">Corporate Travel</Link>
            <Link to="/services/wedding-transportation" className="text-white/50 hover:text-amber-400 transition-colors">Wedding Limos</Link>
            <Link to="/fleet" className="text-white/50 hover:text-amber-400 transition-colors">Our Fleet</Link>
            <Link to="/faq" className="text-white/50 hover:text-amber-400 transition-colors">FAQ</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
