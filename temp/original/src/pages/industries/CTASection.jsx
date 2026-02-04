import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";



export const CTASection = () => (
  <section className="relative py-24 text-center bg-bgLight dark:bg-bgDark">
    <div className="container max-w-6xl px-6 mx-auto space-y-8">
      <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">Future-Proof Your Business with Trusted Risk & Compliance Experts</h2>
      <p className="sm:px-2 md:px-4 lg:px-6 pt-2">
        In today’s fast-evolving landscape, managing risk isn’t optional—it’s essential. Our team delivers tailored solutions that align with your industry, strengthen your compliance framework, and secure your operations from end to end. Let us help you navigate complexity with clarity and confidence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {["Strategic Advisory", "Compliance Excellence", "Cyber Resilience"].map((item, i) => (
          <motion.span key={i} className="px-6 py-3 border rounded-full text-brandDark dark:text-white" whileHover={{ y: -2, borderColor: "#FFC000" }}>
            {item}
          </motion.span>
        ))}
      </div>
      <motion.a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-brandDark dark:bg-brandAccent dark:text-brandDark rounded-full hover:scale-105 transition-all">
        Schedule a Free Consultation <FaArrowRight />
      </motion.a>
    </div>
  </section>
);
