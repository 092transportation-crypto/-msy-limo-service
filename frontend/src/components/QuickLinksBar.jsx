import { motion } from "framer-motion";
import { FileText, HelpCircle, Car, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { icon: FileText, label: "GET QUOTE", href: "/contact", isLink: true },
  { icon: HelpCircle, label: "FAQ", href: "/faq", isLink: true },
  { icon: Car, label: "FLEET", href: "/fleet", isLink: true },
  { icon: Phone, label: "CALL NOW", href: "tel:+18776091919", isLink: false }
];

const QuickLinksBar = () => {
  return (
    <section className="bg-black border-y border-amber-500/20" data-testid="quicklinks-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            const isFirst = index === 0;
            
            const className = `flex items-center justify-center gap-3 py-5 px-4 transition-all border-r border-amber-500/20 last:border-r-0 ${
              isFirst 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500' 
                : 'text-white hover:bg-amber-500/10 hover:text-amber-400'
            }`;
            
            const content = (
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm font-bold tracking-wider">{link.label}</span>
              </motion.div>
            );
            
            if (link.isLink) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={className}
                  data-testid={`quicklink-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {content}
                </Link>
              );
            }
            
            return (
              <a
                key={link.label}
                href={link.href}
                className={className}
                data-testid={`quicklink-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksBar;
