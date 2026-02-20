
import React from 'react';
import { motion } from 'framer-motion';

import concurrentImg from "../../assets/images/rbia/ai.jpg"

const ConcurrentAuditHero = () => {
    const stats = [
        { number: "18+", label: "Years of Experience" },
        { number: "Global", label: "Delivery Network" },
        { number: "100%", label: "Process Assurance" }
    ];

    return (
        <section className="relative min-h-[90vh] flex items-center pt-10 pb-10 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brandGold/5 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brandNavy/10 rounded-full blur-[80px] pointer-events-none dark:opacity-100 opacity-30" />

            {/* Animated Rings */}
            <div className="absolute top-[100px] right-[-150px] w-[600px] h-[600px] border border-brandGold/10 rounded-full opacity-30 animate-[spin_25s_linear_infinite]" />
            <div className="absolute top-[150px] right-[-100px] w-[450px] h-[450px] border border-dashed border-brandAccent/5 rounded-full animate-[spin_35s_linear_infinite_reverse]" />

            <div className="container relative z-10 w-full px-6 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="max-w-[750px]">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-7"
                        >
                            <div className="w-10 h-[1px] bg-brandAccent" />
                            <span className="font-mono text-[0.7rem] tracking-[4px] uppercase text-brandAccent font-semibold">
                                Strategic Assurance
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-3xl md:text-4xl font-extrabold leading-[1.1] text-brandDark dark:text-brandLight mb-8 font-heading"
                        >
                            Concurrent Audit:<br />
                            <span className="text-transparent bg-gradient-to-r from-brandGold to-brandAccent bg-clip-text">
                                Assurance at the Speed of Business
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg font-light leading-relaxed text-brandNavy dark:text-white/70 max-w-[620px] mb-10 font-sans"
                        >
                            Transform your control environment from retrospective review to real-time risk mitigation. RiskMan's Concurrent Audit programs embed proactive oversight directly into your operational cycles, catching exceptions before they become liabilities.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="flex flex-wrap gap-8 md:gap-12"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="relative group">
                                    <div className="text-3xl font-bold leading-tight transition-transform duration-300 md:text-4xl text-brandDark dark:text-brandGold font-heading group-hover:scale-105">
                                        {stat.number}
                                    </div>
                                    <div className="text-[0.7rem] tracking-[1.5px] uppercase text-brandPrimary dark:text-white/70 font-medium mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-[600px] mx-auto lg:mx-0"
                    >
                        <div className="relative z-10 overflow-hidden border shadow-2xl rounded-2xl border-brandGold/20 bg-brandNavy/30 backdrop-blur-sm">
                            <img
                                src={concurrentImg}
                                alt="Concurrent Audit Visualization"
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brandDark/60 via-transparent to-transparent" />
                        </div>
                        {/* Decorative boxes */}
                        <div className="absolute w-24 h-24 border -top-6 -right-6 md:w-32 md:h-32 bg-brandGold/10 rounded-xl border-brandGold/20 -z-10" />
                        <div className="absolute w-32 h-32 border -bottom-6 -left-6 md:w-48 md:h-48 bg-brandPrimary/10 rounded-xl border-brandGold/10 -z-10 blur-sm" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ConcurrentAuditHero;
