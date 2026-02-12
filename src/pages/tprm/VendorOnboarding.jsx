// // VendorOnboarding.jsx
// import React from 'react';

// const onboardingSteps = [
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     title: "Security Questionnaires",
//     description: "Completion of detailed information security and privacy assessments."
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     title: "Compliance Review",
//     description: "Verification of ISO 27001, SOC 2, and GDPR certifications."
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//       </svg>
//     ),
//     title: "Workflow Approval",
//     description: "Documented internal approval flows for every new third-party engagement."
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//       </svg>
//     ),
//     title: "Conflict Interest",
//     description: "Formal declarations to mitigate internal and external risks."
//   }
// ];

// const VendorOnboarding = () => {
//   return (
//     <section className="relative py-16 overflow-hidden md:py-24 bg-surfaceLight dark:bg-surfaceDark">
//       {/* Background Decoration */}
//       <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandPrimary/5 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandAccent/5 blur-3xl"></div>

//       <div className="container relative">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-16">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Strategic Vendor Onboarding and Due Diligence
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             Our process involves pre-engagement risk assessments and detailed due diligence before any contract is signed. We evaluate financial stability, regulatory compliance, and security postures to ensure your partners meet your high standards.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {onboardingSteps.map((step, index) => (
//             <div key={index} className="relative">
//               {/* Connector Line - Desktop Only */}
//               {index < onboardingSteps.length - 1 && (
//                 <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brandAccent to-transparent -translate-y-1/2 z-0"></div>
//               )}

//               {/* Card */}
//               <div className="relative z-10 p-6 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/50 hover:shadow-lg">
//                 {/* Number Badge */}
//                 <div className="absolute flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full shadow-lg -top-4 -left-4 bg-brandAccent text-brandDark">
//                   {index + 1}
//                 </div>

//                 {/* Icon */}
//                 <div className="flex items-center justify-center mt-2 mb-6 rounded-lg w-14 h-14 bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
//                   {step.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-3 text-lg font-bold font-heading text-brandDark dark:text-white">
//                   {step.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VendorOnboarding;


import React from 'react';
import { ClipboardCheck, Award, GitPullRequest, AlertTriangle } from 'lucide-react';
import onboardingImg from "../../assets/images/tprm/onboarding.png"

const Onboarding = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Security Questionnaires",
      desc: "Completion of detailed information security and privacy assessments."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Compliance Review",
      desc: "Verification of ISO 27001, SOC 2, and GDPR certifications."
    },
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title: "Workflow Approval",
      desc: "Documented internal approval flows for every new third-party engagement."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Conflict Interest",
      desc: "Formal declarations to mitigate internal and external risks."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden text-white bg-brandDark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full transform translate-x-20 skew-x-12 bg-brandNavy"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto lg:px-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading">
              Strategic Vendor Onboarding and Due Diligence
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              Our process involves pre-engagement risk assessments and detailed due diligence before any contract is signed. We evaluate financial stability, regulatory compliance, and security postures to ensure your partners meet your high standards.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors duration-300 rounded-full bg-brandNavy text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-brandAccent">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute rounded-lg -inset-4 bg-brandAccent opacity-30 blur-lg animate-pulse-custom"></div>
              <img 
                src={onboardingImg}
                alt="Strategic Partnership Handshake" 
                className="relative w-full border-2 rounded-lg shadow-2xl border-brandNavy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
