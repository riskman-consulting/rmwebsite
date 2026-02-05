import React from 'react';
import { Layers, AlertTriangle, Webhook } from 'lucide-react';

const ITACSection = () => {
  const itacFeatures = [
    {
      icon: Layers,
      title: "Architecture Review",
      description: "Assessing OWASP responses and performance benchmarks."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Reviewing VAPT reports and tracking remediation of open issues."
    },
    {
      icon: Webhook,
      title: "API Security",
      description: "Evaluating rate limiting, dormant API management, and gateway security."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
              Application Architecture & Security (ITAC)
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
              RiskMan deep-dives into specific application layers to ensure design integrity and vulnerability resilience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {itacFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-4 transition-all duration-300 rounded-lg w-14 h-14 md:w-16 md:h-16 bg-brandPrimary/10 dark:bg-brandPrimary/20 group-hover:bg-brandPrimary group-hover:scale-110">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-brandPrimary group-hover:text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-brandNavy/70 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITACSection;