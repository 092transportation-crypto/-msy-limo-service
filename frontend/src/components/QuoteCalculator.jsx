import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddressAutocomplete from '@/components/AddressAutocomplete';
import PayAndBook from '@/components/PayAndBook';
import { computeQuote, isShortNotice, PRICING, money, MAX_MILES, SHORT_NOTICE_HOURS } from '@/lib/pricing';
import {
  Calculator,
  Clock,
  Loader2,
  PartyPopper,
  Route,
  Car,
  CarFront,
  Bus,
  ArrowDown,
} from 'lucide-react';

// Standalone instant-quote calculator. Sits ABOVE the inquiry form on the
// booking page; broadcasts its state so the form can prefill from it and
// attach the quoted price to the submission email.

const TRIP_TYPES = [
  { value: 'Point-to-Point', icon: Route },
  { value: 'Hourly', icon: Clock },
  { value: 'Special/Event', icon: PartyPopper },
];

const VEHICLES = [
  { value: 'Business Sedan', icon: Car },
  { value: 'Mid-Size SUV', icon: CarFront },
  { value: 'Luxury SUV', icon: CarFront },
  { value: 'Premium SUV', icon: CarFront },
  { value: 'First Class', icon: Car },
  { value: 'Sprinter Van', icon: Bus },
  { value: 'Sprinter Executive', icon: Bus },
];

const inputBase =
  'peer block w-full min-h-[58px] rounded-xl border border-white/15 bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder-transparent transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500';
const labelBase =
  'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-all duration-200 ' +
  'peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-amber-400 ' +
  'peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-gray-500';

function Pill({ active, onClick, icon: Icon, children, testId }) {
  return (
    <motion.button
      type="button"
      data-testid={testId}
      aria-pressed={active}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-300 ${
        active
          ? 'border-transparent text-black'
          : 'border-white/15 text-gray-300 hover:border-amber-500/60 hover:text-white'
      }`}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            className="absolute inset-0 rounded-full gold-gradient"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <span className="relative flex items-center gap-2">
        {Icon && <Icon size={15} />} {children}
      </span>
    </motion.button>
  );
}

const QuoteCalculator = () => {
  const [tripType, setTripType] = useState('Point-to-Point');
  const [vehicle, setVehicle] = useState('Business Sedan');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  // idle | loading | ready | error
  const [distance, setDistance] = useState({ status: 'idle', miles: null });
  const timerRef = useRef(null);
  const lastPairRef = useRef('');

  const pickupTrimmed = pickup.trim();
  const dropoffTrimmed = dropoff.trim();

  useEffect(() => {
    if (tripType !== 'Point-to-Point') return undefined;
    if (pickupTrimmed.length < 4 || dropoffTrimmed.length < 4) {
      lastPairRef.current = '';
      setDistance({ status: 'idle', miles: null });
      return undefined;
    }
    const pair = `${pickupTrimmed}|${dropoffTrimmed}`;
    if (pair === lastPairRef.current) return undefined;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setDistance({ status: 'loading', miles: null });
      try {
        const res = await fetch('/api/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ origin: pickupTrimmed, destination: dropoffTrimmed }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) throw new Error(data.message || 'lookup failed');
        lastPairRef.current = pair;
        setDistance({ status: 'ready', miles: data.miles });
      } catch {
        lastPairRef.current = '';
        setDistance({ status: 'error', miles: null });
      }
    }, 800);
    return () => clearTimeout(timerRef.current);
  }, [tripType, pickupTrimmed, dropoffTrimmed]);

  const shortNotice = useMemo(
    () => isShortNotice(pickupDate, pickupTime),
    [pickupDate, pickupTime]
  );

  const quote = useMemo(
    () =>
      tripType === 'Point-to-Point' && distance.status === 'ready'
        ? computeQuote(distance.miles, vehicle, shortNotice)
        : null,
    [tripType, vehicle, distance, shortNotice]
  );

  // Broadcast state so the inquiry form below can attach the quote to its
  // submission (and prefill itself when the CTA is clicked).
  const detail = useMemo(
    () => ({
      tripType,
      vehicle,
      pickup: pickupTrimmed,
      dropoff: dropoffTrimmed,
      pickupDate,
      pickupTime,
      quote,
    }),
    [tripType, vehicle, pickupTrimmed, dropoffTrimmed, pickupDate, pickupTime, quote]
  );
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('msy:quote-state', { detail }));
  }, [detail]);

  const applyToForm = () => {
    window.dispatchEvent(new CustomEvent('msy:quote-apply', { detail }));
    const form = document.querySelector('[data-testid="inquiry-form"], form');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isP2P = tripType === 'Point-to-Point';

  return (
    <motion.div
      data-testid="quote-calculator"
      className="relative mb-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.07] to-black shadow-[0_30px_80px_-30px_rgba(245,158,11,0.35)]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-1 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient">
            <Calculator size={18} className="text-black" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">
              Instant Quote Calculator
            </h2>
            <p className="text-xs text-gray-400">
              Point-to-point trips price instantly — all-inclusive, no surge.
            </p>
          </div>
        </div>

        {/* Trust line */}
        <p
          data-testid="calc-trust-line"
          className="mb-5 flex items-center gap-2 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-2.5 text-xs font-semibold text-amber-300 sm:text-sm"
        >
          <Clock size={14} className="shrink-0 text-amber-400" />
          We reply to all quote requests in under 20 minutes.
        </p>

        {/* Trip type */}
        <div className="mb-4 flex flex-wrap gap-2">
          {TRIP_TYPES.map(({ value, icon }) => (
            <Pill
              key={value}
              icon={icon}
              active={tripType === value}
              onClick={() => setTripType(value)}
              testId={`calc-trip-${value.toLowerCase().replace(/[^a-z]+/g, '-')}`}
            >
              {value}
            </Pill>
          ))}
        </div>

        {isP2P ? (
          <>
            {/* Addresses */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative z-30">
                <AddressAutocomplete
                  id="calc-pickup"
                  testId="calc-pickup"
                  label="Pickup Location"
                  value={pickup}
                  onChange={setPickup}
                  inputClassName={inputBase}
                  labelClassName={labelBase}
                />
              </div>
              <div className="relative z-20">
                <AddressAutocomplete
                  id="calc-dropoff"
                  testId="calc-dropoff"
                  label="Drop-off Location"
                  value={dropoff}
                  onChange={setDropoff}
                  inputClassName={inputBase}
                  labelClassName={labelBase}
                />
              </div>
            </div>

            {/* Vehicle */}
            <div className="mt-4">
              <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                Vehicle Class
              </span>
              <div className="flex flex-wrap gap-2">
                {VEHICLES.map(({ value, icon }) => (
                  <Pill
                    key={value}
                    icon={icon}
                    active={vehicle === value}
                    onClick={() => setVehicle(value)}
                    testId={`calc-vehicle-${value.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {value}
                  </Pill>
                ))}
              </div>
              {PRICING[vehicle]?.model && (
                <p className="mt-2 text-xs text-gray-500">{PRICING[vehicle].model}</p>
              )}
            </div>

            {/* Pickup date & time — short-notice check */}
            <div className="mt-4">
              <span className="mb-2.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                Pickup Date &amp; Time
              </span>
              <div className="grid grid-cols-2 gap-3 sm:max-w-md">
                <input
                  type="date"
                  data-testid="calc-pickup-date"
                  aria-label="Pickup date"
                  style={{ colorScheme: 'dark' }}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/60"
                />
                <input
                  type="time"
                  data-testid="calc-pickup-time"
                  aria-label="Pickup time"
                  style={{ colorScheme: 'dark' }}
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white transition-colors duration-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/60"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-500">
                Pickups within {SHORT_NOTICE_HOURS} hours include a 20% short-notice surcharge.
              </p>
            </div>

            {/* Price */}
            <div className="mt-5 rounded-2xl border border-amber-500/25 bg-black/40 p-5" data-testid="calc-result">
              {distance.status === 'idle' ? (
                <p className="text-sm text-gray-400">
                  Enter your pickup and drop-off locations above to see your
                  instant price.
                </p>
              ) : distance.status === 'loading' ? (
                <p className="flex items-center gap-2 text-sm text-gray-300">
                  <Loader2 size={15} className="animate-spin text-amber-400" />
                  Calculating your route…
                </p>
              ) : distance.status === 'error' ? (
                <p className="text-sm text-gray-300">
                  We couldn&apos;t calculate that route — submit the form below
                  and we&apos;ll follow up with an exact quote.
                </p>
              ) : quote?.overLimit ? (
                <p className="text-sm text-gray-300" data-testid="calc-over-limit">
                  For trips over {MAX_MILES} miles, please submit your request
                  and we&apos;ll send a custom quote.
                </p>
              ) : !quote ? (
                <p className="text-sm text-gray-300">
                  Custom pricing for {vehicle} — submit the form below and
                  we&apos;ll follow up with a quote.
                </p>
              ) : (
                <div data-testid="calc-breakdown">
                  <dl className="space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-gray-400">Estimated distance</dt>
                      <dd className="tabnums text-white">{quote.miles} miles</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-gray-400">Flat rate — {quote.vehicle}</dt>
                      <dd className="tabnums text-white">{money(quote.baseFare)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-emerald-400">Instant booking discount (10%)</dt>
                      <dd className="tabnums text-emerald-400" data-testid="calc-discount">
                        -{money(quote.discount)}
                      </dd>
                    </div>
                    {quote.surcharge > 0 && (
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-amber-400">Short-notice surcharge (20%)</dt>
                        <dd className="tabnums text-amber-400" data-testid="calc-surcharge">
                          +{money(quote.surcharge)}
                        </dd>
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-gray-400">Card processing fee (3%)</dt>
                      <dd className="tabnums text-white">{money(quote.cardFee)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-amber-500/25 pt-2.5">
                      <dt className="font-bold text-white">Total</dt>
                      <dd className="tabnums text-xl font-bold text-amber-400" data-testid="calc-total">
                        {money(quote.total)}
                      </dd>
                    </div>
                  </dl>
                  <motion.button
                    type="button"
                    data-testid="calc-book-btn"
                    whileTap={{ scale: 0.97 }}
                    onClick={applyToForm}
                    className="btn-shimmer relative mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full gold-gradient text-sm font-bold text-black transition-[filter] hover:brightness-105"
                  >
                    <ArrowDown size={16} /> Book this trip — details below
                  </motion.button>
                  <PayAndBook
                    quote={quote}
                    meta={{
                      pickup: pickupTrimmed,
                      dropoff: dropoffTrimmed,
                      miles: quote.miles,
                      vehicle,
                      pickupDate,
                      pickupTime,
                    }}
                  />
                  <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-500">
                    All-inclusive flat rate — tolls, taxes &amp; gratuity. Pay
                    securely now to lock it in, or send the request below and
                    we&apos;ll confirm your ride either way.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-amber-500/25 bg-black/40 p-5" data-testid="calc-custom">
            <p className="text-sm text-gray-300">
              Custom pricing — submit your request below and we&apos;ll follow
            up with a quote.
            </p>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={applyToForm}
              className="mt-4 flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/50 px-5 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
            >
              <ArrowDown size={15} /> Continue to the request form
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuoteCalculator;
