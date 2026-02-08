import React, { useState } from 'react';

const CreditRiskCTAandFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'Who is considered a Credit Beneficiary?',
      answer: 'It includes both borrowers (loans) and customers (credit sales). A credit beneficiary is any entity that receives credit facilities from your institution.'
    },
    {
      question: 'What are the primary risk categories?',
      answer: 'Risks are broadly classified into External and Internal categories. External risks include market conditions and regulatory changes, while Internal risks cover management quality and operational factors.'
    },
    {
      question: 'How does RiskMan define External Risk?',
      answer: 'Risks outside an enterprise\'s control, such as fiscal incidence, seasonality, geopolitical shifts, competitive landscapes, and regulatory stringency.'
    },
    {
      question: 'What constitutes Internal Risk?',
      answer: 'Factors like financial condition, manpower quality, management background, technological preparedness, and operational track records that are within the enterprise\'s sphere of influence.'
    },
    {
      question: 'How is risk severity measured?',
      answer: 'Through both subjective and objective identification and quantification methods. We use advanced analytics to assess severity levels and frequency patterns for comprehensive risk evaluation.'
    }
  ];

  return (
    <>
   
      {/* <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-brandDark via-brandPrimary to-brandNavy">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-brandAccent blur-3xl animate-pulse-custom"></div>
          <div className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-brandGold blur-3xl animate-float"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border rounded-full bg-brandAccent/20 backdrop-blur-sm border-brandAccent/30">
              <svg className="w-10 h-10 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl font-heading">
              Ready To Secure Your Portfolio?
            </h2>
            
            <p className="mb-10 text-xl leading-relaxed text-gray-300 md:text-2xl">
              Expert credit assessment protects your bottom line from unforeseen financial defaults.
            </p>

           
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="px-10 py-5 text-lg font-bold transition-all duration-300 transform rounded-lg shadow-2xl group bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105">
                Consult Our Experts
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
              </button>
              <button className="px-10 py-5 text-lg font-bold transition-all duration-300 bg-transparent border-2 rounded-lg border-brandAccent text-brandAccent hover:bg-brandAccent/10">
                Download Brochure
              </button>
            </div>

        
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get answers to common questions about our credit risk assessment services
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left group"
                  >
                    <span className="pr-4 text-lg font-semibold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-brandAccent/10 flex items-center justify-center transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-brandAccent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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

            {/* Contact Support */}
            <div className="p-8 mt-12 text-center border bg-gradient-to-br from-brandPrimary/5 to-brandAccent/5 rounded-xl border-borderLight dark:border-borderDark">
              <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
                Still have questions?
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Our team is here to help you understand our services better
              </p>
              <button className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-brandPrimary hover:bg-brandNavy dark:bg-brandAccent dark:hover:bg-brandGold dark:text-brandDark">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditRiskCTAandFAQ;