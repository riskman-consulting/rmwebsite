
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-0">
      <button 
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-brandGold' : 'text-brandNavy dark:text-white group-hover:text-brandGold'}`}>
          {question}
        </span>
        <div className={`ml-4 p-1 rounded-full transition-colors ${isOpen ? 'bg-brandGold text-brandNavy' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the primary difference between ITGC and ITAC?",
      answer: "ITGC covers the overall IT environment (network, physical security), while ITAC focuses on specific functional controls within an application."
    },
    {
      question: "How often should we conduct an ITAC audit?",
      answer: "Audits should be performed annually or after significant application changes to ensure continued security and operational compliance."
    },
    {
      question: "Are physical security controls included in ITGC?",
      answer: "Yes, we review on-premises data center protection and physical access controls."
    },
    {
      question: "How are dormant users managed during an audit?",
      answer: "We review active employee master's against user lists to identify and revoke unnecessary access."
    },
    {
      question: "What are 'Output Controls'?",
      answer: "These ensure sensitive data masking (e.g., credit cards) and the review of EOD/BOD error reports."
    }
  ];

  return (
    <section className=" py-14 md:py-20 bg-white dark:bg-brandDark">
      <div className="container max-w-4xl px-6 lg:px-20 mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
            Frequently Asked Questions
            <span className="absolute left-0 w-1/2 h-1 rounded-full -bottom-2 bg-brandGold"></span>
          </h2>
        </div>
        
        <div className="p-8 border shadow-lg bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-slate-100 dark:border-slate-700">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;