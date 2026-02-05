import React from 'react';
import { RefreshCcw, Scale } from 'lucide-react';

const BusinessContinuitySection = () => {
  const features = [
    {
      icon: RefreshCcw,
      title: "Resilience Testing",
      description: "Evaluating BCP/DR plans through drill reports and impact analyses."
    },
    {
      icon: Scale,
      title: "Regulatory Alignment",
      description: "Ensuring adherence to industry-specific statutory requirements and exception management."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
              Business Continuity & Statutory Compliance
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
              We align your IT strategy with legal requirements and disaster recovery readiness.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-8 transition-all duration-300 bg-white border-2 group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-10 hover:shadow-2xl hover:border-brandAccent dark:hover:border-brandAccent"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 shadow-lg md:w-24 md:h-24 bg-gradient-to-br from-brandAccent to-brandGold rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-brandDark" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-brandNavy/70 dark:text-white/60">
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

export default BusinessContinuitySection;