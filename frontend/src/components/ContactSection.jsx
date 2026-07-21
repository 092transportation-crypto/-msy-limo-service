import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Calendar, Clock, Car, User } from "lucide-react";
import { toast } from "sonner";


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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote-requests', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Homepage contact section" })
      });
      
      if (response.ok) {
        toast.success("Quote request sent! We'll contact you shortly.");
        setFormData({ name: "", email: "", phone: "", serviceType: "", date: "", time: "", message: "" });
      } else {
        toast.error("Failed to send. Please call us directly.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-900" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm tracking-wider mb-4"
            >
              CONTACT US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact MSY Limo Service Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 leading-relaxed mb-10"
            >
              Contact us today to book your ride. Our team is ready to provide fast support 
              and reliable limo services in New Orleans, Louisiana anytime.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <a 
                href="tel:+18776091919" 
                className="flex items-center gap-4 group"
                data-testid="contact-phone"
              >
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Call Us 24/7</p>
                  <p className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                    (877) 609-1919
                  </p>
                </div>
              </a>

              <a 
                href="mailto:info@msylimoservice.com" 
                className="flex items-center gap-4 group"
                data-testid="contact-email"
              >
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email Us</p>
                  <p className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                    info@msylimoservice.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="text-xl font-semibold text-white">
                    New Orleans, Louisiana
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl shadow-amber-500/5"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-4 px-6">
              <h3 className="text-xl font-bold text-black">Get a Free Quote</h3>
              <p className="text-black/70 text-sm">Fill out the form and we'll get back to you ASAP</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4" data-testid="contact-form">
              {/* Name & Email */}
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
                      data-testid="input-name"
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
                      data-testid="input-email"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Service Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone *</label>
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
                      data-testid="input-phone"
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

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Pickup Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/70 text-sm mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Pickup/drop-off locations, number of passengers, special requests..."
                  className="w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  data-testid="input-message"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-amber-400 hover:to-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="submit-contact"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
