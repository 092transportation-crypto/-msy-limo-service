import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    title: "Corporate Executive",
    location: "New Orleans, LA",
    rating: 5,
    text: "MSY Limo Service has been our go-to for corporate transportation. Their professionalism and attention to detail are unmatched. Our clients are always impressed."
  },
  {
    id: 2,
    name: "Sarah & David Chen",
    title: "Wedding Clients",
    location: "Metairie, LA",
    rating: 5,
    text: "Our wedding day was made even more special thanks to MSY Limo. The stretch limo was immaculate, and our chauffeur went above and beyond. Highly recommend for weddings!"
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    title: "Frequent Traveler",
    location: "Kenner, LA",
    rating: 5,
    text: "I use MSY for all my airport transfers. Reliable, punctual, and the drivers are always courteous. The flight tracking feature gives me peace of mind."
  },
  {
    id: 4,
    name: "Robert Williams",
    title: "Business Owner",
    location: "French Quarter, NOLA",
    rating: 5,
    text: "When I need to make an impression on important clients, MSY Limo never disappoints. The vehicles are always spotless and the service is consistently excellent."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0F0F0F]" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our <span className="text-[#D4AF37]">Clients Say</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/20" strokeWidth={1} />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl font-light leading-relaxed mb-8 text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-[#D4AF37] font-medium text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#A3A3A3]">{testimonial.title} • {testimonial.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-amber-500/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>15+</p>
              <p className="text-sm text-[#A3A3A3] mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>10k+</p>
              <p className="text-sm text-[#A3A3A3] mt-2">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>4.9</p>
              <p className="text-sm text-[#A3A3A3] mt-2">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</p>
              <p className="text-sm text-[#A3A3A3] mt-2">Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
