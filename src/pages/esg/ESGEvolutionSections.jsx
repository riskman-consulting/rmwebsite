import React from 'react';

const ESGEvolutionTimeline = () => {
  const timelineData = [
    {
      period: "2000 - 2010",
      phase: "COMPLIANCE",
      icon: "📋",
      color: "from-brandNavy to-brandPrimary",
      glowColor: "shadow-brandNavy/20",
      features: [
        "Regulatory focus",
        "Risk mitigation",
        "Reporting burden"
      ]
    },
    {
      period: "2010 - 2020",
      phase: "STRATEGY",
      icon: "📈",
      color: "from-brandPrimary to-brandNavy",
      glowColor: "shadow-brandPrimary/20",
      features: [
        "Business integration",
        "Stakeholder value",
        "Efficiency gains"
      ]
    },
    {
      period: "2020+",
      phase: "VALUE CREATION",
      icon: "🚀",
      color: "from-brandAccent to-brandGold",
      glowColor: "shadow-brandAccent/20",
      features: [
        "Competitive advantage",
        "Innovation driver",
        "Enterprise value"
      ]
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-4xl font-black font-heading text-brandDark dark:text-surfaceLight">
            ESG Evolution Timeline
          </h3>
          <p className="max-w-2xl mx-auto text-lg font-sans text-brandDark/70 dark:text-surfaceLight/70">
            The three distinct phases of ESG evolution, moving from a necessity of compliance to a powerful driver of enterprise value.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-7xl">
          {/* Desktop Timeline */}
          <div className="relative hidden gap-6 md:grid md:grid-cols-3">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Connecting Line to next card */}
                {index < timelineData.length - 1 && (
                  <div className={`absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r ${item.color} opacity-30 dark:opacity-50 hidden lg:block z-0`} />
                )}

                {/* Card Container */}
                <div className="relative z-10 h-full p-6 transition-all duration-500 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 group-hover:border-brandAccent/50">
                  
                  {/* Icon Node */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl ${item.glowColor} border-4 border-white dark:border-surfaceDark transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>

                  {/* Period Label */}
                  <div className="mb-2 text-xs font-bold tracking-[2px] uppercase text-brandPrimary dark:text-brandAccent">
                    {item.period}
                  </div>

                  {/* Phase Title */}
                  <h4 className="pr-12 mb-6 font-heading text-2xl font-black text-brandDark dark:text-surfaceLight">
                    {item.phase}
                  </h4>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-medium text-brandDark/80 dark:text-surfaceLight/80">
                        <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="space-y-8 md:hidden px-4">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Vertical Connecting Line */}
                {index < timelineData.length - 1 && (
                  <div className={`absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b ${item.color} opacity-40`} />
                )}

                <div className="relative p-6 border-2 shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl">
                  <div className={`absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-surfaceDark`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  <div className="mb-1 text-xs font-bold tracking-widest text-brandPrimary dark:text-brandAccent">
                    {item.period}
                  </div>
                  <h4 className="mb-4 font-heading text-xl font-black text-brandDark dark:text-surfaceLight uppercase">
                    {item.phase}
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-brandDark/70 dark:text-surfaceLight/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGEvolutionTimeline;