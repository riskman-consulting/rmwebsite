// // TechnicalTesting.jsx
// import React from 'react';

// const testingServices = [
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//       </svg>
//     ),
//     title: "Penetration Testing",
//     description: "Actively testing applications to determine if vulnerabilities can compromise sensitive data or infrastructure.",
//     badge: "Active Testing"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//       </svg>
//     ),
//     title: "Red Team Assessments",
//     description: "Simulated real-world attacks by an adversary to exploit enterprise-wide vulnerabilities.",
//     badge: "Adversary Simulation"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//     title: "Resilience Testing",
//     description: "DoS and DDoS simulations to measure system capacity and prevent service downtime.",
//     badge: "Stress Testing"
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//     title: "Configuration Audits",
//     description: "Ensuring secure deployment of assets, including blocking unused ports and securing default credentials.",
//     badge: "Security Hardening"
//   }
// ];

// const TechnicalTesting = () => {
//   return (
//     <section className="relative py-20 overflow-hidden md:py-32 bg-surfaceLight dark:bg-surfaceDark">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(0,64,128,0.5) 50px, rgba(0,64,128,0.5) 51px)`,
//         }}></div>
//       </div>

//       <div className="container relative">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Specialized Technical Testing
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             Our experts conduct active testing of individual components or entire applications to identify and exploit potential vulnerabilities. This simulated adversary approach ensures your infrastructure can withstand sophisticated attacks.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {testingServices.map((service, index) => (
//             <div 
//               key={index}
//               className="relative p-8 transition-all duration-300 border-2 group bg-bgLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-transparent"
//             >
//               {/* Gradient Border on Hover */}
//               <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-br from-brandPrimary via-brandAccent to-brandGold group-hover:opacity-100 -z-10 blur-sm"></div>
//               <div className="absolute inset-[2px] rounded-2xl bg-bgLight dark:bg-bgDark -z-10"></div>

//               {/* Badge */}
//               <div className="absolute px-3 py-1 text-xs font-bold rounded-full -top-3 left-6 bg-brandAccent text-brandDark">
//                 {service.badge}
//               </div>

//               {/* Icon */}
//               <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold rounded-xl group-hover:scale-110 group-hover:rotate-3">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="mb-4 text-xl font-bold transition-colors duration-300 font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
//                 {service.description}
//               </p>

//               {/* Hover Indicator */}
//               <div className="flex items-center gap-2 mt-6 transition-opacity duration-300 opacity-0 text-brandPrimary dark:text-brandAccent group-hover:opacity-100">
//                 <span className="text-sm font-semibold">Explore</span>
//                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnicalTesting;



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

import testingImage from "../../assets/images/cybersecurity/testing-image.png"

  const TechnicalTesting = () => {
  return (
     <section className="py-24 bg-bgLight">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 font-bold tracking-wider uppercase text-brandAccent">Offensive Security</h2>
              <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark">Specialized Technical Testing</h2>
              <p className="mb-8 text-lg text-gray-600">
                Our experts conduct active testing of individual components or entire applications to identify and exploit potential vulnerabilities. This simulated adversary approach ensures your infrastructure can withstand sophisticated attacks.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Penetration Testing", desc: "Actively testing applications to determine if vulnerabilities can compromise sensitive data or infrastructure." },
                  { title: "Red Team Assessments", desc: "Simulated real-world attacks by an adversary to exploit enterprise-wide vulnerabilities." },
                  { title: "Resilience Testing", desc: "DoS and DDoS simulations to measure system capacity and prevent service downtime." },
                  { title: "Configuration Audits", desc: "Ensuring secure deployment of assets, including blocking unused ports and securing default credentials." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-colors rounded-full bg-brandPrimary/10 group-hover:bg-brandPrimary group-hover:text-white">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-brandDark">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-brandAccent rounded-2xl rotate-3"></div>
              <img src={testingImage} alt="Technical Testing" className="relative object-cover w-full border-4 border-white shadow-2xl rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

  );
 };

export default TechnicalTesting;