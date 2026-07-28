import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote-requests', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Homepage hero quick quote" })
      });

      if (response.ok) {
        toast.success("Quote request sent! We'll call or text you within 15 minutes.");
        setFormData({ pickupLocation: "", dropoffLocation: "", phone: "" });
      } else {
        toast.error("Failed to send. Please call us directly.");
      }
    } catch (error) {
      toast.error("Failed to send. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          poster="https://images.pexels.com/videos/8344926/pexels-photo-8344926.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

        <div className="mt-8 md:mt-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Headline + Book Now */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-white block">MSY LIMO SERVICE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block">NEW ORLEANS</span>
            </h1>
            <p className="sr-only">Luxury Limousine &amp; Airport Transportation</p>

            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Luxury airport transfers &amp; chauffeur service across New Orleans, Kenner &amp; Metairie. Flat rates, on time, every time.
            </p>

            {/* Book Now — most prominent element after the phone number */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link
                to="/book"
                data-testid="hero-book-now"
                className="block w-full lg:max-w-md text-center bg-gradient-to-r from-amber-500 to-amber-600 text-black py-5 md:py-6 px-8 rounded-2xl font-extrabold text-2xl md:text-3xl uppercase tracking-wide shadow-2xl shadow-amber-500/40 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-400/60 transition-all"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: 3-field Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-500/20 overflow-hidden border border-amber-500/30"
          >
            <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black py-4 px-6 text-center">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get an Instant Quote
              </h2>
              <p className="text-black/70 text-sm">We respond within 15 minutes</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4" data-testid="hero-quick-quote-form">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  placeholder="Pickup Location (e.g. MSY Airport) *"
                  className="w-full pl-11 pr-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white placeholder-white/40 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  required
                  placeholder="Drop-off Location *"
                  className="w-full pl-11 pr-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white placeholder-white/40 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="w-full pl-11 pr-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white placeholder-white/40 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-amber-400 hover:to-amber-500 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get My Quote
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
