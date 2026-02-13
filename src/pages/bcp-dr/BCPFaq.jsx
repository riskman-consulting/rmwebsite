import { useState } from "react";

const faqs = [
  {
    q: "Why is a Business Impact Analysis (BIA) necessary?",
    a: "A BIA quantifies the financial, operational, and reputational impacts of potential risks. It helps prioritize critical functions and determines the Maximum Tolerable Period of Disruption (MTPD) for your operations.",
  },
  {
    q: "How do you identify potential risks to our organization?",
    a: "We conduct a comprehensive Risk Assessment (RA) to categorize internal and external threats, such as cyberattacks, natural disasters, supply chain failures, and power outages.",
  },
  {
    q: "Is our approach aligned with international standards?",
    a: "Yes, our BCP/DR frameworks are designed in strict alignment with ISO 22301 global best practices, ensuring a standardized and rigorous Business Continuity Management System (BCMS).",
  },
  {
    q: "How often should BCP and DR plans be tested?",
    a: "Plans should be tested regularly through tabletop exercises, simulations, and drills. Regular testing validates the effectiveness of recovery strategies and identifies gaps before an actual crisis occurs.",
  },
  {
    q: "What documentation is provided at the end of the project?",
    a: "You receive a complete BCMS toolkit, including a Business Continuity Management Policy, BIA reports, Recovery Strategies, Training Plans, and Maintenance Review Plans.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container relative z-10 px-6 lg:px-20">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-16 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-brandPrimary/15 text-brandPrimary border border-brandPrimary/25 dark:bg-brandPrimary/25 dark:text-brandAccent dark:border-brandPrimary/30">
            Common Questions
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-brandAccent to-brandGold md:mx-0" />
        </div>

        {/* FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="transition-all border shadow-sm bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex items-center justify-between w-full px-8 py-6 text-left"
                >
                  <h4 className="pr-4 text-lg font-semibold text-brandDark dark:text-white">
                    {faq.q}
                  </h4>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg font-bold transition-all
                      ${
                        isOpen
                          ? "bg-brandAccent text-brandDark border-brandAccent scale-110"
                          : "border-borderLight dark:border-borderDark text-brandDark dark:text-brandLight"
                      }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-8 pt-2 pb-6 border-t border-borderLight/40 dark:border-borderDark/40 text-brandDark/85 dark:text-brandLight/85">
                    <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
