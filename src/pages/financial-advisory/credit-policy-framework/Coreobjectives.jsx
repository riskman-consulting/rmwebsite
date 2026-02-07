import React from 'react';

const CoreObjectives = () => {
  const objectives = [
    {
      id: 1,
      title: 'Strategic Alignment',
      description: 'Ensuring credit activities remain consistent with the enterprise\'s overarching direction.',
      detail: 'We align your credit policies with long-term business goals, ensuring every decision supports your strategic vision and organizational mission.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'from-blue-500 to-brandPrimary',
      stats: { value: '95%', label: 'Strategic Fit' }
    },
    {
      id: 2,
      title: 'Asset Quality',
      description: 'Implementing principles to achieve specific earning objectives and maintaining high-performing portfolios.',
      detail: 'Our framework establishes robust quality standards that maximize returns while minimizing non-performing assets through proactive monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-brandGold to-brandAccent',
      stats: { value: '98%', label: 'Asset Quality' }
    },
    {
      id: 3,
      title: 'Risk Tolerance',
      description: 'Formally demarcating the institution\'s tolerance levels in relation to total credit exposure.',
      detail: 'Clear risk appetite definitions with quantified limits ensure controlled growth while protecting capital adequacy and regulatory compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      stats: { value: '12%', label: 'Max Exposure' }
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold border rounded-full bg-brandGold/10 border-brandGold/30 text-brandPrimary dark:text-brandGold">
              Foundation of Excellence
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Core Objectives of Credit Policy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A well-defined framework acts as the blueprint for asset quality, guiding every stage of the credit lifecycle toward profitability.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {objectives.map((objective, index) => (
            <div
              key={objective.id}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="h-full p-8 transition-all duration-500 border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandGold hover:shadow-2xl">
                {/* Icon Container */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${objective.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {objective.icon}
                  
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} rounded-xl opacity-0 group-hover:opacity-20 animate-ping`}></div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold transition-colors font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                  {objective.title}
                </h3>
                
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  {objective.description}
                </p>

                <p className="pl-4 mb-6 text-sm leading-relaxed text-gray-500 border-l-2 dark:text-gray-500 border-brandGold/30">
                  {objective.detail}
                </p>

                {/* Stats */}
                <div className="pt-6 border-t border-borderLight dark:border-borderDark">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-brandPrimary dark:text-brandGold">
                        {objective.stats.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        {objective.stats.label}
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${objective.color} rounded-lg opacity-10`}></div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute flex items-center justify-center w-10 h-10 border rounded-full top-6 right-6 bg-brandGold/10 border-brandGold/30">
                  <span className="text-sm font-bold text-brandGold">{objective.id}</span>
                </div>
              </div>

              {/* Connecting Line (visible on desktop) */}
              {index < objectives.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brandGold to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Feature Section */}
        <div className="p-8 text-white bg-gradient-to-br from-brandPrimary to-brandNavy rounded-2xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left - Content */}
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
                Blueprint for Asset Quality Excellence
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                Our comprehensive framework ensures your credit operations are built on a foundation of strategic alignment, superior asset quality, and well-defined risk tolerance levels.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Regulatory Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Industry Best Practices</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Continuous Improvement</span>
                </div>
              </div>
            </div>

            {/* Right - Visual Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Policy Compliance', value: '100%', icon: '✓' },
                { label: 'Risk Coverage', value: '360°', icon: '◉' },
                { label: 'Earning Objectives', value: '15%+', icon: '↑' },
                { label: 'Portfolio Quality', value: 'AAA', icon: '★' }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 text-center border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                  <div className="mb-2 text-3xl">{stat.icon}</div>
                  <p className="mb-1 text-2xl font-bold text-brandGold">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreObjectives;