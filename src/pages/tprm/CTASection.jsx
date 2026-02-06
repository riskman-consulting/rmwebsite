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
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-brandDark">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-brandPrimary/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-brandAccent/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.15] z-0" 
           style={{ backgroundImage: `radial-gradient(${'#FFC000'} 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-8 md:p-16 overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            
            <div className="flex flex-col items-center text-center">
              {/* Icon Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex p-4 mb-8 rounded-2xl bg-brandAccent/10 border border-brandAccent/20 shadow-[0_0_20px_rgba(255,192,0,0.2)]"
              >
                <svg className="w-10 h-10 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>

              {/* Text Content */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight"
              >
                Strengthen Your <br />
                <span className="text-brandAccent">Supply Chain Integrity</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mb-12 text-lg text-gray-300 leading-relaxed"
              >
                Protect your business from third-party vulnerabilities with our expert 
                TPRM audit and framework implementation services.
              </motion.p>

              {/* Action Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-10 py-5 text-lg font-bold transition-all duration-300 rounded-xl shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-brandAccent/30 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  Book A Consultation
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                
                <span className="text-white/40 font-medium hidden sm:block">or</span>

                <Link to="/services" className="text-white hover:text-brandAccent font-bold transition-colors underline-offset-8 hover:underline">
                  View Service Models
                </Link>
              </motion.div>

              {/* Verification Badges */}
              <div className="mt-16 w-full pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { label: 'Risk-Based Approach', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { label: 'Evidence-Driven', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
                  { label: 'Audit-Ready Framework', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center justify-center gap-3 text-white/80"
                  >
                    <svg className="w-5 h-5 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide uppercase">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;