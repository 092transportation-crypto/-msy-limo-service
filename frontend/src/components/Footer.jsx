import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Airport Transportation", href: "/services/airport-transportation" },
    { name: "Corporate Transportation", href: "/services/corporate-transportation" },
    { name: "Wedding Limo Service", href: "/services/wedding-transportation" },
    { name: "Special Events", href: "/services/special-events" },
    { name: "Hourly Charter", href: "/services/hourly-charter" },
  ];

  const areas = [
    { name: "New Orleans", href: "/msy-to-new-orleans-downtown" },
    { name: "French Quarter", href: "/msy-to-french-quarter" },
    { name: "Kenner", href: "/msy-to-kenner" },
    { name: "Metairie", href: "/msy-to-metairie" },
    { name: "Gretna", href: "/msy-to-gretna" },
    { name: "Slidell", href: "/msy-to-slidell" },
    { name: "Mandeville", href: "/msy-to-mandeville" },
    { name: "Covington", href: "/msy-to-covington" },
    { name: "Hammond", href: "/msy-to-hammond" },
    { name: "Baton Rouge", href: "/msy-to-baton-rouge" },
  ];

  const quickLinks = [
    { name: "Book Online", href: "/booking" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* CTA Bar */}
      <motion.div 
        className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-6 md:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-center md:text-left">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-black" />
              </motion.div>
              <p className="text-lg md:text-xl font-bold text-black">Ready to arrive in style?</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
              <Link
                to="/booking"
                className="w-full sm:w-auto bg-black text-amber-400 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-gray-900 active:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 shadow-lg text-center"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+18776091919" className="w-full sm:w-auto text-black hover:text-gray-800 active:text-gray-700 font-bold text-lg py-2 text-center">
                (877) 609-1919
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="py-12 md:py-20 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/">
                <img 
                  src="https://customer-assets.emergentagent.com/job_premium-rides-70/artifacts/c9yxyyub_WhatsApp%20Image%202026-02-06%20at%206.29.35%20PM.jpeg" 
                  alt="MSY Limo Service Logo"
                  className="h-20 w-auto mb-6"
                  width="96"
                  height="80"
                  loading="lazy"
                />
              </Link>
              <p className="text-amber-400 italic mb-4 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Arrive in Style, Every Mile."
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                MSY Limo Service provides premium executive ground transportation throughout 
                Greater New Orleans, Louisiana. Professional chauffeurs, luxury vehicles, 24/7 service.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <a href="tel:+18776091919" className="flex items-center gap-3 text-white hover:text-amber-400 active:text-amber-300 transition-colors group p-2 -ml-2 rounded-xl hover:bg-white/5">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 flex-shrink-0">
                    <Phone className="w-6 h-6 md:w-5 md:h-5 text-amber-400" />
                  </div>
                  <span className="font-semibold text-lg">(877) 609-1919</span>
                </a>
                <a href="mailto:info@msylimoservice.com" className="flex items-center gap-3 text-white hover:text-amber-400 active:text-amber-300 transition-colors group p-2 -ml-2 rounded-xl hover:bg-white/5">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 flex-shrink-0">
                    <Mail className="w-6 h-6 md:w-5 md:h-5 text-amber-400" />
                  </div>
                  <span className="text-sm md:text-base break-all">info@msylimoservice.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/70 p-2 -ml-2">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 md:w-5 md:h-5 text-amber-400" />
                  </div>
                  <span>New Orleans, Louisiana</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 p-2 -ml-2">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 md:w-5 md:h-5 text-amber-400" />
                  </div>
                  <span>Available 24/7</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-amber-400 font-bold mb-4 text-sm tracking-wider uppercase">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.instagram.com/msylimoservice?igsh=MWh4ZjMyanRjMmZlbA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-pink-500/30"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-7 h-7 md:w-6 md:h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/14V52oyJH5B/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 md:w-12 md:h-12 bg-[#1877F2] rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-blue-500/30"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-7 h-7 md:w-6 md:h-6 text-white" />
                  </a>
                </div>
                <p className="text-white/50 text-xs mt-3">Stay connected for updates & offers!</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-amber-400 font-bold mb-6 text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      to={service.href}
                      className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-amber-400 font-bold mb-6 text-sm tracking-wider uppercase">Airport Routes</h4>
              <ul className="space-y-2">
                {areas.map((area) => (
                  <li key={area.name}>
                    <Link to={area.href} className="text-white/70 hover:text-amber-400 transition-colors text-sm">MSY to {area.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-amber-400 font-bold mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Airport */}
              <h4 className="text-amber-400 font-bold mt-8 mb-4 text-sm tracking-wider uppercase">Airport</h4>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://flymsy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
                >
                  MSY Airport
                </a>
              </div>

              {/* Useful Links */}
              <h4 className="text-amber-400 font-bold mt-8 mb-4 text-sm tracking-wider uppercase">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.neworleans.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-amber-400 transition-colors text-sm">New Orleans Tourism</a>
                </li>
                <li>
                  <a href="https://www.frenchquarter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-amber-400 transition-colors text-sm">French Quarter Guide</a>
                </li>
                <li>
                  <a href="https://www.neworleanssaints.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-amber-400 transition-colors text-sm">New Orleans Saints</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} MSY Limo Service. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              <a href="https://www.google.com/maps/place/New+Orleans,+LA" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Find Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
