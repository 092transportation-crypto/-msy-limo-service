import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { Plane, Clock, CheckCircle, Phone, ArrowRight } from "lucide-react";

const airportFaqSchema = buildFaqSchema([
  { q: "Which airports does MSY Limo Service cover?", a: "We serve MSY (Louis Armstrong New Orleans International) and NEW (Lakefront Airport). Every transfer includes real-time flight tracking and complimentary wait time." },
  { q: "How much wait time is included with an airport pickup?", a: "60 minutes of complimentary wait time on domestic arrivals, 90 minutes on international arrivals, and 15 minutes for departures — we track your flight so delays never cost you extra." },
  { q: "Where does my chauffeur meet me at MSY?", a: "Standard pickups meet you at the arrivals curb; with meet-and-greet service, your chauffeur waits inside baggage claim with a personalized sign and helps with luggage." },
  { q: "Do you offer flat rates for MSY airport car service?", a: "Yes — every airport transfer is a flat rate quoted by vehicle class and confirmed at booking, with no surge pricing at any hour or event. Call (877) 609-1919 for a quote." },
]);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const AirportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const airports = [
    { code: "MSY", name: "Louis Armstrong New Orleans International", city: "Kenner, LA", time: "15-25 min from New Orleans", url: "https://flymsy.com" },
    { code: "NEW", name: "Lakefront Airport", city: "New Orleans, LA", time: "10-15 min from Downtown", url: "https://www.lakefrontairport.com" },
  ];

  const features = [
    "Real-time flight tracking",
    "Meet & greet service available",
    "Complimentary 60-minute wait time for delays",
    "Professional uniformed chauffeurs",
    "Bottled water & amenities included",
    "Child car seats available upon request",
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="MSY Airport Transportation | New Orleans Airport Limo"
        description="MSY airport car service with flight tracking, meet & greet and flat rates. New Orleans airport limo transfers 24/7. Book now or call (877) 609-1919."
        path="/services/airport-transportation"
        schema={[airportFaqSchema]}
      />
      <Navigation />

      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-amber-400 text-sm tracking-wider mb-4"
              >
                OUR SERVICES
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Airport Transportation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Reliable airport limo service to and from MSY Louis Armstrong International Airport. 
                Our professional chauffeurs track your flight in real time and ensure stress-free, 
                on-time pickups throughout Greater New Orleans and Louisiana.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2">
                    Book Airport Transfer <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.a 
                  href="tel:+18776091919" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> (877) 609-1919
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" 
                alt="MSY Limo Service airport transportation New Orleans MSY airport" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Airports We Serve
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {airports.map((airport, index) => (
              <motion.a 
                href={airport.url}
                target="_blank"
                rel="noopener noreferrer"
                key={airport.code} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-black/50 border border-amber-500/20 p-8 rounded-xl hover:border-amber-500/40 transition-all block"
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Plane className="w-10 h-10 text-amber-400 mb-4" strokeWidth={1.5} />
                </motion.div>
                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 text-sm font-bold mb-3">{airport.code}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{airport.name}</h3>
                <p className="text-white/60 text-sm">{airport.city}</p>
                <p className="text-amber-400/80 text-sm mt-2">{airport.time}</p>
                <p className="text-white/40 text-xs mt-3 hover:text-amber-400">Visit official site →</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose Our Airport Service
              </h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {features.map((feature) => (
                  <motion.div 
                    key={feature} 
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black border border-amber-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="w-8 h-8 text-amber-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Complimentary Wait Time</h3>
                  <p className="text-white/60 text-sm">We track your flight and wait for you</p>
                </div>
              </div>
              <div className="space-y-4 text-white/70">
                {[
                  { label: "Domestic Arrivals", time: "60 minutes" },
                  { label: "International Arrivals", time: "90 minutes" },
                  { label: "Departures", time: "15 minutes" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`flex justify-between py-3 ${i < 2 ? 'border-b border-amber-500/10' : ''}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-amber-400 font-semibold">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-4 text-black" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Stress-Free Airport Travel?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black/70 mb-8"
          >
            Book your airport transfer today and experience the MSY Limo difference
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-block">
                Book Now
              </Link>
            </motion.div>
            <motion.a 
              href="tel:+18776091919" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block"
            >
              Call (877) 609-1919
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AirportPage;
