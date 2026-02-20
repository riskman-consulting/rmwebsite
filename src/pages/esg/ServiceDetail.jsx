import React from 'react';

const ServiceDetails = () => {
  const serviceDetails = [
    {
      icon: "📊",
      title: "ESG Strategy & Materiality Assessment",
      description: "Establish the strategic foundation for your ESG program through rigorous materiality analysis and stakeholder-informed prioritization.",
      offerings: [
        "Double materiality assessment (impact and financial perspectives)",
        "Stakeholder mapping and engagement design",
        "Peer benchmarking and best practice analysis",
        "SDG alignment and impact prioritization"
      ]
    },
    {
      icon: "🌡️",
      title: "Climate Risk & GHG Management",
      description: "Comprehensive climate program development from emissions measurement through decarbonization implementation.",
      offerings: [
        "GHG inventorization (Scope 1, 2, and 3) per GHG Protocol",
        "Climate risk assessment and scenario modeling (TCFD-aligned)",
        "Science-Based Targets initiative (SBTi) support",
        "Net-zero strategy and decarbonization roadmaps"
      ]
    },
    {
      icon: "📋",
      title: "ESG Reporting & Disclosure",
      description: "Navigate the complex reporting landscape with confidence through multi-framework disclosure support.",
      offerings: [
        "CSRD/ESRS compliance and reporting",
        "ISSB (IFRS S1/S2) implementation",
        "BRSR and regulatory compliance (India, US SEC)"
      ]
    },
    {
      icon: "⚖️",
      title: "ESG Governance & Operating Model",
      description: "Design and implement robust governance structures that embed ESG accountability throughout the organization.",
      offerings: [
        "Board ESG oversight framework design",
        "ESG committee structure and charter development",
        "Policy framework development"
      ]
    },
    {
      icon: "🔒",
      title: "Internal Controls & Assurance Readiness",
      description: "Prepare for the era of mandatory ESG assurance with controls designed for sustainability reporting.",
      offerings: [
        "COSO-aligned internal control framework for sustainability",
        "ESG data governance and quality management",
        "Assurance readiness assessment and remediation",
        "Limited and reasonable assurance preparation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-surfaceDark">
      <div className="container px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Service Details */}
          {/* <div className="mb-20 space-y-12">
            {serviceDetails.map((service, index) => (
              <div key={index} className="p-8 border shadow-lg bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl shadow-md bg-gradient-to-br from-brandPrimary to-brandNavy rounded-xl">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 text-brandPrimary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Multi-Country Execution */}
          <div className="p-8 shadow-2xl text-brandDark dark:text-white bg-surfaceLight dark:bg-surfaceDark rounded-2xl md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl bg-white/20 rounded-xl backdrop-blur-sm">
                🌍
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
                  Multi-Country, Multi-Regulation Execution
                </h3>
                <p className="leading-relaxed text-brandNavy dark:text-white/70">
                  For multinational organizations, ESG implementation presents unique challenges. Regulatory requirements 
                  vary significantly across jurisdictions—from the EU's comprehensive CSRD to India's BRSR, from Singapore's 
                  sustainability reporting requirements to emerging frameworks across the Middle East.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm rounded-xl border-brandDark/10 dark:border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold">Centralized Governance, Localized Execution</h4>
                </div>
                <p className="text-sm text-brandPrimary dark:text-white/70">
                  Global policies with region-specific adaptations
                </p>
              </div>

              <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm rounded-xl border-brandDark/10 dark:border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📡</span>
                  <h4 className="text-lg font-bold">Regulatory Intelligence</h4>
                </div>
                <p className="text-sm text-brandPrimary dark:text-white/70">
                  Continuous monitoring of evolving ESG regulations across jurisdictions
                </p>
              </div>

              <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm rounded-xl border-brandDark/10 dark:border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📄</span>
                  <h4 className="text-lg font-bold">Harmonized Reporting</h4>
                </div>
                <p className="text-sm text-brandPrimary dark:text-white/70">
                  Collect once, report many approaches for multiple disclosure requirements
                </p>
              </div>

              <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm rounded-xl border-brandDark/10 dark:border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔗</span>
                  <h4 className="text-lg font-bold">Cross-Border Coordination</h4>
                </div>
                <p className="text-sm text-brandPrimary dark:text-white/70">
                  Managing value chain emissions across international operations
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory & Disclosure Excellence */}
          <div className="grid gap-6 mt-16 md:grid-cols-3">
            <div className="p-6 border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20 rounded-xl dark:border-blue-800">
              <div className="mb-4 text-3xl">📋</div>
              <h4 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
                Regulatory & Disclosure Excellence
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Multi-framework compliance readiness</li>
                <li>• Assurance-ready data and processes</li>
                <li>• Internal controls aligned with standards</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-purple-200 bg-purple-50 dark:bg-purple-900/20 rounded-xl dark:border-purple-800">
              <div className="mb-4 text-3xl">🤝</div>
              <h4 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
                Enhanced Stakeholder Confidence
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Improved ESG ratings</li>
                <li>• Enhanced investor confidence</li>
                <li>• Improved employer brand</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl dark:border-green-800">
              <div className="mb-4 text-3xl">🌡️</div>
              <h4 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
                Climate Risk Mitigation
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Comprehensive risk assessment</li>
                <li>• Scenario analysis</li>
                <li>• Science-aligned targets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;