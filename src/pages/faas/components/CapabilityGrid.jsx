import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CapabilityGrid = ({ group }) => {
  return (
    <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="mb-4 text-2xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
            What this covers
          </h2>
          <p className="text-lg text-brandNavy/70 dark:text-white/60">
            {group.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {group.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="flex items-start gap-3 p-5 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandAccent dark:hover:border-brandAccent hover:shadow-lg"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brandAccent/15">
                <Check className="w-3.5 h-3.5 text-brandAccent" />
              </span>
              <span className="text-[15px] font-semibold leading-snug text-brandDark dark:text-white/85">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityGrid;
