import React from 'react';
import { testingItems } from './data';
import { motion } from 'framer-motion';
import testingImage from "../../assets/images/sox/testing.png";

function TestingSection() {
  return (
    // 1. py-24 ko kam karke py-12 ya 16 kijiye
    <section className="relative py-14 md:py-16 bg-bgLight dark:bg-bgDark overflow-hidden transition-colors duration-500">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandPrimary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* HEADER - mb-20 ko kam karke mb-12 kijiye */}
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded bg-brandDark text-brandAccent text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandAccent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandAccent"></span>
            </span>
            Continuous Validation
          </motion.div>

          <h2 className="mb-4 text-3xl md:text-5xl font-bold font-heading text-brandDark dark:text-white leading-tight">
            Rigorous Control <br /> 
            <span className="text-brandPrimary dark:text-brandAccent">Testing & Sustenance</span>
          </h2>

          <p className="max-w-2xl text-base md:text-lg text-brandDark/70 dark:text-brandLight/60 leading-relaxed border-l-4 border-brandAccent pl-5">
            RiskMan provides independent validation of your control environment,
            ensuring that IFC, SOX, and ICOFR frameworks operate effectively year-round.
          </p>
        </div>

        {/* CONTENT SPLIT GRID - gap-16 ko kam karke gap-8 md:gap-12 kijiye */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* LEFT: TESTING MODULES (Span 5) - space-y-8 ko space-y-4 kijiye */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            {testingItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative flex gap-5 p-5 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl transition-all hover:shadow-lg hover:border-brandAccent/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-brandDark dark:bg-brandPrimary/10 rounded-xl group-hover:bg-brandAccent transition-colors">
                  <div className="text-brandAccent group-hover:text-brandDark text-lg">
                    {item.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold font-heading text-brandDark dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brandDark/60 dark:text-brandLight/50 leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: IMAGE DASHBOARD (Span 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 sticky top-20">
            <div className="relative p-2 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl shadow-xl overflow-hidden">
              {/* Window Controls - Padding kam kiya */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-borderLight dark:border-borderDark bg-slate-50/50 dark:bg-transparent">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brandAccent/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brandAccent/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-brandAccent" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Audit_Dashboard.v2</span>
              </div>

              <img 
                src={testingImage} 
                alt="Audit Testing" 
                className="w-full h-auto rounded-b-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TestingSection;