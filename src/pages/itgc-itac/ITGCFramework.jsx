import React from 'react';
import { Shield, Lock, Activity, Database } from 'lucide-react';

const ITGCFramework = () => {
  const controls = [
    {
      icon: Shield,
      title: "Access Management",
      description: "Reviewing privileged accounts, MFA, and password policies to prevent unauthorized entry."
    },
    {
      icon: Lock,
      title: "Security",
      description: "Assessing firewalls, IPS/IDS, and external communication protocols for perimeter defense."
    },
    {
      icon: Activity,
      title: "Operational Integrity",
      description: "Auditing incident management, asset tracking, and endpoint security for system reliability."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Verifying backup restoration, encryption, and classification standards for data safety."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header - Left Aligned with Accent */}
          <div className="mb-12 border-l-4 border-brandAccent pl-6">
            <h2 className="text-3xl font-bold font-heading md:text-5xl text-brandDark dark:text-white leading-tight">
              IT General Controls <br />
              <span className="text-brandPrimary dark:text-brandAccent">(ITGC) Framework</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-brandNavy/70 dark:text-brandLight/60">
              We evaluate the foundational policies that support the reliability of your entire IT environment, ensuring a secure and compliant digital infrastructure.
            </p>
          </div>

          {/* Controls Grid - Compact Gap */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 md:p-8 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl transition-all duration-300 hover:shadow-2xl hover:border-brandAccent/40 overflow-hidden"
                >
                  {/* Subtle Background Number */}
                  <div className="absolute -right-2 -bottom-4 text-7xl font-black text-brandDark/[0.03] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-brandAccent/5 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="flex items-start gap-6 relative z-10">
                    {/* Icon - Flip style */}
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-brandDark dark:bg-brandPrimary/10 rounded-xl transition-all duration-500 group-hover:bg-brandAccent group-hover:shadow-[0_10px_20px_rgba(255,192,0,0.3)]">
                      <Icon className="w-6 h-6 text-brandAccent group-hover:text-brandDark transition-colors duration-500" />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
                        {control.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-brandNavy/60 dark:text-brandLight/50">
                        {control.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Border Glow */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brandAccent transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ITGCFramework;