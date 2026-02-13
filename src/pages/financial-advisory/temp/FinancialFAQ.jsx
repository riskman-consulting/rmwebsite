import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <section className="py-24 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-4xl px-6 mx-auto lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
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
              className="overflow-hidden border border-borderLight dark:border-borderDark rounded-xl bg-surfaceLight dark:bg-surfaceDark"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-brandPrimary/5 dark:hover:bg-brandGold/5 focus:outline-none"
              >
                <span className="font-bold font-heading text-brandDark dark:text-white md:text-lg">
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
                <div className="p-6 pt-0 mt-4 font-sans leading-relaxed text-gray-600 border-t dark:text-gray-400 border-borderLight dark:border-borderDark">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 mt-16 text-center text-white shadow-lg bg-brandPrimary dark:bg-brandNavy rounded-2xl">
          <h3 className="mb-2 text-xl font-bold font-heading">Still have questions?</h3>
          <p className="mb-6 font-sans text-white/80">
            Our team of experts is ready to help you navigate your financial journey.
          </p>
          <Link to="/contact" className="px-8 py-3 font-bold transition-all duration-300 transform rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105">
            Contact RiskMan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinancialFAQ;