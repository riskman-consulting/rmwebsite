// // ContinuousMonitoring.jsx
// import React from 'react';

// const ContinuousMonitoring = () => {
//   const features = [
//     {
//       title: "Annual Reassessments",
//       description: "Comprehensive risk reviews for high-risk vendors"
//     },
//     {
//       title: "Detailed Audit Trails",
//       description: "Complete documentation of all monitoring activities"
//     },
//     {
//       title: "SLA Performance Reviews",
//       description: "Regular evaluation against service level agreements"
//     },
//     {
//       title: "Incident Response Plans",
//       description: "Coordinated breach mitigation strategies"
//     }
//   ];

//   return (
//     <section className="relative py-16 overflow-hidden md:py-24 bg-surfaceLight dark:bg-surfaceDark">
//       {/* Decorative Elements */}
//       <div className="absolute left-0 rounded-full top-1/4 w-72 h-72 bg-brandPrimary/10 blur-3xl"></div>
//       <div className="absolute right-0 rounded-full bottom-1/4 w-72 h-72 bg-brandAccent/10 blur-3xl"></div>

//       <div className="container relative">
//         <div className="max-w-5xl mx-auto">
//           {/* Header */}
//           <div className="mb-16 text-center">
//             <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//               Continuous Monitoring and Risk Mitigation
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//               Risk management is not a one-time event. We implement annual reassessments for high-risk vendors and maintain detailed audit trails of all activities. Our strategy includes performance reviews against SLAs and coordinated incident response plans to mitigate breaches immediately if they occur.
//             </p>
//           </div>

//           {/* Timeline */}
//           <div className="relative">
//             {/* Center Line */}
//             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brandPrimary via-brandAccent to-brandPrimary transform -translate-x-1/2"></div>

//             {/* Timeline Items */}
//             <div className="space-y-12">
//               {features.map((feature, index) => (
//                 <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                   {/* Content */}
//                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                     <div className="p-6 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/50 hover:shadow-lg">
//                       <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
//                         {feature.title}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-300">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Center Dot */}
//                   <div className="z-10 flex-shrink-0 hidden w-4 h-4 border-4 rounded-full shadow-lg md:flex bg-brandAccent border-surfaceLight dark:border-surfaceDark"></div>

//                   {/* Spacer for alternating layout */}
//                   <div className="flex-1 hidden md:block"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContinuousMonitoring;


import React from 'react';
import { RefreshCw, FileSearch, TrendingUp, AlertOctagon } from 'lucide-react';

const Monitoring = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="order-2 md:w-1/2 md:order-1">
            <img 
              src="https://pixabay.com/get/g117af6ed9278d09e1d5b1bd6b9d6812682502bba30c14fb5ea6859f4b341d984888e30aa3a0cd430e8c0d7c13d170e657bb7f43effe21e2a038e3582ed5d5b6c_1280.jpg" 
              alt="Continuous Monitoring Audit" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:w-1/2 md:order-2">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark">
              Continuous Monitoring and Risk Mitigation
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Risk management is not a one-time event. We implement annual reassessments for high-risk vendors and maintain detailed audit trails of all activities. Our strategy includes performance reviews against SLAs and coordinated incident response plans to mitigate breaches immediately if they occur.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 text-center transition-colors border border-gray-200 rounded-lg bg-bgLight hover:border-brandAccent">
                <RefreshCw className="w-8 h-8 mx-auto mb-2 text-brandNavy" />
                <h4 className="font-bold text-brandDark">Annual Reassessments</h4>
              </div>
              <div className="p-4 text-center transition-colors border border-gray-200 rounded-lg bg-bgLight hover:border-brandAccent">
                <FileSearch className="w-8 h-8 mx-auto mb-2 text-brandNavy" />
                <h4 className="font-bold text-brandDark">Detailed Audit Trails</h4>
              </div>
              <div className="p-4 text-center transition-colors border border-gray-200 rounded-lg bg-bgLight hover:border-brandAccent">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-brandNavy" />
                <h4 className="font-bold text-brandDark">SLA Performance Reviews</h4>
              </div>
              <div className="p-4 text-center transition-colors border border-gray-200 rounded-lg bg-bgLight hover:border-brandAccent">
                <AlertOctagon className="w-8 h-8 mx-auto mb-2 text-brandNavy" />
                <h4 className="font-bold text-brandDark">Incident Mitigation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
