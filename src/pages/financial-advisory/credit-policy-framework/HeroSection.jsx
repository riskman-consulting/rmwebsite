// import React from 'react';

// const CreditPolicyHero = () => {
//   return (
//     <section className="relative overflow-hidden text-white bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <defs>
//               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
//                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brandAccent"/>
//               </pattern>
//             </defs>
//             <rect width="100" height="100" fill="url(#grid)" />
//           </svg>
//         </div>
//         <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-brandGold blur-3xl animate-evaporate"></div>
//       </div>

//       <div className="container relative z-10 py-20 lg:py-28">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <div className="inline-block">
//               <span className="px-4 py-2 text-sm font-medium border rounded-full bg-brandGold/20 border-brandGold/30 text-brandGold">
//                 Policy Framework Development
//               </span>
//             </div>

//             <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-heading">
//               Strategic Credit
//               <span className="block mt-2 text-brandGold">Policy Framework</span>
//             </h1>

//             <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
//               RiskMan formulates structured policies to identify, measure, and control credit risk, ensuring your activities align with long-term enterprise goals.
//             </p>

//             {/* Key Features */}
//             <div className="grid gap-4 pt-4 sm:grid-cols-2">
//               <div className="flex items-start gap-3 p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
//                 <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-brandGold/20">
//                   <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="mb-1 font-semibold text-white">Strategic Alignment</h3>
//                   <p className="text-sm text-gray-400">Enterprise-wide consistency</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10">
//                 <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-brandGold/20">
//                   <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="mb-1 font-semibold text-white">Risk Tolerance</h3>
//                   <p className="text-sm text-gray-400">Formal exposure limits</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col gap-4 pt-4 sm:flex-row">
//               <button className="px-8 py-4 font-semibold transition-all duration-300 transform rounded-lg group bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105 hover:shadow-xl">
//                 Contact Us
//                 <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
//               </button>
//               <button className="px-8 py-4 font-semibold transition-all duration-300 bg-transparent border-2 rounded-lg border-brandGold text-brandGold hover:bg-brandGold hover:text-brandDark">
//                 Know about Financial Advisory
//               </button>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative">
//             {/* Main Image Card */}
//             <div className="relative p-6 border shadow-2xl bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
//               <img
//                 src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
//                 alt="Credit Policy Framework"
//                 className="object-cover w-full h-auto rounded-xl"
//               />
              
//               {/* Overlay Stats */}
//               <div className="absolute inset-0 flex items-end p-6">
//                 <div className="w-full p-4 border bg-brandDark/90 backdrop-blur-md rounded-xl border-brandGold/30">
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <p className="text-2xl font-bold text-brandGold">100%</p>
//                       <p className="text-xs text-gray-400">Compliance</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-brandGold">360°</p>
//                       <p className="text-xs text-gray-400">Coverage</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-brandGold">24/7</p>
//                       <p className="text-xs text-gray-400">Monitoring</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute flex items-center justify-center w-24 h-24 border shadow-xl -top-6 -right-6 bg-brandGold/20 backdrop-blur-sm rounded-2xl border-brandGold/30 animate-float">
//               <svg className="w-12 h-12 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             </div>

//             <div className="absolute flex items-center justify-center w-32 h-32 border shadow-xl -bottom-6 -left-6 bg-brandAccent/20 backdrop-blur-sm rounded-2xl border-brandAccent/30">
//               <div className="text-center">
//                 <p className="text-3xl font-bold text-white">ISO</p>
//                 <p className="text-sm text-gray-300">Certified</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//           <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#FAFAFA" className="dark:fill-bgDark"/>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default CreditPolicyHero;


import React from 'react';
import { ArrowRight, Compass, Target, Shield } from 'lucide-react';

const PolicyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g0750f1cdf4b6853f2b59a7a55589620aa4d7b79cb058b2ae7f9b047462400f4d505e3c3ccb24a2e06bf9fadbbf3c536344e2c2719e59a697e3d02215c70d333e_1280.jpg" 
          alt="Strategic Compass" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandDark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brandDark/50 to-bgLight dark:to-bgDark"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-center animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-brandAccent" />
            <span className="text-sm font-medium tracking-wide uppercase text-brandAccent">Strategic Direction</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl font-heading">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Credit Policy</span> Framework
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-200">
            RiskMan formulates structured policies to identify, measure, and control credit risk, ensuring your activities align with long-term enterprise goals.
          </p>
          
          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
            <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-full shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/40">
              Know about Financial Advisory <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-full bg-brandPrimary hover:bg-white/10 border-white/30">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyHero;
