// FAQ.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is the primary objective of a cybersecurity audit?",
    answer: "A cybersecurity audit provides a systematic assessment of security controls and policies to evaluate their effectiveness against threats."
  },
  {
    question: "How does RiskMan prioritize discovered vulnerabilities?",
    answer: "We use CVSS for severity scoring and EPSS to estimate the likelihood of real-world exploitation."
  },
  {
    question: "What is included in the scope of a RiskMan audit?",
    answer: "The scope is comprehensive, covering specified systems, departments, assets, and processes tailored to your organization's needs."
  },
  {
    question: "How do you ensure the independence of your auditors?",
    answer: "Auditors must remain free from bias, and commercial arrangements are structured to avoid any conflict of interest."
  },
  {
    question: "What frameworks do you use for security testing?",
    answer: "We utilize industry-standard frameworks including ISO/IEC, OWASP, and Cyber Security Audit Baseline Requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10">
            <span className="text-sm font-bold tracking-wide text-brandPrimary dark:text-brandAccent">COMMON QUESTIONS</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to the most common questions about our cybersecurity services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent/30 dark:hover:border-brandAccent/40 hover:shadow-lg"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-start w-full gap-6 p-6 text-left transition-colors duration-300 hover:bg-brandPrimary/5 dark:hover:bg-brandAccent/5"
              >
                {/* Number Badge */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-brandAccent text-brandDark' 
                    : 'bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Question Text */}
                <div className="flex-1">
                  <h3 className="pr-4 text-lg font-semibold text-brandDark dark:text-white">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <svg 
                  className={`flex-shrink-0 w-6 h-6 text-brandPrimary dark:text-brandAccent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6 pl-24">
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Card */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative p-8 overflow-hidden shadow-xl bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandNavy dark:to-brandDark rounded-2xl">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)`,
              }}></div>
            </div>

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white font-heading">
                  Still have questions?
                </h3>
                <p className="text-gray-200">
                  Our cybersecurity experts are here to help you
                </p>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 rounded-lg shadow-xl bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-2xl whitespace-nowrap"
              >
                Schedule a Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;