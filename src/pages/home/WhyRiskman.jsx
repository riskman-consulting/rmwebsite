import React from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, Zap, Shield } from "lucide-react";
import whyRiskMan from "../../assets/images/home/WhyChooseRiskMan.png";

/* GPC-style feature row */
const Feature = ({
  icon: Icon,
  title,
  description,
  align = "left",
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`max-w-md ${align === "right" ? "ml-auto text-right" : ""
      }`}
  >
    <div
      className={`flex items-start gap-4 ${align === "right" ? "flex-row-reverse" : ""
        }`}
    >
      <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-brandAccent/15">
        <Icon className="w-6 h-6 text-brandAccent" />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-brandLight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function WhyChooseRiskMan() {
  return (
    <section className="py-12  px-4 bg-bgLight dark:bg-bgDark">
      <div className="px-6 mx-auto max-w-7xl">

        {/* ✅ HEADING — RESTORED */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl text-brandDark dark:text-brandLight"
          >
            Why{" "}
            <span className="text-brandPrimary dark:text-brandAccent">
              Choose
            </span>{" "}
            RiskMan?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-brandDark/70 dark:text-brandLight/70"
          >
            Strategic risk management led by industry veterans to ensure your
            business remains resilient, compliant, and ahead of the curve.
          </motion.p>
        </div>

        {/* ✅ GPC-STYLE 3 COLUMN LAYOUT */}
        <div className="grid items-center grid-cols-1  gap-20 lg:grid-cols-3">

          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-20">
            <Feature
              icon={Globe}
              title="Global Footprint"
              description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
              delay={0.1}
            />

            <Feature
              icon={Briefcase}
              title="Enriched Domain Expertise"
              description="Our leadership brings decades of experience from Big 4 firms, global banks, and top-tier rating agencies."
              delay={0.2}
            />
          </div>

          {/* CENTER IMAGE — GPC STYLE */}
          {/* <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[320px] h-[350px] rounded-[32px] bg-transparent shadow-xl flex items-center justify-center overflow-hidden"
            >
              <div className="">
               
              <img
                src={whyRiskMan}
                alt="Why Choose RiskMan"
                className="object-cover w-full h-full"
              />
              </div>
            </motion.div>
          </div> */}

          {/* CENTER IMAGE — THEME-AWARE, NO WHITE CARD */}
          <div className="relative flex justify-center">

            {/* Soft ambient background (light + dark friendly) */}
            <div
              className="
      absolute
      w-[360px] h-[360px]
      rounded-full
      bg-gradient-to-br
      from-brandAccent/10
      via-transparent
      to-brandPrimary/10
      dark:from-brandAccent/15
      dark:to-brandPrimary/20
      blur-[80px]
    "
            />

            {/* Image container (no background) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
      relative
      w-[320px] h-[380px]
      rounded-[32px]
      overflow-hidden
      shadow-[0_18px_40px_rgba(0,0,0,0.12)]
      dark:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
    "
            >
              <img
                src={whyRiskMan}
                alt="Why Choose RiskMan"
                className="object-cover w-full h-full"
              />
            </motion.div>

          </div>


          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-20">
            <Feature
              icon={Zap}
              title="Agile & Lean Approach"
              description="We don’t overcomplicate. We focus on process improvement and real business benefits through an agile implementation model."
              align="right"
              delay={0.3}
            />

            <Feature
              icon={Shield}
              title="Predictable Engagement"
              description="We operate on an all-inclusive, fixed-price model with a 100% on-time project completion track record."
              align="right"
              delay={0.4}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

