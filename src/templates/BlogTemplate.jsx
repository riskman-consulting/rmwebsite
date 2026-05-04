import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronUp,
  FaQuoteRight,
  FaClock,
  FaShareAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaLink,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import { useBlogStore } from "../store/blog";

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
   HEADING / SLUG UTILITIES
======================= */
const blockText = (block) => {
  if (block?._type !== "block" || !Array.isArray(block.children)) return "";
  return block.children.map((c) => c.text || "").join("");
};

const slugify = (text) =>
  String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const extractHeadings = (body) => {
  if (!Array.isArray(body)) return [];
  return body
    .filter(
      (b) => b?._type === "block" && (b.style === "h2" || b.style === "h3")
    )
    .map((b) => {
      const text = blockText(b);
      return { level: b.style, text, id: slugify(text) };
    })
    .filter((h) => h.text);
};

/* =======================
   PORTABLE TEXT COMPONENTS
======================= */
const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="pt-10 pb-3 text-2xl font-bold leading-tight md:text-3xl font-heading text-brandDark dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children, value }) => (
      <h2
        id={slugify(blockText(value))}
        className="pt-8 pb-3 text-xl font-bold leading-tight md:text-2xl font-heading text-brandDark dark:text-white scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={slugify(blockText(value))}
        className="pt-6 pb-2 text-lg font-bold md:text-xl font-heading text-brandDark dark:text-white scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-5 pb-2 text-base font-bold md:text-lg font-heading text-brandDark dark:text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <div className="relative my-10 group">
        <div className="absolute text-5xl transition-transform duration-500 -top-3 -left-3 text-brandPrimary/10 dark:text-brandAccent/10 group-hover:scale-110">
          <FaQuoteRight />
        </div>
        <blockquote className="relative z-10 rounded-2xl bg-gradient-to-br from-brandDark to-brandNavy dark:from-surfaceDark dark:to-bgDark border-l-[5px] border-brandAccent p-6 md:p-8 shadow-lg">
          <div className="text-base italic font-light leading-relaxed text-white md:text-lg font-heading">
            {children}
          </div>
        </blockquote>
      </div>
    ),
    normal: ({ children }) => (
      <p className="text-sm leading-[1.75] md:text-base text-brandNavy/85 dark:text-gray-300">
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
      <li className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-brandNavy/85 dark:text-gray-300">
        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brandPrimary dark:bg-brandAccent flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-sm md:text-base leading-relaxed pl-2 text-brandNavy/85 dark:text-gray-300">
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
   TABLE OF CONTENTS
======================= */
const TableOfContents = ({ headings }) => {
  if (!headings || headings.length === 0) return null;
  return (
    <nav
      aria-label="Table of contents"
      className="px-5 py-5 mb-8 border rounded-xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark"
    >
      <h2 className="mb-3 text-xs font-black tracking-[0.2em] uppercase text-brandPrimary dark:text-brandAccent">
        Table of Contents
      </h2>
      <ol className="space-y-2 text-sm">
        {headings.map((h, i) => (
          <li
            key={`${h.id}-${i}`}
            className={h.level === "h3" ? "pl-4" : ""}
          >
            <a
              href={`#${h.id}`}
              className="inline-flex gap-2 leading-snug transition-colors text-brandNavy/80 dark:text-gray-300 hover:text-brandPrimary dark:hover:text-brandAccent"
            >
              <span className="font-bold text-brandPrimary/70 dark:text-brandAccent/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

/* =======================
   SHARE ROW
======================= */
const ShareRow = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const links = [
    {
      label: "Share on Twitter",
      icon: <FaTwitter />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share on LinkedIn",
      icon: <FaLinkedin />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on Facebook",
      icon: <FaFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-4 py-6 border-y border-borderLight dark:border-borderDark">
      <div className="flex items-center gap-2 text-sm font-semibold text-brandNavy/70 dark:text-gray-400">
        <FaShareAlt className="text-xs" />
        Share
      </div>
      <div className="flex items-center gap-2">
        {links.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex items-center justify-center w-9 h-9 text-sm transition-all duration-300 rounded-full bg-bgLight dark:bg-bgDark text-brandNavy/70 dark:text-gray-400 hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark"
          >
            {s.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className={`flex items-center justify-center w-9 h-9 text-sm transition-all duration-300 rounded-full ${
            copied
              ? "bg-green-500 text-white"
              : "bg-bgLight dark:bg-bgDark text-brandNavy/70 dark:text-gray-400 hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark"
          }`}
        >
          {copied ? <FaCheckCircle /> : <FaLink />}
        </button>
      </div>
    </div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function BlogTemplate({ blog }) {
  const { scrollYProgress } = useScroll();
  const [showBackTop, setShowBackTop] = useState(false);
  const { posts, fetchPosts } = useBlogStore();

  useEffect(() => {
    if (!posts || posts.length === 0) fetchPosts();
  }, [posts, fetchPosts]);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const readingTime = useMemo(() => estimateReadingTime(blog?.body), [blog?.body]);
  const headings = useMemo(() => extractHeadings(blog?.body), [blog?.body]);

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

  const shareUrl = `https://www.riskman.in/blog/${blog.slug || ""}`;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= READING PROGRESS BAR ================= */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-brandPrimary to-brandAccent dark:from-brandAccent dark:to-brandGold origin-left"
      />

      {/* ================= ARTICLE ================= */}
      <article className="pt-24 pb-20 md:pt-28">
        <div className="container max-w-3xl">
          {/* Back to Blogs */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 mb-8 text-sm font-semibold transition-colors text-brandPrimary dark:text-brandAccent hover:opacity-80"
          >
            <FaChevronLeft className="text-xs" />
            Back to Blogs
          </Link>

          {/* Tags */}
          {blog.contentType && (
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex px-3 py-1 rounded-full bg-brandAccent/20 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent text-[11px] font-bold tracking-wider uppercase">
                {blog.contentType}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-[2.25rem] font-bold font-heading leading-[1.2] text-brandDark dark:text-white">
            {blog.title}
          </h1>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 text-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-white dark:bg-bgDark border border-borderLight dark:border-borderDark">
                <img
                  src="/rm.png"
                  alt="Riskman"
                  className="object-contain w-6 h-6 dark:hidden"
                />
                <img
                  src="/riskman-logo-white.svg"
                  alt="Riskman"
                  className="hidden object-contain w-6 h-6 dark:block"
                />
              </div>
              <span className="font-semibold text-brandDark dark:text-white">
                Riskman
              </span>
            </div>
            <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 sm:block" />
            <span className="flex items-center gap-2 text-brandNavy/60 dark:text-gray-400">
              <FaCalendar className="text-xs" />
              {formatDate(blog._createdAt)}
            </span>
            <span className="hidden w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30 sm:block" />
            <span className="flex items-center gap-2 text-brandNavy/60 dark:text-gray-400">
              <FaClock className="text-xs" />
              {readingTime} min read
            </span>
          </div>

          {/* Featured image */}
          {blog.mainImage && (
            <div className="mb-12 overflow-hidden border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
              <img
                src={blog.mainImage}
                alt={blog.mainImageAlt || blog.title}
                className="object-cover w-full h-auto aspect-[16/9]"
              />
            </div>
          )}

          {/* TL;DR */}
          {blog.tldr && (
            <aside className="px-5 py-4 mb-6 rounded-xl bg-brandPrimary/[0.06] dark:bg-brandAccent/[0.08] border-l-4 border-brandPrimary dark:border-brandAccent">
              <div className="mb-2 text-[11px] font-black tracking-[0.25em] uppercase text-brandPrimary dark:text-brandAccent">
                TL;DR
              </div>
              <p className="text-sm leading-relaxed text-brandNavy/85 dark:text-gray-200">
                {blog.tldr}
              </p>
            </aside>
          )}

          {/* Table of Contents */}
          <TableOfContents headings={headings} />

          {/* Body */}
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
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

          {/* Key Takeaways */}
          {Array.isArray(blog.takeaways) && blog.takeaways.length > 0 && (
            <div className="pt-8 mt-10 border-t border-borderLight dark:border-borderDark">
              <h2 className="mb-5 text-lg md:text-xl font-bold font-heading text-brandDark dark:text-white">
                Key Takeaways
              </h2>
              <ul className="space-y-2.5">
                {blog.takeaways.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brandNavy/85 dark:text-gray-300"
                  >
                    <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 mt-0.5 text-[10px] font-bold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Share */}
          <div className="mt-12">
            <ShareRow title={blog.title} url={shareUrl} />
          </div>

          {/* About the Author */}
          <section className="mt-12 overflow-hidden border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
            <div className="px-6 py-3 text-[11px] font-bold tracking-[0.2em] uppercase text-brandNavy/50 dark:text-gray-500 bg-bgLight/60 dark:bg-bgDark/40 border-b border-borderLight dark:border-borderDark">
              About the Author
            </div>
            <div className="flex flex-col items-start gap-5 p-6 sm:flex-row md:p-8">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 overflow-hidden border rounded-full bg-white dark:bg-bgDark border-borderLight dark:border-borderDark">
                <img
                  src="/rm.png"
                  alt="Riskman"
                  className="object-contain w-12 h-12 dark:hidden"
                />
                <img
                  src="/riskman-logo-white.svg"
                  alt="Riskman"
                  className="hidden object-contain w-12 h-12 dark:block"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-brandDark dark:text-white">
                  Riskman
                </h3>
                <span className="inline-block mt-1 mb-2 px-2 py-0.5 rounded-full bg-brandAccent/25 dark:bg-brandAccent/15 text-brandPrimary dark:text-brandAccent text-[10px] font-bold tracking-wider">
                  Risk Advisory
                </span>
                <p className="text-xs md:text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
                  Risk advisory, regulatory compliance, and digital
                  transformation experts helping organizations build resilient,
                  future-ready businesses.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {Array.isArray(posts) && posts.length > 1 && (
            <section className="mt-14">
              <h2 className="mb-5 text-lg md:text-xl font-bold font-heading text-brandDark dark:text-white">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {posts
                  .filter((p) => p.slug !== blog.slug)
                  .slice(0, 2)
                  .map((post) => (
                    <Link
                      key={post._id}
                      to={`/blog/${post.slug}`}
                      className="overflow-hidden transition-all duration-300 border group rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-lg"
                    >
                      {post.mainImage && (
                        <div className="overflow-hidden aspect-[16/9] bg-bgLight dark:bg-bgDark">
                          <img
                            src={post.mainImage}
                            alt={post.mainImageAlt || post.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="mb-2 text-sm md:text-base font-bold leading-snug text-brandDark dark:text-white line-clamp-2">
                          {post.title}
                        </h3>
                        {(post.metaDescription || post.tldr) && (
                          <p className="mb-3 text-xs md:text-sm leading-relaxed text-brandNavy/65 dark:text-gray-400 line-clamp-2">
                            {post.metaDescription || post.tldr}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brandPrimary dark:text-brandAccent">
                          Read More
                          <FaArrowRight className="text-[9px]" />
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}

          {/* More Articles button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 rounded-full bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
            >
              <FaChevronLeft />
              More Articles
            </Link>
          </div>
        </div>
      </article>

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
