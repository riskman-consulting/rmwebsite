// import React from 'react';

// const ESGEvolutionTimeline = () => {
//   const timelineData = [
//     {
//       period: "2000 - 2010",
//       phase: "COMPLIANCE",
//       icon: "📋",
//       color: "from-brandNavy to-brandPrimary",
//       glowColor: "shadow-brandNavy/20",
//       features: [
//         "Regulatory focus",
//         "Risk mitigation",
//         "Reporting burden"
//       ]
//     },
//     {
//       period: "2010 - 2020",
//       phase: "STRATEGY",
//       icon: "📈",
//       color: "from-brandPrimary to-brandNavy",
//       glowColor: "shadow-brandPrimary/20",
//       features: [
//         "Business integration",
//         "Stakeholder value",
//         "Efficiency gains"
//       ]
//     },
//     {
//       period: "2020+",
//       phase: "VALUE CREATION",
//       icon: "🚀",
//       color: "from-brandAccent to-brandGold",
//       glowColor: "shadow-brandAccent/20",
//       features: [
//         "Competitive advantage",
//         "Innovation driver",
//         "Enterprise value"
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h3 className="mb-4 text-4xl font-black font-heading text-brandDark dark:text-surfaceLight">
//             ESG Evolution Timeline
//           </h3>
//           <p className="max-w-2xl mx-auto font-sans text-lg text-brandDark/70 dark:text-surfaceLight/70">
//             The three distinct phases of ESG evolution, moving from a necessity of compliance to a powerful driver of enterprise value.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="mx-auto max-w-7xl">
//           {/* Desktop Timeline */}
//           <div className="relative hidden gap-6 md:grid md:grid-cols-3">
//             {timelineData.map((item, index) => (
//               <div key={index} className="relative group">
//                 {/* Connecting Line to next card */}
//                 {index < timelineData.length - 1 && (
//                   <div className={`absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r ${item.color} opacity-30 dark:opacity-50 hidden lg:block z-0`} />
//                 )}

//                 {/* Card Container */}
//                 <div className="relative z-10 h-full p-6 transition-all duration-500 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 group-hover:border-brandAccent/50">
                  
//                   {/* Icon Node */}
//                   <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
//                     <span className="text-3xl">{item.icon}</span>
//                   </div>

//                   {/* Period Label */}
//                   <div className="mb-2 text-xs font-bold tracking-[2px] uppercase text-brandPrimary dark:text-brandAccent">
//                     {item.period}
//                   </div>

//                   {/* Phase Title */}
//                   <h4 className="pr-12 mb-6 text-2xl font-black font-heading text-brandDark dark:text-surfaceLight">
//                     {item.phase}
//                   </h4>

//                   {/* Features List */}
//                   <ul className="space-y-3">
//                     {item.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-sm font-medium text-brandDark/80 dark:text-surfaceLight/80">
//                         <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         <span className="leading-relaxed">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Timeline */}
//           <div className="px-4 space-y-8 md:hidden">
//             {timelineData.map((item, index) => (
//               <div key={index} className="relative">
//                 {/* Vertical Connecting Line */}
//                 {index < timelineData.length - 1 && (
//                   <div className={`absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b ${item.color} opacity-40`} />
//                 )}

//                 <div className="relative p-6 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl">
//                   <div className={`absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-surfaceDark`}>
//                     <span className="text-2xl">{item.icon}</span>
//                   </div>

//                   <div className="mb-1 text-xs font-bold tracking-widest text-brandPrimary dark:text-brandAccent">
//                     {item.period}
//                   </div>
//                   <h4 className="mb-4 text-xl font-black uppercase font-heading text-brandDark dark:text-surfaceLight">
//                     {item.phase}
//                   </h4>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3 text-sm text-brandDark/70 dark:text-surfaceLight/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ESGEvolutionTimeline;



// import React from 'react';

// const ESGEvolutionTimeline = () => {
//   const timelineData = [
//     {
//       period: "2000 - 2010",
//       phase: "COMPLIANCE",
//       icon: "📋",
//       color: "bg-brandNavy",
//       features: [
//         "Regulatory focus",
//         "Risk mitigation",
//         "Reporting burden"
//       ]
//     },
//     {
//       period: "2010 - 2020",
//       phase: "STRATEGY",
//       icon: "📈",
//       color: "bg-brandPrimary",
//       features: [
//         "Business integration",
//         "Stakeholder value",
//         "Efficiency gains"
//       ]
//     },
//     {
//       period: "2020+",
//       phase: "VALUE CREATION",
//       icon: "🚀",
//       color: "bg-yellow-500",
//       features: [
//         "Competitive advantage",
//         "Innovation driver",
//         "Enterprise value"
//       ]
//     }
//   ];

//   return (
//     <section className="py-20 overflow-hidden bg-gray-50 dark:bg-bgDark">
//       <div className="container px-4 mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mb-20 text-center">
//           <h3 className="mb-4 text-4xl font-black font-heading text-brandDark dark:text-surfaceLight">
//             ESG Evolution Timeline
//           </h3>
//           <p className="max-w-2xl mx-auto font-sans text-lg text-gray-600 dark:text-surfaceLight/70">
//             The three distinct phases of ESG evolution, moving from a necessity of compliance to a powerful driver of enterprise value.
//           </p>
//         </div>

//         {/* Desktop Timeline */}
//         <div className="relative hidden pt-8 pb-16 lg:block">
//           {/* Main Container */}
//           <div className="relative" style={{ height: '550px', minHeight: '550px' }}>
            
//             {/* Widening Road - SVG */}
//             <svg 
//               className="absolute left-0 w-full" 
//               style={{ height: '200px', bottom: '0' }}
//               viewBox="0 0 1400 200" 
//               preserveAspectRatio="none"
//             >
//               {/* Gray Road that widens */}
//               <path
//                 d="M 0,150 L 0,180 L 1400,80 L 1400,20 Z"
//                 fill="#a1a1aa"
//                 opacity="0.85"
//                 className="dark:opacity-70"
//               />
              
//               {/* White dashed center line */}
//               <path
//                 d="M 0,165 L 1400,50"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="3"
//                 strokeDasharray="30,20"
//                 opacity="0.9"
//               />
//             </svg>

//             {/* Content Boxes & Dots */}
//             <div className="relative h-full">
              
//               {/* First Item - Left */}
//               <div className="absolute" style={{ left: '8%', bottom: '160px' }}>
//                 {/* Content Box */}
//                 <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <div className="mb-2 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
//                         {timelineData[0].period}
//                       </div>
//                       <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
//                         {timelineData[0].phase}
//                       </h4>
//                     </div>
//                     <div className={`${timelineData[0].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
//                       {timelineData[0].icon}
//                     </div>
//                   </div>
//                   <ul className="space-y-2.5">
//                     {timelineData[0].features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
//                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   {/* Arrow pointing down */}
//                   <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
//                 </div>

//                 {/* Dot on Road */}
//                 <div className="relative flex flex-col items-center">
//                   <div className={`${timelineData[0].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                   <div className="mt-3 text-xs font-bold text-gray-400">STEP 1</div>
//                 </div>
//               </div>

//               {/* Second Item - Middle */}
//               <div className="absolute" style={{ left: '42%', bottom: '130px' }}>
//                 {/* Content Box */}
//                 <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <div className="mb-2 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
//                         {timelineData[1].period}
//                       </div>
//                       <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
//                         {timelineData[1].phase}
//                       </h4>
//                     </div>
//                     <div className={`${timelineData[1].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
//                       {timelineData[1].icon}
//                     </div>
//                   </div>
//                   <ul className="space-y-2.5">
//                     {timelineData[1].features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
//                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
//                 </div>

//                 {/* Dot on Road */}
//                 <div className="relative flex flex-col items-center">
//                   <div className={`${timelineData[1].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                   <div className="mt-3 text-xs font-bold text-gray-400">STEP 2</div>
//                 </div>
//               </div>

//               {/* Third Item - Right */}
//               <div className="absolute" style={{ left: '76%', bottom: '100px' }}>
//                 {/* Content Box */}
//                 <div className="p-6 mb-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl dark:bg-surfaceDark rounded-2xl w-80 hover:-translate-y-2 dark:border-gray-700">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <div className="mb-2 text-xs font-bold tracking-widest text-yellow-600 dark:text-yellow-500">
//                         {timelineData[2].period}
//                       </div>
//                       <h4 className="text-2xl font-black leading-tight text-brandDark dark:text-surfaceLight">
//                         {timelineData[2].phase}
//                       </h4>
//                     </div>
//                     <div className={`${timelineData[2].color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
//                       {timelineData[2].icon}
//                     </div>
//                   </div>
//                   <ul className="space-y-2.5">
//                     {timelineData[2].features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-surfaceLight/80">
//                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-100 -bottom-3 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
//                 </div>

//                 {/* Dot on Road */}
//                 <div className="relative flex flex-col items-center">
//                   <div className={`${timelineData[2].color} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10`}>
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                   <div className="mt-3 text-xs font-bold text-gray-400">STEP 3</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tablet Timeline (md to lg) */}
//         <div className="hidden md:block lg:hidden">
//           <div className="relative" style={{ height: '600px' }}>
//             {/* Road */}
//             <svg 
//               className="absolute bottom-0 left-0 w-full" 
//               style={{ height: '180px' }}
//               viewBox="0 0 1000 180" 
//               preserveAspectRatio="none"
//             >
//               <path d="M 0,130 L 0,160 L 1000,70 L 1000,20 Z" fill="#9ca3af" opacity="0.8" />
//               <path d="M 0,145 L 1000,45" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20,15" opacity="0.9" />
//             </svg>

//             <div className="relative h-full">
//               {[0, 1, 2].map((index) => (
//                 <div 
//                   key={index}
//                   className="absolute" 
//                   style={{ 
//                     left: index === 0 ? '10%' : index === 1 ? '42%' : '74%',
//                     bottom: index === 0 ? '140px' : index === 1 ? '120px' : '100px'
//                   }}
//                 >
//                   <div className="w-64 p-5 mb-5 bg-white shadow-xl dark:bg-surfaceDark rounded-xl">
//                     <div className="flex items-start justify-between mb-3">
//                       <div>
//                         <div className="mb-1 text-xs font-bold tracking-wider text-brandPrimary dark:text-brandAccent">
//                           {timelineData[index].period}
//                         </div>
//                         <h4 className="text-xl font-black text-brandDark dark:text-surfaceLight">
//                           {timelineData[index].phase}
//                         </h4>
//                       </div>
//                       <div className={`${timelineData[index].color} w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg`}>
//                         {timelineData[index].icon}
//                       </div>
//                     </div>
//                     <ul className="space-y-1.5">
//                       {timelineData[index].features.map((feature, idx) => (
//                         <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-surfaceLight/80">
//                           <div className="flex-shrink-0 w-1 h-1 bg-yellow-500 rounded-full" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 bg-white border-b border-r border-gray-200 -bottom-2 left-1/2 dark:bg-surfaceDark dark:border-gray-700"></div>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div className={`${timelineData[index].color} w-14 h-14 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg`}>
//                       <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
//                     </div>
//                     <div className="mt-1 text-xs font-bold text-gray-400">STEP {index + 1}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Timeline */}
//         <div className="relative px-4 md:hidden">
//           <div className="relative max-w-sm mx-auto">
//             {/* Vertical Road */}
//             <div className="absolute w-20 h-full transform -translate-x-1/2 bg-gray-400 opacity-50 left-1/2 dark:bg-gray-700"></div>
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-white"></div>

//             {/* Timeline Items */}
//             <div className="relative pt-8 pb-8 space-y-20">
//               {timelineData.map((item, index) => (
//                 <div key={index} className="relative">
//                   <div className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
//                     <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-surfaceDark`}>
//                       <span className="text-xl">{item.icon}</span>
//                     </div>
//                   </div>

//                   <div className="pt-10">
//                     <div className="relative p-5 bg-white border border-gray-200 shadow-lg dark:bg-surfaceDark dark:border-borderDark rounded-xl">
//                       <div className="mb-2 text-xs font-bold tracking-wider text-brandPrimary dark:text-brandAccent">
//                         {item.period}
//                       </div>
//                       <h4 className="mb-3 text-lg font-black font-heading text-brandDark dark:text-surfaceLight">
//                         {item.phase}
//                       </h4>
//                       <ul className="space-y-2">
//                         {item.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-surfaceLight/70">
//                             <div className="w-1 h-1 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0" />
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <div className="absolute mt-2 text-xs font-bold text-gray-400 transform -translate-x-1/2 left-1/2">
//                     STEP {index + 1}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ESGEvolutionTimeline;


import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Rocket, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

const ESGEvolutionTimeline = () => {
    const timelineData = [
        {
            period: "2000 - 2010",
            phase: "COMPLIANCE",
            icon: ShieldCheck, // Changed to Shield for Compliance/Risk
            features: [
                "Meets mandatory ESG regulations",
                "Reduces regulatory risk exposure",
                "Streamlines reporting burden"
            ],
            idealFor: "Ideal for early-stage ESG programs",
            // Neutral / Blue-Grey
            colorClass: "text-slate-600 dark:text-slate-400",
            bgClass: "bg-slate-100 dark:bg-slate-800",
            borderClass: "border-slate-300 dark:border-slate-700",
            shadowClass: "shadow-slate-200/50 dark:shadow-slate-900/50",
            iconBgClass: "bg-slate-200 dark:bg-slate-700",
            timelineDotClass: "bg-slate-400 dark:bg-slate-600"
        },
        {
            period: "2010 - 2020",
            phase: "STRATEGY",
            icon: BarChart3, // Changed to BarChart for Strategy/Growth
            features: [
                "Integrates ESG into business core",
                "Reduces operational ESG cost",
                "Enhances stakeholder value"
            ],
            idealFor: "For scaling organizations",
            // Growth Blue / Teal
            colorClass: "text-brandPrimary dark:text-blue-400",
            bgClass: "bg-blue-50 dark:bg-blue-900/30",
            borderClass: "border-brandPrimary/30 dark:border-blue-500/30",
            shadowClass: "shadow-brandPrimary/20 dark:shadow-blue-900/30",
            iconBgClass: "bg-blue-100 dark:bg-blue-800",
            timelineDotClass: "bg-brandPrimary dark:bg-blue-500"
        },
        {
            period: "2020+",
            phase: "VALUE CREATION",
            icon: Rocket,
            features: [
                "Delivers competitive advantage",
                "Drives continuous innovation",
                "Direct EBITDA and valuation impact"
            ],
            idealFor: "For ESG-led enterprises",
            // Accent / Gold
            colorClass: "text-brandAccent dark:text-amber-400",
            bgClass: "bg-amber-50 dark:bg-amber-900/20",
            borderClass: "border-brandAccent/30 dark:border-amber-500/30",
            shadowClass: "shadow-brandAccent/20 dark:shadow-amber-900/30",
            iconBgClass: "bg-amber-100 dark:bg-amber-800",
            timelineDotClass: "bg-brandAccent dark:bg-amber-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 overflow-hidden font-sans bg-white dark:bg-bgDark">

            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:from-transparent dark:via-blue-950/10 dark:to-transparent" />

            <div className="container relative z-10 px-4 mx-auto">

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl font-heading text-brandDark dark:text-surfaceLight">
                            The Evolution of ESG
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                            From mandatory compliance to a core driver of
                            <span className="font-semibold text-brandPrimary dark:text-blue-400"> strategic value</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Connecting Line (Progress Line) */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[16.666%] right-[16.666%] h-1 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden z-0">
                        <motion.div
                            className="h-full bg-gradient-to-r from-slate-400 via-brandPrimary to-brandAccent"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                        {timelineData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="relative flex flex-col items-center group"
                                >
                                    {/* Step Indicator Dot (Desktop only - sits on the line) */}
                                    <div className={`hidden md:flex absolute top-[3.75rem] z-20 w-6 h-6 rounded-full border-4 border-white dark:border-bgDark ${item.timelineDotClass} shadow-sm`} />

                                    {/* Card */}
                                    <div className={`
                                w-full bg-white dark:bg-surfaceDark/50 backdrop-blur-sm
                                rounded-2xl border ${item.borderClass}
                                shadow-lg ${item.shadowClass}
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl
                                p-8 flex flex-col h-full
                                relative overflow-hidden
                            `}>
                                        {/* Top Highlight Bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1.5 ${item.timelineDotClass}`} />

                                        {/* Icon & Phase Header */}
                                        <div className="flex flex-col items-center mb-6 text-center">
                                            <div className={`w-16 h-16 rounded-2xl ${item.iconBgClass} flex items-center justify-center mb-4 text-2xl shadow-inner group-hover:rotate-[10deg] transition-transform duration-500 ease-in-out`}>
                                                <Icon size={32} className={item.colorClass} strokeWidth={2} />
                                            </div>

                                            <span className="mb-2 text-sm font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                                                {item.period}
                                            </span>
                                            <h3 className={`text-2xl font-bold ${item.colorClass} font-heading`}>
                                                {item.phase}
                                            </h3>
                                        </div>

                                        {/* Features List */}
                                        <ul className="flex-grow mb-8 space-y-4">
                                            {item.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start text-left">
                                                    <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.timelineDotClass}`} />
                                                    <span className="text-[0.95rem] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* "Ideal For" Micro-Context */}
                                        <div className={`mt-auto pt-6 border-t ${item.borderClass} w-full text-center`}>
                                            <p className="mb-1 text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                                                Who This Is For
                                            </p>
                                            <p className={`text-sm font-medium ${item.colorClass}`}>
                                                {item.idealFor}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Directional CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative p-10 mt-24 overflow-hidden text-center border bg-slate-50 dark:bg-surfaceDark/30 rounded-3xl md:p-14 border-slate-100 dark:border-white/5"
                >
                    {/* Decorative blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full bg-brandAccent/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 -mb-20 -ml-20 rounded-full bg-brandPrimary/5 blur-3xl" />

                    <div className="relative z-10">
                        <h3 className="mb-8 text-2xl font-bold md:text-3xl font-heading text-brandDark dark:text-white">
                            Where is your organization today?
                        </h3>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
                            <button className="flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 shadow-lg bg-brandPrimary hover:bg-brandNavy rounded-xl shadow-brandPrimary/30 hover:scale-105 group">
                                Assess My ESG Maturity
                                <BarChart3 size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button className="flex items-center px-8 py-4 text-lg font-semibold transition-all duration-300 bg-white border-2 dark:bg-transparent border-slate-200 dark:border-slate-700 text-brandDark dark:text-surfaceLight hover:border-brandPrimary hover:text-brandPrimary dark:hover:text-brandPrimary dark:hover:border-brandPrimary rounded-xl">
                                Explore ESG Solutions
                                <ArrowRight size={20} className="ml-2" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ESGEvolutionTimeline;
