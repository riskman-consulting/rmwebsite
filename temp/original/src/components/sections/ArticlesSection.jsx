import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { scaleIn } from "@/utils/animations";

export default function ArticlesSection({ data }) {
  if (!data?.articles || data.articles.length === 0) return null;

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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            {data.title}
          </h2>

          {data.description && (
            <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {data.articles.slice(0, 3).map((article, idx) => (
            <motion.div
              key={article.id || idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden transition-all duration-300 border bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="p-6">

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm text-brandNavy dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaCalendar size={12} />
                    {article.publishedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser size={12} />
                    {article.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white line-clamp-2 group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 text-sm leading-relaxed text-brandNavy dark:text-gray-400 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                  <span className="text-xs font-semibold uppercase text-brandPrimary dark:text-brandAccent">
                    {article.category}
                  </span>

                  <button className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 text-brandPrimary dark:text-brandAccent group-hover:translate-x-1">
                    Read More <FaArrowRight size={12} />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
