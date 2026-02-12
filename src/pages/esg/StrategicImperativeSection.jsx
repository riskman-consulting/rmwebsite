// import React from "react";


// const StrategicImperative = () => {
//   const steps = [
//     {
//       step: "01",
//       title: "Compliance & Risk Era",
//       description:
//         "Historically, ESG was viewed primarily through the lens of regulatory compliance and basic risk mitigation to protect existing value.",
//       accent: "bg-brandPrimary/10 text-brandPrimary dark:bg-brandGold/10 dark:text-brandGold",
//     },
//     {
//       step: "02",
//       title: "Strategic Integration",
//       description:
//         "Organizations then transitioned to integrating ESG into core business operations to drive efficiency and meet stakeholder expectations.",
//       accent: "bg-brandNavy/10 text-brandNavy dark:bg-brandAccent/10 dark:text-brandAccent",
//     },
//     {
//       step: "03",
//       title: "Value Creation Paradigm",
//       description:
//         "Today's leading organizations view ESG as a driver of innovation, market differentiation, and sustainable competitive advantage.",
//       accent: "bg-brandPrimary text-white shadow-lg shadow-brandPrimary/20",
//     },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
//       {/* Ambient Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-24 -right-32 h-96 w-96 rounded-full bg-brandPrimary/5 blur-[120px]" />
//         <div className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-brandGold/5 blur-[120px]" />
//         <div 
//           className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
//           style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, #001F3F 1px, transparent 0)',
//             backgroundSize: '32px 32px'
//           }}
//         />
//       </div>

//       <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12">
//         {/* Section Header */}
//         <div className="max-w-4xl mx-auto mb-20 text-center">
//           <div className="inline-block px-4 py-1.5 mb-6 border rounded-full bg-brandPrimary/5 border-brandPrimary/10 dark:border-brandGold/20">
//             <span className="text-xs font-bold tracking-[0.3em] uppercase text-brandPrimary dark:text-brandGold">
//               Strategic Imperative
//             </span>
//           </div>
//           <h2 className="mb-8 text-4xl font-black leading-tight font-heading md:text-5xl lg:text-6xl text-brandDark dark:text-white">
//             Sustainability & ESG: <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandGold dark:to-brandAccent">
//               The Strategic Imperative
//             </span>
//           </h2>
//           <p className="max-w-3xl mx-auto font-sans text-lg leading-relaxed md:text-xl text-brandDark/70 dark:text-surfaceLight/70">
//             ESG has evolved from a discretionary "nice-to-have" or a pure compliance exercise 
//             into a fundamental pillar of modern corporate strategy and long-term enterprise value.
//           </p>
//         </div>

//         {/* Evolution Timeline Cards */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid gap-8 md:grid-cols-3">
//             {steps.map((card) => (
//               <div
//                 key={card.step}
//                 className="group relative p-8 transition-all duration-500 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-[32px] hover:shadow-2xl hover:border-brandPrimary/30 dark:hover:border-brandGold/30"
//               >
//                 {/* Connector Line (Desktop Only) */}
//                 {card.step !== "03" && (
//                   <div className="absolute z-0 hidden w-8 h-px lg:block top-1/2 -right-4 bg-gradient-to-r from-borderLight to-transparent dark:from-borderDark" />
//                 )}

//                 <div className="relative z-10">
//                   <div
//                     className={`flex h-14 w-14 mb-8 items-center justify-center rounded-2xl text-lg font-black tracking-tighter transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${card.accent}`}
//                   >
//                     {card.step}
//                   </div>
                  
//                   <h4 className="mb-4 text-2xl font-bold leading-tight font-heading text-brandDark dark:text-white">
//                     {card.title}
//                   </h4>
                  
//                   <p className="text-base leading-relaxed text-brandDark/60 dark:text-surfaceLight/60">
//                     {card.description}
//                   </p>
//                 </div>

//                 {/* Hover Glow Effect */}
//                 <div className="absolute inset-0 transition-opacity opacity-0 rounded-[32px] bg-gradient-to-br from-brandPrimary/5 to-transparent group-hover:opacity-100" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Callout */}
//         {/* <div className="mt-20 p-10 bg-brandDark rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative group">
//           <div className="absolute top-0 right-0 w-64 h-64 transition-transform duration-700 translate-x-1/2 -translate-y-1/2 rounded-full bg-brandGold/10 blur-3xl group-hover:scale-125" />
          
//           <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
//             <div className="md:w-2/3">
//               <h3 className="mb-4 text-2xl font-bold text-white">Ready to move beyond compliance?</h3>
//               <p className="leading-relaxed text-white/70">
//                 RiskMan helps organizations navigate this evolution, identifying unique 
//                 value creation opportunities specific to your industry and operational context.
//               </p>
//             </div>
//             <button className="px-8 py-4 font-bold transition-all duration-300 transform rounded-full shadow-xl whitespace-nowrap bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 active:scale-95 shadow-brandAccent/20">
//               Get Started
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default StrategicImperative;