import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you tailor the audit approach for PTI?",
      answer: "We conduct stakeholder interviews to understand PTI's unique \"as-is\" processes, identifying specific concerns like newsroom cybersecurity and freelancer payments."
    },
    {
      question: "How does RBIA differ from conventional auditing?",
      answer: "Unlike narrow, reactive conventional methods, RBIA uses a consultative approach to address technological shifts, increasing complexity, and strategic objectives."
    },
    {
      question: "What specific areas does the audit plan cover?",
      answer: "The plan targets critical operations, including revenue streams, payroll, employee costs, legal contracts, and statutory compliance like GST."
    },
    {
      question: "How is the audit team structured?",
      answer: "Engagements are led by experienced Partners and Leads, supported by dedicated consultants for field-testing and data analytics."
    },
    {
      question: "How are audit findings resolved?",
      answer: "We collaborate with process owners to finalize remediation plans, ensuring management acceptance and tracking implementation in subsequent quarters."
    }
  ];

  return (
    <section className="py-16 bg-white lg:py-24 dark:bg-surfaceDark">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center font-heading md:text-4xl text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="overflow-hidden border bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 hover:bg-white/50 dark:hover:bg-surfaceDark/50"
                >
                  <span className="pr-8 text-lg font-semibold text-brandDark dark:text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronDown className="flex-shrink-0 w-5 h-5 text-brandPrimary" />
                  ) : (
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-brandPrimary" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;