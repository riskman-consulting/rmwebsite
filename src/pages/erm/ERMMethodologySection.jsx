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
    <section className="bg-bgLight pt-10 pb-24 dark:bg-bgDark overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-brandDark dark:text-brandLight md:text-4xl">
            Our <span className="text-brandPrimary dark:text-brandAccent">ERM Methodology</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-brandNavy/70 dark:text-brandLight/70">
            We follow a structured four-step methodology designed to enable
            effective ERM adoption through expert guidance and continuous
            oversight.
          </p>
        </motion.div>

        {/* Staircase Layout - Descending Order (1->4) */}
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:gap-6">
          {STEPS.map((item, index) => {
            // Step 1 (Index 0): Top (mt-0)
            // Step 4 (Index 3): Bottom (mt-300)
            const desktopMargin = [
              "lg:mt-0",       
              "lg:mt-[60px]",  
              "lg:mt-[120px]", 
              "lg:mt-[180px]", 
            ][index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={clsx(
                  "relative flex-1 min-w-[260px] transition-all duration-300 hover:z-30",
                  desktopMargin
                )}
              >
                <div className="relative flex items-start filter drop-shadow-xl group hover:-translate-y-2 transition-transform duration-300">
                  
                  {/* White Content Card */}
                  <div className="relative z-10 flex-1 rounded-lg bg-surfaceLight p-6 pr-14 shadow-sm dark:bg-surfaceDark h-[180px] flex flex-col justify-center border border-white/50 dark:border-white/5">
                    <h3 className="mb-2 font-heading text-[10px] font-bold uppercase tracking-widest text-brandNavy/40 dark:text-brandLight/40">
                      Phase {index + 1}
                    </h3>
                    <h4 className="mb-3 font-heading text-base font-bold text-brandDark dark:text-brandLight leading-tight line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-brandNavy/60 dark:text-brandLight/50 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Colored Arrow Ribbon */}
                  <div 
                    className={clsx(
                      "relative -ml-8 flex w-28 h-[140px] flex-col items-center justify-center text-white bg-gradient-to-br z-20 shadow-lg shrink-0",
                      item.gradient
                    )}
                    style={{
                      clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                    }}
                  >
                    {/* Fold/Shadow Effect */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"
                    />
                    
                    <div className="flex flex-col items-center justify-center pr-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Step</span>
                      <span className="text-4xl font-bold tracking-tighter">{item.step}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ERMMethodologySection;
