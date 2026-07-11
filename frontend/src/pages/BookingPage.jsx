import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, Mail, User, Calendar, Clock, MapPin, Car, Users, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const SERVICE_TYPES = [
  "Airport Transfer",
  "Corporate",
  "Wedding",
  "Special Event",
  "Hourly",
];

const VEHICLES = [
  "Business Sedan",
  "First Class Sedan",
  "SUV",
  "Sprinter Van",
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Referral / Word of Mouth",
  "Social Media",
  "Repeat Customer",
  "Other",
];

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  contactMethod: "",
  serviceType: "",
  vehiclePreference: "",
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  passengers: "",
  hearAbout: "",
  notes: "",
  smsConsent: false,
};

const inputClass =
  "w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors";
const iconInputClass =
  "w-full pl-11 pr-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white placeholder-white/30 focus:border-amber-500 focus:outline-none transition-colors";
const selectClass =
  "w-full px-4 py-3 bg-gray-900 border border-amber-500/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none cursor-pointer";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          contactMethod: formData.contactMethod,
          serviceType: formData.serviceType,
          vehiclePreference: formData.vehiclePreference,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation,
          date: formData.date,
          time: formData.time,
          passengers: formData.passengers,
          hearAbout: formData.hearAbout,
          message: formData.notes,
          smsConsent: formData.smsConsent,
          source: "Booking page",
        }),
      });

      if (response.ok) {
        toast.success("Booking request sent! We'll confirm your ride shortly.");
        setFormData(initialFormData);
      } else {
        toast.error("Failed to send. Please call us at (877) 609-1919.");
      }
    } catch (error) {
      toast.error("Failed to send. Please call us at (877) 609-1919.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Book Your Ride | MSY Limo Service — New Orleans Airport Car Service"
        description="Book your MSY airport transfer, corporate car service, or special event limo online. Request a ride in minutes or call (877) 609-1919 — available 24/7."
        path="/booking"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            ONLINE BOOKING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Ride
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed max-w-3xl"
          >
            Tell us about your trip and we'll confirm your reservation with a flat-rate quote.
            Prefer to talk? Call us 24/7 at{" "}
            <a href="tel:+18776091919" className="text-amber-400 hover:text-amber-300 font-semibold">
              (877) 609-1919
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black rounded-2xl border border-amber-500/20 overflow-hidden shadow-xl shadow-amber-500/5">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-4 px-6">
                <h2 className="text-xl font-bold text-black">Reservation Request</h2>
                <p className="text-black/70 text-sm">Fill out your trip details and we'll get back to you ASAP</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
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
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Contact Method */}
                <div className="grid md:grid-cols-2 gap-4">
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
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Preferred Contact Method</label>
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" className="bg-gray-900">Select Method</option>
                      <option value="Email" className="bg-gray-900">Email</option>
                      <option value="Phone/Text" className="bg-gray-900">Phone/Text</option>
                    </select>
                  </div>
                </div>

                {/* Service Type & Vehicle */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Service Type</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50 pointer-events-none" />
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`${selectClass} pl-11`}
                      >
                        <option value="" className="bg-gray-900">Select Service</option>
                        {SERVICE_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-gray-900">{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Vehicle Preference</label>
                    <select
                      name="vehiclePreference"
                      value={formData.vehiclePreference}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" className="bg-gray-900">Select Vehicle</option>
                      {VEHICLES.map((vehicle) => (
                        <option key={vehicle} value={vehicle} className="bg-gray-900">{vehicle}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Pickup & Drop-off */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Pickup Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        placeholder="Address or MSY Airport"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Drop-off Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        required
                        placeholder="Address or MSY Airport"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
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
                        className={iconInputClass}
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
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Passengers & How did you hear */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Number of Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                      <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                        max="20"
                        placeholder="How many passengers?"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">How did you hear about us?</label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" className="bg-gray-900">Select an option</option>
                      {HEAR_ABOUT_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-gray-900">{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">Notes / Special Requests</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-amber-500/50" />
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Flight number, child seats, extra stops, or anything else we should know..."
                      className={`${iconInputClass} resize-none`}
                    />
                  </div>
                </div>

                {/* SMS Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 shrink-0 accent-amber-500 cursor-pointer"
                  />
                  <span className="text-white/60 text-sm leading-relaxed">
                    By checking this box, you agree to receive SMS messages from MSY Limo Service
                    related to Customer Care. Reply STOP to opt out. Message &amp; data rates may apply.
                  </span>
                </label>

                {/* Submit */}
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
                      Request Booking
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
