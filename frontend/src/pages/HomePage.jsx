import { useState, useEffect } from "react";
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
          },
          "sameAs": [
            "https://book.mylimobiz.com/v4/92transp"
          ]
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
        <CTASection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default HomePage;
