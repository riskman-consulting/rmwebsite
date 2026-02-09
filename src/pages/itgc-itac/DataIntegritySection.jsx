import React from 'react';
import { CheckCircle, Link2, Users } from 'lucide-react';

const DataIntegritySection = () => {
  const controls = [
    {
      icon: CheckCircle,
      title: "Validation Rules",
      description: "Verifying entry-stage validation to prevent duplicate or out-of-range data from entering the system."
    },
    {
      icon: Link2,
      title: "Interface Security",
      description: "Auditing automated data exchanges and encryption for data in-transit across internal and external APIs."
    },
    {
      icon: Users,
      title: "Maker-Checker Protocols",
      description: "Confirming segregation of duties for critical transaction processing to eliminate single-point failures."
    }
  ];

  return (
    <section className="relative py-14 md:py-16 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER - Consistent Signature Style */}
          <div className="mb-10 border-l-4 border-brandGold pl-6">
            <h2 className="text-3xl font-bold font-heading md:text-5xl text-brandDark dark:text-white leading-tight">
              Data Integrity & <br />
              <span className="text-brandGold">Input Controls</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base md:text-lg text-brandNavy/70 dark:text-white/60">
              We ensure your business applications process only accurate, authorized, and complete data sets through rigorous input-level testing.
            </p>
          </div>

          {/* CONTROLS GRID - Compact and Professional */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 md:p-8 transition-all duration-300 bg-white dark:bg-bgDark/40 border border-borderLight dark:border-borderDark rounded-2xl hover:shadow-xl hover:border-brandGold/40 overflow-hidden"
                >
                  {/* Subtle Top-Right Accent */}
                  <div className="absolute top-4 right-4 text-[10px] font-black text-brandGold/20 tracking-widest uppercase">
                    Control_0{index + 1}
                  </div>

                  <div className="relative z-10">
                    {/* Centered Icon with Gold Accent */}
                    <div className="flex items-center justify-center w-14 h-14 mb-6 transition-all duration-500 bg-brandGold/10 dark:bg-brandGold/5 rounded-xl group-hover:bg-brandGold group-hover:shadow-[0_10px_20px_rgba(255,184,0,0.3)]">
                      <Icon className="w-7 h-7 text-brandGold group-hover:text-brandDark transition-colors duration-500" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white group-hover:text-brandGold transition-colors">
                      {control.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/50">
                      {control.description}
                    </p>
                  </div>

                  {/* Hover Progress bar */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-brandGold transition-all duration-500 group-hover:w-full" />
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