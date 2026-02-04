import { motion } from "framer-motion";
import clsx from "clsx";

const STEPS = [
  {
    step: "01",
    title: "Understanding As-Is Business Processes",
    description:
      "We gain a deep understanding of your business processes, operating environment, and organizational context.",
    gradient: "from-[#001F3F] to-[#FFC000]", // Dark Blue
    shadowColor: "#000f1f",
  },
  {
    step: "02",
    title: "Risk Identification",
    description:
      "Internal and external risk factors impacting core business processes are systematically identified and documented.",
    gradient: "from-[#003366] to-[#FFC000]", // Navy Blue
    shadowColor: "#001a33",
  },
  {
    step: "03",
    title: "Risk Scoring & Mitigation",
    description:
      "We formulate risk scoring matrices, assess residual risks, recommend mitigation controls, and design strategic action plans.",
    gradient: "from-[#004080] to-[#FFC000]", // Primary Blue
    shadowColor: "#002040",
  },
  {
    step: "04",
    title: "Implementation & Review",
    description:
      "RiskMan provides hands-on support to implement controls, evaluate design effectiveness, and perform reviews.",
    gradient: "from-[#00509d] to-[#FFC000]", // Lighter Blue
    shadowColor: "#002850",
  },
];

const ERMMethodologySection = () => {
  return (
    <section className="pt-10 pb-24 overflow-hidden bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-brandDark dark:text-brandLight md:text-4xl">
            Our <span className="text-brandPrimary dark:text-brandAccent">ERM Methodology</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-brandNavy/70 dark:text-brandLight/70">
            We follow a structured four-step methodology designed to enable
            effective ERM adoption through expert guidance and continuous
            oversight.
          </p>
        </motion.div>

        {/* Mountain/Hill Climbing Layout - Ascending Order */}
        <div className="relative py-12">
          {/* MOUNTAIN/PATH BACKGROUND */}
          <div className="absolute inset-0 flex items-end justify-center">
            <svg 
              viewBox="0 0 1200 400" 
              className="w-full h-full opacity-10 dark:opacity-5"
              preserveAspectRatio="xMidYMid slice"
            >
              <path 
                d="M 0 350 Q 150 250 300 200 T 600 100 T 900 200 Q 1050 250 1200 350 L 1200 400 L 0 400" 
                fill="url(#mountainGradient)" 
              />
              <defs>
                <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFC000" />
                  <stop offset="100%" stopColor="#001F3F" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* ASCENDING STEPS */}
          <div className="relative flex flex-col max-w-5xl gap-8 mx-auto lg:flex-row lg:gap-4 lg:items-end lg:justify-center">
            {STEPS.map((item, index) => {
              // Step 1 (Index 0): Lowest (Bottom)
              // Step 4 (Index 3): Highest (Top)
              const desktopHeight = [
                "lg:self-end",           // Step 1 - at bottom
                "lg:mb-20",              // Step 2 - up
                "lg:mb-40",              // Step 3 - higher
                "lg:mb-60",              // Step 4 - highest
              ][index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className={clsx(
                    "relative flex-1 min-w-[220px] transition-all duration-300",
                    desktopHeight
                  )}
                >
                  {/* CARD CONTAINER */}
                  <div className="relative group hover:z-30">
                    
                    {/* NUMBERED CIRCLE - TOP */}
                    <div className="flex justify-center mb-4">
                      <div className={clsx(
                        "flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-3xl shadow-lg ring-4 ring-white dark:ring-surfaceDark transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br",
                        item.gradient
                      )}>
                        {item.step}
                      </div>
                    </div>

                    {/* WHITE CONTENT CARD */}
                    <div className="p-6 transition-all duration-300 border shadow-md rounded-xl bg-surfaceLight dark:bg-surfaceDark hover:shadow-2xl group-hover:-translate-y-2 border-white/50 dark:border-white/5">
                      <h3 className="mb-2 font-heading text-[11px] font-bold uppercase tracking-widest text-brandAccent/70 dark:text-brandAccent/80">
                        Step {index + 1} of 4
                      </h3>
                      <h4 className="mb-3 text-base font-bold leading-tight font-heading text-brandDark dark:text-brandLight">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70">
                        {item.description}
                      </p>
                    </div>

                    {/* CONNECTOR LINE - BETWEEN STEPS */}
                    {index < STEPS.length - 1 && (
                      <div className="absolute hidden w-1 h-20 -translate-x-1/2 lg:block -bottom-20 left-1/2 bg-gradient-to-b from-brandAccent to-brandAccent/20" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SUMMIT FLAG/PEAK */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="text-center">
              <div className="inline-flex flex-col items-center">
                <div className="w-1 h-12 mb-2 bg-gradient-to-t from-brandAccent/30 to-brandAccent" />
                <div className="flex items-center justify-center w-8 h-8 rounded-full shadow-lg bg-gradient-to-br from-brandAccent to-brandGold">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-brandDark dark:text-white">
                Successful ERM Adoption
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERMMethodologySection;
