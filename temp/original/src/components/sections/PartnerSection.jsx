import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { scaleIn } from "@/utils/animations";

export default function PartnerSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-6xl px-6 mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            {data.title}
          </h2>

          {data.description && (
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-brandNavy dark:text-gray-400">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.services?.map((service, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 text-center transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:bg-brandAccent dark:group-hover:bg-brandGold">
                <FaShieldAlt className="text-2xl transition-colors duration-300 text-brandPrimary dark:text-brandAccent group-hover:text-white dark:group-hover:text-brandDark" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-brandNavy dark:text-gray-400">
                {service.description}
              </p>

              {/* Link */}
              {service.path && (
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent hover:translate-x-1"
                >
                  Learn More <FaArrowRight size={12} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
