import React from "react";
import { motion } from "framer-motion";
import ermImage from "../../assets/images/erm/erm-2.jpg";

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-surfaceLight py-16 dark:bg-surfaceDark">
      <div className="container grid items-center grid-cols-1 gap-16 md:grid-cols-2">

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
            className="relative z-10 max-w-full shadow-xl rounded-2xl"
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
          <h2 className="text-3xl font-bold leading-tight font-heading text-brandDark dark:text-brandLight md:text-4xl">
            Turning Uncertainty into <span className="text-brandPrimary dark:text-brandAccent">Opportunity</span>
          </h2>

          {/* Accent line */}
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-brandGold dark:bg-white/70 md:mx-0" />

          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-brandLight/70">
            RiskMan helps leadership teams identify, assess and respond to the risks that matter
            most to their business. We work alongside your people to build a risk framework that
            supports better decisions, not just compliance.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default IntroSection;
