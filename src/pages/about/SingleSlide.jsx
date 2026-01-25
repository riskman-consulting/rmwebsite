// import React from "react";
// import { ArrowRight, Users } from "lucide-react";
// import { motion } from "framer-motion";

// export default function SingleSlide() {
//   const teamAvatars = [
//     "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/Shanta_Pal_fyz3dq.webp",
//     "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895926/pranshul_jxkf7z.webp",
//     "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895921/Vishal_Sharma_qfwz3c.webp"
//   ];

//   return (
//     <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/Hero1.webp"
//           alt="Strategic consulting and sustainable growth"
//           className="object-cover w-full h-full"
//         />
//         {/* Gradient Overlay - RiskMan Brand Colors */}
//         <div className="absolute inset-0 bg-gradient-to-r from-brandNavy/95 via-brandNavy/90 to-brandNavy/70 dark:from-brandNavy/98 dark:via-brandNavy/95 dark:to-brandNavy/80" />
        
//         {/* Additional texture overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,192,0,0.1),transparent_50%)]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-12">
//         <div className="grid items-center grid-cols-1 gap-12 py-20 lg:py-32 lg:grid-cols-12">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="lg:col-span-7"
//           >
//             <motion.span
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/20 border border-brandAccent/40 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]"
//             >
//               Welcome to RiskMan
//             </motion.span>

//             <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl">
//               RiskMan Consulting:{" "}
//               <span className="block mt-3 font-serif italic font-medium text-brandGold">
//                 Your Partner in Sustainable Growth
//               </span>
//             </h1>

//             <p className="max-w-2xl mb-10 text-lg leading-relaxed text-white/80 lg:text-xl">
//               Strategic risk advisory driven by{" "}
//               <span className="font-semibold text-brandAccent">propreneurs</span>.
//               We deliver customized solutions that secure sustainable growth
//               and create enduring value for global enterprises.
//             </p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex flex-wrap gap-4 mb-12"
//             >
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all rounded-full shadow-lg text-brandDark bg-brandAccent hover:scale-105 hover:shadow-xl group"
//               >
//                 Get Started
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </a>

//               <a
//                 href="/about"
//                 className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all border rounded-full border-white/30 hover:bg-white/10 hover:border-white"
//               >
//                 Learn More
//               </a>
//             </motion.div>

//             {/* Team Avatars */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex items-center gap-4"
//             >
//               <div className="flex -space-x-3">
//                 {teamAvatars.map((avatar, idx) => (
//                   <img
//                     key={idx}
//                     src={avatar}
//                     alt={`Team member ${idx + 1}`}
//                     className="object-cover w-12 h-12 border-4 rounded-full border-brandNavy"
//                   />
//                 ))}
//               </div>
//               <div className="text-white">
//                 <p className="text-sm font-bold">Enabling sustainable growth</p>
//                 <p className="text-xs text-white/70">for global enterprises</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE - Stats or Additional Content */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="lg:col-span-5"
//           >
//             <div className="space-y-6">
//               {/* Stats Card 1 */}
//               {/* <div className="p-6 border backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brandAccent/20">
//                     <svg className="w-8 h-8 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-black text-white">100+</p>
//                     <p className="text-sm font-semibold text-white/70">Success Stories</p>
//                   </div>
//                 </div>
//               </div> */}

//               {/* Stats Card 2 */}
//               {/* <div className="p-6 border backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brandGold/20">
//                     <Users className="w-8 h-8 text-brandGold" />
//                   </div>
//                   <div>
//                     <p className="text-3xl font-black text-white">50+</p>
//                     <p className="text-sm font-semibold text-white/70">Expert Professionals</p>
//                   </div>
//                 </div>
//               </div> */}

//               {/* Stats Card 3 */}
//               {/* <div className="p-6 border backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl">
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brandAccent/20">
//                     <svg className="w-8 h-8 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-3xl font-black text-white">15+</p>
//                     <p className="text-sm font-semibold text-white/70">Years of Excellence</p>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { ArrowRight } from "lucide-react";
 
export default function SingleSlide() {
  const teamAvatars = [
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/Shanta_Pal_fyz3dq.webp",
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895926/pranshul_jxkf7z.webp",
    // "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895921/Vishal_Sharma_qfwz3c.webp"

    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1769154641/sukant_sir_nelcot.webp",
    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906764/Arpit_Garg_Image_dlfmvh.webp"
  ];

  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-[#001122]">
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero1.webp"
          alt="Strategic consulting"
          className="object-cover w-full h-full object-[70%_center]" // Focus shifted right to make space for text
        />
        {/* 2. THE UI GRADIENT (Teal/Dark Blue to Transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-bgDark/100 to-transparent" />
      </div>
 
      {/* 3. CONTENT LAYER */}
      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="max-w-3xl">
          {/* Headline - Styled like the image */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            RiskMan Consulting: <br />
            <span className="font-medium opacity-90 text-[#FFC000] dark:text-[#FFC000]">
              Your Partner in Sustainable Growth
            </span>
          </h1>
 
          {/* Body Text */}
          <p className="max-w-xl mt-8 text-lg leading-relaxed md:text-xl text-white/80">
            Strategic risk advisory driven by <strong className="text-white">propreneurs</strong>.
            We deliver customized solutions that secure sustainable growth and
            create enduring value for global enterprises.
          </p>
 
          {/* Action Buttons - Left Aligned */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white uppercase tracking-wider transition-all bg-[#004080] hover:bg-[#0056b3] border border-white/10"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
 
            <a
              href="/about#introduction"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider text-white uppercase transition-all border border-white/30 backdrop-blur-sm hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
 
          {/* 4. SOCIAL PROOF / AVATAR GROUP (Bottom element from image) */}
          <div className="flex items-center gap-4 mt-16 md:mt-24">
            <div className="flex -space-x-4">
              {teamAvatars.map((image,i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#001a17] overflow-hidden">
                  <img src={image} alt="Expert" />
                </div>
              ))}
            </div>
            <div className="text-white/90">
              <p className="text-sm font-bold leading-tight tracking-tight uppercase">
                Enabling digital evolution
              </p>
              <p className="text-xs opacity-70">Securing global enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}