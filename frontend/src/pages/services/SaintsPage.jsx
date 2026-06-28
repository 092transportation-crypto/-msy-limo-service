import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Clock, CheckCircle, Phone, ArrowRight, MapPin, Users, Car, Calendar, Star } from "lucide-react";

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

const SaintsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameServices = [
    {
      icon: Car,
      title: "Game Day Transfers",
      description: "Luxury transportation to and from the Caesars Superdome for all Saints home games"
    },
    {
      icon: Users,
      title: "Group Transportation",
      description: "SUVs and party buses for tailgate groups of any size"
    },
    {
      icon: Calendar,
      title: "Season Packages",
      description: "Discounted rates for season ticket holders with recurring bookings"
    },
    {
      icon: MapPin,
      title: "Tailgate Drop-off",
      description: "We'll drop you at your preferred tailgate location"
    },
  ];

  const features = [
    "Door-to-door service from your home or hotel",
    "Skip the parking hassle and traffic",
    "Professional chauffeurs who know game day routes",
    "Complimentary bottled water & phone chargers",
    "Flexible pickup times before and after the game",
    "Wait service available during the game",
    "Perfect for corporate entertaining",
    "Handicap accessible vehicles available",
  ];

  const venues = [
    { 
      name: "Caesars Superdome", 
      event: "New Orleans Saints NFL Games",
      address: "1500 Sugar Bowl Dr, New Orleans, LA 70112",
      capacity: "73,000 fans",
      link: "https://www.superdome.com"
    },
    { 
      name: "Smoothie King Center", 
      event: "New Orleans Pelicans NBA Games",
      address: "1501 Dave Dixon Dr, New Orleans, LA 70113",
      capacity: "16,867 fans",
      link: "https://www.smoothiekingcenter.com"
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 bg-black text-white relative overflow-hidden">
        {/* Saints black and gold accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-black to-amber-500"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-amber-400 text-sm tracking-wider mb-4"
              >
                WHO DAT NATION
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                New Orleans Saints Game Day Transportation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8"
              >
                Arrive at the Caesars Superdome in style. Skip the parking nightmare and traffic 
                with our premium game day limo service. Perfect for Saints fans, corporate 
                groups, and visitors experiencing the electric atmosphere of Who Dat Nation.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-bold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2">
                    Book Game Day Ride <ArrowRight className="w-4 h-4" />
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
                src="https://images.unsplash.com/photo-1706092647576-8c4ce0229954?auto=format&fit=crop&w=600&q=80" 
                alt="New Orleans Saints game day limo transportation Superdome" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
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
            New Orleans Sports Venues
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {venues.map((venue, index) => (
              <motion.a 
                href={venue.link}
                target="_blank"
                rel="noopener noreferrer"
                key={venue.name} 
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
                  <Trophy className="w-10 h-10 text-amber-400 mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{venue.name}</h3>
                <p className="text-amber-400 text-sm mb-2">{venue.event}</p>
                <p className="text-white/60 text-sm mb-1">{venue.address}</p>
                <p className="text-white/40 text-sm">Capacity: {venue.capacity}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
            Game Day Services
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {gameServices.map((service, index) => (
              <motion.div 
                key={service.title} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gray-900/50 border border-amber-500/10 p-6 rounded-xl text-center hover:border-amber-500/30 transition-all"
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
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1767584413129-2ad2941b7e46?auto=format&fit=crop&w=600&q=80" 
                alt="Football stadium New Orleans Saints game transportation" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Saints Fans Choose MSY Limo
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
          </div>
        </div>
      </section>

      {/* Game Day Package */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 border border-amber-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-8 h-8 text-amber-400" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Game Day Packages</h3>
                <p className="text-white/60 text-sm">All-inclusive transportation for Saints fans</p>
              </div>
            </div>
            <div className="space-y-4 text-white/70">
              {[
                { package: "Standard Game Day (Sedan)", desc: "1-3 passengers", price: "From $150 round-trip" },
                { package: "Premium Game Day (SUV)", desc: "1-6 passengers", price: "From $250 round-trip" },
                { package: "Group Package (Sprinter)", desc: "7-14 passengers", price: "From $450 round-trip" },
                { package: "VIP Tailgate Package", desc: "Includes 4-hour wait time", price: "From $400" },
              ].map((item, i) => (
                <motion.div 
                  key={item.package}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex flex-col sm:flex-row sm:justify-between py-3 ${i < 3 ? 'border-b border-amber-500/10' : ''}`}
                >
                  <div>
                    <span className="text-white font-medium">{item.package}</span>
                    <span className="text-white/50 text-sm ml-2">({item.desc})</span>
                  </div>
                  <span className="text-amber-400 font-semibold">{item.price}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-6">* Prices may vary on high-demand games. Book early for playoffs!</p>
          </motion.div>
        </div>
      </section>

      {/* Who Dat CTA */}
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
            Who Dat Ready to Ride?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black/70 mb-8"
          >
            Book your Saints game day transportation and focus on cheering for the black and gold!
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
                Book Game Day Ride
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

export default SaintsPage;
