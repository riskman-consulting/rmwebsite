// // GovernanceFramework.jsx
// import React from 'react';

// const GovernanceFramework = () => {
//   return (
//     <section className="relative py-16 overflow-hidden md:py-24 bg-gradient-to-r from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
//         }}></div>
//       </div>

//       {/* Decorative Circle */}
//       <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 w-96 h-96 bg-brandAccent/10 blur-3xl"></div>

//       <div className="container relative">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
//             {/* Icon */}
//             <div className="flex-shrink-0">
//               <div className="flex items-center justify-center w-24 h-24 transition-transform duration-300 transform shadow-2xl lg:w-32 lg:h-32 bg-brandAccent rounded-2xl hover:scale-105">
//                 <svg className="w-12 h-12 lg:w-16 lg:h-16 text-brandDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="flex-1 text-center lg:text-left">
//               <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
//                 Establish A Robust TPRM Governance Framework
//               </h2>
//               <p className="text-lg leading-relaxed text-gray-200">
//                 Governance is the foundation of effective risk management. A policy approved by top management ensures that roles and responsibilities are clearly defined across IT, Legal, and Procurement. We help you document board-level oversight and align your risk appetite with third-party exposure to ensure total transparency.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GovernanceFramework;


import React from 'react';
import { FileText, Users, Eye, Gavel } from 'lucide-react';
import governanceImg from "../../assets/images/tprm/governance.jpg";

const Governance = () => {
  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-surfaceDark">
              <img 
                src={governanceImg}
                alt="Team Governance Meeting" 
                className="w-full h-auto transition-transform duration-700 transform hover:scale-105"
              />
            </div>
          </div>
          
          <div className="space-y-6 lg:w-1/2">
            <div className="inline-block px-4 py-1 mb-2 text-sm font-bold rounded-full bg-brandAccent/20 text-brandPrimary dark:text-brandAccent">
              FOUNDATION
            </div>
            <h2 className="text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Establish a Robust TPRM Governance Framework
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Governance is the foundation of effective risk management. A policy approved by top management ensures that roles and responsibilities are clearly defined across IT, Legal, and Procurement. We help you document board-level oversight and align your risk appetite with third-party exposure to ensure total transparency.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-start h-full gap-4 p-4 transition-shadow border-l-4 shadow-sm bg-surfaceLight rounded-2xl hover:shadow-md border-brandAccent dark:bg-surfaceDark">
                <Gavel className="flex-shrink-0 w-8 h-8 text-brandNavy dark:text-brandAccent" />
                <div>
                  <h3 className="font-bold text-brandDark dark:text-white">Policy Definition</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Clear roles & responsibilities</p>
                </div>
              </div>
              <div className="flex items-start h-full gap-4 p-4 transition-shadow border-l-4 shadow-sm bg-surfaceLight rounded-2xl hover:shadow-md border-brandAccent dark:bg-surfaceDark">
                <Eye className="flex-shrink-0 w-8 h-8 text-brandNavy dark:text-brandAccent" />
                <div>
                  <h3 className="font-bold text-brandDark dark:text-white">Board Oversight</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Documented supervision</p>
                </div>
              </div>
              <div className="flex items-start h-full gap-4 p-4 transition-shadow border-l-4 shadow-sm bg-surfaceLight rounded-2xl hover:shadow-md border-brandAccent dark:bg-surfaceDark">
                <Users className="flex-shrink-0 w-8 h-8 text-brandNavy dark:text-brandAccent" />
                <div>
                  <h3 className="font-bold text-brandDark dark:text-white">Cross-Functional</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">IT, Legal, Procurement alignment</p>
                </div>
              </div>
              <div className="flex items-start h-full gap-4 p-4 transition-shadow border-l-4 shadow-sm bg-surfaceLight rounded-2xl hover:shadow-md border-brandAccent dark:bg-surfaceDark">
                <FileText className="flex-shrink-0 w-8 h-8 text-brandNavy dark:text-brandAccent" />
                <div>
                  <h3 className="font-bold text-brandDark dark:text-white">Risk Appetite</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aligned with exposure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
