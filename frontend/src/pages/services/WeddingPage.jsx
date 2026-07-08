import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { Heart, CheckCircle, Phone, ArrowRight, Sparkles, Users } from "lucide-react";

const weddingFaqSchema = buildFaqSchema([
  { q: "How far in advance should we book wedding transportation?", a: "We recommend 2 to 4 weeks minimum, and earlier for peak wedding season and festival weekends in New Orleans. Multiple-vehicle coordination books up fastest." },
  { q: "Can you coordinate vehicles for the whole wedding party?", a: "Yes — a luxury sedan for the couple, stretch limousine for the bridal party, and Sprinter shuttles for guests, all coordinated on one timeline with one point of contact." },
  { q: "Do you decorate the wedding vehicle?", a: "Decorated vehicles are available upon request, along with red carpet service and a complimentary champagne toast for the newlyweds." },
  { q: "Which New Orleans wedding venues do you serve?", a: "All of them — from French Quarter courtyards and Garden District estates to Northshore venues in Covington and Mandeville. We plan routes and timing around your ceremony schedule." },
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

const WeddingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    { title: "Bride & Groom", desc: "Luxury sedan for the newlyweds", vehicle: "Mercedes-Benz S-Class" },
    { title: "Wedding Party", desc: "Stretch limo for the bridal party", vehicle: "Stretch Limousine" },
    { title: "Guest Shuttle", desc: "Group transport for guests", vehicle: "Mercedes Sprinter" },
  ];

  const features = [
    "Complimentary champagne toast",
    "Decorated vehicles upon request",
    "Red carpet service",
    "Professional uniformed chauffeurs",
    "Multiple vehicle coordination",
    "Flexible scheduling for photos",
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Wedding Limo New Orleans | MSY Limo Service"
        description="Elegant wedding limo service in New Orleans — stretch limos, luxury sedans & guest shuttles with champagne toast and red carpet. Call (877) 609-1919."
        path="/services/wedding-limo"
        schema={[weddingFaqSchema]}
      />
      <Navigation />
      
      <section className="pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <p className="text-amber-400 text-sm tracking-wider">OUR SERVICES</p>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Wedding Limo Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Make your special day unforgettable with our elegant wedding transportation. 
                From intimate elopements to grand celebrations, we provide luxury vehicles and 
                professional chauffeurs throughout New Orleans, Metairie, Kenner, and Greater Louisiana.
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
                  Book Wedding Limo <ArrowRight className="w-4 h-4" />
                </motion.a>
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
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" 
                alt="Wedding limo service New Orleans" 
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
            Wedding Packages
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div 
                key={pkg.title} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 border border-amber-500/20 p-8 rounded-xl hover:border-amber-500/40 transition-all group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.15 }}
                >
                  <Heart className="w-10 h-10 text-amber-500 mb-4 group-hover:text-amber-400 transition-colors" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{pkg.title}</h3>
                <p className="text-white/60 mb-4">{pkg.desc}</p>
                <p className="text-sm text-amber-400/80 font-medium">{pkg.vehicle}</p>
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
                Wedding Service Features
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
                Book Your Wedding Transportation
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
              <a href="tel:+18776091919" className="block text-center text-2xl font-semibold mt-2 text-amber-400 hover:text-amber-300 transition-colors">(877) 609-1919</a>
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
              { to: "/services/special-events", title: "Special Events", desc: "Proms, galas, celebrations" },
              { to: "/fleet", title: "Our Fleet", desc: "View our luxury vehicles" },
              { to: "/services/hourly-charter", title: "Hourly Charter", desc: "Flexible by-the-hour service" },
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

export default WeddingPage;
