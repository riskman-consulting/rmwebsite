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
   THEME CONFIGURATION
======================= */
const industryThemes = {
  'banking-insurance': {
    primary: 'indigo-600',
    accent: 'amber-400',
    aura: 'indigo',
  },
  'healthcare': {
    primary: 'teal-500',
    accent: 'emerald-400',
    aura: 'teal',
  },
  'ecommerce': {
    primary: 'violet-600',
    accent: 'fuchsia-400',
    aura: 'violet',
  },
  'automobiles': {
    primary: 'blue-600',
    accent: 'cyan-400',
    aura: 'blue',
  },
  'manufacturing': {
    primary: 'orange-600',
    accent: 'slate-400',
    aura: 'orange',
  },
  'energy-utilities': {
    primary: 'emerald-600',
    accent: 'yellow-400',
    aura: 'emerald',
  },
  'retail-consumer': {
    primary: 'amber-600',
    accent: 'orange-400',
    aura: 'amber',
  },
  'it-consulting': {
    primary: 'sky-600',
    accent: 'blue-400',
    aura: 'sky',
  },
  'media-communication': {
    primary: 'rose-600',
    accent: 'pink-400',
    aura: 'rose',
  },
  'hospitality': {
    primary: 'yellow-600',
    accent: 'amber-400',
    aura: 'yellow',
  },
  'education-edtech': {
    primary: 'lime-600',
    accent: 'green-400',
    aura: 'lime',
  },
  'travel-logistics': {
    primary: 'slate-600',
    accent: 'zinc-400',
    aura: 'slate',
  },
  'default': {
    primary: 'brandPrimary',
    accent: 'brandAccent',
    aura: 'brandPrimary',
  }
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
      <div className="flex items-center justify-center min-h-screen px-6 text-center bg-bgLight dark:bg-bgDark">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl max-w-xl">
          <div className="mb-8 text-8xl">🔍</div>
          <h1 className="mb-6 text-4xl font-bold text-brandDark dark:text-white">Industry Not Found</h1>
          <p className="mb-10 text-lg font-medium text-brandNavy/60 dark:text-gray-400">The requested industry module could not be located. Plase return to the main industries gallery.</p>
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
    impactHighlight,
    experienceHighlight,
    trustedBrands,
    whyRiskMan,
    ctaSection,
    frequentlyAskedQuestions
  } = industry;

  const impactData = impactHighlight || experienceHighlight;

  const theme = industryThemes[id] || industryThemes['default'];
  const themePrimary = theme.primary.startsWith('brand') ? `text-${theme.primary}` : `text-${theme.primary}`;
  const themeBg = theme.primary.startsWith('brand') ? `bg-${theme.primary}` : `bg-${theme.primary}`;
  const themeBorder = theme.primary.startsWith('brand') ? `border-${theme.primary}` : `border-${theme.primary}`;
  const themeAccentText = theme.accent.startsWith('brand') ? `text-${theme.accent}` : `text-${theme.accent}`;
  const themeAccentBg = theme.accent.startsWith('brand') ? `bg-${theme.accent}` : `bg-${theme.accent}`;
  const themeAccentBorder = theme.accent.startsWith('brand') ? `border-${theme.accent}` : `border-${theme.accent}`;

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white selection:bg-brandPrimary/30 selection:text-brandPrimary">

      {/* Dynamic Background Aura */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-${theme.aura}-500/10 dark:bg-${theme.aura}-500/5 blur-[150px] rounded-full animate-pulse-slow`} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-${theme.accent.split('-')[0]}-400/10 dark:bg-${theme.accent.split('-')[0]}-400/5 blur-[150px] rounded-full animate-pulse-slow delay-1000`} />
      </div>

      {/* ================= HERO (MASTERPIECE) ================= */}
      {heroSection ? (
        <section className="relative flex items-center justify-center min-h-screen pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={heroSection.heroImage.src}
              alt={heroSection.heroImage.alt}
              className="w-full h-full object-cover brightness-[0.9] dark:brightness-[0.8]"
            />
            {/* Softened overlays for edge-to-edge clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-bgLight/60 via-bgLight/10 to-transparent dark:from-bgDark/70 dark:via-bgDark/20 dark:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bgLight dark:from-bgDark to-transparent opacity-80" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl">
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                <motion.div variants={fadeInUp} className={`inline-flex items-center gap-3 px-6 py-2 mb-10 text-[11px] font-black tracking-[0.4em] uppercase rounded-full bg-brandDark/10 dark:bg-white/10 border border-brandDark/20 dark:border-white/20 ${themePrimary} dark:${themeAccentText} backdrop-blur-md shadow-sm`}>
                  <div className={`w-2 h-2 rounded-full ${themeBg} dark:${themeAccentBg} animate-pulse`} />
                  {heroSection.tag}
                </motion.div>
                <motion.h1 variants={fadeInUp} className="mb-8 text-4xl font-black md:text-6xl leading-[1.1] tracking-tight">
                  <span className="block text-brandDark dark:text-white drop-shadow-sm">{heroSection.title}</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className={`mb-12 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium max-w-2xl border-l-[4px] ${themeBorder} dark:${themeAccentBorder} pl-6 py-2`}>
                  {heroSection.description}
                </motion.p>
                {heroSection.primaryCTA && (
                  <motion.div variants={fadeInUp}>
                    <Link
                      to={heroSection.primaryCTA.action}
                      className="relative inline-flex items-center gap-5 px-10 py-5 overflow-hidden font-black text-white transition-all duration-500 rounded-full shadow-2xl group bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 w-0 transition-all duration-300 bg-white/20 group-hover:w-full" />
                      <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">{heroSection.primaryCTA.text}</span>
                      <FaArrowRight className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Scroll Call to Action */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute flex flex-col items-center gap-4 -translate-x-1/2 cursor-pointer bottom-12 left-1/2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-30">Discovery</span>
            <div className={`w-[2px] h-16 bg-gradient-to-b from-${theme.primary} dark:from-${theme.accent} to-transparent opacity-40 rounded-full`} />
          </motion.div>
        </section>
      ) : (
        /* Stand-in Hero if no heroSection key found */
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
          {industry.headerImage && (
            <div className="absolute inset-0">
              <img src={industry.headerImage} alt={industry.title} className="object-cover w-full h-full opacity-40 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-b from-bgLight/40 via-bgLight/90 to-bgLight dark:from-bgDark/40 dark:via-bgDark/90 dark:to-bgDark" />
            </div>
          )}
          <div className="container relative z-10 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brandPrimary dark:text-brandAccent text-xs mb-6 tracking-[0.4em] uppercase font-black">
              {industry.heroTagline || "Industry Insight"}
            </motion.p>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-black leading-none tracking-tighter md:text-6xl text-brandDark dark:text-white">
              {industry.title}
            </motion.h1>
          </div>
        </section>
      )}

      {/* ================= CHALLENGES (NARRATIVE) ================= */}
      <section className="relative z-10 py-40 bg-white/20 dark:bg-black/10 backdrop-blur-md border-y border-borderLight dark:border-white/5">
        <div className="container">
          {challengeSection ? (
            <div className="grid items-center gap-24 lg:grid-cols-2">
              <motion.div variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="mb-12">
                  <span className={`${themePrimary} dark:${themeAccentText} font-black text-[10px] uppercase tracking-[0.4em] mb-4 block`}>The Strategic Landscape</span>
                  <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">{challengeSection.title}</h2>
                </div>
                <p className="mb-10 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">{challengeSection.description}</p>
                <div className="space-y-6 mb-14">
                  {challengeSection.challenges.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className={`flex gap-8 p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-borderLight dark:border-white/5 hover:border-${theme.primary} dark:hover:border-${theme.accent} transition-all duration-700 hover:shadow-2xl hover:bg-white/50 dark:hover:bg-white/[0.08] group cursor-default`}
                    >
                      <div className={`w-10 h-10 rounded-2xl bg-${theme.primary}/10 dark:bg-${theme.accent}/10 flex items-center justify-center flex-shrink-0 ${themePrimary} dark:${themeAccentText} group-hover:scale-110 group-hover:${themeBg} dark:group-hover:${themeAccentBg} group-hover:text-white dark:group-hover:text-brandDark transition-all duration-500`}>
                        <FaCheck className="text-sm" />
                      </div>
                      <p className="text-lg font-bold leading-relaxed text-slate-700 dark:text-slate-200">{c}</p>
                    </motion.div>
                  ))}
                </div>
                <div className={`p-10 border-l-[6px] ${themeBorder} dark:${themeAccentBorder} bg-${theme.primary}/5 dark:bg-${theme.accent}/5 rounded-r-[2.5rem] relative overflow-hidden`}>
                  <p className={`text-base italic font-black ${themePrimary} dark:${themeAccentText} leading-relaxed relative z-10`}>{challengeSection.supportingText}</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }} className="relative group perspective-1000">
                <div className={`absolute inset-0 bg-${theme.primary}/10 dark:bg-${theme.accent}/10 rounded-[4rem] blur-[100px] group-hover:blur-[140px] transition-all duration-1000`} />
                <motion.img
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  src={challengeSection.image.src}
                  alt={challengeSection.image.alt}
                  className="relative z-10 shadow-[0_80px_160px_rgba(0,0,0,0.15)] dark:shadow-[0_80px_160px_rgba(0,0,0,0.4)] rounded-[4rem] w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className={`absolute -top-12 -left-12 w-56 h-56 border-t-[12px] border-l-[12px] border-${theme.primary} dark:border-${theme.accent} opacity-20 rounded-tl-[4rem] group-hover:scale-110 transition-transform duration-700`} />
                <div className={`absolute -bottom-12 -right-12 w-56 h-56 border-b-[12px] border-r-[12px] border-${theme.primary} dark:border-${theme.accent} opacity-20 rounded-br-[4rem] group-hover:scale-110 transition-transform duration-700`} />
              </motion.div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ================= SOLUTIONS (GRID RE-IMAGINED) ================= */}
      <section className="relative py-40 overflow-hidden bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="flex flex-col justify-between gap-12 mb-24 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className={`${themePrimary} dark:${themeAccentText} font-black text-[10px] uppercase tracking-[0.6em] mb-4 block`}>Our Solutions Architecture</span>
              <h2 className="mb-3 text-3xl font-black leading-none tracking-tighter md:text-5xl">
                {solutionsSection?.title || "Strategic Execution"}
              </h2>
            </div>
            <div className="pb-4">
              <Link to="/services" className={`text-[11px] font-black uppercase tracking-[0.4em] ${themePrimary} dark:${themeAccentText} border-b-2 border-${theme.primary}/30 dark:border-${theme.accent}/30 pb-2 hover:${themeBorder} dark:hover:${themeAccentBorder} transition-all duration-300`}>View Methodology</Link>
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {(solutionsSection?.items || []).map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
                <Link to={item.link} className={`group relative block p-14 bg-white dark:bg-white/[0.03] border border-borderLight dark:border-white/[0.05] rounded-[3.5rem] hover:border-${theme.primary}/50 dark:hover:border-${theme.accent}/50 transition-all duration-700 shadow-2xl hover:shadow-${theme.primary}/10 h-full overflow-hidden`}>
                  <div className={`absolute top-0 right-0 p-10 text-[8rem] font-black opacity-[0.03] dark:opacity-[0.05] ${themePrimary} dark:${themeAccentText} transition-all duration-1000 leading-none select-none group-hover:scale-110 group-hover:opacity-10`}>
                    {item.id}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className={`text-xl font-black mb-4 group-hover:${themePrimary} dark:group-hover:${themeAccentText} transition-colors leading-tight`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 mb-10 text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                      {item.description}
                    </p>
                    <div className={`inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] ${themePrimary} dark:${themeAccentText} group-hover:translate-x-2 transition-all duration-700`}>
                      <span className={`bg-${theme.primary}/5 dark:bg-${theme.accent}/5 px-6 py-3 rounded-full border border-transparent group-hover:border-${theme.primary}/20 dark:group-hover:border-${theme.accent}/20 transition-colors`}>Launch Module</span>
                      <FaArrowRight className="text-lg" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT HIGHLIGHT (MULTI-STAT REDESIGN) ================= */}
      {impactData && (
        <section className="relative z-10 py-40 overflow-hidden text-white bg-bgDark">
          <div className="absolute inset-0 z-0">
            <motion.img
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              src={impactData.image?.src || impactData.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400"}
              alt="Impact Background"
              className="absolute inset-0 object-cover w-full h-full opacity-40 brightness-[0.4] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bgDark/80 via-transparent to-bgDark/80" />
          </div>

          <div className="container relative z-10">
            {impactData.stats && Array.isArray(impactData.stats) ? (
              <div className="grid gap-12 md:grid-cols-3">
                {impactData.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="group relative p-12 rounded-[3.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-700 text-center overflow-hidden"
                  >
                    <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-30">
                      <img src={stat.image} alt={stat.label} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-[2s]" />
                    </div>
                    <div className="relative z-10">
                      <div className={`text-6xl md:text-7xl font-black ${themeAccentText} mb-4 tracking-tighter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700`}>
                        {stat.metric}
                      </div>
                      <div className="text-sm font-black uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className={`${themeAccentText} font-black text-[10px] uppercase tracking-[1em] mb-8 block`}>Institutional Value</span>
                  <h2 className={`text-5xl md:text-8xl font-black leading-none tracking-tighter ${themeAccentText} mb-6 drop-shadow-2xl`}>
                    {impactData.metric}
                  </h2>
                  <p className="text-xl md:text-2xl font-black tracking-[0.2em] opacity-80 uppercase leading-none italic max-w-4xl mx-auto">{impactData.label}</p>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= WHY RISKMAN (ULTRA PREMIUM) ================= */}
      <section className="relative py-40 overflow-hidden bg-surfaceLight dark:bg-surfaceDark/30">
        <div className="container">
          <div className="mb-32 text-center">
            <span className={`${themePrimary} dark:${themeAccentText} font-black text-[10px] uppercase tracking-[0.5em] mb-6 block`}>Excellence in Risk Management</span>
            <h2 className="mb-8 text-3xl font-black leading-none tracking-tighter md:text-5xl">{whyRiskMan?.title || "Industry-Leading Trust"}</h2>
            {whyRiskMan?.description && (
              <p className="max-w-4xl mx-auto text-lg font-bold leading-relaxed text-slate-600 dark:text-slate-400">
                {whyRiskMan.description}
              </p>
            )}
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="group relative p-12 pt-20 bg-white/60 dark:bg-white/[0.04] backdrop-blur-3xl border border-white/60 dark:border-white/10 rounded-[4rem] transition-all duration-700 hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-5 hover:shadow-2xl hover:shadow-brandPrimary/10"
                >
                  <div className={`absolute -top-10 left-12 w-20 h-20 rounded-[2rem] bg-brandDark dark:${themeAccentBg} flex items-center justify-center text-white dark:text-brandDark shadow-2xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-6`}>
                    <IconComponent className="text-4xl" />
                  </div>
                  <h3 className={`mb-4 text-lg font-black group-hover:${themePrimary} dark:group-hover:${themeAccentText} transition-colors leading-tight`}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BRANDS (WITH DESCRIPTION) ================= */}
      {trustedBrands && (
        <section className="relative py-32 overflow-hidden bg-bgLight dark:bg-bgDark border-y border-borderLight dark:border-borderDark">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550704686-9dc484a0b27e?w=1400')] opacity-[0.03] dark:opacity-[0.05] grayscale" />
          <div className="container relative z-10">
            <div className="max-w-4xl mb-16">
              <h2 className="mb-6 text-2xl font-black tracking-tight md:text-3xl text-brandDark dark:text-white">{trustedBrands.title}</h2>
              {trustedBrands.description && (
                <p className="max-w-2xl text-lg font-bold leading-relaxed text-slate-500 dark:text-white/50">{trustedBrands.description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {(trustedBrands.logos || []).map((logo, i) => {
                const isImage = typeof logo === 'string' && (logo.startsWith('http') || logo.startsWith('/') || logo.includes('.webp') || logo.includes('.png') || logo.includes('.svg'));
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center w-40 h-24 p-6 transition-all duration-300 bg-white border shadow-sm rounded-2xl hover:shadow-md border-slate-100"
                  >
                    {isImage ? (
                      <img
                        src={logo}
                        alt="Trusted Brand"
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

      {/* ================= FAQ (TWO-COLUMN ELEGANCE) ================= */}
      {frequentlyAskedQuestions && (
        <section className="py-40 bg-bgLight dark:bg-bgDark">
        <div className="container">
            <div className="mb-24 text-center">
              <span className={`${themePrimary} dark:${themeAccentText} font-black text-[10px] uppercase tracking-[0.8em] mb-6 block`}>Insights & Intelligence</span>
              <h2 className="text-3xl font-black leading-none tracking-tighter md:text-5xl">Frequently Asked</h2>
            </div>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {frequentlyAskedQuestions.slice(0, Math.ceil(frequentlyAskedQuestions.length / 2)).map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} theme={theme} />
                ))}
              </div>
              <div className="space-y-8">
                {frequentlyAskedQuestions.slice(Math.ceil(frequentlyAskedQuestions.length / 2)).map((faq, i) => (
                  <FAQItem key={i + 100} faq={faq} index={i + 10} theme={theme} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FINAL CTA (MASTERPIECE) ================= */}
      <section className="relative px-8 py-48 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-${theme.aura}-500/5 blur-[250px] rounded-full z-0 pointer-events-none`} />
        <div className="container rounded-[5rem] bg-brandDark text-white p-24 md:p-48 text-center relative overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.5)] z-10 transition-transform duration-1000 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1400')] opacity-10 grayscale brightness-200 rotate-[4deg] scale-[1.5]" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <span className={`${themeAccentText} font-black text-[10px] uppercase tracking-[1em] mb-10 block animate-bounce-slow`}>Unparalleled Resilience</span>
            <h2 className="mb-12 text-3xl italic font-black leading-none tracking-tighter uppercase md:text-4xl drop-shadow-2xl">{ctaSection?.title || "Establish Your Governance"}</h2>
            <Link to={ctaSection?.cta.action || "/contact"} className={`group relative inline-flex items-center gap-8 px-12 py-6 font-black text-brandDark rounded-[2.5rem] ${themeAccentBg} hover:bg-white transition-all duration-1000 shadow-[0_30px_90px_rgba(0,0,0,0.5)] scale-110 hover:shadow-${theme.accent.split('-')[0]}-400/60`}>
              <span className="text-lg tracking-tighter uppercase drop-shadow-sm">{ctaSection?.cta.text || "Engage Our Expertise"}</span>
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-700 rounded-full bg-brandDark/10 group-hover:translate-x-4">
                <FaArrowRight className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq, index, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group overflow-hidden rounded-[3rem] border transition-all duration-700 ${isOpen ? `bg-${theme.primary}/5 dark:bg-${theme.accent}/5 border-${theme.primary}/30 dark:border-${theme.accent}/30 ring-1 ring-${theme.primary}/20 dark:ring-${theme.accent}/20` : 'bg-white dark:bg-white/[0.02] border-borderLight dark:border-white/5 hover:border-brandPrimary/50 dark:hover:border-brandAccent/50'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-8 font-black text-left cursor-pointer list-none text-lg md:text-xl transition-colors group-hover:text-${theme.primary} dark:group-hover:text-${theme.accent} leading-tight`}
      >
        <span className="flex-1 pr-8">{faq.question}</span>
        <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 shadow-lg flex-shrink-0 ${isOpen ? `bg-${theme.primary} dark:bg-${theme.accent} rotate-90 text-white dark:text-brandDark` : 'bg-surfaceLight dark:bg-surfaceDark text-brandNavy dark:text-gray-400 group-hover:scale-110'}`}>
          <FaChevronRight className="text-xl" />
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
            <div className={`p-8 pt-0 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-bold border-t border-${theme.primary}/10 dark:border-${theme.accent}/10 mt-1`}>
              <div className="pt-8">
                {faq.answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
