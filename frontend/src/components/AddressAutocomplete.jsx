import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Hotel, Landmark, Loader2, MapPin, Plane, TrainFront } from "lucide-react";
import { hasGooglePlaces, prefetchGooglePlaces, providerLabel, suggest } from "@/lib/placesAutocomplete";

// Address autocomplete for the pickup / drop-off fields. Suggestions come from
// Google Maps Places when REACT_APP_GOOGLE_MAPS_API_KEY is configured, and
// from the free Photon geocoder otherwise (see lib/placesAutocomplete).
// Selecting a suggestion fills the formatted address via onChange. Renders only the input + label + dropdown; the
// caller supplies the classes so it matches the surrounding form exactly.

const QUICK_PICKS = [
  { main: "Louis Armstrong New Orleans International Airport (MSY)", secondary: "Kenner, LA", isAirport: true, source: "local" },
  { main: "Port of New Orleans Cruise Terminal", secondary: "New Orleans, LA", isAirport: false, source: "local" },
  { main: "French Quarter", secondary: "New Orleans, LA", isAirport: false, source: "local" },
];

// Bias results toward the New Orleans metro area.
const BIAS = { lat: 29.95, lng: -90.08 };


// Google Maps-style icons per place type.
const ICONS = { airport: Plane, hotel: Hotel, landmark: Landmark, transit: TrainFront, city: Building2, address: MapPin };
const SuggestionIcon = ({ item, size, className }) => {
  const Icon = item.isAirport ? Plane : ICONS[item.kind] || MapPin;
  return <Icon size={size} className={className} />;
};

const labelOf = (item) => (item.secondary ? `${item.main}, ${item.secondary}` : item.main);

const AddressAutocomplete = ({
  id,
  testId,
  label,
  value,
  onChange,
  inputClassName,
  labelClassName,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const abortRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => () => {
    if (abortRef.current) abortRef.current.abort();
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const fetchSuggestions = useCallback((q) => {
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setLoading(true);
    suggest(q, { bias: BIAS, signal: ctrl.signal })
      .then((results) => {
        if (ctrl.signal.aborted) return;
        const seen = new Set();
        setItems(results.filter((s) => { const k = labelOf(s); return k && !seen.has(k) && seen.add(k); }).slice(0, 6));
        setHighlight(-1);
        setLoading(false);
      })
      .catch((err) => {
        if (err && err.name === "AbortError") return;
        setItems([]);
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    const q = e.target.value;
    onChange(q);
    if (timerRef.current) clearTimeout(timerRef.current);
    // Google answers usefully from two characters; Photon needs three.
    if (q.trim().length < (hasGooglePlaces() ? 2 : 3)) {
      setItems([]);
      setLoading(false);
      setOpen(true);
      return;
    }
    setOpen(true);
    timerRef.current = setTimeout(() => fetchSuggestions(q.trim()), 120);
  };

  const select = (item) => {
    onChange(item.address || labelOf(item));
    setItems([]);
    setOpen(false);
  };

  const showPicks = value.trim().length === 0;
  const visible = showPicks ? QUICK_PICKS : items;

  const onKeyDown = (e) => {
    if (!open || visible.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % visible.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + visible.length) % visible.length);
    } else if (e.key === "Enter" && highlight >= 0) {
      e.preventDefault();
      select(visible[highlight]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <>
      <input
        id={id}
        data-testid={testId}
        className={`${inputClassName} pr-10`}
        placeholder={label}
        autoComplete="off"
        value={value}
        onChange={handleInput}
        onFocus={() => {
          prefetchGooglePlaces();
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onKeyDown={onKeyDown}
      />
      <label htmlFor={id} className={labelClassName}>{label} *</label>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-amber-400/70">
        {loading ? <Loader2 size={16} className="animate-spin" /> : <MapPin size={16} />}
      </span>

      <AnimatePresence>
        {open && visible.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
            style={{ backgroundColor: "#1a1a1a" }}
            data-testid={`${testId}-dropdown`}
          >
            {showPicks && (
              <div className="px-4 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                Popular pickups
              </div>
            )}
            <ul className="max-h-64 overflow-y-auto overscroll-contain">
              {visible.map((item, i) => (
                <li key={`${item.placeId || ""}${labelOf(item)}`}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      select(item);
                    }}
                    onTouchStart={() => setHighlight(i)}
                    onMouseEnter={() => setHighlight(i)}
                    className={`flex w-full items-start gap-2.5 px-4 py-3 text-left text-sm transition-colors duration-150 hover:bg-amber-500/20 hover:text-white ${
                      i === highlight ? "bg-amber-500/20 text-white" : "text-white/90"
                    }`}
                  >
                    <SuggestionIcon item={item} size={15} className="mt-0.5 shrink-0 text-amber-400" />
                    <span className="leading-snug">
                      {item.main}
                      {item.secondary && <span className="block text-xs text-white/50">{item.secondary}</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            {!showPicks && (
              <div className="border-t border-white/10 px-4 py-1.5 text-right text-[10px] text-white/30">
                {providerLabel()}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddressAutocomplete;
