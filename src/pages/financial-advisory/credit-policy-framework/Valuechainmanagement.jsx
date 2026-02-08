// import React from 'react';

// const ValueChainManagement = () => {
//   const chainSteps = [
//     {
//       id: 1,
//       phase: 'Origination',
//       title: 'Credit Origination',
//       description: 'Standardizing fundamental principles from initial inquiry to application submission.',
//       icon: '📋',
//       color: 'from-blue-500 to-blue-600',
//       activities: ['Initial Inquiry', 'Application Review', 'Preliminary Assessment']
//     },
//     {
//       id: 2,
//       phase: 'Processing',
//       title: 'Credit Processing',
//       description: 'Thorough evaluation and verification of borrower credentials and documentation.',
//       icon: '⚙️',
//       color: 'from-purple-500 to-purple-600',
//       activities: ['Document Verification', 'Credit Analysis', 'Risk Evaluation']
//     },
//     {
//       id: 3,
//       phase: 'Enhancement',
//       title: 'Credit Enhancement',
//       description: 'Implementing measures to improve credit quality and reduce default risk.',
//       icon: '📈',
//       color: 'from-brandAccent to-brandGold',
//       activities: ['Collateral Assessment', 'Guarantee Review', 'Risk Mitigation']
//     },
//     {
//       id: 4,
//       phase: 'Decision',
//       title: 'Final Decision',
//       description: 'Comprehensive evaluation leading to approval or rejection based on policy criteria.',
//       icon: '✓',
//       color: 'from-green-500 to-green-600',
//       activities: ['Credit Committee', 'Final Approval', 'Terms Finalization']
//     },
//     {
//       id: 5,
//       phase: 'Delivery',
//       title: 'Credit Delivery',
//       description: 'Streamlining disbursement and delivery for maximum operational efficiency.',
//       icon: '🚀',
//       color: 'from-brandPrimary to-brandNavy',
//       activities: ['Documentation', 'Disbursement', 'Account Setup']
//     },
//     {
//       id: 6,
//       phase: 'Management',
//       title: 'Portfolio Management',
//       description: 'Ongoing monitoring and management to prevent deterioration of borrower creditworthiness.',
//       icon: '📊',
//       color: 'from-red-500 to-orange-600',
//       activities: ['Performance Monitoring', 'Periodic Review', 'Recovery Management']
//     }
//   ];

//   return (
//     <section className="py-20 bg-bgLight dark:bg-surfaceDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Value Chain Management
//           </h2>
//           <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
//             Our framework covers the entire spectrum of credit operations to prevent the deterioration of borrower creditworthiness and reporting.
//           </p>
          
//           {/* Key Highlights */}
//           <div className="flex flex-wrap justify-center gap-4 text-sm">
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10">
//               <svg className="w-4 h-4 text-brandPrimary dark:text-brandGold" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span className="font-medium text-brandDark dark:text-white">End-to-End Coverage</span>
//             </div>
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10">
//               <svg className="w-4 h-4 text-brandPrimary dark:text-brandGold" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span className="font-medium text-brandDark dark:text-white">Standardized Processes</span>
//             </div>
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10">
//               <svg className="w-4 h-4 text-brandPrimary dark:text-brandGold" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span className="font-medium text-brandDark dark:text-white">Prudent Exposure</span>
//             </div>
//           </div>
//         </div>

//         {/* Value Chain Timeline - Desktop */}
//         <div className="hidden mb-16 lg:block">
//           <div className="relative">
//             {/* Connection Line */}
//             <div className="absolute left-0 right-0 h-1 top-20 bg-gradient-to-r from-blue-500 via-brandGold to-orange-600 opacity-20"></div>

//             <div className="grid grid-cols-6 gap-4">
//               {chainSteps.map((step, index) => (
//                 <div key={step.id} className="relative group">
//                   {/* Timeline Dot */}
//                   <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br ${step.color} rounded-full border-4 border-white dark:border-surfaceDark z-10 group-hover:scale-150 transition-transform duration-300`}></div>

//                   {/* Card */}
//                   <div className="p-6 mt-32 transition-all duration-300 border bg-surfaceLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandGold hover:shadow-xl">
//                     {/* Icon */}
//                     <div className="mb-4 text-5xl text-center">{step.icon}</div>

//                     {/* Phase Badge */}
//                     <div className="mb-3 text-center">
//                       <span className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-bold rounded-full`}>
//                         {step.phase}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="mb-2 text-lg font-bold text-center text-brandDark dark:text-white">
//                       {step.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="mb-4 text-sm text-center text-gray-600 dark:text-gray-400">
//                       {step.description}
//                     </p>

//                     {/* Activities */}
//                     <ul className="space-y-1">
//                       {step.activities.map((activity, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-500">
//                           <span className="text-brandGold mt-0.5">•</span>
//                           <span>{activity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Value Chain Cards - Mobile/Tablet */}
//         <div className="mb-16 space-y-6 lg:hidden">
//           {chainSteps.map((step, index) => (
//             <div key={step.id} className="relative">
//               <div className="p-6 transition-all duration-300 border shadow-lg bg-surfaceLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandGold">
//                 <div className="flex items-start gap-4">
//                   {/* Icon & Number */}
//                   <div className="flex-shrink-0">
//                     <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
//                       {step.icon}
//                     </div>
//                     <div className="mt-2 text-center">
//                       <span className="text-2xl font-bold text-gray-300 dark:text-gray-700">
//                         {String(step.id).padStart(2, '0')}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <span className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-bold rounded-full mb-2`}>
//                       {step.phase}
//                     </span>
//                     <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
//                       {step.title}
//                     </h3>
//                     <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
//                       {step.description}
//                     </p>
//                     <ul className="space-y-1">
//                       {step.activities.map((activity, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-500">
//                           <span className="text-brandGold mt-0.5">•</span>
//                           <span>{activity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Connector Arrow */}
//               {index < chainSteps.length - 1 && (
//                 <div className="flex justify-center py-2">
//                   <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Bottom Feature Card */}
//         <div className="p-8 text-white bg-gradient-to-br from-brandNavy to-brandDark rounded-2xl md:p-12">
//           <div className="grid items-center gap-8 md:grid-cols-2">
//             <div>
//               <h3 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
//                 Prudent Exposure Management
//               </h3>
//               <p className="mb-6 leading-relaxed text-gray-300">
//                 Maintaining total exposure at levels consistent with available capital ensures sustainable growth and regulatory compliance throughout the credit lifecycle.
//               </p>
//               <button className="px-6 py-3 font-semibold transition-all duration-300 transform rounded-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
//                 Explore Framework
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="p-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                 <p className="mb-1 text-3xl font-bold text-brandGold">6</p>
//                 <p className="text-sm text-gray-300">Critical Stages</p>
//               </div>
//               <div className="p-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                 <p className="mb-1 text-3xl font-bold text-brandGold">100%</p>
//                 <p className="text-sm text-gray-300">Coverage</p>
//               </div>
//               <div className="p-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                 <p className="mb-1 text-3xl font-bold text-brandGold">Real-time</p>
//                 <p className="text-sm text-gray-300">Monitoring</p>
//               </div>
//               <div className="p-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                 <p className="mb-1 text-3xl font-bold text-brandGold">360°</p>
//                 <p className="text-sm text-gray-300">View</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValueChainManagement;


import React from 'react';
import { FileText, Truck, Scale } from 'lucide-react';

const PolicyValueChain = () => {
  return (
    <section className="relative py-24 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Process Flow</h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Value Chain Management
            </h3>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              Our framework covers the entire spectrum of credit operations to prevent the deterioration of borrower creditworthiness and reporting.
            </p>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 text-white border-4 rounded-full shadow-lg bg-brandPrimary border-bgLight dark:border-bgDark">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Credit Origination & Processing</h4>
                  <p className="text-gray-600 dark:text-gray-400">Standardizing fundamental principles from initial inquiry to final decision.</p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 border-4 rounded-full shadow-lg bg-brandAccent text-brandDark border-bgLight dark:border-bgDark">
                  <Truck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Delivery & Management</h4>
                  <p className="text-gray-600 dark:text-gray-400">Streamlining credit enhancement and delivery for maximum operational efficiency.</p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 text-white border-4 rounded-full shadow-lg bg-brandDark border-bgLight dark:border-bgDark">
                  <Scale className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Prudent Exposure</h4>
                  <p className="text-gray-600 dark:text-gray-400">Maintaining total exposure at levels consistent with available capital.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border-8 border-white shadow-2xl rounded-2xl dark:border-gray-800">
              <img 
                src="https://pixabay.com/get/g4a7004523dd931ae1277088febcb15f6c1ce22d7f430f0d7a2ea3c68a29f16ab62df7ef43f75d13b95498cb3a235fe700a993d005452d5d2e8a18f31c2e1bfac_1280.jpg" 
                alt="Value Chain Process" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-brandAccent/10 blur-3xl"></div>
            <div className="absolute w-40 h-40 rounded-full -bottom-10 -left-10 bg-brandPrimary/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyValueChain;
