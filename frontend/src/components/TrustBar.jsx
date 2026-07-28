import { ShieldCheck, BadgeDollarSign, Ban, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeDollarSign, label: "Flat Rates" },
  { icon: Ban, label: "No Surge Pricing" },
  { icon: Clock, label: "24/7 Available" },
];

// Solid trust bar shown immediately below the hero.
const TrustBar = () => (
  <section className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" data-testid="trust-bar">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
      {items.map(({ icon: Icon, label }, i) => (
        <span key={label} className="flex items-center gap-2 text-black font-bold text-sm sm:text-base whitespace-nowrap">
          <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2.2} />
          {label}
          {i < items.length - 1 && <span className="text-black/40 ml-4 hidden md:inline">|</span>}
        </span>
      ))}
    </div>
  </section>
);

export default TrustBar;
