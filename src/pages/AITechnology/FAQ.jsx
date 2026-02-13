import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does RiskMan ensure AI reliability?",
      answer:
        "We apply rigorous testing, bias detection, and continuous monitoring to maintain AI model accuracy and trustworthiness.",
    },
    {
      question: "What is the NIST AI RMF, and why use it?",
      answer:
        "NIST's AI Risk Management Framework provides a structured approach to managing AI risks, essential for compliance and strategic governance.",
    },
    {
      question: "Can RiskMan integrate AI with existing systems?",
      answer:
        "Yes, our API-first platforms ensure seamless integration with ERP, CRM, and legacy systems for minimal disruption.",
    },
    {
      question: "How does RiskMan address AI bias and ethics?",
      answer:
        "Through NIST-aligned govern and measure functions, we embed fairness audits and ethical guidelines from deployment onward.",
    },
    {
      question: "Is RiskMan's technology scalable for global operations?",
      answer:
        "Absolutely; our cloud-native solutions scale effortlessly across regions, supporting multinational compliance needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surfaceLight py-14 md:py-20 dark:bg-surfaceDark">
      <div className="container px-6 lg:px-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white border rounded-xl dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-xl"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full px-8 py-6 text-left transition-colors duration-300 hover:bg-bgLight dark:hover:bg-bgDark/50"
              >
                <span className="pr-4 text-xl font-semibold font-heading text-brandDark dark:text-white">
                  {faq.question}
                </span>

                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full
                              bg-gradient-to-br from-brandAccent to-brandPrimary
                              flex items-center justify-center
                              transition-transform duration-300
                              ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300
                            ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pt-2 pb-6">
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
