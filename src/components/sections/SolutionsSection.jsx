import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function SolutionsSection({ data }) {
  if (!data?.solutions || data.solutions.length === 0) return null;

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
          <h2 className="text-4xl font-bold tracking-wider uppercase md:text-5xl text-brandDark dark:text-white">
            {data.title}
          </h2>

          {data.description && (
            <p className="max-w-3xl mx-auto mt-4 text-lg text-brandNavy dark:text-gray-400">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-all duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:bg-brandAccent dark:group-hover:bg-brandGold">
                <FaCheckCircle className="text-xl transition-colors duration-300 text-brandPrimary dark:text-brandAccent group-hover:text-white dark:group-hover:text-brandDark" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-lg font-bold capitalize transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                {solution.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
