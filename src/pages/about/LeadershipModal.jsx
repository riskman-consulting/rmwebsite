// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Linkedin, MapPin } from "lucide-react";

// /* =========================
//    Leadership Modal Component
// ========================= */
// export function LeadershipModal({ leader, onClose }) {
//   if (!leader) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//         {/* Overlay - click to close */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="absolute inset-0"
//         />

//         {/* Modal Container */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 20 }}
//           transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-surfaceDark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
//         >
//           {/* Header - Fixed */}
//           <div className="relative flex-shrink-0 p-6 border-b bg-gradient-to-r from-brandPrimary/5 to-brandGold/5 dark:from-brandPrimary/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark">
//             <div className="flex items-start justify-between gap-4">
//               {/* Leader Info */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={leader.image}
//                   alt={leader.name}
//                   className="object-cover object-top w-20 h-20 border-4 rounded-full border-brandGold/30"
//                 />
//                 <div>
//                   <h2 className="mb-1 text-2xl font-bold md:text-3xl text-brandDark dark:text-white">
//                     {leader.name}
//                   </h2>
//                   <p className="mb-2 text-sm font-semibold md:text-base text-brandPrimary dark:text-brandAccent">
//                     {leader.title}
//                   </p>
//                   {leader.location && (
//                     <div className="flex items-center gap-1.5 text-xs md:text-sm text-brandDark/60 dark:text-white/50">
//                       <MapPin className="w-4 h-4" />
//                       {leader.location}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="flex-shrink-0 p-2 transition-colors rounded-full hover:bg-brandDark/10 dark:hover:bg-white/10"
//                 aria-label="Close modal"
//               >
//                 <X className="w-6 h-6 text-brandDark dark:text-white" />
//               </button>
//             </div>

//             {/* LinkedIn Link */}
//             {leader.linkedin && (
//               <div className="mt-4">
//                 <a
//                   href={leader.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent dark:border-brandAccent/30 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
//                 >
//                   <Linkedin className="w-4 h-4" />
//                   Connect on LinkedIn
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Scrollable Content Area */}
//           <div className="flex-1 p-6 md:p-8 scrollbar-thin scrollbar-thumb-brandGold/20 overflow-y-auto scrollbar-hide max-h-[calc(90vh-180px)] scrollbar-track-transparent">
//             {leader.richBio}
//           </div>

//           {/* Footer - Optional */}
//           {/* <div className="flex-shrink-0 p-4 border-t bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark">
//             <button
//               onClick={onClose}
//               className="w-full px-6 py-2.5 text-sm font-medium transition-colors rounded-full bg-brandGold/10 text-brandDark dark:text-white hover:bg-brandGold/20"
//             >
//               Close
//             </button>
//           </div> */}
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// }


// export default LeadershipModal



// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Linkedin, MapPin } from "lucide-react";

// /* =========================
//    Leadership Modal Component
// ========================= */
// export function LeadershipModal({ leader, onClose }) {
//   if (!leader) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//         {/* Overlay - click to close */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="absolute inset-0"
//         />

//         {/* Modal Container */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 20 }}
//           transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//           className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-surfaceDark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
//         >
//           {/* Header - Fixed */}
//           <div className="relative flex-shrink-0 p-6 border-b bg-gradient-to-r from-brandPrimary/5 to-brandGold/5 dark:from-brandPrimary/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark">
//             <div className="flex items-start justify-between gap-4">
//               {/* Leader Info */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={leader.image}
//                   alt={leader.name}
//                   className="object-cover object-top w-20 h-20 border-4 rounded-full border-brandGold/30"
//                 />
//                 <div>
//                   <h2 className="mb-1 text-2xl font-bold md:text-3xl text-brandDark dark:text-white">
//                     {leader.name}
//                   </h2>
//                   <p className="mb-2 text-sm font-semibold md:text-base text-brandPrimary dark:text-brandAccent">
//                     {leader.title}
//                   </p>
//                   {leader.location && (
//                     <div className="flex items-center gap-1.5 text-xs md:text-sm text-brandDark/60 dark:text-white/50">
//                       <MapPin className="w-4 h-4" />
//                       {leader.location}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="flex-shrink-0 p-2 transition-colors rounded-full hover:bg-brandDark/10 dark:hover:bg-white/10"
//                 aria-label="Close modal"
//               >
//                 <X className="w-6 h-6 text-brandDark dark:text-white" />
//               </button>
//             </div>

//             {/* LinkedIn Link */}
//             {leader.linkedin && (
//               <div className="mt-4">
//                 <a
//                   href={leader.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent dark:border-brandAccent/30 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
//                 >
//                   <Linkedin className="w-4 h-4" />
//                   Connect on LinkedIn
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Scrollable Content Area - 2 Column Grid */}
//           <div className="flex-1 p-6 md:p-8 scrollbar-thin scrollbar-thumb-brandGold/20 overflow-y-auto scrollbar-hide max-h-[calc(90vh-180px)] scrollbar-track-transparent">
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               {leader.richBio}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// }


// export default LeadershipModal



import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MapPin, BadgeCheck } from "lucide-react";

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
          <div className="flex-1 p-6 md:p-8 scrollbar-thin scrollbar-thumb-brandGold/20 overflow-y-auto scrollbar-hide max-h-[calc(90vh-180px)] scrollbar-track-transparent">

            {/* If richBio exists (Leadership leaders), render it as before */}
            {leader.richBio ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {leader.richBio}
              </div>
            ) : (
              /* Fallback for Service Leaders who have credentials, bio, expertise */
              <div className="flex flex-col gap-6">

                {/* Credentials */}
                {leader.credentials && (
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 shrink-0 w-5 h-5 text-brandPrimary dark:text-brandAccent" />
                      <div>
                        <h3 className="mb-1 text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                          Credentials
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          {leader.credentials}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bio */}
                {leader.bio && (
                  <div>
                    <h3 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                      About
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {leader.bio}
                    </p>
                  </div>
                )}

                {/* Expertise */}
                {leader.expertise && leader.expertise.length > 0 && (
                  <div>
                    <h3 className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-xs font-medium rounded-full text-brandPrimary bg-brandPrimary/10 dark:text-brandAccent dark:bg-brandAccent/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default LeadershipModal;