// // EmergingTechnology.jsx
// import React from 'react';

// const technologies = [
//   {
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//       </svg>
//     ),
//     title: "AI System Audits",
//     description: "Evaluating AI for security, ethical alignment, transparency, and resilience to adversarial manipulation.",
//     gradient: "from-blue-500 to-purple-600"
//   },
//   {
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     ),
//     title: "Vendor Risk Management",
//     description: "Assessing third-party cybersecurity practices to identify and mitigate supply chain vulnerabilities.",
//     gradient: "from-green-500 to-teal-600"
//   },
//   {
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//       </svg>
//     ),
//     title: "Blockchain Security",
//     description: "Structured assessments of smart contracts and infrastructure to verify cryptographic integrity and access controls.",
//     gradient: "from-orange-500 to-red-600"
//   },
//   {
//     icon: (
//       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     title: "Bill of Materials (BOM) Auditing",
//     description: "Ensuring transparency and integrity of components used in software, quantum, and AI systems.",
//     gradient: "from-yellow-500 to-orange-600"
//   }
// ];

// const EmergingTechnology = () => {
//   return (
//     <section className="relative py-20 md:py-32 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-16">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Emerging Technology and Supply Chain Security
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             RiskMan offers specialized audits for modern digital environments, including AI systems and blockchain infrastructure, to ensure resilience. We identify supply chain risks to safeguard your broader ecosystem.
//           </p>
//         </div>

//         {/* Technologies Grid */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {technologies.map((tech, index) => (
//             <div 
//               key={index}
//               className="relative overflow-hidden transition-all duration-500 group bg-surfaceLight dark:bg-surfaceDark rounded-2xl hover:shadow-2xl"
//             >
//               {/* Gradient Header */}
//               <div className={`h-2 bg-gradient-to-r ${tech.gradient}`}></div>

//               <div className="p-8">
//                 {/* Icon */}
//                 <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
//                   {tech.icon}
//                 </div>

//                 {/* Content */}
//                 <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                   {tech.title}
//                 </h3>
//                 <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
//                   {tech.description}
//                 </p>

//                 {/* Feature Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {index === 0 && (
//                     <>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Security</span>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Ethics</span>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">AI/ML</span>
//                     </>
//                   )}
//                   {index === 1 && (
//                     <>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Third-Party</span>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Supply Chain</span>
//                     </>
//                   )}
//                   {index === 2 && (
//                     <>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Blockchain</span>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Smart Contracts</span>
//                     </>
//                   )}
//                   {index === 3 && (
//                     <>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Transparency</span>
//                       <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">Integrity</span>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Hover Effect Border */}
//               <div className="absolute inset-0 transition-colors duration-300 border-2 border-transparent group-hover:border-brandAccent/50 rounded-2xl"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmergingTechnology;



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

import emergingImage from "../../assets/images/cybersecurity/ai-security.png"


 const EmergingTechnology = () => {
  return (
 <section className="py-24 overflow-hidden text-white bg-brandNavy">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Future Proof</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading">Emerging Technology & Supply Chain</h2>
              <p className="mb-8 text-gray-300">
                RiskMan offers specialized audits for modern digital environments, including AI systems and blockchain infrastructure, to ensure resilience. We identify supply chain risks to safeguard your broader ecosystem.
              </p>
              <img src={emergingImage} alt="AI Security" className="w-full border shadow-lg rounded-xl border-white/10" />
            </div>

            <div className="grid gap-6 lg:w-2/3 sm:grid-cols-2">
              {[
                { title: "AI System Audits", desc: "Evaluating AI for security, ethical alignment, transparency, and resilience to adversarial manipulation.", icon: Cpu },
                { title: "Vendor Risk Management", desc: "Assessing third-party cybersecurity practices to identify and mitigate supply chain vulnerabilities.", icon: Globe },
                { title: "Blockchain Security", desc: "Structured assessments of smart contracts and infrastructure to verify cryptographic integrity and access controls.", icon: Lock },
                { title: "BOM Auditing", desc: "Ensuring transparency and integrity of components used in software, quantum, and AI systems.", icon: Server },
              ].map((item, idx) => (
                <div key={idx} className="p-8 transition-all border bg-brandDark/50 rounded-xl border-white/5 hover:bg-brandDark hover:border-brandAccent/30 group">
                  <item.icon className="w-10 h-10 mb-4 transition-transform text-brandAccent group-hover:scale-110" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default EmergingTechnology;