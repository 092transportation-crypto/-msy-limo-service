import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { Users, Briefcase, Phone, ArrowRight, Star } from "lucide-react";

const fleetFaqSchema = buildFaqSchema([
  { q: "What vehicles are in the MSY Limo fleet?", a: "Mercedes-Benz E-Class, BMW 7 Series and Mercedes S-Class sedans, Lincoln Nautilus, Chevrolet Suburban and Cadillac Escalade SUVs, plus Mercedes Sprinter shuttles, executive vans and limos seating up to 13 passengers — all late-model and meticulously maintained." },
  { q: "Which vehicle is best for an MSY airport transfer?", a: "Sedans suit 1–3 travelers with standard luggage; the Nautilus, Suburban and Escalade fit families and extra bags; the Sprinters handle groups up to 13. We'll recommend the right class when you book." },
  { q: "Do all vehicles include amenities?", a: "Yes — leather interiors, climate control, bottled water, phone charging, and Wi-Fi on equipped vehicles, with a professional chauffeur on every trip." },
  { q: "Are the vehicles commercially insured?", a: "Yes. MSY Limo Service is a Licensed & Insured Louisiana Carrier — every vehicle carries commercial livery insurance and is driven by a background-checked chauffeur." },
]);

const fleet = [
  { id: 1, name: "Mercedes-Benz E-Class 2023+ or similar", image: "/images/mercedes-e-class.jpg", passengers: 3, luggage: 2, category: "Business Sedan", desc: "Elegant business sedan for airport transfers and corporate travel.", features: ["Leather Interior", "WiFi", "Climate Control", "Professional"] },
  { id: 2, name: "BMW 7 Series / Mercedes S-Class 2023+ or similar", image: "/images/bmw-7-series.jpg", passengers: 3, luggage: 2, category: "First Class Sedan", desc: "The pinnacle of luxury sedans for VIP travel.", features: ["Premium Leather", "Massage Seats", "Privacy Glass", "Mini Bar"] },
  { id: 3, name: "Lincoln Nautilus 2023+ or similar", image: "/images/lincoln-nautilus.jpg", passengers: 3, luggage: 4, category: "Midsize SUV", desc: "The perfect balance of comfort and practicality with extra luggage room.", features: ["Extra Luggage Room", "Leather Interior", "Climate Control", "WiFi"] },
  { id: 4, name: "Chevrolet Suburban 2023+ or similar", image: "/images/chevy-suburban.jpg", passengers: 5, luggage: 5, category: "Luxury SUV", desc: "Maximum space without compromising luxury — ideal for larger groups.", features: ["Spacious Interior", "Group Friendly", "Premium Sound", "USB Charging"] },
  { id: 5, name: "Cadillac Escalade 2023+ or similar", image: "/images/cadillac-escalade.jpg", passengers: 6, luggage: 5, category: "Premium SUV", desc: "America's premier luxury SUV for families and groups.", features: ["Spacious Interior", "Premium Sound", "TV Screens", "USB Charging"] },
  { id: 6, name: "Mercedes Sprinter 2023+ or similar", image: "/images/sprinter-shuttle-seats.jpg", passengers: 13, luggage: 13, category: "Sprinter Shuttle", desc: "Comfortable group shuttle for airport runs and events.", features: ["Group Seating", "Spacious Interior", "WiFi", "USB Ports"] },
  { id: 7, name: "Mercedes Sprinter 2023+ or similar", image: "/images/mercedes-sprinter.jpg", passengers: 13, luggage: 13, category: "Sprinter Executive", desc: "Premium executive van with captain chairs and luxury amenities.", features: ["Captain Chairs", "Conference Setup", "WiFi", "USB Ports"] },
  { id: 8, name: "Mercedes Sprinter Limo 2023+ or similar", image: "/images/limousine.jpg", passengers: 13, luggage: 13, category: "Sprinter Limo", desc: "The ultimate stretch limo experience for weddings and special occasions.", features: ["Limo Interior", "Mood Lighting", "Premium Sound", "Mini Bar"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const FleetPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Luxury Fleet | MSY Airport Car Service Vehicles"
        description="Explore the MSY Limo fleet — Mercedes sedans, Cadillac Escalade SUVs & Sprinter vans for New Orleans airport limo service. Call (877) 609-1919."
        path="/fleet"
        schema={[fleetFaqSchema]}
      />
      <Navigation />
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            YOUR JOURNEY, OUR FLEET
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Luxury Vehicles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl"
          >
            Choose from our premium fleet of late-model vehicles.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2">
              Reserve a Vehicle <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18776091919" className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> (877) 609-1919
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {fleet.map((vehicle, index) => (
              <motion.div 
                key={vehicle.id} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black/50 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <motion.img
                    src={vehicle.image}
                    alt={`${vehicle.name} luxury limo New Orleans`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6">
                  <motion.span 
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-lg mb-3"
                  >
                    {vehicle.category}
                  </motion.span>
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{vehicle.desc}</p>
                  <div className="flex items-center gap-4 mb-4 text-white/70 text-sm">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-amber-400" />{vehicle.passengers} Pax</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-amber-400" />{vehicle.luggage} Bags</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/booking" className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all">
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-black" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Ride in Style?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black/70 mb-8"
          >
            Contact us today to book your preferred vehicle
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/booking" className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-block">
                Book Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:+18776091919" className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block">
                Call (877) 609-1919
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default FleetPage;
