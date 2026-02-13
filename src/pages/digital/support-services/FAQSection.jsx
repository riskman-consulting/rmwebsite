import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    
    
    return(
  <div className="mb-4 overflow-hidden transition-colors duration-300 bg-white border border-gray-200 dark:border-gray-700 rounded-xl dark:bg-surfaceDark hover:border-brandPrimary/50 dark:hover:border-brandAccent/50">
    <button
      className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="text-lg font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
        {question}
      </span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-brandPrimary dark:text-brandAccent" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brandPrimary dark:group-hover:text-brandAccent" />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pt-4 pb-6 leading-relaxed text-gray-600 border-t border-gray-100 dark:text-gray-300 dark:border-gray-700">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)
}

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "How do you ensure high user adoption?", a: "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs. We focus on the 'people' side of change." },
    { q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs and functions correctly in a production-like environment." },
    { q: "How are system bugs managed?", a: "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority (Critical, High, Medium, Low) before deployment." },
    { q: "What is regression testing?", a: "It confirms that new integrations or updates haven't negatively affected existing system functions, ensuring stability across the platform." },
    { q: "Why use stakeholder readiness assessments?", a: "To confirm that leadership and teams are operationally ready for the change, minimizing resistance and ensuring a smooth transition." }
  ];

  return (
    <section className="py-24 bg-brandLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Common questions about our support services and methodologies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, index) => (
            <AccordionItem 
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection