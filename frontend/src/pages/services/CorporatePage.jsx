import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, CheckCircle, Phone, ArrowRight, Users, Shield } from "lucide-react";

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

const CorporatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: Shield, title: "Confidential Service", desc: "Discreet and professional chauffeurs" },
    { icon: Briefcase, title: "Corporate Accounts", desc: "Simplified billing and reporting" },
    { icon: Users, title: "Group Transportation", desc: "Coordinate multiple vehicles" },
  ];

  const features = [
    "Wi-Fi equipped vehicles",
    "Priority booking for regular clients",
    "Dedicated account management",
    "Detailed trip receipts and invoicing",
    "Airport meet & greet service",
    "24/7 availability for last-minute requests",
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <section className="pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
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
                Corporate Transportation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Professional executive car service designed for business travelers. Perfect for client meetings, 
                corporate events, roadshows, and daily executive commutes throughout the Greater New Orleans area.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="https://book.mylimobiz.com/v4/92transp"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2"
                >
                  Book Corporate Travel <ArrowRight className="w-4 h-4" />
                </motion.a>
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
                src="https://images.unsplash.com/photo-1769787301187-0fab290ba2f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBleGVjdXRpdmUlMjBidXNpbmVzcyUyMGxpbW91c2luZSUyMGNoYXVmZmV1cnxlbnwwfHx8fDE3NzEwOTA3ODR8MA&ixlib=rb-4.1.0&q=85" 
                alt="Executive in suit with luxury black SUV fleet for corporate transportation in New Orleans" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-amber-500" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Corporate Benefits
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 border border-amber-500/20 p-8 rounded-xl text-center hover:border-amber-500/40 transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.15 }}
                >
                  <benefit.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{benefit.title}</h3>
                <p className="text-white/60">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-medium mb-6 text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                Executive Service Features
              </h2>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {features.map((feature, i) => (
                  <motion.li 
                    key={feature} 
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/50 border border-amber-500/20 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Set Up a Corporate Account
              </h3>
              <motion.a 
                href="https://book.mylimobiz.com/v4/92transp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center py-4 rounded-xl font-semibold hover:from-amber-400 hover:to-amber-500 transition-all mb-4"
              >
                Online Reservations
              </motion.a>
              <p className="text-center text-white/70 text-sm">Or call us 24/7</p>
              <a href="tel:+16674000092" className="block text-center text-2xl font-semibold mt-2 text-amber-400 hover:text-amber-300 transition-colors">(667) 400-0092</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-amber-500" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Related Services
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { to: "/services/airport-transportation", title: "Airport Transportation", desc: "MSY Airport transfers" },
              { to: "/services/hourly-charter", title: "Hourly Charter", desc: "Flexible by-the-hour service" },
              { to: "/fleet", title: "Our Fleet", desc: "View our luxury vehicles" },
              { to: "/contact", title: "Get a Quote", desc: "Contact us for pricing" },
            ].map((item) => (
              <motion.div key={item.to} variants={itemVariants} whileHover={{ y: -5 }}>
                <Link to={item.to} className="block bg-black/50 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/40 transition-all group">
                  <h3 className="font-semibold text-amber-500 group-hover:text-amber-400 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporatePage;
