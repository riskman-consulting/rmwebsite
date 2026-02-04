import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
 
const faqs = [
  {
    question: "What types of risk management events do you host?",
    answer: "We organize a variety of events including executive roundtables on Basel IV, workshops on Operational Risk, and webinars focused on ESG compliance and AI in risk modeling. Our events are designed for CROs, risk managers, and compliance officers."
  },
  {
    question: "Are your consulting events available globally?",
    answer: "Yes. While we are headquartered in India, our events are delivered both virtually and in-person across the USA, EU, and AMEA regions, ensuring our global footprint reaches your local team."
  },
  {
    question: "Do you offer customized corporate training workshops?",
    answer: "Absolutely. RiskMan provides bespoke training sessions tailored to your organization's specific domain—be it Banking, Insurance, or FinTech—led by veterans with Big 4 expertise."
  },
  {
    question: "Is there a fee to attend RiskMan webinars?",
    answer: "Most of our knowledge-sharing webinars are complimentary as part of our commitment to the risk community. However, our specialized deep-dive masterclasses may operate on a fixed-pricing model."
  },
  {
    question: "How can I partner with RiskMan for an industry event?",
    answer: "We are always open to strategic collaborations. You can reach out via our contact page to discuss keynote speaking engagements, panel participations, or joint-branded workshops."
  }
];
 
const EventFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <section className="py-4 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
       
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-500">Support</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white">
            Event <span className="text-brandAccent">FAQs</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about participating in RiskMan Consulting events and workshops.
          </p>
        </div>
 
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-[#111827] dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0 p-1 rounded-full bg-gray-100 dark:bg-white/5 text-yellow-500">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
 
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
 
        {/* Call to Action Footer */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-dashed border-yellow-500/30">
          <p className="text-[#111827] dark:text-white font-medium">
            Still have questions about our upcoming events?
          </p>
          <button className="mt-4 text-yellow-600 dark:text-yellow-500 font-bold hover:underline underline-offset-4">
            Contact our Events Team →
          </button>
        </div>
      </div>
    </section>
  );
};
 
export default EventFAQ;