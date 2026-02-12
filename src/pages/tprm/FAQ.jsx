


import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the primary purpose of a TPRM policy?",
      answer: "It establishes a risk-based framework for identifying, evaluating, and managing vendors who impact your data or operations."
    },
    {
      question: "Who is covered under the scope of TPRM?",
      answer: "The policy applies to all departments managing IT vendors, SaaS providers, consultants, and contractors."
    },
    {
      question: "What are the key objectives of a TPRM program?",
      answer: "Objectives include identifying potential risks, applying due diligence, and ensuring compliance with applicable laws."
    },
    {
      question: "How are third-party vendors classified?",
      answer: "Vendors are classified as Low, Medium, or High Risk based on data sensitivity and service criticality."
    },
    {
      question: "How often should a TPRM policy be reviewed?",
      answer: "The policy should be reviewed at least every 12 months or when major regulatory changes occur."
    }
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-bgLight">
      <div className="container max-w-4xl px-4 mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 text-white rounded-full bg-brandNavy">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold md:text-4xl font-heading text-brandDark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-brandAccent shadow-md' : 'border-gray-200'}`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brandPrimary' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brandAccent" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="pt-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
