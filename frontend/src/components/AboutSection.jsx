import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-black" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1687634365981-f6c4e3bba317?auto=format&fit=crop&w=600&q=80"
              alt="Luxury black SUV limousine"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1739789750796-93800f347d64?auto=format&fit=crop&w=600&q=80"
              alt="MSY Limo professional chauffeur service New Orleans service"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome to Black Urban Chauffeured Limo Company
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-6">
              We proudly claim Black Urban is the leading limousine company providing world-class 
              transportation Black Car services across the United States and beyond in other regions. 
              We aim to offer an unmatched chauffeured black limousines experience that is a testimony 
              to the epitome of refined travel.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              At the core of our service is a fleet of luxury vehicles and internationally known 
              and highly skilled chauffeurs alongside the management team to ensure unparalleled 
              comfort and elegance. Whether you're en route to a pivotal business meeting, 
              commemorating a special life event, or simply treating yourself to the luxury of 
              unhurried travel, Black Urban is passionate about enhancing your experiences.
            </p>

            <p className="text-white/70 leading-relaxed">
              At Black Urban, we go beyond merely transporting you; we aspire to make your travel 
              experience memorable and delightful. We specialize in curating bespoke transportation 
              solutions that cater impeccably to your occasion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
