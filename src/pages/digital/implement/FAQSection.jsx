import React, { useState } from "react";

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 147, q: "What does process re-engineering include?", a: "It covers digitization, automation plans, and bottleneck identification via root cause analysis." },
    { id: 149, q: "How is data migration secured?", a: "Through end-to-end lifecycle planning and rigorous cleansing and validation frameworks." },
    { id: 151, q: "What is field-level mapping?", a: "It is the transformation logic that ensures data fields align correctly between old and new systems." },
    { id: 153, q: "How do we handle scope changes?", a: "We maintain a traceability matrix and detailed change logs to monitor all modifications." }
  ];

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        
        <h2 className="mb-12 text-3xl font-bold font-heading">
          Implementation FAQ
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <h4 className="font-bold text-brandPrimary dark:text-brandGold">
                  {faq.q}
                </h4>

                <span
                  className={`transition-transform duration-300 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openId === faq.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed opacity-80">
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