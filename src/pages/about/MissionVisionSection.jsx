import React from "react";
import { motion } from "framer-motion";
import teamCollaboration from "../../assets/images/hero-section/about/team_collaboration.webp"
import professionalConsulting from "../../assets/images/hero-section/about/professional_consultant.webp";
import strategicPlanning from "../../assets/images/hero-section/about/strategic_planning.webp";
import clientEngagement from "../../assets/images/hero-section/about/client_engagement.webp";

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
    <section id="mission-vision" className="relative py-8 lg:py-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-12 max-w-7xl">
        {/* Main Grid: Left (Heading + Images) | Right (Mission/Vision/Goals) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Heading + Image Grid */}
          <div className="space-y-8">
            {/* Heading Section */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* H1 - 32px (text-[32px]) */}
              <h2 className="text-[32px] font-bold leading-[1.1] text-brandNavy dark:text-white">
                Our Path to <span className="text-brandAccent">Sustainable Growth</span>
              </h2>
            </motion.div>

            {/* Image Grid - 2x2 */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={teamCollaboration}
                  alt="Team collaboration"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={professionalConsulting}
                  alt="Professional consulting"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={strategicPlanning}
                  alt="Strategic planning"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={clientEngagement}
                  alt="Client engagement"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Mission, Vision, Focus */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Mission */}
            <div className="group">
              {/* H3 - 22px (text-[22px]) */}
              <h3 className="mb-3 text-[22px] font-bold text-brandDark dark:text-brandAccent">
                Our Mission:
              </h3>
              <p className="mb-4 text-base leading-relaxed text-brandNavy dark:text-white/70">
                Our mission is to achieve sustainable growth and build a better future for all.
                We believe in:
              </p>
              <ul className="space-y-2 text-base text-brandNavy dark:text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-brandAccent">▪</span>
                  <span>Embracing technology and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-brandAccent">▪</span>
                  <span>Being client and people focussed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-brandAccent">▪</span>
                  <span>Building trust and long-term relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-brandAccent">▪</span>
                  <span>Being prompt and delivering efficient, high-quality execution</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="group">
              {/* H3 - 22px (text-[22px]) */}
              <h3 className="mb-3 text-[22px] font-bold text-brandDark dark:text-brandAccent">
                Our Vision:
              </h3>
              <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
                Our vision is to become a leading Risk Assurance and Advisory firm in India and globally by
                rendering sustainable, high-quality services fully aligned with our mission.
              </p>
            </div>

            {/* Focus */}
            <div className="group">
              {/* H3 - 22px (text-[22px]) */}
              <h3 className="mb-3 text-[22px] font-bold text-brandDark dark:text-brandAccent">
                Our Focus:
              </h3>
              <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
                We focus on maximizing performance, ensuring reliability through customized
                agreements, and enhancing service productivity while minimizing operational costs.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}