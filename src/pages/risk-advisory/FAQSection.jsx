import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import FAQItem from "./FAQItem";

const FAQSection = ({ data }) => {
  return (
    <section className="relative py-10 md:py-16 bg-bgLight dark:bg-bgDark overflow-hidden">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandPrimary/10 dark:bg-brandPrimary/20 border-brandPrimary/30 dark:border-brandPrimary/40 text-brandPrimary dark:text-brandAccent">
              <Building2 className="w-4 h-4" />
              FAQ
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brandDark dark:text-brandLight font-heading">
              {data.title}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {data.questions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default FAQSection;
