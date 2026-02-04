import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
    <section className="relative py-4 overflow-hidden lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column - Header */}
          <motion.div {...fadeInUp} className="lg:col-span-5">
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
              FAQ
            </span>
            
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
              Frequently Asked{" "}
              <span className="font-serif italic font-medium text-brandGold">
                Questions
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
              Find answers to common questions about RiskMan's services, approach, and how we can help your organization achieve sustainable growth.
            </p>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden p-8 mt-8 border shadow-xl lg:block rounded-2xl bg-white/10 backdrop-blur-xl border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-brandAccent/20">
                  <HelpCircle className="w-6 h-6 text-brandAccent" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-brandDark/70 dark:text-white/70">
                    Can't find the answer you're looking for? Please reach out to our team.
                  </p>
                  <a 
                    href="/contact"
                    className="inline-block mt-4 text-sm font-semibold transition-colors text-brandAccent hover:text-brandGold"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4 lg:col-span-7">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`cursor-pointer transition-all duration-300 border rounded-2xl overflow-hidden ${
                  openFaq === i
                    ? "bg-surfaceLight dark:bg-surfaceDark border-brandGold dark:border-brandAccent shadow-2xl"
                    : "bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark hover:border-brandGold/50 dark:hover:border-brandAccent/50"
                }`}
                onClick={() => toggleFaq(i)}
              >
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="text-lg font-bold text-brandDark dark:text-white lg:text-xl">
                    {f.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-brandAccent" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-12 h-1 mb-4 rounded-full bg-brandAccent/30" />
                        <p className="leading-relaxed text-brandDark/70 dark:text-white/70">
                          {f.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile Contact Card */}
        <motion.div
          {...fadeInUp}
          className="p-6 mt-8 border shadow-xl lg:hidden rounded-2xl bg-white/10 backdrop-blur-xl border-white/20"
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-brandAccent/20">
              <HelpCircle className="w-6 h-6 text-brandAccent" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                Still have questions?
              </h3>
              <p className="text-sm text-brandDark/70 dark:text-white/70">
                Can't find the answer you're looking for? Please reach out to our team.
              </p>
              <a 
                href="/contact"
                className="inline-block mt-4 text-sm font-semibold transition-colors text-brandAccent hover:text-brandGold"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}