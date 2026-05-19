import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaChevronLeft, FaExclamationTriangle } from "react-icons/fa";
import { useBlogStore } from "../../store/blog";
import BlogTemplate from "../../templates/BlogTemplate";

/* =======================
   SKELETON / STATE COMPONENTS
======================= */
const ArticleSkeleton = () => (
  <div className="min-h-screen pt-20 pb-32 bg-bgLight dark:bg-bgDark">
    <div className="container max-w-4xl">
      <div className="flex flex-col gap-6 animate-pulse">
        <div className="w-32 h-6 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
        <div className="w-3/4 h-12 rounded-2xl bg-surfaceLight dark:bg-surfaceDark" />
        <div className="w-1/2 h-12 rounded-2xl bg-surfaceLight dark:bg-surfaceDark" />
        <div className="flex gap-6 mt-4">
          <div className="w-32 h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
          <div className="w-24 h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
        </div>
        <div className="w-full mt-10 rounded-3xl h-96 bg-surfaceLight dark:bg-surfaceDark" />
        <div className="mt-8 space-y-4">
          <div className="w-full h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
          <div className="w-11/12 h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
          <div className="w-10/12 h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
          <div className="w-9/12 h-4 rounded-full bg-surfaceLight dark:bg-surfaceDark" />
        </div>
      </div>
    </div>
  </div>
);

const StateScreen = ({ icon, title, message, accent = false }) => (
  <div className="flex items-center justify-center min-h-screen px-6 bg-bgLight dark:bg-bgDark">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md text-center"
    >
      <div
        className={`inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full ${
          accent
            ? "bg-red-500/10 text-red-500"
            : "bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent"
        }`}
      >
        {icon}
      </div>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
        {title}
      </h1>
      <p className="mb-10 text-brandNavy/70 dark:text-gray-400">{message}</p>
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-300 rounded-full shadow-lg group bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
      >
        <FaChevronLeft className="transition-transform group-hover:-translate-x-1" />
        Back to the Knowledge Hub
      </Link>
    </motion.div>
  </div>
);

export default function BlogSingle() {
  const { slug } = useParams();
  const { singlePost, loading, error, fetchPostBySlug, clearSinglePost } =
    useBlogStore();

  useEffect(() => {
    if (slug) fetchPostBySlug(slug);
    return () => clearSinglePost();
  }, [slug, fetchPostBySlug, clearSinglePost]);

  if (loading) return <ArticleSkeleton />;

  if (error) {
    return (
      <StateScreen
        accent
        icon={<FaExclamationTriangle className="text-3xl" />}
        title="Something went wrong"
        message={`We couldn't load this article. ${error}`}
      />
    );
  }

  if (!singlePost) {
    return (
      <StateScreen
        icon={<span className="text-3xl font-black">404</span>}
        title="Article not found"
        message="The piece you're looking for may have been moved, archived, or never existed. Browse the hub to find what you came for."
      />
    );
  }

  const description =
    singlePost.metaDescription ||
    singlePost.shortDescription ||
    singlePost.tldr ||
    `Read the latest insights from RiskMan Consulting: ${singlePost.title}`;

  const canonicalHref =
    singlePost.canonicalUrl ||
    `https://www.riskman.in/blog/${singlePost.slug}`;

  const datePublished =
    singlePost.publishedDate || singlePost._createdAt || null;
  const dateModified =
    singlePost.lastUpdated ||
    singlePost._updatedAt ||
    datePublished;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: singlePost.seoTitle || singlePost.title,
    description,
    image: singlePost.mainImage ? [singlePost.mainImage] : undefined,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: singlePost.author?.name || "Riskman",
    },
    publisher: {
      "@type": "Organization",
      name: "Riskman Consulting",
      logo: {
        "@type": "ImageObject",
        url: "https://www.riskman.in/rm.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalHref,
    },
    keywords: [
      singlePost.primaryKeyword,
      ...(Array.isArray(singlePost.secondaryKeywords)
        ? singlePost.secondaryKeywords
        : []),
      ...(Array.isArray(singlePost.tags) ? singlePost.tags : []),
    ]
      .filter(Boolean)
      .join(", "),
  };

  const faqBlocks = Array.isArray(singlePost.body)
    ? singlePost.body.filter(
        (b) => b?._type === "faq" && Array.isArray(b.faqs) && b.faqs.length > 0
      )
    : [];
  const faqEntities = faqBlocks
    .flatMap((b) => b.faqs)
    .filter((f) => f?.question && f?.answer);
  const faqJsonLd =
    faqEntities.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntities.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.riskman.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.riskman.in/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: singlePost.title,
        item: canonicalHref,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          {(singlePost.seoTitle || singlePost.title)} | RiskMan Consulting
        </title>
        <meta name="description" content={description} />
        {singlePost.primaryKeyword && (
          <meta name="keywords" content={articleJsonLd.keywords} />
        )}
        <meta property="og:title" content={singlePost.seoTitle || singlePost.title} />
        <meta property="og:description" content={description} />
        {singlePost.mainImage && (
          <meta property="og:image" content={singlePost.mainImage} />
        )}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalHref} />
        {datePublished && (
          <meta property="article:published_time" content={datePublished} />
        )}
        {dateModified && (
          <meta property="article:modified_time" content={dateModified} />
        )}
        <link rel="canonical" href={canonicalHref} />
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        {faqJsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(faqJsonLd)}
          </script>
        )}
      </Helmet>
      <BlogTemplate blog={singlePost} />
    </>
  );
}
