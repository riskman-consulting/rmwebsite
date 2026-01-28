import React from "react";
import { motion } from "framer-motion";

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
      <div className="container px-8 mx-auto md:px-10 lg:px-12 max-w-7xl">
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
              {/* <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandDark dark:text-brandAccent">
                • Who we are
              </p> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] text-brandNavy dark:text-white">
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
                  src="https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898667/team_collaboration_vksjog.webp"
                  alt="Team collaboration"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898665/professional_consultant_g8ag1p.jpg"
                  alt="Professional consulting"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898663/strategic_planning_nnuv1y.webp"
                  alt="Strategic planning"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="rounded-3xl overflow-hidden h-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src="https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898652/client_engagement_tlunb0.webp"
                  alt="Client engagement"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          > */}
            {/* Mission */}
            {/* <div className="group">
              <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
                Our Mission:
              </h3>
              <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
                We aim to deliver compassionate, high-quality healthcare that prioritizes patient well-being, promotes preventive care, and enhances every individual's journey toward lasting wellness.
              </p>
            </div> */}

            {/* Vision */}
            {/* <div className="group">
              <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
                Our Vision:
              </h3>
              <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
                To redefine modern healthcare through innovation, empathy, and expertise—empowering individuals to lead healthier, more fulfilling lives with trust and transparency.
              </p>
            </div> */}

            {/* Future Goals */}
            {/* <div className="group">
              <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
                Future Goals:
              </h3>
              <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
                We strive to expand our medical services, integrate advanced technologies, and build accessible care networks that serve communities with compassion and excellence.
              </p>
            </div> */}

            {/* Signature */}
            {/* <div className="pt-6">
              <div className="text-4xl text-gray-800 font-signature dark:text-gray-200" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                RiskMan Team
              </div>
            </div> */}
          {/* </motion.div> */}

          {/* RIGHT COLUMN: Mission, Vision, Focus + Signature */}
<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="flex flex-col justify-center space-y-8"
>
  {/* Mission */}
  <div className="group">
    <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
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
    <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
      Our Vision:
    </h3>
    <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
      Our vision is to become a leading Risk Consulting firm in India and globally by
      rendering sustainable, high-quality services fully aligned with our mission.
    </p>
  </div>

  {/* Focus */}
  <div className="group">
    <h3 className="mb-3 text-base font-bold text-brandDark dark:text-brandAccent">
      Our Focus:
    </h3>
    <p className="text-base leading-relaxed text-brandNavy dark:text-white/70">
      We focus on maximizing performance, ensuring reliability through customized
      agreements, and enhancing service productivity while minimizing operational costs.
    </p>
  </div>

  {/* Signature */}
  <div className="pt-6">
    <div
      className="text-4xl text-gray-800 dark:text-gray-200"
      style={{ fontFamily: "Brush Script MT, cursive" }}
    >
      RiskMan Team
    </div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}