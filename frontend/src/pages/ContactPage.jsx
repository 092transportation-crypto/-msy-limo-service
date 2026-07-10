import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, Send, Calendar, User, MessageSquare, Car } from "lucide-react";

const contactFaqSchema = buildFaqSchema([
  { q: "How do I get a quote for MSY airport car service?", a: "Submit the quote form with your trip details, call (877) 609-1919, or email msylimoservices@gmail.com. Quotes are flat rates by vehicle class, confirmed before you ride." },
  { q: "How far in advance should I book?", a: "24–48 hours ahead is comfortable for standard transfers; book earlier for weddings, festival weekends, and large groups. Same-day requests are often possible — just call." },
  { q: "Do you answer after hours?", a: "Yes — our dispatch desk operates 24/7 for bookings, changes, and live trip support." },
  { q: "Can I book a round trip in one request?", a: "Yes, and we recommend it: booking your return at the same time locks in your departure pickup and guarantees vehicle availability." },
]);
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        body: JSON.stringify({ ...formData, source: "Contact page" })
      });
      
      if (response.ok) {
        toast.success("Quote request sent! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          serviceType: "",
          pickupLocation: "",
          dropoffLocation: "",
          passengers: "",
          message: ""
        });
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
    <div className="min-h-screen bg-black">
      <SEO
        title="Contact MSY Limo | Book MSY Airport Car Service"
        description="Book your MSY airport car service or New Orleans airport limo — instant quotes by phone at (877) 609-1919 or through our online form, 24/7."
        path="/contact"
        schema={[contactFaqSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            CONTACT US
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact MSY Limo Service Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed max-w-3xl"
          >
            Contact us today to book your ride. Our team is ready to provide fast support and reliable 
            limo services in New Orleans, Louisiana anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="tel:+18776091919" className="flex items-center gap-3 text-black font-semibold hover:opacity-80 transition-opacity">
              <Phone className="w-5 h-5" />
              <span className="text-lg">(877) 609-1919</span>
            </a>
            <a href="mailto:msylimoservices@gmail.com" className="flex items-center gap-3 text-black font-semibold hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
              <span>msylimoservices@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-black font-semibold">
              <MapPin className="w-5 h-5" />
              <span>New Orleans, Louisiana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                Request Your Free Quote
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Get a fast and reliable quote for limo and airport transportation services. 
                Whether you need a ride to the airport, corporate travel, or a special event, 
                our team is ready to provide a smooth, comfortable, and on-time experience 
                tailored to your needs.
              </p>
              
              {/* Contact Details */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 mb-8"
              >
                <motion.a 
                  href="tel:+18776091919" 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Call Us 24/7</p>
                    <p className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">(877) 609-1919</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:msylimoservices@gmail.com" 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email Us</p>
                    <p className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">msylimoservices@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Location</p>
                    <p className="text-xl font-semibold text-white">New Orleans, Louisiana</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Availability</p>
                    <p className="text-xl font-semibold text-white">24/7 Service</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Quote Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl shadow-amber-500/5">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-4 px-6">
                  <h3 className="text-xl font-bold text-black">Get a Free Quote</h3>
                  <p className="text-black/70 text-sm">Fill out the form and we'll get back to you ASAP</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service Type Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(555) 123-4567"
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Service Type *</label>
                      <div className="relative">
                        <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select Service</option>
                          {serviceTypes.map(type => (
                            <option key={type} value={type} className="bg-gray-900">{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Pickup Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Pickup Time *</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup & Dropoff Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Pickup Location</label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="Address or Airport"
                        className="w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Drop-off Location</label>
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        placeholder="Address or Airport"
                        className="w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Number of Passengers</label>
                    <input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      placeholder="How many passengers?"
                      className="w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Additional Details</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-amber-500/50" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Any special requests or additional information..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-amber-400 hover:to-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
