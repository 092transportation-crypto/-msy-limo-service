import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import {
  Send,
  Loader2,
  Phone,
  MessageSquare,
  Mail,
  Plane,
  Briefcase,
  Heart,
  PartyPopper,
  Clock,
  Minus,
  Plus,
  Car,
  CarFront,
  Bus,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const CONTACT_METHODS = [
  { value: "Phone", icon: Phone },
  { value: "Text", icon: MessageSquare },
  { value: "Email", icon: Mail },
];

const SERVICE_OPTIONS = [
  { value: "Airport Transfer", icon: Plane },
  { value: "Corporate", icon: Briefcase },
  { value: "Wedding", icon: Heart },
  { value: "Special Event", icon: PartyPopper },
  { value: "Hourly", icon: Clock },
];

// The 8 fleet categories — kept in sync with the Fleet page and 92limo.com.
const VEHICLE_OPTIONS = [
  { value: "Business Sedan", icon: Car },
  { value: "First Class Sedan", icon: Car },
  { value: "Midsize SUV", icon: CarFront },
  { value: "Luxury SUV", icon: CarFront },
  { value: "Premium SUV", icon: CarFront },
  { value: "Sprinter Shuttle", icon: Bus },
  { value: "Sprinter Executive", icon: Bus },
  { value: "Sprinter Limo", icon: Bus },
];

const HEAR_ABOUT_OPTIONS = [
  "Google Search",
  "Referral / Word of Mouth",
  "Social Media",
  "Repeat Customer",
  "Other",
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "MD PSC Carrier #6325", sub: "Official Carrier License" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully Certified Fleet" },
  { icon: Clock, label: "24/7 Available", sub: "Day or Night" },
  { icon: Plane, label: "Flight Tracking", sub: "We Watch Your Arrival" },
];

const EMPTY = {
  fullName: "",
  phone: "",
  email: "",
  contactMethod: "",
  serviceType: "",
  vehiclePreference: "",
  flightNumber: "",
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  passengers: 1,
  hearAbout: "",
  notes: "",
  smsConsent: false,
};

// Fields that count toward the completion meter (vehicle/hearAbout/notes optional).
const PROGRESS_FIELDS = [
  "fullName", "phone", "email", "contactMethod", "serviceType",
  "pickupLocation", "dropoffLocation", "date", "time",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Staggered entrance for the form fields.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/*
 * Floating-label geometry: inputs reserve 28px of top padding (pt-7); the
 * floated label lives at top-2.5 (10px) in 10px type, so label and value
 * never overlap — including native date/time inputs whose value is always
 * rendered by the browser.
 */
const inputBase =
  "peer block w-full min-h-[58px] rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder-transparent transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500";
const labelBase =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-amber-400 " +
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-gray-500";
// Native date/time inputs always render a value, so their label is permanently floated.
const staticLabel =
  "pointer-events-none absolute left-4 top-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500";
const groupLabel =
  "mb-3 block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400";

const borderCls = (invalid) => (invalid ? "border-red-400/70" : "border-white/15");

// Selected state for pill buttons — its own background per button.
function PillFill({ active, rounded = "rounded-full" }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          className={`absolute inset-0 ${rounded} gold-gradient`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}

// One gold particle of the success burst.
function Particle({ index }) {
  const angle = (index / 22) * Math.PI * 2 + Math.random() * 0.4;
  const dist = 50 + Math.random() * 80;
  const size = 4 + Math.random() * 6;
  const colors = ["#FCD34D", "#F59E0B", "#D97706", "#FFFFFF", "#F59E0B"];
  return (
    <motion.span
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{ width: size, height: size, background: colors[index % colors.length] }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
      animate={{
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        scale: [0, 1.2, 0.9],
        opacity: [1, 1, 0],
      }}
      transition={{ duration: 1 + Math.random() * 0.4, delay: 0.2, ease: "easeOut" }}
    />
  );
}

// Thank-you banner shown above the form after a successful submit.
// The form itself stays mounted (cleared) so the page never looks empty.
function SuccessBanner({ onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
      data-testid="inquiry-success"
    >
      <div className="relative mx-6 mt-6 rounded-2xl border border-amber-500/50 bg-amber-500/[0.08] px-6 py-8 text-center sm:mx-10 sm:mt-8">
        <div className="relative mx-auto mb-4 h-16 w-16">
          {[...Array(22)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-full gold-gradient shadow-[0_0_40px_-8px_rgba(245,158,11,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
          >
            <svg viewBox="0 0 52 52" className="h-8 w-8">
              <motion.path
                d="M14 27 L23 36 L38 18"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-white">Booking Request Received!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-300">
          Our team will contact you within 15 minutes to confirm your ride.
          Need us sooner? Call{" "}
          <a href="tel:+18776091919" className="font-semibold text-amber-400 hover:underline">
            (877) 609-1919
          </a>
          .
        </p>
        <button
          type="button"
          onClick={onDismiss}
          data-testid="inquiry-success-dismiss"
          className="mt-4 rounded-full border border-amber-500/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-400 transition-colors hover:bg-amber-500/10"
        >
          Dismiss
        </button>
      </div>
    </motion.div>
  );
}

const InquiryForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [shaking, setShaking] = useState(false);
  const cardRef = useRef(null);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setInvalid((keys) => keys.filter((key) => key !== k));
  };

  const progress = useMemo(() => {
    const filled = PROGRESS_FIELDS.filter((k) => String(form[k]).trim()).length;
    return Math.round((filled / PROGRESS_FIELDS.length) * 100);
  }, [form]);

  // Bring the thank-you banner into view when it appears.
  useEffect(() => {
    if (done && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [done]);

  const submit = async (e) => {
    e.preventDefault();
    const missing = PROGRESS_FIELDS.filter((k) => !String(form[k]).trim());
    if (form.email && !EMAIL_RE.test(form.email) && !missing.includes("email")) {
      missing.push("email");
    }
    if (missing.length) {
      setInvalid(missing);
      setShaking(true);
      toast.error("Please complete the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          contactMethod: form.contactMethod,
          serviceType: form.serviceType,
          vehiclePreference: form.vehiclePreference,
          // Flight number only applies to airport transfers.
          flightNumber:
            form.serviceType === "Airport Transfer"
              ? form.flightNumber.trim()
              : "",
          pickupLocation: form.pickupLocation,
          dropoffLocation: form.dropoffLocation,
          date: form.date,
          time: form.time,
          passengers: String(form.passengers),
          hearAbout: form.hearAbout,
          message: form.notes,
          smsConsent: form.smsConsent,
          source: "Booking page",
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Request failed");
      }
      setForm(EMPTY);
      setInvalid([]);
      setDone(true);
    } catch (err) {
      toast.error("Couldn't send your request. Please call (877) 609-1919 instead.");
      // eslint-disable-next-line no-console
      console.error("Inquiry submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="inquiry-wrapper">
      <motion.div
        ref={cardRef}
        className="relative scroll-mt-28 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black shadow-[0_30px_80px_-30px_rgba(245,158,11,0.35)]"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-1 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />

        <AnimatePresence>
          {done && <SuccessBanner key="success" onDismiss={() => setDone(false)} />}
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-gray-400">Trip Details</span>
            <span className="tabnums text-amber-400" data-testid="inquiry-progress">
              {progress}% complete
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full gold-gradient"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>

        <motion.form
          data-testid="inquiry-form"
          onSubmit={submit}
          noValidate
          className="p-6 sm:p-10"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          animate={shaking ? { x: [0, -12, 12, -9, 9, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setShaking(false)}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Full Name */}
            <motion.div variants={itemVariants} className="relative">
              <input
                id="inq-name"
                data-testid="inquiry-name"
                className={`${inputBase} ${borderCls(invalid.includes("fullName"))}`}
                placeholder="Full Name"
                autoComplete="name"
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
              />
              <label htmlFor="inq-name" className={labelBase}>Full Name *</label>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="relative">
              <input
                id="inq-phone"
                data-testid="inquiry-phone"
                type="tel"
                className={`${inputBase} ${borderCls(invalid.includes("phone"))}`}
                placeholder="Phone Number"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
              <label htmlFor="inq-phone" className={labelBase}>Phone Number *</label>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <input
                id="inq-email"
                data-testid="inquiry-email"
                type="email"
                className={`${inputBase} ${borderCls(invalid.includes("email"))}`}
                placeholder="Email Address"
                autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
              <label htmlFor="inq-email" className={labelBase}>Email Address *</label>
            </motion.div>

            {/* Preferred Contact */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Preferred Contact *
                {invalid.includes("contactMethod") && (
                  <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                )}
              </span>
              <div className="grid grid-cols-3 gap-2 sm:max-w-md">
                {CONTACT_METHODS.map(({ value, icon: Icon }) => {
                  const active = form.contactMethod === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-contact-${value.toLowerCase()}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("contactMethod", value)}
                      className={`relative flex min-h-[48px] items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-amber-500/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} rounded="rounded-xl" />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {value}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Service Type */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Service Type *
                {invalid.includes("serviceType") && (
                  <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                )}
              </span>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map(({ value, icon: Icon }) => {
                  const active = form.serviceType === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-service-${value.toLowerCase().replace(/\s+/g, "-")}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("serviceType", value)}
                      className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-amber-500/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {value}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Flight number — airport transfers only */}
            {form.serviceType === "Airport Transfer" && (
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative md:col-span-2"
              >
                <label htmlFor="inq-flight" className={staticLabel}>Flight Number (optional)</label>
                <input
                  id="inq-flight"
                  data-testid="inquiry-flight-number"
                  type="text"
                  placeholder="e.g. AA1234"
                  className="block w-full min-h-[58px] rounded-xl border border-white/15 bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500"
                  value={form.flightNumber}
                  onChange={(e) => set("flightNumber", e.target.value)}
                />
              </motion.div>
            )}

            {/* Vehicle Type */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Vehicle Type
                <span className="ml-2 normal-case tracking-normal text-gray-500">— optional, tap again to unselect</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {VEHICLE_OPTIONS.map(({ value, icon: Icon }) => {
                  const active = form.vehiclePreference === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-vehicle-${value.toLowerCase().replace(/\s+/g, "-")}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("vehiclePreference", active ? "" : value)}
                      className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-amber-500/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {value}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Pickup — z-30 so the suggestions dropdown paints above later fields */}
            <motion.div variants={itemVariants} className="relative z-30">
              <AddressAutocomplete
                id="inq-pickup"
                testId="inquiry-pickup"
                label="Pickup Location"
                value={form.pickupLocation}
                onChange={(v) => set("pickupLocation", v)}
                inputClassName={`${inputBase} ${borderCls(invalid.includes("pickupLocation"))}`}
                labelClassName={labelBase}
              />
            </motion.div>

            {/* Drop-off */}
            <motion.div variants={itemVariants} className="relative z-20">
              <AddressAutocomplete
                id="inq-dropoff"
                testId="inquiry-dropoff"
                label="Drop-off Location"
                value={form.dropoffLocation}
                onChange={(v) => set("dropoffLocation", v)}
                inputClassName={`${inputBase} ${borderCls(invalid.includes("dropoffLocation"))}`}
                labelClassName={labelBase}
              />
            </motion.div>

            {/* Date */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="inq-date" className={staticLabel}>Date *</label>
              <input
                id="inq-date"
                data-testid="inquiry-date"
                type="date"
                style={{ colorScheme: "dark" }}
                className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500 ${borderCls(invalid.includes("date"))}`}
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
              />
            </motion.div>

            {/* Time */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="inq-time" className={staticLabel}>Time *</label>
              <input
                id="inq-time"
                data-testid="inquiry-time"
                type="time"
                style={{ colorScheme: "dark" }}
                className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/60 focus:border-amber-500 ${borderCls(invalid.includes("time"))}`}
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
              />
            </motion.div>

            {/* Passengers stepper — full row so it never crowds neighbors */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="flex min-h-[58px] flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Passengers <span className="text-gray-600">(1–14)</span>
                </span>
                <div className="flex shrink-0 items-center gap-2">
                  <motion.button
                    type="button"
                    aria-label="Fewer passengers"
                    data-testid="inquiry-passengers-minus"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => set("passengers", Math.max(1, form.passengers - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-amber-500 hover:text-amber-400"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <div className="relative h-10 w-12 overflow-hidden text-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={form.passengers}
                        data-testid="inquiry-passengers-value"
                        className="tabnums absolute inset-0 flex items-center justify-center text-lg font-bold text-white"
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {form.passengers}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <motion.button
                    type="button"
                    aria-label="More passengers"
                    data-testid="inquiry-passengers-plus"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => set("passengers", Math.min(14, form.passengers + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-amber-500 hover:text-amber-400"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* How did you hear about us */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                How did you hear about us?
                <span className="ml-2 normal-case tracking-normal text-gray-500">— optional</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {HEAR_ABOUT_OPTIONS.map((value) => {
                  const active = form.hearAbout === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("hearAbout", active ? "" : value)}
                      className={`relative flex min-h-[40px] items-center rounded-full border px-4 text-xs font-semibold transition-colors duration-300 sm:text-sm ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-amber-500/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} />
                      <span className="relative">{value}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Notes */}
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <textarea
                id="inq-notes"
                data-testid="inquiry-notes"
                rows={3}
                className={`${inputBase} resize-none border-white/15`}
                placeholder="Notes / Special Requests"
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
              <label
                htmlFor="inq-notes"
                className={
                  "pointer-events-none absolute left-4 top-7 text-sm text-gray-400 transition-all duration-200 " +
                  "peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-amber-400 " +
                  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-gray-500"
                }
              >
                Notes / Special Requests
              </label>
            </motion.div>

            {/* SMS Consent */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  data-testid="inquiry-sms-consent"
                  checked={form.smsConsent}
                  onChange={(e) => set("smsConsent", e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-amber-500"
                />
                <span className="text-sm leading-relaxed text-gray-400">
                  By checking this box, you agree to receive SMS messages from MSY Limo Service
                  related to Customer Care. Reply STOP to opt out. Message &amp; data rates may apply.
                </span>
              </label>
            </motion.div>
          </div>

          {/* Submit */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              data-testid="inquiry-submit"
              disabled={loading}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer relative mt-8 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-full gold-gradient font-bold text-black shadow-[0_12px_40px_-10px_rgba(245,158,11,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={18} /> Request Booking
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-center text-xs text-gray-500">
            We respond within 15 minutes. We never share your info.
          </motion.p>
        </motion.form>
      </motion.div>

      {/* Trust badges */}
      <motion.ul
        data-testid="inquiry-trust-badges"
        className="mt-10 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 lg:grid-cols-4"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
          <motion.li
            key={label}
            variants={itemVariants}
            className="flex items-center gap-3 rounded-xl border border-amber-500/25 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-amber-500/60"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10">
              <Icon size={17} className="text-amber-400" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold leading-tight text-white">{label}</span>
              <span className="block text-[11px] uppercase tracking-[0.08em] text-gray-500">{sub}</span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default InquiryForm;
