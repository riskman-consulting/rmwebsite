import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const PolicyFAQ = () => {
  const faqs = [
    {
      question: "Why is a Credit Policy Framework necessary?",
      answer: "It has become a compulsion for financial institutions to manage risk systems effectively and ensure long-term stability."
    },
    {
      question: "What is the goal of a structured approach?",
      answer: "To identify, measure, monitor, and control credit risk effectively across the entire organization."
    },
    {
      question: "How often is the policy updated?",
      answer: "Periodically, to respond to changes in the risk environment, new products, or regulatory updates."
    },
    {
      question: "What does the credit value chain include?",
      answer: "It includes the entire lifecycle: Origination, processing, enhancement, decision, delivery, and management."
    },
    {
      question: "How is risk tolerance managed?",
      answer: "By formally demarcating exposure limits in relation to available capital and strategic risk appetite."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="transition-colors duration-300 py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">FAQ</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-bgDark hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-brandDark dark:text-white">{faq.question}</span>
                <span className={`p-2 rounded-full ${openIndex === index ? 'bg-brandPrimary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 mt-2 leading-relaxed text-gray-600 border-t border-gray-100 dark:text-gray-300 dark:border-gray-800">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFAQ;
