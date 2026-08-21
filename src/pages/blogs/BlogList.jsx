import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaChevronRight,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { useBlogStore } from "../../store/blog";
import { imageUrl, imageDimensions } from "../../utils/sanityImage";

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
// Effective topic for a post: its own topic ownership (pillars) or, for
// supporting/cluster articles, the topic owned by their parent pillar.
const getTopic = (post) =>
  String(post?.topicOwnership || post?.parentTopic || "").trim();

// "ESG & Sustainability" -> "esg-and-sustainability". The trailing "-blogs" that
// some Sanity category slugs carry is dropped so both spellings compare equal.
const slugifyTopic = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-blogs?$/, "");

// Resolve a ?topic= / ?category= slug to one of the real topic values, matching
// either the topic itself or a category slug attached to a post of that topic.
const resolveTopicFromSlug = (slug, allPosts) => {
  const target = slugifyTopic(slug);
  if (!target) return "";
  for (const post of allPosts) {
    const topic = getTopic(post);
    if (!topic) continue;
    if (slugifyTopic(topic) === target) return topic;
    const cats = Array.isArray(post.categories) ? post.categories : [];
    if (cats.some((c) => slugifyTopic(c?.slug || c?.title) === target))
      return topic;
  }
  return "";
};

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
   FEATURED CARD
======================= */
const FeaturedPostCard = ({ post }) => {
  if (!post) return null;
  const summary = getSummary(post);

  // Drive the image area's aspect ratio from the image's real dimensions so it
  // is shown in full (no crop) with no letterbox gaps, and the card height
  // adjusts to the image instead of being forced to a fixed min-height.
  const dims = imageDimensions(post.mainImage);
  const imageRatio = dims ? `${dims.width} / ${dims.height}` : "3 / 2";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden border shadow-xl rounded-3xl border-borderLight dark:border-borderDark bg-gradient-to-br from-brandPrimary/[0.04] via-surfaceLight to-brandAccent/[0.05] dark:from-brandAccent/[0.06] dark:via-surfaceDark dark:to-brandPrimary/[0.06]"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="grid   grid-cols-1 lg:grid-cols-[1.1fr_1fr] group"
      >
        {/* IMAGE */}
        <div
          className="relative self-center overflow-hidden bg-brandDark/10"
          style={{ aspectRatio: imageRatio }}
        >
          {post.mainImage ? (
            <img
              src={imageUrl(post.mainImage, { width: 900 })}
              alt={post.mainImageAlt || post.title}
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-6xl font-black text-brandPrimary/15 dark:text-brandAccent/15">
              RM
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-6 md:p-10">
          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
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
              <div className="flex items-center justify-center w-9 h-9 p-1 overflow-hidden border rounded-full bg-white border-borderLight dark:border-borderDark shadow-sm">
                <img
                  src={post.author?.image || "/rm.png"}
                  alt={post.author?.name || "Riskman"}
                  className="object-contain w-full h-full"
                />
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
              src={imageUrl(post.mainImage, { width: 640, height: 360 })}
              alt={post.mainImageAlt || post.title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-4xl font-black text-brandPrimary/15 dark:text-brandAccent/15">
              RM
            </div>
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
   MAIN COMPONENT
======================= */
export default function BlogList() {
  const { posts, loading, error, fetchPosts } = useBlogStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState("all");
  const urlTopicSlug = searchParams.get("topic") || searchParams.get("category") || "";

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Filter chips are driven by Topic Ownership (e.g. "SOC", "PCI DSS"),
  // grouping each pillar together with the cluster articles beneath it.
  const topicFilters = useMemo(() => {
    const seen = new Set();
    posts.forEach((post) => {
      const topic = getTopic(post);
      if (topic) seen.add(topic);
    });
    return [
      { label: "All Topics", value: "all" },
      ...Array.from(seen)
        .sort((a, b) => a.localeCompare(b))
        .map((topic) => ({ label: topic, value: topic })),
    ];
  }, [posts]);

  useEffect(() => {
    if (activeTopic === "all") return;
    const stillExists = topicFilters.some((f) => f.value === activeTopic);
    if (!stillExists) setActiveTopic("all");
  }, [topicFilters, activeTopic]);

  // Landing on /blogs?topic=iso (or the legacy ?category=<slug> links used by
  // the post pages) preselects that chip instead of silently showing everything.
  useEffect(() => {
    if (!urlTopicSlug || posts.length === 0) return;
    setActiveTopic(resolveTopicFromSlug(urlTopicSlug, posts) || "all");
  }, [urlTopicSlug, posts]);

  const handleTopicChange = (value) => {
    setActiveTopic(value);
    const next = new URLSearchParams(searchParams);
    next.delete("category");
    if (value === "all") next.delete("topic");
    else next.set("topic", slugifyTopic(value));
    setSearchParams(next, { replace: true });
  };

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    const seenIds = new Set();
    const seenSlugs = new Set();
    const seenTitles = new Set();
    return posts.filter((post) => {
      const idKey = post?._id;
      const slugKey = post?.slug;
      const titleKey = post?.title?.trim().toLowerCase();
      if (idKey && seenIds.has(idKey)) return false;
      if (slugKey && seenSlugs.has(slugKey)) return false;
      if (titleKey && seenTitles.has(titleKey)) return false;

      const matchesTopic =
        activeTopic === "all" || getTopic(post) === activeTopic;
      if (!matchesTopic) return false;

      if (term) {
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
        if (!haystack.includes(term)) return false;
      }

      if (idKey) seenIds.add(idKey);
      if (slugKey) seenSlugs.add(slugKey);
      if (titleKey) seenTitles.add(titleKey);
      return true;
    });
  }, [posts, search, activeTopic]);

  // With a topic chip or a search active the featured hero is skipped so the
  // matching cards start right below the filter. Posts are never grouped into
  // topic sections — the grid is flat in every view.
  const isFiltering = activeTopic !== "all" || search.trim() !== "";

  // Featured = first filtered post (only used in the default, unfiltered view)
  const featuredPost = !isFiltering ? filteredPosts[0] || null : null;

  // Both views render the same flat card grid. In the default (unfiltered)
  // view the first post is lifted out into the featured hero above, so it is
  // dropped from the grid to avoid showing it twice.
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

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
      <section className="relative pt-28 pb-8 overflow-hidden isolate md:pt-32">
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

            {topicFilters.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
                {topicFilters.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleTopicChange(cat.value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      activeTopic === cat.value
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

      {/* ================= INSIGHTS GRID ================= */}
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

          {/* Card grid — same layout for "All Topics" and for a filtered topic */}
          {!loading && !error && gridPosts.length > 0 && (
            <section className="py-10">
              <p className="mb-8 text-sm font-medium text-brandNavy/60 dark:text-gray-400">
                {gridPosts.length}{" "}
                {gridPosts.length === 1 ? "insight" : "insights"}
                {activeTopic !== "all" ? ` in ${activeTopic}` : ""}
              </p>
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {gridPosts.map((post) => (
                  <CompactBlogCard key={post._id} post={post} />
                ))}
              </motion.div>
            </section>
          )}
        </div>
      </section>

    </div>
  );
}
