import React, { useState } from "react";

const faqs = [
  {
    q: "Why is a Business Impact Analysis (BIA) necessary?",
    a: "A BIA quantifies the financial, operational, and reputational impacts of potential risks. It helps prioritize critical functions and defines the Maximum Tolerable Period of Disruption (MTPD).",
  },
  {
    q: "How do you identify potential risks to our organization?",
    a: "We conduct a comprehensive Risk Assessment covering cyber threats, natural disasters, supply chain failures, infrastructure outages, and operational risks.",
  },
  {
    q: "Is your approach aligned with international standards?",
    a: "Yes. Our BCP/DR frameworks are aligned with ISO 22301 best practices to ensure standardized Business Continuity Management Systems.",
  },
  {
    q: "How often should BCP and DR plans be tested?",
    a: "Plans should be validated regularly through tabletop exercises, simulations, and drills to identify gaps before real incidents occur.",
  },
  {
    q: "What documentation is provided at project completion?",
    a: "You receive a full BCMS toolkit including BCP policy, BIA reports, recovery strategies, training plans, and maintenance review frameworks.",
  },
];

const BCPFaq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <div className="h-1.5 w-20 bg-brandAccent mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="bg-white dark:bg-brandNavy/30 border border-borderLight dark:border-borderDark rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-brandDark dark:text-white hover:bg-brandPrimary/5 transition"
              >
                <span>{item.q}</span>
                <span className="text-brandPrimary text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-300 ${
                  open === i ? "pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BCPFaq;
