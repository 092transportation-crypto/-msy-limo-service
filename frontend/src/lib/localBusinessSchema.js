// Shared LocalBusiness JSON-LD block, reused on every page's schema array so
// NAP (name, address, phone) data is identical everywhere it appears in
// structured data. Keep this in sync with Footer.jsx / ContactPage.jsx if the
// business address or phone number ever changes.
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://msylimoservice.com/#business",
  name: "MSY Limo Service",
  telephone: "+1-877-609-1919",
  email: "info@msylimoservice.com",
  url: "https://msylimoservice.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9836 Lyon Ave",
    addressLocality: "Laurel",
    addressRegion: "MD",
    postalCode: "20723",
    addressCountry: "US",
  },
  areaServed: ["New Orleans", "Kenner", "Metairie", "Gretna", "Greater New Orleans Area", "Louisiana"],
  openingHours: "Mo-Su 00:00-23:59",
};
