import { motion } from "framer-motion";
import { scaleIn } from "@/utils/animations";

export default function RiskAnalysisSection({ data }) {
  if (!data?.items || data.items.length === 0) return null;

  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl px-6 mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            Our <span className="text-brandPrimary dark:text-brandAccent">Approach</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-8 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-xl"
            >
              {/* Step number */}
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:bg-brandAccent dark:group-hover:bg-brandGold">
                <span className="text-lg font-bold transition-colors duration-300 text-brandPrimary dark:text-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                  {idx + 1}
                </span>
              </div>

              {/* Text */}
              <p className="text-lg font-semibold text-brandDark dark:text-white">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
