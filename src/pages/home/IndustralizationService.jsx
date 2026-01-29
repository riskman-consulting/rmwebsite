// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

import { Factory, HeartPulse, Home, Monitor, ShoppingCart, Zap,ArrowRight } from "lucide-react";
import { useState } from "react";

// const industriesData = [
//   {
//     title: "Energy & Utilities",
//     description: "Specialized audit and assurance services ensuring regulatory compliance and operational resilience for global energy enterprises.",
//     icon: "zap",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
//     path: "/industries/energy-utilities"
//   },
//   {
//     title: "Retail & Consumer",
//     description: "Strengthening governance, internal controls, and financial transparency across complex retail and consumer ecosystems.",
//     icon: "cart",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
//     path: "/industries/retail-consumer"
//   },
//   {
//     title: "Healthcare",
//     description: "Supporting healthcare organizations with HIPAA compliance, clinical risk, and performance assurance.",
//     icon: "heart",
//     image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
//     path: "/industries/healthcare"
//   },
//   {
//     title: "Manufacturing",
//     description: "Enhancing efficiency, supply chain controls, and environmental compliance across industrial manufacturing sectors.",
//     icon: "factory",
//     image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
//     path: "/industries/manufacturing"
//   },
//   {
//     title: "Technology",
//     description: "Helping fast-growth technology companies manage cybersecurity risk, global compliance, and digital scalability.",
//     icon: "monitor",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
//     path: "/industries/it-consulting"
//   },
//   {
//     title: "Banking & Insurance",
//     description: "Foundational audit and advisory solutions tailored for the high-stakes banking and financial insurance sectors.",
//     icon: "home",
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
//     path: "/industries/banking-insurance"
//   },
// ];

// const IconComponent = ({ type, className }) => {
//   switch (type) {
//     case 'zap': return <Zap className={className} />;
//     case 'cart': return <ShoppingCart className={className} />;
//     case 'heart': return <HeartPulse className={className} />;
//     case 'factory': return <Factory className={className} />;
//     case 'monitor': return <Monitor className={className} />;
//     case 'home': return <Home className={className} />;
//     default: return <Zap className={className} />;
//   }
// };

// export default function IndustrySpecialization() {
//   const [index, setIndex] = useState(industriesData.length);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const controls = useAnimation();

//   const industries = [...industriesData, ...industriesData, ...industriesData];
//   const cardWidth = 350;
//   const cardGap = 32; // gap-8 = 2rem = 32px
//   const offsetPerCard = cardWidth + cardGap;
//   const totalItems = industriesData.length;

//   const handleNext = useCallback(async () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     const nextIndex = index + 1;
//     setIndex(nextIndex);

//     await controls.start({
//       x: -(nextIndex * offsetPerCard),
//       transition: { type: "spring", stiffness: 100, damping: 20 }
//     });

//     if (nextIndex >= 2 * totalItems) {
//       const resetIndex = nextIndex - totalItems;
//       setIndex(resetIndex);
//       await controls.set({ x: -(resetIndex * offsetPerCard) });
//     }
//     setIsTransitioning(false);
//   }, [index, totalItems, offsetPerCard, controls, isTransitioning]);

//   const handlePrev = useCallback(async () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     const prevIndex = index - 1;
//     setIndex(prevIndex);

//     await controls.start({
//       x: -(prevIndex * offsetPerCard),
//       transition: { type: "spring", stiffness: 100, damping: 20 }
//     });

//     if (prevIndex < totalItems) {
//       const resetIndex = prevIndex + totalItems;
//       setIndex(resetIndex);
//       await controls.set({ x: -(resetIndex * offsetPerCard) });
//     }
//     setIsTransitioning(false);
//   }, [index, totalItems, offsetPerCard, controls, isTransitioning]);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const timer = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [isAutoPlaying, handleNext]);

//   // Initial set to center
//   useEffect(() => {
//     controls.set({ x: -(index * offsetPerCard) });
//   }, []);

//   return (
//     <section className="overflow-hidden transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
//       <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

//       <div className="container relative z-10">
//         <div className="flex flex-col gap-12">

//           <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="max-w-2xl space-y-6"
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
//                 <span className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent animate-pulse" />
//                 Specialized Sectors
//               </div>

//               <h2 className="text-5xl md:text-7xl font-bold font-heading text-brandDark dark:text-white leading-[1.1]">
//                 Built for <span className="text-brandPrimary dark:text-brandAccent">Critical</span> Industries.
//               </h2>

//               <p className="text-xl leading-relaxed text-brandNavy/70 dark:text-gray-400">
//                 We deliver tailored risk advisory and digital transformation solutions to the industries that power our world.
//               </p>
//             </motion.div>

//             <div className="flex items-center gap-4">
//               <Link
//                 to="/industries"
//                 className="flex items-center gap-4 font-bold group text-brandDark dark:text-white"
//               >
//                 <span className="text-lg">Explore All Industries</span>
//                 <div className="flex items-center justify-center text-white transition-transform duration-300 rounded-full shadow-xl w-14 h-14 bg-brandPrimary dark:bg-brandAccent dark:text-brandDark group-hover:scale-110">
//                   <ArrowRight className="w-6 h-6" />
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div
//             className="relative overflow-visible"
//             onMouseEnter={() => setIsAutoPlaying(false)}
//             onMouseLeave={() => setIsAutoPlaying(true)}
//           >
//             <motion.div
//               className="flex gap-8"
//               animate={controls}
//             >
//               {industries.map((industry, i) => (
//                 <motion.div
//                   key={i}
//                   className={`relative flex-shrink-0 w-[350px] h-[520px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-borderLight dark:border-borderDark shadow-xl hover:shadow-2xl transition-all duration-500`}
//                 >
//                   <Link to={industry.path} className="block w-full h-full">
//                     <img
//                       src={industry.image}
//                       alt={industry.title}
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
//                     />

//                     <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-brandDark/95 via-brandDark/40 to-transparent opacity-90 group-hover:opacity-100" />

//                     <div className="absolute inset-4 border border-white/10 rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-brandAccent/30" />

//                     <div className="absolute inset-0 flex flex-col justify-between p-10">
//                       <div className="flex items-center justify-center w-16 h-16 transition-transform duration-500 transform shadow-2xl rounded-2xl bg-brandAccent text-brandDark rotate-3 group-hover:rotate-0">
//                         <IconComponent type={industry.icon} className="w-8 h-8" />
//                       </div>

//                       <div className="space-y-4">
//                         <h3 className="text-3xl font-bold text-white font-heading">
//                           {industry.title}
//                         </h3>
//                         <p className="text-sm leading-relaxed transition-colors text-white/70 line-clamp-3 group-hover:text-white">
//                           {industry.description}
//                         </p>
//                         <div className="flex items-center gap-2 text-brandAccent font-bold text-xs uppercase tracking-[0.2em] pt-2">
//                           View details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-tr from-brandPrimary/20 to-transparent group-hover:opacity-100" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           <div className="flex justify-center pt-8">
//             <div className="flex gap-2">
//               {industriesData.map((_, i) => {
//                 const isActive = (index % totalItems) === i;
//                 return (
//                   <button
//                     key={i}
//                     onClick={() => {
//                       const diff = i - (index % totalItems);
//                       const targetIndex = index + diff;
//                       setIndex(targetIndex);
//                       controls.start({
//                         x: -(targetIndex * offsetPerCard),
//                         transition: { type: "spring", stiffness: 100, damping: 20 }
//                       });
//                       setIsAutoPlaying(false);
//                     }}
//                     className="h-2 transition-all duration-500 rounded-full"
//                     style={{
//                       width: isActive ? '40px' : '10px',
//                       backgroundColor: isActive
//                         ? 'var(--color-brandPrimary, #001F3F)'
//                         : 'rgba(0,0,0,0.1)'
//                     }}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }



// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const industriesData = [
//   {
//     id: "energy",
//     title: "Energy & Utilities",
//     description: "Specialized audit and assurance services ensuring regulatory compliance and operational resilience for global energy enterprises.",
//     icon: "zap",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
//     tag: "ENERGY SECTOR",
//     path: "/industries/energy-utilities"
//   },
//   {
//     id: "retail",
//     title: "Retail & Consumer",
//     description: "Strengthening governance, internal controls, and financial transparency across complex retail and consumer ecosystems.",
//     icon: "cart",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
//     tag: "RETAIL INDUSTRY",
//     path: "/industries/retail-consumer"
//   },
//   {
//     id: "healthcare",
//     title: "Healthcare",
//     description: "Supporting healthcare organizations with HIPAA compliance, clinical risk, and performance assurance.",
//     icon: "heart",
//     image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
//     tag: "HEALTHCARE SECTOR",
//     path: "/industries/healthcare"
//   },
//   {
//     id: "manufacturing",
//     title: "Manufacturing",
//     description: "Enhancing efficiency, supply chain controls, and environmental compliance across industrial manufacturing sectors.",
//     icon: "factory",
//     image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
//     tag: "MANUFACTURING",
//     path: "/industries/manufacturing"
//   },
//   {
//     id: "technology",
//     title: "Technology",
//     description: "Helping fast-growth technology companies manage cybersecurity risk, global compliance, and digital scalability.",
//     icon: "monitor",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
//     tag: "TECH INDUSTRY",
//     path: "/industries/it-consulting"
//   },
//   {
//     id: "banking",
//     title: "Banking & Insurance",
//     description: "Foundational audit and advisory solutions tailored for the high-stakes banking and financial insurance sectors.",
//     icon: "home",
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
//     tag: "FINANCIAL SERVICES",
//     path: "/industries/banking-insurance"
//   },
// ];

// const IconComponent = ({ type, className }) => {
//   switch (type) {
//     case 'zap': return <Zap className={className} />;
//     case 'cart': return <ShoppingCart className={className} />;
//     case 'heart': return <HeartPulse className={className} />;
//     case 'factory': return <Factory className={className} />;
//     case 'monitor': return <Monitor className={className} />;
//     case 'home': return <Home className={className} />;
//     default: return <Zap className={className} />;
//   }
// };

// export default function IndustryGrid() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [activeService, setActiveService] = useState(null);

//   return (
//     <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 max-w-4xl"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
//             <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
//             Specialized Sectors
//           </div>

//           <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//             Built for <span className="text-blue-600 dark:text-blue-400">Critical</span> Industries
//           </h2>

//           <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
//             We deliver tailored risk advisory and digital transformation solutions to the industries that power our world.
//           </p>
//         </motion.div>

//         {/* 3-Column Grid - BCG Exact Style */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {industriesData.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="relative group cursor-pointer"
//             >
//               {/* Card Container - Taller to fit content */}
//               <div className="relative h-[450px] sm:h-[480px] rounded-3xl overflow-hidden bg-white dark:bg-gray-800 transition-shadow duration-500 hover:shadow-2xl">

//                 {/* Image Container - Takes 58% of card height */}
//                 <div className="relative h-[58%] overflow-hidden">
//                   <motion.img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover"
//                     animate={{
//                       scale: hoveredCard === index ? 1.05 : 1,
//                     }}
//                     transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
//                   />

//                   {/* Icon Badge - Top Left */}
//                   <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
//                     <IconComponent type={industry.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                   </div>
//                 </div>

//                 {/* Content Area - Takes 42% of card height */}
//                 <div className="relative h-[42%] flex flex-col">

//                   {/* Default State - Only Title */}
//                   <motion.div
//                     animate={{
//                       opacity: hoveredCard === index ? 0 : 1,
//                       y: hoveredCard === index ? -10 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 flex items-center p-6 lg:p-7 bg-white dark:bg-gray-800"
//                   >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
//                       {industry.title}
//                     </h3>
//                   </motion.div>

//                   {/* Hover State - Full Content */}
//                   <motion.div
//                     animate={{
//                       opacity: hoveredCard === index ? 1 : 0,
//                       y: hoveredCard === index ? 0 : 10,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 flex flex-col justify-between p-6 lg:p-7 bg-white dark:bg-gray-800"
//                     style={{ pointerEvents: hoveredCard === index ? 'auto' : 'none' }}
//                   >
//                     <div className="flex-1 flex flex-col">
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2.5 leading-tight">
//                         {industry.title}
//                       </h3>

//                       <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 overflow-hidden">
//                         {industry.description}
//                       </p>
//                     </div>

//                     {/* Learn More Button */}
//                     <Link
//                       to={industry.path}
//                       className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full ${
//                         activeService === industry.id
//                           ? "bg-brandGold border-brandGold text-white dark:bg-brandAccent dark:border-brandAccent dark:text-brandDark"
//                           : "border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
//                       }`}
//                     >
//                       Learn more
//                       <ArrowRight
//                         size={18}
//                         className={`transition-transform duration-300 ${
//                           activeService === industry.id ? "translate-x-1" : ""
//                         }`}
//                       />
//                     </Link>
//                   </motion.div>
//                 </div>

//                 {/* Bottom Accent Bar - Slides in on hover */}
//                 <motion.div
//                   animate={{
//                     x: hoveredCard === index ? "0%" : "-100%",
//                   }}
//                   transition={{ duration: 0.5, ease: "circOut" }}
//                   className="absolute bottom-0 left-0 h-1 w-full bg-gray-900 dark:bg-blue-400 z-10"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const industriesData = [
//   {
//     id: "energy",
//     title: "Energy & Utilities",
//     description: "Specialized audit and assurance services ensuring regulatory compliance and operational resilience for global energy enterprises.",
//     icon: "zap",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
//     tag: "ENERGY SECTOR",
//     path: "/industries/energy-utilities"
//   },
//   {
//     id: "retail",
//     title: "Retail & Consumer",
//     description: "Strengthening governance, internal controls, and financial transparency across complex retail and consumer ecosystems.",
//     icon: "cart",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
//     tag: "RETAIL INDUSTRY",
//     path: "/industries/retail-consumer"
//   },
//   {
//     id: "healthcare",
//     title: "Healthcare",
//     description: "Supporting healthcare organizations with HIPAA compliance, clinical risk, and performance assurance.",
//     icon: "heart",
//     image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
//     tag: "HEALTHCARE SECTOR",
//     path: "/industries/healthcare"
//   },
//   {
//     id: "manufacturing",
//     title: "Manufacturing",
//     description: "Enhancing efficiency, supply chain controls, and environmental compliance across industrial manufacturing sectors.",
//     icon: "factory",
//     image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
//     tag: "MANUFACTURING",
//     path: "/industries/manufacturing"
//   },
//   {
//     id: "technology",
//     title: "Technology",
//     description: "Helping fast-growth technology companies manage cybersecurity risk, global compliance, and digital scalability.",
//     icon: "monitor",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
//     tag: "TECH INDUSTRY",
//     path: "/industries/it-consulting"
//   },
//   {
//     id: "banking",
//     title: "Banking & Insurance",
//     description: "Foundational audit and advisory solutions tailored for the high-stakes banking and financial insurance sectors.",
//     icon: "home",
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
//     tag: "FINANCIAL SERVICES",
//     path: "/industries/banking-insurance"
//   },
// ];

// const IconComponent = ({ type, className }) => {
//   switch (type) {
//     case 'zap': return <Zap className={className} />;
//     case 'cart': return <ShoppingCart className={className} />;
//     case 'heart': return <HeartPulse className={className} />;
//     case 'factory': return <Factory className={className} />;
//     case 'monitor': return <Monitor className={className} />;
//     case 'home': return <Home className={className} />;
//     default: return <Zap className={className} />;
//   }
// };

// export default function IndustryGrid() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [activeService, setActiveService] = useState(null);

//   return (
//     <section className="py-20 px-4 bg-bgLight dark:bg-bgDark transition-colors duration-300">
//       <div className="max-w-7xl mx-auto">

//         <div className="container relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 max-w-4xl"
//         >


//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-brandDark dark:text-brandAccent">
//             <span className="w-2 h-2 rounded-full bg-brandDark dark:bg-brandAccent animate-pulse" />
//             Specialized Sectors
//           </div>

//           <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//             Built for <span className="text-brandDark text-600 dark:text-brandAccent">Critical</span> Industries
//           </h2>

//           <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
//             We deliver tailored risk advisory and digital transformation solutions to the industries that power our world.
//           </p>
//         </motion.div>

//         {/* 3-Column Grid - BCG Exact Style */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {industriesData.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="relative group"
//             >
//               {/* Card Container - Taller to fit content */}
//               <Link
//                 to={industry.path}
//                 className="relative block h-[450px] sm:h-[480px] rounded-3xl overflow-hidden bg-bgLight dark:bg-bgDark transition-shadow duration-500 hover:shadow-2xl cursor-pointer"
//               >

//                 {/* Image Container - Takes 58% of card height */}
//                 <div className="relative h-[58%] overflow-hidden">
//                   <motion.img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover"
//                     animate={{
//                       scale: hoveredCard === index ? 1.05 : 1,
//                     }}
//                     transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
//                   />

//                   {/* Icon Badge - Top Left */}
//                   <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
//                     <IconComponent type={industry.icon} className="w-6 h-6 text-brandDark dark:text-brandAccent" />
//                   </div>
//                 </div>

//                 {/* Content Area - Takes 42% of card height */}
//                 <div className="relative h-[42%] flex flex-col">

//                   {/* Default State - Only Title */}
//                   <motion.div
//                     animate={{
//                       opacity: hoveredCard === index ? 0 : 1,
//                       y: hoveredCard === index ? -10 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 flex items-center p-6 lg:p-7 bg-white dark:bg-gray-800"
//                   >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
//                       {industry.title}
//                     </h3>
//                   </motion.div>

//                   {/* Hover State - Full Content */}
//                   <motion.div
//                     animate={{
//                       opacity: hoveredCard === index ? 1 : 0,
//                       y: hoveredCard === index ? 0 : 10,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 flex flex-col justify-between p-6 lg:p-7 bg-white dark:bg-gray-800"
//                     style={{ pointerEvents: hoveredCard === index ? 'auto' : 'none' }}
//                   >
//                     <div className="flex-1 flex flex-col">
//                       <h3 className="text-lg sm:text-xl font-bold text-brandDark dark:text-white mb-2.5 leading-tight">
//                         {industry.title}
//                       </h3>

//                       <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 overflow-hidden">
//                         {industry.description}
//                       </p>
//                     </div>

//                     {/* Learn More Button */}
//                     <button
//                       className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-300 border-2 rounded-full ${
//                         activeService === industry.id
//                           ? "bg-brandGold border-brandGold text-white dark:bg-brandAccent dark:border-brandAccent dark:text-brandDark"
//                           : "border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
//                       }`}
//                     >
//                       Learn more
//                       <ArrowRight
//                         size={16}
//                         className={`transition-transform duration-300 ${
//                           activeService === industry.id ? "translate-x-1" : ""
//                         }`}
//                       />
//                     </button>
//                   </motion.div>
//                 </div>

//                 {/* Bottom Accent Bar - Slides in on hover */}
//                 <motion.div
//                   animate={{
//                     x: hoveredCard === index ? "0%" : "-100%",
//                   }}
//                   transition={{ duration: 0.5, ease: "circOut" }}
//                   className="absolute bottom-0 left-0 h-1 w-full bg-brandDark dark:bg-brandAccent z-10"
//                 />
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";

// import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";

// const industriesData = [

//   {

//     id: "energy",

//     title: "Energy & Utilities",

//     description: "Navigating the Transition to a Sustainable Future As the sector pivots toward decarbonization and grid modernization, we help energy leaders manage the dual challenges of regulatory evolution and operational risk. Our expertise in ESG Advisory and GHG Accounting ensures transparency, while our internal audit frameworks safeguard critical infrastructure.",

//     icon: "zap",

//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",

//     tag: "ENERGY SECTOR",

//     path: "/industries/energy-utilities",
//     marquee:"Trusted by industry giants such as Coal India, Renewables, and India Power."

//   },

//   {

//     id: "retail",

//     title: "Retail & Consumer",

//     description: "Building Agility in a Hyper-Connected Market In an era of rapid digital shift and supply chain volatility, we provide the assurance necessary to protect brand reputation and consumer trust. We focus on Process Mining to optimize lean operations and Data Privacy to secure the expanding digital footprint of modern retail.",

//     icon: "cart",

//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",

//     tag: "RETAIL INDUSTRY",

//     path: "/industries/retail-consumer",
//     marquee:"Partnering with market leaders like Zomato, Blinkit, Spencer’s, Khadim, and Pernod Ricard."

//   },

//   {

//     id: "healthcare",

//     title: "Healthcare & Life Sciences",

//     description: "Ensuring Integrity in High-Stakes Environments The healthcare sector faces a rigorous landscape of data protection (DPDP/HIPAA) and financial compliance. We deliver specialized IT Risk Management and Forensic Investigations to ensure your operations meet the highest standards of integrity and patient data security.",

//     icon: "heart",

//     image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",

//     tag: "HEALTHCARE SECTOR",

//     path: "/industries/healthcare",
//     marquee:"Providing strategic assurance for organizations like Care Health."

//   },

//   {

//     id: "manufacturing",

//     title: "Manufacturing Mining",

//     description:"Optimizing Performance Through Digital Transformation From Industry 4.0 integrations to global supply chain disruptions, we help manufacturers modernize safely. Our team focuses on Robotic Process Automation (RPA) and Risk-Based Internal Audits to enhance cost-efficiency and operational transparency.",

//     icon: "factory",

//     image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",

//     tag: "MANUFACTURING",

//     path: "/industries/manufacturing",
//     marquee:"Proven track record with industrial heavyweights including Jindal, Electrosteel, Indorama, and Kariwala."

//   },

//   {

//     id: "technology",

//     title: "Technology & ED-Tech",

//     description:"Securing the Frontier of Innovation For high-growth tech firms, speed must be balanced with security. We provide the SOC 1/2/3 and ISO 27001 certifications that global clients demand, ensuring your platforms are built on a foundation of trust and robust cybersecurity.",

//     icon: "monitor",

//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",

//     tag: "TECH INDUSTRY",

//     path: "/industries/it-consulting",
//     marquee:"Empowering innovators such as Nexval, Innovist, and leading Ed-Tech & Vocational Training ventures."

//   },

//   {

//     id: "banking",

//     title: "Banking & Financial Services(BFSI)",

//     description:"Driving Stability in a Changing Regulatory Landscape With leadership experience from the World Bank and the Big 4, we offer unparalleled depth in Credit Rating Advisory, Debt Structuring, and IFC/SOX compliance. We help financial institutions navigate evolving ESG regulations and digital operational resilience.",

//     icon: "home",

//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",

//     tag: "FINANCIAL SERVICES",

//     path: "/industries/banking-insurance",
//     marquee:" Leveraging decades of experience with global institutions like The World Bank and IDFC FIRST Bank."

//   },

// ];

// const IconComponent = ({ type, className }) => {

//   switch (type) {

//     case 'zap': return <Zap className={className} />;

//     case 'cart': return <ShoppingCart className={className} />;

//     case 'heart': return <HeartPulse className={className} />;

//     case 'factory': return <Factory className={className} />;

//     case 'monitor': return <Monitor className={className} />;

//     case 'home': return <Home className={className} />;

//     default: return <Zap className={className} />;

//   }

// };

// export default function IndustryGrid() {

//   const [hoveredCard, setHoveredCard] = useState(null);

//   const [activeService, setActiveService] = useState(null);

//   return (
//     <section className=" bg-bgLight dark:bg-bgDark pb-5 transition-colors duration-300">
//       <div className="container">

//         {/* Header */}
//         <div className="mb-16 max-w-4xl">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-brandDark dark:text-brandAccent">
//             <span className="w-2 h-2 rounded-full bg-brandDark dark:bg-brandAccent animate-pulse" />

//             Specialized Sectors
//           </div>
//           <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">

//             Core Industries We Serve
//           </h2>
//           <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">

//             At RiskMan, we specialize in transforming industry-specific complexities into strategic opportunities. Our "Propreneurial" approach ensures that your organization remains resilient, compliant, and competitive across global markets.
//           </p>
//         </div>

//         {/* 3-Column Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

//           {industriesData.map((industry, index) => (
//             <div

//               key={index}

//               onMouseEnter={() => setHoveredCard(index)}

//               onMouseLeave={() => setHoveredCard(null)}

//               className="relative group"
//             >

//               {/* Card Container */}
//               <a

//                 href={industry.path}

//                 className="relative block h-[450px] sm:h-[480px] rounded-3xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark transition-shadow duration-500 hover:shadow-2xl cursor-pointer"
//               >

//                 {/* Image Container - Takes 58% of card height */}
//                 <div className="relative h-[58%] overflow-hidden">
//                   <img

//                     src={industry.image}

//                     alt={industry.title}

//                     className="w-full h-full object-cover transition-transform duration-600"

//                     style={{

//                       transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',

//                     }}

//                   />

//                   {/* Icon Badge - Top Left */}
//                   <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
//                     <IconComponent type={industry.icon} className="w-6 h-6 text-brandDark dark:text-brandAccent" />
//                   </div>
//                 </div>

//                 {/* Content Area - Takes 42% of card height */}
//                 <div className="relative h-[42%] flex flex-col">

//                   {/* Default State - Only Title */}
//                   <div

//                     className="absolute inset-0 flex items-center p-6 lg:p-7 bg-surfaceLight dark:bg-surfaceDark transition-all duration-300"

//                     style={{

//                       opacity: hoveredCard === index ? 0 : 1,

//                       transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',

//                     }}
//                   >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">

//                       {industry.title}
//                     </h3>
//                   </div>

//                   {/* Hover State - Full Content */}
//                   <div

//                     className="absolute inset-0 flex flex-col justify-between p-6 lg:p-7 bg-surfaceLight dark:bg-surfaceDark transition-all duration-300"

//                     style={{

//                       opacity: hoveredCard === index ? 1 : 0,

//                       transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)',

//                       pointerEvents: hoveredCard === index ? 'auto' : 'none',

//                     }}
//                   >
//                     <div className="flex-1 flex flex-col">
//                       <h3 className="text-lg sm:text-xl font-bold text-brandDark dark:text-white mb-2.5 leading-tight">

//                         {industry.title}
//                       </h3>
//                       <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 overflow-hidden">

//                         {industry.description}
//                       </p>
//                     </div>

//                     {/* Learn More Button */}
//                     <button

//                       className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full w-fit ${activeService === industry.id

//                           ? "bg-brandGold text-white dark:bg-brandAccent dark:text-brandDark"

//                           : "bg-brandDark text-white hover:bg-brandNavy dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"

//                         }`}
//                     >

//                       Learn more
//                       <ArrowRight

//                         size={16}

//                         className={`transition-transform duration-300 ${activeService === industry.id ? "translate-x-1" : ""

//                           }`}

//                       />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Bottom Accent Bar - Slides in on hover */}
//                 <div

//                   className="absolute bottom-0 left-0 h-1 w-full bg-brandDark dark:bg-brandAccent z-10 transition-transform duration-500"

//                   style={{

//                     transform: hoveredCard === index ? 'translateX(0%)' : 'translateX(-100%)',

//                   }}

//                 />
//               </a>
//             </div>

//           ))}
//         </div>
//       </div>
//     </section>

//   );

// }


// import { useState } from "react";
// import {
//   Zap,
//   ShoppingCart,
//   HeartPulse,
//   Factory,
//   Monitor,
//   Home,
//   ArrowRight,
// } from "lucide-react";

// /* ================= DATA ================= */
// const industriesData = [
//   {
//     id: "energy",
//     title: "Energy & Utilities",
//     description:
//       "Navigating the Transition to a Sustainable Future As the sector pivots toward decarbonization and grid modernization, we help energy leaders manage the dual challenges of regulatory evolution and operational risk.",
//     icon: "zap",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
//     path: "/industries/energy-utilities",
//     marquee:
//       "Trusted by industry giants such as Coal India, Renewables, and India Power.",
//   },
//   {
//     id: "retail",
//     title: "Retail & Consumer",
//     description:
//       "Building Agility in a Hyper-Connected Market. We provide assurance to protect brand reputation and consumer trust through process optimization and data privacy.",
//     icon: "cart",
//     image:
//       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
//     path: "/industries/retail-consumer",
//     marquee:
//       "Partnering with leaders like Zomato, Blinkit, Spencer’s, Khadim, and Pernod Ricard.",
//   },
//   {
//     id: "healthcare",
//     title: "Healthcare & Life Sciences",
//     description:
//       "Ensuring integrity in high-stakes environments through IT risk management, forensic investigations, and patient data security compliance.",
//     icon: "heart",
//     image:
//       "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
//     path: "/industries/healthcare",
//     marquee:
//       "Providing strategic assurance for organizations like Care Health.",
//   },
//   {
//     id: "manufacturing",
//     title: "Manufacturing & Mining",
//     description:
//       "Optimizing performance through Industry 4.0, RPA adoption, and risk-based internal audits.",
//     icon: "factory",
//     image:
//       "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
//     path: "/industries/manufacturing",
//     marquee:
//       "Trusted by Jindal, Electrosteel, Indorama, and Kariwala.",
//   },
//   {
//     id: "technology",
//     title: "Technology & Ed-Tech",
//     description:
//       "Securing innovation with SOC and ISO certifications, ensuring trust and cybersecurity resilience.",
//     icon: "monitor",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
//     path: "/industries/it-consulting",
//     marquee:
//       "Empowering Nexval, Innovist, and leading Ed-Tech ventures.",
//   },
//   {
//     id: "banking",
//     title: "Banking & Financial Services (BFSI)",
//     description:
//       "Driving stability through credit advisory, debt structuring, and global regulatory compliance.",
//     icon: "home",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
//     path: "/industries/banking-insurance",
//     marquee:
//       "Experience with The World Bank, IDFC FIRST Bank, and global institutions.",
//   },
// ];

// /* ================= ICON ================= */
// const IconComponent = ({ type, className }) => {
//   switch (type) {
//     case "zap":
//       return <Zap className={className} />;
//     case "cart":
//       return <ShoppingCart className={className} />;
//     case "heart":
//       return <HeartPulse className={className} />;
//     case "factory":
//       return <Factory className={className} />;
//     case "monitor":
//       return <Monitor className={className} />;
//     case "home":
//       return <Home className={className} />;
//     default:
//       return <Zap className={className} />;
//   }
// };

// /* ================= COMPONENT ================= */
// export default function IndustryGrid() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section className="bg-bgLight dark:bg-bgDark pb-10 transition-colors duration-300">
//       <div className="container">

//         {/* HEADER */}
//         <div className="mb-16 max-w-4xl">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-brandDark dark:text-brandAccent">
//             <span className="w-2 h-2 rounded-full bg-brandDark dark:bg-brandAccent animate-pulse" />
//             Specialized Sectors
//           </div>

//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
//             Core Industries We Serve
//           </h2>

//           <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
//             At RiskMan, we transform industry-specific complexities into
//             strategic opportunities using a propreneurial consulting approach.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {industriesData.map((industry, index) => (
//             <div
//               key={industry.id}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="relative group"
//             >
//               <a
//                 href={industry.path}
//                 className="relative block h-[480px] rounded-3xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark hover:shadow-2xl transition-shadow"
//               >
//                 {/* IMAGE */}
//                 <div className="relative h-[58%] overflow-hidden">
//                   <img
//                     src={industry.image}
//                     alt={industry.title}
//                     className="w-full h-full object-cover transition-transform duration-500"
//                     style={{
//                       transform:
//                         hoveredCard === index ? "scale(1.05)" : "scale(1)",
//                     }}
//                   />

//                   <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center">
//                     <IconComponent
//                       type={industry.icon}
//                       className="w-6 h-6 text-brandDark dark:text-brandAccent"
//                     />
//                   </div>
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="relative h-[42%] overflow-hidden">

//                   {/* INITIAL STATE — TITLE ONLY */}
//                   <div
//                     className="absolute inset-0 flex items-center justify-center px-6 bg-surfaceLight dark:bg-surfaceDark transition-all duration-300"
//                     style={{
//                       opacity: hoveredCard === index ? 0 : 1,
//                       transform: hoveredCard === index
//                         ? "translateY(-12px)"
//                         : "translateY(0)",
//                     }}
//                   >
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center leading-tight">
//                       {industry.title}
//                     </h3>
//                   </div>

//                   {/* HOVER STATE — FULL CONTENT */}
//                   <div
//                     className="absolute inset-0 flex flex-col p-6 bg-surfaceLight dark:bg-surfaceDark transition-all duration-300"
//                     style={{
//                       opacity: hoveredCard === index ? 1 : 0,
//                       transform: hoveredCard === index
//                         ? "translateY(0)"
//                         : "translateY(12px)",
//                       pointerEvents:
//                         hoveredCard === index ? "auto" : "none",
//                     }}
//                   >
//                     {/* TEXT */}
//                     <div className="flex-1 flex flex-col overflow-hidden">
//                       <h3 className="text-lg font-bold text-brandDark dark:text-white mb-2">
//                         {industry.title}
//                       </h3>

//                       <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
//                         {industry.description}
//                       </p>

//                       {/* MARQUEE — GUARANTEED VISIBLE */}
//                       <div className="relative h-7 overflow-hidden border-t border-borderLight dark:border-borderDark pt-2 mt-auto">
//                         <div
//                           className="absolute left-full whitespace-nowrap text-xs font-semibold text-brandNavy dark:text-brandAccent"
//                           style={{
//                             animation: "marquee 12s linear infinite",
//                           }}
//                         >
//                           {industry.marquee}
//                         </div>
//                       </div>
//                     </div>

//                     {/* BUTTON */}
//                     <button className="inline-flex items-center gap-2 px-6 py-2.5 mt-4 text-sm font-semibold rounded-full bg-brandDark text-white hover:bg-brandNavy dark:bg-brandAccent dark:text-brandDark">
//                       Learn more
//                       <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* ACCENT BAR */}
//                 <div
//                   className="absolute bottom-0 left-0 h-1 w-full bg-brandDark dark:bg-brandAccent transition-transform duration-500"
//                   style={{
//                     transform:
//                       hoveredCard === index
//                         ? "translateX(0%)"
//                         : "translateX(-100%)",
//                   }}
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


 
// import { Zap, ShoppingCart, HeartPulse, Factory, Monitor, Home, ArrowRight } from "lucide-react";
 

const industriesData = [
  {
    id: "energy",
    title: "Energy & Utilities",
    subtitle: "Navigating the Transition to a Sustainable Future",
    description: "As the sector pivots toward decarbonization and grid modernization, we help energy leaders manage the dual challenges of regulatory evolution and operational risk. Our expertise in ESG Advisory and GHG Accounting ensures transparency, while our internal audit frameworks safeguard critical infrastructure.",
    marquee: "Trusted by industry giants such as Coal India, Renewables, and India Power.",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1000&fit=crop",
    tag: "ENERGY SECTOR",
    path: "/industries/energy-utilities"
  },
  {
    id: "retail",
    title: "Retail & Consumer",
    subtitle: "Building Agility in a Hyper-Connected Market",
    description: "In an era of rapid digital shift and supply chain volatility, we provide the assurance necessary to protect brand reputation and consumer trust. We focus on Process Mining to optimize lean operations and Data Privacy to secure the expanding digital footprint of modern retail.",
    marquee: "Partnering with market leaders like Zomato, Blinkit, Spencer's, Khadim, and Pernod Ricard.",
    icon: "cart",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop",
    tag: "RETAIL INDUSTRY",
    path: "/industries/retail-consumer"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Ensuring Integrity in High-Stakes Environments",
    description: "The healthcare sector faces a rigorous landscape of data protection (DPDP/HIPAA) and financial compliance. We deliver specialized IT Risk Management and Forensic Investigations to ensure your operations meet the highest standards of integrity and patient data security.",
    marquee: "Providing strategic assurance for organizations like Care Health.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=1000&fit=crop",
    tag: "HEALTHCARE SECTOR",
    path: "/industries/healthcare"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Mining",
    subtitle: "Optimizing Performance Through Digital Transformation",
    description: "From Industry 4.0 integrations to global supply chain disruptions, we help manufacturers modernize safely. Our team focuses on Robotic Process Automation (RPA) and Risk-Based Internal Audits to enhance cost-efficiency and operational transparency.",
    marquee: "Proven track record with industrial heavyweights including Jindal, Electrosteel, Indorama, and Kariwala.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=1000&fit=crop",
    tag: "MANUFACTURING",
    path: "/industries/manufacturing"
  },
  {
    id: "technology",
    title: "Technology & Ed-Tech",
    subtitle: "Securing the Frontier of Innovation",
    description: "For high-growth tech firms, speed must be balanced with security. We provide the SOC 1/2/3 and ISO 27001 certifications that global clients demand, ensuring your platforms are built on a foundation of trust and robust cybersecurity.",
    marquee: "Empowering innovators such as Nexval, Innovist, and leading Ed-Tech & Vocational Training ventures.",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
    tag: "TECH INDUSTRY",
    path: "/industries/it-consulting"
  },
  {
    id: "banking",
    title: "Banking & Financial Services",
    subtitle: "Driving Stability in a Changing Regulatory Landscape",
    description: "With leadership experience from the World Bank and the Big 4, we offer unparalleled depth in Credit Rating Advisory, Debt Structuring, and IFC/SOX compliance. We help financial institutions navigate evolving ESG regulations and digital operational resilience.",
    marquee: "Leveraging decades of experience with global institutions like The World Bank and IDFC FIRST Bank.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
    tag: "FINANCIAL SERVICES",
    path: "/industries/banking-insurance"
  },
];


const IconComponent = ({ type, className }) => {
  const icons = {
    zap: <Zap className={className} />,
    cart: <ShoppingCart className={className} />,
    heart: <HeartPulse className={className} />,
    factory: <Factory className={className} />,
    monitor: <Monitor className={className} />,
    home: <Home className={className} />,
  };
  return icons[type] || <Zap className={className} />;
};
 
export function IndustryGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const [hoverTimer, setHoverTimer] = useState(null);

  const handleImageHover = (path) => {
    // Navigate to the page after hovering on image
    const timer = setTimeout(() => {
      window.location.href = path;
    }, 1000);
    setHoverTimer(timer);
  };

  const handleImageLeave = () => {
    // Cancel navigation if mouse leaves image
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
  };
 
  return (
    <section className="py-4 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 sm:py-8">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
       
        {/* Header Section */}
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-blue-900 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              <span className="w-2 h-2 bg-blue-900 rounded-full dark:bg-blue-400 animate-pulse" />
              Specialized Sectors
            </div>
            <h2 className="mb-6 text-4xl font-black text-gray-900 dark:text-white">
              Built for <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Critical</span> Industries
            </h2>
          </div>
        </div>
 
        {/* The Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-3xl dark:bg-gray-800"
            >
              {/* Image Section */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onMouseEnter={() => {
                  setHoveredCard(index);
                  handleImageHover(industry.path);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  handleImageLeave();
                }}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: hoveredCard === index ? 'brightness(0.7)' : 'brightness(0.9)',
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-xl top-5 left-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
                  <IconComponent type={industry.icon} className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="absolute z-20 flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-xl top-5 right-5">
                  <span className="font-bold text-black">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1.5 bg-yellow-500 transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Content Section - Always Visible */}
              <div className="flex flex-col flex-1 p-6 transition-all duration-500 bg-white dark:bg-gray-800 group-hover:shadow-xl">
                <h3 className="mb-2 text-2xl font-black text-gray-900 dark:text-white">
                  {industry.title}
                </h3>
                
                <h4 className="mb-3 text-sm font-bold tracking-tight text-yellow-600 uppercase dark:text-yellow-400">
                  {industry.subtitle}
                </h4>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {industry.description}
                </p>
                
                <div className="p-4 mt-auto bg-gray-100 border-l-4 border-yellow-500 rounded-r-lg dark:bg-gray-700/50 backdrop-blur-md">
                  <p className="text-xs italic leading-tight text-gray-800 dark:text-gray-200">
                    {industry.marquee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Industries Link */}
        <div className="flex justify-end mt-12">
          <a 
            href="/industries" 
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-yellow-500 transition-all duration-300 bg-gray-800 rounded-full hover:gap-5 group dark:bg-yellow-500 dark:text-gray-900 hover:shadow-2xl hover:scale-105"
          >
            View All Industries
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
 
export default IndustryGrid;