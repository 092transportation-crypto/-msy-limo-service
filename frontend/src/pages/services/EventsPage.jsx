import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { PartyPopper, CheckCircle, Phone, ArrowRight, Music, GraduationCap, Star } from "lucide-react";

const eventsFaqSchema = buildFaqSchema([
  { q: "Do you provide limo service for proms and graduations?", a: "Yes — prom and graduation packages include a professional chauffeur, party-ready vehicles, and parent-approved safety standards from a Licensed & Insured Louisiana Carrier." },
  { q: "Can you take us to concerts and games at the Superdome or Smoothie King Center?", a: "Absolutely. We drop you at the entrance and schedule a post-event pickup so you skip parking entirely — including Saints game days and major concerts." },
  { q: "How late do you operate for events?", a: "24/7. Late-night pickups after galas, festivals, and nights out are a core service — your ride home is scheduled before you even go out." },
  { q: "Is there surge pricing during festivals like Mardi Gras?", a: "Never. Event transportation is flat-rate, confirmed at booking. We do recommend reserving early for Mardi Gras, Jazz Fest, and Essence Fest weekends." },
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

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    { icon: GraduationCap, title: "Prom & Graduation", desc: "Make prom night unforgettable" },
    { icon: Music, title: "Concerts & Sports", desc: "VIP arrival at events" },
    { icon: Star, title: "Galas & Parties", desc: "Arrive in style to any celebration" },
  ];

  const features = [
    "Late-night availability",
    "Safe, reliable transportation",
    "Party-ready stretch limousines",
    "Professional chauffeurs",
    "Complimentary refreshments",
    "Flexible pickup scheduling",
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Special Event Limo New Orleans | MSY Limo Service"
        description="Limo service for proms, concerts, galas & nights out in New Orleans. Flat rates, late-night pickups & professional chauffeurs. Call (877) 609-1919."
        path="/services/special-events"
        schema={[eventsFaqSchema]}
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
                <PartyPopper className="w-5 h-5 text-amber-400" />
                <p className="text-amber-400 text-sm tracking-wider">OUR SERVICES</p>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Special Events & Night Out
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Arrive in style for concerts, galas, proms, sports events, and nights out. 
                Safe, reliable transportation so you can celebrate without worry throughout 
                Greater New Orleans and Louisiana.
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
                  Book Event Transportation <ArrowRight className="w-4 h-4" />
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
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" 
                alt="Special events limo service New Orleans" 
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
            Events We Cover
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div 
                key={event.title} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 border border-amber-500/20 p-8 rounded-xl text-center hover:border-amber-500/40 transition-all"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.15 }}
                >
                  <event.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{event.title}</h3>
                <p className="text-white/60">{event.desc}</p>
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
                Event Service Features
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
                Book Your Event Transportation
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
              { to: "/services/wedding-transportation", title: "Wedding Limo", desc: "Elegant wedding transportation" },
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

export default EventsPage;
