// // FAQ.jsx
// import React, { useState } from 'react';

// const faqs = [
//   {
//     question: "What is the primary purpose of a TPRM policy?",
//     answer: "It establishes a risk-based framework for identifying, evaluating, and managing vendors who impact your data or operations."
//   },
//   {
//     question: "Who is covered under the scope of TPRM?",
//     answer: "The policy applies to all departments managing IT vendors, SaaS providers, consultants, and contractors."
//   },
//   {
//     question: "What are the key objectives of a TPRM program?",
//     answer: "Objectives include identifying potential risks, applying due diligence, and ensuring compliance with applicable laws."
//   },
//   {
//     question: "How are third-party vendors classified?",
//     answer: "Vendors are classified as Low, Medium, or High Risk based on data sensitivity and service criticality."
//   },
//   {
//     question: "How often should a TPRM policy be reviewed?",
//     answer: "The policy should be reviewed at least every 12 months or when major regulatory changes occur."
//   }
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Common questions about our TPRM services and framework
//           </p>
//         </div>

//         {/* FAQ Grid */}
//         <div className="max-w-6xl mx-auto">
//           <div className="grid gap-6 lg:grid-cols-2">
//             {faqs.map((faq, index) => (
//               <div 
//                 key={index}
//                 className="overflow-hidden transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent/30 dark:hover:border-brandAccent/40"
//               >
//                 {/* Question */}
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   className="flex items-start justify-between w-full gap-4 p-6 text-left transition-colors duration-300 hover:bg-brandPrimary/5 dark:hover:bg-brandAccent/5"
//                 >
//                   <span className="pr-4 font-semibold text-brandDark dark:text-white">
//                     {faq.question}
//                   </span>
//                   <svg 
//                     className={`w-5 h-5 text-brandPrimary dark:text-brandAccent flex-shrink-0 transition-transform duration-300 mt-1 ${openIndex === index ? 'rotate-180' : ''}`}
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {/* Answer */}
//                 <div 
//                   className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
//                 >
//                   <div className="px-6 pb-6">
//                     <p className="leading-relaxed text-gray-600 dark:text-gray-300">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Card */}
//         <div className="max-w-2xl mx-auto mt-12">
//           <div className="p-8 text-center shadow-xl bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandNavy dark:to-brandDark rounded-xl">
//             <h3 className="mb-4 text-2xl font-bold text-white font-heading">
//               Need More Information?
//             </h3>
//             <p className="mb-6 text-gray-200">
//               Our TPRM experts are ready to answer your specific questions
//             </p>
//             <a 
//               href="/contact" 
//               className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all duration-300 rounded-lg shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl"
//             >
//               Contact Us Now
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


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

  const [openIndex, setOpenIndex] = useState(0);

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
