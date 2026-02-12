import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do you tailor the audit approach for PTI?",
    a: "We conduct stakeholder interviews to understand PTI's unique \"as-is\" processes, identifying specific concerns like newsroom cybersecurity and freelancer payments.",
  },
  {
    q: "How does RBIA differ from conventional auditing?",
    a: "Unlike narrow, reactive conventional methods, RBIA uses a consultative approach to address technological shifts, increasing complexity, and strategic objectives.",
  },
  {
    q: "What specific areas does the audit plan cover?",
    a: "The plan targets critical operations, including revenue streams, payroll, employee costs, legal contracts, and statutory compliance like GST.",
  },
  {
    q: "How is the audit team structured?",
    a: "Engagements are led by experienced Partners and Leads, supported by dedicated consultants for field-testing and data analytics.",
  },
  {
    q: "How are audit findings resolved?",
    a: "We collaborate with process owners to finalize remediation plans, ensuring management acceptance and tracking implementation in subsequent quarters.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-bgLight dark:bg-bgDark">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-brandPrimary/6 via-transparent to-brandAccent/6 dark:from-brandPrimary/12 dark:to-brandAccent/8" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#001F3F_1px,transparent_0)] [background-size:32px_32px] dark:opacity-[0.05] dark:bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]" />

      {/* DECORATIVE GLOW */}
      <div className="absolute rounded-full top-40 left-10 w-96 h-96 bg-brandPrimary/8 blur-3xl dark:bg-brandPrimary/12" />

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
                className="relative bg-white border shadow-md rounded-2xl border-borderLight dark:border-borderDark dark:bg-surfaceDark backdrop-blur-xl hover:shadow-xl hover:border-brandAccent/40"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-8 py-6 text-left"
                >
                  <h4 className="pr-4 text-lg font-bold text-brandDark dark:text-white">
                    {faq.q}
                  </h4>

                  <span
                    className={`ml-6 flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold text-lg transition-all
                      ${
                        isOpen
                          ? "bg-brandAccent text-brandDark border-brandAccent scale-110"
                          : "border-borderLight dark:border-borderDark text-brandDark dark:text-brandLight"
                      }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pt-2 pb-6 border-t border-borderLight/30 dark:border-borderDark/30 text-brandDark/85 dark:text-brandLight/85">
                        <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
