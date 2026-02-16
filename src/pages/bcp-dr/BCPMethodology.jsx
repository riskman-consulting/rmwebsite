import React from "react";
import { motion } from "framer-motion";
import bcp_approach from "../../assets/images/bcp/bcp_approach.png";
 
const phases = [
  { title: "Initiation", desc: "Establish project scope, secure support, and identify stakeholders." },
  { title: "Analysis", desc: "Structured analysis ranking systems using Maximum Tolerable Downtime (MTD)." },
  { title: "Recovery", desc: "Plans to restore facilities, supply chains, users, and technologies." },
  { title: "Strategy", desc: "Model outage scenarios to design service recovery and fallback centers." },
  { title: "Documentation", desc: "Create Resumption, IT Contingency, Cyber Response, and Emergency plans." },
  { title: "Validation", desc: "Walk-throughs, checklist testing, and simulations validate effectiveness." },
  { title: "Maintenance", desc: "Ongoing monitoring, reviews, and awareness training for preparedness." },
];
 
const BCPMethodology = () => {
  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-bgDark">
      <div className="container px-6 lg:px-12">
 
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="h-1.5 w-16 bg-brandAccent mb-4 rounded-full" />
          <h2 className="text-3xl font-bold leading-tight md:text-4xl font-heading text-brandDark dark:text-white">
            7-Phase BCP/DR <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              Delivery Lifecycle
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-brandDark/70 dark:text-brandLight/60">
            Our structured methodology ensures operational resilience through a
            comprehensive lifecycle designed for measurable recovery readiness.
          </p>
        </div>
 
        {/* PHASE LIST — FULL WIDTH */}
       <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
  {phases.map((p, i) => (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="p-6 transition-all bg-white border shadow-sm group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandAccent/50 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-start gap-5">
        {/* Step Number */}
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-black border rounded-xl bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border-brandPrimary/20 dark:border-brandAccent/20">
          {String(i + 1).padStart(2, "0")}
        </div>
 
        <div>
          <h3 className="text-lg font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brandDark/60 dark:text-brandLight/50">
            {p.desc}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
        {/* IMAGE — AFTER CONTENT */}
        <div className="max-w-5xl mt-14">
          <div className="relative group">
            <div className="absolute transition-opacity rounded-full opacity-50 -inset-4 bg-brandPrimary/10 blur-3xl group-hover:opacity-80" />
 
            <div className="relative p-2 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[2rem] shadow-2xl overflow-hidden">
             
              {/* Browser bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-borderLight dark:border-borderDark bg-slate-50 dark:bg-bgDark/30">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-brandAccent/40" />
                  <div className="w-2 h-2 rounded-full bg-brandAccent/70" />
                  <div className="w-2 h-2 rounded-full bg-brandAccent" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">
                  Methodology_Visual_Map
                </span>
              </div>
 
              <img
                src={bcp_approach}
                alt="BCP Methodology Approach"
                className="w-full h-auto rounded-b-xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default BCPMethodology;
 