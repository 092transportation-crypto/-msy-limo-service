import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Ship, Clock, CheckCircle, Phone, ArrowRight, Anchor, MapPin, Calendar, Waves } from "lucide-react";

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

const CruisePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cruiseLines = [
    { name: "Carnival Cruise Line", ships: "Carnival Glory, Carnival Valor, Carnival Liberty", schedule: "Year-round from NOLA" },
    { name: "Norwegian Cruise Line", ships: "Norwegian Breakaway", schedule: "Seasonal Caribbean cruises" },
    { name: "Royal Caribbean", ships: "Various vessels", schedule: "Select Gulf sailings" },
    { name: "Disney Cruise Line", ships: "Disney Magic, Disney Wonder", schedule: "Family Caribbean voyages" },
  ];

  const destinations = [
    { name: "Cozumel, Mexico", duration: "4-5 day cruises", highlight: "Most popular destination" },
    { name: "Caribbean Islands", duration: "7-day cruises", highlight: "Jamaica, Grand Cayman, Honduras" },
    { name: "Western Caribbean", duration: "5-7 day cruises", highlight: "Belize, Costa Maya, Progreso" },
    { name: "Bahamas", duration: "6-8 day cruises", highlight: "Nassau, Private Islands" },
  ];

  const features = [
    "Direct drop-off at Julia Street Cruise Terminal",
    "Luggage assistance to the curb",
    "Meet & greet service available",
    "Professional uniformed chauffeurs",
    "Complimentary bottled water & Wi-Fi",
    "Real-time communication",
    "Flexible scheduling for any sail time",
    "Group transportation for large parties",
  ];

  const services = [
    {
      icon: Ship,
      title: "Port Transfers",
      description: "Seamless door-to-door service to the Port of New Orleans"
    },
    {
      icon: MapPin,
      title: "Hotel & Home Pickup",
      description: "We pick you up anywhere in Greater New Orleans"
    },
    {
      icon: Calendar,
      title: "Pre-Cruise City Tours",
      description: "Explore NOLA before your cruise departs"
    },
    {
      icon: Anchor,
      title: "Post-Cruise Transfers",
      description: "Airport or hotel transfers when you return"
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
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
                NEW ORLEANS CRUISE PORT
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                New Orleans Cruise Transportation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Start your Caribbean adventure in style with luxury transportation to the 
                Port of New Orleans. Located on the mighty Mississippi River, the Julia Street 
                Terminal is your gateway to unforgettable cruises. Let us handle the ride while 
                you prepare for paradise.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2">
                    Book Port Transfer <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.a 
                  href="tel:+16674000092" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> (667) 400-0092
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
                src="https://images.unsplash.com/photo-1710615209322-77731e33d4a6?auto=format&fit=crop&w=600&q=80" 
                alt="New Orleans cruise ship transportation Port of New Orleans" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Port Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cruise Lines from New Orleans
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The Port of New Orleans is one of the top cruise ports in the Gulf Coast, 
              offering year-round departures to the Caribbean, Mexico, and beyond.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cruiseLines.map((cruise, index) => (
              <motion.div 
                key={cruise.name} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-black/50 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/40 transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Ship className="w-10 h-10 text-amber-400 mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{cruise.name}</h3>
                <p className="text-white/60 text-sm mb-2">{cruise.ships}</p>
                <p className="text-amber-400/80 text-xs">{cruise.schedule}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Popular Cruise Destinations from NOLA
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.name} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gray-900/50 border border-amber-500/10 p-6 rounded-xl text-center hover:border-amber-500/30 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Waves className="w-7 h-7 text-amber-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{dest.name}</h3>
                <p className="text-amber-400 text-sm mb-1">{dest.duration}</p>
                <p className="text-white/60 text-xs">{dest.highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
            Our Cruise Port Services
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-black/50 border border-amber-500/10 p-6 rounded-xl text-center hover:border-amber-500/30 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <service.icon className="w-7 h-7 text-amber-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
                Why Choose MSY Limo for Your Cruise
              </h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {features.map((feature, i) => (
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
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1702722710064-02a7d4730197?auto=format&fit=crop&w=600&q=80" 
                alt="Luxury cruise ship Caribbean vacation from New Orleans" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 border border-amber-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Anchor className="w-8 h-8 text-amber-400" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Cruise Port Transfer Rates</h3>
                <p className="text-white/60 text-sm">Flat rates, no surge pricing</p>
              </div>
            </div>
            <div className="space-y-4 text-white/70">
              {[
                { route: "French Quarter → Julia Street Terminal", price: "From $55" },
                { route: "MSY Airport → Julia Street Terminal", price: "From $75" },
                { route: "Garden District → Julia Street Terminal", price: "From $50" },
                { route: "Metairie/Kenner → Julia Street Terminal", price: "From $65" },
              ].map((item, i) => (
                <motion.div 
                  key={item.route}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex justify-between py-3 ${i < 3 ? 'border-b border-amber-500/10' : ''}`}
                >
                  <span>{item.route}</span>
                  <span className="text-amber-400 font-semibold">{item.price}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-6">* Rates shown for sedan. SUV and group rates available. Contact us for a custom quote.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Set Sail from New Orleans?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black/70 mb-8"
          >
            Book your cruise port transfer and start your vacation the moment you leave home
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
                Book Cruise Transfer
              </Link>
            </motion.div>
            <motion.a 
              href="tel:+16674000092" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-block"
            >
              Call (667) 400-0092
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default CruisePage;
