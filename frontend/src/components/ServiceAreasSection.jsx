import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreasSection = () => {
  const regions = [
    {
      name: "New Orleans Metro",
      cities: ["Kenner", "New Orleans", "Metairie", "River Ridge", "Harahan", "Jefferson", "Elmwood"]
    },
    {
      name: "West Bank",
      cities: ["Gretna", "Harvey", "Terrytown", "Marrero", "Westwego", "Bridge City", "Avondale"]
    },
    {
      name: "River Parishes",
      cities: ["St. Rose", "LaPlace", "Destrehan", "Norco", "Montz", "Reserve", "Luling", "Hahnville"]
    },
    {
      name: "East New Orleans",
      cities: ["Chalmette", "Meraux", "Arabi", "Violet", "Gentilly", "Bywater", "Mid-City"]
    },
    {
      name: "South Shore",
      cities: ["Belle Chasse", "Timberlane", "Estelle", "Algiers", "Waggaman", "Ama"]
    }
  ];

  const allCities = [
    "Kenner", "New Orleans", "Metairie", "River Ridge", "Harahan", "St. Rose", "LaPlace",
    "Jefferson", "Elmwood", "Bridge City", "Westwego", "Marrero", "Gretna", "Harvey",
    "Terrytown", "Avondale", "Waggaman", "Ama", "Luling", "Hahnville", "Destrehan",
    "Norco", "Montz", "Reserve", "Chalmette", "Meraux", "Arabi", "Violet", "Belle Chasse",
    "Timberlane", "Estelle", "Algiers", "Gentilly", "Bywater", "Mid-City"
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Service Coverage
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Serving </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Greater New Orleans
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Premium limo service covering the entire Greater New Orleans area and beyond
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 px-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Our Service Area
              </h3>
            </div>
            <div className="p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220477.69598729583!2d-90.2389!3d29.9511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA!5e0!3m2!1sen!2sus!4v1707200000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy" decoding="async"
                referrerPolicy="no-referrer-when-downgrade"
                title="MSY Limo Service Area Map"
              />
            </div>
            
            {/* Airports */}
            <div className="p-6 border-t border-amber-500/20">
              <h4 className="text-amber-400 font-semibold mb-4">Airports We Serve</h4>
              <div className="flex flex-wrap gap-3">
                <Link to="/services/airport-transportation">
                  <motion.span 
                    className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    MSY - Louis Armstrong
                  </motion.span>
                </Link>
                <Link to="/services/airport-transportation">
                  <motion.span 
                    className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    NEW - Lakefront Airport
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <div className="space-y-6">
            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: regionIndex * 0.1 }}
                className="bg-gray-900/30 border border-amber-500/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all"
              >
                <h3 className="text-amber-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city, cityIndex) => (
                    <Link to="/contact" key={city}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: cityIndex * 0.05 }}
                        className="px-3 py-1.5 bg-black/50 border border-amber-500/20 rounded-lg text-white/80 text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all cursor-pointer inline-block"
                      >
                        {city}
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Cities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            All Service Locations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allCities.map((city, i) => (
              <Link to="/contact" key={city}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-amber-400 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>{city}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30"
          >
            Book Your Ride in New Orleans
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
