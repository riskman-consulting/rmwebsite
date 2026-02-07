import React from 'react';

const QuantitativeMetrics = () => {
  const metrics = [
    {
      id: 1,
      title: 'Probability of Default (PD)',
      description: 'Calculating the likelihood of a counterparty failing to meet obligations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-brandPrimary',
      stat: '3.2%',
      label: 'Avg. Industry PD'
    },
    {
      id: 2,
      title: 'Exposure at Default (EAD)',
      description: 'Assessing the total value at risk at the moment of default.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-brandAccent to-brandGold',
      stat: '$2.5M',
      label: 'Avg. Exposure'
    },
    {
      id: 3,
      title: 'Loss Given Default (LGD)',
      description: 'Determining the projected financial loss after all recovery efforts are exhausted.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
      stat: '45%',
      label: 'Recovery Rate'
    }
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Quantitative Metric Analysis
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            RiskMan evaluates the fundamental technicalities of credit exposure to ensure portfolio resilience and precise financial forecasting.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="relative p-8 overflow-hidden transition-all duration-500 border shadow-lg group bg-surfaceLight dark:bg-surfaceDark rounded-2xl hover:shadow-2xl border-borderLight dark:border-borderDark"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold transition-colors font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                {metric.title}
              </h3>
              
              <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {metric.description}
              </p>

              {/* Stats */}
              <div className="flex items-end justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                <div>
                  <p className="text-2xl font-bold text-brandPrimary dark:text-brandAccent">
                    {metric.stat}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {metric.label}
                  </p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg opacity-10`}></div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute transition-opacity duration-300 opacity-0 top-6 right-6 group-hover:opacity-100">
                <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="p-8 mt-12 text-white bg-gradient-to-r from-brandPrimary to-brandNavy rounded-2xl md:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brandAccent/20 rounded-xl">
                <svg className="w-8 h-8 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="mb-1 text-xl font-bold">Comprehensive Risk Evaluation</h4>
                <p className="text-gray-300">Portfolio resilience through data-driven forecasting</p>
              </div>
            </div>
            <button className="px-8 py-3 font-semibold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantitativeMetrics;