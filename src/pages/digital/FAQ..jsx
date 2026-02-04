import React, { useState } from "react"

const faqs = [
  {
    q: "How do you handle RAID?",
    a:
      "Through centralized logs for Risks, Assumptions, Issues, and Dependencies with defined escalation."
  },
  {
    q: "How is data migration managed?",
    a:
      "We provide field-level transformation logic, cleansing, and final data reconciliation."
  },
  {
    q: "What is the UAT approach?",
    a:
      "Scenario-based user acceptance testing with real-time defect triaging and regression fixes."
  },
  {
    q: "How are transformation risks mitigated?",
    a:
      "By utilizing proactive milestone reviews, health tracking, and impact scoring models."
  },
  {
    q: "What is the BRD process?",
    a:
      "We finalize functional requirements through stakeholder validation and strict traceability matrices."
  }
]

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-borderLight dark:border-borderDark last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <h3 className="pr-4 text-lg font-bold transition-colors text-brandDark dark:text-brandLight group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
          {q}
        </h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } text-brandPrimary dark:text-brandAccent`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-relaxed text-brandNavy/70 dark:text-brandLight/60">
          {a}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <span className="inline-block mb-4 text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
              Support & Clarity
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-brandLight">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-brandNavy/70 dark:text-brandLight/70">
              Everything you need to know about our digital transformation
              methodologies and execution framework.
            </p>
            <div className="p-6 border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark">
              <p className="mb-4 text-sm font-medium">Still have questions?</p>
              <button className="w-full px-4 py-3 font-bold text-white rounded-lg bg-brandDark dark:bg-brandAccent dark:text-brandDark">
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="px-8 border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
