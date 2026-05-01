import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronUp,
  FaQuoteRight,
  FaQuestionCircle,
  FaClock,
} from "react-icons/fa";
import { PortableText } from "@portabletext/react";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
};

const FUNNEL_STAGE_LABELS = {
  awareness: "Awareness",
  consideration: "Consideration",
  decision: "Decision",
};

const formatDate = (iso) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

/* =======================
   READING TIME ESTIMATE
======================= */
const estimateReadingTime = (body) => {
  if (!Array.isArray(body)) return 3;
  const text = body
    .map((block) => {
      if (block?._type === "block" && Array.isArray(block.children)) {
        return block.children.map((c) => c.text || "").join(" ");
      }
      return "";
    })
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
};

/* =======================
   PORTABLE TEXT COMPONENTS
======================= */
const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="pt-12 pb-4 text-4xl font-bold leading-tight md:text-5xl font-heading text-brandDark dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="pt-10 pb-4 text-3xl font-bold leading-tight md:text-4xl font-heading text-brandDark dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-8 pb-3 text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-6 pb-2 text-xl font-bold md:text-2xl font-heading text-brandDark dark:text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <div className="relative my-14 group">
        <div className="absolute text-7xl transition-transform duration-500 -top-4 -left-4 text-brandPrimary/10 dark:text-brandAccent/10 group-hover:scale-110">
          <FaQuoteRight />
        </div>
        <blockquote className="relative z-10 rounded-[2rem] bg-gradient-to-br from-brandDark to-brandNavy dark:from-surfaceDark dark:to-bgDark border-l-[6px] border-brandAccent p-10 md:p-14 shadow-xl">
          <div className="text-2xl italic font-light leading-relaxed text-white md:text-3xl font-heading">
            {children}
          </div>
        </blockquote>
      </div>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-[1.85] md:text-xl text-brandNavy/85 dark:text-gray-300">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pl-2 my-6 space-y-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="pl-6 my-6 space-y-4 list-decimal marker:text-brandPrimary marker:dark:text-brandAccent marker:font-bold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-4 text-lg leading-relaxed text-brandNavy/85 dark:text-gray-300">
        <div className="mt-3 w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed pl-2 text-brandNavy/85 dark:text-gray-300">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-brandDark dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-2 py-0.5 text-sm font-mono rounded-md bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline decoration-brandPrimary/30 dark:decoration-brandAccent/30 underline-offset-4 text-brandPrimary dark:text-brandAccent hover:decoration-brandPrimary dark:hover:decoration-brandAccent transition-all"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = value?.asset?.url || value?.url;
      if (!url) return null;
      return (
        <figure className="my-14 space-y-4 -mx-4 md:-mx-12 lg:-mx-20">
          <div className="overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark group">
            <img
              src={url}
              alt={value?.alt || ""}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          {value?.caption && (
            <figcaption className="text-sm italic font-medium text-center text-brandNavy/50 dark:text-gray-500">
              — {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

/* =======================
   MAIN COMPONENT
======================= */
export default function BlogTemplate({ blog }) {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25]);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const readingTime = useMemo(() => estimateReadingTime(blog?.body), [blog?.body]);

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-bgLight dark:bg-bgDark">
        <div className="space-y-4 text-center">
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">!</div>
          <p className="text-lg font-semibold text-brandNavy dark:text-gray-400">
            Insights article not found.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    );

  const stageLabel = FUNNEL_STAGE_LABELS[blog.funnelStage];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= READING PROGRESS BAR ================= */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-brandPrimary to-brandAccent dark:from-brandAccent dark:to-brandGold origin-left"
      />

      {/* ================= BACK BUTTON (DESKTOP) ================= */}
      <div className="fixed z-50 hidden top-32 left-6 xl:block">
        <Link
          to="/blogs"
          className="flex items-center gap-3 px-5 py-3 transition-all duration-300 border rounded-full shadow-xl group bg-surfaceLight/90 dark:bg-surfaceDark/90 backdrop-blur-md border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
        >
          <FaChevronLeft className="transition-transform text-brandPrimary dark:text-brandAccent group-hover:-translate-x-1" />
          <span className="text-sm font-bold">Back to Hub</span>
        </Link>
      </div>

      {/* ================= TITLE HEADER ================= */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-bgLight dark:bg-bgDark">
        <div className="container max-w-5xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-xs font-semibold tracking-wider text-brandNavy/60 dark:text-gray-400">
              <Link
                to="/"
                className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent uppercase"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blogs"
                className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent uppercase"
              >
                Knowledge Hub
              </Link>
              <span>/</span>
              <span className="text-brandPrimary dark:text-brandAccent uppercase">Article</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {blog.contentType && (
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brandAccent text-brandDark text-xs font-black tracking-widest uppercase shadow-lg">
                  {blog.contentType}
                </div>
              )}
              {stageLabel && (
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 border border-brandPrimary/20 dark:border-brandAccent/20 text-brandPrimary dark:text-brandAccent text-xs font-bold tracking-wide uppercase">
                  {stageLabel}
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] text-brandDark dark:text-white">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-brandNavy/70 dark:text-gray-400">
              <span className="flex items-center gap-2.5">
                <FaCalendar className="text-brandPrimary dark:text-brandAccent" />
                {formatDate(blog._createdAt)}
              </span>
              <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 md:block" />
              <span className="flex items-center gap-2.5">
                <FaClock className="text-brandPrimary dark:text-brandAccent" />
                {readingTime} min read
              </span>
              {blog._updatedAt && blog._updatedAt !== blog._createdAt && (
                <>
                  <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 md:block" />
                  <span className="flex items-center gap-2.5 text-brandNavy/50 dark:text-gray-500">
                    Updated {formatDate(blog._updatedAt)}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED IMAGE ================= */}
      {blog.mainImage && (
        <section className="pb-12 md:pb-20 bg-bgLight dark:bg-bgDark">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark"
            >
              <img
                src={blog.mainImage}
                alt={blog.mainImageAlt || blog.title}
                className="object-cover w-full h-auto max-h-[70vh]"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= ARTICLE CONTENT ================= */}
      <main className="relative z-20 pb-32">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-brandDark/10 dark:shadow-black/40"
          >
            {/* TL;DR */}
            {blog.tldr && (
              <div className="p-8 mb-14 border rounded-3xl border-brandPrimary/20 dark:border-brandAccent/20 bg-gradient-to-br from-brandPrimary/5 to-brandAccent/5 dark:from-brandAccent/5 dark:to-brandPrimary/5">
                <p className="text-lg leading-relaxed md:text-xl text-brandNavy/85 dark:text-gray-200">
                  {blog.tldr}
                </p>
              </div>
            )}

            {/* BODY */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-2">
                {Array.isArray(blog.body) && blog.body.length > 0 ? (
                  <PortableText
                    value={blog.body}
                    components={portableTextComponents}
                  />
                ) : (
                  <p className="text-lg italic text-brandNavy/60 dark:text-gray-400">
                    No content available for this article yet.
                  </p>
                )}
              </div>
            </article>

            {/* KEY TAKEAWAYS */}
            {Array.isArray(blog.takeaways) && blog.takeaways.length > 0 && (
              <div className="pt-12 mt-20 border-t border-borderLight dark:border-borderDark">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10">
                    <FaQuestionCircle className="text-2xl text-brandPrimary dark:text-brandAccent" />
                  </div>
                  <div>
                    <div className="text-xs font-black tracking-[0.25em] uppercase text-brandPrimary dark:text-brandAccent">
                      Recap
                    </div>
                    <h2 className="mt-1 text-3xl font-bold font-heading text-brandDark dark:text-white">
                      Key Takeaways
                    </h2>
                  </div>
                </div>
                <ul className="space-y-4">
                  {blog.takeaways.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4 p-6 transition-all duration-300 border rounded-2xl bg-bgLight/50 dark:bg-bgDark/50 border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent hover:translate-x-1"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-black text-white rounded-full bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold dark:text-brandDark shadow-md">
                        {i + 1}
                      </div>
                      <span className="text-lg leading-relaxed text-brandNavy/85 dark:text-gray-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

          </motion.div>

          {/* ================= AUTHOR / CTA CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 mt-12 md:grid-cols-2"
          >
            <div className="p-8 border rounded-3xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 overflow-hidden border rounded-full border-borderLight dark:border-borderDark bg-white dark:bg-bgDark">
                  <img
                    src="/rm.png"
                    alt="RiskMan"
                    className="object-contain w-10 h-10 dark:hidden"
                  />
                  <img
                    src="/riskman-logo-white.svg"
                    alt="RiskMan"
                    className="hidden object-contain w-10 h-10 dark:block"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-brandNavy/50 dark:text-gray-500">
                    Written by
                  </div>
                  <div className="text-lg font-bold text-brandDark dark:text-white">
                    Riskman
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
                Risk advisory, regulatory compliance, and digital transformation
                experts helping organizations build resilient, future-ready
                businesses.
              </p>
            </div>

            <div className="relative p-8 overflow-hidden text-white border rounded-3xl bg-brandDark dark:bg-bgDark border-borderLight dark:border-borderDark">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandAccent blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brandPrimary blur-3xl rounded-full" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="mb-2 text-xl font-bold font-heading">
                  Need help with this?
                </h3>
                <p className="mb-6 text-sm text-white/70">
                  Talk to our advisory team about how this applies to your
                  business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center self-start gap-2 px-6 py-3 mt-auto text-sm font-bold transition-all rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold"
                >
                  Get in touch
                  <FaChevronLeft className="transition-transform rotate-180 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ================= COMMENTS SECTION ================= */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="rounded-[3rem] bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-8 md:p-16 shadow-xl">
              <div className="mb-10">
                <div className="text-xs font-black tracking-[0.25em] uppercase text-brandPrimary dark:text-brandAccent">
                  Discussion
                </div>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
                  Join the conversation
                </h2>
                <p className="mt-3 text-brandNavy/60 dark:text-gray-400">
                  Your email address will not be published. Required fields are marked *
                </p>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-[0.2em] uppercase text-brandNavy/80 dark:text-white/80">
                      Name *
                    </label>
                    <input
                      className="w-full px-6 py-4 transition-all duration-300 border outline-none rounded-2xl bg-bgLight/60 dark:bg-bgDark/60 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-[0.2em] uppercase text-brandNavy/80 dark:text-white/80">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 transition-all duration-300 border outline-none rounded-2xl bg-bgLight/60 dark:bg-bgDark/60 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold tracking-[0.2em] uppercase text-brandNavy/80 dark:text-white/80">
                    Comment *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 transition-all duration-300 border outline-none resize-none rounded-3xl bg-bgLight/60 dark:bg-bgDark/60 border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent text-brandDark dark:text-white"
                    placeholder="Share your thoughts..."
                  />
                </div>

                <button className="inline-flex items-center gap-3 px-10 py-4 text-sm font-black tracking-wide text-white transition-all duration-500 rounded-full shadow-xl group bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-brandPrimary/20">
                  Post Comment
                  <FaChevronLeft className="transition-transform rotate-180 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-brandNavy/40 dark:text-gray-500 hover:text-brandPrimary dark:hover:text-brandAccent transition-colors"
              >
                <FaChevronLeft />
                Return to Knowledge Hub
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      {/* ================= BACK TO TOP ================= */}
      {showBackTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          className="fixed z-50 flex items-center justify-center w-12 h-12 transition-all rounded-full shadow-2xl bottom-8 right-8 bg-brandDark dark:bg-brandAccent text-white dark:text-brandDark hover:scale-110 hover:bg-brandPrimary dark:hover:bg-brandGold"
        >
          <FaChevronUp />
        </motion.button>
      )}
    </div>
  );
}
