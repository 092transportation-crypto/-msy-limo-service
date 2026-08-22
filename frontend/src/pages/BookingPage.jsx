import { useEffect } from "react";
import { motion } from "framer-motion";
import { BadgeDollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InquiryForm from "@/components/InquiryForm";

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Book Your Ride | MSY Limo Service — New Orleans Airport Car Service"
        description="Book your MSY airport transfer, corporate car service, or special event limo online. Request a ride in minutes or call (877) 609-1919 — available 24/7."
        path="/booking"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-wider mb-4"
          >
            ONLINE BOOKING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Ride
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed max-w-3xl"
          >
            Tell us about your trip and we'll confirm your reservation with a flat-rate quote.
            Prefer to talk? Call us 24/7 at{" "}
            <a href="tel:+18776091919" className="text-amber-400 hover:text-amber-300 font-semibold">
              (877) 609-1919
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Flat-Rate Notice */}
          <div
            data-testid="rates-notice"
            className="mb-8 overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10"
          >
            <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-amber-200" aria-hidden="true" />
            <div className="flex flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-200 shadow-lg shadow-amber-500/30">
                <BadgeDollarSign className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-white md:text-lg">
                  Flat-Rate Pricing — <span className="text-amber-400">No Surge, Ever</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  Rates vary by vehicle and distance. Every quote is all-inclusive — tolls,
                  taxes &amp; gratuity. Fill out the form below for your{" "}
                  <span className="font-semibold text-amber-400">free instant quote</span>.
                </p>
              </div>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
