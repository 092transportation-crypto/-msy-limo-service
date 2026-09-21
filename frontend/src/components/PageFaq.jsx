// Visible FAQ block. Pages pass the same array they feed to buildFaqSchema(),
// so the on-page questions always match the FAQPage JSON-LD (Google requires
// marked-up Q&As to be visible to users).
const PageFaq = ({ faqs, heading = "Frequently Asked Questions" }) => {
  if (!faqs || !faqs.length) return null;
  return (
    <section className="py-16 bg-gray-950" data-testid="page-faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2
          className="text-3xl font-medium mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading}
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-900/60 border border-amber-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-white/70 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageFaq;
