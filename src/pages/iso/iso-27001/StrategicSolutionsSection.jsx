// // StrategicSolutions.jsx
// import React from 'react';

// const solutions = [
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     title: "Master Your Information Security Management System (ISMS)",
//     description: "Our approach aligns with IAF and ANAB standards to establish a robust security framework. We help you define your ISMS scope, establishing clear oversight, objectives, and accountability to protect sensitive corporate data."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     ),
//     title: "Comprehensive Risk Assessment & Mitigation",
//     description: "We facilitate annual entity-level assessments to identify vulnerabilities and threats. RiskMan develops tailored mitigation strategies—including avoidance, transfer, or acceptance—to ensure operational resilience against internal and external disruptions."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//     title: "Operational Policy & Control Integration",
//     description: "We guide the formal definition and distribution of essential IT policies, from incident management to physical security. Our experts ensure role-based access, data encryption, and standardized authentication are seamlessly integrated into your operations."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//       </svg>
//     ),
//     title: "Continuous Monitoring & Audit Readiness",
//     description: "Achieve sustainable compliance through rigorous internal audit cycles and monitoring activities. We oversee vulnerability scans, penetration testing, and management reviews to validate control effectiveness and prepare you for successful certification audits."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//       </svg>
//     ),
//     title: "Holistic Asset & Vendor Governance",
//     description: "RiskMan maintains oversight of your entire digital ecosystem, from master asset inventories to critical vendor risk management. We ensure third-party partnerships meet your security requirements through detailed attestations and control testing."
//   }
// ];

// const StrategicSolutions = () => {
//   return (
//     <section className="relative py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 w-64 h-64 rounded-full left-1/4 bg-brandAccent/5 blur-3xl"></div>
      
//       <div className="container relative">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-16">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Strategic ISO 27001 Readiness Solutions
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             Strengthen your organization's resilience by aligning with global standards through our comprehensive, executive-led ISO 27001 readiness framework.
//           </p>
//         </div>

//         {/* Solutions Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((solution, index) => (
//             <div 
//               key={index}
//               className="p-8 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:shadow-xl hover:border-brandAccent/30 dark:hover:border-brandAccent/40"
//             >
//               {/* Icon */}
//               <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition-transform duration-300 rounded-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold group-hover:scale-110">
//                 {solution.icon}
//               </div>

//               {/* Title */}
//               <h3 className="mb-4 text-xl font-bold leading-tight font-heading text-brandDark dark:text-white">
//                 {solution.title}
//               </h3>

//               {/* Description */}
//               <p className="leading-relaxed text-gray-600 dark:text-gray-300">
//                 {solution.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StrategicSolutions;


// StrategicSolutions.jsx
import React, { useState, useEffect, useRef } from 'react';

const solutions = [
  {
    id: 1,
    title: "Establish ISMS Foundation",
    shortTitle: "ISMS Foundation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Build a robust governance framework aligned with IAF and ANAB standards. Define scope, establish clear oversight, and assign security accountability across the organization.",
    keyPoints: [
      "Security scope definition and boundaries",
      "Executive leadership commitment",
      "Clear accountability framework",
      "IAF/ANAB compliance alignment"
    ],
    metric: "100% Policy Coverage",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-300 dark:border-blue-800"
  },
  {
    id: 2,
    title: "Conduct Risk Assessment",
    shortTitle: "Risk Assessment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Perform comprehensive entity-level risk analysis to identify vulnerabilities and threats. Develop tailored mitigation strategies including avoidance, transfer, or acceptance.",
    keyPoints: [
      "Annual risk assessment process",
      "Vulnerability and threat identification",
      "Risk treatment planning (avoid, transfer, accept)",
      "Documented risk register maintenance"
    ],
    metric: "85% Risk Reduction",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-300 dark:border-purple-800"
  },
  {
    id: 3,
    title: "Implement Operational Controls",
    shortTitle: "Operational Controls",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Deploy formalized IT policies, role-based access controls, encryption standards, and standardized authentication mechanisms across your enterprise.",
    keyPoints: [
      "Enterprise-wide policy distribution",
      "Role-based access control (RBAC)",
      "Data encryption at rest and in transit",
      "Incident management procedures"
    ],
    metric: "95% Control Coverage",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    borderColor: "border-indigo-300 dark:border-indigo-800"
  },
  {
    id: 4,
    title: "Enable Continuous Monitoring",
    shortTitle: "Continuous Monitoring",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: "Establish rigorous internal audit cycles, vulnerability scanning, penetration testing, and management reviews to validate control effectiveness and ensure audit readiness.",
    keyPoints: [
      "Quarterly internal audit program",
      "Automated vulnerability management",
      "Annual penetration testing",
      "Management review processes"
    ],
    metric: "92% Audit Success",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    borderColor: "border-cyan-300 dark:border-cyan-800"
  },
  {
    id: 5,
    title: "Achieve Holistic Governance",
    shortTitle: "Holistic Governance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    description: "Master complete asset and vendor oversight with comprehensive digital ecosystem management. Ensure third-party partnerships meet security requirements through attestations and control testing.",
    keyPoints: [
      "Complete asset inventory (CMDB)",
      "Vendor security attestations",
      "Third-party control testing",
      "Supply chain risk management"
    ],
    metric: "98% Asset Visibility",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-300 dark:border-green-800"
  }
];

const StrategicSolutions = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const stepRefs = useRef([]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mobile swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeStep < solutions.length - 1) {
      setActiveStep(activeStep + 1);
    }
    if (isRightSwipe && activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Auto-scroll for tablet timeline
  useEffect(() => {
    if (isTablet && stepRefs.current[activeStep]) {
      stepRefs.current[activeStep].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeStep, isTablet]);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-blue-700 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            ISO 27001 Readiness Framework
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Strategic Security Transformation
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A systematic approach to achieving ISO 27001 certification through five proven implementation phases
          </p>
        </div>

        {/* DESKTOP: Horizontal Stepper (≥1024px) */}
        <div className="hidden mx-auto lg:block max-w-7xl">
          {/* Step Navigation */}
          <div className="mb-12">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-0 right-0 h-1 bg-gray-200 top-8 dark:bg-gray-700">
                <div 
                  className="h-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-green-500"
                  style={{ width: `${(activeStep / (solutions.length - 1)) * 100}%` }}
                ></div>
              </div>

              {/* Steps */}
              <div className="relative flex justify-between">
                {solutions.map((solution, index) => (
                  <button
                    key={solution.id}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center group"
                  >
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? `bg-gradient-to-br ${solution.color} text-white shadow-xl scale-110`
                        : activeStep > index
                        ? `bg-gradient-to-br ${solution.color} text-white shadow-lg`
                        : 'bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-300 dark:border-gray-600'
                    }`}>
                      {activeStep > index ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        solution.icon
                      )}
                    </div>

                    {/* Label */}
                    <div className={`mt-3 text-center transition-all duration-300 ${
                      activeStep === index ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                    }`}>
                      <div className={`text-xs font-bold mb-1 ${
                        activeStep === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        STEP {solution.id}
                      </div>
                      <div className={`text-sm font-semibold ${
                        activeStep === index ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {solution.shortTitle}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className="relative min-h-[400px]">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeStep === index
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : index < activeStep
                    ? 'opacity-0 -translate-x-full pointer-events-none'
                    : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                <div className={`p-8 border-2 rounded-2xl ${solution.borderColor} ${solution.bgColor} shadow-xl`}>
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Left: Main Content */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${solution.color} text-white shadow-lg`}>
                          {solution.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-500 dark:text-gray-400">
                            PHASE {solution.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {solution.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {solution.description}
                      </p>

                      {/* Metric Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${solution.color} text-white shadow-lg`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold">{solution.metric}</span>
                      </div>
                    </div>

                    {/* Right: Key Points */}
                    <div>
                      <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {solution.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${solution.color} text-white`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 mt-8 border-t border-gray-300 dark:border-gray-600">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        activeStep === 0
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:shadow-lg'
                      }`}
                    >
                      ← Previous
                    </button>

                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {activeStep + 1} of {solutions.length}
                    </div>

                    <button
                      onClick={() => setActiveStep(Math.min(solutions.length - 1, activeStep + 1))}
                      disabled={activeStep === solutions.length - 1}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        activeStep === solutions.length - 1
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                          : `bg-gradient-to-r ${solution.color} text-white shadow-lg hover:shadow-xl`
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TABLET: Vertical Timeline (768px-1023px) */}
        <div className="hidden max-w-3xl mx-auto md:block lg:hidden">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 w-1 left-8 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  ref={el => stepRefs.current[index] = el}
                  onClick={() => setActiveStep(index)}
                  className={`relative pl-20 transition-all duration-500 cursor-pointer ${
                    activeStep === index ? 'scale-105' : 'scale-100 opacity-75'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-br ${solution.color} text-white shadow-2xl scale-110`
                      : `bg-gradient-to-br ${solution.color} text-white shadow-lg`
                  }`}>
                    {solution.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? `${solution.borderColor} ${solution.bgColor} shadow-xl`
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="mb-1 text-xs font-bold text-gray-500 dark:text-gray-400">
                          STEP {solution.id}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {solution.title}
                        </h3>
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-sm font-bold bg-gradient-to-r ${solution.color} text-white`}>
                        {solution.metric}
                      </div>
                    </div>

                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      {solution.description}
                    </p>

                    {/* Expandable Details */}
                    {activeStep === index && (
                      <div className="pt-4 mt-4 border-t border-gray-300 dark:border-gray-600">
                        <ul className="space-y-2">
                          {solution.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: Card Carousel with Swipe (<768px) */}
        <div className="md:hidden">
          {/* Card Container */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeStep * 100}%)` }}
            >
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className={`p-6 border-2 rounded-2xl ${solution.borderColor} ${solution.bgColor} shadow-xl`}>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${solution.color} text-white shadow-lg`}>
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-xs font-bold text-gray-500 dark:text-gray-400">
                          STEP {solution.id} OF {solutions.length}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {solution.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metric */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-lg bg-gradient-to-r ${solution.color} text-white text-sm font-bold`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {solution.metric}
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {solution.description}
                    </p>

                    {/* Expandable Section */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="flex items-center justify-center w-full gap-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400"
                    >
                      {expandedCard === index ? 'Hide' : 'Show'} Details
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Expanded Details */}
                    {expandedCard === index && (
                      <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                        <h4 className="mb-3 text-sm font-bold text-gray-900 dark:text-white">
                          Key Deliverables:
                        </h4>
                        <ul className="space-y-2">
                          {solution.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeStep === index
                    ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="mt-4 text-center">
            <p className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to navigate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="p-8 border-2 border-gray-200 shadow-xl dark:border-gray-700 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Ready to Start Your ISO 27001 Journey?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Let's discuss how RiskMan can guide you through each phase of certification
            </p>
            <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSolutions;