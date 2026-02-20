import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Rocket, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

const ESGEvolutionTimeline = () => {
    const timelineData = [
        {
            period: "2000 - 2010",
            phase: "COMPLIANCE",
            icon: ShieldCheck, // Changed to Shield for Compliance/Risk
            features: [
                "Meets mandatory ESG regulations",
                "Reduces regulatory risk exposure",
                "Streamlines reporting burden"
            ],
            idealFor: "Ideal for early-stage ESG programs",
            // Neutral / Blue-Grey
            colorClass: "text-slate-600 dark:text-slate-400",
            bgClass: "bg-slate-100 dark:bg-slate-800",
            borderClass: "border-slate-300 dark:border-slate-700",
            shadowClass: "shadow-slate-200/50 dark:shadow-slate-900/50",
            iconBgClass: "bg-slate-200 dark:bg-slate-700",
            timelineDotClass: "bg-slate-400 dark:bg-slate-600"
        },
        {
            period: "2010 - 2020",
            phase: "STRATEGY",
            icon: BarChart3, // Changed to BarChart for Strategy/Growth
            features: [
                "Integrates ESG into business core",
                "Reduces operational ESG cost",
                "Enhances stakeholder value"
            ],
            idealFor: "For scaling organizations",
            // Growth Blue / Teal
            colorClass: "text-brandPrimary dark:text-blue-400",
            bgClass: "bg-blue-50 dark:bg-blue-900/30",
            borderClass: "border-brandPrimary/30 dark:border-blue-500/30",
            shadowClass: "shadow-brandPrimary/20 dark:shadow-blue-900/30",
            iconBgClass: "bg-blue-100 dark:bg-blue-800",
            timelineDotClass: "bg-brandPrimary dark:bg-blue-500"
        },
        {
            period: "2020+",
            phase: "VALUE CREATION",
            icon: Rocket,
            features: [
                "Delivers competitive advantage",
                "Drives continuous innovation",
                "Direct EBITDA and valuation impact"
            ],
            idealFor: "For ESG-led enterprises",
            // Accent / Gold
            colorClass: "text-brandAccent dark:text-amber-400",
            bgClass: "bg-amber-50 dark:bg-amber-900/20",
            borderClass: "border-brandAccent/30 dark:border-amber-500/30",
            shadowClass: "shadow-brandAccent/20 dark:shadow-amber-900/30",
            iconBgClass: "bg-amber-100 dark:bg-amber-800",
            timelineDotClass: "bg-brandAccent dark:bg-amber-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 overflow-hidden font-sans bg-white dark:bg-bgDark">

            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:from-transparent dark:via-blue-950/10 dark:to-transparent" />

            <div className="container relative z-10 px-6 mx-auto lg:px-12">

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl font-heading text-brandDark dark:text-surfaceLight">
                            The Evolution of ESG
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                            From mandatory compliance to a core driver of
                            <span className="font-semibold text-brandPrimary dark:text-blue-400"> strategic value</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Connecting Line (Progress Line) */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[16.666%] right-[16.666%] h-1 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden z-0">
                        <motion.div
                            className="h-full bg-gradient-to-r from-slate-400 via-brandPrimary to-brandAccent"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                        {timelineData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="relative flex flex-col items-center group"
                                >
                                    {/* Step Indicator Dot (Desktop only - sits on the line) */}
                                    <div className={`hidden md:flex absolute top-[3.75rem] z-20 w-6 h-6 rounded-full border-4 border-white dark:border-bgDark ${item.timelineDotClass} shadow-sm`} />

                                    {/* Card */}
                                    <div className={`
                                w-full bg-white dark:bg-surfaceDark/50 backdrop-blur-sm
                                rounded-2xl border ${item.borderClass}
                                shadow-lg ${item.shadowClass}
                                transition-all duration-300
                                hover:-translate-y-2 hover:shadow-xl
                                p-8 flex flex-col h-full
                                relative overflow-hidden
                            `}>
                                        {/* Top Highlight Bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1.5 ${item.timelineDotClass}`} />

                                        {/* Icon & Phase Header */}
                                        <div className="flex flex-col items-center mb-6 text-center">
                                            <div className={`w-16 h-16 rounded-2xl ${item.iconBgClass} flex items-center justify-center mb-4 text-2xl shadow-inner group-hover:rotate-[10deg] transition-transform duration-500 ease-in-out`}>
                                                <Icon size={32} className={item.colorClass} strokeWidth={2} />
                                            </div>

                                            <span className="mb-2 text-sm font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                                                {item.period}
                                            </span>
                                            <h3 className={`text-2xl font-bold ${item.colorClass} font-heading`}>
                                                {item.phase}
                                            </h3>
                                        </div>

                                        {/* Features List */}
                                        <ul className="flex-grow mb-8 space-y-4">
                                            {item.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start text-left">
                                                    <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.timelineDotClass}`} />
                                                    <span className="text-[0.95rem] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* "Ideal For" Micro-Context */}
                                        <div className={`mt-auto pt-6 border-t ${item.borderClass} w-full text-center`}>
                                            <p className="mb-1 text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                                                Who This Is For
                                            </p>
                                            <p className={`text-sm font-medium ${item.colorClass}`}>
                                                {item.idealFor}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default ESGEvolutionTimeline;
