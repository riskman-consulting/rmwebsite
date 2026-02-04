import { motion } from "framer-motion";




export const ExpertiseSection = () => (
  <section className="relative py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
    <div className="absolute w-48 h-48 -translate-y-1/2 left-8 top-1/2 opacity-5 dark:opacity-10">
      <svg viewBox="0 0 200 200" className="w-full h-full text-brandDark dark:text-white">
        <path d="M100 20 L100 180 M40 100 L100 180 L160 100" fill="none" stroke="currentColor" strokeWidth="8" />
      </svg>
    </div>
    <div className="container max-w-6xl px-6 mx-auto">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-brandGold dark:bg-brandAccent" />
          <p className="text-sm font-semibold tracking-wider uppercase text-brandDark/60 dark:text-white/60">
            WHY INDUSTRY EXPERTISE MATTERS
          </p>
        </div>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
          Deep Sector Knowledge, Seamless Execution.
        </h2>
        <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
          In complex risk management, one size never fits all. By focusing on your industry's unique requirements...
        </p>
      </motion.div>
    </div>
  </section>
);