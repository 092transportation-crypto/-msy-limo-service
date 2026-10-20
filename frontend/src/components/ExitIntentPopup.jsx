import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { X, Loader2 } from "lucide-react";
import { sanitizePhone, isValidPhone } from "@/lib/phone";

const DESKTOP_MIN_WIDTH = 768;

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500";
const borderCls = (invalid) => (invalid ? "border-red-400/70" : "border-white/15");

// Desktop-only exit-intent popup: fires once, the first time the mouse
// leaves the top of the viewport (the classic "about to close the tab /
// click back" signal). Skipped entirely if a lead was already captured this
// session (chat widget, lead popup, or this popup itself).
const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [invalid, setInvalid] = useState([]);
  const [loading, setLoading] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < DESKTOP_MIN_WIDTH) {
      return undefined;
    }

    let alreadyShown = false;
    let leadSubmitted = false;
    try {
      alreadyShown = sessionStorage.getItem("exitIntentShown") === "1";
      leadSubmitted = sessionStorage.getItem("leadSubmitted") === "1";
    } catch (e) {
      // sessionStorage unavailable — fall back to a per-page-load one-shot.
    }
    if (alreadyShown || leadSubmitted) return undefined;

    const onMouseOut = (e) => {
      if (firedRef.current) return;
      if (e.clientY > 0 || e.relatedTarget) return;

      let submittedNow = false;
      try {
        submittedNow = sessionStorage.getItem("leadSubmitted") === "1";
      } catch (err) {
        // ignore
      }
      if (submittedNow) return;

      firedRef.current = true;
      try {
        sessionStorage.setItem("exitIntentShown", "1");
      } catch (err) {
        // ignore
      }
      setOpen(true);
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setInvalid((keys) => keys.filter((key) => key !== k));
  };

  const submit = async (e) => {
    e.preventDefault();
    const missing = [];
    if (!form.name.trim()) missing.push("name");
    if (!isValidPhone(form.phone)) missing.push("phone");
    if (missing.length) {
      setInvalid(missing);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "exit_intent",
          name: form.name.trim(),
          phone: form.phone.trim(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Request failed");
      }
      try {
        sessionStorage.setItem("leadSubmitted", "1");
      } catch (err) {
        // ignore
      }
      toast.success("Got it! We'll text or call you shortly with your quote.");
      setOpen(false);
    } catch (err) {
      toast.error("Couldn't send that — please call (877) 609-1919 instead.");
      // eslint-disable-next-line no-console
      console.error("Exit-intent popup submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          data-testid="exit-intent-backdrop"
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-amber-500/30 bg-black shadow-2xl shadow-amber-500/20"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            data-testid="exit-intent-popup"
          >
            <div className="h-1 w-full gold-gradient" aria-hidden="true" />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              data-testid="exit-intent-close"
              className="absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-colors hover:border-amber-500/60 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <form onSubmit={submit} className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Before you go — get an instant quote
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Leave your name and number — a dispatcher will text or call you with pricing.
              </p>

              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="name"
                  data-testid="exit-intent-name"
                  className={`${inputCls} ${borderCls(invalid.includes("name"))}`}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  data-testid="exit-intent-phone"
                  className={`${inputCls} ${borderCls(invalid.includes("phone"))}`}
                  value={form.phone}
                  onChange={(e) => set("phone", sanitizePhone(e.target.value))}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="exit-intent-submit"
                className="btn-shimmer relative mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-full gold-gradient font-bold text-black shadow-[0_12px_40px_-10px_rgba(245,158,11,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Get My Instant Quote"
                )}
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">
                Or call <a href="tel:+18776091919" className="font-semibold text-amber-400">(877) 609-1919</a> — we never share your info.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
