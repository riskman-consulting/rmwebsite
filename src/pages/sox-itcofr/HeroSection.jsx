// import React from 'react';
// import bg from "../../assets/images/sox/hero.png";
// import { Link } from 'react-router-dom';

// function HeroSection() {
//   return (
//     <section className="relative min-h-[90vh] lg:top-10 flex items-center bg-brandDark overflow-hidden">
      
//       {/* 1. VISUAL SIDE (RIGHT) */}
//       <div className="absolute top-0 right-0 z-0 w-full h-full lg:w-1/2">
//         <div className="relative w-full h-full">
//           <img 
//             src={bg} 
//             alt="Compliance Hero" 
//             className="object-cover w-full h-full opacity-50 lg:opacity-80" 
//           />
//           {/* Transition Gradient from brandDark to Image */}
//           <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/40 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent" />
//         </div>
//       </div>

//       {/* 2. BACKGROUND DECOR */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Subtle Grid using brandNavy */}
//         <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#003366_1px,transparent_1px)] [background-size:30px_30px]" />
//         {/* Ambient Glow using brandAccent */}
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brandAccent/10 blur-[120px] rounded-full" />
//       </div>

//       {/* 3. MAIN CONTENT */}
//       <div className="container relative z-10">
//         <div className="max-w-3xl">
//           {/* Top Label */}
//           <div className="flex items-center gap-3 mb-6 animate-[fadeInLeft_0.8s_ease-out]">
//             <div className="w-10 h-[2px] bg-brandAccent" />
//             <span className="text-brandAccent text-xs font-black uppercase tracking-[0.3em]">
//               Risk Advisory Specialist
//             </span>
//           </div>

//           <div className="space-y-8">
//             <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
//               Governance and <br />
//               <span className="text-brandGold">Compliance Excellence</span>
//             </h1>

//             <p className="text-lg md:text-xl text-brandLight/80 leading-relaxed max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
//               RiskMan delivers comprehensive SOX, ICOFR, and IFC solutions, strengthening internal controls and ensuring regulatory compliance through expert risk-based assessments and testing.
//             </p>

//             {/* BUTTONS */}
//             <div className="flex flex-wrap gap-5 pt-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
//               <Link 
//                 to="/services" 
//                 className="px-10 py-4 font-bold transition-all duration-300 rounded-sm shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold shadow-brandAccent/20 hover:shadow-brandGold/40 hover:-translate-y-1"
//               >
//                 View Our Services
//               </Link>
              
//               <Link 
//                 href="/contact" 
//                 className="px-10 py-4 font-bold text-white transition-all duration-300 border-2 rounded-sm border-white/20 hover:border-brandAccent hover:bg-white/5"
//               >
//                 Speak to Our Team
//               </Link>
//             </div>

//             {/* TAGS BAR */}
//             <div className="flex items-center gap-8 pt-12 opacity-50 border-t border-white/10 mt-12 animate-[fadeIn_1s_ease-out_0.6s_both]">
//               <span className="text-xs font-bold tracking-widest text-white uppercase">SOX Compliance</span>
//               <span className="text-xs font-bold tracking-widest text-white uppercase">ICOFR</span>
//               <span className="text-xs font-bold tracking-widest text-white uppercase">IFC Testing</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* VERTICAL LINE DECOR */}
//       <div className="absolute left-6 bottom-0 hidden xl:block h-32 w-[1px] bg-gradient-to-t from-brandAccent to-transparent opacity-40" />
//     </section>
//   );
// }

// export default HeroSection;


import React from 'react';
import bg from "../../assets/images/sox/hero.png";
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:top-10 flex items-center bg-brandDark overflow-hidden">
      
      {/* 1. VISUAL SIDE (RIGHT) */}
      <div className="absolute top-0 right-0 z-0 w-full h-full lg:w-1/2">
        <div className="relative w-full h-full">
          <img 
            src={bg} 
            alt="Compliance Hero" 
            className="object-cover w-full h-full opacity-50 lg:opacity-80" 
          />
          {/* Transition Gradient from brandDark to Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. BACKGROUND DECOR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid using brandNavy */}
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#003366_1px,transparent_1px)] [background-size:30px_30px]" />
        {/* Ambient Glow using brandAccent */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brandAccent/10 blur-[120px] rounded-full" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="container relative z-10 px-6 lg:px-20">
        <div className="max-w-3xl">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6 animate-[fadeInLeft_0.8s_ease-out]">
            <div className="w-10 h-[2px] bg-brandAccent" />
            <span className="text-brandAccent text-xs font-black uppercase tracking-[0.3em]">
              Risk Advisory Specialist
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
              Governance and <br />
              <span className="text-brandGold">Compliance Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-brandLight/80 leading-relaxed max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              RiskMan delivers comprehensive SOX, ICOFR, and IFC solutions, strengthening internal controls and ensuring regulatory compliance through expert risk-based assessments and testing.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 pt-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <Link 
                to="/services" 
                className="px-10 py-4 font-bold transition-all duration-300 rounded-sm shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold shadow-brandAccent/20 hover:shadow-brandGold/40 hover:-translate-y-1"
              >
                View Our Services
              </Link>
              
              <Link 
                href="/contact" 
                className="px-10 py-4 font-bold text-white transition-all duration-300 border-2 rounded-sm border-white/20 hover:border-brandAccent hover:bg-white/5"
              >
                Speak to Our Team
              </Link>
            </div>

            {/* TAGS BAR */}
            <div className="flex items-center gap-8 pt-12 opacity-50 border-t border-white/10 mt-12 animate-[fadeIn_1s_ease-out_0.6s_both]">
              <span className="text-xs font-bold tracking-widest text-white uppercase">SOX Compliance</span>
              <span className="text-xs font-bold tracking-widest text-white uppercase">ICOFR</span>
              <span className="text-xs font-bold tracking-widest text-white uppercase">IFC Testing</span>
            </div>
          </div>
        </div>
      </div>

      {/* VERTICAL LINE DECOR */}
      <div className="absolute left-6 bottom-0 hidden xl:block h-32 w-[1px] bg-gradient-to-t from-brandAccent to-transparent opacity-40" />
    </section>
  );
}

export default HeroSection;