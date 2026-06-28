import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "Can a large group of passengers go on limo for professional events?",
    answer: "You can take your large team of professionals and colleagues to a business or corporate event because stretched limousines are perfect. It doesn't avoid any problem in booking multiple vehicles for larger numbers of passengers but also adds a sense of style and unity as you enter with your whole team in a limousine for professional events."
  },
  {
    id: "faq-2",
    question: "What's unique about Black Urban limo services?",
    answer: "Black Urban offers unmatched luxury transportation with professionally trained chauffeurs, a premium fleet of vehicles, and personalized service tailored to your specific needs. We go beyond transportation to create memorable experiences."
  },
  {
    id: "faq-3",
    question: "How safety is ensured for passengers of Black Urban limo services?",
    answer: "All our chauffeurs are background-checked, professionally licensed, and trained in safety protocols. Our vehicles undergo regular maintenance and safety inspections. We also provide real-time flight tracking for airport pickups."
  },
  {
    id: "faq-4",
    question: "Why are Black Urban limo services more exciting than a regular cab?",
    answer: "Unlike regular cabs, our limo services offer luxury vehicles, professional chauffeurs in formal attire, complimentary amenities, privacy, and a premium experience from door to door."
  },
  {
    id: "faq-5",
    question: "Which limos are best for wedding or family night?",
    answer: "For weddings, we recommend our stretch limousines which can accommodate the wedding party. For family nights out, the Cadillac Escalade or Mercedes Sprinter offers space and luxury for everyone."
  },
  {
    id: "faq-6",
    question: "Are there hidden charges of taxes with Black Urban limo?",
    answer: "No, we believe in transparent pricing. All taxes and fees are included in your quoted price. There are no hidden charges or surprise fees when you book with us."
  },
  {
    id: "faq-7",
    question: "Can I get a customized exterior decoration or amenities with a limo?",
    answer: "Yes! We offer customization options for special events like weddings and proms. This includes decorations, specific beverages, and other amenities upon request."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div 
      className="border-b border-amber-500/20"
      data-testid={faq.id}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-amber-500 pr-4">{faq.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-white/70 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70"
          >
            Black Urban Limousine Services
          </motion.p>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {faqData.map((faq) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openId === faq.id}
              onClick={() => handleClick(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
