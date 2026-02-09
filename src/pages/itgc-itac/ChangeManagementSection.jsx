import React from 'react';
import { GitBranch, Package, FileText } from 'lucide-react';

const ChangeManagementSection = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Authorization Matrix",
      description: "Reviewing CAB approvals, UAT signoffs, and rollback procedures to maintain environment stability."
    },
    {
      icon: Package,
      title: "Patch Management",
      description: "Verifying deployment timelines based on criticality across all production and staging environments."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Ensuring technical manuals and SOPs align with current operational states for seamless knowledge transfer."
    }
  ];

  return (
    <section className="relative py-14 md:py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#004080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER - Consistent Signature Style */}
          <div className="mb-10 border-l-4 border-brandPrimary pl-6">
            <span className="text-brandPrimary dark:text-brandAccent text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
              Lifecycle Governance
            </span>
            <h2 className="text-3xl font-bold font-heading md:text-5xl text-brandDark dark:text-white leading-tight">
              Change Management & <br />
              <span className="text-brandPrimary italic">Lifecycle Governance</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base md:text-lg text-brandNavy/70 dark:text-brandLight/60 leading-relaxed">
              RiskMan audits the lifecycle of system changes to prevent unauthorized modifications or unplanned outages within your IT ecosystem.
            </p>
          </div>

          {/* LIST - Compact Vertical Flow */}
          <div className="relative space-y-4 max-w-5xl">
            {/* Connecting Line Decoration */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brandPrimary/10 hidden md:block" />

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-5 md:p-6 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-brandPrimary/40 overflow-hidden"
                >
                  {/* Icon with Step Number */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-brandDark dark:bg-brandPrimary/10 rounded-xl transition-all duration-500 group-hover:bg-brandPrimary group-hover:shadow-[0_10px_20px_rgba(0,64,128,0.2)] z-10">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-brandAccent group-hover:text-white transition-colors duration-500" />
                    
                    {/* Small Step Indicator */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-brandAccent text-brandDark text-[10px] font-black rounded-lg flex items-center justify-center shadow-lg">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold font-heading text-brandDark dark:text-white group-hover:text-brandPrimary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-brandNavy/60 dark:text-brandLight/50">
                      {feature.description}
                    </p>
                  </div>

                  {/* Right Arrow Hover Decor */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                    <div className="w-8 h-[1px] bg-brandAccent" />
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