import React from "react";
import { motion } from "framer-motion";
import ermImage from "../../assets/images/erm/erm-2.png";

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-bgLight py-28 dark:bg-surfaceDark">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">

        {/* IMAGE — LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Subtle background frame */}
          <div className="absolute -inset-6 rounded-2xl bg-brandPrimary/5 dark:bg-brandAccent/10" />

          <img
            src={ermImage}
            alt="Enterprise Risk Management Journey"
            className="relative z-10 max-w-full rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* CONTENT — RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="font-heading  text-3xl font-semibold leading-tight text-slate-900 dark:text-brandLight md:text-4xl">
            Turning Uncertainty into <span className="text-brandPrimary dark:text-brandAccent">Opportunity</span>
          </h2>

          {/* Accent line */}
          <div className="mt-4 h-1 w-20 rounded-full bg-brandGold dark:bg-white/70 mx-auto md:mx-0" />

          <p className="mt-8 text-lg leading-relaxed text-slate-600 dark:text-brandLight/70">
            In an ever-evolving business landscape where uncertainty is the only constant, RiskMan
            serves as the guardian of your corporate success story. We don't just consult; we partner
            with you to navigate complex risks and unlock unprecedented strategic opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default IntroSection;
