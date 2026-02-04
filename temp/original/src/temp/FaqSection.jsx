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
    <section className="py-4 bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandAccent/10 border border-brandAccent/20 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-brandAccent" />
            <span className="text-xs font-bold uppercase tracking-widest text-brandGold">Support</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brandDark dark:text-white">
            Event <span className="text-brandAccent">FAQs</span>
          </h2>
          
          <p className="mt-4 text-brandNavy/70 dark:text-brandLight/70 font-sans max-w-2xl mx-auto">
            Everything you need to know about participating in RiskMan Consulting LLP events, workshops, and global webinars.
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
              viewport={{ once: true }}
              className="border border-borderLight dark:border-borderDark rounded-2xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-heading font-bold text-brandDark dark:text-brandLight pr-4 transition-colors group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                  {faq.question}
                </span>
                <div className="shrink-0 p-1.5 rounded-full bg-brandLight dark:bg-brandDark text-brandAccent">
                  {activeIndex === index ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
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
                    <div className="px-6 pb-6 text-brandNavy/80 dark:text-brandLight/60 leading-relaxed border-t border-borderLight dark:border-borderDark pt-4 font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-brandAccent/5 border border-dashed border-brandAccent/30">
          <p className="text-brandDark dark:text-brandLight font-heading font-medium">
            Still have questions about our upcoming events?
          </p>
          <button className="mt-4 text-brandPrimary dark:text-brandAccent font-bold hover:underline underline-offset-8 transition-all">
            Contact our Events Team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventFAQ;