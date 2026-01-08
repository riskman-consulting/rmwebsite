import React from "react";
import { motion } from "framer-motion";
import professionalExcellence from "../../assets/images/professional_excellence_team.png";
import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function IntroductionSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-6 text-sm font-medium tracking-wider text-brandNavy dark:text-brandAccent">
            • Introduction
          </p>
          <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-normal leading-[1.15] max-w-5xl text-brandDark dark:text-white">
            At RiskMan, we focus on creating enduring value for our clients, people, communities and other stakeholders through our "Customised Solution" based services.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Card 1: Professional Excellence */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src={professionalExcellence}
              alt="Professional Excellence"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-brandDark/60 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Professional Excellence</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                RiskMan is a team of experienced professionals with high level of knowledge and accomplishments who bring varied and storied experience to create outstanding value.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Propreneurial Mindset */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src={propereneurialMindset}
              alt="Propreneurial Mindset"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-brandDark/60 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Propreneurial Mindset</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                Rather than being classical consultants, we take pride in being propreneurs—professionals with an entrepreneurial mindset.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Long-term Relationships */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src={longTermRelationships}
              alt="Long-term Relationships"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-brandDark/60 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Long-term Relationships</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                We are passionate about making meaningful impact through our experience and competency. We engage with people meaningfully and believe in building long-term relationships.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}