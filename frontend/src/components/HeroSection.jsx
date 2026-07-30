import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden" data-testid="hero-section">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-20"
          poster="/images/stock/p-8344926.jpg"
        >
          <source src="https://videos.pexels.com/video-files/8344926/8344926-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-24 md:pt-28 pb-10 w-full">
        {/* Giant phone number — the first thing anyone sees */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="tel:+18776091919"
            data-testid="hero-phone-number"
            className="inline-flex items-center gap-2 sm:gap-4 text-[2.5rem] leading-none sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all tracking-tight whitespace-nowrap"
          >
            <Phone className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400 flex-shrink-0" aria-hidden="true" />
            (877) 609-1919
          </a>

          {/* Urgency line */}
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide uppercase" data-testid="hero-urgency">
            <span className="text-amber-400">Available 24/7</span> — Call or Text Now
          </p>

          {/* Social proof */}
          <p className="mt-3 flex items-center justify-center gap-2 text-white/90 text-base sm:text-lg" data-testid="hero-social-proof">
            <span className="flex text-amber-400" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            Trusted by hundreds of New Orleans travelers
          </p>
        </motion.div>

        {/* Headline + Book Now */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white block">MSY LIMO SERVICE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block">NEW ORLEANS</span>
          </h1>
          <p className="sr-only">Luxury Limousine &amp; Airport Transportation</p>

          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 max-w-lg mx-auto">
            Luxury airport transfers &amp; chauffeur service across New Orleans, Kenner &amp; Metairie. On time, every time.
          </p>

          {/* Book Now — most prominent element after the phone number */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link
              to="/book"
              data-testid="hero-book-now"
              className="block w-full sm:max-w-md mx-auto text-center bg-gradient-to-r from-amber-500 to-amber-600 text-black py-5 md:py-6 px-8 rounded-2xl font-extrabold text-2xl md:text-3xl uppercase tracking-wide shadow-2xl shadow-amber-500/40 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-400/60 transition-all"
            >
              Book Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
