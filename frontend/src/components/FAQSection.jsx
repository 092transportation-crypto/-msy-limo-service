import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqData = [
  {
    id: "faq-1",
    question: "How do I book MSY airport car service?",
    answer: "Book online through our reservation system or call (877) 609-1919 — our dispatch desk answers 24/7. Provide your flight number and we handle the rest, including real-time flight tracking and complimentary wait time at Louis Armstrong International."
  },
  {
    id: "faq-2",
    question: "What makes MSY Limo different from a taxi or rideshare?",
    answer: "Flat rates confirmed at booking with no surge pricing, a guaranteed reserved chauffeur, late-model luxury vehicles, and commercial insurance. We are a Licensed & Insured Louisiana Carrier — every trip is driven by a background-checked, professionally trained chauffeur."
  },
  {
    id: "faq-3",
    question: "What areas do you serve around New Orleans?",
    answer: "The entire Greater New Orleans metro and beyond: downtown, the French Quarter, Metairie, Kenner, Gretna and the West Bank, Slidell, Mandeville, Covington, Hammond, and long-distance transfers to Baton Rouge and the Gulf Coast."
  },
  {
    id: "faq-4",
    question: "What happens if my flight into MSY is delayed?",
    answer: "Nothing changes for you. We track every inbound flight in real time and adjust your pickup automatically, with 60 minutes of complimentary wait time on domestic arrivals and 90 minutes on international arrivals."
  },
  {
    id: "faq-5",
    question: "Which vehicles are best for weddings or group nights out?",
    answer: "For weddings, our stretch limousines accommodate the whole wedding party. For family outings or group celebrations, the Cadillac Escalade seats up to 6 and the Mercedes Sprinter van carries up to 13 passengers in comfort."
  },
  {
    id: "faq-6",
    question: "Are there hidden charges or taxes on top of my quote?",
    answer: "No. We believe in transparent pricing — all taxes and fees are included in the flat rate you confirm at booking. There are no hidden charges or surprise fees, regardless of traffic, events, or time of day."
  },
  {
    id: "faq-7",
    question: "Do you provide corporate car service at MSY airport?",
    answer: "Yes. We offer corporate accounts with priority booking, consolidated monthly billing, and meet-and-greet service for arriving clients. Hourly charters are available for roadshows and multi-stop business days."
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
            MSY Airport Car Service & Chauffeur Questions
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
