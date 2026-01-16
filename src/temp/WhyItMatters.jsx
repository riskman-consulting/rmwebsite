import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiAward, FiTarget, FiArrowRight } from 'react-icons/fi';
 
const WHY_IT_MATTERS = [
  {
    title: "Networking",
    description: "Connect with industry leaders and peers to share insights and build lasting professional relationships.",
    icon: <FiUsers />
  },
  {
    title: "Innovation",
    description: "Stay ahead of the curve with the latest audit technologies and methodologies.",
    icon: <FiCpu />
  },
  {
    title: "Certification",
    description: "Earn CPE credits and enhance your professional credentials with expert-led workshops.",
    icon: <FiAward />
  },
  {
    title: "Strategy",
    description: "Learn how to align internal audit with organizational strategy for maximum impact.",
    icon: <FiTarget />
  }
];
 
const WhyItMatters = () => {
  return (
    <section id="why-it-matters" className="py-32 bg-surfaceLight dark:bg-surfaceDark relative overflow-hidden transition-colors duration-500">
     
      {/* Feelpath Network Decor (Aesthetic Globs) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#003366]/10 dark:bg-[#FFC000]/5 rounded-full blur-[120px] pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
       
        {/* Master Style Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.3em] mb-4 block">
              Core Value
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              <span className="text-[#001F3F] dark:text-white">Why our presence</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif">
                matters to the community
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[#001F3F]/60 dark:text-white/60 text-lg mx-auto italic">
              "Our events are more than just meetings—they are catalysts for professional growth, embodiment, and shared innovation."
            </p>
          </motion.div>
        </div>
 
        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_IT_MATTERS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#001A33] p-10 rounded-[2.5rem] shadow-lg border border-[#003366]/5 dark:border-[#FFC000]/15 hover:shadow-2xl hover:shadow-[#FFB800]/10 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#001F3F]/5 dark:bg-white/5 text-[#FFB800] text-2xl flex items-center justify-center rounded-2xl mb-8 group-hover:bg-gradient-to-br group-hover:from-[#FFB800] group-hover:to-[#FFC000] group-hover:text-[#001F3F] group-hover:scale-110 transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#001F3F] dark:text-white mb-4 tracking-tight uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-[#001F3F]/70 dark:text-white/70 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
 
        {/* Branded Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-[#001F3F] to-[#003366] dark:from-[#000d1a] dark:to-[#001A33] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl border border-white/5 relative overflow-hidden"
        >
          {/* Subtle Glow inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC000]/10 rounded-full blur-[80px]"></div>
         
          <div className="mb-10 md:mb-0 md:mr-10 text-center md:text-left relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">
              Ready to elevate your <span className="text-[#FFC000]">career?</span>
            </h3>
            <p className="text-white/60 text-lg font-light italic leading-relaxed max-w-lg">
              "Join thousands of audit professionals in our upcoming gatherings designed for self-discovery and growth."
            </p>
          </div>
 
          <button className="relative z-10 group whitespace-nowrap px-10 py-5 bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:shadow-xl hover:shadow-[#FFB800]/20 transition-all duration-300 flex items-center gap-3 active:scale-95">
            See All Dates <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
 
export default WhyItMatters;
 