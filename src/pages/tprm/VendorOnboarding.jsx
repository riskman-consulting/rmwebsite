// VendorOnboarding.jsx
import React from 'react';

const onboardingSteps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Security Questionnaires",
    description: "Completion of detailed information security and privacy assessments."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Compliance Review",
    description: "Verification of ISO 27001, SOC 2, and GDPR certifications."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Workflow Approval",
    description: "Documented internal approval flows for every new third-party engagement."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Conflict Interest",
    description: "Formal declarations to mitigate internal and external risks."
  }
];

const VendorOnboarding = () => {
  return (
    <section className="relative py-16 overflow-hidden md:py-24 bg-surfaceLight dark:bg-surfaceDark">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandPrimary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandAccent/5 blur-3xl"></div>

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Strategic Vendor Onboarding and Due Diligence
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Our process involves pre-engagement risk assessments and detailed due diligence before any contract is signed. We evaluate financial stability, regulatory compliance, and security postures to ensure your partners meet your high standards.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {onboardingSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line - Desktop Only */}
              {index < onboardingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brandAccent to-transparent -translate-y-1/2 z-0"></div>
              )}

              {/* Card */}
              <div className="relative z-10 p-6 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/50 hover:shadow-lg">
                {/* Number Badge */}
                <div className="absolute flex items-center justify-center w-10 h-10 text-lg font-bold rounded-full shadow-lg -top-4 -left-4 bg-brandAccent text-brandDark">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center mt-2 mb-6 rounded-lg w-14 h-14 bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold font-heading text-brandDark dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorOnboarding;