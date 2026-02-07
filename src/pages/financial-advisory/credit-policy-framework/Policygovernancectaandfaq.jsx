import React, { useState } from 'react';

const PolicyGovernanceCTAandFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const governanceFeatures = [
    {
      title: 'Regulatory Alignment',
      description: 'Synchronizing internal standards with the latest central bank and legal prescriptions.',
      icon: '⚖️',
      details: [
        'Central Bank Compliance',
        'Legal Framework Updates',
        'Industry Standards Adherence'
      ]
    },
    {
      title: 'Operational Flexibility',
      description: 'Specifying responsibilities for handling proposals that fall outside standard risk levels.',
      icon: '🔄',
      details: [
        'Exception Management',
        'Escalation Protocols',
        'Authority Matrices'
      ]
    },
    {
      title: 'Continuous Updating',
      description: 'Periodically refining the framework to include new products and geography-specific legal issues.',
      icon: '🔄',
      details: [
        'Product Innovation Integration',
        'Geographic Expansion',
        'Risk Environment Adaptation'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Why is a Credit Policy Framework necessary?',
      answer: 'It has become a compulsion for financial institutions to manage risk systems effectively. A structured framework ensures regulatory compliance, operational consistency, and strategic alignment across all credit activities.'
    },
    {
      question: 'What is the goal of a structured approach?',
      answer: 'To identify, measure, monitor, and control credit risk effectively while maintaining alignment with enterprise goals and regulatory requirements. This ensures sustainable growth and capital protection.'
    },
    {
      question: 'How often is the policy updated?',
      answer: 'Periodically, to respond to changes in the risk environment or regulations. Updates are triggered by regulatory changes, market evolution, new product launches, or organizational strategy shifts.'
    },
    {
      question: 'What does the credit value chain include?',
      answer: 'Origination, processing, enhancement, decision, delivery, and management. Each stage has standardized processes to ensure quality control and risk mitigation throughout the credit lifecycle.'
    },
    {
      question: 'How is risk tolerance managed?',
      answer: 'By demarcating exposure limits in relation to available capital, establishing clear risk appetite statements, and implementing monitoring mechanisms to ensure exposures remain within approved thresholds.'
    }
  ];

  return (
    <>
      {/* Policy Governance Section */}
      <section className="py-20 bg-white dark:bg-bgDark">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
              Policy Governance & Evolution
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              RiskMan provides handholding support to ensure your policies remain dynamic, responding to socio-economic shifts and regulatory mandates.
            </p>
          </div>

          <div className="grid gap-8 mb-12 md:grid-cols-3">
            {governanceFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-500 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandGold hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 text-6xl text-center transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-center font-heading text-brandDark dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Details List */}
                <div className="pt-6 space-y-2 border-t border-borderLight dark:border-borderDark">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brandGold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Framework Visualization */}
          <div className="p-8 border bg-gradient-to-br from-brandPrimary/5 to-brandGold/5 rounded-2xl md:p-12 border-borderLight dark:border-borderDark">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white">
                  Dynamic Policy Evolution
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                  Our framework adapts to regulatory changes, market conditions, and organizational growth, ensuring your credit policies remain relevant and effective.
                </p>
                <div className="space-y-3">
                  {['Regulatory Monitoring', 'Market Analysis', 'Risk Assessment', 'Policy Updates'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brandGold">
                        <span className="text-sm font-bold text-white">{idx + 1}</span>
                      </div>
                      <span className="font-medium text-brandDark dark:text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Policy Evolution Dashboard"
                  className="shadow-xl rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-brandNavy via-brandPrimary to-brandDark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-brandGold blur-3xl animate-pulse-custom"></div>
          <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-brandAccent blur-3xl animate-float"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border rounded-full bg-brandGold/20 backdrop-blur-sm border-brandGold/30">
              <svg className="w-10 h-10 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl font-heading">
              Optimize Your Credit Governance
            </h2>
            
            <p className="mb-10 text-xl leading-relaxed text-gray-300 md:text-2xl">
              Establish a structured approach to identify, monitor, and control your institutional credit risks.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="px-10 py-5 text-lg font-bold transition-all duration-300 transform rounded-lg shadow-2xl group bg-brandGold hover:bg-brandAccent text-brandDark hover:scale-105">
                Develop Your Framework
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
              </button>
              <button className="px-10 py-5 text-lg font-bold transition-all duration-300 bg-transparent border-2 rounded-lg border-brandGold text-brandGold hover:bg-brandGold/10">
                Schedule Consultation
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              {['Regulatory Compliant', 'Industry Certified', 'Expert Support'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brandGold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bgLight dark:bg-surfaceDark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions about our Credit Policy Framework services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-300 border bg-surfaceLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left group"
                  >
                    <span className="pr-4 text-lg font-semibold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-brandGold/10 flex items-center justify-center transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-borderLight dark:border-borderDark">
                        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 mt-12 text-center border bg-gradient-to-br from-brandGold/5 to-brandPrimary/5 rounded-xl border-borderLight dark:border-borderDark">
              <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
                Need More Information?
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Our experts are ready to discuss your specific credit policy requirements
              </p>
              <button className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-brandPrimary hover:bg-brandNavy dark:bg-brandGold dark:hover:bg-brandAccent dark:text-brandDark">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyGovernanceCTAandFAQ;