import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaCog } from "react-icons/fa";
import { scaleIn } from "@/utils/animations";

export default function HelpUsSection({ data }) {
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
            Industry <span className="text-brandPrimary dark:text-brandAccent">Insights</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:bg-brandAccent dark:group-hover:bg-brandGold">
                <span className="text-2xl transition-colors duration-300 text-brandPrimary dark:text-brandAccent group-hover:text-white dark:group-hover:text-brandDark">
                  {idx === 0 ? <FaShieldAlt /> : idx === 1 ? <FaChartLine /> : <FaCog />}
                </span>
              </div>

              {/* Label */}
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                {item.name}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-base leading-relaxed text-brandNavy dark:text-gray-400">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold border rounded-full bg-brandPrimary/5 text-brandPrimary dark:bg-brandAccent/5 dark:text-brandAccent border-brandPrimary/20 dark:border-brandAccent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
