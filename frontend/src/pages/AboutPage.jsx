import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { Shield, Clock, Users, Award, Phone, ArrowRight } from "lucide-react";

const aboutFaqSchema = buildFaqSchema([
  { q: "Is MSY Limo Service licensed and insured?", a: "Yes — we operate as a Licensed & Insured Louisiana Carrier with commercial insurance on every vehicle and background-checked, professionally trained chauffeurs." },
  { q: "What areas does MSY Limo Service cover?", a: "The entire Greater New Orleans metro — downtown, the French Quarter, Metairie, Kenner, the West Bank, and the Northshore — plus long-distance service to Baton Rouge, Hammond, and the Gulf Coast." },
  { q: "What services do you offer?", a: "MSY airport transfers, corporate car service, wedding limousines, cruise port transfers, special events, Saints game day transportation, and hourly charters." },
  { q: "How can I reach MSY Limo Service?", a: "Call (877) 609-1919 any time — dispatch answers 24/7 — or book online through our reservation system." },
]);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: Shield, title: "Safety First", desc: "Licensed, insured, and background-checked chauffeurs" },
    { icon: Clock, title: "Punctuality", desc: "On-time guarantee with real-time flight tracking" },
    { icon: Users, title: "Professional Service", desc: "Trained chauffeurs in formal attire" },
    { icon: Award, title: "Quality Fleet", desc: "Late-model luxury vehicles, meticulously maintained" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="About MSY Limo | New Orleans Chauffeur Service"
        description="MSY Limo Service — a Licensed & Insured Louisiana Carrier providing MSY airport car service and luxury chauffeur transportation across New Orleans."
        path="/about"
        schema={[aboutFaqSchema]}
      />
      <Navigation />
      
      <section className="pt-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            ABOUT US
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About MSY Limo Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed max-w-3xl"
          >
            MSY Limo Service is the premier luxury ground transportation provider serving New Orleans, 
            Kenner, Metairie, and the Greater Louisiana area. We are committed to delivering exceptional 
            service, safety, and comfort for every journey.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-medium mb-6 text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Trusted Transportation Partner
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                At MSY Limo Service, we understand that transportation is more than just getting from 
                point A to point B. It's about the experience, the reliability, and the peace of mind 
                that comes with knowing you're in professional hands.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Whether you're a business executive needing reliable corporate transportation, a couple 
                celebrating your wedding day, or a traveler requiring airport transfers, our team of 
                professional chauffeurs and luxury vehicles are ready to exceed your expectations.
              </p>
              <p className="text-white/70 leading-relaxed">
                Based in New Orleans, Louisiana, we proudly serve the entire Greater New Orleans region 
                including Kenner, Metairie, the French Quarter, Garden District, and beyond.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1687634365981-f6c4e3bba317?auto=format&fit=crop&w=400&q=80" 
                alt="Luxury sedan for New Orleans limo service" 
                className="rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1739789750796-93800f347d64?auto=format&fit=crop&w=400&q=80" 
                alt="Professional chauffeur in New Orleans" 
                className="rounded-lg mt-8 shadow-xl"
                whileHover={{ scale: 1.05 }}
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
            Our Values
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-black/30 border border-amber-500/20 p-8 rounded-xl shadow-lg text-center hover:border-amber-500/50 transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  <value.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{value.title}</h3>
                <p className="text-white/60">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-6 text-black" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              href="https://book.mylimobiz.com/v4/92transp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
            >
              Book Now
            </motion.a>
            <motion.a 
              href="tel:+18776091919" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-amber-400 transition-colors"
            >
              (877) 609-1919
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-center mb-12 text-amber-500" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our Services
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { to: "/services/airport-transportation", title: "Airport Transportation", desc: "MSY Airport transfers" },
              { to: "/services/corporate-transportation", title: "Corporate Travel", desc: "Executive transportation" },
              { to: "/fleet", title: "Our Fleet", desc: "View our luxury vehicles" },
            ].map((item, index) => (
              <motion.div key={item.to} variants={itemVariants}>
                <Link 
                  to={item.to} 
                  className="block bg-black/30 border border-amber-500/20 p-6 rounded-xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                >
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

export default AboutPage;
