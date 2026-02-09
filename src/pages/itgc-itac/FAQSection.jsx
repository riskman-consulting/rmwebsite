// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is the primary difference between ITGC and ITAC?",
//       answer: "ITGC covers the overall IT environment (network, physical security), while ITAC focuses on specific functional controls within an application."
//     },
//     {
//       question: "How often should we conduct an ITAC audit?",
//       answer: "Audits should be performed annually or after significant application changes to ensure continued security and operational compliance."
//     },
//     {
//       question: "Are physical security controls included in ITGC?",
//       answer: "Yes, we review on-premises data center protection and physical access controls."
//     },
//     {
//       question: "How are dormant users managed during an audit?",
//       answer: "We review active employee master's against user lists to identify and revoke unnecessary access."
//     },
//     {
//       question: "What are \"Output Controls\"?",
//       answer: "These ensure sensitive data masking (e.g., credit cards) and the review of EOD/BOD error reports."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-12 text-center md:mb-16">
//             <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
//               Frequently Asked Questions
//             </h2>
//           </div>

//           {/* FAQ Accordion */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div 
//                 key={index}
//                 className="overflow-hidden transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:shadow-lg"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="flex items-center justify-between w-full p-6 text-left transition-colors duration-300 md:p-8 hover:bg-brandLight/50 dark:hover:bg-brandDark/30"
//                 >
//                   <h3 className="pr-4 text-lg font-semibold font-heading md:text-xl text-brandDark dark:text-white">
//                     {faq.question}
//                   </h3>
//                   <ChevronDown 
//                     className={`w-6 h-6 text-brandAccent flex-shrink-0 transition-transform duration-300 ${
//                       openIndex === index ? 'rotate-180' : ''
//                     }`}
//                   />
//                 </button>
                
//                 <div 
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openIndex === index ? 'max-h-96' : 'max-h-0'
//                   }`}
//                 >
//                   <div className="p-6 pt-0 md:p-8 md:pt-0">
//                     <p className="text-base leading-relaxed text-brandNavy/70 dark:text-white/60 md:text-lg">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


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
    <section className="py-20 bg-white dark:bg-brandDark">
      <div className="container max-w-4xl px-6 mx-auto">
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