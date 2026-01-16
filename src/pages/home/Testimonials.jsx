// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Andreas Lim",
//       role: "CFO, Pacific Holdings Group",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
//       rating: 5,
//       text: "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes significantly.",
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "Director of Finance, TechCorp Industries",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
//       rating: 5,
//       text: "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls and risk management.",
//     },
//     {
//       id: 3,
//       name: "Michael Rodriguez",
//       role: "CEO, Global Manufacturing Ltd",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
//       rating: 5,
//       text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
//     },
//     {
//       id: 4,
//       name: "Emily Thompson",
//       role: "VP Operations, RetailMax Group",
//       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
//       rating: 5,
//       text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
//     },
//   ];

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Auto-advance every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 6000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const current = testimonials[currentIndex];

//   return (
//     <section className="relative w-full py-20 transition-colors duration-300 md:py-28 bg-bgLight dark:bg-bgDark">
//       {/* ✅ MATCH HEADER CONTAINER */}
//       {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
//       <div className="container">

//         {/* HEADER */}
//         <div className="mb-16">
//           <p className="mb-3 text-sm tracking-[0.3em] uppercase text-brandGold dark:text-brandAccent font-semibold">
//             Testimonials
//           </p>
//           <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-brandDark dark:text-white">
//             Clients Feedback
//           </h2>
//         </div>

//         {/* CONTENT GRID */}
//         <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

//           {/* LEFT: Stats */}
//           <div className="space-y-8 lg:col-span-3">
//             {/* Client Count */}
//             <div>
//               <div className="mb-2 text-5xl font-bold md:text-6xl text-brandGold dark:text-brandAccent">
//                 120+
//               </div>
//               <p className="text-sm font-medium text-brandNavy dark:text-gray-400">
//                 Trusted Clients Worldwide
//               </p>
//             </div>

//             {/* Thumbnail Grid */}
//             <div className="grid grid-cols-4 gap-3 lg:grid-cols-2">
//               {testimonials.map((testimonial, idx) => (
//                 <button
//                   key={testimonial.id}
//                   onClick={() => {
//                     setDirection(idx > currentIndex ? 1 : -1);
//                     setCurrentIndex(idx);
//                   }}
//                   className={`
//                     aspect-square rounded-lg overflow-hidden
//                     transition-all duration-300
//                     ${idx === currentIndex 
//                       ? 'ring-2 ring-brandGold dark:ring-brandAccent scale-105' 
//                       : 'opacity-60 hover:opacity-100 hover:scale-105'
//                     }
//                   `}
//                 >
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="object-cover w-full h-full"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* CENTER: Image */}
//           <div className="lg:col-span-4">
//             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-borderLight dark:ring-borderDark">
//               <img
//                 key={current.id}
//                 src={current.image}
//                 alt={current.name}
//                 className="object-cover w-full h-full animate-fadeIn"
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             </div>
//           </div>

//           {/* RIGHT: Testimonial Content */}
//           <div className="space-y-6 lg:col-span-5">

//             {/* Review Platform Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full shadow-md bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//               <span className="text-sm font-medium text-brandDark dark:text-white">
//                 Google Reviews
//               </span>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center gap-1">
//               {[...Array(current.rating)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 fill-brandGold text-brandGold dark:fill-brandAccent dark:text-brandAccent"
//                 />
//               ))}
//               <span className="ml-2 text-sm text-brandNavy dark:text-gray-400">
//                 {current.rating}/5
//               </span>
//             </div>

//             {/* Testimonial Text */}
//             <div key={current.id} className="animate-fadeIn">
//               <p className="mb-6 text-lg leading-relaxed md:text-xl lg:text-2xl text-brandDark dark:text-white">
//                 "{current.text}"
//               </p>

//               {/* Author Info */}
//               <div>
//                 <h4 className="mb-1 text-xl font-bold text-brandDark dark:text-white">
//                   {current.name}
//                 </h4>
//                 <p className="text-sm text-brandNavy dark:text-gray-400">
//                   {current.role}
//                 </p>
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex items-center gap-3 pt-4">
//               <button
//                 onClick={prevSlide}
//                 className="flex items-center justify-center w-12 h-12 transition-all duration-200 border rounded-full shadow-md bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark text-brandDark dark:text-white hover:bg-brandGold/10 dark:hover:bg-brandAccent/10 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg"
//                 aria-label="Previous testimonial"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 rounded-full shadow-md bg-gradient-to-r from-brandDark to-brandNavy dark:from-brandAccent dark:to-brandGold dark:text-brandDark hover:shadow-lg hover:scale-105"
//                 aria-label="Next testimonial"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>

//               {/* Progress Indicator */}
//               <div className="flex items-center gap-2 ml-4">
//                 {testimonials.map((_, idx) => (
//                   <div
//                     key={idx}
//                     className={`
//                       h-1 rounded-full transition-all duration-300
//                       ${idx === currentIndex 
//                         ? 'w-8 bg-brandGold dark:bg-brandAccent' 
//                         : 'w-1 bg-borderLight dark:bg-borderDark'
//                       }
//                     `}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Andreas Lim",
      role: "CFO, Pacific Holdings Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      rating: 5,
      text: "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes significantly.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Director of Finance, TechCorp Industries",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
      rating: 5,
      text: "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls and risk management.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "CEO, Global Manufacturing Ltd",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
      rating: 5,
      text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
    },
    {
      id: 4,
      name: "Emily Thompson",
      role: "VP Operations, RetailMax Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
      rating: 5,
      text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
    },
  ];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full px-3 py-8 bg-bgLight dark:bg-bgDark">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12 max-w-7xl">

        {/* Layout Grid */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE - Header */}
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-brandGold dark:text-brandAccent font-semibold">
              Testimonials ↗
            </p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
              This is what our clients think about us
            </h2>
          </div>

          {/* RIGHT SIDE - Testimonials */}
          <div className="space-y-8">

            {/* Avatar Row */}
            <div className="flex gap-4">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    relative transition-all duration-300
                    ${idx === currentIndex ? 'scale-110' : 'opacity-60 hover:opacity-100'}
                  `}
                >
                  <div className={`
                    w-14 h-14 rounded-full overflow-hidden border-2 transition-all
                    ${idx === currentIndex
                      ? 'border-brandGold dark:border-brandAccent'
                      : 'border-transparent'
                    }
                  `}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Name and Role - Outside Card */}
            <div key={current.id} className="mt-4 text-center animate-fadeIn">
              <h3 className="text-lg font-bold text-brandDark dark:text-white">
                {current.name}
              </h3>
              <p className="text-sm text-brandNavy dark:text-gray-400">
                {current.role}
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="p-8 bg-white border shadow-lg dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">

              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600">
                  <span className="text-xs font-bold text-white">
                    {current.role.split(',')[0][0]}
                  </span>
                </div>
                <span className="text-sm font-semibold text-brandDark dark:text-white">
                  {current.role.split(',')[0]}
                </span>
                <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" className="text-brandNavy dark:text-gray-400" />
                </svg>
              </div>

              {/* Quote */}
              <div key={current.id} className="animate-fadeIn">
                <p className="text-xl font-normal leading-relaxed md:text-2xl text-brandDark dark:text-white">
                  "{current.text}"
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;