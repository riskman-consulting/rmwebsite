// // import React from "react";
// // import { motion } from "framer-motion";
 
// // const Marquee = ({ companies, start, end, duration = 25 }) => {
// //     return (
// //         <div className="relative w-full overflow-hidden">
// //             <motion.div
// //                 className="flex items-center gap-8"
// //                 initial={{ x: start }}
// //                 animate={{ x: end }}
// //                 transition={{
// //                     repeat: Infinity,
// //                     repeatType: "loop",
// //                     duration: duration,
// //                     ease: "linear",
// //                 }}
// //             >
// //                 {/* Duplicate the companies array to create seamless loop */}
// //                 {[...companies, ...companies, ...companies].map((company, index) => (
// //                     <div
// //                         key={index}
// //                         className="flex items-center justify-center flex-shrink-0 w-40 h-20 px-4 transition-all duration-300 bg-white border border-gray-200 dark:bg-white dark:border-gray-300 rounded-xl hover:shadow-lg hover:scale-105"
// //                     >
// //                         <img
// //                             src={company.logo}
// //                             alt={company.name}
// //                             className="object-contain max-w-full max-h-full"
// //                         />
// //                     </div>
// //                 ))}
// //             </motion.div>
// //         </div>
// //     );
// // };
 
// // export default Marquee;
 


// import React from "react";

// /**
//  * Marquee — CSS-native infinite scroll.
//  * Props:
//  *   companies   : array of { name, logo }
//  *   direction   : "left" | "right"  (default "left")
//  *   duration    : seconds for one full cycle (default 22)
//  */
// const Marquee = ({ companies = [], direction = "left", duration = 22 }) => {
//   // Triple-duplicate for seamless wrap on ultra-wide displays
//   const items = [...companies, ...companies, ...companies];

//   return (
//     <div
//       className="marquee-track"
//       style={{ "--duration": `${duration}s`, "--dir": direction === "right" ? "reverse" : "normal" }}
//     >
//       <div className="marquee-inner">
//         {items.map((company, index) => (
//           <div key={index} className="marquee-card">
//             <img
//               src={company.logo}
//               alt={company.name}
//               loading="lazy"
//               className="marquee-logo"
//             />
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .marquee-track {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           /* Fade edges for premium look */
//           mask-image: linear-gradient(
//             to right,
//             transparent 0%,
//             black 8%,
//             black 92%,
//             transparent 100%
//           );
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent 0%,
//             black 8%,
//             black 92%,
//             transparent 100%
//           );
//         }

//         .marquee-inner {
//           display: flex;
//           align-items: center;
//           gap: clamp(12px, 2vw, 20px);
//           width: max-content;
//           animation: marquee-scroll var(--duration) linear infinite;
//           animation-direction: var(--dir);
//           will-change: transform;
//         }

//         /* Pause on hover (desktop) */
//         .marquee-track:hover .marquee-inner {
//           animation-play-state: paused;
//         }

//         @keyframes marquee-scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-33.3333%); }
//         }

//         .marquee-card {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #ffffff;
//           border: 1px solid rgba(0, 0, 0, 0.07);
//           border-radius: 14px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
//           transition: box-shadow 0.2s ease, transform 0.2s ease;
//           /* Responsive card size */
//           width: clamp(110px, 14vw, 168px);
//           height: clamp(56px, 7vw, 80px);
//           padding: clamp(8px, 1.2vw, 14px) clamp(12px, 2vw, 20px);
//         }

//         .marquee-card:hover {
//           box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
//           transform: scale(1.04);
//         }

//         .marquee-logo {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           object-position: center;
//           display: block;
//         }

//         /* Respect reduced-motion preference */
//         @media (prefers-reduced-motion: reduce) {
//           .marquee-inner {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Marquee;



// import React from "react";

// /**
//  * Marquee — CSS-native infinite scroll.
//  * Props:
//  *   companies  : array of { name, logo }
//  *   direction  : "left" | "right"  (default "left")
//  *   duration   : seconds per cycle (default 22)
//  */
// const Marquee = ({ companies = [], direction = "left", duration = 22 }) => {
//   const items = [...companies, ...companies, ...companies];
//   const animDir = direction === "right" ? "reverse" : "normal";

//   return (
//     <div
//       className="marquee-track"
//       style={{
//         "--duration": `${duration}s`,
//         "--dir": animDir,
//       }}
//     >
//       <div className="marquee-inner">
//         {items.map((company, index) => (
//           <div key={index} className="marquee-card">
//             <img
//               src={company.logo}
//               alt={company.name}
//               loading="lazy"
//               className="marquee-logo"
//             />
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .marquee-track {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           mask-image: linear-gradient(
//             to right,
//             transparent 0%,
//             black 6%,
//             black 94%,
//             transparent 100%
//           );
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent 0%,
//             black 6%,
//             black 94%,
//             transparent 100%
//           );
//         }

//         .marquee-inner {
//           display: flex;
//           align-items: center;
//           gap: clamp(10px, 1.4vw, 18px);
//           width: max-content;
//           animation: marquee-scroll var(--duration) linear infinite;
//           animation-direction: var(--dir);
//           will-change: transform;
//         }

//         .marquee-track:hover .marquee-inner {
//           animation-play-state: paused;
//         }

//         @keyframes marquee-scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-33.3333%); }
//         }

//         /* Light mode card */
//         .marquee-card {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #ffffff;
//           border: 1px solid rgba(0, 31, 63, 0.08);
//           border-radius: 14px;
//           box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
//           transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
//           width: clamp(120px, 13vw, 176px);
//           height: clamp(64px, 6.5vw, 88px);
//           padding: clamp(10px, 1.2vw, 16px) clamp(14px, 1.8vw, 24px);
//         }

//         .marquee-card:hover {
//           box-shadow: 0 6px 24px rgba(0, 31, 63, 0.12);
//           transform: translateY(-2px) scale(1.03);
//         }

//         /* Dark mode — .dark class on <html> per Tailwind darkMode: "class" */
//         .dark .marquee-card {
//           background: #001A33;
//           border-color: rgba(255, 192, 0, 0.12);
//           box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25);
//         }

//         .dark .marquee-card:hover {
//           box-shadow: 0 6px 24px rgba(255, 192, 0, 0.14);
//           border-color: rgba(255, 192, 0, 0.28);
//         }

//         .marquee-logo {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           object-position: center;
//           display: block;
//           transition: filter 0.25s ease;
//         }

//         /* Invert dark logos in dark mode for legibility */
//         .dark .marquee-logo {
//           filter: brightness(0) invert(1) opacity(0.82);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .marquee-inner { animation: none; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Marquee;



import React from "react";

/**
 * Marquee — CSS-native infinite scroll.
 * Props:
 *   companies  : array of { name, logo, logoStyle? }
 *   direction  : "left" | "right"  (default "left")
 *   duration   : seconds per cycle (default 22)
 */
const Marquee = ({ companies = [], direction = "left", duration = 22 }) => {
  const items = [...companies, ...companies, ...companies];
  const animDir = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className="marquee-track"
      style={{
        "--duration": `${duration}s`,
        "--dir": animDir,
      }}
    >
      <div className="marquee-inner">
        {items.map((company, index) => (
          <div key={index} className="marquee-card">
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              className="marquee-logo"
              style={company.logoStyle || {}}
            />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .marquee-inner {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.4vw, 18px);
          width: max-content;
          animation: marquee-scroll var(--duration) linear infinite;
          animation-direction: var(--dir);
          will-change: transform;
        }

        .marquee-track:hover .marquee-inner {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }

        /* Light mode card */
        .marquee-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid rgba(0, 31, 63, 0.08);
          border-radius: 14px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          width: clamp(120px, 13vw, 176px);
          height: clamp(64px, 6.5vw, 88px);
          padding: clamp(10px, 1.2vw, 16px) clamp(14px, 1.8vw, 24px);
          overflow: hidden;
        }

        .marquee-card:hover {
          box-shadow: 0 6px 24px rgba(0, 31, 63, 0.12);
          transform: translateY(-2px) scale(1.03);
        }

        /* Dark mode — .dark class on <html> per Tailwind darkMode: "class" */
        .dark .marquee-card {
          background: #001A33;
          border-color: rgba(255, 192, 0, 0.12);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.25);
        }

        .dark .marquee-card:hover {
          box-shadow: 0 6px 24px rgba(255, 192, 0, 0.14);
          border-color: rgba(255, 192, 0, 0.28);
        }

        .marquee-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          transition: filter 0.25s ease, transform 0.25s ease;
        }

        /* Invert dark logos in dark mode for legibility */
        .dark .marquee-logo {
          filter: brightness(0) invert(1) opacity(0.82);
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default Marquee;