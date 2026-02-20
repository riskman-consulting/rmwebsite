import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does RiskMan ensure the confidentiality of a sensitive internal investigation?",
      answer: "We utilize encrypted communication channels and restricted \"need-to-know\" access protocols to protect sensitive data and organizational reputation throughout the process."
    },
    {
      question: "What types of Organizations typically require forensic services?",
      answer: "Any entity facing complex financial structures, regulatory scrutiny, or digital threats benefit from our specialized investigative and forensic expertise."
    },
    {
      question: "Can RiskMan assist in recovering lost financial assets?",
      answer: "Yes, our forensic accountants specialize in tracing complex fund flows across jurisdictions to identify and help recover diverted capital."
    },
    {
      question: "Is the evidence gathered by RiskMan admissible in legal proceedings?",
      answer: "Absolutely. We maintain a strict chain of custody and follow international forensic standards to ensure all findings are court-admissible."
    },
    {
      question: "How quickly can RiskMan respond to a suspected data breach?",
      answer: "Our rapid response team is equipped to initiate digital preservation and forensic triage within hours of an incident report."
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-4xl px-6 mx-auto lg:px-12">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl font-heading text-brandNavy dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="overflow-hidden transition-all bg-white border shadow-sm dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-md"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
              >
                <span className="pr-8 text-lg font-bold text-brandNavy dark:text-white">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="flex-shrink-0 text-brandGold" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-400" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-48 py-5 opacity-100 border-t border-borderLight dark:border-borderDark' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
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

export default FaqSection;
