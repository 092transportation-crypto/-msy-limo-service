import { ShieldCheck, Zap, BadgeDollarSign } from "lucide-react";

// Compact trust line shown near CTAs and booking forms.
const signals = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Zap, label: "Instant Confirmation" },
  { icon: BadgeDollarSign, label: "Flat Rates No Surge" },
];

const TrustSignals = ({ className = "", center = true }) => (
  <div
    data-testid="trust-signals"
    className={`flex flex-wrap items-center gap-x-4 gap-y-1 ${center ? "justify-center" : ""} ${className}`}
  >
    {signals.map(({ icon: Icon, label }, i) => (
      <span key={label} className="flex items-center gap-1.5 text-xs sm:text-sm text-white/70 whitespace-nowrap">
        <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        {label}
        {i < signals.length - 1 && <span className="text-amber-500/60 ml-2.5 hidden sm:inline">•</span>}
      </span>
    ))}
  </div>
);

export default TrustSignals;
