// // import React, { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// // const Testimonials = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [direction, setDirection] = useState(0);

// //   const testimonials = [
// //     {
// //       id: 1,
// //       name: "Andreas Lim",
// //       role: "CFO, Pacific Holdings Group",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes significantly.",
// //     },
// //     {
// //       id: 2,
// //       name: "Sarah Chen",
// //       role: "Director of Finance, TechCorp Industries",
// //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls and risk management.",
// //     },
// //     {
// //       id: 3,
// //       name: "Michael Rodriguez",
// //       role: "CEO, Global Manufacturing Ltd",
// //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
// //     },
// //     {
// //       id: 4,
// //       name: "Emily Thompson",
// //       role: "VP Operations, RetailMax Group",
// //       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
// //     },
// //   ];

// //   const nextSlide = () => {
// //     setDirection(1);
// //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// //   };

// //   const prevSlide = () => {
// //     setDirection(-1);
// //     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// //   };

// //   // Auto-advance every 6 seconds
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       nextSlide();
// //     }, 6000);

// //     return () => clearInterval(timer);
// //   }, [currentIndex]);

// //   const current = testimonials[currentIndex];

// //   return (
// //     <section className="relative w-full py-20 transition-colors duration-300 md:py-28 bg-bgLight dark:bg-bgDark">
// //       {/* ✅ MATCH HEADER CONTAINER */}
// //       {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
// //       <div className="container">

// //         {/* HEADER */}
// //         <div className="mb-16">
// //           <p className="mb-3 text-sm tracking-[0.3em] uppercase text-brandGold dark:text-brandAccent font-semibold">
// //             Testimonials
// //           </p>
// //           <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-brandDark dark:text-white">
// //             Clients Feedback
// //           </h2>
// //         </div>

// //         {/* CONTENT GRID */}
// //         <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

// //           {/* LEFT: Stats */}
// //           <div className="space-y-8 lg:col-span-3">
// //             {/* Client Count */}
// //             <div>
// //               <div className="mb-2 text-5xl font-bold md:text-6xl text-brandGold dark:text-brandAccent">
// //                 120+
// //               </div>
// //               <p className="text-sm font-medium text-brandNavy dark:text-gray-400">
// //                 Trusted Clients Worldwide
// //               </p>
// //             </div>

// //             {/* Thumbnail Grid */}
// //             <div className="grid grid-cols-4 gap-3 lg:grid-cols-2">
// //               {testimonials.map((testimonial, idx) => (
// //                 <button
// //                   key={testimonial.id}
// //                   onClick={() => {
// //                     setDirection(idx > currentIndex ? 1 : -1);
// //                     setCurrentIndex(idx);
// //                   }}
// //                   className={`
// //                     aspect-square rounded-lg overflow-hidden
// //                     transition-all duration-300
// //                     ${idx === currentIndex 
// //                       ? 'ring-2 ring-brandGold dark:ring-brandAccent scale-105' 
// //                       : 'opacity-60 hover:opacity-100 hover:scale-105'
// //                     }
// //                   `}
// //                 >
// //                   <img
// //                     src={testimonial.image}
// //                     alt={testimonial.name}
// //                     className="object-cover w-full h-full"
// //                   />
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* CENTER: Image */}
// //           <div className="lg:col-span-4">
// //             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-borderLight dark:ring-borderDark">
// //               <img
// //                 key={current.id}
// //                 src={current.image}
// //                 alt={current.name}
// //                 className="object-cover w-full h-full animate-fadeIn"
// //               />

// //               {/* Gradient Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
// //             </div>
// //           </div>

// //           {/* RIGHT: Testimonial Content */}
// //           <div className="space-y-6 lg:col-span-5">

// //             {/* Review Platform Badge */}
// //             <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full shadow-md bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
// //               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
// //                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
// //                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
// //                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
// //                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
// //               </svg>
// //               <span className="text-sm font-medium text-brandDark dark:text-white">
// //                 Google Reviews
// //               </span>
// //             </div>

// //             {/* Rating */}
// //             <div className="flex items-center gap-1">
// //               {[...Array(current.rating)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className="w-6 h-6 fill-brandGold text-brandGold dark:fill-brandAccent dark:text-brandAccent"
// //                 />
// //               ))}
// //               <span className="ml-2 text-sm text-brandNavy dark:text-gray-400">
// //                 {current.rating}/5
// //               </span>
// //             </div>

// //             {/* Testimonial Text */}
// //             <div key={current.id} className="animate-fadeIn">
// //               <p className="mb-6 text-lg leading-relaxed md:text-xl lg:text-2xl text-brandDark dark:text-white">
// //                 "{current.text}"
// //               </p>

// //               {/* Author Info */}
// //               <div>
// //                 <h4 className="mb-1 text-xl font-bold text-brandDark dark:text-white">
// //                   {current.name}
// //                 </h4>
// //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// //                   {current.role}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Navigation Arrows */}
// //             <div className="flex items-center gap-3 pt-4">
// //               <button
// //                 onClick={prevSlide}
// //                 className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full shadow-md bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark text-brandDark dark:text-white hover:bg-brandGold/10 dark:hover:bg-brandAccent/10 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg"
// //                 aria-label="Previous testimonial"
// //               >
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>

// //               <button
// //                 onClick={nextSlide}
// //                 className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-full shadow-md bg-gradient-to-r from-brandDark to-brandNavy dark:from-brandAccent dark:to-brandGold dark:text-brandDark hover:shadow-lg hover:scale-105"
// //                 aria-label="Next testimonial"
// //               >
// //                 <ChevronRight className="w-5 h-5" />
// //               </button>

// //               {/* Progress Indicator */}
// //               <div className="flex items-center gap-2 ml-4">
// //                 {testimonials.map((_, idx) => (
// //                   <div
// //                     key={idx}
// //                     className={`
// //                       h-1 rounded-full transition-all duration-300
// //                       ${idx === currentIndex 
// //                         ? 'w-8 bg-brandGold dark:bg-brandAccent' 
// //                         : 'w-1 bg-borderLight dark:bg-borderDark'
// //                       }
// //                     `}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .animate-fadeIn {
// //           animation: fadeIn 0.5s ease-out;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Testimonials;


// // import React, { useState, useEffect } from "react";

// // const Testimonials = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const testimonials = [
// //     {
// //       id: 1,
// //       name: "Andreas Lim",
// //       role: "CFO, Pacific Holdings Group",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes significantly.",
// //     },
// //     {
// //       id: 2,
// //       name: "Sarah Chen",
// //       role: "Director of Finance, TechCorp Industries",
// //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls and risk management.",
// //     },
// //     {
// //       id: 3,
// //       name: "Michael Rodriguez",
// //       role: "CEO, Global Manufacturing Ltd",
// //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
// //     },
// //     {
// //       id: 4,
// //       name: "Emily Thompson",
// //       role: "VP Operations, RetailMax Group",
// //       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
// //       rating: 5,
// //       text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
// //     },
// //   ];

// //   // Auto-advance every 6 seconds
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// //     }, 6000);

// //     return () => clearInterval(timer);
// //   }, [currentIndex]);

// //   const current = testimonials[currentIndex];

// //   return (
// //     <section className="relative w-full px-3 py-8 bg-bgLight dark:bg-bgDark">
// //       <div className="container px-5 mx-auto sm:px-8 lg:px-12 max-w-7xl">

// //         {/* Layout Grid */}
// //         <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

// //           {/* LEFT SIDE - Header */}
// //           <div>
// //             <p className="mb-3 text-sm tracking-[0.3em] uppercase text-brandGold dark:text-brandAccent font-semibold">
// //               Testimonials ↗
// //             </p>
// //             <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
// //               This is what our clients think about us
// //             </h2>
// //           </div>

// //           {/* RIGHT SIDE - Testimonials */}
// //           <div className="space-y-8">

// //             {/* Avatar Row */}
// //             <div className="flex gap-4">
// //               {testimonials.map((testimonial, idx) => (
// //                 <button
// //                   key={testimonial.id}
// //                   onClick={() => setCurrentIndex(idx)}
// //                   className={`
// //                     relative transition-all duration-300
// //                     ${idx === currentIndex ? 'scale-110' : 'opacity-60 hover:opacity-100'}
// //                   `}
// //                 >
// //                   <div className={`
// //                     w-14 h-14 rounded-full overflow-hidden border-2 transition-all
// //                     ${idx === currentIndex
// //                       ? 'border-brandGold dark:border-brandAccent'
// //                       : 'border-transparent'
// //                     }
// //                   `}>
// //                     <img
// //                       src={testimonial.image}
// //                       alt={testimonial.name}
// //                       className="object-cover w-full h-full"
// //                     />
// //                   </div>
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Name and Role - Outside Card */}
// //             <div key={current.id} className="mt-4 text-center animate-fadeIn">
// //               <h3 className="text-lg font-bold text-brandDark dark:text-white">
// //                 {current.name}
// //               </h3>
// //               <p className="text-sm text-brandNavy dark:text-gray-400">
// //                 {current.role}
// //               </p>
// //             </div>

// //             {/* Testimonial Card */}
// //             <div className="p-8 bg-white border shadow-lg dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">

// //               {/* Company Badge */}
// //               <div className="inline-flex items-center gap-2 mb-6">
// //                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
// //                   <span className="text-xs font-bold text-white">
// //                     {current.role.split(',')[0][0]}
// //                   </span>
// //                 </div>
// //                 <span className="text-sm font-semibold text-brandDark dark:text-white">
// //                   {current.role.split(',')[0]}
// //                 </span>
// //                 <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                   <path d="M7 17L17 7M17 7H7M17 7V17" className="text-brandNavy dark:text-gray-400" />
// //                 </svg>
// //               </div>

// //               {/* Quote */}
// //               <div key={current.id} className="animate-fadeIn">
// //                 <p className="text-xl font-normal leading-relaxed md:text-2xl text-brandDark dark:text-white">
// //                   "{current.text}"
// //                 </p>
// //               </div>

// //             </div>

// //           </div>
// //         </div>

// //       </div>

// //       <style>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
        
// //         .animate-fadeIn {
// //           animation: fadeIn 0.5s ease-out;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Testimonials;

// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Andreas Lim",
//       role: "CFO at Pacific Holdings Group",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//       text: "Revora lets us review an RFP quickly and decide on bidding. It has cut iteration cycles and reduced leadership involvement by 40%.",
//     },
//     {
//       id: 2,
//       name: "Mark Johnson",
//       role: "Operations Director at Future Solutions",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
//       text: "Revora simplifies project tracking, allowing us to meet deadlines more effectively. We've seen a 25% increase in on-time delivery.",
//     },
//     {
//       id: 3,
//       name: "Jane Smith",
//       role: "Project Manager at Tech Industries",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
//       text: "Revora enables seamless collaboration on proposals, enhancing communication and transparency across the entire organization.",
//     },
//   ];

//   return (
//     <section className="w-full py-20 bg-[#FBFBF9] dark:bg-[#06071B]">
//       <div className="container max-w-6xl px-6 mx-auto">
        
//         {/* HEADER - Compact & Clean */}
//         <div className="flex flex-col justify-between gap-6 mb-12 md:flex-row md:items-end">
//           <div className="max-w-xl">
//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brandGold mb-3 block">
//               ✦ Testimonials
//             </span>
//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-brandDark dark:text-white">
//               What Our Clients Say
//             </h2>
//           </div>
//           <button className="px-5 py-2.5 bg-[#7C4134] hover:bg-[#633329] text-white rounded-full text-xs font-bold transition-all hover:shadow-lg">
//             View All
//           </button>
//         </div>

//         {/* COMPACT CARDS GRID */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {testimonials.map((item) => (
//             <div 
//               key={item.id} 
//               className="group bg-white dark:bg-[#0A0B24] p-7 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               {/* Profile & Quote */}
//               <div className="flex items-start justify-between mb-6">
//                 <div className="w-12 h-12 overflow-hidden transition-all duration-500 rounded-xl grayscale group-hover:grayscale-0">
//                   <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
//                 </div>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-colors text-brandGold/20 group-hover:text-brandGold/40">
//                   <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 15.1046 10.017 14V9C10.017 7.89543 9.12157 7 8.017 7H5.017C3.91243 7 3.017 7.89543 3.017 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>

//               {/* Text - Smaller & more readable */}
//               <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-8 italic">
//                 "{item.text}"
//               </p>

//               {/* Footer - Minimalist */}
//               <div className="flex items-center gap-3 pt-5 border-t border-gray-50 dark:border-white/5">
//                 <div className="flex flex-col">
//                   <span className="text-sm font-bold text-brandDark dark:text-white">
//                     {item.name}
//                   </span>
//                   <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
//                     {item.role}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from "react";
import { Quote, ArrowUpRight } from "lucide-react";
// import image1 from "../../assets/images/home/s-manna.webp"
// import image2 from "../../assets/images/home/s-sarkar.webp"
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const testimonials = [
    {
      id: 1,
      name: "Soumen Sarkar",
      role: "Managing Director | Nexval",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898439/s-sarkar_tpw74c.webp",
      text: "From the outset, Riskman demonstrated unparalleled dedication to understanding our organizations unique challenges and objectives. Their team exhibited an impressive depth of knowledge and experience, offering tailored solutions.",
    },
    {
      id: 2,
      name: "Swapan Kumar Manna",
      role: "CEO,Oneskai",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898439/s-manna_dassro.webp",
      text: "RiskMan has been instrumental in strengthening our internal controls and regulatory compliance. Their expert guidance in risk management and audit helped us align with industry best practices while staying agile.",
    },
    // {
    //   id: 3,
    //   name: "Michael Rodriguez",
    //   role: "CEO, Global Manufacturing Ltd",
    //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
    //   text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
    // },
    // {
    //   id: 4,
    //   name: "Emily Thompson",
    //   role: "VP Operations, RetailMax Group",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
    //   text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
    // },
  ];
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);
 
  const current = testimonials[currentIndex];
 
  return (
    <section className="relative w-full py-12 overflow-hidden transition-colors duration-300 sm:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
         
          {/* LEFT SIDE - Typography strictly following KeyServices */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm tracking-[0.2em] uppercase font-bold text-brandNavy dark:text-brandAccent">
              Testimonials
            </p>
           
            <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl text-brandDark dark:text-white">
              What Our <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Clients</span> Say
            </h2>
 
            <p className="max-w-2xl mb-10 text-lg leading-relaxed text-brandNavy dark:text-white/70">
              We don't just identify gaps; we build the bridges to fill them.
              Our clients' feedback reflects our commitment to excellence and
              strategic transformation.
            </p>
 
            {/* Navigation Avatars */}
            <div className="flex flex-wrap gap-4">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-16 rounded-full transition-all duration-500 p-1 ${
                    idx === currentIndex
                    ? 'ring-2 ring-brandGold dark:ring-brandAccent scale-110 shadow-lg'
                    : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
 
          {/* RIGHT SIDE - Testimonial Card */}
          <div className="relative">
            <div
              key={current.id}
              className="animate-fadeIn p-8 md:p-12 bg-white dark:bg-surfaceDark border border-gray-200 dark:border-borderDark shadow-2xl rounded-[2.5rem] relative z-10"
            >
              {/* Subtle Quote Mark Reference */}
              <div className="absolute top-8 right-8 text-brandGold/10 dark:text-brandAccent/10">
                <Quote size={80} fill="currentColor" />
              </div>
 
              {/* Company & Role Badge - Matches KeyServices ID Style */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brandNavy/5 dark:bg-brandAccent/10 text-brandGold dark:text-brandAccent">
                  <span className="text-sm font-black">{current.id.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs font-black tracking-widest uppercase text-brandNavy/60 dark:text-white/50">
                  {current.role.split(',')[1]?.trim() || "Global Partner"}
                </span>
              </div>
 
              {/* Main Quote Text - Sizes follow KeyServices header logic */}
              <blockquote className="mb-10">
                <p className="text-xl italic font-bold leading-relaxed md:text-2xl text-brandDark dark:text-white">
                  "{current.text}"
                </p>
              </blockquote>
 
              {/* Person Details - Style from FAQ headers */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-100 dark:border-white/5">
                <div>
                  <h3 className="text-lg font-black tracking-tight uppercase text-brandDark dark:text-white">
                    {current.name}
                  </h3>
                  <p className="text-sm font-bold text-brandGold dark:text-brandAccent">
                    {current.role.split(',')[0]}
                  </p>
                </div>
               
                {/* Visual Arrow Reference from KeyServices */}
                <div className="flex items-center justify-center w-12 h-12 border-2 rounded-full border-brandGold/20 text-brandGold dark:border-brandAccent/20 dark:text-brandAccent">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
 
            {/* Card Shadow Layer */}
            <div className="absolute inset-0 bg-brandGold/5 dark:bg-brandAccent/5 translate-x-4 translate-y-4 rounded-[2.5rem] -z-10" />
          </div>
        </div>
      </div>
 
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};
 
export default Testimonials;