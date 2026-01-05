// import { TrendingUp, Building2, Users, CheckCircle2 } from "lucide-react";
// import AnimatedCounter from "../../components/common/AnimatedCounter"

// const StatsSection = () => {
//   const stats = [
//     {
//       number: 15,
//       suffix: "+",
//       label: "Years Experience",
//       icon: TrendingUp,
//     },
//     {
//       number: 50,
//       suffix: "+",
//       label: "Industries Served",
//       icon: Building2,
//     },
//     {
//       number: 150,
//       suffix: "+",
//       label: "Global Clients",
//       icon: Users,
//     },
//     {
//       number: 300,
//       suffix: "+",
//       label: "Projects Delivered",
//       icon: CheckCircle2,
//     },
//   ];

//   return (
//     <section
//       className="relative w-full py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28"
//     >
//       {/* ✅ MATCH HEADER CONTAINER */}
//       {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
//       <div className="container">
        
//         {/* HEADER */}
//         <div className="text-left mb-14">
//           <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//             Our Impact
//           </p>

//           <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//             Trusted by{" "}
//             <span className="text-brandGold dark:text-brandAccent">
//               Global Enterprises
//             </span>
//           </h2>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid gap-6 md:grid-cols-4">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={i}
//                 className="transition-all duration-300 group"
//               >
//                 <div
//                   className="p-8 text-center border shadow-lg rounded-3xl border-borderLight bg-surfaceLight hover:shadow-2xl hover:-translate-y-1 hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
//                 >
//                   {/* ICON */}
//                   <div
//                     className="flex items-center justify-center w-16 h-16 mx-auto mb-6 shadow-lg rounded-2xl bg-gradient-to-br from-brandDark to-brandNavy dark:from-brandAccent dark:to-brandGold"
//                   >
//                     <Icon className="text-white dark:text-brandDark" size={24} />
//                   </div>

//                   {/* NUMBER */}
//                   <h3 className="mb-2 text-5xl font-bold text-brandGold dark:text-brandAccent">
//                     <AnimatedCounter
//                       target={stat.number}
//                       suffix={stat.suffix}
//                     />
//                   </h3>

//                   {/* LABEL */}
//                   <p className="font-medium text-brandNavy dark:text-white/70">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


// import { useState, useEffect, useRef } from "react";
// import { TrendingUp, Building2, Users, CheckCircle2 } from "lucide-react";

// const AnimatedCounter = ({ target, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           let start = 0;
//           const duration = 2000;
//           const increment = target / (duration / 16);

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= target) {
//               setCount(target);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, 16);

//           return () => clearInterval(timer);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [target, hasAnimated]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const StatsSection = () => {
//   const stats = [
//     {
//       number: 15,
//       suffix: "+",
//       label: "Years Experience",
//       icon: TrendingUp,
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
//     },
//     {
//       number: 50,
//       suffix: "+",
//       label: "Industries Served",
//       icon: Building2,
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//     },
//     {
//       number: 150,
//       suffix: "+",
//       label: "Global Clients",
//       icon: Users,
//       image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
//     },
//     {
//       number: 300,
//       suffix: "+",
//       label: "Projects Delivered",
//       icon: CheckCircle2,
//       image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
//     },
//   ];

//   return (
//     <section className="relative w-full py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28">
//       <div className="container mx-auto">
//         {/* HEADER */}
//         <div className="text-left mb-14">
//           <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//             Our Impact
//           </p>

//           <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//             Tracking our journey{" "}
//             <span className="text-brandGold dark:text-brandAccent">
//               through data
//             </span>
//           </h2>
//           <p className="max-w-2xl mt-4 text-base text-brandNavy/70 dark:text-white/60">
//             Behind every project and milestone are numbers that reflect our growth, dedication, and impact.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={i}
//                 className="relative overflow-hidden transition-all duration-500 group rounded-3xl"
//               >
//                 {/* Background Image with Overlay */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={stat.image}
//                     alt={stat.label}
//                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-brandDark/95 via-brandNavy/90 to-brandPrimary/85 dark:from-brandDark/98 dark:via-brandNavy/95 dark:to-brandPrimary/90"></div>
                  
//                   {/* Accent Glow */}
//                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-brandGold/20 via-transparent to-transparent group-hover:opacity-100"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[320px]">
//                   {/* ICON */}
//                   <div className="flex items-center justify-center mx-auto mb-6 transition-transform duration-300 shadow-xl w-14 h-14 rounded-2xl bg-gradient-to-br from-brandGold to-brandAccent dark:from-brandAccent dark:to-brandGold group-hover:scale-110 group-hover:rotate-6">
//                     <Icon className="text-brandDark" size={24} />
//                   </div>

//                   {/* NUMBER */}
//                   <div className="flex items-center justify-center flex-1">
//                     <h3 className="text-6xl font-bold text-white transition-all duration-300 dark:text-brandAccent group-hover:scale-105">
//                       <AnimatedCounter
//                         target={stat.number}
//                         suffix={stat.suffix}
//                       />
//                     </h3>
//                   </div>

//                   {/* LABEL */}
//                   <p className="text-lg font-semibold transition-colors duration-300 text-white/90 dark:text-white/80 group-hover:text-brandGold dark:group-hover:text-brandAccent">
//                     {stat.label}
//                   </p>

//                   {/* Bottom Border Accent */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-brandGold to-transparent group-hover:opacity-100"></div>
//                 </div>

//                 {/* Border */}
//                 <div className="absolute inset-0 transition-colors duration-300 border rounded-3xl border-brandGold/20 dark:border-brandAccent/20 group-hover:border-brandGold/40 dark:group-hover:border-brandAccent/40"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

// import { useState, useEffect, useRef } from "react";
// import { TrendingUp, Building2, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

// const AnimatedCounter = ({ target, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           let start = 0;
//           const duration = 2000;
//           const increment = target / (duration / 16);

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= target) {
//               setCount(target);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, 16);

//           return () => clearInterval(timer);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [target, hasAnimated]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const StatsSection = () => {
//   const stats = [
//     {
//       number: 15,
//       suffix: "+",
//       label: "Years Experience",
//       description: "Delivering excellence",
//       icon: TrendingUp,
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//       gradient: "from-brandDark/95 via-brandNavy/92 to-brandPrimary/88"
//     },
//     {
//       number: 50,
//       suffix: "+",
//       label: "Industries Served",
//       description: "Across the globe",
//       icon: Building2,
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//       gradient: "from-brandNavy/95 via-brandPrimary/92 to-brandDark/88"
//     },
//     {
//       number: 150,
//       suffix: "+",
//       label: "Global Clients",
//       description: "Trust our expertise",
//       icon: Users,
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
//       gradient: "from-brandPrimary/95 via-brandDark/92 to-brandNavy/88"
//     },
//     {
//       number: 300,
//       suffix: "+",
//       label: "Projects Delivered",
//       description: "With 98% success rate",
//       icon: CheckCircle2,
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//       gradient: "from-brandDark/95 via-brandNavy/92 to-brandPrimary/88"
//     },
//   ];

//   return (
//     <section className="relative w-full py-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 opacity-30 dark:opacity-20">
//         <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandGold/10 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
//       </div>

//       <div className="container relative z-10 mx-auto">
//         {/* HEADER */}
//         <div className="max-w-3xl mb-16 text-start">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandGold/10 dark:bg-brandAccent/10 border-brandGold/20 dark:border-brandAccent/20">
//             <div className="w-2 h-2 rounded-full bg-brandGold dark:bg-brandAccent animate-pulse"></div>
//             <p className="text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//               Our Impact in Numbers
//             </p>
//           </div>

//           <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
//             Tracking our journey{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-brandGold dark:text-brandAccent">
//                 through data
//               </span>
//               <svg className="absolute left-0 w-full h-3 -bottom-2 text-brandGold/30 dark:text-brandAccent/30" viewBox="0 0 200 12" preserveAspectRatio="none">
//                 <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="3"/>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="mt-6 text-lg leading-relaxed text-brandNavy/70 dark:text-white/60">
//             Behind every project and milestone are numbers that reflect our growth, dedication, and unwavering commitment to excellence.
//           </p>
//         </div>

//         {/* STATS GRID */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={i}
//                 className="relative overflow-hidden transition-all duration-700 group rounded-3xl hover:-translate-y-2"
//                 style={{ animationDelay: `${i * 100}ms` }}
//               >
//                 {/* Background Image with Overlay */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={stat.image}
//                     alt={stat.label}
//                     className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
//                   />
                  
//                   {/* Multi-layer Gradient Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`}></div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-brandDark/50 via-transparent to-transparent"></div>
                  
//                   {/* Animated Accent Glow */}
//                   <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-tr from-brandGold/0 via-brandGold/20 to-brandAccent/30 group-hover:opacity-100"></div>
                  
//                   {/* Shimmer Effect */}
//                   <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                   </div>
//                 </div>

//                 {/* Floating Particles Effect */}
//                 <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
//                   <div className="absolute w-1 h-1 rounded-full top-1/4 left-1/4 bg-brandGold animate-ping"></div>
//                   <div className="absolute w-1 h-1 rounded-full top-3/4 right-1/3 bg-brandAccent animate-ping" style={{ animationDelay: '0.3s' }}></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[360px]">
//                   {/* ICON with Pulse Ring */}
//                   <div className="relative w-16 h-16 mx-auto mb-8">
//                     <div className="absolute inset-0 rounded-2xl bg-brandGold/30 dark:bg-brandAccent/30 animate-ping"></div>
//                     <div className="relative flex items-center justify-center w-16 h-16 transition-all duration-500 shadow-2xl rounded-2xl bg-gradient-to-br from-brandGold via-brandAccent to-brandGold dark:from-brandAccent dark:to-brandGold group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-brandGold/50">
//                       <Icon className="transition-transform duration-300 text-brandDark group-hover:scale-110" size={28} strokeWidth={2.5} />
//                     </div>
//                   </div>

//                   {/* NUMBER with enhanced styling */}
//                   <div className="flex flex-col items-center justify-center flex-1 mb-6">
//                     <h3 className="font-bold text-transparent transition-all duration-500 text-7xl bg-gradient-to-br from-white via-white to-brandGold/80 dark:from-brandAccent dark:via-white dark:to-brandGold bg-clip-text group-hover:scale-110 drop-shadow-2xl">
//                       <AnimatedCounter
//                         target={stat.number}
//                         suffix={stat.suffix}
//                       />
//                     </h3>
                    
//                     {/* Decorative Line */}
//                     <div className="w-16 h-1 mt-4 transition-all duration-500 rounded-full bg-gradient-to-r from-transparent via-brandGold to-transparent dark:via-brandAccent opacity-60 group-hover:w-24"></div>
//                   </div>

//                   {/* LABEL */}
//                   <div className="space-y-2">
//                     <p className="text-xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-brandGold dark:group-hover:text-brandAccent">
//                       {stat.label}
//                     </p>
//                     <p className="text-sm font-medium text-white/70 dark:text-white/60">
//                       {stat.description}
//                     </p>
//                   </div>

//                   {/* Hover Arrow */}
//                   <div className="absolute transition-all duration-300 transform translate-x-2 opacity-0 top-6 right-6 group-hover:opacity-100 group-hover:translate-x-0">
//                     <ArrowUpRight className="text-brandGold dark:text-brandAccent" size={24} />
//                   </div>

//                   {/* Bottom Glow Line */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 shadow-lg opacity-0 bg-gradient-to-r from-transparent via-brandGold to-transparent dark:via-brandAccent group-hover:opacity-100 shadow-brandGold/50 dark:shadow-brandAccent/50"></div>
//                 </div>

//                 {/* Enhanced Border with Corner Accents */}
//                 <div className="absolute inset-0 transition-all duration-500 border-2 rounded-3xl border-brandGold/30 dark:border-brandAccent/30 group-hover:border-brandGold/60 dark:group-hover:border-brandAccent/60"></div>
                
//                 {/* Corner Accents */}
//                 <div className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-500 border-t-2 border-l-2 opacity-0 border-brandGold dark:border-brandAccent rounded-tl-3xl group-hover:opacity-100"></div>
//                 <div className="absolute bottom-0 right-0 w-6 h-6 transition-opacity duration-500 border-b-2 border-r-2 opacity-0 border-brandGold dark:border-brandAccent rounded-br-3xl group-hover:opacity-100"></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA or Additional Info */}
//         <div className="mt-16 text-center">
//           <p className="text-sm font-medium text-brandNavy/60 dark:text-white/50">
//             Join hundreds of satisfied clients worldwide
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import { useState, useEffect, useRef } from "react";
import { TrendingUp, Building2, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible - start animation
          setIsVisible(true);
          setCount(0);
          
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          if (timerRef.current) clearInterval(timerRef.current);

          timerRef.current = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timerRef.current);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        } else {
          // Element is not visible - reset to 0
          setIsVisible(false);
          if (timerRef.current) clearInterval(timerRef.current);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Delivering excellence",
      icon: TrendingUp,
      lightImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      darkImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gradient: "from-brandDark/95 via-brandNavy/92 to-brandPrimary/88"
    },
    {
      number: 50,
      suffix: "+",
      label: "Industries Served",
      description: "Across the globe",
      icon: Building2,
      lightImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      darkImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      gradient: "from-brandNavy/95 via-brandPrimary/92 to-brandDark/88"
    },
    {
      number: 150,
      suffix: "+",
      label: "Global Clients",
      description: "Trust our expertise",
      icon: Users,
      lightImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      darkImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      gradient: "from-brandPrimary/95 via-brandDark/92 to-brandNavy/88"
    },
    {
      number: 300,
      suffix: "+",
      label: "Projects Delivered",
      description: "With 98% success rate",
      icon: CheckCircle2,
      lightImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      darkImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-brandDark/95 via-brandNavy/92 to-brandPrimary/88"
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandGold/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandGold/10 dark:bg-brandAccent/10 border-brandGold/20 dark:border-brandAccent/20">
            <div className="w-2 h-2 rounded-full bg-brandGold dark:bg-brandAccent animate-pulse"></div>
            <p className="text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
              Our Impact in Numbers
            </p>
          </div>

          <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
            Tracking our journey{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brandGold dark:text-brandAccent">
                through data
              </span>
              <svg className="absolute left-0 w-full h-3 -bottom-2 text-brandGold/30 dark:text-brandAccent/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </span>
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-brandNavy/70 dark:text-white/60">
            Behind every project and milestone are numbers that reflect our growth, dedication, and unwavering commitment to excellence.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="relative overflow-hidden transition-all duration-700 group rounded-3xl hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  {/* Light Mode Image */}
                  <img
                    src={stat.lightImage}
                    alt={stat.label}
                    className="object-cover w-full h-full transition-all duration-1000 dark:opacity-0 group-hover:scale-125 group-hover:rotate-2"
                  />
                  {/* Dark Mode Image */}
                  <img
                    src={stat.darkImage}
                    alt={stat.label}
                    className="absolute inset-0 object-cover w-full h-full transition-all duration-1000 opacity-0 dark:opacity-100 group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Multi-layer Gradient Overlay - Reduced opacity for better image visibility */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient.replace('/95', '/85').replace('/92', '/82').replace('/88', '/78')}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 via-transparent to-transparent"></div>
                  
                  {/* Animated Accent Glow */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-tr from-brandGold/0 via-brandGold/20 to-brandAccent/30 group-hover:opacity-100"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <div className="absolute w-1 h-1 rounded-full top-1/4 left-1/4 bg-brandGold animate-ping"></div>
                  <div className="absolute w-1 h-1 rounded-full top-3/4 right-1/3 bg-brandAccent animate-ping" style={{ animationDelay: '0.3s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[360px]">
                  {/* ICON with Pulse Ring */}
                  <div className="relative w-16 h-16 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-brandGold/30 dark:bg-brandAccent/30 animate-ping"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 transition-all duration-500 shadow-2xl rounded-2xl bg-gradient-to-br from-brandGold via-brandAccent to-brandGold dark:from-brandAccent dark:to-brandGold group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-brandGold/50">
                      <Icon className="transition-transform duration-300 text-brandDark group-hover:scale-110" size={28} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* NUMBER with enhanced styling */}
                  <div className="flex flex-col items-center justify-center flex-1 mb-6">
                    <h3 className="font-bold text-transparent transition-all duration-500 text-7xl bg-gradient-to-br from-white via-white to-brandGold/80 dark:from-brandAccent dark:via-white dark:to-brandGold bg-clip-text group-hover:scale-110 drop-shadow-2xl">
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                      />
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="w-16 h-1 mt-4 transition-all duration-500 rounded-full bg-gradient-to-r from-transparent via-brandGold to-transparent dark:via-brandAccent opacity-60 group-hover:w-24"></div>
                  </div>

                  {/* LABEL */}
                  <div className="space-y-2">
                    <p className="text-xl font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-brandGold dark:group-hover:text-brandAccent">
                      {stat.label}
                    </p>
                    <p className="text-sm font-medium text-white/70 dark:text-white/60">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute transition-all duration-300 transform translate-x-2 opacity-0 top-6 right-6 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowUpRight className="text-brandGold dark:text-brandAccent" size={24} />
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 shadow-lg opacity-0 bg-gradient-to-r from-transparent via-brandGold to-transparent dark:via-brandAccent group-hover:opacity-100 shadow-brandGold/50 dark:shadow-brandAccent/50"></div>
                </div>

                {/* Enhanced Border with Corner Accents */}
                <div className="absolute inset-0 transition-all duration-500 border-2 rounded-3xl border-brandGold/30 dark:border-brandAccent/30 group-hover:border-brandGold/60 dark:group-hover:border-brandAccent/60"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-500 border-t-2 border-l-2 opacity-0 border-brandGold dark:border-brandAccent rounded-tl-3xl group-hover:opacity-100"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 transition-opacity duration-500 border-b-2 border-r-2 opacity-0 border-brandGold dark:border-brandAccent rounded-br-3xl group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-brandNavy/60 dark:text-white/50">
            Join hundreds of satisfied clients worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;