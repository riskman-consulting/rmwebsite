import React from 'react';
import { motion } from 'framer-motion';
import { Target, Settings, Radio, Zap, RefreshCcw, ArrowRight } from 'lucide-react';
import InfographicNote from './InfographicNote';

const OperatingModel = () => {
    const phases = [
        { number: "01", icon: <Target className="text-brandGold" size={24} />, title: "Risk-Based Scoping", desc: "Transaction universe identification based on materiality, volume, and inherent risk" },
        { number: "02", icon: <Settings className="text-brandAccent" size={24} />, title: "Control Design", desc: "Preventive and detective controls mapped to transaction lifecycle checkpoints" },
        { number: "03", icon: <Radio className="text-brandGold" size={24} />, title: "Real-Time Review", desc: "Near-real-time transaction monitoring with defined review cadence and criteria" },
        { number: "04", icon: <Zap className="text-brandAccent" size={24} />, title: "Exception Management", desc: "Identification, validation, root cause analysis, and structured escalation" },
        { number: "05", icon: <RefreshCcw className="text-brandGold" size={24} />, title: "Feedback & Improvement", desc: "Insights fed back into business process and control design for continuous enhancement" },
    ];

    return (
        <section id="model" className="relative z-10 overflow-hidden transition-colors py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none" />

            <div className="container relative z-10 px-6 lg:px-12">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Operating Model
                </div>

                <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandDark dark:text-brandLight">
                    How RiskMan Designs & Delivers
                </h2>
                <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                <p className="text-lg font-light text-brandNavy dark:text-white/70 mb-16 leading-relaxed max-w-[800px] font-sans">
                    RiskMan's Concurrent Audit operating model is designed for scalability, precision, and global applicability. Each engagement follows a structured lifecycle — ensuring that audit programs evolve with the organization's risk profile.
                </p>

                <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center h-full p-8 text-center transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm border-borderLight dark:border-borderDark rounded-2xl group-hover:bg-brandGold/10 group-hover:border-brandGold/30 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <div className=" text-[0.6rem] tracking-[3px] text-brandDark dark:text-brandAccent uppercase mb-6 font-bold opacity-60 group-hover:opacity-100">
                                    Phase {phase.number}
                                </div>
                                <div className="flex items-center justify-center mb-6 transition-all border rounded-full shadow-lg w-14 h-14 border-borderLight dark:border-borderDark bg-bgLight dark:bg-bgDark group-hover:border-brandGold">
                                    {phase.icon}
                                </div>
                                <div className="font-heading text-[0.95rem] font-bold text-brandDark dark:text-brandAccent mb-3 leading-tight">
                                    {phase.title}
                                </div>
                                <div className="font-sans text-xs font-semibold leading-relaxed text-brandNavy dark:text-white/70 opacity-60">
                                    {phase.desc}
                                </div>
                            </div>

                            {index < phases.length - 1 && (
                                <div className="absolute z-20 hidden transition-colors -translate-y-1/2 md:flex -right-3 top-1/2 text-brandDark/10 dark:brandGold group-hover:text-brandGold dark:group-hover:text-brandLight">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center gap-4 mt-10"
                >
                    <div className="flex items-center w-full max-w-2xl gap-4 px-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brandAccent/30" />
                        <div className="text-[0.7rem] font-mono uppercase tracking-[3px] text-brandDark dark:text-brandAccent flex items-center gap-3">
                            <RefreshCcw size={14} className="animate-spin-slow" /> Continuous Improvement Loop
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brandAccent/30" />
                    </div>
                </motion.div>
{/* 
                <InfographicNote title="Execution Blueprint" type="lightbulb">
                    A detailed <strong>Concurrent Audit Lifecycle diagram</strong> — illustrating the five-phase operating model with integrated feedback loops — is available as a full-color process flow reference.
                </InfographicNote> */}
            </div>
        </section>
    );
};

export default OperatingModel;
