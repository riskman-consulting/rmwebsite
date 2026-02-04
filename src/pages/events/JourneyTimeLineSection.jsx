import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Target, TrendingUp, Building2, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
 
const RiskManTimeline = () => {
  const [viewMode, setViewMode] = useState('third'); // 'first' or 'third'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
 
  const timelineData = {
    first: [
      { year: "2020", title: "The Foundation", impact: "Core Skills Acquisition", icon: Building2, description: "My journey with RiskMan began in 2020 as an Article Assistant. I was eager to bridge the gap between academic theory and real-world risk management. Working closely with Arpit Sir, I quickly aligned with his vision: transforming traditional audits into strategic, business-oriented risk solutions." },
      { year: "2020-21", title: "Resilience in Crisis", impact: "Adaptive Agility", icon: Target, description: "The pandemic brought unprecedented uncertainty. While many paused, RiskMan pivoted. Transitioning to remote work taught me that ownership isn't about where you sit, but the discipline you bring to your deliverables." },
      { year: "2021-23", title: "Vertical Expansion", impact: "10+ Industry Expertise", icon: TrendingUp, description: "Exposure defines expertise. I dove into diverse industries—from the lightning-fast world of Quick Commerce to the precision of Pharmaceuticals and the complexity of Manufacturing." },
      { year: "2023-24", title: "The Transition", impact: "Strategic Consulting", icon: Briefcase, description: "Completing my article-ship marked a new chapter. Transitioning to a Consultant meant moving from executing tasks to owning client relationships and pursuing global certifications." },
      { year: "2025-Now", title: "Leadership & Vision", impact: "Team Leadership & Scale", icon: Award, description: "Now as a Manager, I lead a team of 10+, focusing on mentoring the next generation of risk professionals while scaling our operational excellence." },
    ],
    third: [
      { year: "2020", title: "Strategic Onboarding", impact: "Foundational Excellence", icon: Building2, description: "He entered RiskMan in 2020 as an Article Assistant, immediately showing a penchant for identifying systemic risks and crafting a business-aligned risk management identity." },
      { year: "2020-21", title: "The Resilience Phase", impact: "Operational Continuity", icon: Target, description: "The COVID-19 pandemic served as a crucible. He demonstrated exceptional adaptability, ensuring commitment to client delivery remained unshaken during the shift to remote operations." },
      { year: "2021-23", title: "Industry Mastery", impact: "Multi-Sector Dominance", icon: TrendingUp, description: "He expanded his reach across a spectrum of sectors, becoming a versatile asset. His ability to navigate nuances—from IT to Manufacturing—allowed for high-impact audit solutions." },
      { year: "2023-24", title: "Consultative Elevation", impact: "Engagement Ownership", icon: Briefcase, description: "Transitioning into a Consultant role, this period was marked by increased independence and a focus on global standards like CIA and CISA to align with the firm's goals." },
      { year: "2025-Now", title: "Managerial Leadership", impact: "Strategic Leadership", icon: Award, description: "Now a dual-certified professional serving as Manager, he lead a team of over 10 professionals, ensuring quality delivery across a diverse portfolio of clients." },
    ]
  };
 
  const currentTimeline = timelineData[viewMode];
  const currentItem = currentTimeline[currentIndex];
 
  return (
    <section
      className="relative min-h-screen px-4 py-24 overflow-hidden transition-colors duration-500 sm:px-8 bg-surfaceLight dark:bg-bgDark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto max-w-7xl">
       
        {/* Navigation & Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border rounded-full bg-brandLight dark:bg-surfaceDark border-borderLight dark:border-borderDark text-brandPrimary dark:text-brandAccent"
          >
            <Sparkles className="w-3 h-3" />
            Professional Journey
          </motion.div>
 
          <h1 className="mb-8 text-6xl font-black tracking-tighter md:text-7xl text-brandDark dark:text-brandLight font-heading">
            How it <span className="italic text-brandPrimary dark:text-brandAccent">Began</span>
          </h1>
 
          {/* Perspective Switcher */}
          <div className="flex p-1 border rounded-full shadow-inner bg-brandLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
            {['third', 'first'].map((mode) => (
              <button
                key={mode}
                onClick={() => { setViewMode(mode); setCurrentIndex(0); }}
                className={`px-8 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                  viewMode === mode
                  ? 'bg-white dark:bg-brandPrimary shadow-md text-brandPrimary dark:text-white'
                  : 'text-brandDark/40 dark:text-brandLight/40'
                }`}
              >
                {mode === 'third' ? 'Perspective' : 'Personal'}
              </button>
            ))}
          </div>
        </div>
 
        {/* Timeline Layout */}
        <div className="relative">
         
          {/* Connecting Path Line */}
          <div className="absolute inset-0 z-0 hidden pointer-events-none lg:block">
            <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M 50 700 L 1150 100"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="12 12"
                className="text-brandDark/10 dark:text-brandAccent/20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>
 
          {/* Milestone Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-4">
            {currentTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:mt-64' : 'lg:mt-0'}`}
              >
                {/* Year and Label */}
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-brandPrimary dark:text-brandAccent block mb-1">
                    {item.title}
                  </span>
                  <h2 className="text-5xl font-black leading-none text-brandDark dark:text-brandLight font-heading">
                    {item.year.split('-')[0]}
                  </h2>
                </div>
 
                {/* Content Block */}
                <div className="relative group">
                  <div className="p-6 transition-colors duration-500 bg-white border shadow-xl dark:bg-surfaceDark border-borderLight dark:border-borderDark dark:shadow-none hover:border-brandPrimary dark:hover:border-brandAccent">
                    <item.icon className="w-8 h-8 mb-4 text-brandPrimary dark:text-brandAccent" />
                    <p className="text-[12px] leading-relaxed text-brandDark/70 dark:text-brandLight/70 font-medium">
                      {item.description}
                    </p>
                   
                    {/* Impact Tag */}
                    <div className="pt-4 mt-4 border-t border-borderLight dark:border-borderDark">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brandPrimary dark:text-brandAccent">
                        {item.impact}
                      </span>
                    </div>
                  </div>
 
                  {/* Path Dot Connector (Desktop only) */}
                  <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-brandLight dark:bg-bgDark border-2 border-brandPrimary dark:border-brandAccent z-20 hidden lg:block shadow-[0_0_15px_rgba(255,192,0,0.3)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Footer Stats / Corporate Style */}
        <div className="grid grid-cols-2 gap-8 pt-12 mt-32 border-t lg:grid-cols-4 border-borderLight dark:border-borderDark">
          <Stat value="15+" label="Strategic Clients" />
          <Stat value="10+" label="Global Industries" />
          <Stat value="CIA/CISA" label="Gold Standards" />
          <div className="flex flex-col justify-center text-right lg:text-left">
             <p className="text-[10px] font-bold uppercase tracking-widest text-brandDark/40 dark:text-brandLight/40">Portfolio Data</p>
             <p className="text-sm font-bold text-brandPrimary dark:text-brandAccent font-heading">www.riskman.in</p>
          </div>
        </div>
      </div>
 
      {/* Background Text Accent */}
      <div className="absolute -bottom-20 -left-20 text-[15rem] font-black text-brandDark/[0.02] dark:text-brandLight/[0.02] select-none pointer-events-none font-heading">
        RISK
      </div>
    </section>
  );
};
 
const Stat = ({ value, label }) => (
  <div className="text-left">
    <h4 className="mb-2 text-4xl font-black leading-none text-brandDark dark:text-brandLight font-heading">{value}</h4>
    <p className="text-[10px] font-bold uppercase tracking-widest text-brandDark/40 dark:text-brandLight/40">{label}</p>
  </div>
);
 
export default RiskManTimeline;
 