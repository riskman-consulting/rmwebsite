import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is ISO 31000?",
      answer: "An international standard providing guidelines and principles on managing risk effectively across an enterprise."
    },
    {
      question: "Is this a certifiable standard?",
      answer: "ISO 31000 is a guideline and not for accredited certification, but for internal implementation and maturity."
    },
    {
      question: "How does it help leadership?",
      answer: "It provides a systematic and logical approach to making decisions under conditions of uncertainty."
    },
    {
      question: "What is a \"Risk Appetite\"?",
      answer: "The amount and type of risk an organization is willing to pursue or retain in pursuit of its goals."
    },
    {
      question: "How is it different from ISO 27001?",
      answer: "ISO 31000 is for general enterprise risk; ISO 27001 is specific to information security risk."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-14 md:py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandGold">Common Questions</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark">
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-brandDark dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brandGold" />
                ) : (
                  <Plus className="w-5 h-5 text-brandGold" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
