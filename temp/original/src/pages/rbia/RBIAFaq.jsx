
import React, { useState } from 'react';

const RBIAFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "How do you tailor the audit approach for PTI?",
      a: "We conduct stakeholder interviews to understand PTI’s unique 'as-is' processes, identifying specific concerns like newsroom cybersecurity and freelancer payments."
    },
    {
      q: "How does RBIA differ from conventional auditing?",
      a: "Unlike narrow, reactive conventional methods, RBIA uses a consultative approach to address technological shifts, increasing complexity, and strategic objectives."
    },
    {
      q: "What specific areas does the audit plan cover?",
      a: "The plan targets critical operations, including revenue streams, payroll, employee costs, legal contracts, and statutory compliance like GST."
    },
    {
      q: "How is the audit team structured?",
      a: "Engagements are led by experienced Partners and Leads, supported by dedicated consultants for field-testing and data analytics."
    },
    {
      q: "How are audit findings resolved?",
      a: "We collaborate with process owners to finalize remediation plans, ensuring management acceptance and tracking implementation in subsequent quarters."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-bgLight dark:bg-bgDark py-20 lg:py-32 transition-colors duration-300">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/30 text-brandPrimary dark:text-brandAccent text-xs font-bold uppercase tracking-widest mb-6">
            Expert Insights
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-brandDark dark:text-white leading-tight">
            Frequently Asked <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our Risk-Based Internal Audit approach and how it benefits your organization.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                activeIndex === i 
                  ? 'border-brandAccent bg-white dark:bg-surfaceDark shadow-xl shadow-brandPrimary/5' 
                  : 'border-borderLight dark:border-borderDark bg-surfaceLight/50 dark:bg-surfaceDark/50 hover:border-brandPrimary/30 dark:hover:border-brandAccent/30'
              }`}
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-heading text-lg md:text-xl font-bold transition-colors ${
                  activeIndex === i ? 'text-brandPrimary dark:text-brandAccent' : 'text-brandDark dark:text-white'
                }`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === i ? 'bg-brandPrimary text-white rotate-180' : 'bg-brandLight dark:bg-brandNavy text-brandPrimary dark:text-brandAccent'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-borderLight dark:border-borderDark/50">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-3xl bg-brandNavy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/5 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-300">We're here to help you navigate your risk landscape.</p>
          </div>
          <div className="relative z-10 flex gap-4">
            <button className="px-8 py-4 rounded-xl bg-brandAccent text-brandDark font-black hover:scale-105 transition-all shadow-lg shadow-brandAccent/20">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIAFaq;
