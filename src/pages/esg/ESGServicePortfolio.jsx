import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ESGServicePortfolio = () => {
  const [activeService, setActiveService] = useState(null);

  const services = {
    strategy: {
      number: 1,
      title: "Strategy & Materiality",
      icon: "📊",
      gradient: "from-brandPrimary to-brandNavy",
      description: "Develop a comprehensive ESG strategy through rigorous double materiality assessment and strategic target setting.",
      offerings: ["Double Materiality", "Stakeholder Mapping", "SDG Alignment", "Roadmap Development"]
    },
    climate: {
      number: 2,
      title: "Climate & GHG Management",
      icon: "🌡️",
      gradient: "from-brandNavy to-brandDark",
      description: "Comprehensive climate risk assessment and GHG emissions management supporting your net-zero journey.",
      offerings: ["Scope 1-2-3 Inventory", "TCFD Implementation", "SBTi Alignment", "Net-Zero Roadmap"]
    },
    reporting: {
      number: 3,
      title: "Reporting & Disclosure",
      icon: "📋",
      gradient: "from-brandAccent to-brandGold",
      description: "Navigate complex global disclosure requirements (CSRD, BRSR, ISSB) with expert guidance and precision.",
      offerings: ["CSRD/ESRS", "BRSR Reporting", "GRI Standards", "ISSB Implementation"]
    },
    governance: {
      number: 4,
      title: "Governance & Operating Model",
      icon: "⚖️",
      gradient: "from-brandDark to-brandNavy",
      description: "Design and implement robust governance structures with clear accountability and performance management.",
      offerings: ["Board Oversight", "Committee Design", "Policy Frameworks", "Incentive Alignment"]
    },
    controls: {
      number: 5,
      title: "Controls & Assurance",
      icon: "🔒",
      gradient: "from-brandGold to-brandAccent",
      description: "Build assurance-ready ESG programs with robust internal controls, data governance, and verification processes.",
      offerings: ["COSO Controls", "Data Governance", "Control Testing", "Assurance Readiness"]
    },
    capability: {
      number: 6,
      title: "Capability Building",
      icon: "🎓",
      gradient: "from-brandPrimary to-brandDark",
      description: "Build lasting internal capabilities through tailored training programs for executives and operational teams.",
      offerings: ["Executive Immersion", "Board Education", "Practitioner Certs", "Framework Training"]
    }
  };

  const capabilities = [
    { icon: "🌍", text: "Global Delivery" },
    { icon: "🏭", text: "Industry Expertise" },
    { icon: "💻", text: "Tech Enabled" },
    { icon: "🤝", text: "Partnership" }
  ];

  return (
    <section className="py-12 lg:py-20 bg-bgLight dark:bg-bgDark overflow-hidden relative transition-colors duration-500 min-h-screen flex flex-col justify-center">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brandPrimary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brandGold rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] font-black tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-2 block">
            Service Architecture
          </motion.span>
          <h2 className="font-heading font-black text-brandDark dark:text-white text-3xl lg:text-5xl leading-tight">
            Sustainability & ESG Portfolio
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Reduced Height Hexagonal Grid */}
          <div className="hidden lg:block relative h-[450px] mb-12">
            {/* Center Hub */}
            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-brandDark border-4 border-brandGold/40 flex flex-col items-center justify-center shadow-xl">
              <span className="text-3xl mb-1">🎯</span>
              <span className="text-[8px] font-black text-brandGold uppercase">Integrated</span>
              <span className="text-sm font-black text-white uppercase">Excellence</span>
            </div>

            {/* Pulsing Connector Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {Object.keys(services).map((_, i) => (
                <line 
                  key={i} x1="50%" y1="50%" 
                  x2={`${50 + 30 * Math.cos((i * 60 * Math.PI) / 180)}%`} 
                  y2={`${50 + 30 * Math.sin((i * 60 * Math.PI) / 180)}%`} 
                  stroke="currentColor" className="text-brandDark dark:text-brandLight" strokeWidth="1" strokeDasharray="5,5" 
                />
              ))}
            </svg>

            {/* Scaled Nodes */}
            {Object.entries(services).map(([key, service], i) => (
              <motion.div 
                key={key}
                onMouseEnter={() => setActiveService(key)}
                onMouseLeave={() => setActiveService(null)}
                className="absolute w-36 h-36 cursor-pointer group"
                style={{
                  top: `${50 + 30 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                  left: `${50 + 30 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-full h-full rounded-[2rem] p-4 bg-gradient-to-br ${service.gradient} border border-white/10 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-brandGold/60`}>
                   <div className="text-3xl mb-2">{service.icon}</div>
                   <h4 className="text-[9px] font-black text-white uppercase tracking-tighter leading-tight">{service.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Panel - Slim Design */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div 
                  key={activeService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-8 rounded-[2.5rem] bg-brandDark border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center gap-8 text-white"
                >
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-brandGold/10 flex items-center justify-center text-3xl">
                        {services[activeService].icon}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">{services[activeService].title}</h3>
                    </div>
                    <p className="text-brandLight/60 text-sm italic leading-relaxed">
                      "{services[activeService].description}"
                    </p>
                  </div>
                  <div className="lg:w-1/2 grid grid-cols-2 gap-3 w-full">
                    {services[activeService].offerings.map((offering, i) => (
                      <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brandGold shrink-0" />
                        <span className="text-[10px] font-bold text-white uppercase truncate">{offering}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full text-brandDark/20 dark:text-white/10 font-black text-sm uppercase tracking-[8px]">
                  Hover to view modules
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Mini-Capabilities */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:gap-12 pt-8 border-t border-brandDark/5">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-xl">{cap.icon}</div>
                <span className="text-[9px] font-black text-brandDark dark:text-brandLight uppercase tracking-widest">{cap.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGServicePortfolio;