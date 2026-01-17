import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaChartLine, FaCog, FaHome, FaChevronRight, FaPlay, FaChevronDown } from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const serviceThemes = {
  'itgc-itac': { aura: 'blue', accent: 'brandAccent' },
  'pci-dss-compliance': { aura: 'emerald', accent: 'brandAccent' },
  'data-privacy': { aura: 'indigo', accent: 'brandAccent' },
  'tprm': { aura: 'violet', accent: 'brandAccent' },
  'esg-advisory': { aura: 'emerald', accent: 'brandAccent' },
  'iso-certifications': { aura: 'amber', accent: 'brandAccent' },
  'default': { aura: 'brandPrimary', accent: 'brandAccent' }
};

/* =======================
   MAIN COMPONENT
======================= */
export default function NewServiceTemplate() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        const response = await fetch(`/src/data/services/${id}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setService(data);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for service:", id, e);
        setError(true);
        setLoading(false);
      }
    }
    loadJSON();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bgLight dark:bg-bgDark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 space-y-6 text-center"
        >
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">⚠️</div>
          <h1 className="text-3xl font-bold text-brandDark dark:text-white">Service Not Found</h1>
          <p className="text-brandNavy dark:text-gray-400">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl"
          >
            <FaHome /> Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!service) return null;

  const {
    heroSection,
    trusteSection,
    weHelpSection,
    solutionSection,
    partnerSection,
    experienceSection,
    servicesOverview,
    industryUseCases,
    fourStepApproach,
    helpUsSection,
    proActiveSection,
    riskAnalysisSection,
    articalSection,
    riskResilientSection,
    frequentlyAskedQuestions,
    riskAwarenessSection,
    howWeHelp,
    valueSection,
    processSection,
    trustedBy,
    whyRiskMan,
    impactStats,
    testimonials,
    latestInsights,
    coreServices,
    whoWeAre,
    complianceLevels,
    whyComplianceMatters,
    statisticsSection,
  } = service;

  const theme = serviceThemes[id] || serviceThemes['default'];

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark selection:bg-brandAccent/30 selection:text-brandAccent">

      {/* Dynamic Background Aura */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-25%] left-[-15%] w-[80%] h-[80%] bg-${theme.aura === 'brandPrimary' ? 'blue' : theme.aura}-500/[0.08] dark:bg-${theme.aura === 'brandPrimary' ? 'blue' : theme.aura}-500/[0.12] blur-[180px] rounded-full animate-pulse-slow`} />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-brandAccent/[0.05] dark:bg-brandAccent/[0.08] blur-[150px] rounded-full" />
      </div>

      {/* ================= HERO SECTION (PREMIUM OVERHAUL) ================= */}
      {heroSection && (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
          {/* Background Image with sophisticated blend */}
          <div className="absolute inset-0 z-0 scale-105">
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={
                heroSection.bgImage ||
                heroSection.heroImage?.src ||
                heroSection.image?.src ||
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600"
              }
              alt={heroSection.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bgDark/95 via-bgDark/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-bgDark/40 via-transparent to-bgDark/95" />
          </div>

          <div className="container relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-12">

              {/* Left Content Column */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-10 lg:col-span-7"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-6 py-2 border rounded-full shadow-2xl glass-effect-light dark:glass-effect border-white/10">
                  <span className="w-2 h-2 rounded-full bg-brandAccent animate-ping" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{heroSection.badge || "Consulting Excellence"}</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                  {heroSection.title.split(' ').map((word, i) => (
                    <span key={i} className={i === heroSection.title.split(' ').length - 1 ? "text-brandAccent block mt-2" : "block"}>
                      {word}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="max-w-2xl text-xl font-medium leading-relaxed md:text-2xl text-white/60"
                >
                  {heroSection.description}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                  {heroSection.primaryCTA && (
                    <Link
                      to={heroSection.primaryCTA.action}
                      className="group relative flex items-center gap-4 px-10 py-5 font-bold rounded-full bg-brandAccent text-brandDark shadow-[0_20px_40px_rgba(255,192,0,0.3)] hover:shadow-[0_0_30px_rgba(255,192,0,0.4)] hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                      <span className="relative z-10 uppercase tracking-[0.1em] text-[10px] sm:text-xs font-semibold">{heroSection.primaryCTA.text}</span>
                      <FaArrowRight size={12} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
                      <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-white/20 group-hover:translate-y-0" />
                    </Link>
                  )}

                  <button className="flex items-center gap-4 px-8 py-5 font-bold rounded-full glass-effect-light dark:glass-effect border border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                      <FaPlay className="text-brandAccent text-xs ml-1 drop-shadow-[0_0_8px_rgba(255,192,0,0.5)]" />
                    </div>
                    <span className="uppercase tracking-[0.1em] text-[10px] font-semibold">Watch Overview</span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Visual Card (Glassmorphic Highlight) */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative hidden lg:col-span-5 lg:block"
              >
                <div className="p-12 rounded-[4rem] glass-effect-light dark:glass-effect border border-white/20 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-brandAccent/15 to-transparent" />

                  {heroSection.highlightBox && (
                    <div className="relative z-10 space-y-8">
                      <div className="w-20 h-20 rounded-3xl bg-brandAccent flex items-center justify-center text-4xl text-brandDark shadow-[0_20px_40px_rgba(255,192,0,0.4)] transform rotate-6 group-hover:rotate-0 transition-transform duration-700">
                        <FaShieldAlt />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl italic font-bold leading-tight text-white">
                          {heroSection.highlightBox.title || "Strategic Assurance"}
                        </h3>
                        <p className="text-base font-medium leading-relaxed text-white/50">
                          {heroSection.highlightBox.text}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div>
                          <div className="text-3xl font-bold text-brandAccent">100%</div>
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mt-1">Compliance Rate</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-brandAccent">24/7</div>
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mt-1">Real-time Defense</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandAccent/20 blur-[80px] rounded-full animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full animate-bounce-slow" />
              </motion.div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-xs font-semibold uppercase tracking-[0.3em] flex flex-col items-center gap-4"
          >
            Explore Solutions
            <div className="w-[1px] h-12 bg-gradient-to-b from-brandAccent to-transparent" />
          </motion.div>
        </section>
      )}


      {/* ================= CORE SERVICES (MODERN GRID) ================= */}
      {service.coreServices?.services && Array.isArray(service.coreServices.services) && (
        <section className="relative py-32 overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-borderLight dark:via-borderDark to-transparent" />

          <div className="container relative z-10">
            <div className="relative mb-20 text-center">
              <div className="absolute inset-0 bg-brandAccent/5 blur-[80px] rounded-full dark:opacity-40 pointer-events-none" />
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block animate-pulse relative z-10">Core Expertise</span>
              <h2 className="relative z-10 text-4xl font-bold tracking-tight md:text-5xl text-brandDark dark:text-white">
                {service.coreServices.title}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.coreServices.services.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[3rem] bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brandPrimary/5 dark:bg-brandAccent/5 rounded-bl-[4rem] group-hover:bg-brandAccent/20 transition-colors" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-12 h-12 transition-transform rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-brandDark dark:text-white">{s.title}</h3>
                    <p className="font-medium leading-relaxed text-slate-500 dark:text-gray-400">{s.description}</p>
                    <div className="flex items-center gap-3 text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-wider pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {s.cta || "Learn More"} <FaArrowRight size={10} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= COMPLIANCE LEVELS (INTERACTIVE) ================= */}
      {complianceLevels?.levels && Array.isArray(complianceLevels.levels) && (
        <section className="relative py-32 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
          <div className="container grid items-center gap-20 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Strategic Depth</span>
              <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl text-brandDark dark:text-white">
                {complianceLevels.title}
              </h2>
              <div className="space-y-6">
                {complianceLevels.levels.map((l, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-8 rounded-[2.5rem] bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark shadow-sm hover:shadow-xl transition-all duration-500 group"
                  >
                    <h3 className="mb-2 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {l.level}
                    </h3>
                    <p className="font-medium leading-relaxed text-slate-500 dark:text-gray-400">{l.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-[4rem] bg-brandAccent/5 border border-brandAccent/10"
            >
              <div className="absolute inset-0 bg-brandAccent/10 blur-[100px] rounded-full opacity-30" />
              <div className="relative z-10 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden aspect-[4/5] max-h-[600px]">
                <img
                  src={complianceLevels.image?.src || complianceLevels.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
                  alt={complianceLevels.image?.alt || "Compliance"}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}


      {/* ================= WHY COMPLIANCE MATTERS (VISUAL CARDS) ================= */}
      {whyComplianceMatters?.cards && Array.isArray(whyComplianceMatters.cards) && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark selection:bg-brandPrimary/30">
          <div className="container">
            <div className="mb-20 text-center">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Risk Impact</span>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-brandDark dark:text-white">
                {whyComplianceMatters.title}
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {whyComplianceMatters.cards.map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[3.5rem] overflow-hidden bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={c.image || "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600"}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-10 space-y-4">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {c.title}
                    </h3>
                    <p className="font-medium leading-relaxed text-slate-500 dark:text-gray-400 line-clamp-3">
                      {c.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}




      {/* ================= STATISTICS (ENHANCED) ================= */}
      {statisticsSection && (
        <section className="relative py-32 overflow-hidden text-center text-white bg-bgDark">
          <div className="absolute inset-0 z-0">
            <img
              src={statisticsSection.image || "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?w=1400"}
              alt="Statistics Background"
              className="object-cover w-full h-full opacity-30 brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brandDark/60 via-transparent to-brandDark/60" />
          </div>

          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-6xl md:text-8xl font-bold text-brandAccent tracking-tight drop-shadow-[0_10px_30px_rgba(255,182,0,0.3)]">
                {statisticsSection.value}{statisticsSection.suffix}
              </div>
              <h3 className="mt-8 text-3xl italic font-bold tracking-wide uppercase">
                {statisticsSection.title}
              </h3>
              <p className="mt-6 text-lg font-medium leading-relaxed opacity-70">
                {statisticsSection.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}




      {/* ================= HOW WE HELP (FEATURE GRID) ================= */}
      {service.howWeHelp?.services && Array.isArray(service.howWeHelp.services) && (
        <section className="relative py-32 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <div className="max-w-4xl mb-20">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Our Approach</span>
              <h2 className="mb-6 text-4xl font-bold leading-none tracking-tight md:text-6xl text-brandDark dark:text-white">
                {service.howWeHelp.title}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.howWeHelp.services.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-10 rounded-[3rem] bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent transition-all duration-500 group shadow-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 mb-6 transition-colors duration-500 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white">
                    <FaCheckCircle />
                  </div>
                  <h3 className="mb-4 text-xl font-bold leading-tight text-brandDark dark:text-white">{s.title}</h3>
                  <p className="italic font-medium leading-relaxed text-slate-500 dark:text-gray-400">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= VALUE PROPOSITION (SPLIT VISUAL) ================= */}
      {service.valueSection && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark border-y border-borderLight dark:border-borderDark">
          <div className="container grid items-center gap-24 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-8">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] block">Tangible Impact</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl text-brandDark dark:text-white">
                {service.valueSection.title}
              </h2>

              <p className="text-xl italic font-medium leading-relaxed text-slate-500 dark:text-gray-400">
                {service.valueSection.description}
              </p>

              <div className="p-10 rounded-[3.5rem] bg-brandPrimary/10 dark:bg-brandAccent/10 border border-brandPrimary/10 dark:border-brandAccent/10 inline-block group">
                <div className="text-6xl font-bold tracking-tight transition-transform duration-500 text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                  {service.valueSection.stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brandDark dark:text-white/50 mt-2">
                  {service.valueSection.stat.label}
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {service.valueSection.keyPoints && Array.isArray(service.valueSection.keyPoints) && service.valueSection.keyPoints.map((p, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white border shadow-sm rounded-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brandAccent/20">
                      <FaCheckCircle className="text-sm text-brandAccent" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight uppercase text-brandDark dark:text-white opacity-80">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[5rem] bg-gradient-to-br from-brandPrimary/5 to-transparent border border-white/10 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brandPrimary/5 blur-[120px] rounded-full opacity-30" />
              <div className="relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[4rem] overflow-hidden aspect-[4/5] max-h-[600px]">
                <img
                  src={service.valueSection.image?.src || service.valueSection.image || "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?w=1000"}
                  alt={service.valueSection.image?.alt || "Value Prop"}
                  className="w-full h-full object-cover contrast-[1.1] grayscale-[0.3] group-hover:grayscale-0 group-hover:rotate-1 transition-all duration-[2s]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}


      {/* ================= PROCESS (CHEVRON STEPS) ================= */}
      {service.processSection?.steps && Array.isArray(service.processSection.steps) && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <div className="mb-24 text-center">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Proven Ecosystem</span>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-brandDark dark:text-white">
                {service.processSection.title}
              </h2>
            </div>

            <div className="relative grid gap-12 md:grid-cols-4">
              <div className="absolute left-0 right-0 z-0 hidden h-px -translate-y-1/2 top-1/2 bg-borderLight dark:bg-borderDark md:block" />

              {service.processSection.steps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 text-center rounded-[3.5rem] bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500 group relative z-10"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-8 text-2xl font-bold text-white transition-transform duration-500 rounded-full shadow-xl bg-brandPrimary group-hover:scale-110">
                    {s.step}
                  </div>
                  <h3 className="mb-4 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {s.title}
                  </h3>
                  <p className="text-sm italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.trustedBy && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] grayscale" />
          <div className="container relative z-10">
            <div className="max-w-4xl mb-16">
              <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl text-brandDark dark:text-white">{service.trustedBy.title}</h2>
              {service.trustedBy.description && (
                <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-500 dark:text-white/50">{service.trustedBy.description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {service.trustedBy.logos && Array.isArray(service.trustedBy.logos) && service.trustedBy.logos.map((logo, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center w-40 h-24 p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl border-slate-100 dark:bg-white dark:border-slate-100"
                >
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {service.whyRiskMan && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark">
          <div className="container grid items-center gap-20 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-[4rem] bg-brandPrimary/5 border border-brandPrimary/10 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brandPrimary/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative z-10 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden aspect-[4/5] max-h-[550px]">
                <img
                  src={service.whyRiskMan.image?.src || service.whyRiskMan.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"}
                  alt={service.whyRiskMan.image?.alt || "Why RiskMan"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-8">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] block">The Competitive Edge</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl text-brandDark dark:text-white">
                {service.whyRiskMan.title}
              </h2>

              <div className="space-y-4">
                {service.whyRiskMan.points && Array.isArray(service.whyRiskMan.points) && service.whyRiskMan.points.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-[2rem] bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brandAccent/10 text-brandAccent">
                      <FaCheckCircle className="text-lg" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-brandDark dark:text-white/80">{p}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}


      {/* ================= IMPACT STATS (ENHANCED WITH IMAGERY) ================= */}
      {service.impactStats && Array.isArray(service.impactStats) && (
        <section className="relative py-32 overflow-hidden text-white bg-bgDark">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400"
              alt="Stats Background"
              className="object-cover w-full h-full opacity-20 brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brandDark/80 via-transparent to-brandDark/80" />
          </div>

          <div className="container relative z-10">
            <div className="grid gap-10 md:grid-cols-4">
              {service.impactStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-700 text-center overflow-hidden"
                >
                  {s.image && (
                    <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-20">
                      <img src={s.image} alt={s.label} className="object-cover w-full h-full transition-transform duration-1000 scale-150 group-hover:scale-100" />
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="mb-3 text-5xl font-bold tracking-tight transition-transform duration-500 text-brandAccent drop-shadow-2xl group-hover:scale-110">
                      {s.value}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= TESTIMONIALS (CARD REDESIGN) ================= */}
      {service.testimonials?.reviews && Array.isArray(service.testimonials.reviews) && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark">
          <div className="container">
            <div className="mb-20 text-center">
              <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Client Perspectives</span>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-brandDark dark:text-white">
                {service.testimonials.title}
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {service.testimonials.reviews.map((r, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-12 rounded-[4rem] bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 rounded-bl-[6rem] group-hover:bg-brandAccent/10 transition-colors" />
                  <div className="relative z-10 space-y-8">
                    <div className="flex gap-1 text-brandAccent">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                    </div>
                    <p className="text-2xl italic font-bold leading-tight tracking-tight text-brandDark dark:text-white/80">
                      "{r.quote}"
                    </p>
                    <div className="flex items-center gap-6 pt-6 border-t border-borderLight dark:border-borderDark">
                      <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white uppercase rounded-2xl bg-brandPrimary">
                        {r.author[0]}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-brandDark dark:text-white">{r.author}</div>
                        <div className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-gray-500">{r.organization}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= LATEST INSIGHTS (BLOG CARDS) ================= */}
      {service.latestInsights?.posts && Array.isArray(service.latestInsights.posts) && (
        <section className="relative py-32 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <div className="flex flex-col justify-between gap-8 mb-20 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-brandPrimary dark:text-brandAccent font-semibold text-[10px] uppercase tracking-[0.2em] mb-4 block">Knowledge Hub</span>
                <h2 className="text-4xl font-bold leading-none tracking-tight md:text-6xl text-brandDark dark:text-white">
                  {service.latestInsights.title}
                </h2>
              </div>
              <Link to="/insights" className="flex items-center gap-4 text-sm font-bold tracking-wide uppercase transition-all group text-brandPrimary dark:text-brandAccent hover:opacity-80">
                View All Insights <FaArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {service.latestInsights.posts.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[3rem] overflow-hidden bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={p.image || `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&idx=${i}`}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 px-4 py-1 rounded-full bg-brandAccent text-brandDark text-[10px] font-bold uppercase tracking-[0.2em] tracking-wide">
                      Insights
                    </div>
                  </div>
                  <div className="p-10 space-y-6">
                    <h3 className="text-2xl font-black leading-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-gray-500">
                      <span>{p.author}</span>
                      <span className="w-1 h-1 rounded-full bg-borderDark" />
                      <span>{p.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}




      {/* ================= TRUSTED COMPANIES (LOGO STRIP) ================= */}
      {trusteSection?.company && (
        <section className="relative py-24 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h3 className="text-xl font-black text-brandDark/40 dark:text-white/20 uppercase tracking-[0.5em] text-sm italic">
                {trusteSection.title || "Strategic Alliances"}
              </h3>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trusteSection.company.slice(0, 10).map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-40 h-24 p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl hover:shadow-md border-slate-100"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= WE HELP SECTION (OVERHAUL) ================= */}
      {weHelpSection && (
        <section className="relative py-40 overflow-hidden bg-bgLight dark:bg-bgDark">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Proven Methodology</span>
              <h2 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-7xl text-brandDark dark:text-white">
                {weHelpSection.title}
              </h2>
            </motion.div>

            <div className="space-y-32">
              {weHelpSection.description?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  {/* Text-focused items */}
                  {(!item.image || idx === 0) ? (
                    <p className="max-w-5xl text-2xl italic font-black leading-tight tracking-tight md:text-4xl text-brandDark dark:text-white/80">
                      "{item.content}"
                    </p>
                  ) : (
                    <div className={`grid items-center gap-20 md:grid-cols-2 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      {/* Image side */}
                      <motion.div
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-4 rounded-[4rem] bg-brandPrimary/5 border border-brandPrimary/10 group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-brandPrimary/10 blur-[100px] rounded-full opacity-30" />
                        <div className="relative z-10 rounded-[3rem] shadow-2xl overflow-hidden aspect-video max-h-[450px]">
                          <img
                            src={item.image}
                            alt={item.title || "Service"}
                            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
                          />
                        </div>
                      </motion.div>

                      {/* Content side */}
                      <motion.div
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                      >
                        {item.title && (
                          <h3 className="text-3xl italic font-black tracking-tight underline uppercase text-brandPrimary dark:text-brandAccent decoration-brandAccent decoration-4 underline-offset-8">
                            {item.title}
                          </h3>
                        )}
                        <p className="text-xl italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                          {item.content}
                        </p>
                        <div className="pt-6">
                          <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-brandDark dark:bg-white text-white dark:text-brandDark font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                            Technical Scope <FaChevronRight size={10} />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SOLUTIONS SECTION (GLASS CARDS) ================= */}
      {solutionSection?.solutions && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Strategic Defense</span>
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl text-brandDark dark:text-white">
                {solutionSection.title}
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutionSection.solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 transition-all duration-500 bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark rounded-[3.5rem] group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 transition-colors duration-500 rounded-bl-full bg-brandAccent/5 group-hover:bg-brandAccent/20" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center transition-all duration-500 w-14 h-14 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:scale-110 group-hover:rotate-6">
                      <FaShieldAlt className="text-2xl" />
                    </div>

                    <h3 className="text-2xl font-black leading-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {solution.name}
                    </h3>

                    <p className="text-lg italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PARTNER SECTION (INTEGRATED EXPERTISE) ================= */}
      {partnerSection && (
        <section className="relative py-40 overflow-hidden transition-colors bg-bgLight dark:bg-bgDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mb-24"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Strategic Collaboration</span>
              <h2 className="mb-8 text-4xl font-black leading-none tracking-tighter md:text-7xl text-brandDark dark:text-white">
                {partnerSection.title}
              </h2>
              <p className="max-w-3xl text-2xl italic font-black leading-snug text-slate-500 dark:text-gray-400">
                {partnerSection.description}
              </p>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {partnerSection.services?.map((parService, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 text-left transition-all duration-500 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[3.5rem] group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute w-24 h-24 transition-all duration-700 rounded-full -bottom-8 -right-8 bg-brandAccent/5 group-hover:bg-brandAccent/20 group-hover:scale-150" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 transition-transform duration-500 rounded-3xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                      <FaShieldAlt className="text-2xl" />
                    </div>

                    <h3 className="text-2xl font-black leading-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary">
                      {parService.name}
                    </h3>

                    <p className="text-base italic font-bold leading-relaxed text-slate-500 dark:text-gray-400 line-clamp-4">
                      {parService.description}
                    </p>

                    {parService.path && (
                      <Link
                        to={parService.path}
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brandAccent hover:opacity-100 opacity-60 transition-all group-hover:translate-x-2"
                      >
                        Technical Details <FaArrowRight size={10} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= EXPERIENCE SECTION (LEGACY & STRENGTH) ================= */}
      {experienceSection && (
        <section className="relative py-40 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark">
          <div className="container grid items-center gap-24 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
              <div className="relative inline-block">
                <div className="text-[12rem] md:text-[15rem] font-black text-brandPrimary/10 leading-none tracking-tighter select-none">
                  {experienceSection.years}
                </div>
                <div className="absolute left-0 flex items-baseline gap-4 -translate-y-1/2 top-1/2">
                  <span className="italic font-black tracking-tighter text-7xl md:text-9xl text-brandDark dark:text-white">{experienceSection.years}+</span>
                  <span className="text-2xl font-black text-brandPrimary uppercase tracking-[0.5em] hidden lg:block">Years</span>
                </div>
              </div>
              <h2 className="text-4xl italic font-black leading-tight tracking-tighter md:text-6xl text-brandDark dark:text-white">
                {experienceSection.title}
              </h2>
              <p className="max-w-xl text-xl italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                {experienceSection.description}
              </p>

              <div className="flex flex-wrap gap-12 pt-8 sm:gap-20">
                <div>
                  <div className="text-4xl font-black tracking-tighter text-brandPrimary">500+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Audit Audits</div>
                </div>
                <div>
                  <div className="text-4xl font-black tracking-tighter text-brandPrimary">50+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Countries</div>
                </div>
              </div>
            </motion.div>

            {experienceSection.visualGraphic && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[5rem] bg-brandAccent/10 border border-brandAccent/10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-brandAccent/5 blur-[120px] rounded-full opacity-30 group-hover:scale-150 transition-transform duration-[3s]" />
                <div className="relative z-10 rounded-[3.5rem] shadow-2xl overflow-hidden aspect-[4/5] max-h-[600px]">
                  <img
                    src={experienceSection.visualGraphic.src}
                    alt={experienceSection.visualGraphic.alt}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ================= SERVICES OVERVIEW (SOPHISTICATED GRID) ================= */}
      {servicesOverview && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Evolving Expertise</span>
              <h2 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-6xl text-brandDark dark:text-white">
                {servicesOverview.title}
              </h2>
              <p className="max-w-3xl mx-auto text-xl italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                {servicesOverview.description}
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2">
              {servicesOverview.services && Array.isArray(servicesOverview.services) && servicesOverview.services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 transition-all duration-500 border border-borderLight dark:border-borderDark rounded-[3.5rem] bg-bgLight dark:bg-bgDark hover:shadow-2xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 group-hover:bg-brandAccent/10 rounded-bl-[6rem] transition-colors" />
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-3xl font-black tracking-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary">
                      {s.title}
                    </h3>
                    <p className="text-lg italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                      {s.description}
                    </p>
                    <div className="pt-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brandAccent group-hover:translate-x-2 inline-flex items-center gap-3 transition-transform">
                        {s.cta || "Inquire Details"} <FaArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= INDUSTRY USE CASES (STORYTELLING) ================= */}
      {industryUseCases && Array.isArray(industryUseCases) && industryUseCases.length > 0 && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark">
          <div className="container space-y-32">
            {industryUseCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid items-center gap-24 md:grid-cols-2 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="space-y-8">
                  <span className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-brandAccent/10 text-brandAccent text-[10px] font-black uppercase tracking-widest border border-brandAccent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brandAccent animate-pulse" />
                    {uc.industry}
                  </span>
                  <h3 className="text-4xl italic font-black leading-none tracking-tighter md:text-6xl text-brandDark dark:text-white">
                    {uc.title}
                  </h3>
                  <p className="py-2 pl-8 text-xl italic font-bold leading-relaxed border-l-4 text-slate-500 dark:text-gray-400 border-brandAccent">
                    {uc.description}
                  </p>
                  <div className="pt-4 space-y-4">
                    {uc.impacts && Array.isArray(uc.impacts) && uc.impacts.map((imp, j) => (
                      <div key={j} className="flex items-center gap-6 group">
                        <div className="flex items-center justify-center w-10 h-10 transition-transform rounded-full bg-brandPrimary/10 text-brandPrimary group-hover:scale-110">
                          <FaCheckCircle className="text-sm" />
                        </div>
                        <span className="text-lg italic font-black tracking-tight transition-opacity text-brandDark dark:text-white/70 opacity-80 group-hover:opacity-100">
                          {imp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-[5rem] bg-gradient-to-tr from-brandAccent/10 to-transparent border border-white/5 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-brandAccent/5 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative z-10 rounded-[4rem] shadow-2xl overflow-hidden aspect-[4/5] max-h-[550px]">
                    <img
                      src={uc.image?.src || (typeof uc.image === 'string' ? uc.image : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800")}
                      alt={uc.image?.alt || uc.title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= FOUR STEP APPROACH (CHRONOLOGICAL) ================= */}
      {fourStepApproach && fourStepApproach.steps && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <div className="mb-24 text-center">
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Strategic Pipeline</span>
              <h2 className="text-4xl font-black leading-none tracking-tighter md:text-5xl text-brandDark dark:text-white">
                {fourStepApproach.title || "Our Systematic Approach"}
              </h2>
            </div>

            <div className="grid items-center gap-24 md:grid-cols-2">
              <div className="relative space-y-8">
                <div className="absolute top-0 bottom-0 hidden w-px left-12 bg-gradient-to-b from-brandPrimary via-borderDark to-transparent lg:block" />

                {fourStepApproach.steps && Array.isArray(fourStepApproach.steps) && fourStepApproach.steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex gap-10 group"
                  >
                    <div className="z-10 flex items-center justify-center flex-shrink-0 w-24 h-24 text-3xl font-black transition-all duration-500 border-2 shadow-xl rounded-3xl bg-bgLight dark:bg-bgDark border-brandPrimary/20 text-brandPrimary group-hover:bg-brandPrimary group-hover:text-white">
                      {s.step || (i + 1)}
                    </div>
                    <div className="pt-2">
                      <h4 className="mb-2 text-2xl font-black tracking-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary">
                        {s.title}
                      </h4>
                      <p className="max-w-md text-lg italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {fourStepApproach.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative p-4 rounded-[4rem] bg-brandPrimary/5 border border-brandPrimary/10 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brandPrimary/5 blur-[120px] rounded-full opacity-30" />
                  <div className="relative z-10 rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/5] max-h-[600px]">
                    <img
                      src={fourStepApproach.image.src || fourStepApproach.image}
                      alt={fourStepApproach.image.alt || "Approach"}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2s]"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= INDUSTRY INSIGHTS (SOPHISTICATED CARDS) ================= */}
      {helpUsSection && Array.isArray(helpUsSection) && helpUsSection.length > 0 && (
        <section className="relative py-32 overflow-hidden transition-colors bg-bgLight dark:bg-bgDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Future Readiness</span>
              <h2 className="text-4xl italic font-black leading-none tracking-tighter capitalize md:text-7xl text-brandDark dark:text-white">
                Industry <span className="text-brandPrimary dark:text-brandAccent">Insights</span>
              </h2>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-3">
              {helpUsSection.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 transition-all duration-500 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[3.5rem] group hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/5 group-hover:bg-brandPrimary/10 rounded-bl-[6rem] transition-colors" />

                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-center w-16 h-16 text-3xl transition-all duration-500 shadow-lg rounded-2xl bg-brandPrimary/10 text-brandPrimary group-hover:scale-110 group-hover:rotate-12">
                      {idx === 0 ? <FaShieldAlt /> : idx === 1 ? <FaChartLine /> : <FaCog />}
                    </div>

                    <div className="space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-brandAccent italic">
                        {item.name}
                      </div>
                      <h3 className="text-2xl font-black leading-tight tracking-tight transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary">
                        {item.title}
                      </h3>
                      <p className="text-base italic font-bold leading-relaxed text-slate-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>

                    {item.tags && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-borderLight dark:border-borderDark">
                        {item.tags && Array.isArray(item.tags) && item.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full bg-brandPrimary/5 text-brandPrimary border border-brandPrimary/10 italic"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROACTIVE SECTION (SPLIT VISUAL) ================= */}
      {proActiveSection && (
        <section className="relative py-32 overflow-hidden transition-colors bg-bgLight dark:bg-bgDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <div className="grid items-center gap-24 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Strategic Foresight</span>
                <h2 className="mb-6 text-4xl font-black leading-none tracking-tighter md:text-7xl text-brandDark dark:text-white">
                  {proActiveSection.title}
                </h2>
                <p className="py-2 pl-8 text-xl italic font-bold leading-relaxed border-l-4 text-slate-500 dark:text-gray-400 border-brandAccent">
                  {proActiveSection.description}
                </p>
                <div className="pt-8">
                  <button className="px-8 py-4 rounded-full bg-brandAccent text-brandDark font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                    Executive Strategy
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-[51rem] bg-brandAccent/5 border border-brandAccent/10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-brandAccent/5 blur-[120px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
                <div className="relative z-10 rounded-[5rem] shadow-2xl overflow-hidden aspect-square max-h-[600px]">
                  <img
                    src={proActiveSection.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"}
                    alt="Proactive Advisory"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ================= RISK ANALYSIS SECTION (PILL GRID) ================= */}
      {riskAnalysisSection && Array.isArray(riskAnalysisSection) && riskAnalysisSection.length > 0 && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Holistic Analysis</span>
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl text-brandDark dark:text-white">
                Our <span className="italic underline text-brandPrimary dark:text-brandAccent decoration-brandPrimary/30">Approach</span>
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {riskAnalysisSection.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-6 p-8 border border-borderLight dark:border-borderDark rounded-[2.5rem] bg-bgLight dark:bg-bgDark hover:border-brandAccent transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:scale-110">
                    <FaShieldAlt className="text-xl text-brandPrimary dark:text-brandAccent" />
                  </div>

                  <h3 className="text-xl italic font-black leading-tight tracking-tight transition-colors text-brandDark dark:text-white/80 group-hover:text-brandPrimary">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= ARTICLE SECTION (MODERN CARDS) ================= */}
      {articalSection && (
        <section className="relative py-32 overflow-hidden transition-colors bg-bgLight dark:bg-bgDark border-y border-borderLight dark:border-borderDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Knowledge Base</span>
              <h2 className="text-4xl italic font-black tracking-tighter md:text-7xl text-brandDark dark:text-white">
                {articalSection.title}
              </h2>
              <p className="max-w-3xl mx-auto mt-6 text-xl italic font-bold text-slate-500 dark:text-gray-400">
                {articalSection.description}
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-3">
              {articalSection.articles && Array.isArray(articalSection.articles) && articalSection.articles.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-borderLight dark:border-borderDark rounded-[3.5rem] bg-surfaceLight dark:bg-surfaceDark hover:border-brandPrimary transition-all duration-500 hover:shadow-2xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 transition-colors rounded-bl-full bg-brandPrimary/5 dark:bg-brandAccent/5 group-hover:bg-brandPrimary/10" />
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-black leading-tight tracking-tight underline transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary decoration-brandAccent/30 decoration-2 underline-offset-4">
                      {a.title}
                    </h3>
                    <p className="text-base italic font-bold leading-relaxed text-slate-500 dark:text-gray-400 line-clamp-4">
                      {a.excerpt}
                    </p>
                    <div className="pt-4">
                      <Link
                        to={a.link}
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brandAccent group-hover:translate-x-2 transition-transform"
                      >
                        Technical Review <FaArrowRight size={10} className="drop-shadow-[0_0_8px_rgba(255,192,0,0.5)]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= FAQ (MODERN ACCORDION) ================= */}
      {Array.isArray(frequentlyAskedQuestions) && frequentlyAskedQuestions.length > 0 && (
        <section className="relative py-32 overflow-hidden transition-colors bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
          <div className="container max-w-5xl px-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandPrimary dark:text-brandAccent font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Support Hub</span>
              <h2 className="text-4xl italic font-black tracking-tighter md:text-6xl text-brandDark dark:text-white">FAQ<span className="text-brandAccent">s</span></h2>
            </motion.div>

            <div className="space-y-6">
              {frequentlyAskedQuestions.map((f, i) => (
                <motion.details
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-10 border border-borderLight dark:border-borderDark rounded-[2.5rem] bg-bgLight dark:bg-bgDark group open:shadow-2xl transition-all duration-500"
                >
                  <summary className="flex items-center justify-between text-xl font-black list-none transition-colors cursor-pointer select-none text-brandDark dark:text-white/80 group-hover:text-brandPrimary">
                    {f.question}
                    <div className="flex items-center justify-center w-10 h-10 transition-transform duration-500 rounded-full bg-brandPrimary/10 group-open:rotate-180">
                      <FaChevronDown className="text-xs text-brandPrimary" />
                    </div>
                  </summary>
                  <p className="pt-8 mt-8 text-lg italic font-bold leading-relaxed border-t text-slate-500 dark:text-gray-400 border-borderLight dark:border-borderDark">
                    {f.answer}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= RISK RESILIENT (FINAL CTA OVERHAUL) ================= */}
      {riskResilientSection && (
        <section className="relative py-48 overflow-hidden transition-colors bg-brandDark">
          <div className="absolute inset-0">
            {/* Dynamic background patterns */}
            <div className="absolute inset-0 opacity-[0.03] pattern-grid-white" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brandAccent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="container relative z-10 px-8 mx-auto text-center max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <span className="text-brandAccent font-black text-[10px] uppercase tracking-[0.8em] block animate-pulse">Final Step</span>
              <h2 className="text-5xl italic font-black leading-none tracking-tighter text-white md:text-9xl">
                {riskResilientSection.title}
              </h2>

              <p className="max-w-4xl mx-auto text-2xl italic font-bold leading-tight md:text-3xl text-white/50">
                {riskResilientSection.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-8 pt-12 sm:flex-row">
                <Link
                  to={riskResilientSection.path}
                  className="group relative flex items-center gap-6 px-12 py-6 font-black rounded-full bg-brandAccent text-brandDark shadow-[0_20px_40px_rgba(255,192,0,0.3)] hover:shadow-[0_0_30px_rgba(255,192,0,0.4)] hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-[0.3em] text-[10px] sm:text-xs">Initiate Assessment</span>
                  <FaArrowRight size={12} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
                  <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-white/20 group-hover:translate-y-0" />
                </Link>

                <button className="px-10 py-6 rounded-full glass-effect border border-white/10 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                  Contact Global HQ
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= RISK AWARENESS SECTION (OVERHAUL) ================= */}
      {riskAwarenessSection && (
        <section className="relative py-40 overflow-hidden transition-colors bg-brandNavy dark:bg-brandDark">
          <div className="absolute inset-0 opacity-[0.05] pattern-dots-white" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <span className="text-brandAccent font-black text-[10px] uppercase tracking-[0.8em] mb-6 block">Critical Risk Hub</span>
              <h2 className="mb-8 text-5xl italic font-black leading-none tracking-tighter text-white md:text-8xl">
                {riskAwarenessSection.title}
              </h2>
              <p className="max-w-4xl mx-auto text-2xl italic font-bold leading-relaxed text-white/60">
                {riskAwarenessSection.description}
              </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {riskAwarenessSection.riskCards?.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 transition-all duration-500 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3.5rem] hover:border-brandAccent group overflow-hidden"
                >
                  {card.image && (
                    <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-[2rem]">
                      <img
                        src={card.image || "https://images.unsplash.com/photo-1510511459019-5dee224ffb8a?w=400"}
                        alt={card.title}
                        className="object-cover w-full h-full object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/80 to-transparent" />
                    </div>
                  )}

                  <h3 className="mb-4 text-2xl italic font-black leading-tight tracking-tight text-white transition-colors group-hover:text-brandAccent">
                    {card.title}
                  </h3>

                  <p className="text-base italic font-bold leading-relaxed text-white/50">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-6 px-12 py-6 overflow-hidden font-black transition-all duration-500 bg-white rounded-full shadow-2xl group text-brandDark hover:scale-105"
              >
                <span className="relative z-10 uppercase tracking-[0.3em] text-[10px] sm:text-xs">Speak with an Expert</span>
                <FaArrowRight size={12} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2 text-brandPrimary" />
                <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-brandAccent group-hover:translate-y-0" />
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}