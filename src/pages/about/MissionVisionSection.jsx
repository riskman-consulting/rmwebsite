import React from "react";
import { motion } from "framer-motion";
import teamCollaboration from "../../assets/images/team_collaboration.jpg";
import professionalConsultant from "../../assets/images/professional_consultant.jpg";
import strategicPlanning from "../../assets/images/strategic_planning.jpg";
import clientEngagement from "../../assets/images/client_engagement.jpg";


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function MissionVisionSection() {
  return (
    <section className="relative py-8 lg:py-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium tracking-wider text-textLightSecondary dark:text-textDarkSecondary">
            • Who we are
          </p>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold  leading-[1.2] text-brandDark dark:text-brandAccent mb-16">
            Team reliable care<br />for your healing
          </h2>
        </motion.div>

        <div className="grid gap-12 mb-16 md:grid-cols-2">
          {/* Left: Mission, Vision, Future Goals */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-3 text-sm font-bold text-textLight dark:text-textDark">Our Mission:</h3>
              <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary mb-4">
                Our mission is to achieve sustainable growth and build better future for all.
              </p>
              <p className="mb-2 text-sm text-textLightMuted dark:text-textDarkMuted">We believe in:</p>
              <ul className="space-y-2 text-sm text-textLightMuted dark:text-textDarkMuted">
                <li>• Embracing technology and innovation</li>
                <li>• Being client and people focussed</li>
                <li>• Build trust and relationship</li>
                <li>• Be prompt and deliver efficient and quality execution</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold text-textLight dark:text-textDark">Our Vision:</h3>
              <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary">
                Our vision is to become a leading consulting firm in India and globally through rendering sustainable quality services aligned to our mission.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold text-textLight dark:text-textDark">Future Goals:</h3>
              <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary">
                We focus on maximizing performance, ensuring reliability through customized agreements, and enhancing service productivity while minimizing operational costs.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8">
              <div className="text-3xl font-signature text-textLight dark:text-textDark">
                RiskMan Team
              </div>
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[240px]">
              <img
                src={teamCollaboration}
                alt="Team collaboration"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[300px] mt-12">
              <img
                src={professionalConsultant}
                alt="Professional consulting"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[200px] -mt-8">
              <img
                src={strategicPlanning}
                alt="Strategic planning"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[260px]">
              <img
                src={clientEngagement}
                alt="Client engagement"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= SUSTAINABILITY CIRCLE WITH PILLARS ================= */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center justify-center w-40 h-40 border-4 rounded-full shadow-lg border-brandPrimary dark:border-brandAccent">
              <div className="flex items-center justify-center rounded-full w-36 h-36 bg-surfaceLight dark:bg-surfaceDark">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <p className="text-lg font-bold text-textLight dark:text-textDark">Sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Pillar 1: Performance */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative p-6 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
          >
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-10 dark:bg-brandAccent rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 group-hover:scale-110">
                <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 text-brandDark dark:text-white">Performance</h3>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Maximize performance through our services
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Ensure our services operate with integrity and objectivity with best-in-class outcomes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Reliability */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative p-6 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
          >
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-10 dark:bg-brandAccent rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 group-hover:scale-110">
                <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 text-brandDark dark:text-white">Reliability</h3>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Customized agreements that exactly meet service needs and customer's internal strategy
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Faster delivery and globally accepted deliverables
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Cost */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative p-6 overflow-hidden text-center transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
          >
            <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-10 dark:bg-brandAccent rounded-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 group-hover:scale-110">
                <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 text-brandDark dark:text-white">Cost</h3>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • By focusing on refining elements and investigating on alternative resources
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Efficiently managing our sourcing, we aim to enhance service productivity and minimize operational costs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}