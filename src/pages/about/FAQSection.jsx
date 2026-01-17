import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    {
      question: "What does RiskMan stand for?",
      answer:
        "RiskMan is a trusted advisory firm focused on delivering sustainable value through risk, compliance, financial and strategic consulting services.",
    },
    {
      question: "What is RiskMan's mission?",
      answer:
        "To achieve sustainable growth and build a better future by embracing technology, innovation, trust and long-term partnerships.",
    },
    {
      question: "What industries does RiskMan serve?",
      answer:
        "We serve clients across manufacturing, financial services, technology, retail, infrastructure and emerging enterprises.",
    },
    {
      question: "What makes RiskMan different?",
      answer:
        "We are propreneurs — professionals with an entrepreneurial mindset — delivering customized solutions rather than generic consulting.",
    },
  ];

  return (
    <section className="relative transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-10 text-2xl font-bold text-start md:text-3xl text-brandDark dark:text-white"
        >
          Frequently Asked
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
        </motion.h2>

        {faqs.map((f, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`mb-4 cursor-pointer transition-all duration-300 border rounded-2xl p-6 ${
              openFaq === i
                ? "bg-surfaceLight dark:bg-surfaceDark border-brandGold dark:border-brandAccent shadow-lg"
                : "bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent"
            }`}
            onClick={() => toggleFaq(i)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-brandDark dark:text-white">{f.question}</h3>
              <FaChevronDown
                className={`transition-transform text-brandPrimary dark:text-brandAccent ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openFaq === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 text-gray-600 dark:text-gray-400"
              >
                {f.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}