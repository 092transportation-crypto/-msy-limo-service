import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-900" data-testid="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Choosing Black Urban is a decision to immerse yourself in the apex of luxury transport 
            with high-value experience throughout. Our unshaken devotion to greatness guarantees 
            a natural blend of comfort, dependability, and tailored experiences.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-5xl md:text-6xl font-bold text-amber-500 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              0k+
            </p>
            <p className="text-white/60">Happy People</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-5xl md:text-6xl font-bold text-amber-500 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              0
            </p>
            <p className="text-white/60">Overall Rating</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
