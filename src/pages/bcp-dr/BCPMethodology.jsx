// import { motion } from "framer-motion";
// import clsx from "clsx";

// const PHASES = [
//   {
//     step: "I",
//     title: "Initiation",
//     description:
//       "We define project scope, secure leadership alignment, and identify key stakeholders and resources required for success.",
//     gradient: "from-[#001F3F] to-[#FFC000]",
//   },
//   {
//     step: "II",
//     title: "Analysis",
//     description:
//       "Impact questionnaires and data analysis are used to rank critical systems based on Maximum Tolerable Downtime (MTD).",
//     gradient: "from-[#002F5F] to-[#FFC000]",
//   },
//   {
//     step: "III",
//     title: "Recovery",
//     description:
//       "Business Recovery Plans are updated to restore facilities, supply chains, users, and enabling technologies.",
//     gradient: "from-[#003F7F] to-[#FFC000]",
//   },
//   {
//     step: "IV",
//     title: "Strategy",
//     description:
//       "We model outage scenarios to define service recovery strategies and identify appropriate emergency locations.",
//     gradient: "from-[#004F9F] to-[#FFC000]",
//   },
//   {
//     step: "V",
//     title: "Documentation",
//     description:
//       "Formal Business Resumption, IT Contingency, Cyber Incident, and Emergency Response plans are developed.",
//     gradient: "from-[#005FBF] to-[#FFC000]",
//   },
//   {
//     step: "VI",
//     title: "Validation",
//     description:
//       "Walkthroughs, checklist testing, and full simulations are conducted to validate recovery effectiveness.",
//     gradient: "from-[#006FDF] to-[#FFC000]",
//   },
//   {
//     step: "VII",
//     title: "Maintenance",
//     description:
//       "Ongoing monitoring, plan updates, and awareness training ensure long-term organizational readiness.",
//     gradient: "from-[#007FFF] to-[#FFC000]",
//   },
// ];

// const RiskManApproachSection = () => {
//   return (
//     <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark md:py-24">
//       <div className="container mx-auto">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto mb-16 text-center"
//         >
//           <h2 className="text-3xl font-bold font-heading text-brandDark dark:text-white md:text-4xl lg:text-5xl">
//             RiskMan’s Approach Towards{" "}
//             <span className="text-brandPrimary dark:text-brandAccent">
//               Delivering Excellence
//             </span>
//           </h2>

//           <p className="max-w-3xl mx-auto mt-6 text-brandNavy/70 dark:text-brandLight/70">
//             Our structured methodology ensures your business remains resilient
//             through a comprehensive seven-phase lifecycle designed for maximum
//             operational stability.
//           </p>
//         </motion.div>

//         {/* STAIRCASE */}
//         <div className="relative flex flex-col gap-8 mx-auto max-w-7xl lg:flex-row lg:gap-6">
//           {PHASES.map((item, index) => {
//             const desktopMargin = [
//               "lg:mt-0",
//               "lg:mt-[50px]",
//               "lg:mt-[100px]",
//               "lg:mt-[150px]",
//               "lg:mt-[200px]",
//               "lg:mt-[250px]",
//               "lg:mt-[300px]",
//             ][index];

//             return (
//               <motion.div
//                 key={item.step}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.12, duration: 0.45 }}
//                 className={clsx(
//                   "relative flex-1 min-w-[260px] hover:z-30",
//                   desktopMargin
//                 )}
//               >
//                 <div className="relative flex items-start transition-transform duration-300 drop-shadow-xl group hover:-translate-y-2">

//                   {/* CONTENT CARD */}
//                   <div className="relative z-10 flex flex-col justify-center h-[190px] flex-1 rounded-xl bg-surfaceLight p-6 pr-14 border border-borderLight dark:bg-surfaceDark dark:border-borderDark">
//                     <h3 className="mb-2 text-[10px] font-bold tracking-widest uppercase text-brandNavy/40 dark:text-brandLight/40">
//                       Phase {item.step}
//                     </h3>

//                     <h4 className="mb-3 text-base font-bold leading-tight font-heading text-brandDark dark:text-white line-clamp-2">
//                       {item.title}
//                     </h4>

//                     <p className="text-xs leading-relaxed text-brandNavy/65 dark:text-brandLight/60 line-clamp-3">
//                       {item.description}
//                     </p>
//                   </div>

//                   {/* ARROW RIBBON */}
//                   <div
//                     className={clsx(
//                       "relative -ml-8 flex w-28 h-[150px] shrink-0 items-center justify-center text-white bg-gradient-to-br shadow-lg z-20",
//                       item.gradient
//                     )}
//                     style={{
//                       clipPath:
//                         "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
//                     }}
//                   >
//                     <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent" />

//                     <div className="flex flex-col items-center pr-4">
//                       <span className="mb-1 text-[10px] font-bold uppercase tracking-widest opacity-80">
//                         Phase
//                       </span>
//                       <span className="text-3xl font-bold tracking-tight">
//                         {item.step}
//                       </span>
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RiskManApproachSection;

import React, { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    title: "Initiation",
    desc: "We establish the project scope, secure management support, and identify stakeholders and required resources.",
  },
  {
    title: "Analysis",
    desc: "Impact questionnaires and structured analysis rank systems using Maximum Tolerable Downtime (MTD).",
  },
  {
    title: "Recovery",
    desc: "Business Recovery Plans restore facilities, supply chains, users, and supporting technologies.",
  },
  {
    title: "Strategy",
    desc: "Multiple outage scenarios are modeled to design service recovery strategies and fallback centers.",
  },
  {
    title: "Documentation",
    desc: "Formal Business Resumption, IT Contingency, Cyber Response, and Emergency plans are created.",
  },
  {
    title: "Validation",
    desc: "Walk-throughs, checklist testing, and simulations validate recovery effectiveness.",
  },
  {
    title: "Maintenance",
    desc: "Ongoing monitoring, reviews, and awareness training keep teams prepared.",
  },
];

const BCPMethodology = () => {
  return (
    <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl">
 
        {/* Header */}
        <div className="max-w-3xl">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
 
          <h2 className="text-3xl font-extrabold md:text-4xl text-brandDark dark:text-white">
            RiskMan's 7-Phase BCP/DR Delivery Lifecycle
          </h2>
 
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our structured methodology ensures operational resilience through a
            comprehensive lifecycle designed for measurable recovery readiness.
          </p>
        </div>
 
        {/* Timeline */}
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {phases.map((p, i) => (
            <div
              key={p.title}
              className="relative p-8 transition bg-white border shadow-sm dark:bg-brandNavy/30 border-borderLight dark:border-borderDark rounded-2xl hover:shadow-lg"
            >
              {/* Phase Number Badge */}
              <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-white shadow -top-5 left-8 rounded-xl bg-brandPrimary">
                {i + 1}
              </div>
 
              <h3 className="mt-4 text-xl font-bold text-brandDark dark:text-white">
                Phase {i + 1}: {p.title}
              </h3>
 
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default BCPMethodology;
 
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our structured methodology ensures operational resilience through a
            comprehensive lifecycle designed for measurable recovery readiness.
          </p>
        </div>
 
        {/* SPLIT-PANE CONTAINER */}
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* LEFT PANE - STEP LIST */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-3">
              {PHASES.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                    activeStep === index
                      ? "bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg"
                      : "bg-white dark:bg-surfaceDark hover:bg-brandPrimary/5 dark:hover:bg-surfaceDark/80 text-brandDark dark:text-white border border-borderLight dark:border-borderDark"
                  }`}
                >
                  {/* STEP NUMBER */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold shrink-0 ${
                    activeStep === index
                      ? "bg-brandDark text-brandAccent"
                      : "bg-brandPrimary/10 dark:bg-brandPrimary/30 text-brandPrimary"
                  }`}>
                    {phase.step}
                  </div>

                  {/* STEP TITLE */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm line-clamp-2 group-hover:underline">
                      {phase.title}
                    </h4>
                  </div>

                  {/* INDICATOR */}
                  {activeStep === index && (
                    <div className="w-2 h-8 bg-brandDark dark:bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANE - CONTENT DISPLAY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-8">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-gradient-to-br from-white to-brandLight/30 dark:from-surfaceDark dark:to-surfaceDark/80 border border-white/50 dark:border-white/10 p-10 shadow-xl overflow-hidden"
              >
                {/* DECORATIVE TOP BAR */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold" />

                {/* LARGE STEP BADGE */}
                <div className="mb-8 flex items-start gap-6">
                  <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-brandAccent to-brandGold shadow-lg shrink-0">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-brandDark/60 uppercase tracking-wide">Phase</div>
                      <div className="text-4xl font-bold text-brandDark">{active.numeral}</div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-brandDark dark:text-white mb-2">
                      {active.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{active.icon}</span>
                      <p className="text-sm font-medium text-brandAccent uppercase tracking-wider">
                        Step {active.step} of {PHASES.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="h-0.5 w-12 bg-gradient-to-r from-brandAccent to-transparent mb-8 rounded-full" />

                {/* DESCRIPTION */}
                <p className="text-lg leading-relaxed text-brandDark/80 dark:text-brandLight/80 mb-8">
                  {active.description}
                </p>

                {/* PROGRESS INDICATOR */}
                <div className="mt-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brandAccent">Progress</span>
                  </div>
                  <div className="w-full h-2 bg-brandPrimary/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((activeStep + 1) / PHASES.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-brandAccent to-brandGold"
                    />
                  </div>
                  <p className="text-xs text-brandDark/60 dark:text-white/60 mt-2">
                    {activeStep + 1} of {PHASES.length} phases
                  </p>
                </div>

                {/* NAVIGATION BUTTONS */}
                <div className="flex gap-4 mt-10">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border border-brandPrimary/30 hover:border-brandPrimary text-brandPrimary hover:bg-brandPrimary/5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(PHASES.length - 1, activeStep + 1))}
                    disabled={activeStep === PHASES.length - 1}
                    className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
 
      </div>
    </section>
  );
};
 
export default BCPMethodology;
 
 