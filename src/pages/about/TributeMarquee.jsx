// import React from "react";
// import { FaHeart } from "react-icons/fa";

// export default function TributeMarquee() {
//   return (
//     <div className="w-full py-4 overflow-hidden bg-surfaceLight dark:bg-surfaceDark border-y border-brandAccent/20">
//       <marquee behavior="scroll" direction="left" scrollamount="15">
//         <div className="flex items-center gap-8">
//           {/* Item 1 */}
//           <div className="flex items-center gap-4">
//             <div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold tracking-wider uppercase rounded-full bg-brandAccent/10 text-brandAccent">
//               <FaHeart className="text-xs" /> In Loving Memory
//             </div>
//             <span className="text-xl font-bold text-brandPrimary dark:text-brandAccent">
//               Prabirsen Gupta:
//             </span>
//             <span className="text-lg italic text-brandNavy/70 dark:text-white/70">
//               "Excellence is not a destination; it is a continuous journey."
//             </span>
//             <span className="mx-10 text-brandAccent/30">•</span>
//           </div>

//           {/* Item 2 (Repeated for seamless loop feel) */}
//           <div className="flex items-center gap-4">
//             <p className="text-lg font-medium text-brandNavy/80 dark:text-white/80">
//               We honor the legacy of Prabir Sen Gupta whose vision and mentorship laid the foundation for RiskMan.
//             </p>
//             <span className="mx-10 text-brandAccent/30">•</span>
//           </div>
//         </div>
//       </marquee>
//     </div>
//   );
// }



import React from "react";
import { FaHeart } from "react-icons/fa";

export default function TributeMarquee() {
  return (
    <div className="w-full py-6 bg-surfaceLight dark:bg-surfaceDark border-y border-brandAccent/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold tracking-wider uppercase rounded-full bg-brandAccent/10 text-brandAccent shrink-0">
            <FaHeart className="text-xs" /> In Loving Memory
          </div>
          
          {/* Name */}
          <span className="text-xl font-bold text-brandPrimary dark:text-brandAccent shrink-0">
            Prabir Sengupta:
          </span>
          
          {/* Quote */}
          <span className="text-lg italic text-brandNavy/70 dark:text-white/70">
            "Excellence is not a destination; it is a continuous journey."
          </span>
          
          {/* Separator - hidden on mobile */}
          <span className="hidden mx-4 md:inline text-brandAccent/30">•</span>
          
          {/* Description */}
          <p className="max-w-2xl text-base font-medium md:text-lg text-brandNavy/80 dark:text-white/80">
            We honor the legacy of Prabir Sengupta whose vision and mentorship laid the foundation for RiskMan.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Tribute Section
========================= */
// function TributeSection() {
//   return (
//     <motion.div
//       {...animations.fadeInUp}
//       className="w-full py-8 my-12 border-y bg-gradient-to-r from-brandPrimary/5 via-brandGold/5 to-brandPrimary/5 border-brandAccent/20 dark:border-brandGold/30"
//     >
//       <div className="container px-4 mx-auto">
//         <div className="flex flex-col items-start justify-start gap-6 md:flex-row md:items-center">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-wider uppercase rounded-full bg-brandGold/20 text-brandGold shrink-0">
//             <FaHeart className="w-3.5 h-3.5 fill-current" /> IN LOVING MEMORY
//           </div>
          
//           {/* Main Content - All in one line on desktop */}
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
//             {/* Name and Quote */}
//             <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
//               <span className="text-xl font-bold md:text-2xl text-brandPrimary dark:text-brandAccent shrink-0">
//                 Prabirsen Gupta:
//               </span>
              
//               <span className="text-base italic md:text-lg text-brandNavy/80 dark:text-white/80">
//                 "Excellence is not a destination; it is a continuous journey."
//               </span>
//             </div>
            
//             {/* Description */}
//             <p className="text-base font-medium text-brandNavy/70 dark:text-white/70">
//               We honor the legacy of Prabir Sen Gupta whose vision and mentorship laid the foundation for RiskMan.
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default TributeSection;