import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, User, Car, Calendar, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const serviceTypes = [
  "Airport Transportation",
  "Corporate Transportation", 
  "Wedding Limo Service",
  "Special Events",
  "Hourly Charter",
  "Cruise Port Transfer",
  "Saints Game Day",
  "Other"
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, email: formData.phone + "@quote.request" })
      });
      
      if (response.ok) {
        toast.success("Quote request sent! We'll call you shortly.");
        setFormData({ name: "", phone: "", serviceType: "", date: "", time: "", message: "" });
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
          className="w-full h-full object-cover opacity-25"
          poster="https://images.pexels.com/videos/8344926/pexels-photo-8344926.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://videos.pexels.com/video-files/8344926/8344926-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Animated Gold Particles - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "100%",
              opacity: 0 
            }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Premium Luxury Transportation</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-white block">MSY LIMO SERVICE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 block">NEW ORLEANS</span>
              <span className="sr-only">Luxury Limousine & Airport Transportation</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl md:text-3xl text-amber-400 font-light italic mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Arrive in Style, Every Mile."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-lg"
            >
              Premium Executive Ground Transportation Services in New Orleans, Kenner, Metairie & Greater Louisiana Area
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a 
                href="tel:+18776091919"
                className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>(877) 609-1919</span>
              </motion.a>
              <motion.a 
                href="mailto:msylimoservices@gmail.com"
                className="flex items-center gap-2 border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </motion.div>

            {/* Trust Badges - Internal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              {[
                { label: "24/7 Availability", icon: "🕐", link: "/contact" },
                { label: "Flight Tracking", icon: "✈️", link: "/services/airport-transportation" },
                { label: "Professional Chauffeurs", icon: "👔", link: "/about" },
              ].map((badge) => (
                <Link 
                  key={badge.label}
                  to={badge.link}
                  className="flex items-center gap-3 hover:text-amber-400 transition-colors"
                >
                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="text-white/70 text-sm font-medium hover:text-amber-400">{badge.label}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right: Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-500/20 overflow-hidden border border-amber-500/30"
          >
            <motion.div 
              className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black py-5 px-6 text-center"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get a Free Quote
              </h2>
              <p className="text-black/70 text-sm">Fast response guaranteed</p>
            </motion.div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name *"
                    className="w-full pl-11 pr-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white placeholder-white/40 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
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
              </div>

              {/* Service Type */}
              <div>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-900">Service Type *</option>
                    {serviceTypes.map(type => (
                      <option key={type} value={type} className="bg-gray-900">{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-2 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-2 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Pickup & drop-off locations, passengers..."
                  className="w-full px-4 py-3 bg-gray-900/80 border border-amber-500/20 rounded-xl text-white placeholder-white/40 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
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
                    Get My Free Quote
                  </>
                )}
              </motion.button>
            </form>

            <div className="px-6 pb-6">
              <p className="text-center text-white/50 text-sm mb-3">Or contact us directly</p>
              <div className="grid grid-cols-2 gap-3">
                <motion.a 
                  href="tel:+18776091919"
                  className="flex items-center justify-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 py-3 rounded-xl font-medium hover:bg-amber-500/20 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
                <motion.a 
                  href="mailto:msylimoservices@gmail.com"
                  className="flex items-center justify-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 py-3 rounded-xl font-medium hover:bg-amber-500/20 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-amber-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
