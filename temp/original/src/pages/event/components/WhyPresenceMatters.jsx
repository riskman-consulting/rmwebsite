import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motionConfig";

export default function WhyPresenceMatters() {
  return (
    <section className="bg-bgLight">
      <div className="container py-20">
        <motion.div
          className="max-w-5xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-semibold text-brandNavy"
          >
            Why Our Presence Matters
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-700 leading-relaxed"
          >
            In an environment where risks evolve faster than regulations,
            mere compliance is no longer sufficient. Our presence at
            industry forums, audit conferences, and leadership platforms
            enables us to stay deeply connected with emerging risks,
            regulatory expectations, and governance trends.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-10 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Insight",
                desc: "Understanding emerging risks, regulatory shifts, and industry signals before they materialize.",
              },
              {
                title: "Oversight",
                desc: "Strengthening governance, controls, and assurance through practical, board-relevant perspectives.",
              },
              {
                title: "Foresight",
                desc: "Helping organizations prepare for what’s next — AI, ESG, cybersecurity, and future-ready audit.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-surfaceLight border border-borderLight rounded-lg p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-brandPrimary">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
