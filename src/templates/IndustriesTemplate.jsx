// src/pages/industries/IndustriesTemplate.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaBriefcase,
  FaGlobe,
  FaCogs,
  FaUserCheck,
  FaCreditCard,
  FaIndustry,
  FaUserTie,
  FaDesktop,
  FaTruck,
  FaTrophy,
  FaAward,
  FaLeaf,
  FaLock,
  FaSun,
  FaFilm,
  FaCode,
  FaDatabase,
  FaCompass,
  FaBan,
  FaHome,
  FaChevronRight,
  FaCheck
} from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

/* =======================
   SOLUTION LINKS
   Industry JSON files reference some legacy service slugs; map them to the
   routes that exist today. Slugs without a live page render without a link.
======================= */
const solutionRoutes = {
  '/services/bcp-dr': '/services/bcp-dr',
  '/services/cybersecurity': '/services/cybersecurity',
  '/services/iso-certifications': '/services/iso-certifications',
  '/services/itgc-itac': '/services/itgc-itac',
  '/services/risk-advisory': '/services/risk-advisory',
  '/services/financial-advisory': '/services/financial-advisory',
  '/services/soc-services': '/services/soc-services',
  '/services/soc': '/services/soc-services',
  '/services/tprm': '/services/risk-advisory/tprm',
  '/services/data-privacy-protection': '/services/data-privacy',
  '/services/esg-advisory': '/services/esg',
  '/services/sustainability': '/services/esg',
  '/services/tisax-compliance': '/services/iso-certifications/tisax',
};

const iconMap = {
  Briefcase: FaBriefcase,
  Globe: FaGlobe,
  Settings: FaCogs,
  UserCheck: FaUserCheck,
  Shield: FaShieldAlt,
  Users: FaUsers,
  Scale: FaCheckCircle,
  Industry: FaIndustry,
  Global: FaGlobe,
  Business: FaBriefcase,
  User: FaUserTie,
  CreditCard: FaCreditCard,
  Monitor: FaDesktop,
  Truck: FaTruck,
  Trophy: FaTrophy,
  Award: FaAward,
  Leaf: FaLeaf,
  Lock: FaLock,
  Sun: FaSun,
  Film: FaFilm,
  Code: FaCode,
  Database: FaDatabase,
  Compass: FaCompass,
  ShieldOff: FaBan,
  Activity: FaChartLine,
};

export default function IndustriesTemplate() {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        // Using a more robust import approach for dynamic IDs
        const data = await import(`../data/industries/${id}.json`);
        setIndustry(data.default);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for industry:", id);
        setError(true);
        setLoading(false);
      }
    }
    loadJSON();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bgLight dark:bg-bgDark">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 rounded-full border-brandPrimary dark:border-brandAccent border-t-transparent"
        />
      </div>
    );
  }

  if (error || !industry) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 text-center bg-bgLight dark:bg-bgDark">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl p-12 border shadow-2xl bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
          <div className="mb-8 text-8xl">🔍</div>
          <h1 className="mb-6 text-4xl font-bold font-heading text-brandDark dark:text-white">Industry Not Found</h1>
          <p className="mb-10 text-lg font-medium text-brandNavy/60 dark:text-gray-400">The requested industry page could not be located. Please return to the main industries gallery.</p>
          <Link to="/industries" className="inline-flex items-center gap-3 px-10 py-5 text-sm font-black tracking-widest text-white uppercase transition-all rounded-full shadow-xl bg-brandPrimary hover:scale-105">
            <FaHome /> Back to Industries
          </Link>
        </motion.div>
      </div>
    );
  }

  const {
    heroSection,
    challengeSection,
    solutionsSection,
    trustedBrands,
    whyRiskMan,
    ctaSection,
    frequentlyAskedQuestions
  } = industry;

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white selection:bg-brandPrimary/30 selection:text-brandPrimary">

      {/* ================= HERO ================= */}
      {heroSection ? (
        <section className="relative py-16 overflow-hidden lg:py-28 bg-brandDark">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={heroSection.heroImage.src}
              alt={heroSection.heroImage.alt}
              className="object-cover w-full h-full"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brandDark/90 via-brandDark/70 to-brandDark/40" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl text-left">
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.3em] uppercase rounded-full bg-white/10 border border-white/20 text-brandAccent backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-brandAccent" />
                  {heroSection.tag}
                </motion.div>
                <motion.h1 variants={fadeInUp} className="mb-8 text-4xl font-bold md:text-6xl leading-[1.1] tracking-tight font-heading text-white">
                  {heroSection.title}
                </motion.h1>
                <motion.p variants={fadeInUp} className="max-w-2xl py-2 pl-6 mb-12 text-base font-medium leading-relaxed md:text-lg text-white/80 border-l-[4px] border-brandAccent">
                  {heroSection.description}
                </motion.p>
                {heroSection.primaryCTA && (
                  <motion.div variants={fadeInUp}>
                    <Link
                      to={heroSection.primaryCTA.action || "/contact"}
                      className="relative inline-flex items-center gap-5 px-10 py-5 overflow-hidden font-black transition-all duration-500 rounded-full shadow-2xl group bg-brandAccent text-brandDark hover:bg-white"
                    >
                      <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">{heroSection.primaryCTA.text}</span>
                      <FaArrowRight className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        /* Stand-in Hero if no heroSection key found */
        <section className="relative py-16 overflow-hidden lg:py-28 bg-brandDark">
          {industry.headerImage && (
            <div className="absolute inset-0">
              <img src={industry.headerImage} alt={industry.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-brandDark/90 via-brandDark/70 to-brandDark/40" />
            </div>
          )}
          <div className="container relative z-10 text-left">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brandAccent text-xs mb-6 tracking-[0.4em] uppercase font-black">
              {industry.heroTagline || "Industry Insight"}
            </motion.p>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold leading-none tracking-tight text-white md:text-6xl font-heading">
              {industry.title}
            </motion.h1>
          </div>
        </section>
      )}

      {/* ================= CHALLENGES (NARRATIVE) ================= */}
      {challengeSection && (
        <section className="relative z-10 py-16 bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="mb-10">
                  <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">The Strategic Landscape</span>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl font-heading">{challengeSection.title}</h2>
                </div>
                <p className="mb-10 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">{challengeSection.description}</p>
                <div className="mb-12 space-y-4">
                  {challengeSection.challenges.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-start gap-6 p-6 transition-all duration-500 border cursor-default rounded-2xl bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-xl group"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-500 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                        <FaCheck className="text-sm" />
                      </div>
                      <p className="text-lg font-bold leading-relaxed text-slate-700 dark:text-slate-200">{c}</p>
                    </motion.div>
                  ))}
                </div>
                {challengeSection.supportingText && (
                  <div className="relative p-8 overflow-hidden border-l-[6px] border-brandPrimary dark:border-brandAccent bg-brandPrimary/5 dark:bg-brandAccent/5 rounded-r-2xl">
                    <p className="relative z-10 text-base italic font-bold leading-relaxed text-brandPrimary dark:text-brandAccent">{challengeSection.supportingText}</p>
                  </div>
                )}
              </motion.div>
              <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative">
                <img
                  src={challengeSection.image.src}
                  alt={challengeSection.image.alt}
                  className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ================= SOLUTIONS ================= */}
      <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Solutions Architecture</span>
              <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl font-heading">
                {solutionsSection?.title || "Strategic Execution"}
              </h2>
            </div>
            <div className="pb-4">
              <Link to="/services" className="text-[11px] font-black uppercase tracking-[0.4em] text-brandPrimary dark:text-brandAccent border-b-2 border-brandPrimary/30 dark:border-brandAccent/30 pb-2 hover:border-brandPrimary dark:hover:border-brandAccent transition-all duration-300">View All Services</Link>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {(solutionsSection?.items || []).map((item, idx) => {
              const route = solutionRoutes[item.link];
              const cardClass = "group relative block p-10 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl transition-all duration-500 shadow-lg h-full overflow-hidden" + (route ? " hover:border-brandPrimary/50 dark:hover:border-brandAccent/50 hover:shadow-2xl" : "");
              const content = (
                <>
                  <div className="absolute top-0 right-0 p-8 text-[6rem] font-black opacity-[0.04] dark:opacity-[0.06] text-brandPrimary dark:text-brandAccent leading-none select-none">
                    {item.id}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="mb-4 text-xl font-bold leading-tight transition-colors group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                    {route && (
                      <div className="inline-flex items-center gap-3 mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-brandPrimary dark:text-brandAccent group-hover:translate-x-2 transition-all duration-500">
                        <span>Learn More</span>
                        <FaArrowRight className="text-sm" />
                      </div>
                    )}
                  </div>
                </>
              );
              return (
                <motion.div key={idx} className="h-full" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
                  {route ? (
                    <Link to={route} className={cardClass}>{content}</Link>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY RISKMAN ================= */}
      <section className="relative py-16 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <div className="mb-20 text-center">
            <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Excellence in Risk Management</span>
            <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight md:text-4xl font-heading">{whyRiskMan?.title || "Why RiskMan"}</h2>
            {whyRiskMan?.description && (
              <p className="max-w-4xl mx-auto text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                {whyRiskMan.description}
              </p>
            )}
          </div>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {(whyRiskMan?.features || []).map((item, idx) => {
              const IconComponent = iconMap[item.icon] || FaShieldAlt;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative h-full p-8 pt-16 transition-all duration-500 border group bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-2xl hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute flex items-center justify-center w-16 h-16 text-white shadow-xl -top-8 left-8 rounded-2xl bg-brandDark dark:bg-brandAccent dark:text-brandDark">
                    <IconComponent className="text-3xl" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold leading-tight transition-colors group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BRANDS ================= */}
      {trustedBrands && (
        <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark">
          <div className="container relative z-10">
            <div className="max-w-4xl mb-16">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl font-heading text-brandDark dark:text-white">{trustedBrands.title}</h2>
              {trustedBrands.description && (
                <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-500 dark:text-white/60">{trustedBrands.description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {(trustedBrands.logos || []).map((logo, i) => {
                const isImage = typeof logo === 'string' && (logo.startsWith('http') || logo.startsWith('/') || logo.includes('.webp') || logo.includes('.png') || logo.includes('.svg'));
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center w-40 h-24 p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl hover:shadow-md border-borderLight dark:border-borderDark"
                  >
                    {isImage ? (
                      <img
                        src={logo}
                        alt="Client logo"
                        className="object-contain max-w-full max-h-full"
                      />
                    ) : (
                      <span className="text-lg font-black tracking-tighter text-center uppercase text-brandDark">
                        {logo}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      {frequentlyAskedQuestions && (
        <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <div className="mb-16 text-center">
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Insights & Intelligence</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl font-heading">Frequently Asked Questions</h2>
            </div>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                {frequentlyAskedQuestions.slice(0, Math.ceil(frequentlyAskedQuestions.length / 2)).map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} />
                ))}
              </div>
              <div className="space-y-6">
                {frequentlyAskedQuestions.slice(Math.ceil(frequentlyAskedQuestions.length / 2)).map((faq, i) => (
                  <FAQItem key={i + 100} faq={faq} index={i + 10} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-16 overflow-hidden text-white bg-brandDark">
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-brandAccent font-black text-[10px] uppercase tracking-[0.4em] mb-8 block">Unparalleled Resilience</span>
            <h2 className="mb-10 text-3xl font-bold leading-tight tracking-tight md:text-4xl font-heading">{ctaSection?.title || "Establish Your Governance"}</h2>
            <Link to={ctaSection?.cta?.action || "/contact"} className="inline-flex items-center gap-6 px-10 py-5 font-black transition-all duration-500 rounded-full shadow-2xl group text-brandDark bg-brandAccent hover:bg-white">
              <span className="text-base tracking-tight uppercase">{ctaSection?.cta?.text || "Engage Our Expertise"}</span>
              <FaArrowRight className="text-lg transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary/30 dark:border-brandAccent/30' : 'bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark hover:border-brandPrimary/50 dark:hover:border-brandAccent/50'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-lg font-bold leading-tight text-left transition-colors cursor-pointer md:text-xl group-hover:text-brandPrimary dark:group-hover:text-brandAccent"
      >
        <span className="flex-1 pr-8">{faq.question}</span>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isOpen ? 'bg-brandPrimary dark:bg-brandAccent rotate-90 text-white dark:text-brandDark' : 'bg-surfaceLight dark:bg-surfaceDark text-brandNavy dark:text-gray-400'}`}>
          <FaChevronRight className="text-lg" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 mt-1 text-base font-medium leading-relaxed border-t text-slate-600 dark:text-slate-400 border-brandPrimary/10 dark:border-brandAccent/10">
              <div className="pt-6">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
