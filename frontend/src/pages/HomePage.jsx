import { useState, useEffect } from "react";
import { setPageSeo } from "@/lib/seo";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickLinksBar from "@/components/QuickLinksBar";
import UniqueFeatures from "@/components/UniqueFeatures";
import ServicesPortfolio from "@/components/ServicesPortfolio";
import FleetSection from "@/components/FleetSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import FAQSection, { faqData } from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";

const homeFaqSchema = buildFaqSchema(
  faqData.map(({ question, answer }) => ({ q: question, a: answer }))
);

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setPageSeo({
      title: "MSY Limo Service | Luxury Transportation New Orleans",
      description: "MSY Limo Service offers luxury airport transfers, corporate limos & chauffeur services in New Orleans & Louisiana. Book 24/7. (877) 609-1919",
      path: "/",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-black"
    >
      <SEO
        title="MSY Airport Car Service | New Orleans Airport Limo"
        description="MSY airport car service & New Orleans airport limo. Luxury chauffeur transfers, flat rates, flight tracking, 24/7. Licensed & insured. Call (877) 609-1919."
        path="/"
        schema={[homeFaqSchema]}
      />
      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "MSY Limo Service",
          "image": "https://msylimoservice.com/wp-content/uploads/2024/08/Sulari-3.png",
          "telephone": "+1-877-609-1919",
          "email": "msylimoservices@gmail.com",
          "url": "https://msylimoservice.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Orleans",
            "addressRegion": "LA",
            "addressCountry": "US"
          },
          "areaServed": ["New Orleans", "Kenner", "Metairie", "Gretna", "Greater New Orleans Area", "Louisiana"],
          "priceRange": "$$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>

      <Navigation />
      
      <main>
        <HeroSection />
        <QuickLinksBar />
        <UniqueFeatures />
        <ServicesPortfolio />
        <FleetSection />
        <ServiceAreasSection />
        {/* SEO: New Orleans service overview */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>
              New Orleans Limo &amp; Chauffeur Service, Citywide and Beyond
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              MSY Limo Service is the New Orleans limo service locals and visitors trust for polished, on-time rides.
              Our New Orleans car service pairs licensed, professionally attired chauffeurs with a spotless luxury
              fleet — whether you need a New Orleans chauffeur service for a night in the French Quarter, a black car
              to a convention, or an airport transfer at dawn.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We serve the whole metro: Metairie chauffeur service for business travelers, Gretna and Marrero chauffeur
              service on the West Bank, Mandeville chauffeur service and Covington car service across the Northshore,
              plus Slidell and every parish in between. One flat quote, every mile in style.
            </p>
          </div>
        </section>

        <CTASection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default HomePage;
