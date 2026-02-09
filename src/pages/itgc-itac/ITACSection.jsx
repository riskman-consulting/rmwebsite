import React from 'react';
import { Layers, AlertTriangle, Webhook } from 'lucide-react';

const ITACSection = () => {
  const itacFeatures = [
    {
      icon: Layers,
      title: "Architecture Review",
      description: "Assessing OWASP responses and performance benchmarks to ensure scalable design integrity."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Reviewing VAPT reports and tracking remediation of open issues to bridge security gaps."
    },
    {
      icon: Webhook,
      title: "API Security",
      description: "Evaluating rate limiting, dormant API management, and gateway security for robust connectivity."
    }
  ];

  return (
    <section className="relative py-14 md:py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500 overflow-hidden">
      {/* Background Decor - Matches previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-brandPrimary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER - Executive Left-Aligned Style */}
          <div className="mb-10 border-l-4 border-brandAccent pl-6 animate-[fadeInLeft_0.8s_ease-out]">
            <span className="text-brandPrimary dark:text-brandAccent text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
              Application Integrity
            </span>
            <h2 className="text-3xl font-bold font-heading md:text-5xl text-brandDark dark:text-white leading-tight">
              Application Architecture <br />
              <span className="text-brandPrimary dark:text-brandAccent">& Security (ITAC)</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-brandNavy/70 dark:text-brandLight/60">
              RiskMan deep-dives into specific application layers to ensure design integrity and vulnerability resilience across your enterprise software.
            </p>
          </div>

          {/* FEATURES GRID - Compact & Technical */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {itacFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 md:p-8 transition-all duration-300 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl shadow-sm hover:shadow-xl hover:border-brandPrimary/40 overflow-hidden"
                >
                  {/* Subtle Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brandPrimary/20 to-transparent group-hover:via-brandAccent/50 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Technical Icon Container */}
                    <div className="flex items-center justify-center w-14 h-14 mb-6 transition-all duration-500 bg-brandDark dark:bg-brandPrimary/10 rounded-xl group-hover:bg-brandPrimary group-hover:shadow-[0_10px_20px_rgba(0,64,128,0.3)]">
                      <Icon className="w-7 h-7 text-brandAccent group-hover:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-brandNavy/60 dark:text-brandLight/50">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brandPrimary/10 rounded-br-2xl group-hover:border-brandAccent/40 transition-colors" />
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