import React from 'react';
import { Shield, Lock, Activity, Database } from 'lucide-react';

const ITGCFramework = () => {
  const controls = [
    {
      icon: Shield,
      title: "Access Management",
      description: "Reviewing privileged accounts, MFA, and password policies."
    },
    {
      icon: Lock,
      title: "Security",
      description: "Assessing firewalls, IPS/IDS, and external communication protocols."
    },
    {
      icon: Activity,
      title: "Operational Integrity",
      description: "Auditing incident management, asset tracking, and endpoint security."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Verifying backup restoration, encryption, and classification standards."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
              IT General Controls (ITGC) Framework
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
              We evaluate the foundational policies that support the reliability of your entire IT environment.
            </p>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <div 
                  key={index}
                  className="p-6 transition-all duration-300 bg-white border group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-lg md:w-14 md:h-14 bg-brandAccent/10 dark:bg-brandAccent/20 group-hover:bg-brandAccent group-hover:scale-110">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-brandAccent group-hover:text-brandDark" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
                        {control.title}
                      </h3>
                      <p className="leading-relaxed text-brandNavy/70 dark:text-white/60">
                        {control.description}
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

export default ITGCFramework;