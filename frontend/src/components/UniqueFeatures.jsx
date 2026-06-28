import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Shield, Clock, Star, Smartphone, CreditCard, Car, Users, Award, Headphones } from "lucide-react";

const UniqueFeatures = () => {
  const features = [
    {
      icon: Plane,
      title: "Real-Time Flight Tracking",
      description: "We monitor your flight status and adjust pickup times automatically. No extra charge for delays.",
      highlight: "FREE",
      color: "from-amber-400 to-yellow-300",
      link: "/services/airport-transportation"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All chauffeurs are professionally licensed with comprehensive insurance coverage.",
      highlight: "100% SAFE",
      color: "from-green-400 to-emerald-300",
      link: "/about"
    },
    {
      icon: Clock,
      title: "60-Min Complimentary Wait",
      description: "For airport pickups, enjoy 60 minutes of complimentary wait time for domestic flights.",
      highlight: "INCLUDED",
      color: "from-amber-400 to-yellow-300",
      link: "/services/airport-transportation"
    },
    {
      icon: Star,
      title: "Meet & Greet Service",
      description: "Your chauffeur greets you in arrivals with a personalized sign bearing your name.",
      highlight: "VIP",
      color: "from-purple-400 to-pink-300",
      link: "/services/airport-transportation"
    },
    {
      icon: Smartphone,
      title: "Live Ride Tracking",
      description: "Track your chauffeur in real-time. Share your ETA with family or colleagues.",
      highlight: "SMART",
      color: "from-amber-400 to-orange-300",
      link: "/contact"
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description: "All-inclusive rates with no hidden fees. Pay securely online or in-vehicle.",
      highlight: "NO SURPRISES",
      color: "from-amber-400 to-yellow-300",
      link: "/contact"
    },
    {
      icon: Car,
      title: "Luxury Fleet",
      description: "Mercedes, Cadillac Escalade, Lincoln, Stretch Limos - all meticulously maintained.",
      highlight: "PREMIUM",
      color: "from-amber-400 to-yellow-300",
      link: "/fleet"
    },
    {
      icon: Users,
      title: "Group Transportation",
      description: "From intimate couples to large corporate groups - we have the perfect vehicle.",
      highlight: "1-50 PAX",
      color: "from-amber-400 to-orange-300",
      link: "/services/corporate-transportation"
    },
    {
      icon: Award,
      title: "5-Star Service",
      description: "Consistently rated 5 stars by our valued clients. Excellence is our standard.",
      highlight: "TOP RATED",
      color: "from-yellow-400 to-amber-300",
      link: "/about"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock for any assistance you need.",
      highlight: "ALWAYS ON",
      color: "from-rose-400 to-pink-300",
      link: "/contact"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose MSY Limo
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Premium Features, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Exceptional Service
            </span>
          </motion.h2>
          <motion.p 
            className="text-white/60 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Experience the difference with our industry-leading amenities and professional service standards
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <Link to={feature.link} key={feature.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-5 hover:border-amber-500/50 transition-all group cursor-pointer h-full ${
                  index < 5 ? '' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.div 
                    className={`w-11 h-11 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10 }}
                  >
                    <feature.icon className="w-5 h-5 text-black" />
                  </motion.div>
                  <motion.span 
                    className="px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-[10px] font-bold text-amber-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.highlight}
                  </motion.span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10K+", label: "Happy Clients", link: "/about" },
            { number: "50+", label: "Luxury Vehicles", link: "/fleet" },
            { number: "35+", label: "Cities Covered", link: "/contact" },
            { number: "24/7", label: "Availability", link: "/contact" }
          ].map((stat, i) => (
            <Link to={stat.link} key={stat.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center hover:scale-105 transition-transform"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/60 text-sm hover:text-amber-400 transition-colors">{stat.label}</div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
