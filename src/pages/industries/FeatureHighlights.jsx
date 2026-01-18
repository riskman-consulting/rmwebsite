
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";




export const FeatureHighlights = () => (
  <section className="relative py-24 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
    <div className="container max-w-6xl px-6 mx-auto text-center">
      <h2 className="mb-16 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">Industry-Specific Excellence</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { icon: <FaShieldAlt className="text-4xl" />, title: "Deep Domain Knowledge", desc: "Specialized expertise in sector regulations" },
          { icon: <FaLightbulb className="text-4xl" />, title: "Best Practice Frameworks", desc: "Industry-proven methodologies" },
          { icon: <FaCheckCircle className="text-4xl" />, title: "Sector Leadership", desc: "Trusted advisors to leading organizations" }
        ].map((item, i) => (
          <motion.div key={i} className="p-8 bg-surfaceLight dark:bg-surfaceDark rounded-3xl hover:shadow-xl transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-brandGold/10 text-brandGold dark:text-brandAccent">{item.icon}</div>
            <h3 className="mb-4 text-xl font-bold text-brandDark dark:text-white">{item.title}</h3>
            <p className="text-sm text-brandNavy dark:text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);