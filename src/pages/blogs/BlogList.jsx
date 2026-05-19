import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaChevronRight,
  FaSearch,
  FaArrowRight,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import { useBlogStore } from "../../store/blog";

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

/* =======================
   HELPERS
======================= */
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
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const getSummary = (post) =>
  post?.shortDescription ||
  post?.metaDescription ||
  post?.tldr ||
  (Array.isArray(post?.takeaways) ? post.takeaways[0] : "") ||
  "";

/* =======================
   STATIC PROMO BANNERS
   (Editorial promo cards interleaved between category sections)
======================= */
const PROMO_BANNERS = [
  {
    eyebrow: "Featured Playbook",
    title: "An Introduction to Digital Risk Strategy",
    description:
      "A practical guide to building resilient digital operations — from governance to incident response.",
    cta: { label: "Read the Guide", to: "/services" },
    accent: "primary",
    Icon: FaRocket,
  },
  {
    eyebrow: "2026 Outlook",
    title: "The State of Inbound Risk Advisory in 2026",
    description:
      "Benchmarks, signals, and the shifts shaping how leading firms manage emerging risk this year.",
    cta: { label: "Explore Insights", to: "/services" },
    accent: "navy",
    Icon: FaChartLine,
  },
];

/* =======================
   FEATURED CARD
======================= */
const FeaturedPostCard = ({ post }) => {
  if (!post) return null;
  const summary = getSummary(post);
  const stageLabel = FUNNEL_STAGE_LABELS[post.funnelStage];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden border shadow-xl rounded-3xl border-borderLight dark:border-borderDark bg-gradient-to-br from-brandPrimary/[0.04] via-surfaceLight to-brandAccent/[0.05] dark:from-brandAccent/[0.06] dark:via-surfaceDark dark:to-brandPrimary/[0.06]"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] group"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[360px] bg-brandDark/10">
          {post.mainImage ? (
            <img
              src={post.mainImage}
              alt={post.mainImageAlt || post.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-6xl font-black text-brandPrimary/15 dark:text-brandAccent/15">
              RM
            </div>
          )}
          <span className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase rounded-full bg-white/95 backdrop-blur text-brandPrimary shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-pulse" />
            Featured Insight
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {post.contentType && (
              <span className="px-3 py-1 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 text-brandPrimary dark:text-brandAccent text-[11px] font-bold tracking-wider uppercase">
                {formatTypeLabel(post.contentType)}
              </span>
            )}
            {stageLabel && (
              <span className="px-3 py-1 rounded-full bg-brandGold/20 text-brandDark dark:text-brandGold text-[11px] font-bold tracking-wider uppercase">
                {stageLabel}
              </span>
            )}
            {Array.isArray(post.categories) && post.categories[0] && (
              <span className="px-3 py-1 rounded-full bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark text-brandNavy/80 dark:text-gray-300 text-[11px] font-bold tracking-wider uppercase">
                {post.categories[0].title}
              </span>
            )}
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl lg:text-[2rem] font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
            {post.title}
          </h2>

          {summary && (
            <p className="mb-6 text-sm leading-relaxed md:text-base text-brandNavy/75 dark:text-gray-300 line-clamp-3">
              {summary}
            </p>
          )}

          {/* Author + meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-[13px] text-brandNavy/70 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 overflow-hidden border rounded-full bg-white dark:bg-bgDark border-borderLight dark:border-borderDark">
                {post.author?.image ? (
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    src="/rm.png"
                    alt="Riskman"
                    className="object-contain w-5 h-5"
                  />
                )}
              </div>
              <span className="font-semibold text-brandDark dark:text-white">
                {post.author?.name || "Riskman"}
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-brandNavy/30 dark:bg-white/30" />
            <span className="flex items-center gap-1.5">
              <FaCalendar className="text-[10px]" />
              {formatDate(post.publishedDate || post._createdAt)}
            </span>
          </div>

          <div className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full shadow-md bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold group-hover:translate-x-1">
            Read Full Article
            <FaArrowRight className="text-xs" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

/* =======================
   COMPACT CARD (grid items)
======================= */
const CompactBlogCard = ({ post }) => {
  const summary = getSummary(post);
  return (
    <motion.article
      variants={scaleIn}
      className="group relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-2xl border border-borderLight dark:border-borderDark overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-[0_22px_50px_-22px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_22px_50px_-22px_rgba(0,0,0,0.5)]"
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative w-full overflow-hidden aspect-video bg-brandDark/10">
          {post.mainImage ? (
            <img
              src={post.mainImage}
              alt={post.mainImageAlt || post.title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-4xl font-black text-brandPrimary/15 dark:text-brandAccent/15">
              RM
            </div>
          )}
          {post.contentType && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 dark:bg-bgDark/95 backdrop-blur text-brandPrimary dark:text-brandAccent text-[10px] font-bold tracking-wider uppercase shadow">
              {formatTypeLabel(post.contentType)}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-3 mb-2.5 text-[11px] font-medium text-brandNavy/55 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <FaCalendar className="text-brandPrimary dark:text-brandAccent text-[10px]" />
              {formatDate(post.publishedDate || post._createdAt)}
            </span>
          </div>

          <h3 className="mb-2 text-base font-bold leading-snug transition-colors duration-300 md:text-[17px] font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent line-clamp-2">
            {post.title}
          </h3>

          {summary && (
            <p className="mb-4 text-sm leading-relaxed text-brandNavy/65 dark:text-gray-400 line-clamp-2">
              {summary}
            </p>
          )}

          <div className="flex items-center gap-2 mt-auto text-sm font-semibold text-brandPrimary dark:text-brandAccent">
            <span>Read More</span>
            <FaChevronRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

/* =======================
   PROMO BANNER
======================= */
const PromoBanner = ({ banner }) => {
  const { eyebrow, title, description, cta, Icon, accent } = banner;
  const bgClass =
    accent === "navy"
      ? "from-brandDark via-brandNavy to-brandDark"
      : "from-brandPrimary via-brandPrimary to-brandAccent";

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${bgClass} text-white p-8 md:p-12 my-16 shadow-xl`}
    >
      {/* decorative blobs */}
      <div className="absolute pointer-events-none -top-1/2 -right-1/4 w-[40%] aspect-square rounded-full bg-white/10 blur-3xl" />
      <div className="absolute pointer-events-none -bottom-1/2 -left-1/4 w-[40%] aspect-square rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/15 backdrop-blur">
            {eyebrow}
          </span>
          <h3 className="mb-3 text-2xl font-bold leading-tight md:text-3xl font-heading">
            {title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed md:text-base text-white/85 max-w-prose">
            {description}
          </p>
          <Link
            to={cta.to}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all rounded-full bg-white text-brandDark hover:bg-brandGold hover:scale-[1.02] shadow-lg"
          >
            {cta.label}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="justify-self-end hidden md:flex items-center justify-center w-44 h-44 rounded-2xl bg-white/10 backdrop-blur-sm shadow-inner">
          <Icon className="text-6xl text-white/85" />
        </div>
      </div>
    </motion.aside>
  );
};

/* =======================
   CATEGORY SECTION
======================= */
const CategorySection = ({ title, slug, description, posts }) => {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm text-brandNavy/65 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        {slug && (
          <Link
            to={`/blogs?category=${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brandPrimary dark:text-brandAccent hover:opacity-80 transition-opacity shrink-0"
          >
            See All
            <FaArrowRight className="text-[10px]" />
          </Link>
        )}
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-60px" }}
      >
        {posts.slice(0, 3).map((post) => (
          <CompactBlogCard key={post._id} post={post} />
        ))}
      </motion.div>
    </section>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function BlogList() {
  const { posts, loading, error, fetchPosts } = useBlogStore();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("all");

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
      { label: "All Topics", value: "all" },
      ...Array.from(seen, ([value, label]) => ({ label, value })).sort((a, b) =>
        a.label.localeCompare(b.label)
      ),
    ];
  }, [posts]);

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
        post.shortDescription,
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

  // Featured = first filtered post
  const featuredPost = filteredPosts[0] || null;
  const restOfPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  // Group rest of posts by category
  const { categoryGroups, uncategorized } = useMemo(() => {
    const groups = new Map(); // slug -> { title, slug, description, posts }
    const uncategorizedPosts = [];

    restOfPosts.forEach((post) => {
      const cats = Array.isArray(post.categories) ? post.categories : [];
      if (cats.length === 0) {
        uncategorizedPosts.push(post);
        return;
      }
      cats.forEach((cat) => {
        if (!cat?.title) return;
        const key = cat.slug || cat.title;
        if (!groups.has(key)) {
          groups.set(key, {
            title: cat.title,
            slug: cat.slug,
            description: cat.description,
            posts: [],
          });
        }
        groups.get(key).posts.push(post);
      });
    });

    return {
      categoryGroups: Array.from(groups.values()),
      uncategorized: uncategorizedPosts,
    };
  }, [restOfPosts]);

  // Compose sections: interleave promo banners between category groups
  const renderedSections = useMemo(() => {
    const items = [];
    categoryGroups.forEach((group, idx) => {
      items.push({ kind: "category", data: group, key: `cat-${idx}` });
      const promoIndex = Math.floor(idx / 3);
      if ((idx + 1) % 3 === 0 && PROMO_BANNERS[promoIndex]) {
        items.push({
          kind: "promo",
          data: PROMO_BANNERS[promoIndex],
          key: `promo-${idx}`,
        });
      }
    });
    return items;
  }, [categoryGroups]);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      <Helmet>
        <title>Insights & Knowledge Hub | RiskMan Consulting Blog</title>
        <meta
          name="description"
          content="Explore expert articles and insights on risk management, regulatory compliance, cybersecurity, ESG, and strategic resilience from the RiskMan Consulting team."
        />
        <link rel="canonical" href="https://www.riskman.in/blogs" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-12 overflow-hidden isolate">
        <div className="absolute top-0 z-0 w-full h-full overflow-hidden -translate-x-1/2 pointer-events-none left-1/2">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brandPrimary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] -right-[5%] w-[30%] h-[30%] bg-brandAccent/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border rounded-full bg-brandPrimary/10 border-brandPrimary/30 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent dark:border-brandAccent/30"
            >
              <div className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent animate-pulse" />
              Insights & Perspectives
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl font-heading text-brandDark dark:text-white"
            >
              Latest{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Insights
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-brandNavy/75 dark:text-gray-400"
            >
              Expert views on risk management, regulatory compliance,
              cybersecurity, and strategic resilience — distilled into actionable
              guidance for modern leaders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED POST ================= */}
      {!loading && !error && featuredPost && (
        <section className="relative z-10 pb-10">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <FeaturedPostCard post={featuredPost} />
            </div>
          </div>
        </section>
      )}

      {/* ================= SEARCH & FILTER ================= */}
      <section className="relative z-20 pt-4 pb-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search insights, topics, or keywords..."
                className="w-full py-4 text-base transition-all duration-300 border shadow-md outline-none px-14 rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent focus:shadow-lg"
              />
              <FaSearch className="absolute transition-colors -translate-y-1/2 left-6 top-1/2 text-brandNavy/40 dark:text-gray-500 group-focus-within:text-brandPrimary dark:group-focus-within:text-brandAccent" />
            </div>

            {contentTypeFilters.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
                {contentTypeFilters.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveType(cat.value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      activeType === cat.value
                        ? "bg-brandPrimary text-white shadow-md shadow-brandPrimary/30 dark:bg-brandAccent dark:text-brandDark dark:shadow-brandAccent/30"
                        : "bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark text-brandNavy/75 dark:text-gray-400 hover:border-brandPrimary dark:hover:border-brandAccent hover:text-brandPrimary dark:hover:text-brandAccent"
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

      {/* ================= CATEGORY GROUPS + PROMO BANNERS ================= */}
      <section className="relative pb-10 transition-colors duration-300 bg-bgLight dark:bg-bgDark isolate">
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
              No insights found{search ? ` for "${search}"` : ""}.
            </div>
          )}

          {!loading &&
            !error &&
            renderedSections.map((item) =>
              item.kind === "category" ? (
                <CategorySection
                  key={item.key}
                  title={item.data.title}
                  slug={item.data.slug}
                  description={item.data.description}
                  posts={item.data.posts}
                />
              ) : (
                <PromoBanner key={item.key} banner={item.data} />
              )
            )}

          {/* More Insights (uncategorized) */}
          {!loading && !error && uncategorized.length > 0 && (
            <CategorySection
              title="More Insights"
              description="Additional perspectives from across our advisory practice."
              posts={uncategorized}
            />
          )}
        </div>
      </section>

      {/* ================= NEWSLETTER CTA ================= */}
      <section className="relative px-6 py-24 overflow-hidden isolate">
        <div className="container">
          <div className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-brandDark dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-8 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPrimary blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                Stay Ahead of the Curve
              </h2>
              <p className="mb-10 text-lg text-white/70">
                Subscribe to our newsletter for the latest insights in risk
                management and strategic advisory delivered to your inbox.
              </p>

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
