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
import { motion } from 'framer-motion';

const ContinuousMonitoring = () => {
  const features = [
    {
      title: "Annual Reassessments",
      description: "Comprehensive risk reviews for high-risk vendors to ensure ongoing compliance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Detailed Audit Trails",
      description: "Immutable documentation of monitoring activities for effortless regulatory reporting.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "SLA Performance",
      description: "Automated evaluation against service level agreements to maintain high standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Incident Response",
      description: "Pre-defined breach mitigation strategies to protect your enterprise assets.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#004080 1px, transparent 1px), linear-gradient(90deg, #004080 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brandPrimary dark:text-brandAccent font-bold tracking-widest uppercase text-xs"
          >
            Lifecycle Management
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 mb-6 text-3xl md:text-5xl font-extrabold font-heading text-brandDark dark:text-white"
          >
            Continuous Monitoring & <br /> Risk Mitigation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Risk management is not a one-time event. We maintain vigilance through automated workflows and evidence-based reporting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Feature Icon */}
              <div className="mb-6 inline-flex p-3 rounded-lg bg-brandPrimary/5 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary group-hover:text-white dark:group-hover:bg-brandAccent dark:group-hover:text-brandDark transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold font-heading text-brandDark dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-brandAccent transition-all duration-500 group-hover:h-full" />
                <div className="absolute top-0 right-0 h-[2px] w-0 bg-brandAccent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brandDark to-brandNavy text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold font-heading">Ready to secure your vendor network?</h4>
            <p className="text-white/70 text-sm">Get a detailed breakdown of your risk landscape today.</p>
          </div>
          <button className="px-6 py-3 bg-brandAccent text-brandDark font-bold rounded-lg hover:bg-brandGold transition-colors whitespace-nowrap">
            Schedule a Review
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContinuousMonitoring;