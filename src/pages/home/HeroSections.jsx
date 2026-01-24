// import React, { useEffect, useState } from "react";
// // import { Shield, TrendingUp } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import HeroSection1 from "../../assets/images/hero-section.jpg";

// // /* ================= COUNTER ================= */
// // const StatCounter = ({ end, suffix = "", label, subLabel }) => {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     let start = 0;
// //     const duration = 2000;
// //     const increment = end / (duration / 16);

// //     const timer = setInterval(() => {
// //       start += increment;
// //       if (start >= end) {
// //         setCount(end);
// //         clearInterval(timer);
// //       } else {
// //         setCount(Math.ceil(start));
// //       }
// //     }, 16);

// //     return () => clearInterval(timer);
// //   }, [end]);

//   return (
//      <div className="flex flex-col gap-1">
// /       <div className="text-3xl font-extrabold text-yellow-600 lg:text-4xl xl:text-5xl dark:text-yellow-400">
// //         {count}{suffix}
// //       </div>
// //       <div className="text-sm font-bold uppercase lg:text-base text-brandDark dark:text-white">
// //         {label}
// //       </div>
// //       <div className="text-xs lg:text-sm text-brandNavy dark:text-gray-400">        {subLabel}
//       </div>    
//       </div>
//    );
//  };

// // /* ================= HERO ================= */
// // export default function HeroSection() {
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   return (
// //     <section className="relative overflow-hidden bg-bgLight dark:bg-bgDark">
// //       {/* Offset content by header height + proper padding */}
// //       <div className="pt-[110px] pb-12 lg:pt-[140px] lg:pb-16">
// //         {/* ✅ CONSISTENT CONTAINER */}
// //         <div className="container">
// //           {/* ✅ PROPER VERTICAL CENTERING GRID */}
// //           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

// //             {/* ================= LEFT COLUMN ================= */}
// //             <div className="flex flex-col justify-center">
// //               {/* ✅ RESTORED BADGE */}
// //               <div
// //                 className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8
// //                   rounded-full bg-gray-900/5 dark:bg-white/5
// //                   border border-gray-900/10 dark:border-white/10
// //                   text-sm font-bold text-gray-900/80 dark:text-white/80
// //                   backdrop-blur-sm transition-all duration-700 w-fit
// //                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
// //                 `}
// //               >
// //                 <span className="text-lg text-yellow-600 dark:text-yellow-400">✦</span>
// //                 Empowering Business Growth
// //               </div>

// //               <h1
// //                 className={`mb-6 lg:mb-8 font-extrabold tracking-tight
// //                   text-brandDark dark:text-brandLight
// //                   text-[42px] sm:text-[38px] md:text-[46px]
// //                   lg:text-[50px] xl:text-[60px]
// //                   leading-[1.1] transition-all duration-700 delay-100
// //                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
// //                 `}
// //               >
// //                 <span className="block">Clarity, Risk Value </span>
// //                 <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">
// //                   & Assurance
// //                 </span>
// //               </h1>

// //               <p
// //                 className={`max-w-xl mb-10 lg:mb-12 text-base lg:text-lg text-brandNavy dark:text-gray-300
// //                   transition-all duration-700 delay-200 leading-relaxed
// //                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
// //                 `}
// //               >
// //                 Empowering your business with precise audits, trusted insights,
// //                 and assurance services that drive transparency and growth.
// //               </p>

// //               <div
// //                 className={`flex flex-wrap gap-4 mb-12 lg:mb-16 transition-all duration-700 delay-300
// //                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
// //                 `}
// //               >
// //                 <Link
// //                   to="/contact"
// //                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold text-white transition rounded-xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105 shadow-lg"
// //                 >
// //                   Get Started
// //                 </Link>

// //                 <Link
// //                   to="/about"
// //                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold transition border rounded-xl text-brandDark dark:text-white border-borderLight dark:border-borderDark hover:bg-black/5 dark:hover:bg-white/5"
// //                 >
// //                   Learn More
// //                 </Link>
// //               </div>

// //               <div
// //                 className={`grid grid-cols-3 gap-6 lg:gap-12 pt-8 lg:pt-10
// //                   border-t border-borderLight dark:border-borderDark
// //                   transition-all duration-700 delay-500
// //                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
// //                 `}
// //               >
// //                 <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
// //                 <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
// //                 <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
// //               </div>
// //             </div>

// //             {/* ================= RIGHT COLUMN ================= */}
// //             <div
// //               className={`relative flex items-center justify-center lg:justify-end
// //                 transition-all duration-1000 delay-200
// //                 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
// //               `}
// //             >
// //               <div className="relative w-full max-w-[600px]">
// //                 {/* Main Image */}
// //                 <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark">
// //                   <img
// //                     src={HeroSection1}
// //                     alt="Professional Audit Team"
// //                     className="w-full aspect-[4/3] object-cover"
// //                   />
// //                 </div>

// //                 {/* Floating Card - Top Right */}
// //                 <div className="absolute p-4 border shadow-xl lg:p-6 top-4 lg:top-6 -right-2 lg:right-6 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur">
// //                   <div className="flex items-center gap-3">
// //                     <div className="flex items-center justify-center w-10 h-10 text-yellow-600 rounded-lg lg:w-12 lg:h-12 bg-yellow-600/20 dark:bg-yellow-400/20 dark:text-yellow-400">
// //                       <Shield size={20} className="lg:w-6 lg:h-6" />
// //                     </div>
// //                     <div>
// //                       <p className="text-sm font-bold lg:text-base dark:text-white">Trusted Verification</p>
// //                       <p className="text-[10px] lg:text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
// //                         ISO Certified Standards
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Floating Card - Bottom Left */}
// //                 <div className="absolute p-4 text-white shadow-xl lg:p-6 bottom-4 lg:bottom-6 -left-2 lg:left-6 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-500">
// //                   <div className="flex items-center gap-3">
// //                     <div className="flex items-center justify-center w-10 h-10 rounded-lg lg:w-12 lg:h-12 bg-white/20">
// //                       <TrendingUp size={20} className="lg:w-6 lg:h-6" />
// //                     </div>
// //                     <div>
// //                       <p className="text-lg font-bold lg:text-xl">15+ Years</p>
// //                       <p className="text-xs opacity-90">Trusted Service</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useEffect, useState, useRef } from "react";
// import { Shield, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import HeroSection1 from "../../assets/images/hero-section.jpg";

// /* ================= CONSTANTS ================= */
// const ANIMATION_DURATION = 2000;
// const ANIMATION_FRAME_RATE = 16;
// const STAGGER_DELAYS = {
//   badge: 0,
//   heading: 100,
//   description: 200,
//   buttons: 300,
//   stats: 500,
//   image: 200,
// };

// /* ================= COUNTER ================= */
// const StatCounter = React.memo(({ end, suffix = "", label, subLabel }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     const increment = end / (ANIMATION_DURATION / ANIMATION_FRAME_RATE);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, ANIMATION_FRAME_RATE);

//     return () => clearInterval(timer);
//   }, [end, isVisible]);

//   return (
//     <div ref={counterRef} className="flex flex-col gap-1">
//       <div 
//         className="text-3xl font-extrabold text-yellow-600 lg:text-4xl xl:text-5xl dark:text-yellow-400"
//         aria-live="polite"
//       >
//         {count}{suffix}
//       </div>
//       <div className="text-sm font-bold uppercase lg:text-base text-brandDark dark:text-white">
//         {label}
//       </div>
//       <div className="text-xs lg:text-sm text-brandNavy dark:text-gray-400">
//         {subLabel}
//       </div>
//     </div>
//   );
// });

// StatCounter.displayName = "StatCounter";

// /* ================= HERO ================= */
// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     if (prefersReducedMotion) {
//       setMounted(true);
//       return;
//     }

//     // Trigger animations with slight delay for better UX
//     const timer = setTimeout(() => setMounted(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative overflow-hidden bg-bgLight dark:bg-bgDark"
//       aria-labelledby="hero-heading"
//     >
//       {/* Offset content by header height + proper padding */}
//       <div className="pt-[110px] pb-12 lg:pt-[140px] lg:pb-16">
//         <div className="container">
//           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

//             {/* ================= LEFT COLUMN ================= */}
//             <div className="flex flex-col justify-center">
//               {/* Badge */}
//               <div
//                 className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8
//                   rounded-full bg-gray-900/5 dark:bg-white/5
//                   border border-gray-900/10 dark:border-white/10
//                   text-sm font-bold text-gray-900/80 dark:text-white/80
//                   backdrop-blur-sm w-fit
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.badge}ms` }}
//                 role="status"
//               >
//                 <span className="text-lg text-yellow-600 dark:text-yellow-400" aria-hidden="true">✦</span>
//                 <span>Empowering Business Growth</span>
//               </div>

//               {/* <h1
//                 id="hero-heading "
//                 className={`mb-6  lg:mb-8 font-extrabold tracking-tight
//                   text-brandDark dark:text-brandLight
//                   text-[42px] sm:text-[38px] md:text-[46px]
//                   lg:text-[50px] xl:text-[60px]
//                   leading-[1.1]
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.heading}ms` }}
//               >
//                 <span className="block">Risk Value,Risk Advisory</span>
//                 <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">
//                   & Assurance
//                 </span>
//               </h1> */}

//              <h1
//               id="hero-heading"
//               className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-extrabold mb-8 text-brandDark dark:text-brandLight tracking-tight transition-all duration-700 ease-out ${
//                 mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//               }`}
//               style={{ transitionDelay: `${STAGGER_DELAYS.heading}ms` }}
//             >
//               <span className="block">Risk Value, Risk Advisory</span>
//               <span className="block">
//                 & <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Assurance</span>
//               </span>
//             </h1>

//               <p
//                 className={`max-w-xl mb-10 lg:mb-12 text-base lg:text-lg text-brandNavy dark:text-gray-300
//                   leading-relaxed
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.description}ms` }}
//               >
//                 Empowering your business with precise audits, trusted insights,
//                 and assurance services that drive transparency and growth.
//               </p>

//               <div
//                 className={`flex flex-wrap gap-4 mb-12 lg:mb-16
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.buttons}ms` }}
//               >
//                 <Link
//                   to="/contact"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold text-white 
//                     transition-all duration-300 rounded-xl 
//                     bg-brandDark dark:bg-brandAccent dark:text-brandDark 
//                     hover:scale-105 active:scale-95
//                     shadow-lg hover:shadow-xl
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Get started with our services"
//                 >
//                   Get Started
//                 </Link>

//                 <Link
//                   to="/about"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold 
//                     transition-all duration-300 border rounded-xl 
//                     text-brandDark dark:text-white 
//                     border-borderLight dark:border-borderDark 
//                     hover:bg-black/5 dark:hover:bg-white/5
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Learn more about our company"
//                 >
//                   Learn More
//                 </Link>
//               </div>

//               {/* <div
//                 className={`grid grid-cols-3 gap-6 lg:gap-12 pt-8 lg:pt-10
//                   border-t border-borderLight dark:border-borderDark
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.stats}ms` }}
//                 role="region"
//                 aria-label="Company statistics"
//               >
//                 <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
//                 <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
//                 <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
//               </div> */}
//             </div>

//             {/* ================= RIGHT COLUMN ================= */}
//             <div
//               className={`relative flex items-center justify-center lg:justify-end
//                 transition-all duration-1000 ease-out
//                 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
//               `}
//               style={{ transitionDelay: `${STAGGER_DELAYS.image}ms` }}
//             >
//               <div className="relative w-full max-w-[600px]">
//                 {/* Main Image */}
//                 <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark">
//                   <img
//                     src={HeroSection1}
//                     alt="Professional audit team collaborating in modern office environment"
//                     className="w-full h-full aspect-[4/3] object-cover"
//                     loading="eager"
//                     fetchpriority="high"
//                   />
//                 </div>

//                 {/* Floating Card - Top Right */}
//                 {/* <div 
//                   className="absolute p-4 border shadow-xl lg:p-6 top-4 lg:top-6 -right-2 lg:right-6 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md
//                     transition-transform duration-300 hover:scale-105"
//                   role="complementary"
//                   aria-label="Trust indicator"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div 
//                       className="flex items-center justify-center w-10 h-10 text-yellow-600 rounded-lg lg:w-12 lg:h-12 bg-yellow-600/20 dark:bg-yellow-400/20 dark:text-yellow-400"
//                       aria-hidden="true"
//                     >
//                       <Shield size={20} className="lg:w-6 lg:h-6" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-bold lg:text-base dark:text-white">Trusted Verification</p>
//                       <p className="text-[10px] lg:text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
//                         ISO Certified Standards
//                       </p>
//                     </div>
//                   </div>
//                 </div> */}

//                 {/* Floating Card - Bottom Left */}
//                 {/* <div 
//                   className="absolute p-4 text-white shadow-xl lg:p-6 bottom-4 lg:bottom-6 -left-2 lg:left-6 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-500
//                     transition-transform duration-300 hover:scale-105"
//                   role="complementary"
//                   aria-label="Experience indicator"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div 
//                       className="flex items-center justify-center w-10 h-10 rounded-lg lg:w-12 lg:h-12 bg-white/20"
//                       aria-hidden="true"
//                     >
//                       <TrendingUp size={20} className="lg:w-6 lg:h-6" />
//                     </div>
//                     <div>
//                       <p className="text-lg font-bold lg:text-xl">15+ Years</p>
//                       <p className="text-xs opacity-90">Trusted Service</p>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { Shield, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import HeroSection1 from "../../assets/images/hero-section.jpg";

// /* ================= CONSTANTS ================= */
// const ANIMATION_DURATION = 2000;
// const ANIMATION_FRAME_RATE = 16;
// const STAGGER_DELAYS = {
//   badge: 0,
//   heading: 100,
//   description: 200,
//   buttons: 300,
//   stats: 500,
//   image: 200,
// };

// /* ================= COUNTER ================= */
// const StatCounter = React.memo(({ end, suffix = "", label, subLabel }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     const increment = end / (ANIMATION_DURATION / ANIMATION_FRAME_RATE);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, ANIMATION_FRAME_RATE);

//     return () => clearInterval(timer);
//   }, [end, isVisible]);

//   return (
//     <div ref={counterRef} className="flex flex-col gap-1">
//       <div 
//         className="text-3xl font-extrabold text-yellow-600 lg:text-4xl xl:text-5xl dark:text-yellow-400"
//         aria-live="polite"
//       >
//         {count}{suffix}
//       </div>
//       <div className="text-sm font-bold uppercase lg:text-base text-brandDark dark:text-white">
//         {label}
//       </div>
//       <div className="text-xs lg:text-sm text-brandNavy dark:text-gray-400">
//         {subLabel}
//       </div>
//     </div>
//   );
// });

// StatCounter.displayName = "StatCounter";

// /* ================= HERO ================= */
// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     if (prefersReducedMotion) {
//       setMounted(true);
//       return;
//     }

//     // Trigger animations with slight delay for better UX
//     const timer = setTimeout(() => setMounted(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative overflow-hidden bg-bgLight dark:bg-bgDark"
//       aria-labelledby="hero-heading"
//     >
//       {/* Offset content by header height + proper padding */}
//       <div className="pt-[110px] pb-12 lg:pt-[140px] lg:pb-16">
//         <div className="container">
//           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

//             {/* ================= LEFT COLUMN ================= */}
//             <div className="flex flex-col justify-center">
//               {/* Badge */}
//               <div
//                 className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8
//                   rounded-full bg-gray-900/5 dark:bg-white/5
//                   border border-gray-900/10 dark:border-white/10
//                   text-sm font-bold text-gray-900/80 dark:text-white/80
//                   backdrop-blur-sm w-fit
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.badge}ms` }}
//                 role="status"
//               >
//                 <span className="text-lg text-yellow-600 dark:text-yellow-400" aria-hidden="true">✦</span>
//                 <span>Empowering Business Growth</span>
//               </div>


//               {/* <h1 className={`mb-6 lg:mb-8 font-extrabold tracking-tight
//                   text-brandDark dark:text-brandLight
//                    text-[42px] sm:text-[38px] md:text-[46px]
//                    lg:text-[50px] xl:text-[60px]
//                  leading-[1.1] transition-all duration-700 delay-100
//                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                `}
//              >
//                  <span className="block">Risk Value, Risk Advisory </span>
//                 <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">& Assurance</span>
//              </h1> */}

//              <h1
//               className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-extrabold mb-8 text-brandDark dark:text-brandLight tracking-tight transition-all duration-700 delay-100 ${
//                 mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//               }`}
//             >
//               Risk Value, Risk Advisory
//               & <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Assurance</span>
//             </h1>

//               <p
//                 className={`max-w-xl mb-10 lg:mb-12 text-base lg:text-lg text-brandNavy dark:text-gray-300
//                   leading-relaxed
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.description}ms` }}
//               >
//                 Empowering your business with precise audits, trusted insights,
//                 and assurance services that drive transparency and growth.
//               </p>

//               <div
//                 className={`flex flex-wrap gap-4 mb-12 lg:mb-16
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.buttons}ms` }}
//               >
//                 <Link
//                   to="/contact"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold text-white 
//                     transition-all duration-300 rounded-xl 
//                     bg-brandDark dark:bg-brandAccent dark:text-brandDark 
//                     hover:scale-105 active:scale-95
//                     shadow-lg hover:shadow-xl
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Get started with our services"
//                 >
//                   Get Started
//                 </Link>

//                 <Link
//                   to="/about"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold 
//                     transition-all duration-300 border rounded-xl 
//                     text-brandDark dark:text-white 
//                     border-borderLight dark:border-borderDark 
//                     hover:bg-black/5 dark:hover:bg-white/5
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Learn more about our company"
//                 >
//                   Learn More
//                 </Link>
//               </div>

//               {/* Stats section commented out in original */}
//             </div>

//             {/* ================= RIGHT COLUMN ================= */}
//             <div
//               className={`relative flex items-center justify-center lg:justify-end
//                 transition-all duration-1000 ease-out
//                 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
//               `}
//               style={{ transitionDelay: `${STAGGER_DELAYS.image}ms` }}
//             >
//               <div className="relative w-full max-w-[600px]">
//                 {/* Main Image */}
//                 <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark">
//                   <img
//                     src={HeroSection1}
//                     alt="Professional audit team collaborating in modern office environment"
//                     className="w-full h-full aspect-[4/3] object-cover"
//                     loading="eager"
//                     fetchpriority="high"
//                   />
//                 </div>

//                 {/* Floating cards commented out in original */}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { Shield, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import HeroSection1 from "../../assets/images/hero-section.jpg";

// /* ================= CONSTANTS ================= */
// const ANIMATION_DURATION = 2000;
// const ANIMATION_FRAME_RATE = 16;
// const STAGGER_DELAYS = {
//   badge: 0,
//   heading: 100,
//   description: 200,
//   buttons: 300,
//   stats: 500,
//   image: 200,
// };

// /* ================= COUNTER ================= */
// const StatCounter = React.memo(({ end, suffix = "", label, subLabel }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     const increment = end / (ANIMATION_DURATION / ANIMATION_FRAME_RATE);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, ANIMATION_FRAME_RATE);

//     return () => clearInterval(timer);
//   }, [end, isVisible]);

//   return (
//     <div ref={counterRef} className="flex flex-col gap-1">
//       <div 
//         className="text-3xl font-extrabold text-yellow-600 lg:text-4xl xl:text-5xl dark:text-yellow-400"
//         aria-live="polite"
//       >
//         {count}{suffix}
//       </div>
//       <div className="text-sm font-bold uppercase lg:text-base text-brandDark dark:text-white">
//         {label}
//       </div>
//       <div className="text-xs lg:text-sm text-brandNavy dark:text-gray-400">
//         {subLabel}
//       </div>
//     </div>
//   );
// });

// StatCounter.displayName = "StatCounter";

// /* ================= HERO ================= */
// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//     if (prefersReducedMotion) {
//       setMounted(true);
//       return;
//     }

//     // Trigger animations with slight delay for better UX
//     const timer = setTimeout(() => setMounted(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative overflow-hidden bg-bgLight dark:bg-bgDark"
//       aria-labelledby="hero-heading"
//     >
//       {/* Offset content by header height + proper padding */}
//       <div className="pt-[110px] pb-12 lg:pt-[140px] lg:pb-16">
//         <div className="container">
//           <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

//             {/* ================= LEFT COLUMN ================= */}
//             <div className="flex flex-col justify-center">
//               {/* Badge */}
//               <div
//                 className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 lg:mb-8
//                   rounded-full bg-gray-900/5 dark:bg-white/5
//                   border border-gray-900/10 dark:border-white/10
//                   text-sm font-bold text-gray-900/80 dark:text-white/80
//                   backdrop-blur-sm w-fit
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.badge}ms` }}
//                 role="status"
//               >
//                 <span className="text-lg text-yellow-600 dark:text-yellow-400" aria-hidden="true">✦</span>
//                 <span>Empowering Business Growth</span>
//               </div>

//              <h1
//               className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-extrabold mb-8 text-brandDark dark:text-brandLight tracking-tight transition-all duration-700 delay-100 ${
//                 mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//               }`}
//             >
//               <span className="block">Risk Value, Risk Advisory</span>
//               <span className="block text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">& Assurance</span>
//             </h1>

//               <p
//                 className={`max-w-xl mb-10 lg:mb-12 text-base lg:text-lg text-brandNavy dark:text-gray-300
//                   leading-relaxed
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.description}ms` }}
//               >
//                 Empowering your business with precise audits, trusted insights,
//                 and assurance services that drive transparency and growth.
//               </p>

//               <div
//                 className={`flex flex-wrap gap-4 mb-12 lg:mb-16
//                   transition-all duration-700 ease-out
//                   ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
//                 `}
//                 style={{ transitionDelay: `${STAGGER_DELAYS.buttons}ms` }}
//               >
//                 <Link
//                   to="/contact"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold text-white 
//                     transition-all duration-300 rounded-xl 
//                     bg-brandDark dark:bg-brandAccent dark:text-brandDark 
//                     hover:scale-105 active:scale-95
//                     shadow-lg hover:shadow-xl
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Get started with our services"
//                 >
//                   Get Started
//                 </Link>

//                 <Link
//                   to="/about"
//                   className="px-8 py-3.5 lg:px-10 lg:py-4 font-bold 
//                     transition-all duration-300 border rounded-xl 
//                     text-brandDark dark:text-white 
//                     border-borderLight dark:border-borderDark 
//                     hover:bg-black/5 dark:hover:bg-white/5
//                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
//                   aria-label="Learn more about our company"
//                 >
//                   Learn More
//                 </Link>
//               </div>

//               {/* Stats section commented out in original */}
//             </div>

//             {/* ================= RIGHT COLUMN ================= */}
//             <div
//               className={`relative flex items-center justify-center lg:justify-end
//                 transition-all duration-1000 ease-out
//                 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
//               `}
//               style={{ transitionDelay: `${STAGGER_DELAYS.image}ms` }}
//             >
//               <div className="relative w-full max-w-[600px]">
//                 {/* Main Image */}
//                 <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-borderLight dark:border-borderDark">
//                   <img
//                     src={HeroSection1}
//                     alt="Professional audit team collaborating in modern office environment"
//                     className="w-full h-full aspect-[4/3] object-cover"
//                     loading="eager"
//                     fetchpriority="high"
//                   />
//                 </div>

//                 {/* Floating cards commented out in original */}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import heroItRisk from "../../assets/images/hero-it-risk.png";
// import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.png";
// import heroConsulting from "../../assets/images/hero-consulting.png";

// const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Turn Strategy Into",
//     highlight: "Measurable Success",
//     desc: "Our IT Risk Management services transform complex vulnerabilities into strategic advantages through data-driven insights.",
//     img: heroItRisk,
//     btn1: "Get Started",
//     btn2: "View Advisory Solutions"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Risk Value,Risk Advisory",
//     highlight: "& Assurance",
//     desc: "Empowering your IT infrastructure with strategic insights and comprehensive risk management. We bring precision.",
//     img: heroRiskAdvisory,
//     btn1: "Explore Services",
//     btn2: "Case Studies"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Build Resilient",
//     highlight: "Digital Systems",
//     desc: "Achieve true operational resilience through our expert business consulting and technical advisory.",
//     img: heroConsulting,
//     btn1: "Start Transformation",
//     btn2: "View Advisory Services"
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startTimer();
//   };

//   return (
//     // Hata diya gaya saara outer padding aur margin
//     <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black">

//       {/* Slides Wrapper */}
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image - Full Width & Height (No Card look) */}
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${slide.img})`,
//               transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />

//           {/* Content Overlay */}
//           <div className="relative h-full w-full flex items-center">
//             <div className="container mx-auto px-6 md:px-12">
//               <div className={`max-w-[800px] transition-all duration-1000 delay-300 ${
//                 mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}>

//                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-6">
//                   <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
//                     {slide.badge}
//                   </span>
//                 </div>

//                 <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
//                   {slide.title} <br />
//                   <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text">
//                     {slide.highlight}
//                   </span>
//                 </h1>

//                 <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
//                   {slide.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group flex items-center justify-center rounded-full h-14 px-10 bg-yellow-600 text-black text-base font-bold transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]">
//                     {slide.btn1}
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="flex items-center justify-center rounded-full h-14 px-10 bg-white/5 hover:bg-white/10 text-white text-base font-bold border border-white/20 transition-all backdrop-blur-md">
//                     {slide.btn2}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Modern Navigation Dots - Fixed at Bottom Center */}
//       <div className="absolute bottom-10 left-0 w-full z-20">
//         <div className="container mx-auto px-6 flex items-center justify-start gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="group relative h-12 flex items-center"
//             >
//               <div className={`transition-all duration-500 rounded-full ${
//                 currentSlide === index
//                   ? "w-16 h-[3px] bg-yellow-500"
//                   : "w-8 h-[2px] bg-white/30 group-hover:bg-white/60"
//               }`} />
//               <span className={`absolute -top-6 left-0 text-[10px] font-bold tracking-widest transition-opacity ${
//                 currentSlide === index ? "opacity-100 text-yellow-500" : "opacity-0"
//               }`}>
//                 0{index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import heroItRisk from "../../assets/images/hero-it-risk.png";
// import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.png";
// import heroConsulting from "../../assets/images/hero-consulting.png";

// const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Turn Strategy Into",
//     highlight: "Measurable Success",
//     desc: "Our IT Risk Management services transform complex vulnerabilities into strategic advantages through data-driven insights.",
//     img: heroItRisk,
//     btn1: "Get Started",
//     btn2: "View Advisory Solutions"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Risk Value,Advisory",
//     highlight: "& Assurance",
//     desc: "Empowering your IT infrastructure with strategic insights and comprehensive risk management. We bring precision.",
//     img: heroRiskAdvisory,
//     btn1: "Explore Services",
//     btn2: "Case Studies"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Build Resilient",
//     highlight: "Digital Systems",
//     desc: "Achieve true operational resilience through our expert business consulting and technical advisory.",
//     img: heroConsulting,
//     btn1: "Start Transformation",
//     btn2: "View Advisory Services"
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startTimer();
//   };

//   return (
//     // Hata diya gaya saara outer padding aur margin
//     <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black">

//       {/* Slides Wrapper */}
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image - Full Width & Height (No Card look) */}
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${slide.img})`,
//               transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />

//           {/* Content Overlay */}
//           <div className="relative h-full w-full flex items-center">
//             <div className="container mx-auto px-6 md:px-12">
//               <div className={`max-w-[800px] transition-all duration-1000 delay-300 ${
//                 mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}>

//                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-6">
//                   <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
//                     {slide.badge}
//                   </span>
//                 </div>

//                 <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
//                   {slide.title} <br />
//                   <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text">
//                     {slide.highlight}
//                   </span>
//                 </h1>

//                 <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
//                   {slide.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-4">
//                   <button className="group flex items-center justify-center rounded-full h-14 px-10 bg-yellow-600 text-black text-base font-bold transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]">
//                     {slide.btn1}
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="flex items-center justify-center rounded-full h-14 px-10 bg-white/5 hover:bg-white/10 text-white text-base font-bold border border-white/20 transition-all backdrop-blur-md">
//                     {slide.btn2}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Modern Navigation Dots - Fixed at Bottom Center */}
//       <div className="absolute bottom-10 left-0 w-full z-20">
//         <div className="container mx-auto px-6 flex items-center justify-start gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="group relative h-12 flex items-center"
//             >
//               <div className={`transition-all duration-500 rounded-full ${
//                 currentSlide === index
//                   ? "w-16 h-[3px] bg-yellow-500"
//                   : "w-8 h-[2px] bg-white/30 group-hover:bg-white/60"
//               }`} />
//               <span className={`absolute -top-6 left-0 text-[10px] font-bold tracking-widest transition-opacity ${
//                 currentSlide === index ? "opacity-100 text-yellow-500" : "opacity-0"
//               }`}>
//                 0{index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }



// import React, { useEffect, useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";

// import heroItRisk from "../../assets/images/hero-it-risk.webp";
// import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.webp";
// import heroConsulting from "../../assets/images/hero-consulting.webp";

// const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Securing the Digital Frontier with Strategic Assurance",
//     highlight: "Measurable Success",
//     desc: "In an era of escalating cyber threats and rigorous data mandates like GDPR and the DPDP Act, we provide the SOC 1/2/3 assurance and NIST-aligned security frameworks necessary to protect your enterprise. Beyond protection, we turn IT risk into a driver of digital trust and operational resilience.",
//     img: heroItRisk,
//     btn1: "Get Started",
//     btn2: "View Advisory Solutions"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Master the Landscape of Enterprise Uncertainty",
//     highlight: "& Assurance",
//     desc: "Strengthen your corporate foundation with risk-based internal audits and robust Enterprise Risk Management (ERM) frameworks based on COSO standards. We help leadership teams eliminate blind spots and scale with confidence.",
//     img: heroRiskAdvisory,
//     btn1: "Explore Services",
//     btn2: "Case Studies"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Architecting Sustainable Value and Financial Precision",
//     highlight: "Digital Systems",
//     desc: "Navigate the shift toward a low-carbon economy with ESG reporting, GHG accounting, credit rating advisory, and forensic integrity services that safeguard organizational value.",
//     img: heroConsulting,
//     btn1: "Start Transformation",
//     btn2: "View Advisory Services"
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };

//   return (
//     <section className="relative w-full min-h-[100svh] md:h-[100vh] overflow-hidden bg-[#0B1F26]">
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background */}
//           <div
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(
//                 to bottom,
//                 rgba(11,31,38,0.85) 0%,
//                 rgba(11,31,38,0.75) 40%,
//                 rgba(11,31,38,0.65) 100%
//               ), url(${slide.img})`,
//               transform: index === currentSlide ? "scale(1.05)" : "scale(1)"
//             }}
//           />

//           {/* Centered Content */}
//           <div className="relative h-full flex items-center justify-center text-center px-6">
//             <div className="max-w-[900px]">
//               {/* Badge */}
//               <div className="inline-flex px-4 py-1.5 rounded-full bg-[#C9A24D]/15 border border-[#C9A24D]/40 mb-6">
//                 <span className="text-[#E6C87A] text-xs font-bold uppercase tracking-[0.2em]">
//                   {slide.badge}
//                 </span>
//               </div>

//               {/* Title (always 2 lines naturally) */}
//               <h1 className="text-white font-extrabold tracking-tight leading-tight mb-6">
//                 <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[52px] max-w-[900px] mx-auto">
//                   {slide.title}
//                 </span>

//                 {/* <span className="block text-transparent bg-gradient-to-r from-[#E6C87A] to-[#F5E6B3] bg-clip-text">
//                   {slide.highlight}
//                 </span> */}
//               </h1>

//               {/* Description */}
//               <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10">
//                 {slide.desc}
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <button className="flex items-center justify-center rounded-full h-14 px-10 bg-[#C9A24D] text-[#0B1F26] font-bold transition-all hover:bg-[#E6C87A] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]">
//                   {slide.btn1}
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </button>

//                 <button className="flex items-center justify-center rounded-full h-14 px-10 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/25 backdrop-blur-md">
//                   {slide.btn2}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-4 z-20">
//         {SLIDES.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`transition-all rounded-full ${
//               currentSlide === index
//                 ? "w-14 h-[3px] bg-[#C9A24D]"
//                 : "w-8 h-[2px] bg-white/30"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, BarChart3 } from "lucide-react";

import heroItRisk from "../../assets/images/hero-it-risk.png"
import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.png"
import heroConsulting from "../../assets/images/hero-consulting.png"


const SLIDES = [
  {
    badge: "IT Risk Management",
    titleLine1: "Securing the Digital Frontier",
    titleLine2: "with Strategic Assurance",
    desc: "SOC 1/2/3 assurance and NIST-aligned security frameworks to protect your enterprise and turn IT risk into a driver of digital trust.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898660/hero-it-risk_icakxs.webp",
    btn1: "Explore Solutions",
    btn1Link: "/services/it-risk-management",
    btn2: "Get Assessment",
    btn2Link: "/contact",
    category: "security"
  },
  {
    badge: "Risk Advisory",
    titleLine1: "Master the Landscape of",
    titleLine2: "Enterprise Uncertainty",
    desc: "Risk-based internal audits and robust ERM frameworks based on COSO standards to identify blind spots and ensure sustainable growth.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898656/hero-risk-advisory_gmjbok.webp",
    btn1: "Strengthen Governance",
    btn1Link: "/services/risk-advisory",
    btn2: "Consult Expert",
    btn2Link: "/contact",
    category: "advisory"
  },
  {
    badge: "Business Consulting",
    titleLine1: "Architecting Sustainable",
    titleLine2: "Value and Financial Precision",
    desc: "Expert ESG reporting, GHG accounting, and credit rating advisory to optimize your capital structure and protect organizational integrity.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898662/hero-consulting_t6jnkn.webp",
    btn1: "Drive Growth",
    btn1Link: "/services/business-consulting",
    btn2: "Book Call",
    btn2Link: "/contact",
    category: "consulting"
  }
];



export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startAutoSlide();
  };

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .ken-burns {
          animation: kenBurns 8s ease-out forwards;
        }
      `}</style>

      <section className="relative flex flex-col w-full h-screen overflow-hidden bg-bgLight dark:bg-bgDark md:flex-row">

        {/* Left Content Area (Static Background, Dynamic Text) */}
        <div className="relative w-full md:w-[65%] h-full flex items-center z-20 px-6 md:px-12 lg:px-20 bg-zinc-950 overflow-hidden">
          {/* Subtle geometric pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative w-full max-w-2xl py-20">
            {SLIDES.map((slide, index) => (
              <div
                key={`text-${index}`}
                className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 w-full ${index === currentSlide
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-12 pointer-events-none"
                  }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-yellow-500/10 border-yellow-500/20 backdrop-blur-md">
                  <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
                    {slide.badge}
                  </span>
                </div>

                {/* Heading - Always 2 Lines */}
                {/* Heading - Always 2 Lines */}
                {/* Heading - Always 2 Lines (width adjusted, font unchanged) */}
                <h1 className="mb-5">
                  <span
                    className="
      block
      text-4xl lg:text-5xl xl:text-5xl
      font-extrabold
      leading-[1.2]
      text-white
      tracking-tight
      mb-2
      max-w-[680px]
    "
                  >
                    {slide.titleLine1}
                  </span>

                  <span
                    className="
      block
      text-3xl lg:text-4xl xl:text-5xl
      font-extrabold
      leading-[1.2]
      text-transparent
      bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
      bg-clip-text
      tracking-tight
      max-w-[680px]
    "
                  >
                    {slide.titleLine2}
                  </span>
                </h1>



                {/* Description */}
                <p className="max-w-xl mb-8 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {slide.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    onClick={() => window.location.href = slide.btn1Link}
                    className="relative flex items-center justify-center px-7 py-3.5 overflow-hidden text-sm font-bold text-black transition-all duration-300 bg-yellow-500 rounded-full shadow-lg group hover:bg-yellow-400 shadow-yellow-500/20"
                  >
                    <span className="relative z-10">{slide.btn1}</span>
                    <ArrowRight className="relative z-10 w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 transition-transform duration-300 translate-y-full bg-white/20 group-hover:translate-y-0"></div>
                  </button>
                  <button
                    onClick={() => window.location.href = slide.btn2Link}
                    className="flex items-center justify-center px-7 py-3.5 text-sm font-bold transition-all duration-300 border rounded-full border-zinc-700 hover:border-zinc-500 text-zinc-300 backdrop-blur-sm bg-white/5"
                  >
                    {slide.btn2}
                  </button>
                </div>

                {/* AI Insight Overlay */}
                {/* <InsightCard category={slide.category} active={index === currentSlide} /> */}
              </div>
            ))}
          </div>

          {/* Slide Progress / Indicators */}
          <div className="absolute flex items-center gap-6 bottom-8 left-6 md:left-12">
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSlide(i);
                    startAutoSlide();
                  }}
                  className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-yellow-500' : 'w-4 bg-zinc-800'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
              0{currentSlide + 1} / 0{SLIDES.length}
            </div>
          </div>
        </div>

        {/* Right Visual Area (Split Layout Dynamic Image) */}
        <div className="relative w-full md:w-[35%] h-full overflow-hidden group">
          {SLIDES.map((slide, index) => (
            <div
              key={`img-${index}`}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
                }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? 'ken-burns' : ''}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Artistic overlay gradient to blend with left side */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>
          ))}

          {/* Navigation Overlays */}
          <div className="absolute inset-y-0 left-0 z-30 flex items-center justify-center w-32 transition-opacity opacity-0 group-hover:opacity-100">
            <button
              onClick={prevSlide}
              className="p-4 text-white transition-all rounded-full bg-black/40 backdrop-blur-xl hover:bg-yellow-500 hover:text-black"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-30 flex items-center justify-center w-32 transition-opacity opacity-0 group-hover:opacity-100">
            <button
              onClick={nextSlide}
              className="p-4 text-white transition-all rounded-full bg-black/40 backdrop-blur-xl hover:bg-yellow-500 hover:text-black"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}