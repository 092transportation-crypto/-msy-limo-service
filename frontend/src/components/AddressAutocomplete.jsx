import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plane, Loader2 } from "lucide-react";

// Address autocomplete backed by Photon (photon.komoot.io) — free, no API key,
// OpenStreetMap data. Results are biased toward the New Orleans metro area.
// Renders only the input + label + dropdown; the caller supplies the input and
// label classes so it matches the surrounding form exactly.

const QUICK_PICKS = [
  "Louis Armstrong New Orleans International Airport (MSY), Kenner, LA",
  "Port of New Orleans Cruise Terminal, New Orleans, LA",
  "French Quarter, New Orleans, LA",
];

const formatSuggestion = (feature) => {
  const p = feature.properties || {};
  const street = [p.housenumber, p.street].filter(Boolean).join(" ");
  const seen = new Set();
  return [p.name, street, p.district, p.city, p.state, p.postcode]
    .filter((part) => part && !seen.has(part) && seen.add(part))
    .join(", ");
};

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
    fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=6&lat=29.95&lon=-90.08&lang=en`,
      { signal: ctrl.signal }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data) => {
        const seen = new Set();
        const labels = (data.features || [])
          .filter((f) => (f.properties || {}).countrycode === "US")
          .map(formatSuggestion)
          .filter((s) => s && !seen.has(s) && seen.add(s))
          .slice(0, 6);
        setItems(labels);
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
    if (q.trim().length < 3) {
      setItems([]);
      setLoading(false);
      setOpen(true);
      return;
    }
    setOpen(true);
    timerRef.current = setTimeout(() => fetchSuggestions(q.trim()), 250);
  };

  const select = (text) => {
    onChange(text);
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
        onFocus={() => setOpen(true)}
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
                <li key={item}>
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
                    {showPicks ? (
                      <Plane size={15} className="mt-0.5 shrink-0 text-amber-400" />
                    ) : (
                      <MapPin size={15} className="mt-0.5 shrink-0 text-amber-400" />
                    )}
                    <span className="leading-snug">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
            {!showPicks && (
              <div className="border-t border-white/10 px-4 py-1.5 text-right text-[10px] text-white/30">
                Suggestions © OpenStreetMap
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddressAutocomplete;
