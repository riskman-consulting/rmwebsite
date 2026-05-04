import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaChevronRight,
  FaSearch,
  FaTag,
} from "react-icons/fa";
import { useBlogStore } from "../../store/blog";
// import BackgroundGrid from "../../component/common/BackgroundGrid";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const FUNNEL_STAGE_LABELS = {
  awareness: "Awareness",
  consideration: "Consideration",
  decision: "Decision",
};

const formatTypeLabel = (value) =>
  String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

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

export default function BlogList() {
  const { posts, loading, error, fetchPosts } = useBlogStore();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("all");

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Build filter chips from the actual contentType values present in posts
  const contentTypeFilters = useMemo(() => {
    const seen = new Map();
    posts.forEach((post) => {
      const value = post?.contentType;
      if (!value) return;
      const key = String(value).trim();
      if (!key || seen.has(key)) return;
      seen.set(key, formatTypeLabel(key));
    });
    return [
      { label: "All", value: "all" },
      ...Array.from(seen, ([value, label]) => ({ label, value })).sort((a, b) =>
        a.label.localeCompare(b.label)
      ),
    ];
  }, [posts]);

  // If the active filter disappears (data refresh), fall back to "all"
  useEffect(() => {
    if (activeType === "all") return;
    const stillExists = contentTypeFilters.some((f) => f.value === activeType);
    if (!stillExists) setActiveType("all");
  }, [contentTypeFilters, activeType]);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesType =
        activeType === "all" || post.contentType === activeType;
      if (!matchesType) return false;
      if (!term) return true;
      const haystack = [
        post.title,
        post.metaDescription,
        post.tldr,
        post.seoTitle,
        ...(Array.isArray(post.takeaways) ? post.takeaways : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [posts, search, activeType]);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      <Helmet>
        <title>Insights & Knowledge Hub | RiskMan Consulting Blog</title>
        <meta name="description" content="Explore expert articles and insights on risk management, regulatory compliance, cybersecurity, ESG, and strategic resilience from the RiskMan Consulting team." />
        <link rel="canonical" href="https://www.riskman.in/blogs" />
      </Helmet>
      {/* <BackgroundGrid /> */}

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden isolate">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 z-0 w-full h-full overflow-hidden -translate-x-1/2 pointer-events-none left-1/2">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandPrimary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-brandAccent/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandPrimary/10 border-brandPrimary/30 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent dark:border-brandAccent/30"
            >
              <div className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent animate-pulse" />
              Insights & Perspectives
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-8 text-5xl font-bold leading-tight md:text-7xl font-heading text-brandDark dark:text-white"
            >
              Knowledge <span className="text-brandPrimary dark:text-brandAccent">Hub</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-brandNavy dark:text-gray-400"
            >
              Expert views on risk management, regulatory compliance, cybersecurity, and strategic resilience in an evolving global landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <section className="relative z-20 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search insights..."
                className="w-full py-5 text-lg transition-all duration-300 border shadow-xl outline-none px-14 rounded-3xl bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-md border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent group-hover:shadow-2xl"
              />
              <FaSearch className="absolute transition-colors -translate-y-1/2 left-6 top-1/2 text-brandNavy/40 dark:text-gray-500 group-focus-within:text-brandPrimary dark:group-focus-within:text-brandAccent" />
            </div>

            {contentTypeFilters.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {contentTypeFilters.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveType(cat.value)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeType === cat.value
                      ? "bg-brandPrimary text-white shadow-lg shadow-brandPrimary/30 dark:bg-brandAccent dark:text-brandDark dark:shadow-brandAccent/30"
                      : "bg-surfaceLight/50 dark:bg-surfaceDark/50 border border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
                      }`}
                  >
                    {cat.label} 
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark isolate">
        <div className="container">
          {loading && (
            <div className="py-20 text-center text-brandNavy/60 dark:text-gray-400">
              Loading insights...
            </div>
          )}

          {error && !loading && (
            <div className="py-20 text-center text-red-500">
              Failed to load posts: {error}
            </div>
          )}

          {!loading && !error && filteredPosts.length === 0 && (
            <div className="py-20 text-center text-brandNavy/60 dark:text-gray-400">
              No insights found{search ? ` for “${search}”` : ""}.
            </div>
          )}

          {!loading && !error && filteredPosts.length > 0 && (
            <motion.div
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {filteredPosts.map((post) => {
                const summary =
                  post.metaDescription ||
                  post.tldr ||
                  (Array.isArray(post.takeaways) ? post.takeaways[0] : "") ||
                  "";
                const stageLabel = FUNNEL_STAGE_LABELS[post.funnelStage];

                return (
                  <motion.article
                    key={post._id}
                    variants={scaleIn}
                    className="group relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-2xl border border-borderLight dark:border-borderDark overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.4)]"
                  >
                    <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                      {/* Image wrapper - 16:9 (1920x1080) */}
                      <div className="relative w-full overflow-hidden aspect-video bg-brandDark/10">
                        {post.mainImage && (
                          <motion.img
                            src={post.mainImage}
                            alt={post.mainImageAlt || post.title}
                            className="object-cover w-full h-full transition-all duration-700 ease-out"
                          />
                        )}

                      </div>

                      {/* Content section */}
                      <div className="flex flex-col flex-1 p-5">
                        <div className="flex items-center gap-3 mb-3 text-[11px] font-medium text-brandNavy/60 dark:text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <FaCalendar className="text-brandPrimary dark:text-brandAccent" />
                            {formatDate(post._createdAt)}
                          </div>
                          
                        </div>

                        <h3 className="mb-2 text-base font-bold leading-snug transition-colors duration-300 md:text-lg font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                          {post.title}
                        </h3>

                        {summary && (
                          <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400 line-clamp-2">
                            {summary}
                          </p>
                        )}

                        <div className="flex items-center gap-2 mt-auto text-sm font-semibold text-brandPrimary dark:text-brandAccent">
                          <span>Read Full Post</span>
                          <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= NEWSLETTER CTA ================= */}
      <section className="relative px-6 py-24 overflow-hidden isolate">
        <div className="container">
          <div className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-brandDark dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-8 md:p-16 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPrimary blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Stay Ahead of the Curve</h2>
              <p className="mb-10 text-lg text-white/70">Subscribe to our newsletter for the latest insights in risk management and strategic advisory delivered to your inbox.</p>

              <div className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 text-white transition-all border rounded-full outline-none bg-white/10 border-white/20 placeholder:text-white/40 focus:border-brandAccent"
                />
                <button className="px-8 py-4 font-bold transition-all rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
