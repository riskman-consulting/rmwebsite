import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { scaleIn } from "@/utils/animations";

export default function TestimonialsSection({ data }) {
  if (!data?.testimonials || data.testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-6xl px-6 mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {data.sectionLabel && (
            <p className="mb-4 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">
              {data.sectionLabel}
            </p>
          )}

          <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
            {data.title}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id || idx}
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-8 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:border-brandAccent dark:hover:border-brandGold hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <FaQuoteLeft className="text-3xl transition-colors duration-300 opacity-10 text-brandPrimary dark:text-brandAccent group-hover:opacity-20" />
              </div>

              {/* Quote */}
              <p className="mb-6 text-base leading-relaxed text-brandNavy dark:text-gray-400">
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-borderLight dark:border-borderDark">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="object-cover w-12 h-12 rounded-full"
                  />
                )}

                <div>
                  <h4 className="font-bold text-brandDark dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-brandNavy dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
