import React from 'react';
import { motion } from 'framer-motion';

const ESGEvolutionTimeline = () => {
  const timelineData = [
    {
      period: "2000 - 2010",
      phase: "COMPLIANCE",
      icon: "🌱",
      gradient: "from-brandNavy via-brandPrimary to-brandPrimary",
      glow: "shadow-brandPrimary/20",
      features: ["Regulatory focus", "Risk mitigation", "Reporting burden"]
    },
    {
      period: "2010 - 2020",
      phase: "STRATEGY",
      icon: "🌊",
      gradient: "from-brandPrimary via-brandNavy to-brandDark",
      glow: "shadow-brandPrimary/20",
      features: ["Business integration", "Stakeholder value", "Efficiency gains"]
    },
    {
      period: "2020+",
      phase: "VALUE CREATION",
      icon: "☀️",
      gradient: "from-brandAccent via-brandGold to-brandAccent",
      glow: "shadow-brandAccent/30",
      features: ["Competitive advantage", "Innovation driver", "Enterprise value"]
    }
  ];

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark overflow-hidden transition-colors duration-500">
      {/* Background Brand Shapes */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-brandPrimary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="mb-24 text-left border-l-4 border-brandAccent pl-6">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brandAccent font-black tracking-widest uppercase text-sm"
          >
            Our Journey
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-4xl md:text-6xl font-black font-heading text-brandDark dark:text-brandLight uppercase tracking-tighter"
          >
            ESG <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Evolution</span> Timeline
          </motion.h3>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 relative">
          
         

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group pt-20 md:pt-0"
            >
              {/* Timeline Node (The Circle) */}
              {/* <div className="relative z-20 mb-12 hidden md:block">
                <motion.div 
                   whileHover={{ scale: 1.2 }}
                   className={`w-6 h-6 rounded-full bg-surfaceLight dark:bg-surfaceDark border-4 border-brandAccent shadow-[0_0_15px_rgba(255,192,0,0.5)] mx-auto`}
                />
              </div> */}

              {/* Unique Glass Card */}
              <div className={`
                relative mx-auto md:mx-0 p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500
                bg-gradient-to-b from-borderLight to-transparent dark:from-borderDark dark:to-transparent
                hover:from-brandAccent/50 group-hover:shadow-2xl ${item.glow}
              `}>
                <div className="bg-surfaceLight dark:bg-surfaceDark rounded-[2rem] p-8 h-full relative overflow-hidden">
                  
                  {/* Decorative Phase Number */}
                  <span className="absolute -right-4 -top-4 text-8xl font-black text-brandDark/[0.03] dark:text-brandLight/[0.03] select-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-2xl mb-6 shadow-lg`}>
                      {item.icon}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-black tracking-widest text-brandPrimary dark:text-brandAccent mb-1 uppercase">
                        {item.period}
                      </p>
                      <h4 className="text-2xl font-black font-heading text-brandDark dark:text-brandLight tracking-tight">
                        {item.phase}
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 group/item">
                          <div className="h-1.5 w-1.5 rounded-full bg-brandAccent transition-all group-hover/item:w-4" />
                          <span className="text-sm font-semibold text-brandDark/70 dark:text-brandLight/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGEvolutionTimeline;