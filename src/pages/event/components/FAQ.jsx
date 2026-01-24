import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./motionConfig";

const faqData = [
  {
    question: "Why does RiskMan actively participate in audit and governance forums?",
    answer:
      "Active participation allows us to stay closely aligned with emerging risks, regulatory expectations, and evolving governance practices. It ensures our advisory perspectives remain practical, relevant, and forward-looking."
  },
  {
    question: "How do these events benefit clients and stakeholders?",
    answer:
      "Insights gained from conferences and leadership forums directly translate into stronger risk frameworks, enhanced audit effectiveness, and board-relevant governance advice for our clients."
  },
  {
    question: "Does RiskMan only participate in IIA-led events?",
    answer:
      "While IIA platforms are central to the internal audit profession, RiskMan also engages in broader leadership, risk, governance, and industry-specific forums where meaningful dialogue shapes future practices."
  },
  {
    question: "How does event participation influence RiskMan’s service offerings?",
    answer:
      "Exposure to real-world challenges, peer discussions, and regulatory trends helps us continuously refine our methodologies, tools, and advisory approaches across audit, risk, ESG, and governance."
  },
  {
    question: "Can organizations collaborate with RiskMan through these events?",
    answer:
      "Yes. Events often serve as platforms for collaboration, knowledge exchange, and deeper conversations that may evolve into long-term advisory partnerships."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-surfaceLight border-t border-borderLight">
      <div className="container py-24">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brandNavy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Clarifying how our industry engagement strengthens advisory
            outcomes and long-term governance impact.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-borderLight rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-brandPrimary">
                  {item.question}
                </span>
                <span className="ml-4 text-brandGold text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
