import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export default function ProActiveSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              {data.title}
            </h2>

            <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
              {data.description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={data.image}
              alt={data.title || "Proactive Advisory"}
              className="w-full shadow-2xl rounded-3xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
