// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Linkedin } from "lucide-react";

// /* =========================
//    Framer Motion Variants
// ========================= */
// const backdrop = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const modal = {
//   hidden: { opacity: 0, y: 40, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
//   },
//   exit: {
//     opacity: 0,
//     y: 40,
//     scale: 0.96,
//     transition: { duration: 0.25 },
//   },
// };

// /* =========================
//    Leadership Modal
// ========================= */
// export default function LeadershipModal({ leader, onClose }) {
//   useEffect(() => {
//     if (!leader) return;

//     const onEsc = (e) => e.key === "Escape" && onClose();
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onEsc);

//     return () => {
//       document.body.style.overflow = "auto";
//       window.removeEventListener("keydown", onEsc);
//     };
//   }, [leader, onClose]);

//   return (
//     <AnimatePresence>
//       {leader && (
//         <motion.div
//           variants={backdrop}
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             variants={modal}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             onClick={(e) => e.stopPropagation()}
//             className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl"
//           >
//             {/* =========================
//                HEADER (STICKY)
//             ========================= */}
//             <div className="sticky top-0 z-10 border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//               <button
//                 onClick={onClose}
//                 className="absolute p-2 rounded-full top-5 right-5 hover:bg-black/5 dark:hover:bg-white/10"
//               >
//                 <X className="w-5 h-5 text-brandDark dark:text-brandAccent" />
//               </button>

//               <div className="flex p-8">
//                 <div className="flex flex-col gap-6 md:flex-row md:items-center">
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="object-cover object-top w-32 h-32 border-4 rounded-full border-brandPrimary/30"
//                   />
//                   <div>
//                     <h2 className="text-3xl font-bold text-brandDark dark:text-white">
//                       {leader.name}
//                     </h2>
//                     <p className="font-semibold text-brandPrimary dark:text-brandAccent">
//                       {leader.title}
//                     </p>

//                     {leader.linkedin && (
//                       <a
//                         href={leader.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 mt-3 text-sm text-brandPrimary dark:text-white/70 hover:underline"
//                       >
//                         <Linkedin className="w-4 h-4" />
//                         View LinkedIn
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* =========================
//                BODY (SCROLLABLE)
//             ========================= */}
//             <div className="p-8 space-y-6 overflow-y-auto scrollbar-hide max-h-[calc(90vh-180px)]">
//               {leader.richBio ? (
//                 leader.richBio
//               ) : (
//                 <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
//                   {leader.fullBio || leader.bio}
//                 </p>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MapPin } from "lucide-react";

/* =========================
   Leadership Modal Component
========================= */
export function LeadershipModal({ leader, onClose }) {
  if (!leader) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        {/* Overlay - click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-surfaceDark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header - Fixed */}
          <div className="relative flex-shrink-0 p-6 border-b bg-gradient-to-r from-brandPrimary/5 to-brandGold/5 dark:from-brandPrimary/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark">
            <div className="flex items-start justify-between gap-4">
              {/* Leader Info */}
              <div className="flex items-center gap-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="object-cover object-top w-20 h-20 border-4 rounded-full border-brandGold/30"
                />
                <div>
                  <h2 className="mb-1 text-2xl font-bold md:text-3xl text-brandDark dark:text-white">
                    {leader.name}
                  </h2>
                  <p className="mb-2 text-sm font-semibold md:text-base text-brandPrimary dark:text-brandAccent">
                    {leader.title}
                  </p>
                  {leader.location && (
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-brandDark/60 dark:text-white/50">
                      <MapPin className="w-4 h-4" />
                      {leader.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 transition-colors rounded-full hover:bg-brandDark/10 dark:hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-brandDark dark:text-white" />
              </button>
            </div>

            {/* LinkedIn Link */}
            {leader.linkedin && (
              <div className="mt-4">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent dark:border-brandAccent/30 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 p-6 overflow-y-auto md:p-8 scrollbar-thin scrollbar-thumb-brandGold/20 scrollbar-track-transparent">
            {leader.richBio}
          </div>

          {/* Footer - Optional */}
          <div className="flex-shrink-0 p-4 border-t bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark">
            <button
              onClick={onClose}
              className="w-full px-6 py-2.5 text-sm font-medium transition-colors rounded-full bg-brandGold/10 text-brandDark dark:text-white hover:bg-brandGold/20"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


export default LeadershipModal