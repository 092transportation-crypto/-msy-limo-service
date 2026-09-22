import { keywordSection } from "@/lib/keywordSection";

// Keyword-rich H2 + two paragraphs (see lib/keywordSection.js), dark theme.
// Paragraphs are built with a for-loop, not .map(), because the project's
// visual-edits Babel plugin (dev/test only) overflows its AST walker on
// certain .map(...) call shapes — see plugins/visual-edits/babel-metadata-plugin.js.
const KeywordSection = ({ slug, place, kind }) => {
  const kw = keywordSection(slug, place, kind);
  const paragraphs = [];
  for (let i = 0; i < kw.text.length; i++) {
    const t = kw.text[i];
    paragraphs.push(
      <p key={t.slice(0, 40)} className="text-white/70 leading-relaxed mb-4">{t}</p>
    );
  }
  return (
    <section className="py-16 bg-gray-950" data-testid="keyword-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2
          className="text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {kw.h2}
        </h2>
        {paragraphs}
      </div>
    </section>
  );
};

export default KeywordSection;
