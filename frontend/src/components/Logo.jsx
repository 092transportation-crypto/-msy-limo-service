import { Link } from "react-router-dom";

// Brand logo: the original MSY Limo Service mark (gold skyline/limo emblem)
// paired with the gold "MSY LIMO SERVICE" wordmark.
const Logo = ({ className = "", testId = "text-logo" }) => (
  <Link
    to="/"
    data-testid={testId}
    aria-label="MSY Limo Service — Home"
    className={`inline-flex items-center gap-3 leading-none select-none ${className}`}
  >
    <img
      src="/images/msy-logo.png"
      alt=""
      aria-hidden="true"
      className="h-14 w-14 md:h-16 md:w-16 rounded-full flex-shrink-0"
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
    <span className="inline-flex flex-col items-start">
      <span
        className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        MSY
      </span>
      <span className="mt-1 text-[0.6rem] md:text-[0.68rem] font-semibold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
        Limo Service
      </span>
    </span>
  </Link>
);

export default Logo;
