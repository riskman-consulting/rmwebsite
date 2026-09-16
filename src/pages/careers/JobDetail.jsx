import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaChevronLeft,
  FaBriefcase,
  FaRegClock,
  FaRegCalendarAlt,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useCareerStore } from "../../store/career";
import ApplicationForm from "./ApplicationForm";
import CopyLinkButton from "./CopyLinkButton";
import {
  matchesJobId,
  getJobPath,
  isJobOpen,
  formatJobDate,
  formatEmploymentType,
} from "../../utils/jobSlug";

const SITE_URL = "https://www.riskman.in";
// Must match scripts/generate-meta.mjs — the prerendered head and the
// client-rendered head have to agree, and the numbers must be the image's
// real pixel size or LinkedIn sizes the preview card wrongly.
const OG_IMAGE = `${SITE_URL}/rm.png`;
const OG_IMAGE_WIDTH = "1500";
const OG_IMAGE_HEIGHT = "400";

export default function JobDetailPage() {
  const { jobId } = useParams();
  const { allJobOpenings, loading, loaded, fetchCareerPage } = useCareerStore();

  useEffect(() => {
    if (!loaded) fetchCareerPage();
  }, [loaded, fetchCareerPage]);

  const job = useMemo(
    () => allJobOpenings.find((item) => matchesJobId(item, jobId)),
    [allJobOpenings, jobId]
  );

  const open = job ? isJobOpen(job) : false;
  const shareUrl = job ? `${SITE_URL}${getJobPath(job)}` : "";

  /* ---------------------------------------------------------------- *
   * Loading / not found
   * ---------------------------------------------------------------- */
  if (!loaded || loading) {
    return (
      <div className="min-h-[60vh] max-w-6xl px-6 py-24 mx-auto animate-pulse">
        <div className="w-40 h-3 mb-10 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="w-2/3 h-10 mb-6 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="w-1/3 h-4 mb-12 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-3">
          <div className="w-full h-3 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="w-11/12 h-3 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="w-4/5 h-3 rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <Helmet>
          <title>Position Not Found | RiskMan Consulting</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <h1 className="mb-4 text-3xl font-black">This role is no longer listed</h1>
        <p className="max-w-md mb-8 text-sm text-zinc-500">
          The position you are looking for has been filled or removed. Explore our
          current openings instead.
        </p>
        <Link
          to="/careers"
          className="px-8 py-3 text-sm font-bold text-white transition-all bg-brandPrimary rounded-xl hover:opacity-90"
        >
          View all openings
        </Link>
      </div>
    );
  }

  /* ---------------------------------------------------------------- *
   * Structured data — lets the role surface in Google Jobs
   * ---------------------------------------------------------------- */
  const jobJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.title,
    datePosted: job.datePosted || undefined,
    validThrough: job.lastDate || undefined,
    employmentType: job.employmentType || undefined,
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "RiskMan Consulting",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/rm.png`,
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: job.location },
        }
      : undefined,
    url: shareUrl,
  };

  const metaDescription = (job.description || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 170) ||
    `Apply for the ${job.title} role at RiskMan Consulting${
      job.location ? ` in ${job.location}` : ""
    }.`;

  const shareText = encodeURIComponent(
    `${job.title} at RiskMan Consulting — ${shareUrl}`
  );

  return (
    <div className="min-h-screen font-sans bg-surfaceLight dark:bg-surfaceDark text-zinc-900 dark:text-zinc-100">
      <Helmet>
        <title>{`${job.title} | Careers at RiskMan Consulting`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={shareUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RiskMan Consulting" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={`${job.title} | Careers at RiskMan Consulting`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
        <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={job.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${job.title} | Careers at RiskMan Consulting`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {!open && <meta name="robots" content="noindex, follow" />}
        <script type="application/ld+json">{JSON.stringify(jobJsonLd)}</script>
      </Helmet>

      {/* HEADER */}
      <header className="relative px-6 pt-16 pb-12 overflow-hidden border-b border-borderLight dark:border-borderDark">
        <div className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-brandPrimary/5 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 hover:text-brandPrimary mb-10 transition-colors"
          >
            <FaChevronLeft /> BACK TO OPPORTUNITIES
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {job.employmentType && (
              <span className="text-[10px] font-bold px-2 py-1 bg-brandPrimary/10 text-brandPrimary rounded uppercase">
                {formatEmploymentType(job.employmentType)}
              </span>
            )}

            <h1 className="mt-5 mb-6 text-4xl font-black tracking-tight md:text-5xl">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-zinc-500">
              <span className="font-bold text-brandPrimary">RiskMan Consulting</span>
              {job.location && (
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-brandPrimary" /> {job.location}
                </span>
              )}
              {job.employmentType && (
                <span className="flex items-center gap-2">
                  <FaBriefcase className="text-brandPrimary" />
                  {formatEmploymentType(job.employmentType)}
                </span>
              )}
              {job.datePosted && (
                <span className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-brandPrimary" /> Posted{" "}
                  {formatJobDate(job.datePosted)}
                </span>
              )}
              {job.lastDate && (
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-brandPrimary" /> Apply by{" "}
                  {formatJobDate(job.lastDate)}
                </span>
              )}
            </div>

            {/* SHARE ROW */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <CopyLinkButton label="Copy link" />
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 transition-all border rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-brandPrimary hover:border-brandPrimary"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href={`https://wa.me/?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 transition-all border rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-brandPrimary hover:border-brandPrimary"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  `${job.title} at RiskMan Consulting`
                )}&body=${shareText}`}
                title="Share by email"
                className="inline-flex items-center justify-center w-9 h-9 transition-all border rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-brandPrimary hover:border-brandPrimary"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* BODY */}
      <main className="grid max-w-6xl gap-12 px-6 py-16 mx-auto lg:grid-cols-[1.3fr_1fr]">
        {/* DESCRIPTION */}
        <section>
          <h2 className="mb-6 text-[11px] font-black tracking-widest uppercase text-zinc-400">
            About the role
          </h2>
          <p className="text-sm leading-relaxed whitespace-pre-line text-zinc-600 dark:text-zinc-300">
            {job.description || "Details for this role will be shared shortly."}
          </p>
        </section>

        {/* APPLY */}
        <section id="apply" className="lg:sticky lg:top-[150px] h-fit">
          <div className="p-8 bg-white border shadow-xl dark:bg-zinc-900 border-borderLight dark:border-borderDark rounded-3xl shadow-zinc-200/40 dark:shadow-none">
            {open ? (
              <ApplicationForm
                jobTitle={job.title}
                renderSuccessAction={() => (
                  <Link
                    to="/careers"
                    className="inline-block px-10 py-3 font-bold text-white transition-all bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-xl hover:opacity-90"
                  >
                    View more roles
                  </Link>
                )}
              />
            ) : (
              <div className="text-center">
                <h3 className="mb-3 text-xl font-bold">Applications closed</h3>
                <p className="mb-8 text-sm leading-relaxed text-zinc-500">
                  The deadline for this position
                  {job.lastDate ? ` (${formatJobDate(job.lastDate)})` : ""} has
                  passed. Browse our current openings for similar opportunities.
                </p>
                <Link
                  to="/careers"
                  className="inline-block px-8 py-3 text-sm font-bold text-white transition-all bg-brandPrimary rounded-xl hover:opacity-90"
                >
                  View all openings
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
