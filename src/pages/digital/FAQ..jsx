// import React, { useState } from "react"

// const faqs = [
//   {
//     q: "How do you handle RAID?",
//     a:
//       "Through centralized logs for Risks, Assumptions, Issues, and Dependencies with defined escalation."
//   },
//   {
//     q: "How is data migration managed?",
//     a:
//       "We provide field-level transformation logic, cleansing, and final data reconciliation."
//   },
//   {
//     q: "What is the UAT approach?",
//     a:
//       "Scenario-based user acceptance testing with real-time defect triaging and regression fixes."
//   },
//   {
//     q: "How are transformation risks mitigated?",
//     a:
//       "By utilizing proactive milestone reviews, health tracking, and impact scoring models."
//   },
//   {
//     q: "What is the BRD process?",
//     a:
//       "We finalize functional requirements through stakeholder validation and strict traceability matrices."
//   }
// ]

// const FAQItem = ({ q, a }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="border-b border-borderLight dark:border-borderDark last:border-none">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
//       >
//         <h3 className="pr-4 text-lg font-bold transition-colors text-brandDark dark:text-brandLight group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//           {q}
//         </h3>
//         <span
//           className={`transform transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           } text-brandPrimary dark:text-brandAccent`}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </span>
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <p className="leading-relaxed text-brandNavy/70 dark:text-brandLight/60">
//           {a}
//         </p>
//       </div>
//     </div>
//   )
// }

// const FAQ = () => {
//   return (
//     <section className="py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
//           <div>
//             <span className="inline-block mb-4 text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
//               Support & Clarity
//             </span>
//             <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-brandLight">
//               Frequently Asked Questions
//             </h2>
//             <p className="mb-8 text-brandNavy/70 dark:text-brandLight/70">
//               Everything you need to know about our digital transformation
//               methodologies and execution framework.
//             </p>
//             <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark">
//               <p className="mb-4 text-sm font-medium">Still have questions?</p>
//               <button className="w-full px-4 py-3 font-bold text-white rounded-lg bg-brandDark dark:bg-brandAccent dark:text-brandDark">
//                 Contact Our Team
//               </button>
//             </div>
//           </div>

//           <div className="px-8 border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
//             {faqs.map((faq, idx) => (
//               <FAQItem key={idx} q={faq.q} a={faq.a} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FAQ


import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 border shadow-lg bg-surfaceLight rounded-xl border-borderLight hover:shadow-xl">
      <button
        className="flex items-center justify-between w-full gap-4 px-6 py-6 text-left lg:px-8 group"
        onClick={toggleFAQ}
      >
        <span className="text-lg font-semibold transition-colors font-heading lg:text-xl text-brandDark group-hover:text-brandPrimary">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-brandPrimary transform transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 lg:px-8">
          <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you handle RAID?',
      answer: 'Through centralized logs for Risks, Assumptions, Issues, and Dependencies with defined escalation.',
    },
    {
      question: 'How is data migration managed?',
      answer: 'We provide field-level transformation logic, cleansing, and final data reconciliation.',
    },
    {
      question: 'What is the UAT approach?',
      answer: 'Scenario-based user acceptance testing with real-time defect triaging and regression fixes.',
    },
    {
      question: 'How are transformation risks mitigated?',
      answer: 'By utilizing proactive milestone reviews, health tracking, and impact scoring models.',
    },
    {
      question: 'What is the BRD process?',
      answer: 'We finalize functional requirements through stakeholder validation and strict traceability matrices.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-bgLight">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 max-w-[1280px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-brandPrimary/10">
            <span className="text-sm font-semibold text-brandPrimary">FAQ</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;