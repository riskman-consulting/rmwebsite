import { motion } from "framer-motion";
import { IndustryCard } from "./IndustryCard";
import industries from "../../data/industries-master-list.json";


export const IndustriesGrid = () => (
  <section className="relative py-24 px-xl transition-colors duration-300 bg-bgLight dark:bg-bgDark">
    <div className="container  mx-auto max-w-7xl">
      <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark/60 dark:text-white/60">Specialized by Sector</p>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">Tailored Industry Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
          Designed for sector-specific regulatory, operational, and strategic challenges
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.id} industry={industry} index={index} />
        ))}
      </div>
    </div>
  </section>
);