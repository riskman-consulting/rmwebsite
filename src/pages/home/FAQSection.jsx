import React, { useState } from "react";
import heroImg from "../../assets/images/home/hero.png";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What specific expertise does RiskMan bring to ESG and Finance?",
      answer:
        "Our leadership includes experts who have served as CFOs and played pivotal roles in major credit rating agencies like CARE Ratings. We offer specialized Credit Rating Advisory and Debt Structuring alongside comprehensive ESG Materiality Assessments and GHG Accounting.",
    },
    {
      question: "How does your IT Risk Management integrate with transformation?",
      answer:
        "We view IT Risk as a facilitator of innovation. Through ITGC audits, VAPT, Process Mining and RPA, we ensure transformation remains secure and efficient.",
    },
    {
      question: "Can RiskMan help navigate global and local mandates?",
      answer:
        "Yes. We align organizations with NIST, SOC 1/2/3, GRI, BRSR and other frameworks while ensuring local compliance.",
    },
    {
      question: "How do you ensure predictable consulting costs?",
      answer:
        "We operate on fixed-price engagement models with a 100% on-time project completion track record.",
    },
  ];

  return (
    <section className="relative py-24 px-10 overflow-hidden bg-[#F8FAFC] dark:bg-bgDark min-h-[720px]">
      
      {/* ✅ Fixed Background Image Layer (no resize fluctuation) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-bgDark/80 backdrop-blur-[1px]" />

      {/* LEFT CONTENT */}
      <div className="relative max-w-[820px] z-10">

        <p className="text-gray-500 dark:text-gray-400 font-bold tracking-[0.18em] text-sm mb-3">
          FREQUENTLY ASKED
        </p>

        <h2 className="text-[64px] leading-[1.05] font-extrabold tracking-tight mb-6">
          <span className="text-brandDark dark:text-white">Quest</span>
          <span className="text-brandAccent">ions</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed mb-10">
          Find the answers to common queries about our services and expertise.
        </p>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl max-w-[600px] shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-[16px] font-semibold text-gray-700 pr-2">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-gray-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;