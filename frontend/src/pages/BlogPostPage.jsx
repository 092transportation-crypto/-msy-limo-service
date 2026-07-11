import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO, { buildFaqSchema } from "@/components/SEO";
import { getSeoBlogPostBySlug, seoBlogPosts } from "@/data/blogPostsData";
import { Calendar, Clock, User, Phone, ArrowRight, ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getSeoBlogPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: "2026-07-07",
      author: { "@type": "Organization", name: "MSY Limo Service" },
      publisher: {
        "@type": "Organization",
        name: "MSY Limo Service",
        url: "https://msylimoservice.com",
      },
      mainEntityOfPage: `https://msylimoservice.com/blog/${post.slug}`,
    },
    buildFaqSchema(post.faqs),
  ];

  const otherPosts = seoBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        schema={schema}
      />
      <Navigation />

      {/* Header */}
      <section className="pt-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-amber-400 text-sm mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4 text-xs text-white/50 flex-wrap">
              <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" /> {post.author}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {post.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-2xl border border-amber-500/20"
          />
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div
            className="prose prose-invert prose-amber max-w-none text-white/70
              [&_h2]:text-amber-400 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug
              [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-4
              [&_li]:text-white/70 [&_li]:leading-relaxed
              [&_strong]:text-amber-400
              [&_a]:text-amber-400 [&_a]:underline [&_a]:underline-offset-2
              [&_p]:mb-5 [&_p]:leading-relaxed [&_p]:text-lg"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2
            className="text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.q} className="bg-black/50 border border-amber-500/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2
            className="text-2xl font-medium mb-6 text-amber-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More From the Blog
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="bg-gray-900/50 border border-amber-500/10 rounded-xl p-5 hover:border-amber-500/40 transition-all group"
              >
                <span className="text-amber-400 text-xs">{p.category}</span>
                <h3 className="text-white font-semibold mt-2 text-sm leading-snug group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2
            className="text-3xl font-medium mb-4 text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Book Your MSY Airport Transfer?
          </h2>
          <p className="text-black/70 mb-8">
            Flat rates, flight tracking, and professional chauffeurs — available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="bg-black text-amber-400 px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.a
              href="tel:+18776091919"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-amber-400 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> (877) 609-1919
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
