// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { testimonials } from "./data";

// export default function TeamTestimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrentSlide((p) => (p + 1) % testimonials.length);
//     }, 7000);
//     return () => clearInterval(id);
//   }, []);

//   const next = () =>
//     setCurrentSlide((p) => (p + 1) % testimonials.length);

//   const prev = () =>
//     setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

//   const t = testimonials[currentSlide];

//   return (
//     <section className="relative py-16 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container max-w-6xl px-4 mx-auto">

//         {/* Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center text-brandDark dark:text-brandAccent">
//           <h2 className="mb-5 text-4xl font-black sm:text-5xl">
//             Voices from Our Team
//           </h2>
//           <p className="text-lg opacity-70 text-brandNavy dark:text-white">
//             Experiences that reflect growth, trust, and shared success.
//           </p>
//         </div>

//         {/* ===== Card Wrapper ===== */}
//         <div className="relative max-w-5xl mx-auto">

//           {/* Card - Horizontal Layout */}
//           <div className="p-10 rounded-[2.5rem] border backdrop-blur-xl bg-surfaceLight dark:bg-surfaceDark shadow-lg">
            
//             <div className="flex items-start gap-8">
              
//               {/* Left Side - Image and Info */}
//               <div className="flex-shrink-0">
//                 {/* Avatar */}
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="object-cover w-32 h-32 border-4 rounded-full border-brandGold/30"
//                 />
                
//                 {/* Name and Position below image */}
//                 <div className="mt-4">
//                   <div className="text-xl font-bold text-brandDark dark:text-brandAccent">{t.name}</div>
//                   {t.position && (
//                     <div className=" text-brandGold dark:text-white">{t.position}</div>
//                   )}
//                 </div>
//               </div>

//               {/* Right Side - Quote and Tag */}
//               <div className="flex-1">
//                 {/* Quote */}
//                 <p className="text-lg italic leading-relaxed text-brandPrimary dark:text-white/70">
//                   {t.quote}
//                 </p>

//                 {/* Tag at bottom right */}
//                 {t.tag && (
//                   <div className="flex items-center gap-1 mt-6 text-sm">
//                     <Star className="w-4 h-4 fill-brandGold text-brandGold" />
//                     {t.tag}
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>

//           {/* ===== Side Navigation Buttons ===== */}

//           <button
//             onClick={prev}
//             className="absolute flex items-center justify-center w-12 h-12 transition -translate-y-1/2 border rounded-full shadow -left-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={next}
//             className="absolute flex items-center justify-center w-12 h-12 transition -translate-y-1/2 border rounded-full shadow -right-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
//           >
//             <ChevronRight />
//           </button>

//         </div>

//         {/* Dots */}
//         <div className="flex justify-center w-20 gap-3 mx-auto mt-10">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentSlide(i)}
//               className={`w-[1px] h-[1px] rounded-full transition ${
//                 currentSlide === i
//                   ? "bg-brandGold "
//                   : "bg-zinc-400/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "./data";

export default function TeamTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(id);
  }, []);

  const next = () =>
    setCurrentSlide((p) => (p + 1) % testimonials.length);

  const prev = () =>
    setCurrentSlide((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[currentSlide];

  return (
    <section className="relative py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl px-6 lg:px-12 mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center text-brandDark dark:text-brandAccent">
          <h2 className="mb-5 text-3xl font-black md:text-4xl">
            Voices from Our Team
          </h2>
          <p className="text-lg opacity-70 text-brandNavy dark:text-white">
            Experiences that reflect growth, trust, and shared success.
          </p>
        </div>

        {/* ===== Card Wrapper ===== */}
        <div className="relative max-w-5xl mx-auto">

          {/* Card - Responsive Layout */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-[2.5rem] border backdrop-blur-xl bg-surfaceLight dark:bg-surfaceDark shadow-lg">
            
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
              
              {/* Left Side - Image and Info */}
              <div className="flex-shrink-0 text-center sm:text-left">
                {/* Avatar */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-24 h-24 mx-auto border-4 rounded-full sm:w-28 sm:h-28 lg:w-32 lg:h-32 border-brandGold/30 sm:mx-0"
                />
                
                {/* Name and Position below image */}
                <div className="mt-3">
                  <div className="text-lg font-bold sm:text-xl text-brandDark dark:text-brandAccent">{t.name}</div>
                  {t.position && (
                    <div className="text-sm sm:text-base text-brandGold dark:text-white">{t.position}</div>
                  )}
                </div>
              </div>

              {/* Right Side - Quote and Tag */}
              <div className="flex-1 w-full min-w-0">
                {/* Quote - Optimized width */}
                <div className="max-w-2xl mx-auto sm:mx-0">
                  <p className="text-base font-normal leading-relaxed text-center sm:text-left text-brandPrimary dark:text-white/70" style={{ lineHeight: '1.6' }}>
                    {t.quote}
                  </p>

                  {/* Tag at bottom */}
                  {t.tag && (
                    <div className="flex items-center justify-center gap-1 mt-4 text-sm sm:justify-start">
                      <Star className="w-4 h-4 fill-brandGold text-brandGold" />
                      {t.tag}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ===== Side Navigation Buttons ===== */}

          <button
            onClick={prev}
            className="absolute items-center justify-center hidden w-12 h-12 transition -translate-y-1/2 border rounded-full shadow sm:flex -left-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute items-center justify-center hidden w-12 h-12 transition -translate-y-1/2 border rounded-full shadow sm:flex -right-6 top-1/2 bg-white/90 dark:bg-brandAccent hover:scale-105"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mx-auto mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === i
                  ? "w-8 h-2 bg-brandGold"
                  : "w-2 h-2 bg-zinc-400/50 hover:bg-zinc-400/70"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}