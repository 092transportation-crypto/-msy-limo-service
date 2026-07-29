import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import TrustSignals from "@/components/TrustSignals";

const CallForQuoteSection = () => (
  <section className="py-16 md:py-20 bg-gray-900" data-testid="call-for-quote-section">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <p className="text-amber-400 text-sm tracking-wider uppercase mb-3">Flat-Rate Airport Transfers</p>
      <h2
        className="text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Call for a Quote
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-8">
        Every trip is a custom flat quote — no meters, no surge, no surprises at the curb.
        Call or text and we'll price your ride in minutes.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href="tel:+18776091919"
          data-testid="call-for-quote-cta"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30"
        >
          <Phone className="w-5 h-5" />
          Call for a Quote — (877) 609-1919
        </a>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
        >
          Or book online <ArrowRight className="w-4 h-4" />
        </Link>
        <TrustSignals />
      </motion.div>
    </div>
  </section>
);

export default CallForQuoteSection;
