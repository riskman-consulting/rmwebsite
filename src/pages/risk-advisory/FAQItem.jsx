import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="overflow-hidden transition-all duration-300 border shadow-md rounded-2xl border-borderLight bg-surfaceLight hover:shadow-lg dark:border-borderDark dark:bg-surfaceDark"
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full gap-4 p-6 text-left transition-colors duration-300 hover:bg-brandPrimary/5 dark:hover:bg-brandPrimary/10"
      >
        <span className="text-lg font-bold text-brandDark dark:text-brandLight">
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-brandPrimary dark:text-brandAccent"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="px-6 pb-6"
          >
            <p className="leading-relaxed text-brandDark/70 dark:text-brandLight/70">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;