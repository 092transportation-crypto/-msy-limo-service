import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const services = [
    { name: "Airport Transportation", href: "/services/airport-transportation" },
    { name: "Corporate Transportation", href: "/services/corporate-transportation" },
    { name: "Wedding Limo Service", href: "/services/wedding-limo" },
    { name: "Special Events", href: "/services/special-events" },
    { name: "Hourly Charter", href: "/services/hourly-charter" },
    { name: "Cruise Ship Transportation", href: "/services/cruise-transportation" },
    { name: "Saints Game Day", href: "/services/saints-game-day" },
  ];

  const areas = [
    { name: "New Orleans", href: "/#service-areas" },
    { name: "Kenner", href: "/#service-areas" },
    { name: "Metairie", href: "/#service-areas" },
    { name: "Gretna", href: "/#service-areas" },
    { name: "All Areas", href: "/#service-areas" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? "shadow-lg shadow-amber-500/10" : ""}`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo - Very Big */}
            <Link to="/" className="flex items-center" data-testid="nav-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_premium-rides-70/artifacts/c9yxyyub_WhatsApp%20Image%202026-02-06%20at%206.29.35%20PM.jpeg" 
                alt="MSY Limo Service - Arrive in Style, Every Mile"
                className="h-20 md:h-24 w-auto"
                width="96"
                height="80"
                fetchpriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown('services')} onMouseLeave={() => setOpenDropdown(null)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 bg-black/95 backdrop-blur-sm shadow-xl shadow-amber-500/10 rounded-lg py-2 min-w-[240px] border border-amber-500/20">
                    {services.map((service) => (
                      <Link 
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-amber-500/10 hover:text-amber-400"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown('areas')} onMouseLeave={() => setOpenDropdown(null)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                  Service Areas <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 bg-black/95 backdrop-blur-sm shadow-xl shadow-amber-500/10 rounded-lg py-2 min-w-[200px] border border-amber-500/20">
                    {areas.map((area) => (
                      <Link 
                        key={area.href}
                        to={area.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-amber-500/10 hover:text-amber-400"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/fleet" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                Fleet
              </Link>
              <Link to="/about" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                About
              </Link>
              <Link to="/blog" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                Blog
              </Link>
              <Link to="/faq" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                FAQ
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm text-white/90 hover:text-amber-400 transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://book.mylimobiz.com/v4/92transp"
                data-ores-widget="website"
                data-ores-alias="92transp"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 rounded px-6 py-2.5 text-sm font-bold transition-all shadow-lg shadow-amber-500/25"
              >
                Book Now
              </a>
              <a
                href="tel:+16674000092"
                className="flex items-center gap-2 border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black rounded px-5 py-2 text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <a href="tel:+16674000092" className="text-amber-400">
                <Phone className="w-5 h-5" />
              </a>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 bottom-0 z-40 bg-black lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col py-4 px-6">
              <Link to="/" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">Home</Link>
              
              <div className="border-b border-amber-500/20">
                <button onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')} className="w-full py-3 text-left text-white flex items-center justify-between hover:text-amber-400">
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'services' && (
                  <div className="pl-4 pb-2">
                    {services.map((service) => (
                      <Link key={service.href} to={service.href} className="block py-2 text-white/70 text-sm hover:text-amber-400">{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-amber-500/20">
                <button onClick={() => setOpenDropdown(openDropdown === 'areas' ? null : 'areas')} className="w-full py-3 text-left text-white flex items-center justify-between hover:text-amber-400">
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'areas' && (
                  <div className="pl-4 pb-2">
                    {areas.map((area) => (
                      <Link key={area.href} to={area.href} className="block py-2 text-white/70 text-sm hover:text-amber-400">{area.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/fleet" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">Fleet</Link>
              <Link to="/about" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">About</Link>
              <Link to="/blog" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">Blog</Link>
              <Link to="/faq" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">FAQ</Link>
              <Link to="/contact" className="py-3 text-white border-b border-amber-500/20 hover:text-amber-400">Contact</Link>

              <div className="mt-6">
                <a
                  href="https://book.mylimobiz.com/v4/92transp"
                  data-ores-widget="website"
                  data-ores-alias="92transp"
                  className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center py-3 rounded font-bold"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
