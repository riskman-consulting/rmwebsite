// // Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">
//         <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 md:py-24 lg:py-32">
//           {/* Left Content */}
//           <div className="order-2 lg:order-1">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 border-brandPrimary/20 dark:border-brandAccent/20">
//               <div className="w-2 h-2 rounded-full bg-brandAccent animate-pulse"></div>
//               <span className="text-sm font-semibold text-brandPrimary dark:text-brandAccent">
//                 Enterprise TPRM Solutions
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl font-heading text-brandDark dark:text-white">
//               Audit-Ready{' '}
//               <span className="relative inline-block">
//                 <span className="relative z-10">Third-Party</span>
//                 <span className="absolute left-0 w-full h-3 bottom-2 bg-brandAccent/30 -rotate-1"></span>
//               </span>{' '}
//               Risk Management
//             </h1>

//             {/* Description */}
//             <p className="mb-10 text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
//               Build evidence-driven TPRM frameworks that satisfy regulators. We move beyond "checkbox compliance" to provide deep visibility into vendor lifecycles.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Link 
//                 to="/services" 
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg group bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandGold hover:shadow-xl"
//               >
//                 Explore Our Services
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </Link>
              
//               <Link 
//                 to="/contact" 
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-transparent border-2 rounded-lg group border-brandPrimary dark:border-brandAccent text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark"
//               >
//                 Contact Our Experts
//                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex flex-wrap items-center gap-8 mt-12">
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brandPrimary/10 dark:bg-brandAccent/10">
//                   <svg className="w-6 h-6 text-brandPrimary dark:text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-brandDark dark:text-white">Audit-Ready</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">Framework</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brandPrimary/10 dark:bg-brandAccent/10">
//                   <svg className="w-6 h-6 text-brandPrimary dark:text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                     <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-brandDark dark:text-white">Evidence-Driven</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">Compliance</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative order-1 lg:order-2">
//             <div className="relative">
//               {/* Decorative Background */}
//               <div className="absolute rounded-full -top-4 -right-4 w-72 h-72 bg-brandAccent/20 blur-3xl"></div>
//               <div className="absolute rounded-full -bottom-4 -left-4 w-72 h-72 bg-brandPrimary/20 blur-3xl"></div>
              
//               {/* Main Card */}
//               <div className="relative p-8 shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandDark dark:to-brandNavy rounded-2xl">
//                 <div className="space-y-6">
//                   {/* Stats */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="p-4 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                       <div className="mb-1 text-3xl font-bold text-brandAccent">100%</div>
//                       <div className="text-sm text-white/80">Vendor Visibility</div>
//                     </div>
//                     <div className="p-4 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                       <div className="mb-1 text-3xl font-bold text-brandAccent">24/7</div>
//                       <div className="text-sm text-white/80">Monitoring</div>
//                     </div>
//                   </div>

//                   {/* Feature List */}
//                   <div className="space-y-3">
//                     {[
//                       'Centralized Vendor Inventory',
//                       'Risk-Based Classification',
//                       'Continuous Monitoring',
//                       'Regulatory Compliance'
//                     ].map((feature, index) => (
//                       <div key={index} className="flex items-center gap-3 text-white">
//                         <svg className="flex-shrink-0 w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-sm font-medium">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden text-white bg-brandDark">
      {/* Background Overlay with Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://pixabay.com/get/g5accf17e485315973e40b9c104e919da8105adc42ddbbf25fbc3cca1987b3b8830461aae8d9604e6d6e5a1ccc5060102c2000a674deae0a57b2517845de9b93a_1280.jpg" 
          alt="Cyber Security Background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-4 py-24 mx-auto text-center sm:py-32 lg:py-40">
        <div className="mb-6 animate-float">
          <Shield className="w-16 h-16 text-brandAccent" />
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl font-heading">
          Audit-Ready <span className="text-brandAccent">Third-Party Risk Management</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-300 sm:text-xl">
          Build evidence-driven TPRM frameworks that satisfy regulators. We move beyond "checkbox compliance" to provide deep visibility into vendor lifecycles.
        </p>
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 transform border border-transparent rounded-md shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-300 border-2 border-white rounded-md hover:bg-white hover:text-brandDark"
          >
            Contact Our Experts
          </a>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-bgLight">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
