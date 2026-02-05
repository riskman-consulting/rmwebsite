// StrategicSolutions.jsx
import React from 'react';

const solutions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Master Your Information Security Management System (ISMS)",
    description: "Our approach aligns with IAF and ANAB standards to establish a robust security framework. We help you define your ISMS scope, establishing clear oversight, objectives, and accountability to protect sensitive corporate data."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Comprehensive Risk Assessment & Mitigation",
    description: "We facilitate annual entity-level assessments to identify vulnerabilities and threats. RiskMan develops tailored mitigation strategies—including avoidance, transfer, or acceptance—to ensure operational resilience against internal and external disruptions."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Operational Policy & Control Integration",
    description: "We guide the formal definition and distribution of essential IT policies, from incident management to physical security. Our experts ensure role-based access, data encryption, and standardized authentication are seamlessly integrated into your operations."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Continuous Monitoring & Audit Readiness",
    description: "Achieve sustainable compliance through rigorous internal audit cycles and monitoring activities. We oversee vulnerability scans, penetration testing, and management reviews to validate control effectiveness and prepare you for successful certification audits."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Holistic Asset & Vendor Governance",
    description: "RiskMan maintains oversight of your entire digital ecosystem, from master asset inventories to critical vendor risk management. We ensure third-party partnerships meet your security requirements through detailed attestations and control testing."
  }
];

const StrategicSolutions = () => {
  return (
    <section className="relative py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      {/* Decorative Elements */}
      <div className="absolute top-0 w-64 h-64 rounded-full left-1/4 bg-brandAccent/5 blur-3xl"></div>
      
      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Strategic ISO 27001 Readiness Solutions
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Strengthen your organization's resilience by aligning with global standards through our comprehensive, executive-led ISO 27001 readiness framework.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-8 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:shadow-xl hover:border-brandAccent/30 dark:hover:border-brandAccent/40"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition-transform duration-300 rounded-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold group-hover:scale-110">
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold leading-tight font-heading text-brandDark dark:text-white">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicSolutions;