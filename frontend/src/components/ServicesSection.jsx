import { motion } from "framer-motion";
import { Plane, Briefcase, Heart, PartyPopper, Clock } from "lucide-react";

const services = [
  {
    id: "point-to-point",
    title: "Point To Point",
    description: "Fastest & finest option for door to door services",
    icon: "🚗"
  },
  {
    id: "executive",
    title: "Executive Travel",
    description: "Meetings, the airports, or anywhere",
    icon: <Plane className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
  },
  {
    id: "airport",
    title: "Airport Transfer",
    description: "Catch a flight with the finest ride",
    icon: <Briefcase className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
  },
  {
    id: "events",
    title: "Events Transfer",
    description: "Offer exceptional facilities for any event",
    icon: <PartyPopper className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
  },
  {
    id: "hourly",
    title: "Hourly Travel",
    description: "Hourly journey according to your wishes",
    icon: <Clock className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-900" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Executive Black Car Limo Service
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            You can travel with comfort and safety by saving your time and energy
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-amber-500/10"
              data-testid={`service-${service.id}`}
            >
              <div className="mb-4 flex justify-center">
                {typeof service.icon === 'string' ? (
                  <span className="text-4xl">{service.icon}</span>
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                {service.title}
              </h3>
              <p className="text-sm text-white/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
