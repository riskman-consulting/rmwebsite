// ContinuousMonitoring.jsx
import React from 'react';

const ContinuousMonitoring = () => {
  const features = [
    {
      title: "Annual Reassessments",
      description: "Comprehensive risk reviews for high-risk vendors"
    },
    {
      title: "Detailed Audit Trails",
      description: "Complete documentation of all monitoring activities"
    },
    {
      title: "SLA Performance Reviews",
      description: "Regular evaluation against service level agreements"
    },
    {
      title: "Incident Response Plans",
      description: "Coordinated breach mitigation strategies"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden md:py-24 bg-surfaceLight dark:bg-surfaceDark">
      {/* Decorative Elements */}
      <div className="absolute left-0 rounded-full top-1/4 w-72 h-72 bg-brandPrimary/10 blur-3xl"></div>
      <div className="absolute right-0 rounded-full bottom-1/4 w-72 h-72 bg-brandAccent/10 blur-3xl"></div>

      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
              Continuous Monitoring and Risk Mitigation
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Risk management is not a one-time event. We implement annual reassessments for high-risk vendors and maintain detailed audit trails of all activities. Our strategy includes performance reviews against SLAs and coordinated incident response plans to mitigate breaches immediately if they occur.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brandPrimary via-brandAccent to-brandPrimary transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/50 hover:shadow-lg">
                      <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="z-10 flex-shrink-0 hidden w-4 h-4 border-4 rounded-full shadow-lg md:flex bg-brandAccent border-surfaceLight dark:border-surfaceDark"></div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousMonitoring;