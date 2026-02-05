import React from 'react';
import { CheckCircle, Link2, Users } from 'lucide-react';

const DataIntegritySection = () => {
  const controls = [
    {
      icon: CheckCircle,
      title: "Validation Rules",
      description: "Verifying entry-stage validation to prevent duplicate or out-of-range data."
    },
    {
      icon: Link2,
      title: "Interface Security",
      description: "Auditing automated data exchanges and encryption for data in-transit."
    },
    {
      icon: Users,
      title: "Maker-Checker Protocols",
      description: "Confirming segregation of duties for critical transaction processing."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
              Data Integrity & Input Controls
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
              We ensure your business applications process only accurate, authorized, and complete data sets.
            </p>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandGold dark:hover:border-brandGold"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full md:w-20 md:h-20 bg-brandGold/10 dark:bg-brandGold/20 group-hover:bg-brandGold group-hover:scale-110">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-brandGold group-hover:text-brandDark" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
                      {control.title}
                    </h3>
                    <p className="leading-relaxed text-brandNavy/70 dark:text-white/60">
                      {control.description}
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

export default DataIntegritySection;