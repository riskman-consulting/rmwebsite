import React from 'react';

const ESGEvolutionTimeline = () => {
  const timelineData = [
    {
      period: "2000 - 2010",
      phase: "COMPLIANCE",
      icon: "📋",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
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
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      features: [
        "Competitive advantage",
        "Innovation driver",
        "Enterprise value"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
      <div className="container">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-white">
            ESG Evolution Timeline
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Three Phases of ESG Evolution from Compliance to Value Creation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-7xl">
          {/* Desktop Timeline */}
          <div className="relative hidden gap-8 md:grid md:grid-cols-3">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 z-0 h-1 top-24 bg-gradient-to-r from-red-500 via-blue-500 to-green-500"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative z-10">
                {/* Timeline Node */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                {/* Card */}
                <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                  {/* Period */}
                  <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {item.period}
                  </div>

                  {/* Phase */}
                  <h4 className="mb-6 text-2xl font-bold font-heading text-brandDark dark:text-white">
                    {item.phase}
                  </h4>

                  {/* Features */}
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <svg className="flex-shrink-0 w-5 h-5 text-brandPrimary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="space-y-8 md:hidden">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index !== timelineData.length - 1 && (
                  <div className={`absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b ${item.color} z-0`}></div>
                )}

                <div className="relative z-10 flex gap-4">
                  {/* Timeline Node */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-lg`}>
                    <div className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {item.period}
                    </div>
                    <h4 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                      {item.phase}
                    </h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <svg className="flex-shrink-0 w-4 h-4 text-brandPrimary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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