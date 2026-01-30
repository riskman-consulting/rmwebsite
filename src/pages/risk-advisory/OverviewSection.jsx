import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import DEFAULT_IMAGE from "../../assets/images/risk-advisory/overview.png";


const OverviewSection = ({ data }) => {
  return (
    <section className="relative bg-bgLight py-12 dark:bg-bgDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brandPrimary">
            <Eye className="h-4 w-4" />
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
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-brandDark dark:text-brandLight sm:text-4xl md:text-4xl">
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
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
