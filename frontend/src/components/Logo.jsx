import { Link } from "react-router-dom";

// Text logo: bold gold "MSY" with "LIMO SERVICE" lettered underneath.
// Replaces the old hosted image logo (dead external URL).
const Logo = ({ className = "", testId = "text-logo" }) => (
  <Link
    to="/"
    data-testid={testId}
    aria-label="MSY Limo Service — Home"
    className={`inline-flex flex-col items-start leading-none select-none ${className}`}
  >
    <span
      className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      MSY
    </span>
    <span className="mt-1 text-[0.6rem] md:text-[0.68rem] font-semibold tracking-[0.32em] uppercase text-white/85">
      Limo Service
    </span>
  </Link>
);

export default Logo;
