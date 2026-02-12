import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-white/10 last:border-0">
      <button 
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-8 text-lg font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandGold">
          {question}
        </span>
        <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brandPrimary dark:group-hover:text-brandGold" />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How does RiskMan help Organizations with network security?",
      answer: "We manage the configuration of firewalls and network security controls to prevent unauthorized traffic from entering your cardholder environment."
    },
    {
      question: "Is it mandatory for Organizations to change default passwords?",
      answer: "Yes, Requirement 2 mandates changing all vendor-supplied defaults to prevent common exploits used by malicious actors."
    },
    {
      question: "How does a Vulnerability Management Program work?",
      answer: "It involves constant monitoring system weaknesses, regular anti-virus updates, and timely patching of software to prevent cyberattacks."
    },
    {
      question: "What is the \"Principle of Least Privilege\" in PCI DSS?",
      answer: "It ensures that employees are only granted the minimum level of access necessary to perform their specific job functions."
    },
    {
      question: "Does RiskMan assist with physical security compliance?",
      answer: "Yes, we provide frameworks to restrict physical access to data centers and ensure video monitoring and access logs are maintained."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-bgDark">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Common questions about PCI DSS compliance and our services.
            </p>
          </div>
          
          <div className="p-8 border border-gray-100 bg-gray-50 dark:bg-white/5 rounded-2xl dark:border-white/5">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
