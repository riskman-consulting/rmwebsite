// FAQ.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the primary goal of ISO 27001 certification?",
    answer: "It establishes a robust ISMS to ensure data confidentiality, integrity, and availability while fostering continuous security improvement."
  },
  {
    question: "How do we determine our current ISO 27001 readiness?",
    answer: "By assessing control activities across categories like risk management and incident response to calculate a maturity score."
  },
  {
    question: "What does a \"Robust Maturity\" level indicate?",
    answer: "It means your organization has defined policies and processes ready for a formal ISO certification audit."
  },
  {
    question: "How is the ISMS scope defined?",
    answer: "Management establishes key responsibilities, oversight structures, and specific boundaries for the information security management system."
  },
  {
    question: "What is a Statement of Applicability (SoA)?",
    answer: "A document justifying the inclusion or exclusion of specific security controls based on your unique risk profile."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-240 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get answers to common questions about ISO 27001 certification
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/30 dark:hover:border-brandAccent/40"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full gap-4 p-6 text-left transition-colors duration-300 hover:bg-brandPrimary/5 dark:hover:bg-brandAccent/5"
              >
                <span className="pr-8 text-lg font-semibold text-brandDark dark:text-white">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-brandPrimary dark:text-brandAccent flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pt-2 pb-6">
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="max-w-4xl p-6 mx-auto mt-12 text-center border bg-gradient-to-r from-brandPrimary/5 to-brandAccent/5 dark:from-brandPrimary/10 dark:to-brandAccent/10 border-brandAccent/20 rounded-xl">
          <p className="mb-4 text-gray-700 dark:text-gray-200">
            Still have questions about ISO 27001 certification?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent hover:gap-3"
          >
            Contact our experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;