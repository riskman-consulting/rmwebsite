// // SecurityControls.jsx
// import React from 'react';

// const SecurityControls = () => {
//   return (
//     <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left - Visual */}
//           <div className="order-2 lg:order-1">
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/20 to-brandAccent/20 rounded-2xl blur-2xl"></div>
              
//               {/* Main Visual Card */}
//               <div className="relative p-8 shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandNavy dark:to-brandDark rounded-2xl">
//                 <div className="space-y-4">
//                   {/* Security Metrics */}
//                   <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="font-semibold text-white">Encryption Status</span>
//                       <span className="font-bold text-brandAccent">Active</span>
//                     </div>
//                     <div className="w-full h-2 rounded-full bg-white/20">
//                       <div className="h-2 rounded-full bg-brandAccent" style={{ width: '100%' }}></div>
//                     </div>
//                   </div>

//                   <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="font-semibold text-white">Patch Management</span>
//                       <span className="font-bold text-brandAccent">98%</span>
//                     </div>
//                     <div className="w-full h-2 rounded-full bg-white/20">
//                       <div className="h-2 rounded-full bg-brandAccent" style={{ width: '98%' }}></div>
//                     </div>
//                   </div>

//                   <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="font-semibold text-white">Incident Response</span>
//                       <span className="font-bold text-brandAccent">Ready</span>
//                     </div>
//                     <div className="w-full h-2 rounded-full bg-white/20">
//                       <div className="h-2 rounded-full bg-brandAccent" style={{ width: '100%' }}></div>
//                     </div>
//                   </div>

//                   {/* Security Badge */}
//                   <div className="flex items-center justify-center gap-3 pt-4">
//                     <svg className="w-8 h-8 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-lg font-bold text-white">Enterprise-Grade Security</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="order-1 lg:order-2">
//             <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//               Advanced Information Security and Cyber Risk Controls
//             </h2>
//             <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//               Cyber threats often enter through the supply chain. We assess vendor incident response capabilities and evaluate encryption controls for data at rest and in transit. Our audits review patch management and vulnerability practices to ensure your data remains secure within the vendor's ecosystem.
//             </p>

//             {/* Key Points */}
//             <div className="space-y-4">
//               {[
//                 'Vendor incident response assessment',
//                 'Encryption control evaluation',
//                 'Patch management review',
//                 'Vulnerability practice audit',
//                 'Supply chain threat analysis',
//                 'Data security validation'
//               ].map((point, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-6 h-6 bg-brandAccent rounded-full flex items-center justify-center mt-0.5">
//                     <svg className="w-4 h-4 text-brandDark" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-300">{point}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecurityControls;



import React from 'react';
import { motion } from 'framer-motion';

const SecurityControls = () => {
  const securityMetrics = [
    { label: "Encryption Status", value: "100%", status: "Active" },
    { label: "Patch Management", value: "98%", status: "Optimized" },
    { label: "Incident Response", value: "100%", status: "Ready" },
  ];

  const keyPoints = [
    { title: 'Vendor Assessment', desc: 'Incident response evaluation.' },
    { title: 'Data Security', desc: 'Encryption at rest & transit.' },
    { title: 'Vulnerability', desc: 'Active patch management.' },
    { title: 'Threat Analysis', desc: 'Supply chain risk audits.' }
  ];

  return (
    <section className="relative py-24 bg-bgLight dark:bg-bgDark overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brandPrimary/10 blur-[120px] rounded-full" />

      <div className="container max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left - Interactive Visual Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Outer Glow Wrapper */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-brandPrimary/20 via-transparent to-brandAccent/30">
              <div className="bg-white dark:bg-surfaceDark rounded-[22px] p-8 shadow-2xl border border-borderLight dark:border-borderDark">
                
                {/* Header of the Card */}
                <div className="flex items-center justify-between mb-10">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-heading text-brandDark dark:text-white">Security Integrity</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Real-time Control Validation</p>
                  </div>
                  <div className="p-3 bg-brandPrimary/10 rounded-full text-brandPrimary dark:text-brandAccent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Animated Metric Bars */}
                <div className="space-y-8">
                  {securityMetrics.map((metric, i) => (
                    <div key={metric.label} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{metric.label}</span>
                        <span className="text-xs font-black text-brandPrimary dark:text-brandAccent uppercase tracking-tighter bg-brandPrimary/5 px-2 py-1 rounded">
                          {metric.status}
                        </span>
                      </div>
                      <div className="relative w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.value }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="absolute h-full bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Status */}
                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-4 text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Continuous Scanning Active
                  </span>
                  <span>•</span>
                  <span>Last Audit: Today</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content & Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-brandPrimary dark:text-brandAccent font-bold tracking-widest text-xs uppercase mb-3 block">Cyber Defense</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brandDark dark:text-white leading-tight">
                Advanced Information <br /> & Cyber Risk Controls
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Cyber threats often enter through the supply chain. We assess vendor 
                capabilities and evaluate encryption controls to ensure your data remains 
                secure within the vendor's ecosystem.
              </p>
            </div>

            {/* Feature Bento-style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="group p-5 rounded-xl border border-borderLight dark:border-borderDark bg-white dark:bg-surfaceDark hover:border-brandAccent/50 transition-all duration-300">
                  <div className="w-8 h-8 mb-4 rounded-lg bg-brandPrimary/5 flex items-center justify-center text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brandDark dark:text-white mb-1">{point.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{point.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SecurityControls;