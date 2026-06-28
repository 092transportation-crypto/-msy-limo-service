import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Plane, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "airport",
    category: "AIRPORT SERVICES",
    title: "AIRPORT TRANSFERS",
    description: "Reliable airport transportation to and from MSY (Louis Armstrong New Orleans International). Our chauffeurs track flights in real time and ensure stress-free, on-time pickups for business and leisure travelers.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    icon: Plane,
    link: "/services/airport-transportation"
  },
  {
    id: "corporate",
    category: "BUSINESS TRAVEL",
    title: "CORPORATE TRANSPORTATION",
    description: "Professional executive car service designed for business travelers. Perfect for client meetings, corporate events, roadshows, and daily executive commutes. Confidential, punctual, and impeccably professional.",
    image: "https://customer-assets.emergentagent.com/job_premium-rides-70/artifacts/6m6vftrh_photo-1560472354-b33ff0c44a43.avif",
    icon: Briefcase,
    link: "/services/corporate-transportation"
  },
  {
    id: "events",
    category: "SPECIAL OCCASIONS",
    title: "EVENTS & WEDDINGS",
    description: "Make your special day unforgettable with our elegant event transportation. Stretch limousines, luxury sedans, and party buses available for weddings, proms, galas, and Mardi Gras celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    link: "/services/wedding-limo"
  },
  {
    id: "hourly",
    category: "FLEXIBLE SERVICE",
    title: "HOURLY CHARTER",
    description: "Flexible hourly charter service with a dedicated chauffeur at your disposal. Ideal for city tours, French Quarter exploration, plantation tours, or when you need transportation throughout the day.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    icon: Clock,
    link: "/services/hourly-charter"
  },
  {
    id: "point-to-point",
    category: "PERSONAL TRANSPORTATION",
    title: "POINT-TO-POINT",
    description: "Our point-to-point service offers direct transportation between two locations, billed at a flat rate. Perfect for business meetings, dinner reservations, or any occasion requiring reliable transportation.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    icon: MapPin,
    link: "/services/special-events"
  }
];

const ServicesPortfolio = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-900" data-testid="services-portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Premium </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Transportation Services
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From airport transfers to special events, we provide exceptional service for every occasion
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Service Tabs */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-5 rounded-2xl transition-all ${
                  activeService === index
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-2 border-amber-500/50"
                    : "bg-black/30 border border-amber-500/10 hover:border-amber-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeService === index
                      ? "bg-amber-500 text-black"
                      : "bg-amber-500/10 text-amber-400"
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-medium tracking-wider ${
                      activeService === index ? "text-amber-400" : "text-white/50"
                    }`}>
                      {service.category}
                    </span>
                    <h3 className={`text-lg font-bold ${
                      activeService === index ? "text-white" : "text-white/80"
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all ${
                    activeService === index ? "text-amber-400 translate-x-1" : "text-white/30"
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Service Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-black/30 border border-amber-500/20 rounded-3xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs font-medium tracking-wider uppercase">
                    {services[activeService].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {services[activeService].title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/70 leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                <Link
                  to={services[activeService].link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-all"
          >
            Book Your Service Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
