import React, { useState } from 'react';

const FinancialFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Financial Advisory?",
      answer: "Financial advisory services refer to providing guidance and recommendations to individuals, partnership firms, LLPs, corporates and other enterprises in respect of financial planning, project planning, sourcing of funds, cost optimisation & cash flow management, investment & wealth management, risk management, tax planning and regulatory & legal compliances."
    },
    {
      question: "How does Financial Advisory help business enterprises?",
      answer: "It provides expert guidance in respect of financial planning, enhancing market reach and business scale-up, cost structure optimisation & liquidity management, risk assessment & mitigation, forecasting & budgeting, wealth management, project planning & implementation, financial reporting and succession planning."
    },
    {
      question: "Who needs Financial Advisory services?",
      answer: "Generally, anyone needing support in setting up a start-up business, conceptualising and improvising business planning, debt & cash flow management, investment management, risk management, cost optimisation, implementing M & A and divestment deals, and adopting new technologies."
    },
    {
      question: "How long does a typical assignment take?",
      answer: "As each assignment is unique, the time needed varies. However, if there is a seamless flow of information from the client, each assignment broadly requires one and a half to two months."
    },
    {
      question: "Why choose RiskMan for Financial Advisory?",
      answer: "RiskMan is an established firm with Partners who have CxO level experiences and long credentials in this domain. We offer delivery excellence in a shorter turn-around-time, making us the ideal choice for business entities."
    }
  ];

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brandDark dark:text-white mb-4">
            Financial Advisory <span className="text-brandPrimary dark:text-brandGold">FAQ</span>
          </h2>
          <p className="font-sans text-gray-600 dark:text-gray-400">
            Answers to common questions about our consultancy services and methodology.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-borderLight dark:border-borderDark rounded-xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-brandPrimary/5 dark:hover:bg-brandGold/5 focus:outline-none"
              >
                <span className="font-heading font-bold text-brandDark dark:text-white md:text-lg">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-brandPrimary dark:text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-sans text-gray-600 dark:text-gray-400 leading-relaxed border-t border-borderLight dark:border-borderDark mt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brandPrimary dark:bg-brandNavy rounded-2xl text-center text-white shadow-lg">
          <h3 className="font-heading text-xl font-bold mb-2">Still have questions?</h3>
          <p className="font-sans text-white/80 mb-6">
            Our team of experts is ready to help you navigate your financial journey.
          </p>
          <button className="px-8 py-3 bg-brandAccent hover:bg-brandGold text-brandDark font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact RiskMan
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialFAQ;