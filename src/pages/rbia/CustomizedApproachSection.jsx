import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PHASES = [
  {
    step: 1,
    title: "Scope",
    description: `Conduct interviews with process owners to understand current "as-is" processes and identify key concern areas. Document processes and validate understanding while preparing comprehensive audit work programs for all specific areas.`,
    color: "from-brandPrimary to-brandNavy",
    accent: "#004080",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    )
  },
  {
    step: 2,
    title: "Analyze",
    description:
      "Review processes to identify and source risks, prioritizing them based on likelihood and potential business impact. Evaluate control design for efficiency and effectiveness, benchmarking against leading practices and regulatory standards.",
    color: "from-brandNavy to-brandPrimary",
    accent: "#003366",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    )
  },
  {
    step: 3,
    title: "Test & Recommend",
    description:
      "Determine testing approaches and sample sizes, utilizing data analytics tools for large and complex data sets. Articulate exceptions and deficiencies, quantifying business impact to prioritize critical gaps and weaknesses.",
    color: "from-brandPrimary to-brandAccent",
    accent: "#FFC000",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  },
  {
    step: 4,
    title: "Design & Implement",
    description:
      "Formulate remediation action plans and finalize the content of recommendations for senior management discussion. Support recommendations with clear findings and conclusions, ensuring management acceptance of the proposed action plans.",
    color: "from-brandAccent to-brandGold",
    accent: "#FFB800",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    )
  },
  {
    step: 5,
    title: "Sustain",
    description:
      "Monitor the implementation of recommendations and follow up on action points from previous reports. Ensure long-term value by maintaining a continuous focus on process improvement and real business benefits.",
    color: "from-brandGold to-brandPrimary",
    accent: "#FFB800",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    )
  }
]

export default function CustomizedApproachSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const radius = 240
  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    }
  }

  return (
    <section className="relative px-6 py-24 overflow-hidden transition-colors lg:py-40 bg-bgLight dark:bg-bgDark">
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#004080_1.5px,transparent_1.5px)] [background-size:60px_60px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        {/* HEADER SECTION */}
        <div className="mb-20 text-center lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="px-5 py-2 mb-6 text-[10px] font-black tracking-[0.4em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border border-brandPrimary/20 dark:border-brandAccent/20">
              Operational Cycle
            </span>
            <h2 className="mb-8 text-3xl font-black leading-none tracking-tighter lg:text-5xl text-brandDark dark:text-white font-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary via-brandNavy to-brandGold">
                Customized Approach
              </span>{" "}
              for your needs.
            </h2>
            <p className="max-w-2xl text-lg font-light leading-relaxed lg:text-xl text-slate-500 dark:text-slate-400">
              This approach provides a tailored methodology to evaluate risks and enhance operational effectiveness across your organization's unique landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT: CIRCULAR DIAGRAM */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px] w-full">
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              <motion.circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-slate-200 dark:text-slate-800"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke={`url(#brandGradient)`}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeIndex + 1) / PHASES.length }}
                transition={{ duration: 0.8, ease: "circOut" }}
              />
              <defs>
                <linearGradient
                  id="brandGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#004080" />
                  <stop offset="100%" stopColor="#FFC000" />
                </linearGradient>
              </defs>
            </svg>

            {PHASES.map((phase, index) => {
              const pos = getPosition(index, PHASES.length)
              const isActive = activeIndex === index

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="absolute z-20 focus:outline-none group"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {isActive && (
                      <motion.div
                        layoutId="active-highlight"
                        className={`absolute -inset-6 rounded-full bg-gradient-to-br ${phase.color} opacity-10 blur-xl`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}

                    <div
                      className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 border-2 shadow-xl ${
                        isActive
                          ? `bg-gradient-to-br ${phase.color} border-white dark:border-brandNavy scale-110 text-white`
                          : "bg-surfaceLight dark:bg-surfaceDark border-slate-200 dark:border-slate-800 text-slate-400 group-hover:border-brandPrimary"
                      }`}
                    >
                      {phase.icon}
                    </div>

                    <div
                      className={`absolute top-full mt-6 whitespace-nowrap px-4 py-1.5 text-[9px] font-black tracking-[0.2em] uppercase rounded-full bg-brandDark text-white transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {phase.title}
                    </div>
                  </div>
                </motion.button>
              )
            })}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center justify-center w-40 h-40 border-2 rounded-full shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-slate-100 dark:border-slate-800 backdrop-blur-md">
                <div className="text-center">
                  <span className="block mb-1 text-5xl font-black leading-none text-brandPrimary dark:text-brandAccent font-heading">
                    0{PHASES[activeIndex].step}
                  </span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    Current Phase
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT REVEAL */}
          <div className="relative flex flex-col justify-center min-h-[450px]">
            <div className="flex items-center justify-center gap-4 px-4 mb-12 lg:hidden">
              {PHASES.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all ${
                    activeIndex === index
                      ? `bg-gradient-to-br ${phase.color} border-white dark:border-brandNavy text-white scale-110 shadow-lg`
                      : "bg-surfaceLight dark:bg-surfaceDark border-slate-200 dark:border-slate-800 text-slate-400"
                  }`}
                >
                  <span className="text-sm font-black">{phase.step}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-surfaceLight dark:bg-surfaceDark border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-10 lg:p-16 shadow-[0_40px_100px_-20px_rgba(0,31,63,0.1)] dark:shadow-none relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 text-[15rem] font-black text-slate-50 dark:text-white/[0.01] leading-none pointer-events-none select-none font-heading">
                  {PHASES[activeIndex].step}
                </div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-br ${PHASES[activeIndex].color} text-white mb-10 shadow-lg shadow-brandPrimary/10`}
                  >
                    <div className="p-1 rounded-md bg-white/20">
                      {PHASES[activeIndex].icon}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                      Step 0{PHASES[activeIndex].step}
                    </span>
                  </div>

                  <h3 className="mb-8 text-3xl font-black leading-tight tracking-tighter lg:text-5xl text-brandDark dark:text-white font-heading">
                    {PHASES[activeIndex].title}
                  </h3>

                  <p className="mb-12 text-lg font-light leading-relaxed lg:text-xl text-slate-600 dark:text-slate-400">
                    {PHASES[activeIndex].description}
                  </p>

                  <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                    <button
                      className={`px-10 py-5 bg-brandDark dark:bg-brandAccent dark:text-brandDark text-white font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                    >
                      Detailed Analysis
                    </button>

                    <button
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % PHASES.length)
                      }
                      className="group flex items-center gap-3 text-brandPrimary dark:text-brandAccent font-bold text-xs uppercase tracking-[0.3em]"
                    >
                      {activeIndex === PHASES.length - 1
                        ? "Start Loop Over"
                        : "Next Strategic Phase"}
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* METRIC GRID */}
        <div className="grid grid-cols-1 gap-8 mt-24 lg:mt-40 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Operational Efficiency", value: "+42%" },
            { label: "Critical Gaps Found", value: "100%" },
            { label: "Client ROI", value: "4.8x" },
            { label: "Governance Rating", value: "AAA" }
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-surfaceLight dark:bg-surfaceDark border border-slate-100 dark:border-slate-800 text-center hover:border-brandGold/30 transition-colors"
            >
              <div className="mb-3 text-4xl font-black tracking-tighter lg:text-5xl text-brandDark dark:text-brandAccent font-heading">
                {metric.value}
              </div>
              <div className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
