// import {
//   Lightbulb,
//   Handshake,
//   TrendingUp,
//   Zap,
//   Clock,
//   Target,
//   Users,
//   CheckCircle2,
//   Award,
// } from "lucide-react";

// const ValueDifferentiators = () => {
//   const items = [
//     { icon: Lightbulb, title: "Enriched domain expertise and experience" },
//     { icon: Handshake, title: "Ease to do business – flexible to business needs" },
//     { icon: TrendingUp, title: "All-inclusive – fixed price engagement model" },
//     { icon: Zap, title: "Agile & lean approach in implementation" },
//     { icon: Clock, title: "Responsive & quick" },
//     { icon: Target, title: "Focus on process improvement & real business benefits" },
//     { icon: Users, title: "Strong focus on building long-term relationships" },
//     { icon: CheckCircle2, title: "We remain with clients throughout the journey" },
//     { icon: Award, title: "100% successful implementation" },
//     { icon: Clock, title: "100% on-time project completion" },
//   ];

//   return (
//     <section
//       className="relative w-full transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark"
//     >
//       {/* ✅ MATCH HEADER CONTAINER */}
//       {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
//       <div className="container">

//         {/* HEADER */}
//         <div className="text-left mb-14">
//           <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//             Our Strengths
//           </p>

//           <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//             <span className="text-brandGold dark:text-brandAccent">
//               Value
//             </span>{" "}
//             Differentiators
//           </h2>
//         </div>

//         {/* TIMELINE */}
//         <div className="relative">
//           {/* CENTER LINE */}
//           <div className="absolute top-0 bottom-0 hidden w-px -translate-x-1/2 md:block left-1/2 bg-gradient-to-b from-brandGold/30 via-brandAccent/50 to-brandGold/30 dark:from-brandAccent/20 dark:via-brandGold/30 dark:to-brandAccent/20" />

//           <div className="grid gap-8 md:grid-cols-2">
//             {items.map((item, i) => {
//               const Icon = item.icon;
//               const isLeft = i % 2 === 0;

//               return (
//                 <div
//                   key={i}
//                   className={`
//                     flex items-center gap-4
//                     ${isLeft ? "justify-end text-right" : "justify-start text-left"}
//                   `}
//                 >
//                   {/* LEFT ICON */}
//                   {!isLeft && (
//                     <div className="p-4 text-white transition-transform duration-300 shadow-lg rounded-xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-110 hover:bg-brandGold dark:hover:bg-brandGold dark:hover:text-white">
//                       <Icon size={24} />
//                     </div>
//                   )}

//                   {/* TEXT */}
//                   <div className={`flex-1 max-w-md ${isLeft ? "pr-8" : "pl-8"}`}>
//                     <p className="font-semibold text-brandDark dark:text-white/90">
//                       {item.title}
//                     </p>
//                   </div>

//                   {/* RIGHT ICON */}
//                   {isLeft && (
//                     <div className="p-4 text-white transition-transform duration-300 shadow-lg rounded-xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-110 hover:bg-brandGold dark:hover:bg-brandGold dark:hover:text-white">
//                       <Icon size={24} />
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueDifferentiators;



// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Lightbulb,
//   Handshake,
//   TrendingUp,
//   Zap,
//   Clock,
//   Target,
//   Users,
//   CheckCircle2,
//   Award,
// } from "lucide-react";

// /**
//  * ValueDifferentiators Component
//  * Displays key strengths in a responsive, animated timeline grid.
//  */
// const ValueDifferentiators = () => {
//   const items = [
//     { icon: Lightbulb, title: "Enriched domain expertise and experience" },
//     { icon: Handshake, title: "Ease to do business – flexible to business needs" },
//     { icon: TrendingUp, title: "All-inclusive – fixed price engagement model" },
//     { icon: Zap, title: "Agile & lean approach in implementation" },
//     { icon: Clock, title: "Responsive & quick" },
//     { icon: Target, title: "Focus on process improvement & real business benefits" },
//     { icon: Users, title: "Strong focus on building long-term relationships" },
//     { icon: CheckCircle2, title: "We remain with clients throughout the journey" },
//     { icon: Award, title: "100% successful implementation" },
//     { icon: Clock, title: "100% on-time project completion" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//   };

//   return (
//     <section className="relative w-full py-20 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
//       {/* Background Decor Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brandGold/5 rounded-full blur-3xl opacity-60 dark:opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brandAccent/5 rounded-full blur-3xl opacity-60 dark:opacity-20" style={{ animationDuration: '4s' }}></div>
//       </div>

//       <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">

//         {/* HEADER */}
//         <div className="text-left mb-16 max-w-3xl">
//           <motion.p
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="mb-3 text-sm font-bold tracking-widest uppercase text-brandNavy dark:text-brandAccent"
//           >
//             Our Strengths
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl font-extrabold md:text-5xl text-brandDark dark:text-white leading-tight"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-brandAccent">
//               Value
//             </span>{" "}
//             Differentiators
//           </motion.h2>

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 100 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="h-1.5 mt-6 rounded-full bg-gradient-to-r from-brandGold to-brandAccent"
//           />
//         </div>

//         {/* TIMELINE GRID */}
//         <div className="relative">
//           {/* CENTER LINE (Desktop Only) */}
//           <motion.div
//             initial={{ scaleY: 0 }}
//             whileInView={{ scaleY: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] hidden md:block bg-gradient-to-b from-brandGold/20 via-brandAccent/50 to-brandGold/20 origin-top"
//           />

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid gap-8 md:gap-12 md:grid-cols-2"
//           >
//             {items.map((item, i) => {
//               const Icon = item.icon;
//               // In a 2-column grid, Left Column is index 0, 2, 4... (Even)
//               // Right Column is index 1, 3, 5... (Odd)
//               const isEven = i % 2 === 0;

//               return (
//                 <motion.div
//                   key={i}
//                   variants={itemVariants}
//                   className={`flex ${isEven ? "md:justify-end" : "md:justify-start"} justify-start`}
//                 >
//                   {/* Card Container */}
//                   <div className={`
//                     relative group flex items-start gap-5 p-6 w-full md:max-w-lg
//                     bg-white/60 dark:bg-white/5 backdrop-blur-md
//                     border border-gray-100/50 dark:border-white/10
//                     rounded-2xl shadow-lg hover:shadow-2xl
//                     transition-all duration-300 hover:-translate-y-1
//                   `}>
//                     {/* Icon Box */}
//                     <div className="shrink-0 relative">
//                       <div className="absolute inset-0 bg-brandGold/20 dark:bg-brandAccent/20 blur-md rounded-full group-hover:blur-lg transition-all duration-300"></div>
//                       <div className="relative p-3.5 rounded-xl bg-gradient-to-br from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                         <Icon size={24} className="stroke-[2px]" />
//                       </div>
//                     </div>

//                     {/* Text Content */}
//                     <div>
//                       <p className="text-lg font-semibold text-brandDark dark:text-white/95 leading-snug group-hover:text-brandNavy dark:group-hover:text-brandAccent transition-colors duration-300">
//                         {item.title}
//                       </p>
//                     </div>

//                     {/* Center Dot Connector (Desktop) */}
//                     <div className={`
//                       hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white dark:border-gray-900 bg-brandGold z-20
//                       ${isEven
//                         ? "-right-[calc(1.5rem_+_1px+24px)]" /* Adjust based on gap */
//                         : "-left-[calc(1.5rem_+_1px+24px)]"
//                       }
//                       /* We need to position this precisely relative to the grid gap. 
//                          The gap is gap-8 (2rem) or gap-12 (3rem). 
//                          Half gap is 1.5rem. 
//                          Plus the layout offset. 
//                          Actually, absolute positioning relative to the card might be tricky if card width varies.
//                          Better to put the dot outside the card in the parent flex.
//                       */
//                       hidden
//                     `}></div>
//                   </div>

//                   {/* Re-implementing dot outside the card for better positioning */}
//                   {/* 
//                       Note: Positioning dots perfectly on the center line in a responsive grid can be tricky 
//                       calculated by pixels. 
//                       Instead, let's trust the visual balance without connected dots, or use a pseudo element on the center line.
//                       The center line itself is good enough for a clean look. 
//                       I will skip specific dots on the line to avoid misalignment issues across screen sizes, 
//                       as the line itself provides the structure.
//                    */}

//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueDifferentiators;


// import React, { useState } from "react";
// import { Sparkles, Users, Target, Zap, Globe, Shield, TrendingUp } from "lucide-react";

// const ValueDifferentiators = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const values = [
//     {
//       icon: Sparkles,
//       title: "Customized Solutions",
//       description: "Tailored approaches designed specifically for your unique business challenges",
//       iconBg: "bg-brandGold"
//     },
//     {
//       icon: Target,
//       title: "Integration of Analytics in Internal Audit",
//       description: "Advanced data-driven insights to enhance audit effectiveness",
//       iconBg: "bg-brandNavy"
//     },
//     {
//       icon: Users,
//       title: "Experienced Team",
//       description: "Industry veterans with deep domain expertise and proven track records",
//       iconBg: "bg-brandAccent"
//     },
//     {
//       icon: Zap,
//       title: "Efficiency through Virtual Execution",
//       description: "Seamless remote delivery with maximum impact and minimal disruption",
//       iconBg: "bg-brandPrimary"
//     },
//     {
//       icon: Globe,
//       title: "Industry & Domain Expertise",
//       description: "Specialized knowledge across diverse sectors and business functions",
//       iconBg: "bg-brandGold"
//     },
//     {
//       icon: Shield,
//       title: "Continuous Assurance and Consulting Service",
//       description: "Ongoing support and strategic guidance throughout your journey",
//       iconBg: "bg-brandNavy"
//     }
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-bgLight dark:bg-bgDark py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//       {/* Simple Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brandGold/5 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brandAccent/5 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="container relative z-10">
//         {/* Header Section */}
//         <div className="text-start mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandAccent/10 dark:bg-brandAccent/20 rounded-full mb-6 border border-brandAccent/30">
//             {/* <Sparkles className="w-4 h-4 text-brandGold dark:text-brandAccent" /> */}
//             {/* <span className="text-sm font-semibold text-brandDark dark:text-brandAccent uppercase tracking-wider font-heading">
//               Why Choose Us
//             </span> */}
//           </div>
          
//           <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-brandDark dark:text-brandLight leading-tight">
//             Our Value <span className="text-brandGold dark:text-brandAccent">Differentiators</span>
//           </h1>
          
//           <p className="text-xl text-brandDark/70 dark:text-brandLight/70 max-w-2xl  leading-relaxed">
//             Discover what sets us apart and makes us the trusted partner for your business transformation
//           </p>

//           <div className="w-24 h-1 bg-brandGold dark:bg-brandAccent mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             const isHovered = hoveredIndex === index;
            
//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative"
//               >
//                 {/* Card */}
//                 <div className={`
//                   relative h-full bg-surfaceLight dark:bg-surfaceDark rounded-2xl p-8 
//                   transition-all duration-500 ease-out
//                   ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}
//                   border-2 ${isHovered ? 'border-brandGold dark:border-brandAccent' : 'border-borderLight dark:border-borderDark'}
//                   overflow-hidden
//                 `}>
//                   {/* Corner Accent */}
//                   <div className={`
//                     absolute top-0 right-0 w-24 h-24 ${value.iconBg}
//                     opacity-5 rounded-bl-full
//                   `}></div>

//                   {/* Icon Container */}
//                   <div className="relative mb-6">
//                     <div className={`
//                       inline-flex p-4 rounded-xl ${value.iconBg}
//                       transform transition-all duration-500
//                       ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
//                       shadow-lg
//                     `}>
//                       <Icon className="w-8 h-8 text-surfaceLight" strokeWidth={2.5} />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight mb-3 relative z-10">
//                     {value.title}
//                   </h3>
                  
//                   <p className="text-brandDark/70 dark:text-brandLight/70 leading-relaxed relative z-10">
//                     {value.description}
//                   </p>

//                   {/* Bottom Accent Line */}
//                   <div className={`
//                     absolute bottom-0 left-0 h-1 ${value.iconBg}
//                     transition-all duration-500
//                     ${isHovered ? 'w-full' : 'w-0'}
//                   `}></div>
//                 </div>

//                 {/* Floating Shadow on Hover */}
//                 <div className={`
//                   absolute inset-0 ${value.iconBg} rounded-2xl blur-xl
//                   opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10
//                 `}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col items-center gap-4 p-8 bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-xl border-2 border-brandGold/30 dark:border-brandAccent/30">
//             <div className="p-4 bg-brandGold dark:bg-brandAccent rounded-full">
//               <TrendingUp className="w-8 h-8 text-surfaceLight" strokeWidth={2.5} />
//             </div>
//             <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight">
//               Ready to Transform Your Business?
//             </h3>
//             <p className="text-brandDark/70 dark:text-brandLight/70 max-w-md">
//               Let's discuss how our expertise can drive your success forward
//             </p>
//             <button className="mt-4 px-8 py-3 bg-brandNavy dark:bg-brandPrimary text-brandLight font-semibold rounded-full hover:bg-brandDark dark:hover:bg-brandNavy hover:shadow-xl hover:scale-105 transition-all duration-300">
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueDifferentiators;


// import React, { useState } from "react";
// import { Sparkles, Users, Target, Zap, Globe, Shield, TrendingUp } from "lucide-react";

// const ValueDifferentiators = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const values = [
//     {
//       icon: Sparkles,
//       title: "Customized Solutions",
//       description: "Tailored approaches designed specifically for your unique business challenges",
//       iconBg: "bg-brandGold"
//     },
//     {
//       icon: Target,
//       title: "Integration of Analytics in Internal Audit",
//       description: "Advanced data-driven insights to enhance audit effectiveness",
//       iconBg: "bg-brandNavy"
//     },
//     {
//       icon: Users,
//       title: "Experienced Team",
//       description: "Industry veterans with deep domain expertise and proven track records",
//       iconBg: "bg-brandAccent"
//     },
//     {
//       icon: Zap,
//       title: "Efficiency through Virtual Execution",
//       description: "Seamless remote delivery with maximum impact and minimal disruption",
//       iconBg: "bg-brandPrimary"
//     },
//     {
//       icon: Globe,
//       title: "Industry & Domain Expertise",
//       description: "Specialized knowledge across diverse sectors and business functions",
//       iconBg: "bg-brandGold"
//     },
//     {
//       icon: Shield,
//       title: "Continuous Assurance and Consulting Service",
//       description: "Ongoing support and strategic guidance throughout your journey",
//       iconBg: "bg-brandNavy"
//     }
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-bgLight dark:bg-bgDark py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//       {/* Simple Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brandGold/5 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brandAccent/5 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="container relative z-10">
//         {/* Header Section */}
//         <div className="text-start mb-16">
//           {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-brandAccent/10 dark:bg-brandAccent/20 rounded-full mb-6 border border-brandAccent/30">
//             <Sparkles className="w-4 h-4 text-brandGold dark:text-brandAccent" />
//             <span className="text-sm font-semibold text-brandDark dark:text-brandAccent uppercase tracking-wider font-heading">
//               Why Choose Us
//             </span>
//           </div> */}
          
//           <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-brandDark dark:text-brandLight leading-tight">
//             Our Value <span className="text-brandGold dark:text-brandAccent">Differentiators</span>
//           </h1>
          
//           <p className="text-xl text-brandDark/70 dark:text-brandLight/70 max-w-2xl leading-relaxed">
//             Discover what sets us apart and makes us the trusted partner for your business transformation
//           </p>

//           <div className="w-24 h-1 bg-brandGold dark:bg-brandAccent mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             const isHovered = hoveredIndex === index;
            
//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative"
//               >
//                 {/* Card */}
//                 <div className={`
//                   relative h-full bg-surfaceLight dark:bg-surfaceDark rounded-3xl p-8 
//                   transition-all duration-500 ease-out
//                   ${isHovered ? 'shadow-2xl -translate-y-3 scale-105' : 'shadow-lg'}
//                   border ${isHovered ? 'border-brandGold dark:border-brandAccent' : 'border-borderLight dark:border-borderDark'}
//                   overflow-hidden backdrop-blur-sm
//                 `}>
//                   {/* Corner Accent */}
//                   <div className={`
//                     absolute top-0 right-0 w-24 h-24 ${value.iconBg}
//                     opacity-5 rounded-bl-full
//                   `}></div>

//                   {/* Icon Container */}
//                   <div className="relative mb-6">
//                     <div className="absolute inset-0 bg-brandGold/20 dark:bg-brandAccent/20 blur-xl rounded-xl"></div>
//                     <div className={`
//                       relative inline-flex p-5 rounded-2xl ${value.iconBg}
//                       transform transition-all duration-500
//                       ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
//                       shadow-xl
//                     `}>
//                       <Icon className="w-10 h-10 text-surfaceLight" strokeWidth={2} />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight mb-3 relative z-10">
//                     {value.title}
//                   </h3>
                  
//                   <p className="text-brandDark/70 dark:text-brandLight/70 leading-relaxed relative z-10">
//                     {value.description}
//                   </p>

//                   {/* Bottom Accent Line */}
//                   <div className={`
//                     absolute bottom-0 left-0 h-1.5 ${value.iconBg}
//                     transition-all duration-500 rounded-tr-full
//                     ${isHovered ? 'w-full' : 'w-0'}
//                   `}></div>
//                 </div>

//                 {/* Floating Shadow on Hover */}
//                 <div className={`
//                   absolute inset-0 ${value.iconBg} rounded-2xl blur-xl
//                   opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10
//                 `}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col items-center gap-4 p-8 bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-xl border-2 border-brandGold/30 dark:border-brandAccent/30">
//             <div className="p-4 bg-brandGold dark:bg-brandAccent rounded-full">
//               <TrendingUp className="w-8 h-8 text-surfaceLight" strokeWidth={2.5} />
//             </div>
//             <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight">
//               Ready to Transform Your Business?
//             </h3>
//             <p className="text-brandDark/70 dark:text-brandLight/70 max-w-md">
//               Let's discuss how our expertise can drive your success forward
//             </p>
//             <button className="mt-4 px-8 py-3 bg-brandNavy dark:bg-brandPrimary text-brandLight font-semibold rounded-full hover:bg-brandDark dark:hover:bg-brandNavy hover:shadow-xl hover:scale-105 transition-all duration-300">
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueDifferentiators;

import React, { useState } from "react";
import { Sparkles, Users, Target, Zap, Globe, Shield } from "lucide-react";

const ValueDifferentiators = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    {
      icon: Sparkles,
      title: "Customized Solutions",
      description: "Tailored approaches designed specifically for your unique business challenges",
    },
    {
      icon: Target,
      title: "Integration of Analytics in Internal Audit",
      description: "Advanced data-driven insights to enhance audit effectiveness",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Industry veterans with deep domain expertise and proven track records",
    },
    {
      icon: Zap,
      title: "Efficiency through Virtual Execution",
      description: "Seamless remote delivery with maximum impact and minimal disruption",
    },
    {
      icon: Globe,
      title: "Industry & Domain Expertise",
      description: "Specialized knowledge across diverse sectors and business functions",
    },
    {
      icon: Shield,
      title: "Continuous Assurance and Consulting Service",
      description: "Ongoing support and strategic guidance throughout your journey",
    }
  ];

  return (
    <section className="relative w-full bg-bgLight dark:bg-bgDark pt-10 px-3  transition-colors duration-300">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brandGold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brandAccent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-start mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Our Strengths
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-brandDark dark:text-white">
            Our Value <span className="text-brandGold dark:text-brandAccent">Differentiators</span>
          </h2>

          <p className="max-w-3xl text-lg text-brandNavy dark:text-white/70">
            Discover what sets us apart and makes us the trusted partner for your business transformation journey
          </p>

          <div className="w-24 h-1 bg-brandGold dark:bg-brandAccent mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid - Back to original compact size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-surfaceLight dark:bg-surfaceDark rounded-3xl p-8 
                  transition-all duration-500 ease-out
                  ${isHovered ? 'shadow-2xl -translate-y-3 scale-105' : 'shadow-lg'}
                  border ${isHovered ? 'border-brandGold dark:border-brandAccent' : 'border-brandDark/10 dark:border-brandAccent/20'}
                  overflow-hidden backdrop-blur-sm
                `}>
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 opacity-5 dark:opacity-10 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        index === 0 ? '1552664730-d307ca884978' : // Customized solutions - blocks/patterns
                        index === 1 ? '1551288049-bebda4e38f71' : // Analytics - data/charts
                        index === 2 ? '1522071820-d9009dd7bf47' : // Team - people working
                        index === 3 ? '1504868584819-f8e8b4b6d7e3' : // Virtual execution - laptop
                        index === 4 ? '1454165804606-c3d57bc86b40' : // Domain expertise - business
                        '1450101499163-116c2c81e0e7' // Consulting - meeting
                      }?w=800&q=80')`
                    }}
                  />

                  {/* Corner Accent */}
                  <div className={`
                    absolute top-0 right-0 w-24 h-24 ${
                      index % 3 === 0 ? 'bg-brandGold' :
                      index % 3 === 1 ? 'bg-brandNavy' :
                      'bg-brandAccent'
                    }
                    opacity-5 rounded-bl-full
                  `}></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brandGold/20 dark:bg-brandAccent/20 blur-xl rounded-xl"></div>
                    <div className={`
                      relative inline-flex p-5 rounded-2xl ${
                        index % 3 === 0 ? 'bg-brandGold' :
                        index % 3 === 1 ? 'bg-brandNavy' :
                        'bg-brandAccent'
                      }
                      transform transition-all duration-500
                      ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                      shadow-xl
                    `}>
                      <Icon className="w-10 h-10 text-surfaceLight" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-brandLight mb-3 relative z-10">
                    {value.title}
                  </h3>
                  
                  <p className="text-brandDark/70 dark:text-brandLight/70 leading-relaxed relative z-10">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`
                    absolute bottom-0 left-0 h-1.5 ${
                      index % 3 === 0 ? 'bg-brandGold' :
                      index % 3 === 1 ? 'bg-brandNavy' :
                      'bg-brandAccent'
                    }
                    transition-all duration-500 rounded-tr-full
                    ${isHovered ? 'w-full' : 'w-0'}
                  `}></div>
                </div>

                {/* Floating Shadow on Hover */}
                <div className={`
                  absolute inset-0 ${
                    index % 3 === 0 ? 'bg-brandGold' :
                    index % 3 === 1 ? 'bg-brandNavy' :
                    'bg-brandAccent'
                  } rounded-2xl blur-xl
                  opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10
                `}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueDifferentiators;