import React, { useState } from 'react';
import { Handshake, ShieldCheck, Gauge, Globe, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CompetitiveAdvantages = () => {
    const [activeCard, setActiveCard] = useState(null);

    const advantages = [
        {
            icon: Handshake,
            title: "Trust Building",
            desc: "Demonstrates a verified commitment to security for partners and global clients.",
            stat: "95%",
            statLabel: "Client Retention",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
            color: "#3B82F6",
            features: ["Partner confidence", "Brand credibility", "Client loyalty"]
        },
        {
            icon: ShieldCheck,
            title: "Risk Reduction",
            desc: "Minimizes data breaches and significant legal or financial liabilities.",
            stat: "70%",
            statLabel: "Risk Decrease",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
            color: "#10B981",
            features: ["Threat mitigation", "Legal protection", "Financial safety"]
        },
        {
            icon: Gauge,
            title: "Operational Efficiency",
            desc: "Streamlines processes and reduces waste through standardized workflows.",
            stat: "40%",
            statLabel: "Cost Savings",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            color: "#F59E0B",
            features: ["Process optimization", "Resource efficiency", "Time savings"]
        },
        {
            icon: Globe,
            title: "Market Access",
            desc: "Essential for contracts in regulated sectors like automotive or finance.",
            stat: "3x",
            statLabel: "More Opportunities",
            image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&h=300&fit=crop",
            color: "#8B5CF6",
            features: ["Global reach", "New markets", "Competitive edge"]
        }
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden sm:py-32 bg-brandLight dark:bg-bgDark" id="advantages">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brandPrimary/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14 mx-auto max-w-[1280px] relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-8 mb-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 font-heading text-brandPrimary dark:text-brandAccent"
                        >
                            <TrendingUp className="w-4 h-4" />
                            Benefits
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl lg:text-5xl"
                        >
                            Competitive Advantages of Compliance
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-slate-600 dark:text-slate-400"
                        >
                            Achieving recognized international standards provides measurable value that extends beyond simple regulatory checkboxes.
                        </motion.p>
                    </div>

                    {/* Stats summary */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-8 p-6 bg-white border shadow-xl rounded-2xl dark:bg-surfaceDark border-slate-100 dark:border-white/10"
                    >
                        {[
                            { value: "500+", label: "Audits" },
                            { value: "98%", label: "Success" },
                            { value: "50+", label: "Countries" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-2xl font-black text-brandPrimary dark:text-brandAccent">{stat.value}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Advantage Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {advantages.map((item, idx) => {
                        const isActive = activeCard === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setActiveCard(idx)}
                                onMouseLeave={() => setActiveCard(null)}
                                className="relative group"
                            >
                                <div className={`h-full rounded-3xl overflow-hidden transition-all duration-500 ${isActive
                                        ? 'shadow-2xl -translate-y-3'
                                        : 'shadow-lg hover:shadow-xl'
                                    }`}>
                                    {/* Image Header */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'
                                                }`}
                                        />
                                        <div
                                            className="absolute inset-0 transition-opacity duration-300"
                                            style={{
                                                background: `linear-gradient(to top, ${item.color}dd, ${item.color}66, transparent)`
                                            }}
                                        />

                                        {/* Stat overlay */}
                                        <div className="absolute px-4 py-2 shadow-lg top-4 right-4 rounded-xl bg-white/95 dark:bg-brandDark/95 backdrop-blur-sm">
                                            <p className="text-xl font-black" style={{ color: item.color }}>{item.stat}</p>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">{item.statLabel}</p>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-4 left-4">
                                            <div
                                                className="flex items-center justify-center shadow-xl w-14 h-14 rounded-2xl"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                <item.icon className="text-white h-7 w-7" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 bg-white dark:bg-surfaceDark">
                                        <h3 className="mb-2 text-xl font-bold font-heading text-brandDark dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                            {item.desc}
                                        </p>

                                        {/* Feature list */}
                                        <div className="space-y-2">
                                            {item.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        className="flex-shrink-0 w-4 h-4"
                                                        style={{ color: item.color }}
                                                    />
                                                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Color bar at bottom */}
                                    <div
                                        className={`h-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="mb-6 text-slate-600 dark:text-slate-400">
                        Ready to unlock these advantages for your organization?
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all shadow-lg rounded-xl bg-brandPrimary dark:bg-brandAccent dark:text-brandDark font-heading shadow-brandPrimary/25 dark:shadow-brandAccent/25 hover:scale-105"
                    >
                        Start Your Journey
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantages;
