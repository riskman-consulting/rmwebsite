// // import { motion } from "framer-motion";
// // import clsx from "clsx";

// // const PHASES = [
// //   {
// //     step: "I",
// //     title: "Initiation",
// //     description:
// //       "We define project scope, secure leadership alignment, and identify key stakeholders and resources required for success.",
// //     gradient: "from-[#001F3F] to-[#FFC000]",
// //   },
// //   {
// //     step: "II",
// //     title: "Analysis",
// //     description:
// //       "Impact questionnaires and data analysis are used to rank critical systems based on Maximum Tolerable Downtime (MTD).",
// //     gradient: "from-[#002F5F] to-[#FFC000]",
// //   },
// //   {
// //     step: "III",
// //     title: "Recovery",
// //     description:
// //       "Business Recovery Plans are updated to restore facilities, supply chains, users, and enabling technologies.",
// //     gradient: "from-[#003F7F] to-[#FFC000]",
// //   },
// //   {
// //     step: "IV",
// //     title: "Strategy",
// //     description:
// //       "We model outage scenarios to define service recovery strategies and identify appropriate emergency locations.",
// //     gradient: "from-[#004F9F] to-[#FFC000]",
// //   },
// //   {
// //     step: "V",
// //     title: "Documentation",
// //     description:
// //       "Formal Business Resumption, IT Contingency, Cyber Incident, and Emergency Response plans are developed.",
// //     gradient: "from-[#005FBF] to-[#FFC000]",
// //   },
// //   {
// //     step: "VI",
// //     title: "Validation",
// //     description:
// //       "Walkthroughs, checklist testing, and full simulations are conducted to validate recovery effectiveness.",
// //     gradient: "from-[#006FDF] to-[#FFC000]",
// //   },
// //   {
// //     step: "VII",
// //     title: "Maintenance",
// //     description:
// //       "Ongoing monitoring, plan updates, and awareness training ensure long-term organizational readiness.",
// //     gradient: "from-[#007FFF] to-[#FFC000]",
// //   },
// // ];

// // const RiskManApproachSection = () => {
// //   return (
// //     <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark md:py-24">
// //       <div className="container mx-auto">

// //         {/* HEADER */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 24 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="max-w-4xl mx-auto mb-16 text-center"
// //         >
// //           <h2 className="text-3xl font-bold font-heading text-brandDark dark:text-white md:text-4xl lg:text-5xl">
// //             RiskMan’s Approach Towards{" "}
// //             <span className="text-brandPrimary dark:text-brandAccent">
// //               Delivering Excellence
// //             </span>
// //           </h2>

// //           <p className="max-w-3xl mx-auto mt-6 text-brandNavy/70 dark:text-brandLight/70">
// //             Our structured methodology ensures your business remains resilient
// //             through a comprehensive seven-phase lifecycle designed for maximum
// //             operational stability.
// //           </p>
// //         </motion.div>

// //         {/* STAIRCASE */}
// //         <div className="relative flex flex-col gap-8 mx-auto max-w-7xl lg:flex-row lg:gap-6">
// //           {PHASES.map((item, index) => {
// //             const desktopMargin = [
// //               "lg:mt-0",
// //               "lg:mt-[50px]",
// //               "lg:mt-[100px]",
// //               "lg:mt-[150px]",
// //               "lg:mt-[200px]",
// //               "lg:mt-[250px]",
// //               "lg:mt-[300px]",
// //             ][index];

// //             return (
// //               <motion.div
// //                 key={item.step}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.12, duration: 0.45 }}
// //                 className={clsx(
// //                   "relative flex-1 min-w-[260px] hover:z-30",
// //                   desktopMargin
// //                 )}
// //               >
// //                 <div className="relative flex items-start transition-transform duration-300 drop-shadow-xl group hover:-translate-y-2">

// //                   {/* CONTENT CARD */}
// //                   <div className="relative z-10 flex flex-col justify-center h-[190px] flex-1 rounded-xl bg-surfaceLight p-6 pr-14 border border-borderLight dark:bg-surfaceDark dark:border-borderDark">
// //                     <h3 className="mb-2 text-[10px] font-bold tracking-widest uppercase text-brandNavy/40 dark:text-brandLight/40">
// //                       Phase {item.step}
// //                     </h3>

// //                     <h4 className="mb-3 text-base font-bold leading-tight font-heading text-brandDark dark:text-white line-clamp-2">
// //                       {item.title}
// //                     </h4>

// //                     <p className="text-xs leading-relaxed text-brandNavy/65 dark:text-brandLight/60 line-clamp-3">
// //                       {item.description}
// //                     </p>
// //                   </div>

// //                   {/* ARROW RIBBON */}
// //                   <div
// //                     className={clsx(
// //                       "relative -ml-8 flex w-28 h-[150px] shrink-0 items-center justify-center text-white bg-gradient-to-br shadow-lg z-20",
// //                       item.gradient
// //                     )}
// //                     style={{
// //                       clipPath:
// //                         "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
// //                     }}
// //                   >
// //                     <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/20 to-transparent" />

// //                     <div className="flex flex-col items-center pr-4">
// //                       <span className="mb-1 text-[10px] font-bold uppercase tracking-widest opacity-80">
// //                         Phase
// //                       </span>
// //                       <span className="text-3xl font-bold tracking-tight">
// //                         {item.step}
// //                       </span>
// //                     </div>
// //                   </div>

// //                 </div>
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default RiskManApproachSection;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const phases = [
//   {
//     title: "Initiation",
//     desc: "We establish the project scope, secure management support, and identify stakeholders and required resources.",
//   },
//   {
//     title: "Analysis",
//     desc: "Impact questionnaires and structured analysis rank systems using Maximum Tolerable Downtime (MTD).",
//   },
//   {
//     title: "Recovery",
//     desc: "Business Recovery Plans restore facilities, supply chains, users, and supporting technologies.",
//   },
//   {
//     title: "Strategy",
//     desc: "Multiple outage scenarios are modeled to design service recovery strategies and fallback centers.",
//   },
//   {
//     title: "Documentation",
//     desc: "Formal Business Resumption, IT Contingency, Cyber Response, and Emergency plans are created.",
//   },
//   {
//     title: "Validation",
//     desc: "Walk-throughs, checklist testing, and simulations validate recovery effectiveness.",
//   },
//   {
//     title: "Maintenance",
//     desc: "Ongoing monitoring, reviews, and awareness training keep teams prepared.",
//   },
// ];

// const BCPMethodology = () => {
//   return (
//     <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container max-w-6xl">
 
//         {/* Header */}
//         <div className="max-w-3xl">
//           <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
 
//           <h2 className="text-3xl font-extrabold md:text-4xl text-brandDark dark:text-white">
//             RiskMan's 7-Phase BCP/DR Delivery Lifecycle
//           </h2>
 
//           <p className="mt-4 text-gray-600 dark:text-gray-300">
//             Our structured methodology ensures operational resilience through a
//             comprehensive lifecycle designed for measurable recovery readiness.
//           </p>
//         </div>
 
//         {/* Timeline */}
//         <div className="grid gap-8 mt-16 md:grid-cols-2">
//           {phases.map((p, i) => (
//             <div
//               key={p.title}
//               className="relative p-8 transition bg-white border shadow-sm dark:bg-brandNavy/30 border-borderLight dark:border-borderDark rounded-2xl hover:shadow-lg"
//             >
//               {/* Phase Number Badge */}
//               <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-white shadow -top-5 left-8 rounded-xl bg-brandPrimary">
//                 {i + 1}
//               </div>
 
//               <h3 className="mt-4 text-xl font-bold text-brandDark dark:text-white">
//                 Phase {i + 1}: {p.title}
//               </h3>
 
//               <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
//                 {p.desc}
//               </p>
//             </div>
//           ))}
//         </div>
 
//       </div>
//     </section>
//   );
// };
 
// export default BCPMethodology;



import React from "react";
import { motion } from "framer-motion";
import bcp_approach from "../../assets/images/bcp/bcp_approach.png";
 
const phases = [
  { title: "Initiation", desc: "Establish project scope, secure support, and identify stakeholders." },
  { title: "Analysis", desc: "Structured analysis ranking systems using Maximum Tolerable Downtime (MTD)." },
  { title: "Recovery", desc: "Plans to restore facilities, supply chains, users, and technologies." },
  { title: "Strategy", desc: "Model outage scenarios to design service recovery and fallback centers." },
  { title: "Documentation", desc: "Create Resumption, IT Contingency, Cyber Response, and Emergency plans." },
  { title: "Validation", desc: "Walk-throughs, checklist testing, and simulations validate effectiveness." },
  { title: "Maintenance", desc: "Ongoing monitoring, reviews, and awareness training for preparedness." },
];
 
const BCPMethodology = () => {
  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-bgDark">
      <div className="container">
 
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="h-1.5 w-16 bg-brandAccent mb-4 rounded-full" />
          <h2 className="text-3xl font-bold leading-tight md:text-5xl font-heading text-brandDark dark:text-white">
            7-Phase BCP/DR <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              Delivery Lifecycle
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-brandDark/70 dark:text-brandLight/60">
            Our structured methodology ensures operational resilience through a
            comprehensive lifecycle designed for measurable recovery readiness.
          </p>
        </div>
 
        {/* PHASE LIST — FULL WIDTH */}
       <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
  {phases.map((p, i) => (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="p-6 transition-all bg-white border shadow-sm group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent/50 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-start gap-5">
        {/* Step Number */}
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-black border rounded-xl bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border-brandPrimary/20 dark:border-brandAccent/20">
          {String(i + 1).padStart(2, "0")}
        </div>
 
        <div>
          <h3 className="text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brandDark/60 dark:text-brandLight/50">
            {p.desc}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
        {/* IMAGE — AFTER CONTENT */}
        <div className="max-w-5xl mt-14">
          <div className="relative group">
            <div className="absolute transition-opacity rounded-full opacity-50 -inset-4 bg-brandPrimary/10 blur-3xl group-hover:opacity-80" />
 
            <div className="relative p-2 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[2rem] shadow-2xl overflow-hidden">
             
              {/* Browser bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-borderLight dark:border-borderDark bg-slate-50 dark:bg-bgDark/30">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-brandAccent/40" />
                  <div className="w-2 h-2 rounded-full bg-brandAccent/70" />
                  <div className="w-2 h-2 rounded-full bg-brandAccent" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">
                  Methodology_Visual_Map
                </span>
              </div>
 
              <img
                src={bcp_approach}
                alt="BCP Methodology Approach"
                className="w-full h-auto rounded-b-xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default BCPMethodology;
 