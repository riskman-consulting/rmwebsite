import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaEnvelopeOpenText,
  FaRegNewspaper,
} from "react-icons/fa";
import { useNewsletterStore } from "../../store/newsLetter";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
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

export default function NewsletterList() {
  const { newsletters, loading, error, fetchNewsletters } = useNewsletterStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchNewsletters();
  }, [fetchNewsletters]);

  const filteredNewsletters = useMemo(() => {
    const now = Date.now();
    const term = search.trim().toLowerCase();

    // Hide newsletters scheduled for a future date
    const published = newsletters.filter((item) => {
      const scheduled = item.createdAt || item.newsDate || item._createdAt;
      if (!scheduled) return true;
      const ts = new Date(scheduled).getTime();
      if (Number.isNaN(ts)) return true;
      return ts <= now;
    });

    if (!term) return published;
    return published.filter((item) => {
      const haystack = [item.title, item.description, item.username]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [newsletters, search]);

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      <Helmet>
        <title>Newsletter | RiskMan Consulting</title>
        <meta
          name="description"
          content="Subscribe to RiskMan's newsletter for weekly insights on risk management, regulatory compliance, cybersecurity, and strategic resilience."
        />
        <link rel="canonical" href="https://www.riskman.in/newsletter" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-16 overflow-hidden isolate">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-32 -left-20 w-[480px] h-[480px] bg-brandPrimary/10 dark:bg-brandAccent/10 blur-[140px] rounded-full" />
          <div className="absolute top-40 -right-32 w-[420px] h-[420px] bg-brandGold/10 dark:bg-brandGold/10 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandPrimary/10 border-brandPrimary/30 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent dark:border-brandAccent/30"
            >
              <FaRegNewspaper className="text-sm" />
              The RiskMan Brief
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-[1.05] md:text-7xl font-heading text-brandDark dark:text-white"
            >
              Latest{" "}
              <span className="italic text-brandPrimary dark:text-brandAccent">
                News
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-lg leading-relaxed md:text-xl text-brandNavy/80 dark:text-gray-400"
            >
              Curated stories, regulatory updates, and industry highlights
              delivered straight from the RiskMan team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="relative z-20 pb-12">
        <div className="container">
          <div className="max-w-xl ml-auto">
            <div className="relative group">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search newsletters..."
                className="w-full py-4 text-sm transition-all duration-300 border shadow-md outline-none pl-12 pr-5 rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark focus:border-brandPrimary dark:focus:border-brandAccent"
              />
              <FaSearch className="absolute -translate-y-1/2 left-5 top-1/2 text-brandNavy/40 dark:text-gray-500 group-focus-within:text-brandPrimary dark:group-focus-within:text-brandAccent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER GRID ================= */}
      <section className="relative pb-24">
        <div className="container">
          {loading && (
            <div className="py-24 text-center text-brandNavy/60 dark:text-gray-400">
              Loading newsletters...
            </div>
          )}

          {error && !loading && (
            <div className="py-24 text-center text-red-500">
              Failed to load newsletters: {error}
            </div>
          )}

          {!loading && !error && filteredNewsletters.length === 0 && (
            <div className="py-24 text-center text-brandNavy/60 dark:text-gray-400">
              No newsletters found
              {search ? ` for “${search}”` : " yet — check back soon."}
            </div>
          )}

          {!loading && !error && filteredNewsletters.length > 0 && (
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {filteredNewsletters.map((item) => {
                const issueDate =
                  item.newsDate || item.createdAt || item._createdAt;
                const dateLabel = formatDate(issueDate);
                const Wrapper = item.linkdinUrl ? "a" : "div";
                const wrapperProps = item.linkdinUrl
                  ? {
                      href: item.linkdinUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <motion.article
                    key={item._id}
                    variants={scaleIn}
                    className="group relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-2xl border border-borderLight dark:border-borderDark overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
                  >
                    <Wrapper {...wrapperProps} className="flex flex-col h-full">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[4/3] bg-brandDark/10">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-brandPrimary/20 to-brandAccent/20">
                            <FaRegNewspaper className="text-5xl text-brandPrimary/40 dark:text-brandAccent/40" />
                          </div>
                        )}

                        {/* NEWS label badge - top left */}
                        <div className="absolute top-0 left-0 z-10">
                          <span className="inline-block px-5 py-2 text-xs font-black tracking-[0.3em] uppercase text-white bg-brandDark/65 backdrop-blur-sm">
                            News
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 px-7 pt-7 pb-8">
                        {dateLabel && (
                          <p className="mb-5 text-sm font-medium text-brandNavy/60 dark:text-gray-400">
                            {dateLabel}
                          </p>
                        )}

                        <h3 className="mb-5 text-2xl font-bold leading-tight transition-colors duration-300 md:text-[26px] font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent line-clamp-2">
                          {item.title}
                        </h3>

                        {item.description && (
                          <p className="mb-10 text-[15px] leading-relaxed text-brandNavy/75 dark:text-gray-400 line-clamp-3">
                            {item.description}
                          </p>
                        )}

                        <div className="flex items-center gap-3 mt-auto group/cta">
                          <span className="flex items-center justify-center w-9 h-9 transition-all duration-300 border-2 rounded-full border-brandPrimary dark:border-brandAccent text-brandPrimary dark:text-brandAccent group-hover/cta:bg-brandPrimary dark:group-hover/cta:bg-brandAccent group-hover/cta:text-white dark:group-hover/cta:text-brandDark">
                            <FaArrowRight className="text-[11px]" />
                          </span>
                          <span className="text-base font-semibold text-brandPrimary dark:text-brandAccent">
                            Find out more
                          </span>
                        </div>
                      </div>
                    </Wrapper>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= SUBSCRIBE CTA ================= */}
      <section className="relative px-6 py-24 overflow-hidden isolate">
        <div className="container">
          <div className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-brandDark dark:bg-surfaceDark border border-borderLight dark:border-borderDark p-10 md:p-16">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandPrimary blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[11px] font-bold tracking-[0.25em] uppercase rounded-full bg-brandAccent/15 text-brandAccent border border-brandAccent/30">
                  <FaEnvelopeOpenText />
                  Subscribe
                </div>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl font-heading">
                  Get the next issue in your inbox.
                </h2>
                <p className="text-base text-white/70 md:text-lg">
                  One email a month. No spam, no fluff — just the regulatory,
                  cyber, and ESG signals that actually matter to your business.
                </p>
              </div>

              <div className="lg:col-span-5">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-6 py-4 text-white transition-all border rounded-full outline-none bg-white/10 border-white/20 placeholder:text-white/40 focus:border-brandAccent"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black tracking-wide transition-all rounded-full shadow-xl group bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/30"
                  >
                    Subscribe to the brief
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-1 text-xs text-white/50">
                    By subscribing, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline hover:text-brandAccent"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
