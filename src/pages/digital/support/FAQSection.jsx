import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do you ensure high user adoption?", a: "Through role-based impact analysis, targeted training, and constant monitoring of adoption KPIs." },
    { q: "What is the goal of UAT?", a: "To validate the system against real business scenarios before go-live, ensuring it meets user needs." },
    { q: "How are system bugs managed?", a: "We use real-time defect triaging and a sign-off matrix to resolve issues based on priority." },
    { q: "What is regression testing?", a: "It confirms that new integrations or updates haven't negatively affected existing system functions." }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 border-t bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">

        <h2 className="mb-12 text-3xl font-bold font-heading">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-borderLight dark:border-borderDark"
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-start justify-between w-full pb-4 text-left"
              >
                <h4 className="font-bold text-brandPrimary dark:text-brandGold pr-4">
                  {faq.q}
                </h4>

                <span
                  className={`transition-transform duration-300 mt-1 ${
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
                  <p className="pb-4 text-sm leading-relaxed opacity-80">
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