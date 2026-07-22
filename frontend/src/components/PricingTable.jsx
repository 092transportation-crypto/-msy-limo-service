import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import TrustSignals from "@/components/TrustSignals";

const rates = [
  { route: "MSY to Downtown New Orleans", price: 65, href: "/msy-to-new-orleans-downtown", note: "≈ 14 mi · 20–30 min" },
  { route: "MSY to French Quarter", price: 70, href: "/msy-to-french-quarter", note: "Hotels & vacation rentals" },
  { route: "MSY to Metairie", price: 55, href: "/msy-to-metairie", note: "Business & residential" },
  { route: "MSY to Baton Rouge", price: 185, href: "/msy-to-baton-rouge", note: "Long-distance flat rate" },
];

const PricingTable = () => (
  <section className="py-16 md:py-20 bg-gray-900" data-testid="pricing-table">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <div className="text-center mb-10">
        <p className="text-amber-400 text-sm tracking-wider uppercase mb-3">Flat-Rate Airport Transfers</p>
        <h2
          className="text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Simple, Upfront Pricing
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Know your fare before you ride. Every quote is a flat rate — no meters, no surge, no surprises at the curb.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-black rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl shadow-amber-500/5"
      >
        {rates.map(({ route, price, href, note }, i) => (
          <Link
            key={href}
            to={href}
            data-testid={`pricing-row-${i}`}
            className={`flex items-center justify-between gap-4 px-5 sm:px-8 py-5 hover:bg-amber-500/5 transition-colors group ${
              i > 0 ? "border-t border-amber-500/10" : ""
            }`}
          >
            <div className="min-w-0">
              <p className="text-white font-semibold text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                {route}
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5">{note}</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
              <div className="text-right">
                <p className="text-white/50 text-xs">from</p>
                <p className="text-amber-400 font-bold text-2xl sm:text-3xl leading-none">${price}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-500/50 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </motion.div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href="tel:+18776091919"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30"
        >
          <Phone className="w-5 h-5" />
          Lock In Your Flat Rate — (877) 609-1919
        </a>
        <TrustSignals />
      </div>
    </div>
  </section>
);

export default PricingTable;
