import { motion } from "framer-motion";
import { Phone } from "lucide-react";

// Always-visible floating Call Now button, bottom-right on every page.
// Sits to the left of the chat bubble (which owns bottom-6 right-6).
const FloatingCallButton = () => (
  <motion.a
    href="tel:+18776091919"
    aria-label="Call MSY Limo Service now at (877) 609-1919"
    data-testid="floating-call-button"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-24 z-50 flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black pl-4 pr-5 py-3.5 rounded-full font-bold text-base shadow-2xl shadow-amber-500/40 hover:from-amber-400 hover:to-amber-500 transition-colors"
  >
    <span className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-black/20 animate-ping" />
      <Phone className="w-5 h-5 relative" />
    </span>
    Call Now
  </motion.a>
);

export default FloatingCallButton;
