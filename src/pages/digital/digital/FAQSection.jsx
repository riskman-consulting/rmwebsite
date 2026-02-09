import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do you handle RAID?", a: "Through centralized logs for Risks, Assumptions, Issues, and Dependencies with defined escalation." },
    { q: "How is data migration managed?", a: "We provide field-level transformation logic, cleansing, and final data reconciliation." },
    { q: "What is the UAT approach?", a: "Scenario-based user acceptance testing with real-time defect triaging and regression fixes." },
    { q: "How are transformation risks mitigated?", a: "By utilizing proactive milestone reviews, health tracking, and impact scoring models." },
    { q: "What is the BRD process?", a: "We finalize functional requirements through stakeholder validation and strict traceability matrices." }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        <h2 className="mb-12 text-3xl font-bold text-center font-heading">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <h4 className="text-lg font-bold text-brandPrimary dark:text-brandGold">
                  {faq.q}
                </h4>

                <span
                  className={`transition-transform duration-300 text-xl ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed opacity-80">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;