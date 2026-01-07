// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaShieldAlt,
//   FaChartLine,
//   FaFileContract,
//   FaLightbulb,
//   FaGraduationCap,
//   FaSearch,
//   FaLeaf,
//   FaCog,
//   FaBalanceScale,
//   FaUserShield,
//   FaClipboardCheck,
//   FaHandshake,
//   FaArrowRight,
//   FaCheckCircle,
// } from "react-icons/fa";
// import allServices from "../../data/services-master-list.json";
// import BackgroundGrid from "../../component/common/BackgroundGrid";

// /* =======================
//    ANIMATIONS
// ======================= */
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.9 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.5, ease: "easeOut" },
// };

// const staggerContainer = {
//   animate: { transition: { staggerChildren: 0.1 } },
// };

// /* =======================
//    SERVICE ICONS MAP
// ======================= */
// const serviceIcons = {
//   "risk-advisory": <FaShieldAlt className="text-3xl" />,
//   consulting: <FaLightbulb className="text-3xl" />,
//   "outsourcing-training": <FaGraduationCap className="text-3xl" />,
//   "esg-advisory": <FaLeaf className="text-3xl" />,
//   "financial-advisory": <FaChartLine className="text-3xl" />,
//   "forensic-investigation": <FaSearch className="text-3xl" />,
//   "soc-services": <FaShieldAlt className="text-3xl" />,
//   "iso-certifications": <FaFileContract className="text-3xl" />,
//   "pci-dss-compliance": <FaClipboardCheck className="text-3xl" />,
//   tprm: <FaHandshake className="text-3xl" />,
//   "itgc-itac": <FaCog className="text-3xl" />,
//   "bcp-dr": <FaShieldAlt className="text-3xl" />,
//   "it-risk-management": <FaChartLine className="text-3xl" />,
//   cybersecurity: <FaUserShield className="text-3xl" />,
//   "data-privacy": <FaBalanceScale className="text-3xl" />,
// };

// /* =======================
//    SERVICE CARD COMPONENT
// ======================= */
// const ServiceCard = ({ service, index }) => {
//   const icon = serviceIcons[service.id] || <FaShieldAlt className="text-3xl" />;

//   return (
//     <motion.div
//       variants={scaleIn}
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       className="group"
//     >
//       <Link to={`/services/${service.id}`}>
//         <motion.div
//           className="relative h-full overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
//         >
//           {/* Hover Overlay */}
//           <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

//           {/* Image Section */}
//           {service.headerImage && (
//             <div className="relative h-48 overflow-hidden">
//               <div className="absolute inset-0 z-10 bg-brandDark/40" />
//               <motion.img
//                 src={service.headerImage}
//                 alt={service.title}
//                 className="object-cover w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0"
//               />
//             </div>
//           )}

//           {/* Content */}
//           <div className="relative z-10 p-6 space-y-4">
//             {/* Icon */}
//             <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
//               {icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//               {service.title}
//             </h3>

//             {/* Summary */}
//             <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 line-clamp-3">
//               {service.summary}
//             </p>

//             {/* Learn More */}
//             <div className="pt-4 transition-colors duration-300 border-t border-borderLight dark:border-borderDark group-hover:border-brandPrimary/30 dark:group-hover:border-brandAccent/30">
//               <div className="flex items-center gap-2 font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover:translate-x-1">
//                 Learn More
//                 <FaArrowRight size={14} />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// };

// /* =======================
//    MAIN COMPONENT
// ======================= */
// export default function ServicesList() {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const categories = [
//     { id: "all", label: "All Services" },
//     { id: "risk", label: "Risk & Compliance" },
//     { id: "technology", label: "Technology" },
//     { id: "advisory", label: "Advisory" },
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
//       <BackgroundGrid />
//       {/* ================= HERO ================= */}
//       <section className="relative isolate min-h-[50vh] flex items-center justify-center section-padding overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 z-10 bg-bgLight/60 dark:bg-bgDark/70" />
//           <img
//             src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
//             alt="Professional Services"
//             className="object-cover w-full h-full grayscale opacity-30 dark:opacity-40"
//           />
//         </div>

//         <div className="container relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             className="text-center"
//             initial="initial"
//             animate="animate"
//             variants={staggerContainer}
//           >
//             <motion.p
//               variants={fadeInUp}
//               className="mb-4 text-lg font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent"
//             >
//               RiskMan Services
//             </motion.p>

//             <motion.h1
//               variants={fadeInUp}
//               className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-brandDark dark:text-white"
//             >
//               Comprehensive
//               <br />
//               <span className="text-brandPrimary dark:text-brandAccent">Risk & Compliance Solutions</span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="max-w-3xl mx-auto text-xl leading-relaxed text-brandNavy dark:text-gray-400 md:text-2xl"
//             >
//               Enterprise-grade advisory across risk, audit, cybersecurity, and
//               assurance
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SERVICES GRID ================= */}
//       <section className="relative transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">
//         <div className="container mx-auto max-w-7xl">
//           {/* Section Header */}
//           <motion.div
//             className="mb-16 text-start"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Our <span className="text-brandPrimary dark:text-brandAccent">Service Offerings</span>
//             </h2>
//             <p className="max-w-3xl text-base text-brandNavy dark:text-gray-400 text-start">
//               Discover how RiskMan services and solutions help you turn risk
//               into resilience and growth
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {allServices.map((service, index) => (
//               <ServiceCard key={service.id} service={service} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE RISKMAN ================= */}
//       <section className="relative transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">
//         <div className="container px-6 mx-auto max-w-7xl">
//           <motion.h2
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="mb-16 text-4xl font-bold text-start md:text-5xl text-brandDark dark:text-white"
//           >
//             Why Choose
//             <br />
//             <span className="text-brandPrimary dark:text-brandAccent">RiskMan</span>
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 icon: <FaShieldAlt className="text-3xl" />,
//                 title: "Tailored Expertise",
//                 desc: "Custom solutions designed for your unique business challenges",
//               },
//               {
//                 icon: <FaLightbulb className="text-3xl" />,
//                 title: "Innovative Approach",
//                 desc: "Leveraging cutting-edge methodologies and technologies",
//               },
//               {
//                 icon: <FaCheckCircle className="text-3xl" />,
//                 title: "Proven Results",
//                 desc: "Track record of delivering measurable outcomes",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.12 }}
//                 className="relative p-8 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
//               >
//                 <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />

//                 <div className="relative z-10">
//                   <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
//                     {item.icon}
//                   </div>

//                   <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="relative text-center transition-colors duration-300 bg-bgLight dark:bg-bgDark section-padding isolate">

//         <div className="container relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Partner with RiskMan for
//               <br />
//               <span className="text-brandPrimary dark:text-brandAccent">Measurable Resilience</span>
//             </h2>

//             <p className="max-w-3xl mx-auto text-xl text-brandNavy dark:text-gray-400">
//               Proven frameworks, pragmatic execution, and a client-first
//               approach to safeguard and grow your business
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               {["Tailored Expertise", "Innovative Approach", "Proven Results"].map(
//                 (item, i) => (
//                   <motion.span
//                     key={i}
//                     className="px-6 py-3 font-semibold border rounded-full bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-sm border-borderLight dark:border-borderDark text-brandDark dark:text-white"
//                     whileHover={{
//                       y: -2,
//                       borderColor: "#FFC000",
//                     }}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     {item}
//                   </motion.span>
//                 )
//               )}
//             </div>

//             <motion.div className="flex flex-wrap justify-center gap-4">
//               <motion.a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Speak to an Expert
//                 <FaArrowRight />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaFileContract,
  FaLightbulb,
  FaGraduationCap,
  FaSearch,
  FaLeaf,
  FaCog,
  FaBalanceScale,
  FaUserShield,
  FaClipboardCheck,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import allServices from "../../data/services-master-list.json";

/* =======================
   SERVICE ICONS MAP
======================= */
const serviceIcons = {
  "risk-advisory": <FaShieldAlt />,
  consulting: <FaLightbulb />,
  "outsourcing-training": <FaGraduationCap />,
  "esg-advisory": <FaLeaf />,
  "financial-advisory": <FaChartLine />,
  "forensic-investigation": <FaSearch />,
  "soc-services": <FaShieldAlt />,
  "iso-certifications": <FaFileContract />,
  "pci-dss-compliance": <FaClipboardCheck />,
  tprm: <FaHandshake />,
  "itgc-itac": <FaCog />,
  "bcp-dr": <FaShieldAlt />,
  "it-risk-management": <FaChartLine />,
  cybersecurity: <FaUserShield />,
  "data-privacy": <FaBalanceScale />,
};

/* =======================
   CURTAIN REVEAL IMAGE
======================= */
const CurtainRevealImage = ({ src, alt, delay = 0, isCompact = false }) => {
  const containerRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView && !hasRevealed) {
      setHasRevealed(true);
    }
  }, [isInView, hasRevealed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-t-3xl ${isCompact ? 'h-48' : 'h-64'}`}>
      {/* Background Image with Zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3 }}
        animate={{ scale: hasRevealed ? 1 : 1.3 }}
        transition={{
          duration: 1.6,
          delay: delay + 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <img
          src={src || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brandDark/40 dark:bg-brandDark/50" />

      {/* CURTAIN - Slides down from top */}
      <motion.div
        className="absolute inset-0 z-20 bg-brandDark dark:bg-brandNavy"
        initial={{ y: "0%" }}
        animate={{ y: hasRevealed ? "100%" : "0%" }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </div>
  );
};

/* =======================
   HERO SECTION
======================= */
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-brandDark/50 dark:bg-brandDark/60" />
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
          alt="Professional Services"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container relative z-10 text-center"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
          RiskMan Services
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl font-heading"
        >
          Comprehensive{" "}
          <span className="text-brandAccent">
            Risk & Compliance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Enterprise-grade advisory across risk management, compliance, cybersecurity, and strategic assurance
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-brandGold hover:scale-105 hover:shadow-xl"
          >
            Explore Our Services
            <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute z-10 text-white bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 rounded-full border-white/50">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 mx-auto mt-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* =======================
   STICKY SERVICES SECTION - REDESIGNED
======================= */
const StickyServicesSection = () => {
  const featuredServices = allServices.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* LEFT: Enhanced Sticky Content */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Tag */}
              <div className="inline-block px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                Our Services
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white font-heading">
                Services That{" "}
                <span className="text-brandPrimary dark:text-brandAccent">
                  Drive Results
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                From comprehensive risk assessments to cutting-edge cybersecurity solutions, we deliver tailored services that protect and empower your organization.
              </p>

              {/* Stats Cards - Fill the space beautifully */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="mb-2 text-3xl font-bold text-brandPrimary dark:text-brandAccent font-heading">500+</div>
                  <div className="text-sm font-semibold text-brandNavy dark:text-gray-400">Clients Served</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="mb-2 text-3xl font-bold text-brandPrimary dark:text-brandAccent font-heading">15+</div>
                  <div className="text-sm font-semibold text-brandNavy dark:text-gray-400">Years Experience</div>
                </motion.div>
              </div>

              {/* Service Navigation List */}
              <div className="pt-6 space-y-3">
                {featuredServices.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className={`flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl cursor-pointer ${
                      activeIndex === i
                        ? "border-brandAccent bg-brandAccent/5 dark:bg-brandAccent/10 shadow-lg"
                        : "border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark hover:border-brandPrimary/30 dark:hover:border-brandAccent/30"
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {/* Number Badge */}
                    <div
                      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-brandAccent text-brandDark scale-110"
                          : "bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Service Name */}
                    <span className="flex-1 text-sm font-semibold text-brandDark dark:text-white">
                      {service.title}
                    </span>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: activeIndex === i ? 0 : -10, opacity: activeIndex === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-brandAccent" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandGold hover:scale-105 hover:shadow-lg"
                >
                  View All Services
                  <FaArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Scrolling Service Cards */}
          <div className="space-y-6">
            {featuredServices.map((service, index) => (
              <ServiceCardLarge
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =======================
   LARGE SERVICE CARD
======================= */
const ServiceCardLarge = ({ service, index }) => {
  const icon = serviceIcons[service.id] || <FaShieldAlt />;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        to={`/services/${service.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative overflow-hidden transition-all duration-500 border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Image with Curtain - Now Compact */}
          <CurtainRevealImage
            src={service.headerImage}
            alt={service.title}
            delay={index * 0.1}
            isCompact={true}
          />

          {/* Content - Reduced padding */}
          <div className="p-6 space-y-4">
            {/* Number Badge & Icon - Smaller */}
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center justify-center w-12 h-12 text-xl transition-all duration-300 rounded-xl"
                animate={{
                  backgroundColor: isHovered ? "#FFC000" : "rgba(0, 64, 128, 0.1)",
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    color: isHovered ? "#001F3F" : "#004080",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              </motion.div>

              <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Title - Smaller */}
            <h3 className="text-xl font-bold text-brandDark dark:text-white font-heading">
              {service.title}
            </h3>

            {/* Summary - Smaller, limited lines */}
            <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400 line-clamp-2">
              {service.summary}
            </p>

            {/* Learn More Button */}
            <motion.div
              className="flex items-center gap-2 pt-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
              <FaArrowRight size={14} />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* =======================
   ALL SERVICES GRID
======================= */
const AllServicesGrid = () => {
  return (
    <section className="py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
            Complete Portfolio
          </div>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white font-heading">
            All{" "}
            <span className="text-brandPrimary dark:text-brandAccent">
              Services & Solutions
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
            Comprehensive risk management, compliance, and advisory services tailored to your industry
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, index) => (
            <ServiceCardCompact key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =======================
   COMPACT SERVICE CARD
======================= */
const ServiceCardCompact = ({ service, index }) => {
  const icon = serviceIcons[service.id] || <FaShieldAlt />;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        to={`/services/${service.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative h-full overflow-hidden transition-all duration-500 border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Image with Curtain */}
          <CurtainRevealImage
            src={service.headerImage}
            alt={service.title}
            delay={(index % 3) * 0.08}
            isCompact={true}
          />

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Icon */}
            <motion.div
              className="flex items-center justify-center text-xl transition-all duration-300 w-14 h-14 rounded-2xl"
              animate={{
                backgroundColor: isHovered ? "#FFC000" : "rgba(0, 64, 128, 0.1)",
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  color: isHovered ? "#001F3F" : "#004080",
                }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-brandDark dark:text-white font-heading">
              {service.title}
            </h3>

            {/* Summary */}
            <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400 line-clamp-3">
              {service.summary}
            </p>

            {/* Learn More */}
            <div className="pt-4 border-t border-borderLight dark:border-borderDark">
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
                <FaArrowRight size={14} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* =======================
   CAPABILITIES SECTION
======================= */
const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies",
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance Excellence",
      description: "Stay ahead of regulatory requirements and industry standards",
    },
    {
      icon: <FaUserShield />,
      title: "Cybersecurity",
      description: "Advanced threat protection and security frameworks",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Advisory",
      description: "Expert guidance for complex business challenges",
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-brandDark dark:bg-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent">
            Our Capabilities
          </div>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl font-heading">
            Why Choose{" "}
            <span className="text-brandAccent">RiskMan</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Industry-leading expertise backed by proven methodologies and cutting-edge technology
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative p-8 overflow-hidden transition-all duration-300 border cursor-pointer group bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl hover:bg-white/10 hover:border-brandAccent/50"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl transition-all duration-300 rounded-full bg-brandAccent/20 text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white font-heading">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute w-20 h-20 transition-all duration-500 rounded-full -top-10 -right-10 bg-brandAccent/10 blur-2xl group-hover:bg-brandAccent/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =======================
   CTA SECTION
======================= */
const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-brandDark dark:bg-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl font-bold text-white md:text-6xl font-heading">
            Ready to Strengthen Your{" "}
            <span className="text-brandAccent">Risk Posture?</span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/80 md:text-xl">
            Partner with RiskMan for proven frameworks, pragmatic execution, and measurable resilience
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Expert Guidance", "Proven Results", "24/7 Support"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#FFC000",
                }}
                className="px-6 py-3 text-sm font-semibold text-white border rounded-full bg-white/5 backdrop-blur-sm border-white/20"
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-brandGold hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 border rounded-full border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
export default function ServicesList() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bgLight dark:bg-bgDark">
      <HeroSection />
      <StickyServicesSection />
      <AllServicesGrid />
      <CapabilitiesSection />
      <CTASection />
    </div>
  );
}