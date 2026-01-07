import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { scaleIn } from "@/utils/animations";

export default function FAQSection({ data }) {
  if (!data?.items || data.items.length === 0) return null;

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-4xl px-6 mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            Frequently Asked{" "}
            <span className="text-brandPrimary dark:text-brandAccent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {data.items.map((faq, idx) => (
            <motion.details
              key={faq.id || idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 transition-all duration-300 border shadow-md cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:border-brandAccent dark:hover:border-brandGold"
            >
              <summary className="flex items-start gap-3 text-lg font-semibold list-none transition-colors duration-300 cursor-pointer text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-brandPrimary dark:text-brandAccent" />
                <span>{faq.question}</span>
              </summary>

              <p className="mt-4 ml-8 leading-relaxed text-brandNavy dark:text-gray-400">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>

      </div>
    </section>
  );
}
