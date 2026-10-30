import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/localBusinessSchema";
import { Clock, CheckCircle, Phone, ArrowRight, MapPin, Wine } from "lucide-react";
import PageFaq from "@/components/PageFaq";
import { ensureFiveFaqs } from "@/lib/faqExtras";

const HOURLY_FAQS = ensureFiveFaqs([
  { q: "What is the minimum booking for hourly charter?", a: "Hourly charters start at a 3-hour minimum with a dedicated chauffeur and unlimited stops within our service area." },
  { q: "What are hourly charters used for?", a: "Plantation and city tours, shopping days, multi-stop business schedules, medical appointments, and any itinerary where you want the vehicle to stay with you." },
  { q: "Can I change the itinerary during the charter?", a: "Yes — your chauffeur is at your disposal for the booked time, and route changes on the fly are part of the service." },
  { q: "Which vehicles are available by the hour?", a: "Every vehicle in our fleet: executive sedans, Lincoln Navigator SUVs, Mercedes Sprinter vans, and stretch limousines. Call (877) 609-1919 for hourly rates." },
  { q: "How much does hourly charter cost?", a: "Roughly $85–$115 per hour for a luxury sedan and $115–$150 per hour for a premium SUV as a 2026 benchmark, with Sprinter vans and limousines quoted individually by date. See our limo rental cost guide for the full breakdown." },
  { q: "Is hourly charter cheaper than booking several separate rides?", a: "Usually, once your day includes two or more stops. For a single trip with no detours, point-to-point pricing is typically the better value instead." },
  { q: "Can we book hourly charter for a birthday, bachelorette party or night out?", a: "Yes — this is one of the most common hourly bookings. One chauffeur and vehicle stay with your group from the first stop to the last." },
  { q: "Do you offer hourly charter for out-of-town day trips?", a: "Yes, including River Road plantation tours, Northshore day trips and swamp tours — often a better value than renting a car for a single day." },
], { slug: "hourly" });
const hourlyFaqSchema = buildFaqSchema(HOURLY_FAQS);

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

const HourlyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const uses = [
    { icon: MapPin, title: "Multiple Stops", desc: "Shopping, errands, appointments" },
    { icon: Wine, title: "Wine Tours", desc: "Louisiana Plantation tours" },
    { icon: Clock, title: "All-Day Service", desc: "Chauffeur at your disposal" },
  ];

  const features = [
    "Minimum 3-hour booking",
    "Unlimited stops within service area",
    "Dedicated chauffeur for your trip",
    "Flexible scheduling changes",
    "All vehicle types available",
    "Corporate accounts welcome",
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Hourly Limo Charter New Orleans | 3-Hour Minimum, Set Rate"
        description="One chauffeur, one vehicle, your itinerary: hourly charter for tours, multi-stop days & nights out at a flat rate confirmed upfront. (877) 609-1919."
        path="/services/hourly-charter"
        schema={[LOCAL_BUSINESS_SCHEMA, hourlyFaqSchema]}
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
                <Clock className="w-5 h-5 text-amber-400" />
                <p className="text-amber-400 text-sm tracking-wider">OUR SERVICES</p>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hourly Charter Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                Flexible point-to-point and hourly charter service. Ideal for shopping trips, wine tours, 
                multiple stops, or when you need a dedicated chauffeur at your disposal throughout 
                Greater New Orleans, Kenner, Metairie, and Louisiana.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="/booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-amber-400 hover:to-amber-500 transition-all inline-flex items-center gap-2"
                >
                  Book Hourly Service <ArrowRight className="w-4 h-4" />
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
                src="/images/stock/u-1739789750796.webp" 
                alt="Hourly chauffeur service New Orleans" 
                className="rounded-2xl shadow-2xl shadow-amber-500/10 border border-amber-500/20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium mb-6 text-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How Hourly Charter Works
          </motion.h2>
          <div className="space-y-5 text-white/70 leading-relaxed">
            <p>
              Hourly charter is the service to book when your day does not fit a single point-to-point trip. Instead of booking a ride, waiting, and booking another ride, you reserve one chauffeur and one vehicle for a block of time — a minimum of three hours — and the car stays with you for every stop on your list. That might mean a morning of plantation touring along River Road, an afternoon of shopping and errands across Metairie and Kenner, or a corporate itinerary that moves between three offices and a working lunch before the day is done.
            </p>
            <p>
              The schedule is yours to change. Unlike a fixed reservation with a single destination, hourly service lets you add a stop, extend a visit, or rearrange the order of the day as it actually unfolds. Your chauffeur waits curbside while you're inside a venue, keeps the vehicle climate-controlled and ready, and simply drives to the next address when you're ready to move — no re-booking, no second fare, no guessing whether a car will be available when you come back outside.
            </p>
            <p>
              Pricing is straightforward: a flat hourly rate by vehicle class, confirmed before you book, with the three-hour minimum covering most half-day itineraries. Longer bookings — a full day of wedding-adjacent errands, a multi-stop corporate roadshow, or an extended wine and plantation tour out of the city — are quoted the same way, by the hour, with no surprise charges for the stops in between. Call <a href="tel:+18776091919" className="text-amber-400">(877) 609-1919</a> with your rough itinerary and we'll confirm the vehicle and the rate before your day begins.
            </p>
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
            Popular Uses
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {uses.map((use, index) => (
              <motion.div 
                key={use.title} 
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
                  <use.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{use.title}</h3>
                <p className="text-white/60">{use.desc}</p>
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
                Hourly Charter Features
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
                Book Hourly Charter
              </h3>
              <motion.a 
                href="/booking"
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

      {/* SEO: when hourly beats point-to-point */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>
            When Hourly Charter Beats a Single Point-to-Point Ride
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hourly, as-directed service earns its cost back the moment your day includes more than one stop. A single
            airport transfer or a one-way trip to dinner is almost always cheaper as a flat-rate{" "}
            <Link to="/point-to-point-car-service-new-orleans" className="text-amber-400 hover:text-amber-300">point-to-point ride</Link>, but
            a River Road plantation day, a wedding that moves between a venue and a reception, or a night out that touches two or three bars
            crosses the value line fast — one chauffeur, one vehicle, and no per-trip minimum charged each time you move.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our most common hourly bookings are{" "}
            <Link to="/river-road-plantation-tour-transportation" className="text-amber-400 hover:text-amber-300">River Road plantation tours</Link>,{" "}
            <Link to="/new-orleans-sightseeing-tour-car-service" className="text-amber-400 hover:text-amber-300">private sightseeing days</Link>,
            corporate{" "}
            <Link to="/new-orleans-corporate-roadshow-transportation" className="text-amber-400 hover:text-amber-300">roadshows</Link> that
            move between offices, and wedding days that run from getting-ready to the getaway car. For a group celebration, hourly charter
            also covers <Link to="/new-orleans-bachelorette-party-transportation" className="text-amber-400 hover:text-amber-300">bachelorette</Link> and{" "}
            <Link to="/new-orleans-bachelor-party-transportation" className="text-amber-400 hover:text-amber-300">bachelor</Link> party
            nights where the vehicle needs to stay with the group from the first stop to the last.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Not sure which pricing model fits your day? Tell us your stops and approximate timing when you call{" "}
            <a href="tel:+18776091919" className="text-amber-400 hover:text-amber-300">(877) 609-1919</a>, and we'll quote whichever — hourly
            or point-to-point — actually works out cheaper for your itinerary.
          </p>
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
              { to: "/services/airport-transportation", title: "Airport Transfer", desc: "MSY Airport service" },
              { to: "/services/corporate-transportation", title: "Corporate Travel", desc: "Executive transportation" },
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

      <PageFaq faqs={HOURLY_FAQS} />

      {/* Related hourly & touring pages */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-medium mb-8 text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hourly Charter, By Itinerary
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/new-orleans-party-bus-transportation", label: "Party Bus Transportation" },
              { to: "/new-orleans-graduation-limo-service", label: "Graduation Limo Service" },
              { to: "/city-park-nola-transportation", label: "City Park" },
              { to: "/national-wwii-museum-transportation", label: "National WWII Museum" },
              { to: "/tulane-university-transportation", label: "Tulane University" },
              { to: "/services/wedding-limo", label: "Wedding Limo" },
              { to: "/point-to-point-car-service-new-orleans", label: "Point-to-Point Car Service" },
              { to: "/blog/new-orleans-limo-rental-cost-guide-hourly-daily-rates", label: "Limo Rental Cost Guide" },
              { to: "/new-orleans-birthday-party-limo-service", label: "Birthday Party Limo Service" },
              { to: "/new-orleans-sightseeing-tour-car-service", label: "Private Sightseeing Tour Car Service" },
              { to: "/new-orleans-food-tour-restaurant-hopping-transportation-guide", label: "Food Tour Transportation Guide" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-sm text-amber-400 font-medium hover:bg-amber-500/20 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HourlyPage;
