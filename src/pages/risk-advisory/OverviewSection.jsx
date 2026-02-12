import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import DEFAULT_IMAGE from "../../assets/images/risk-advisory/overview.png";


const OverviewSection = ({ data }) => {
  return (
    <section className="relative py-12 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-20">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold tracking-widest uppercase text-brandPrimary">
            <Eye className="w-4 h-4" />
            Overview
          </div>

        </motion.div>

        {/* Zig-Zag Layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Content (Down) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}

          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-extrabold leading-tight font-heading text-brandDark dark:text-brandLight sm:text-4xl md:text-4xl">
                {data.title}
              </h2>
            </motion.div>
            <p className="text-[13px] leading-relaxed text-brandDark/80 dark:text-brandLight/80 md:text-[14px]">
              {data.description}
            </p>
          </motion.div>

          {/* Right: Image (Up) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:-mt-10"
          >
            <img
              src={data.image || DEFAULT_IMAGE}
              alt={data.title}
              loading="lazy"
              className="object-cover w-full rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
