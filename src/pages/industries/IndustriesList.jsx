// // src/pages/industries/IndustriesList.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaIndustry,
//   FaBuilding,
//   FaShoppingCart,
//   FaHeartbeat,
//   FaMicrochip,
//   FaUsers,
//   FaArrowRight,
//   FaCheckCircle,
//   FaShieldAlt,
//   FaLightbulb,
// } from "react-icons/fa";
// import industries from "../../data/industries-master-list.json";
// import BackgroundGrid from "../../component/common/BackgroundGrid";
 
// /* =======================
//    ANIMATIONS
// ======================= */
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };
 
// const staggerContainer = {
//   animate: { transition: { staggerChildren: 0.1 } },
// };
 
// /* =======================
//    INDUSTRY ICON MAP
// ======================= */
// const industryIcons = {
//   automobiles: <FaIndustry className="text-3xl" />,
//   "banking-insurance": <FaBuilding className="text-3xl" />,
//   ecommerce: <FaShoppingCart className="text-3xl" />,
//   healthcare: <FaHeartbeat className="text-3xl" />,
//   "it-consulting": <FaMicrochip className="text-3xl" />,
//   manufacturing: <FaIndustry className="text-3xl" />,
//   "retail-consumer": <FaShoppingCart className="text-3xl" />,
//   "travel-logistics": <FaUsers className="text-3xl" />,
// };
 
// /* =======================
//    INDUSTRY CARD (LOGINORD LAYOUT)
// ======================= */
// const IndustryCard = ({ industry, index }) => {
//   const icon = industryIcons[industry.id] || <FaIndustry className="text-3xl" />;
 
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       className="group"
//     >
//       <Link to={`/industries/${industry.id}`}>
//         <div className="relative h-full overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-surfaceDark rounded-2xl hover:shadow-2xl hover:-translate-y-2">
//           {/* Image with hover zoom effect */}
//           {industry.headerImage && (
//             <div className="relative h-64 overflow-hidden">
//               <motion.img
//                 src={industry.headerImage}
//                 alt={industry.title}
//                 className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 transition-opacity duration-300 bg-brandDark/20 group-hover:bg-brandDark/10" />
//             </div>
//           )}
 
//           {/* Content */}
//           <div className="p-8 space-y-4">
//             {/* Title */}
//             <h3 className="text-2xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//               {industry.title}
//             </h3>
 
//             {/* Subtitle */}
//             <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
//               {industry.summary}
//             </p>
 
//             {/* Key Features as bullet points */}
//             {industry.keyFeatures && (
//               <ul className="pt-4 space-y-2">
//                 {industry.keyFeatures.slice(0, 3).map((feature, i) => (
//                   <li key={i} className="flex items-start gap-3 text-sm text-brandNavy dark:text-gray-400">
//                     <span className="flex-shrink-0 mt-1 text-lg font-bold text-brandPrimary dark:text-brandAccent">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };
 
// /* =======================
//    MAIN COMPONENT
// ======================= */
// export default function IndustriesList() {
//   // Get first 5 industry images for hero gallery
//   const galleryImages = industries.slice(0, 5).map(ind => ind.headerImage);
 
//   return (
//     <div className="min-h-screen overflow-x-hidden text-brandDark bg-bgLight dark:bg-bgDark dark:text-white">
//       {/* <BackgroundGrid /> */}
 
//       {/* ================= HERO SECTION (LOGINORD STYLE) ================= */}
//       <section className="relative pt-32 pb-16 overflow-hidden section-padding">
//         <div className="container relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             className="mb-12 text-center"
//             initial="initial"
//             animate="animate"
//             variants={staggerContainer}
//           >
//             <motion.p
//               variants={fadeInUp}
//               className="mb-4 text-sm font-semibold tracking-widest uppercase text-brandPrimary dark:text-brandAccent"
//             >
//               Industry Expertise
//             </motion.p>
 
//             <motion.h1
//               variants={fadeInUp}
//               className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-brandDark dark:text-white"
//             >
//               Industries We Serve
//             </motion.h1>
 
//             <motion.p
//               variants={fadeInUp}
//               className="max-w-4xl mx-auto text-lg leading-relaxed md:text-xl text-brandNavy dark:text-gray-400"
//             >
//               Sector-focused expertise delivering risk, compliance, and resilience
//             </motion.p>
//           </motion.div>
 
//           {/* Image Gallery - 5 columns with curtain effect (Exact Loginord style) */}
//           <motion.div
//             className="grid grid-cols-2 gap-3 md:grid-cols-5"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             {[
//               "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=1200&fit=crop",
//               "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=1200&fit=crop",
//               "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop",
//               "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=800&h=1200&fit=crop",
//               "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop"
//             ].map((img, i) => (
//               <motion.div
//                 key={i}
//                 className="relative overflow-hidden cursor-pointer aspect-[3/4] rounded-xl group"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + i * 0.1 }}
//                 style={{
//                   position: 'relative',
//                 }}
//               >
//                 <img
//                   src={img}
//                   alt={`Industry visual ${i + 1}`}
//                   className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Curtain sweep effect */}
//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     overflow: 'hidden',
//                   }}
//                 >
//                   <div
//                     className="absolute h-full transition-all duration-700 ease-out -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:left-full"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       left: '-100%',
//                       top: 0,
//                     }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
 
//       {/* ================= WHY EXPERTISE MATTERS (LOGINORD STYLE) ================= */}
//       <section className="relative py-20 transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
//         <div className="container max-w-6xl mx-auto">
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
//               Why Industry Expertise matters
//             </p>
 
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Deep Sector Knowledge, Seamless Execution.
//             </h2>
 
//             <p className="max-w-4xl mx-auto text-lg leading-relaxed text-brandNavy dark:text-gray-400">
//               In complex risk management, one size never fits all. By focusing on your industry's unique requirements - regulatory standards, compliance protocols, operational frameworks, and sector-specific challenges - we ensure compliance, reduce risk, and optimize outcomes. Our teams speak your language and anticipate challenges before they arise.
//             </p>
//           </motion.div>
//         </div>
//       </section>
 
//       {/* ================= INDUSTRIES GRID (LOGINORD CARD STYLE) ================= */}
//       <section className="relative py-20 transition-colors duration-300 bg-gray-50 dark:bg-surfaceDark section-padding">
//         <div className="container mx-auto max-w-7xl">
//           {/* Section Header */}
//           <motion.div
//             className="mb-16 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
//               Specialized by Sector
//             </p>
 
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Tailored Industry Solutions
//             </h2>
 
//             <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
//               Designed for sector-specific regulatory, operational, and strategic challenges
//             </p>
//           </motion.div>
 
//           {/* Industries Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {industries.map((industry, index) => (
//               <IndustryCard
//                 key={industry.id}
//                 industry={industry}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* ================= THREE FEATURE CARDS (LOGINORD STYLE) ================= */}
//       <section className="relative py-20 transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
//         <div className="container max-w-6xl mx-auto">
//           <motion.div
//             className="mb-16 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Industry-Specific Excellence
//             </h2>
//           </motion.div>
 
//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 icon: <FaShieldAlt className="text-4xl" />,
//                 title: "Deep Domain Knowledge",
//                 desc: "Specialized expertise in sector regulations and challenges"
//               },
//               {
//                 icon: <FaLightbulb className="text-4xl" />,
//                 title: "Best Practice Frameworks",
//                 desc: "Industry-proven methodologies and compliance standards"
//               },
//               {
//                 icon: <FaCheckCircle className="text-4xl" />,
//                 title: "Sector Leadership",
//                 desc: "Trusted advisors to leading organizations across industries"
//               }
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="p-8 text-center transition-all duration-300 bg-white shadow-lg dark:bg-surfaceDark rounded-2xl hover:shadow-2xl hover:-translate-y-1"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.12 }}
//               >
//                 <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-colors duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white">
//                   {item.icon}
//                 </div>
 
//                 <h3 className="mb-4 text-xl font-bold text-brandDark dark:text-white">
//                   {item.title}
//                 </h3>
 
//                 <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* ================= CTA SECTION (LOGINORD STYLE) ================= */}
//       <section className="relative py-20 text-center transition-colors duration-300 bg-gray-50 dark:bg-surfaceDark section-padding">
//         <div className="container relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//               Ready to Transform Your Industry Resilience?
//             </h2>
 
//             <p className="max-w-3xl mx-auto text-xl text-brandNavy dark:text-gray-400">
//               Partner with RiskMan for industry-leading risk management and compliance solutions
//             </p>
 
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               {["Deep Domain Knowledge", "Best Practice Frameworks", "Sector Leadership"].map(
//                 (item, i) => (
//                   <motion.span
//                     key={i}
//                     className="px-6 py-3 font-semibold border rounded-full bg-surfaceLight/50 dark:bg-bgDark/50 backdrop-blur-sm border-borderLight dark:border-borderDark text-brandDark dark:text-white"
//                     whileHover={{
//                       y: -2,
//                       borderColor: "#FFC000",
//                     }}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     viewport={{ once: true }}
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
//                 Discuss Your Industry Needs
//                 <FaArrowRight />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
 
 
// src/pages/industries/IndustriesList.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaIndustry,
  FaBuilding,
  FaShoppingCart,
  FaHeartbeat,
  FaMicrochip,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import industries from "../../data/industries-master-list.json";
 
// Import local industry images
import manufacturingImg from "../../assets/images/industry/manufacturing.png";
import bankingImg from "../../assets/images/industry/banking.png";
import ecommerceImg from "../../assets/images/industry/ecommerce.png";
import healthcareImg from "../../assets/images/industry/healthcare.png";
import technologyImg from "../../assets/images/industry/technology.png";
 
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
 
/* =======================
   INDUSTRY CARD WITH SCROLL REVEAL
======================= */
const IndustryCard = ({ industry, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
 
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
 
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
 
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full group"
    >
      <Link to={`/industries/${industry.id}`}>
        <div className="relative h-full overflow-hidden transition-all duration-300 border shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:border-brandGold dark:hover:border-brandAccent">
          {/* Image with curtain effect on scroll reveal */}
          {industry.headerImage && (
            <div className="relative overflow-hidden h-72 rounded-t-3xl">
              <img
                src={industry.headerImage}
                alt={industry.title}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
 
              {/* Curtain Effect that reveals on scroll */}
              {isVisible && (
                <motion.div
                  className="absolute inset-0 bg-white dark:bg-gray-900"
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ zIndex: 10 }}
                />
              )}
            </div>
          )}
 
          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Orange circle bullet + Title */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-brandGold dark:bg-brandAccent" />
              <h3 className="text-2xl font-bold text-brandDark dark:text-white">
                {industry.title}
              </h3>
            </div>
 
            {/* Subtitle */}
            <p className="text-base leading-relaxed text-brandNavy dark:text-gray-400">
              {industry.summary}
            </p>
 
            {/* Key Features as bullet points */}
            {industry.keyFeatures && (
              <ul className="pt-2 space-y-3">
                {industry.keyFeatures.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brandNavy dark:text-gray-400">
                    <span className="flex-shrink-0 mt-1 text-brandDark dark:text-white">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
 
/* =======================
   MAIN COMPONENT
======================= */
export default function IndustriesList() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
 
  // Transform for hero images to slide up
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
 
  return (
    <div className="min-h-screen overflow-x-hidden text-brandDark bg-bgLight dark:bg-bgDark dark:text-white">
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-surfaceLight dark:bg-bgDark">
        <div className="container relative z-10 mx-auto max-w-7xl">
          {/* Centered Header Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            {/* INDUSTRIES Label with Orange Dot */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-brandGold dark:bg-brandAccent" />
              <p className="text-sm font-semibold tracking-widest uppercase text-brandDark/70 dark:text-white/70">
                INDUSTRIES
              </p>
            </motion.div>
 
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-brandDark dark:text-white"
            >
              Tailored to your Industry.
            </motion.h1>
 
            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-lg leading-relaxed md:text-xl text-brandNavy dark:text-gray-300"
            >
              From perishable foods to high-value electronics, Loginord crafts specialized supply-chain solutions that fit your requirements and regulations.
            </motion.p>
          </motion.div>
 
          {/* Image Grid - 5 Columns */}
          <motion.div
            style={{ y, opacity }}
            className="grid grid-cols-2 gap-4 md:grid-cols-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              manufacturingImg,
              bankingImg,
              ecommerceImg,
              healthcareImg,
              technologyImg
            ].map((img, i) => (
              <HeroImageWithCurtain key={i} img={img} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
 
      {/* ================= WHY EXPERTISE MATTERS ================= */}
      <section className="relative py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
        {/* Arrow Background Pattern - Left Side */}
        <div className="absolute w-48 h-48 -translate-y-1/2 left-8 top-1/2 opacity-5 dark:opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-brandDark dark:text-white">
            <path d="M100 20 L100 180 M40 100 L100 180 L160 100" fill="none" stroke="currentColor" strokeWidth="8" />
          </svg>
        </div>
 
        <div className="container max-w-6xl px-6 mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-brandGold dark:bg-brandAccent" />
              <p className="text-sm font-semibold tracking-wider uppercase text-brandDark/60 dark:text-white/60">
                WHY INDUSTRY EXPERTISE MATTERS
              </p>
            </div>
 
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Deep Sector Knowledge, Seamless Execution.
            </h2>
 
            <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
              In complex risk management, one size never fits all. By focusing on your industry's unique requirements - regulatory standards, compliance protocols, operational frameworks, and sector-specific challenges - we ensure compliance, reduce risk, and optimize outcomes. Our teams speak your language and anticipate challenges before they arise.
            </p>
          </motion.div>
        </div>
      </section>
 
      {/* ================= INDUSTRIES GRID ================= */}
      <section className="relative py-24 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
        <div className="container px-6 mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark/60 dark:text-white/60">
              Specialized by Sector
            </p>
 
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Tailored Industry Solutions
            </h2>
 
            <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
              Designed for sector-specific regulatory, operational, and strategic challenges
            </p>
          </motion.div>
 
          {/* Industries Grid - 2 columns */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= THREE FEATURE CARDS ================= */}
      <section className="relative py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-6xl px-6 mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Industry-Specific Excellence
            </h2>
          </motion.div>
 
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaShieldAlt className="text-4xl" />,
                title: "Deep Domain Knowledge",
                desc: "Specialized expertise in sector regulations and challenges"
              },
              {
                icon: <FaLightbulb className="text-4xl" />,
                title: "Best Practice Frameworks",
                desc: "Industry-proven methodologies and compliance standards"
              },
              {
                icon: <FaCheckCircle className="text-4xl" />,
                title: "Sector Leadership",
                desc: "Trusted advisors to leading organizations across industries"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 text-center transition-all duration-300 bg-surfaceLight dark:bg-surfaceDark rounded-3xl hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 transition-colors duration-300 rounded-full bg-brandGold/10 dark:bg-brandAccent/10 text-brandGold dark:text-brandAccent">
                  {item.icon}
                </div>
 
                <h3 className="mb-4 text-xl font-bold text-brandDark dark:text-white">
                  {item.title}
                </h3>
 
                <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 text-center transition-colors duration-300 bg-bgLight dark:bg-bgDark">
        <div className="container relative z-10 max-w-6xl px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Ready to Transform Your Industry Resilience?
            </h2>
 
            <p className="max-w-3xl mx-auto text-xl text-brandNavy dark:text-gray-400">
              Partner with RiskMan for industry-leading risk management and compliance solutions
            </p>
 
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Deep Domain Knowledge", "Best Practice Frameworks", "Sector Leadership"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    className="px-6 py-3 font-semibold border rounded-full bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark text-brandDark dark:text-white"
                    whileHover={{
                      y: -2,
                      borderColor: "#FFC000",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>
 
            <motion.div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
                whileTap={{ scale: 0.98 }}
              >
                Discuss Your Industry Needs
                <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
 
/* =======================
   HERO IMAGE WITH CURTAIN
======================= */
function HeroImageWithCurtain({ img, index }) {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = React.useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (hasRevealed) return;
 
      const scrollY = window.scrollY;
      // Trigger reveal when user scrolls down at least 100px
      if (scrollY > 100) {
        setHasRevealed(true);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    // Also check on mount in case already scrolled
    handleScroll();
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasRevealed]);
 
  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden cursor-pointer aspect-[3/4] rounded-xl group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
    >
      <img
        src={img}
        alt={`Industry visual ${index + 1}`}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
 
      {/* Curtain overlay - initially covers image, slides away on scroll */}
      <motion.div
        className="absolute inset-0 bg-brandDark dark:bg-brandNavy"
        initial={{ x: 0 }}
        animate={{ x: hasRevealed ? "100%" : 0 }}
        transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
        style={{ zIndex: 10 }}
      />
 
      {/* Hover sweep effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[150%] h-full bg-white/40 dark:bg-white/20 -left-[150%] top-0 -skew-x-12 group-hover:left-full transition-all duration-1000 ease-out" />
      </div>
    </motion.div>
  );
}