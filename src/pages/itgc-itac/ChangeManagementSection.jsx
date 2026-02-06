import React from 'react';
import { GitBranch, Package, FileText } from 'lucide-react';

const ChangeManagementSection = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Authorization Matrix",
      description: "Reviewing CAB approvals, UAT signoffs, and rollback procedures."
    },
    {
      icon: Package,
      title: "Patch Management",
      description: "Verifying deployment timelines based on criticality across all environments."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Ensuring technical manuals and SOPs align with current operational states."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
              Change Management & Lifecycle Governance
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
              RiskMan audits the lifecycle of system changes to prevent unauthorized modifications or outages.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandPrimary dark:hover:border-brandPrimary"
                >
                  <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-all duration-300 md:w-20 md:h-20 bg-brandPrimary/10 dark:bg-brandPrimary/20 rounded-xl group-hover:bg-brandPrimary group-hover:scale-110">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-brandPrimary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-brandNavy/70 dark:text-white/60">
                        {feature.description}
                      </p>
                    </div>
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

export default ChangeManagementSection;