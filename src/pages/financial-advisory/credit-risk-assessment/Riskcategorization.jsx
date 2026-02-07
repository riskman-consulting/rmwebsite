import React, { useState } from 'react';

const RiskCategorization = () => {
  const [activeTab, setActiveTab] = useState('external');

  const riskCategories = {
    external: [
      {
        title: 'Competitive Landscapes',
        description: 'Monitoring market competition and industry dynamics that affect credit stability',
        icon: '🎯',
        impact: 'High'
      },
      {
        title: 'Geopolitical Shifts',
        description: 'Assessing political and regulatory changes across different jurisdictions',
        icon: '🌍',
        impact: 'Medium'
      },
      {
        title: 'Regulatory Carbon Stringency',
        description: 'Evaluating environmental compliance and sustainability requirements',
        icon: '🌱',
        impact: 'Growing'
      }
    ],
    internal: [
      {
        title: 'Management Quality',
        description: 'Auditing leadership capabilities and decision-making track records',
        icon: '👔',
        impact: 'Critical'
      },
      {
        title: 'Technological Preparedness',
        description: 'Evaluating digital infrastructure and innovation capabilities',
        icon: '💻',
        impact: 'High'
      },
      {
        title: 'Operational Track Records',
        description: 'Analyzing historical performance and operational efficiency',
        icon: '📈',
        impact: 'High'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bgLight to-white dark:from-bgDark dark:to-surfaceDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Risk Categorization & Ring-Fencing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We identify and quantify risks across the entire spectrum, implementing measures to protect your capital from both internal and external volatility.
          </p>
        </div>

        {/* Interactive Tab System */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-col gap-4 mb-8 sm:flex-row">
            <button
              onClick={() => setActiveTab('external')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'external'
                  ? 'bg-gradient-to-r from-brandPrimary to-brandNavy text-white shadow-lg scale-105'
                  : 'bg-surfaceLight dark:bg-surfaceDark text-gray-600 dark:text-gray-400 border border-borderLight dark:border-borderDark hover:border-brandAccent'
              }`}
            >
              <span className="mr-2 text-2xl">🌐</span>
              External Risk Management
            </button>
            <button
              onClick={() => setActiveTab('internal')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'internal'
                  ? 'bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg scale-105'
                  : 'bg-surfaceLight dark:bg-surfaceDark text-gray-600 dark:text-gray-400 border border-borderLight dark:border-borderDark hover:border-brandAccent'
              }`}
            >
              <span className="mr-2 text-2xl">🏢</span>
              Internal Risk Mitigation
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 border shadow-xl bg-surfaceLight dark:bg-surfaceDark rounded-2xl md:p-12 border-borderLight dark:border-borderDark">
            {/* External Risk */}
            {activeTab === 'external' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
                    External Risk Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monitoring uncontrollable factors like competitive landscapes, geopolitical shifts, and regulatory carbon stringency.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {riskCategories.external.map((risk, index) => (
                    <div
                      key={index}
                      className="relative p-6 transition-all duration-300 bg-white border group dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-lg"
                    >
                      <div className="mb-4 text-5xl">{risk.icon}</div>
                      <h4 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                        {risk.title}
                      </h4>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {risk.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                          Impact Level
                        </span>
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                          {risk.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Risk */}
            {activeTab === 'internal' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
                    Internal Risk Mitigation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Auditing management for quality, technological preparedness, and operational track records.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {riskCategories.internal.map((risk, index) => (
                    <div
                      key={index}
                      className="relative p-6 transition-all duration-300 bg-white border group dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandGold hover:shadow-lg"
                    >
                      <div className="mb-4 text-5xl">{risk.icon}</div>
                      <h4 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                        {risk.title}
                      </h4>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {risk.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                          Impact Level
                        </span>
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-brandAccent/10 text-brandAccent">
                          {risk.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Independent Analysis Feature */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative p-8 overflow-hidden bg-gradient-to-r from-brandDark via-brandNavy to-brandPrimary rounded-2xl md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brandAccent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brandGold blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-24 h-24 border bg-brandAccent/20 rounded-2xl backdrop-blur-sm border-brandAccent/30">
                  <svg className="w-12 h-12 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl font-heading">
                  Independent Analysis
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  Delivering objective severity and frequency quantification to enhance overall client creditworthiness and portfolio protection.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <button className="px-8 py-4 font-bold transition-all duration-300 transform rounded-lg shadow-xl bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 whitespace-nowrap">
                  Request Analysis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
          {[
            { value: '250+', label: 'Risk Factors Monitored' },
            { value: '99.2%', label: 'Prediction Accuracy' },
            { value: '24/7', label: 'Real-time Monitoring' },
            { value: '500+', label: 'Portfolios Protected' }
          ].map((stat, index) => (
            <div key={index} className="p-6 text-center border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark">
              <p className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskCategorization;