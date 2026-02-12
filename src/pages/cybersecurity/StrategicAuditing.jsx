// // StrategicAuditing.jsx
import React from 'react';
import{motion,AnimatePresence} from "framer-motion";

import { 
  Shield, 
  Lock, 
  Search, 
  FileText, 
  Activity, 
  Cpu, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

import auditImage from "../../assets/images/cybersecurity/audit-analysis.png"


// const auditFeatures = [
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//       </svg>
//     ),
//     title: "Comprehensive Assessment",
//     description: "Evaluating systems, functions, and processes to identify potential security gaps.",
//     number: "01"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     title: "Evidence-Based Reporting",
//     description: "All findings are substantiated by accurate, verifiable data and documentation for clear decision-making.",
//     number: "02"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     title: "Security Posture Improvement",
//     description: "We analyze your ability to prevent, detect, and respond to incidents effectively.",
//     number: "03"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//       </svg>
//     ),
//     title: "Compliance Assurance",
//     description: "Aligning your operations with industry standards and mandatory regulatory requirements.",
//     number: "04"
//   }
// ];

// const StrategicAuditing = () => {
//   return (
//     <section className="relative py-20 overflow-hidden md:py-32 bg-bgLight dark:bg-bgDark">
//       {/* Background Decoration */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brandAccent to-transparent"></div>
//       <div className="absolute rounded-full top-20 right-10 w-96 h-96 bg-brandAccent/5 blur-3xl"></div>
//       <div className="absolute rounded-full bottom-20 left-10 w-96 h-96 bg-brandPrimary/5 blur-3xl"></div>

//       <div className="container relative">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-20 text-center">
//           <div className="inline-block px-4 py-2 mb-6 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10">
//             <span className="text-sm font-bold tracking-wide text-brandPrimary dark:text-brandAccent">SYSTEMATIC APPROACH</span>
//           </div>
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Strategic Cyber Security Auditing
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             We provide a systematic and independent assessment of your organization's security controls and policies. Our process evaluates the effectiveness of your protections against evolving cyber threats to ensure data integrity.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
//           {auditFeatures.map((feature, index) => (
//             <div 
//               key={index} 
//               className="relative p-8 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandAccent/50 dark:hover:border-brandAccent/50 hover:shadow-2xl"
//             >
//               {/* Gradient Overlay on Hover */}
//               <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-br from-brandPrimary/0 via-brandAccent/0 to-brandPrimary/0 group-hover:from-brandPrimary/5 group-hover:via-brandAccent/5 group-hover:to-brandPrimary/5 rounded-2xl"></div>

//               <div className="relative">
//                 {/* Header with Number and Icon */}
//                 <div className="flex items-start justify-between mb-6">
//                   {/* Icon Circle */}
//                   <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold rounded-xl group-hover:scale-110">
//                     {feature.icon}
//                   </div>

//                   {/* Number Badge */}
//                   <div className="text-6xl font-bold transition-colors duration-300 font-heading text-brandPrimary/10 dark:text-brandAccent/10 group-hover:text-brandPrimary/20 dark:group-hover:text-brandAccent/20">
//                     {feature.number}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>

//                 {/* Progress Bar */}
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="font-medium text-gray-500 dark:text-gray-400">Coverage</span>
//                     <span className="font-bold text-brandPrimary dark:text-brandAccent">100%</span>
//                   </div>
//                   <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
//                     <div 
//                       className="h-full transition-all duration-1000 rounded-full bg-gradient-to-r from-brandPrimary via-brandAccent to-brandGold group-hover:animate-pulse" 
//                       style={{ width: '100%' }}
//                     ></div>
//                   </div>
//                 </div>

//                 {/* Hover Arrow */}
//                 <div className="flex items-center gap-2 mt-6 transition-opacity duration-300 opacity-0 text-brandPrimary dark:text-brandAccent group-hover:opacity-100">
//                   <span className="text-sm font-semibold">Learn More</span>
//                   <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Corner Accent */}
//               <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 rounded-bl-full opacity-0 bg-gradient-to-br from-brandAccent/20 to-transparent rounded-tr-2xl group-hover:opacity-100"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Stats */}
//         <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto mt-20 md:grid-cols-4">
//           {[
//             { value: '500+', label: 'Security Audits' },
//             { value: '99.9%', label: 'Accuracy Rate' },
//             { value: '50+', label: 'Industries Served' },
//             { value: '24/7', label: 'Support Available' }
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="mb-2 text-3xl font-bold lg:text-4xl font-heading text-brandPrimary dark:text-brandAccent">
//                 {stat.value}
//               </div>
//               <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StrategicAuditing;

const StrategicAuditing = () => {
return (

<section className="relative py-24 overflow-hidden bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute transform -inset-4 bg-brandAccent/10 rounded-xl -rotate-3"></div>
                <img src={auditImage} alt="Strategic Auditing" className="relative object-cover w-full shadow-2xl rounded-xl" />
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Our Process</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark">Strategic Cyber Security Auditing</h2>
              <p className="mb-8 text-lg text-gray-600">
                We provide a systematic and independent assessment of your organization's security controls and policies. Our process evaluates the effectiveness of your protections against evolving cyber threats to ensure data integrity.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Comprehensive Assessment", desc: "Evaluating systems, functions, and processes to identify potential security gaps.", icon: Search },
                  { title: "Evidence-Based Reporting", desc: "All findings are substantiated by accurate, verifiable data and documentation.", icon: FileText },
                  { title: "Security Posture Improvement", desc: "We analyze your ability to prevent, detect, and respond to incidents effectively.", icon: Shield },
                  { title: "Compliance Assurance", desc: "Aligning your operations with industry standards and mandatory regulatory requirements.", icon: CheckCircle },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 transition-shadow border border-gray-100 bg-bgLight rounded-xl hover:shadow-lg">
                    <item.icon className="w-10 h-10 mb-4 text-brandPrimary" />
                    <h3 className="mb-2 font-bold text-brandDark">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
 };

export default StrategicAuditing;