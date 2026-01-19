// import React from "react";
// import { motion } from "framer-motion";

// // Replace these imports with your actual local paths
// import professionalExcellence from "../../assets/images/professional_excellence_team.png";
// import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
// import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";

// const IntroductionSection = () => {
//   const introCards = [
//     {
//       title: "Professional Excellence",
//       description: "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
//       image: professionalExcellence,
//     },
//     {
//       title: "Propreneurial Mindset",
//       description: "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
//       image: propereneurialMindset,
//     },
//     {
//       title: "Long-term Relationships",
//       description: "We are passionate about making meaningful impact and believe in building enduring partnerships based on trust.",
//       image: longTermRelationships,
//     },
//   ];

//   return (
//     <section className="relative px-12 py-16 lg:py-24 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-300">
//       <div className="container mx-auto px-4">
        
//         {/* Header Section */}
//         <div className="mb-16 text-start">
//           <div className="flex items-center gap-3 mb-6">
//             <span className="w-12 h-[2px] bg-orange-400"></span>
//             <p className="text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-orange-400">
//               Introduction
//             </p>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl text-slate-900 dark:text-white">
//             Creating <span className="text-orange-500">enduring value</span> through customized solution-based services.
//           </h2>
//         </div>

//         {/* Intro Cards Grid */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {introCards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="relative overflow-hidden group rounded-3xl h-[450px] bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
//             >
//               {/* Image with Fallback Logic */}
//               <div className="absolute inset-0">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   onError={(e) => { e.target.style.display = 'none'; }} // Hides broken image
//                 />
//               </div>
              
//               {/* Gradient Overlay (Always Visible) */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
//                 <div className="mb-4 w-10 h-1 bg-orange-400 transition-all duration-500 group-hover:w-20"></div>
//                 <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-gray-300">
//                   {card.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroductionSection;


// import React from "react";
// import { motion } from "framer-motion";

// // Replace these imports with your actual local paths
// import professionalExcellence from "../../assets/images/professional_excellence_team.png";
// import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
// import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";

// const IntroductionSection = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const introCards = [
//     {
//       title: "Professional Excellence",
//       description: "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
//       image: professionalExcellence,
//     },
//     {
//       title: "Propreneurial Mindset",
//       description: "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
//       image: propereneurialMindset,
//     },
//     {
//       title: "Long-term Relationships",
//       description: "We are passionate about making meaningful impact and believe in building enduring partnerships based on trust.",
//       image: longTermRelationships,
//     },
//   ];

//   return (
//     <>
//       {/* Introduction Section */}
//       <section className="relative px-12 py-16 lg:py-24 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-300">
//         <div className="container mx-auto px-4">
          
//           {/* Header Section */}
//           <div className="mb-16 text-start">
//             <div className="flex items-center gap-3 mb-6">
//               <span className="w-12 h-[2px] bg-orange-400"></span>
//               <p className="text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-orange-400">
//                 Introduction
//               </p>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl text-slate-900 dark:text-white">
//               Creating <span className="text-orange-500">enduring value</span> through customized solution-based services.
//             </h2>
//           </div>

//           {/* Intro Cards Grid */}
//           <div className="grid gap-8 md:grid-cols-3">
//             {introCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative overflow-hidden group rounded-3xl h-[450px] bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
//               >
//                 {/* Image with Fallback Logic */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                 </div>
                
//                 {/* Gradient Overlay (Always Visible) */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
//                   <div className="mb-4 w-10 h-1 bg-orange-400 transition-all duration-500 group-hover:w-20"></div>
//                   <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-gray-300">
//                     {card.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="relative py-16 bg-surfaceLight dark:bg-surfaceDark isolate lg:py-24">
//         <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:px-8 md:grid-cols-2">
//           <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl">
//               <span className="text-brandDark dark:text-brandAccent">About us</span>
//             </h2>
//             <div className="w-24 h-1 mb-8"></div>
//             <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-6">
//               At RiskMan, we focus on creating enduring value for our clients, people, communities
//               and other stakeholders through our "Customised Solution" based services.
//             </p>
//             <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-6">
//               RiskMan is a team of experienced professionals with high level of knowledge
//               and accomplishments who bring to the table a varied and storied experience set,
//               to create outstanding value for its clients and other stakeholders. Rather than being
//               classical consultants, we take pride in being propreneurs i.e., professionals, with
//               an entrepreneurial mindset.
//             </p>
//             <p className="text-lg text-[var(--text-gray)] leading-relaxed mb-8">
//               We are a passionate team and feel excited in making a meaningful impact through our
//               experience, competency and ability to deliver sustainable goal with perseverance.
//               We endeavor to engage with people in meaningful ways and believe in building
//               long term relationship with all our stakeholders.
//             </p>
//             <div className="bg-brandNavy dark:bg-brandAccent text-white/70 dark:text-white border-l-4 border-[var(--accent-blue)] rounded-lg p-6">
//               <p className="text-xl italic font-semibold text-center">
//                 "RISKMAN IS THE TRUSTED PARTNER IN YOUR SUSTAINABLE GROWTH JOURNEY"
//               </p>
//             </div>
//           </motion.div>
//           {/* Right: Image */}
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-20"></div>
//             <img
//               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
//               alt="About RiskMan"
//               className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default IntroductionSection;



// import React from "react";
// import { motion } from "framer-motion";
// import { Shield, Target, Users, ArrowRight } from "lucide-react";
// import professionalExcellence from "../../assets/images/professional_excellence_team.png";
// import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
// import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";

// const IntroductionSection = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
//   };

//   const containerVariants = {
//     initial: {},
//     whileInView: {
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   const introCards = [
//     {
//       title: "Professional Excellence",
//       subtitle: "Expertise & Accomplishment",
//       description: "A team of seasoned professionals bringing varied global perspectives and deep industry knowledge to every project.",
//       image: professionalExcellence,
//       icon: <Shield className="w-5 h-5" />
//     },
//     {
//       title: "Propreneurial Mindset",
//       subtitle: "Entrepreneurial Spirit",
//       description: "Moving beyond classical consulting, we operate with the agility and ownership of entrepreneurs to drive real results.",
//       image: propereneurialMindset,
//       icon: <Target className="w-5 h-5" />
//     },
//     {
//       title: "Enduring Partnerships",
//       subtitle: "Trust & Transparency",
//       description: "We focus on building long-term relationships that transcend transactions, founded on mutual growth and integrity.",
//       image: longTermRelationships,
//       icon: <Users className="w-5 h-5" />
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       {/* 1. Philosophy Section */}
//       <section className="relative px-6 lg:px-24 py-24 bg-white dark:bg-brand-navy transition-colors duration-700">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <motion.div 
//             {...fadeInUp}
//             className="mb-20"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <span className="w-16 h-[1px] bg-brand-gold"></span>
//               <p className="text-[11px] font-black tracking-[0.4em] uppercase text-brand-gold">
//                 The RiskMan Philosophy
//               </p>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-4xl text-brand-navy dark:text-white">
//               Creating <span className="font-serif italic text-brand-gold">enduring value</span> through customized architectural solutions.
//             </h2>
//           </motion.div>

//           {/* Pillars Grid */}
//           <motion.div 
//             variants={containerVariants}
//             initial="initial"
//             whileInView="whileInView"
//             viewport={{ once: true }}
//             className="grid gap-10 md:grid-cols-3"
//           >
//             {introCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="group relative h-[500px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-brand-darker border border-slate-200 dark:border-white/5 shadow-2xl"
//               >
//                 {/* Background Image with Parallax effect */}
//                 <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
//                 </div>

//                 {/* Card Content Overlay */}
//                 <div className="absolute inset-0 p-10 flex flex-col justify-end text-white transition-all duration-500 group-hover:pb-12">
//                   <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-500">
//                     {card.icon}
//                   </div>
                  
//                   <p className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-gold/80 mb-2">
//                     {card.subtitle}
//                   </p>
//                   <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
//                     {card.title}
//                   </h3>
                  
//                   {/* Expandable description on hover */}
//                   <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
//                     <p className="text-sm text-white/70 leading-relaxed font-medium mb-6">
//                       {card.description}
//                     </p>
//                     <button className="flex items-center gap-2 text-brand-gold text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
//                       Read More <ArrowRight size={14} />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Narrative Section (About Us) */}
//       <section className="relative py-24 lg:py-40 bg-slate-50 dark:bg-brand-darker transition-colors duration-700 isolate">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid items-center gap-16 lg:grid-cols-12">
          
//           {/* Left Side: Content */}
//           <motion.div 
//             {...fadeInUp}
//             className="lg:col-span-7"
//           >
//             <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">
//               Since 2012
//             </div>
            
//             <h2 className="mb-10 text-5xl md:text-7xl font-black text-brand-navy dark:text-white leading-none">
//               <span className="font-serif italic font-medium">About</span> RiskMan
//             </h2>

//             <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-white/60 font-medium leading-relaxed max-w-2xl">
//               <p>
//                 At RiskMan, we focus on creating <span className="text-brand-navy dark:text-white font-bold">enduring value</span> for our clients, people, communities and stakeholders through our "Customized Solution" based services.
//               </p>
//               <p>
//                 Rather than being classical consultants, we take pride in being <span className="italic text-brand-gold">propreneurs</span>—professionals with an entrepreneurial mindset who drive sustainable growth with perseverance.
//               </p>
//               <p>
//                 We endeavor to engage with people in meaningful ways and believe in building long term relationship with all our stakeholders based on trust and shared vision.
//               </p>
//             </div>

//             {/* Quote Block */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="mt-12 relative p-8 rounded-2xl bg-white dark:bg-brand-navy border-l-4 border-brand-gold shadow-xl"
//             >
//               <p className="text-2xl font-serif italic text-brand-navy dark:text-white leading-snug">
//                 "RiskMan is the trusted partner in your sustainable growth journey."
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Right Side: Visual Image Stack */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5 relative"
//           >
//             {/* Background decorative elements */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-[80px]" />
//             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-navy/10 dark:bg-white/5 rounded-full blur-[100px]" />
            
//             {/* The Main Image */}
//             <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10 group">
//               <img
//                 src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
//                 alt="About RiskMan Vision"
//                 className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
//               />
              
//               {/* Overlapping Info Card */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="absolute -bottom-6 -left-6 p-8 glass-card border border-brand-gold/30 rounded-2xl shadow-2xl max-w-[240px]"
//               >
//                 <p className="text-4xl font-black text-brand-gold mb-1">15+</p>
//                 <p className="text-[10px] font-black uppercase tracking-widest dark:text-white text-brand-navy opacity-70">
//                   Years of Global Experience
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Decorative Branding Element */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
//         <h2 className="text-[30rem] font-black dark:text-white text-brand-navy leading-none -ml-20">RM</h2>
//       </div>
//     </div>
//   );
// };

// export default IntroductionSection;


// import React from "react";
// import { motion } from "framer-motion";
// import { Shield, Target, Users, ArrowRight } from "lucide-react";
// import professionalExcellence from "../../assets/images/professional_excellence_team.png";
// import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
// import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";
// import introSection from "../../assets/images/introsection.png";

// const IntroductionSection = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
//   };

//   const containerVariants = {
//     initial: {},
//     whileInView: {
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   const introCards = [
//     {
//       title: "Professional Excellence",
//       subtitle: "Expertise & Accomplishment",
//       description: "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
//       image: professionalExcellence,
//       icon: <Shield className="w-5 h-5" />
//     },
//     {
//       title: "Propreneurial Mindset",
//       subtitle: "Entrepreneurial Spirit",
//       description: "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
//       image: propereneurialMindset,
//       icon: <Target className="w-5 h-5" />
//     },
//     {
//       title: "Long-term Relationships",
//       subtitle: "Trust & Partnership",
//       description: "We are passionate about making meaningful impact and believe in building enduring partnerships based on trust.",
//       image: longTermRelationships,
//       icon: <Users className="w-5 h-5" />
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden bg-surfaceLight dark:bg-bgDark">
//       {/* 1. About Us Section - FIRST */}
//       <section className="relative py-24 lg:py-40 bg-bgLight dark:bg-surfaceDark transition-colors duration-700 isolate">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid items-center gap-16 lg:grid-cols-12">
          
//           {/* Left Side: Content */}
//           <motion.div 
//             {...fadeInUp}
//             className="lg:col-span-7"
//           >
//             <div className="inline-block px-4 py-1 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
//               About RiskMan
//             </div>
            
//             <h2 className="mb-10 text-5xl md:text-7xl font-black text-brandDark dark:text-white leading-none">
//               <span className="font-serif italic font-medium text-brandGold">Who</span> We Are
//             </h2>

//             <div className="space-y-6 text-lg md:text-xl text-brandDark/70 dark:text-white/70 font-medium leading-relaxed max-w-2xl">
//               <p>
//                 At RiskMan, we focus on creating <span className="text-brandDark dark:text-white font-bold">enduring value</span> for our clients, people, communities and other stakeholders through our <span className="text-brandGold font-semibold">"Customised Solution"</span> based services.
//               </p>
//               <p>
//                 RiskMan is a team of experienced professionals with high level of knowledge and accomplishments who bring to the table a varied and storied experience set, to create outstanding value for its clients and other stakeholders.
//               </p>
//               <p>
//                 Rather than being classical consultants, we take pride in being <span className="italic text-brandGold font-semibold">propreneurs</span> i.e., professionals with an entrepreneurial mindset.
//               </p>
//               <p>
//                 We are a passionate team and feel excited in making a meaningful impact through our experience, competency and ability to deliver sustainable goal with perseverance. We endeavor to engage with people in meaningful ways and believe in building long term relationship with all our stakeholders.
//               </p>
//             </div>

//             {/* Quote Block */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="mt-12 relative p-8 rounded-2xl bg-brandDark dark:bg-brandAccent border-l-4 border-brandGold shadow-xl"
//             >
//               <div className="absolute -top-3 -left-3 w-8 h-8 bg-brandGold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                 <svg className="w-4 h-4 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <p className="text-2xl font-serif italic text-white/70 dark:text-white leading-snug">
//                 "RISKMAN IS THE TRUSTED PARTNER IN YOUR SUSTAINABLE GROWTH JOURNEY"
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Right Side: Visual Image Stack */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5 relative"
//           >
//             {/* Background decorative elements */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandGold/20 rounded-full blur-[80px]" />
//             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 rounded-full blur-[100px]" />
            
//             {/* The Main Image */}
//             <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-brandGold/10 dark:border-brandGold/20 group">
//               <img
//                 src={introSection}
//                 alt="About RiskMan"
//                 className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-brandDark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               {/* Overlapping Info Card */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="absolute -bottom-6 -left-6 p-8 bg-surfaceLight/95 dark:bg-brandNavy/95 backdrop-blur-lg border border-brandGold/30 rounded-2xl shadow-2xl max-w-[240px]"
//               >
//                 <p className="text-4xl font-black text-brandGold mb-1">100+</p>
//                 <p className="text-[10px] font-black uppercase tracking-widest text-brandDark dark:text-white opacity-70">
//                   Success Stories
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 2. Introduction Philosophy Section - SECOND */}
//       <section className="relative px-6 lg:px-24 py-24 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-700">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <motion.div 
//             {...fadeInUp}
//             className="mb-20"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <span className="w-16 h-[1px] bg-brandGold"></span>
//               <p className="text-[11px] font-black tracking-[0.4em] uppercase text-brandGold">
//                 Our Approach
//               </p>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-4xl text-brandDark dark:text-white">
//               Creating <span className="font-serif italic text-brandGold">enduring value</span> through customized solution-based services.
//             </h2>
//           </motion.div>

//           {/* Pillars Grid */}
//           <motion.div 
//             variants={containerVariants}
//             initial="initial"
//             whileInView="whileInView"
//             viewport={{ once: true }}
//             className="grid gap-10 md:grid-cols-3"
//           >
//             {introCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="group relative h-[500px] rounded-3xl overflow-hidden bg-bgLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl"
//               >
//                 {/* Background Image with Parallax effect */}
//                 <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brandDark/90 via-brandDark/40 to-transparent" />
//                 </div>

//                 {/* Card Content Overlay */}
//                 <div className="absolute inset-0 p-10 flex flex-col justify-end text-white transition-all duration-500 group-hover:pb-12">
//                   <div className="w-12 h-12 rounded-2xl bg-brandGold/20 backdrop-blur-md border border-brandGold/30 flex items-center justify-center mb-6 text-brandGold group-hover:scale-110 transition-transform duration-500">
//                     {card.icon}
//                   </div>
                  
//                   <p className="text-[10px] font-black tracking-[0.2em] uppercase text-brandGold/80 mb-2">
//                     {card.subtitle}
//                   </p>
//                   <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
//                     {card.title}
//                   </h3>
                  
//                   {/* Expandable description on hover */}
//                   <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
//                     <p className="text-sm text-white/70 leading-relaxed font-medium mb-6">
//                       {card.description}
//                     </p>
//                     <button className="flex items-center gap-2 text-brandGold text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
//                       Learn More <ArrowRight size={14} />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Decorative Branding Element */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
//       {/* <img 
//     src="/rm.png"
//     alt="RiskMan" 
//     className="w-[800px] h-auto dark:invert" // Use invert for dark mode if needed
//    /> */}
//         <h2 className="text-[30rem] font-black text-brandDark dark:text-white leading-none -ml-20">RM</h2>
//       </div>
//     </div>
//   );
// };

// export default IntroductionSection;

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, ArrowRight } from "lucide-react";
import professionalExcellence from "../../assets/images/professional_excellence_team.png";
import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";
import introSection from "../../assets/images/introsection.png";
 // Import your logo

const IntroductionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const introCards = [
    {
      title: "Professional Excellence",
      subtitle: "Expertise & Accomplishment",
      description: "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
      image: professionalExcellence,
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Propreneurial Mindset",
      subtitle: "Entrepreneurial Spirit",
      description: "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
      image: propereneurialMindset,
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Long-term Relationships",
      subtitle: "Trust & Partnership",
      description: "We are passionate about making meaningful impact and believe in building enduring partnerships based on trust.",
      image: longTermRelationships,
      icon: <Users className="w-5 h-5" />
    },
  ];

  return (
    <div className="relative overflow-hidden bg-surfaceLight dark:bg-bgDark">
      {/* 1. About Us Section - FIRST */}
      <section className="relative py-4 lg:py-8 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-700 isolate">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid items-center gap-16 lg:grid-cols-12">
          
          {/* Left Side: Content */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              About RiskMan
            </div>
            
            <h2 className="mb-10 text-5xl md:text-7xl font-black text-brandDark dark:text-white leading-none">
              <span className="font-serif italic font-medium text-brandGold">Who</span> We Are
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-brandDark/70 dark:text-white/70 font-medium leading-relaxed max-w-2xl">
              <p>
                At RiskMan, we focus on creating <span className="text-brandDark dark:text-white font-bold">enduring value</span> for our clients, people, communities and other stakeholders through our <span className="text-brandGold font-semibold">"Customised Solution"</span> based services.
              </p>
              <p>
                RiskMan is a team of experienced professionals with high level of knowledge and accomplishments who bring to the table a varied and storied experience set, to create outstanding value for its clients and other stakeholders.
              </p>
              <p>
                Rather than being classical consultants, we take pride in being <span className="italic text-brandGold font-semibold">propreneurs</span> i.e., professionals with an entrepreneurial mindset.
              </p>
              <p>
                We are a passionate team and feel excited in making a meaningful impact through our experience, competency and ability to deliver sustainable goal with perseverance. We endeavor to engage with people in meaningful ways and believe in building long term relationship with all our stakeholders.
              </p>
            </div>

            {/* Quote Block */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative p-8 rounded-2xl bg-brandDark dark:bg-brandAccent border-l-4 border-brandGold shadow-xl"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brandGold/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-2xl font-serif italic text-white/70 dark:text-white leading-snug">
                "RISKMAN IS THE TRUSTED PARTNER IN YOUR SUSTAINABLE GROWTH JOURNEY"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandGold/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 rounded-full blur-[100px]" />
            
            {/* The Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-brandGold/10 dark:border-brandGold/20 group">
              <img
                src={introSection}
                alt="About RiskMan"
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Overlapping Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 p-8 bg-surfaceLight/95 dark:bg-brandNavy/95 backdrop-blur-lg border border-brandGold/30 rounded-2xl shadow-2xl max-w-[240px]"
              >
                <p className="text-4xl font-black text-brandGold mb-1">100+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brandDark dark:text-white opacity-70">
                  Success Stories
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction Philosophy Section - SECOND */}
      <section className="relative px-6 lg:px-24 py-4 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-700">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            {...fadeInUp}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-[1px] bg-brandGold"></span>
              <p className="text-[11px] font-black tracking-[0.4em] uppercase text-brandGold">
                Our Approach
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-4xl text-brandDark dark:text-white">
              Creating <span className="font-serif italic text-brandGold">enduring value</span> through customized solution-based services.
            </h2>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {introCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-[500px] rounded-3xl overflow-hidden bg-bgLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl"
              >
                {/* Background Image with Parallax effect */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandDark/90 via-brandDark/40 to-transparent" />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white transition-all duration-500 group-hover:pb-12">
                  <div className="w-12 h-12 rounded-2xl bg-brandGold/20 backdrop-blur-md border border-brandGold/30 flex items-center justify-center mb-6 text-brandGold group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-brandGold/80 mb-2">
                    {card.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Expandable description on hover */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-sm text-white/70 leading-relaxed font-medium mb-6">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-2 text-brandGold text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Decorative Branding Element - RiskMan Logo Watermark */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none select-none">
        
        <img 
          src="/rm.png"
          alt="RiskMan Logo" 
          className="w-[1000px] h-auto block dark:hidden object-contain"
        />
        
       
        <img 
          src="/riskman-logo-white.svg"
          alt="RiskMan Logo" 
          className="w-[1000px] h-auto hidden dark:block brightness-0 invert object-contain"
        />
      </div> */}
    </div>
  );
};

export default IntroductionSection;