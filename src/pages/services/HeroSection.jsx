// import { Link } from "react-router-dom";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import HeroServiceImage from "../../assets/images/hero-section/services/hero.webp";

// export const HeroSection = () => {
//   const { scrollY } = useScroll();

//   // Parallax aur Fade effects ka logic
//   const y = useTransform(scrollY, [0, 800], [0, 300]);
//   const opacity = useTransform(scrollY, [0, 500], [1, 0]);
//   const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

//   return (
//     <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brandDark">
      
//       {/* --- Background Image Container --- */}
//       <motion.div 
//         style={{ y, scale }} 
//         className="absolute inset-0 z-0"
//       >
//         {/* Dark Overlay for better text readability */}
//         <div className="absolute inset-0 z-10 bg-black/50 dark:bg-brandDark/70" />
        
//         <img
//           src={HeroServiceImage}
//           alt="Professional Services"
//           className="object-cover w-full h-full"
//           priority="true" // If using Next.js, otherwise standard img is fine
//         />
//       </motion.div>

//       {/* --- Main Content Section --- */}
//       <motion.div
//         style={{ opacity }}
//         className="container relative z-20 px-8 mx-auto text-center"
//       >
//         {/* Badge/Tag */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-md"
//         >
//           <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
//           RiskMan Services
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className=" text-transparent bg-clip-text mb-6 text-3xl sm:text-4xl font-extrabold leading-[1.1] bg-gradient-to-b from-white to-white-/40 md:text-5xl lg:text-6xl font-heading"
//         >
//           Strategic Resilience for the{" "} <br/>
//           <span className="text-brandAccent">
//             Global Enterprise
//           </span>
//         </motion.h1>

//         {/* Sub-headline */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 md:text-xl lg:text-2xl"
//         >
//           Navigating complexity with precision. We provide CXOs with the foresight to mitigate risk, the clarity to ensure compliance, and the strategy to drive sustainable growth.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="flex flex-col items-center justify-center gap-4 sm:flex-row"
//         >
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold transition-all duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--brandAccent-rgb),0.4)]"
//           >
//             Explore Our Services
//             <FaArrowRight className="transition-transform group-hover:translate-x-1" />
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* --- Animated Scroll Indicator --- */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute z-20 -translate-x-1/2 bottom-10 left-1/2"
//       >
//         <div className="flex flex-col items-center gap-3">
//           <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
//             Scroll Down
//           </span>
//           <div className="w-[26px] h-[45px] border-2 rounded-full border-white/30 flex justify-center p-1.5">
//             <motion.div
//               animate={{ 
//                 y: [0, 15, 0],
//                 opacity: [1, 0.5, 1] 
//               }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity,
//                 ease: "easeInOut" 
//               }}
//               className="w-1.5 h-1.5 bg-brandAccent rounded-full"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Bottom Gradient Fade (Optional: smooth transition to next section) */}
//       <div className="absolute bottom-0 left-0 z-10 w-full h-32 bg-gradient-to-t from-brandDark to-transparent" />
//     </section>
//   );
// };


import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroServiceImage from "../../assets/images/hero-section/services/hero.webp";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 260]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);

  return (
    <section className="relative w-full overflow-hidden bg-brandDark">
      {/* 1. Changed min-h-svh to min-h-[500px] on mobile to prevent massive gaps.
          2. Reduced py (padding-vertical) to bring content closer to the header.
      */}
      <div className="relative flex items-center justify-center min-h-[550px] sm:min-h-[80vh] lg:min-h-screen pt-16 pb-12 sm:py-0">
        
        {/* ── Background ── */}
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img
            src={HeroServiceImage}
            alt="Professional Services"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/70 sm:bg-black/50" />
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 w-full px-6 mx-auto max-w-screen-2xl"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            {/* ── Badge: Reduced bottom margin from mb-6 to mb-4 ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 sm:mb-6 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
              RiskMan Services
            </motion.div>

            {/* ── Headline: Tightened leading and margin ── */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-white text-[1.9rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 tracking-tight"
            >
              Strategic Resilience
              <br />
              <span className="text-brandAccent">Global Enterprise</span>
            </motion.h1>

            {/* ── Description: Reduced max-width and margin ── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[300px] xs:max-w-md sm:max-w-xl md:max-w-2xl mb-8 sm:mb-10 text-gray-300/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Navigating complexity with precision. We provide CXOs with the
              foresight to mitigate risk and strategy for growth.
            </motion.p>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center w-full"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 w-auto min-h-[50px] px-8 text-sm sm:text-base font-bold rounded-full bg-brandAccent text-brandDark hover:bg-white transition-all duration-300 shadow-lg"
              >
                Explore Our Services
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Bottom Fade: Reduced height ── */}
        <div className="absolute bottom-0 w-full h-16 pointer-events-none bg-gradient-to-t from-brandDark to-transparent" />
      </div>
    </section>
  );
};