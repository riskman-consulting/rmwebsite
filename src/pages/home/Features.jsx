// // import { CheckCircle2, Shield, Lightbulb, Layers } from "lucide-react";

// // const Features = () => {
// //   const features = [
// //     {
// //       title: "Trusted Expertise",
// //       description:
// //         "To uphold the highest standards of audit excellence, providing independent assurance.",
// //       icon: CheckCircle2,
// //     },
// //     {
// //       title: "Client-Centric Approach",
// //       description:
// //         "Focused on understanding client needs and delivering tailored, value-driven solutions.",
// //       icon: Shield,
// //     },
// //     {
// //       title: "Commitment to Integrity",
// //       description:
// //         "Ensuring transparency, ethics, and accountability across all engagements.",
// //       icon: Layers,
// //     },
// //     {
// //       title: "Innovative Methodologies",
// //       description:
// //         "Leveraging modern frameworks and tools to deliver smarter audit outcomes.",
// //       icon: Lightbulb,
// //     },
// //   ];

// //   return (
// //     <section
// //       className="relative z-20 w-full py-20 transition-colors duration-300 md:py-28 bg-bgLight dark:bg-bgDark"
// //     >
// //       {/* ✅ CONSISTENT CONTAINER - Now uses Tailwind config */}
// //       <div className="container">

// //         {/* TOP TEXT - RiskMan Brand Colors */}
// //         <div className="grid gap-4 text-2xl font-medium tracking-tight mb-14 lg:text-3xl lg:grid-cols-3">
// //           <div className="text-brandGold dark:text-brandAccent">
// //             financial <br /> reporting
// //           </div>
// //           <div className="text-brandGold dark:text-brandAccent">
// //             strengthen <br /> internal controls
// //           </div>
// //           <div className="text-brandGold dark:text-brandAccent">
// //             and enhance stakeholder confidence <br />
// //             empowering your organization
// //           </div>
// //         </div>

// //         {/* FEATURES GRID */}
// //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// //           {features.map((feature, index) => {
// //             const Icon = feature.icon;

// //             return (
// //               <div
// //                 key={index}
// //                 className="
// //                   group relative p-8 rounded-2xl h-[340px]
// //                   flex flex-col justify-between cursor-pointer
// //                   transition-all duration-300
// //                   bg-surfaceLight border border-borderLight shadow-lg
// //                   hover:-translate-y-2 hover:shadow-2xl
// //                   dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
// //                   hover:bg-gradient-to-br hover:from-brandDark hover:to-brandNavy
// //                   dark:hover:from-brandAccent dark:hover:to-brandGold
// //                   hover:border-transparent
// //                 "
// //               >
// //                 {/* ICON - Navy/Gold Brand Colors */}
// //                 <div
// //                   className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 shadow-md rounded-xl bg-brandDark group-hover:bg-brandGold group-hover:text-white dark:bg-brandAccent dark:text-brandDark dark:group-hover:bg-white dark:group-hover:text-brandDark"
// //                 >
// //                   <Icon className="w-8 h-8" />
// //                 </div>

// //                 {/* CONTENT */}
// //                 <div>
// //                   <h3
// //                     className="mb-4 text-xl font-bold leading-tight text-brandDark dark:text-white group-hover:text-white dark:group-hover:text-brandDark"
// //                   >
// //                     {feature.title}
// //                   </h3>

// //                   <p
// //                     className="text-sm leading-relaxed text-brandNavy dark:text-white/70 group-hover:text-white/90 dark:group-hover:text-brandDark/80"
// //                   >
// //                     {feature.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;


// // import { TrendingUp, Target, Video, Sparkles } from "lucide-react";

// // const Features = () => {
// //   const features = [
// //     {
// //       title: "Trusted Expertise",
// //       description:
// //         "To uphold the highest standards of audit excellence, providing independent assurance.",
// //       icon: TrendingUp,
// //       position: "top-left"
// //     },
// //     {
// //       title: "Client-Centric Approach",
// //       description:
// //         "Focused on understanding client needs and delivering tailored, value-driven solutions.",
// //       icon: Target,
// //       position: "top-right"
// //     },
// //     {
// //       title: "Commitment to Integrity",
// //       description:
// //         "Ensuring transparency, ethics, and accountability across all engagements.",
// //       icon: Video,
// //       position: "bottom-left"
// //     },
// //     {
// //       title: "Innovative Methodologies",
// //       description:
// //         "Leveraging modern frameworks and tools to deliver smarter audit outcomes.",
// //       icon: Sparkles,
// //       position: "bottom-right"
// //     },
// //   ];

// //   return (
// //     <section className="relative z-20 w-full py-20 transition-colors duration-300 md:py-28 bg-gray-50 dark:bg-gray-950">
// //       <div className="container px-6 mx-auto max-w-7xl">

// //         {/* HEADER */}
// //         <div className="mb-16 text-center">
// //           <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
// //             Simplify Your Audit Process
// //             <br />
// //             with Our Diverse Solution
// //           </h2>
// //           <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
// //             RiskMan is a premier audit firm that specializes in creating comprehensive
// //             audit frameworks. We leverage the power of modern methodologies.
// //           </p>
// //           <button className="px-8 py-3 mt-6 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-900 to-blue-800 hover:shadow-xl hover:scale-105 dark:from-amber-500 dark:to-amber-600">
// //             Start for Free
// //           </button>
// //         </div>

// //         {/* FEATURES GRID WITH CENTER IMAGE */}
// //         <div className="relative grid items-center grid-cols-1 gap-8 lg:grid-cols-3">

// //           {/* LEFT FEATURES */}
// //           <div className="space-y-8">
// //             {features.slice(0, 2).map((feature, index) => {
// //               const Icon = feature.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-start p-6 transition-all duration-300 bg-white border border-gray-200 shadow-md cursor-pointer rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-gray-900 dark:border-gray-800 group"
// //                 >
// //                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 bg-blue-900 rounded-lg shadow-md group-hover:bg-amber-500 dark:bg-amber-500 dark:group-hover:bg-blue-900">
// //                     <Icon className="w-6 h-6" />
// //                   </div>

// //                   <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
// //                     {feature.title}
// //                   </h3>

// //                   <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
// //                     {feature.description}
// //                   </p>

// //                   <a href="#" className="inline-flex items-center text-sm font-medium text-blue-900 transition-colors dark:text-amber-500 hover:text-amber-500 dark:hover:text-blue-900">
// //                     Learn More →
// //                   </a>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* CENTER IMAGE */}
// //           <div className="relative flex items-center justify-center">
// //             <div className="relative w-full overflow-hidden shadow-2xl aspect-square rounded-3xl">
// //               {/* Background Image */}
// //               <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-50 dark:from-gray-800 dark:to-gray-900">
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <div className="text-center">
// //                     <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-blue-900 rounded-full dark:bg-amber-500">
// //                       <Sparkles className="w-8 h-8" />
// //                     </div>
// //                     <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Workspace Collaboration</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Stats Card */}
// //               <div className="absolute p-6 bg-white shadow-xl top-8 left-8 rounded-2xl dark:bg-gray-900">
// //                 <h4 className="text-3xl font-bold text-blue-900 dark:text-amber-500">8.5M+</h4>
// //                 <p className="text-sm text-gray-600 dark:text-gray-400">
// //                   Join 8.5M+ professionals and
// //                   <br />teams using our platform.
// //                 </p>
// //               </div>

// //               {/* Calendar Card */}
// //               <div className="absolute p-4 bg-white shadow-xl bottom-8 left-8 right-8 rounded-2xl dark:bg-gray-900">
// //                 <div className="flex items-center justify-between mb-3">
// //                   <span className="text-xs text-gray-500 dark:text-gray-400">Calendar</span>
// //                   <div className="flex gap-2">
// //                     <button className="p-1 text-gray-600 transition-colors rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
// //                       ‹
// //                     </button>
// //                     <button className="p-1 text-gray-600 transition-colors rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
// //                       ›
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <p className="mb-3 font-medium text-gray-900 dark:text-white">January, 2024</p>
// //                 <div className="grid grid-cols-5 gap-2 text-center">
// //                   {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, i) => (
// //                     <div key={i}>
// //                       <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">{day}</div>
// //                       <div className={`py-2 text-sm rounded-lg ${i === 3 ? 'bg-blue-900 dark:bg-amber-500 text-white font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
// //                         {12 + i}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT FEATURES */}
// //           <div className="space-y-8">
// //             {features.slice(2, 4).map((feature, index) => {
// //               const Icon = feature.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-start p-6 transition-all duration-300 bg-white border border-gray-200 shadow-md cursor-pointer rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-gray-900 dark:border-gray-800 group"
// //                 >
// //                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 bg-blue-900 rounded-lg shadow-md group-hover:bg-amber-500 dark:bg-amber-500 dark:group-hover:bg-blue-900">
// //                     <Icon className="w-6 h-6" />
// //                   </div>

// //                   <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
// //                     {feature.title}
// //                   </h3>

// //                   <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
// //                     {feature.description}
// //                   </p>

// //                   <button  className="inline-flex items-center text-sm font-medium text-blue-900 transition-colors dark:text-amber-500 hover:text-amber-500 dark:hover:text-blue-900">
// //                     Learn More →
// //                   </button>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;


// // import { TrendingUp, Target, Video, Sparkles } from "lucide-react";
// // import featuresTeamImage from '../../assets/images/home/features-team-collaboration.png';

// // const Features = () => {
// //   const features = [
// //     {
// //       title: "Trusted Expertise",
// //       description:
// //         "To uphold the highest standards of audit excellence, providing independent assurance.",
// //       icon: TrendingUp,
// //       position: "top-left"
// //     },
// //     {
// //       title: "Client-Centric Approach",
// //       description:
// //         "Focused on understanding client needs and delivering tailored, value-driven solutions.",
// //       icon: Target,
// //       position: "top-right"
// //     },
// //     {
// //       title: "Commitment to Integrity",
// //       description:
// //         "Ensuring transparency, ethics, and accountability across all engagements.",
// //       icon: Video,
// //       position: "bottom-left"
// //     },
// //     {
// //       title: "Innovative Methodologies",
// //       description:
// //         "Leveraging modern frameworks and tools to deliver smarter audit outcomes.",
// //       icon: Sparkles,
// //       position: "bottom-right"
// //     },
// //   ];

// //   return (
// //     <section className="relative z-20 w-full transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
// //       <div className="container">

// //         {/* HEADER */}
// //         <div className="mb-16 text-start">
// //           <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
// //             Simplify Your Audit Process
// //             <br />
// //             with Our Diverse Solution
// //           </h2>
// //           <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-gray-400">
// //             RiskMan is a premier audit firm that specializes in creating comprehensive
// //             audit frameworks. We leverage the power of modern methodologies.
// //           </p>
// //           <button className="px-8 py-3 mt-6 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-brandGold to-brandAccent hover:shadow-xl hover:scale-105">
// //             Start for Free
// //           </button>
// //         </div>

// //         {/* FEATURES GRID WITH CENTER IMAGE */}
// //         <div className="relative grid items-center grid-cols-1 gap-8 lg:grid-cols-3">

// //           {/* LEFT FEATURES */}
// //           <div className="space-y-8">
// //             {features.slice(0, 2).map((feature, index) => {
// //               const Icon = feature.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-start p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight border-borderLight rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-surfaceDark dark:border-borderDark group"
// //                 >
// //                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 rounded-lg shadow-md bg-brandGold">
// //                     <Icon className="w-6 h-6" />
// //                   </div>

// //                   <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
// //                     {feature.title}
// //                   </h3>

// //                   <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
// //                     {feature.description}
// //                   </p>

// //                   <span className="inline-flex items-center text-sm font-medium transition-colors text-brandGold">
// //                     Learn More →
// //                   </span>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {/* CENTER IMAGE WITH FLOATING CARDS */}
// //           <div className="relative flex items-center justify-center">
// //             <div className="relative w-full overflow-hidden shadow-2xl aspect-square rounded-3xl">

// //               {/* Professional Audit Team Collaboration Image */}
// //               <img
// //                 src={featuresTeamImage}
// //                 alt="Professional audit team collaboration"
// //                 className="absolute inset-0 object-cover w-full h-full"
// //               />

// //               {/* Overlay gradient for better card readability */}
// //               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:to-black/50"></div>

// //               {/* Stats Card - Floating Animation */}
// //               {/* <div
// //                 className="absolute p-5 border shadow-xl top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl dark:bg-gray-900/95 border-gray-200/50 dark:border-gray-700/50 animate-float"
// //                 style={{
// //                   animation: 'float 6s ease-in-out infinite'
// //                 }}
// //               >
// //                 <h4 className="mb-1 text-3xl font-bold text-brandDark dark:text-white">8.5M+</h4>
// //                 <p className="text-xs leading-relaxed text-brandNavy/70 dark:text-gray-400">
// //                   Join 8.5M+ professionals and
// //                   <br />teams using our platform.
// //                 </p>
// //               </div> */}

// //               {/* Calendar Card - Floating Animation (Delayed) */}
// //               {/* <div
// //                 className="absolute p-4 shadow-xl bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl dark:bg-gray-900/95 border border-gray-200/50 dark:border-gray-700/50 animate-float-delayed max-w-[280px]"
// //                 style={{
// //                   animation: 'float 6s ease-in-out infinite 3s'
// //                 }}
// //               >
// //                 <div className="flex items-center justify-between mb-3">
// //                   <span className="text-xs font-medium text-brandNavy/60 dark:text-gray-400">January, 2024</span>
// //                   <div className="flex gap-1">
// //                     <button className="p-1 transition-colors rounded text-brandNavy/60 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
// //                       ‹
// //                     </button>
// //                     <button className="p-1 transition-colors rounded text-brandNavy/60 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
// //                       ›
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="grid grid-cols-5 gap-1.5 text-center">
// //                   {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, i) => (
// //                     <div key={i}>
// //                       <div className="mb-1 text-[10px] font-medium text-brandNavy/50 dark:text-gray-500">{day}</div>
// //                       <div className={`py-2 text-sm font-semibold rounded-lg transition-all ${i === 3
// //                         ? 'bg-brandDark dark:bg-gray-800 text-white'
// //                         : 'text-brandNavy dark:text-gray-300'
// //                         }`}>
// //                         {12 + i}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div> */}
// //             </div>
// //           </div>

// //           {/* RIGHT FEATURES */}
// //           <div className="space-y-8">
// //             {features.slice(2, 4).map((feature, index) => {
// //               const Icon = feature.icon;
// //               return (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-start p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight border-borderLight rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-surfaceDark dark:border-borderDark group"
// //                 >
// //                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 rounded-lg shadow-md bg-brandGold">
// //                     <Icon className="w-6 h-6" />
// //                   </div>

// //                   <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
// //                     {feature.title}
// //                   </h3>

// //                   <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
// //                     {feature.description}
// //                   </p>

// //                   <span className="inline-flex items-center text-sm font-medium transition-colors text-brandGold">
// //                     Learn More →
// //                   </span>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>

// //       {/* Floating Animation Keyframes */}
// //       <style>{`
// //         @keyframes float {
// //           0%, 100% {
// //             transform: translateY(0px);
// //           }
// //           50% {
// //             transform: translateY(-10px);
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Features;


// import { TrendingUp, Target, Video, Sparkles } from "lucide-react";
 
// import featuresTeamImage from '../../assets/images/home/features-team-collaboration.png';
 
// const Features = () => {
 
//   const features = [
 
//     {
 
//       title: "Trusted Expertise",
 
//       description:
 
//         "To uphold the highest standards of audit excellence, providing independent assurance.",
 
//       icon: TrendingUp,
 
//       position: "top-left"
 
//     },
 
//     {
 
//       title: "Client-Centric Approach",
 
//       description:
 
//         "Focused on understanding client needs and delivering tailored, value-driven solutions.",
 
//       icon: Target,
 
//       position: "top-right"
 
//     },
 
//     {
 
//       title: "Commitment to Integrity",
 
//       description:
 
//         "Ensuring transparency, ethics, and accountability across all engagements.",
 
//       icon: Video,
 
//       position: "bottom-left"
 
//     },
 
//     {
 
//       title: "Innovative Methodologies",
 
//       description:
 
//         "Leveraging modern frameworks and tools to deliver smarter audit outcomes.",
 
//       icon: Sparkles,
 
//       position: "bottom-right"
 
//     },
 
//   ];
 
//   return (
//     <section className="transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
//       <div className="container">
 
//         {/* HEADER */}
//         <div className="mb-16 text-start">
//           <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
 
//             Simplify Your Audit Process
//             <br />
 
//             with Our Diverse Solution
//           </h2>
//           <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-gray-400">
 
//             RiskMan is a premier audit firm that specializes in creating comprehensive
 
//             audit frameworks. We leverage the power of modern methodologies.
//           </p>
//           <button className="px-8 py-3 mt-6 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-brandGold to-brandAccent hover:shadow-xl hover:scale-105">
 
//             Start for Free
//           </button>
//         </div>
 
//         {/* FEATURES GRID WITH CENTER IMAGE */}
//         <div className="relative grid items-center grid-cols-1 gap-8 lg:grid-cols-3">
 
//           {/* LEFT FEATURES */}
//           <div className="space-y-8">
 
//             {features.slice(0, 2).map((feature, index) => {
 
//               const Icon = feature.icon;
 
//               return (
//                 <div
 
//                   key={index}
 
//                   className="flex flex-col items-start p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight border-borderLight rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-surfaceDark dark:border-borderDark group"
//                 >
//                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 rounded-lg shadow-md bg-brandGold">
//                     <Icon className="w-6 h-6" />
//                   </div>
 
//                   <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
 
//                     {feature.title}
//                   </h3>
 
//                   <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
 
//                     {feature.description}
//                   </p>
 
//                   <span className="inline-flex items-center text-sm font-medium transition-colors text-brandGold">
 
//                     Learn More →
//                   </span>
//                 </div>
 
//               );
 
//             })}
//           </div>
 
//           {/* CENTER IMAGE */}
//           <div className="relative flex items-center justify-center">
//             <div className="relative w-full overflow-hidden shadow-2xl aspect-square rounded-3xl">
//               <img
 
//                 src={featuresTeamImage}
 
//                 alt="Professional audit team collaboration"
 
//                 className="absolute inset-0 object-cover w-full h-full"
 
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:to-black/50"></div>
//             </div>
//           </div>
 
//           {/* RIGHT FEATURES */}
//           <div className="space-y-8">
 
//             {features.slice(2, 4).map((feature, index) => {
 
//               const Icon = feature.icon;
 
//               return (
//                 <div
 
//                   key={index}
 
//                   className="flex flex-col items-start p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight border-borderLight rounded-2xl hover:shadow-xl hover:-translate-y-1 dark:bg-surfaceDark dark:border-borderDark group"
//                 >
//                   <div className="flex items-center justify-center w-12 h-12 mb-4 text-white transition-all duration-300 rounded-lg shadow-md bg-brandGold">
//                     <Icon className="w-6 h-6" />
//                   </div>
 
//                   <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
 
//                     {feature.title}
//                   </h3>
 
//                   <p className="mb-4 text-sm leading-relaxed text-brandNavy/70 dark:text-gray-400">
 
//                     {feature.description}
//                   </p>
 
//                   <span className="inline-flex items-center text-sm font-medium transition-colors text-brandGold">
 
//                     Learn More →
//                   </span>
//                 </div>
 
//               );
 
//             })}
//           </div>
 
//         </div>
//       </div>
//     </section>
 
//   );
 
// };
 
// export default Features;
 
import React from "react";
 
import strategyBg from "../../assets/images/home/strategy-bg.png";
 
const StrategicSection = () => {
  return (
    <section className="relative py-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898440/strategy-bg_lhzpgl.webp"})` }}
      />
 
      {/* Overlay (same surface logic as cards) */}
      <div className="absolute inset-0 bg-gradient-to-br from-surfaceLight/95 via-surfaceLight/90 to-surfaceLight/85 dark:from-surfaceDark/95 dark:via-surfaceDark/90 dark:to-surfaceDark/85" />
 
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Section Label */}
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Strategic Advisory
          </p>
 
          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
            Strategic Risk Management
            <br />
            & Advisory Services
          </h2>
 
          {/* Description */}
          <p className="mb-6 text-lg leading-relaxed text-brandNavy dark:text-white/70">
            At <span className="font-semibold">RiskMan Consulting</span>, we
            specialize in delivering customized solutions that empower
            businesses to navigate uncertainties and achieve sustainable growth.
            Our team of seasoned professionals combines deep industry expertise
            with an entrepreneurial mindset to provide strategic advisory
            services that drive value and resilience.
          </p>
 
          {/* Divider */}
          <div className="w-24 h-[2px] mb-8 bg-brandGold dark:bg-brandAccent" />
 
          {/* Supporting Text */}
          <p className="max-w-3xl leading-relaxed text-brandNavy dark:text-white/70">
            Our approach integrates governance, risk, compliance, financial
            discipline, and digital assurance into a cohesive framework —
            enabling leadership teams to make confident, informed decisions in a
            complex regulatory and economic environment.
          </p>
        </div>
      </div>
    </section>
  );
};
 
export default StrategicSection;
