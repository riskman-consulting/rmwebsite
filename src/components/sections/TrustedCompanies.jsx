import { motion } from "framer-motion";

export default function TrustedCompanies({ data }) {
  // Safety guard
  if (!data?.company || data.company.length === 0) return null;

  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl px-6 mx-auto">

        {/* Section Title */}
        {data.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h3 className="text-xl font-semibold md:text-2xl text-brandNavy dark:text-gray-400">
              {data.title}
            </h3>
          </motion.div>
        )}

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {data.company.slice(0, 8).map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="transition-all duration-300 grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain h-8 md:h-10"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
