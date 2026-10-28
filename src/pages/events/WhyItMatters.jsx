import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiAward, FiTarget, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
  const navigator = useNavigate()
  return (
    <section id="why-it-matters" className="relative py-16 overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark">
      
      {/* Feelpath Network Decor (Aesthetic Globs) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandGold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandNavy/10 dark:bg-brandAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Master Style Heading */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-brandGold uppercase tracking-[0.3em] mb-4 block">
              Core Value
            </span>
            <h2 className="mb-6 font-heading text-3xl md:text-4xl font-bold tracking-tighter">
              <span className="text-brandDark dark:text-white">Why our presence</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-brandAccent italic font-serif">
                matters to the community
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-brandDark/60 dark:text-white/60 text-lg mx-auto italic">
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
              className="h-full bg-white dark:bg-surfaceDark p-10 rounded-[2.5rem] shadow-lg border border-brandNavy/5 dark:border-brandAccent/15 hover:shadow-2xl hover:shadow-brandGold/10 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brandDark/5 dark:bg-white/5 text-brandGold text-2xl flex items-center justify-center rounded-2xl mb-8 group-hover:bg-gradient-to-br group-hover:from-brandGold group-hover:to-brandAccent group-hover:text-brandDark group-hover:scale-110 transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-brandDark dark:text-white mb-4 tracking-tight uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-brandDark/70 dark:text-white/70 leading-relaxed text-sm font-medium">
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
          className="mt-24 bg-gradient-to-r from-brandDark to-brandNavy dark:from-bgDark dark:to-surfaceDark rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl border border-white/5 relative overflow-hidden"
        >
          {/* Subtle Glow inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 mb-10 text-center md:mb-0 md:mr-10 md:text-left">
            <h3 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to elevate your <span className="text-brandAccent">career?</span>
            </h3>
            <p className="max-w-lg text-lg italic font-light leading-relaxed text-white/60">
              "Join thousands of audit professionals in our upcoming gatherings designed for self-discovery and growth."
            </p>
          </div>

          <button onClick={()=>navigator("/contact")} className="relative z-10 group whitespace-nowrap px-10 py-5 bg-gradient-to-r from-brandGold to-brandAccent text-brandDark font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:shadow-xl hover:shadow-brandGold/20 transition-all duration-300 flex items-center gap-3 active:scale-95">
            Let's Connect <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;