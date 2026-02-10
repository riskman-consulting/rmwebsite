// // CTASection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const CTASection = () => {
//   return (
//     <section className="relative py-20 overflow-hidden md:py-32 bg-gradient-to-br from-brandDark via-brandPrimary to-brandNavy dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-brandAccent/20 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-brandGold/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
//           backgroundSize: '30px 30px'
//         }}></div>
//       </div>

//       <div className="container relative">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Shield Icon */}
//           <div className="inline-flex items-center justify-center w-24 h-24 mb-8 border rounded-full bg-brandAccent/20 backdrop-blur-sm border-brandAccent/30">
//             <svg className="w-12 h-12 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//             </svg>
//           </div>

//           {/* Heading */}
//           <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
//             Strengthen Your Supply Chain Integrity
//           </h2>

//           {/* Description */}
//           <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-gray-200">
//             Protect your business from third-party vulnerabilities with our expert TPRM audit and implementation services.
//           </p>

//           {/* CTA Button */}
//           <Link 
//             to="/contact" 
//             className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg shadow-2xl group bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/50 hover:scale-105"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             Book A Consultation
//             <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>

//           {/* Benefits */}
//           <div className="grid gap-8 mt-16 sm:grid-cols-3">
//             {[
//               { icon: '🎯', label: 'Risk-Based Approach' },
//               { icon: '📊', label: 'Evidence-Driven' },
//               { icon: '✓', label: 'Audit-Ready' }
//             ].map((benefit, index) => (
//               <div key={index} className="flex flex-col items-center gap-3">
//                 <span className="text-4xl">{benefit.icon}</span>
//                 <span className="font-semibold text-white">{benefit.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ctaImg from "../../assets/images/tprm/supply-chain.png"

const SupplyChain = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-brandNavy">
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaImg}
          alt="Supply Chain Network" 
          className="object-cover w-full h-full opacity-20 mix-blend-overlay"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl font-heading">
          Strengthen Your Supply Chain Integrity
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl text-blue-100">
          Protect your business from third-party vulnerabilities with our expert TPRM audit and implementation services.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 mx-auto text-lg font-bold transition-all duration-300 transform rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-2xl hover:-translate-y-1">
          Book A Consultation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default SupplyChain;
