import React, { useState } from 'react';
import { Scan, CalendarClock, FileSearch, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImplementationRoadmap = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        {
            icon: Scan,
            step: "01",
            title: "Scoping & Survey",
            desc: "Define audit boundaries and identify high-risk areas for focused protection.",
            details: ["Boundary definition", "Risk identification", "Stakeholder mapping", "Timeline planning"],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            color: "#3B82F6"
        },
        {
            icon: CalendarClock,
            step: "02",
            title: "Strategic Planning",
            desc: "Create detailed work plan with resource allocation and timings.",
            details: ["Resource allocation", "Milestone setting", "Team assignment", "Communication plan"],
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
            color: "#10B981"
        },
        {
            icon: FileSearch,
            step: "03",
            title: "Evidence Fieldwork",
            desc: "Gather evidence through reviews, interviews, and observations.",
            details: ["Document review", "Staff interviews", "Process observation", "Technical testing"],
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
            color: "#F59E0B"
        },
        {
            icon: BarChart3,
            step: "04",
            title: "Analysis & Reporting",
            desc: "Identify gaps and provide recommendations for certification.",
            details: ["Gap analysis", "Risk scoring", "Remediation plan", "Executive summary"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            color: "#8B5CF6"
        }
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden sm:py-32 bg-surfaceLight dark:bg-bgDark" id="roadmap">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-brandAccent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-brandPrimary/5 rounded-full blur-[80px]" />
            </div>

            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14 mx-auto max-w-[1280px] relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 font-heading text-brandPrimary dark:text-brandAccent"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl lg:text-5xl"
                    >
                        The RiskMan Implementation Roadmap
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400"
                    >
                        Our structured methodology ensures seamless transition from assessment to compliance.
                    </motion.p>
                </div>

                {/* Interactive Process Flow */}
                <div className="relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-1 z-0">
                        <div className="w-full h-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 via-amber-500 to-purple-500"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </div>
                        {/* Animated dots */}
                        <motion.div
                            className="absolute w-3 h-3 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-brandAccent shadow-brandAccent/50"
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ left: 0 }}
                        />
                    </div>

                    {/* Steps Grid */}
                    <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, idx) => {
                            const isActive = activeStep === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                    className="relative"
                                >
                                    {/* Node circle */}
                                    <div className="flex justify-center mb-6">
                                        <div
                                            className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${isActive
                                                    ? 'scale-110 shadow-2xl'
                                                    : 'shadow-lg hover:scale-105'
                                                }`}
                                            style={{
                                                background: isActive
                                                    ? `linear-gradient(135deg, ${step.color}, ${step.color}cc)`
                                                    : 'white',
                                                boxShadow: isActive ? `0 20px 40px ${step.color}40` : undefined
                                            }}
                                        >
                                            {/* Pulse ring */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-full"
                                                    style={{ border: `2px solid ${step.color}` }}
                                                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            )}

                                            <step.icon
                                                className={`h-10 w-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-brandDark dark:text-brandPrimary'
                                                    }`}
                                            />

                                            {/* Step number badge */}
                                            <span
                                                className={`absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-all ${isActive
                                                        ? 'bg-white text-brandDark'
                                                        : 'bg-brandDark dark:bg-brandAccent text-white dark:text-brandDark'
                                                    }`}
                                            >
                                                {step.step}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div
                                        className={`p-6 rounded-2xl border transition-all duration-300 ${isActive
                                                ? 'bg-white dark:bg-surfaceDark border-transparent shadow-xl -translate-y-2'
                                                : 'bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/10'
                                            }`}
                                    >
                                        <h3 className="mb-2 text-lg font-bold text-center font-heading text-brandDark dark:text-white">
                                            {step.title}
                                        </h3>
                                        <p className="mb-4 text-sm text-center text-slate-600 dark:text-slate-400">
                                            {step.desc}
                                        </p>

                                        {/* Expanded content on hover */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    {/* Image */}
                                                    <div className="mb-4 overflow-hidden shadow-lg rounded-xl">
                                                        <img
                                                            src={step.image}
                                                            alt={step.title}
                                                            className="object-cover w-full h-32"
                                                        />
                                                    </div>

                                                    {/* Details list */}
                                                    <div className="space-y-2">
                                                        {step.details.map((detail, i) => (
                                                            <div key={i} className="flex items-center gap-2">
                                                                <CheckCircle2
                                                                    className="flex-shrink-0 w-4 h-4"
                                                                    style={{ color: step.color }}
                                                                />
                                                                <span className="text-xs font-medium text-brandDark dark:text-white">
                                                                    {detail}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Connection arrow - mobile only */}
                                    {idx < 3 && (
                                        <div className="flex justify-center my-4 lg:hidden">
                                            <ArrowRight className="w-6 h-6 rotate-90 text-slate-300 dark:text-white/20" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom progress indicator */}
                <div className="flex items-center justify-center gap-4 mt-16">
                    {steps.map((step, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === idx
                                    ? 'scale-150'
                                    : 'bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                                }`}
                            style={{
                                backgroundColor: activeStep === idx ? step.color : undefined
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImplementationRoadmap;
