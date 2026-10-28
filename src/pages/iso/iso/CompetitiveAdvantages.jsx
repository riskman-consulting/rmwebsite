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
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
            color: "#004080",
            features: ["Partner confidence", "Brand credibility", "Client loyalty"]
        },
        {
            icon: ShieldCheck,
            title: "Risk Reduction",
            desc: "Minimizes data breaches and significant legal or financial liabilities.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
            color: "#FFB800",
            features: ["Threat mitigation", "Legal protection", "Financial safety"]
        },
        {
            icon: Gauge,
            title: "Operational Efficiency",
            desc: "Streamlines processes and reduces waste through standardized workflows.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            color: "#004080",
            features: ["Process optimization", "Resource efficiency", "Time savings"]
        },
        {
            icon: Globe,
            title: "Market Access",
            desc: "Essential for contracts in regulated sectors like automotive or finance.",
            image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&h=600&fit=crop",
            color: "#FFB800",
            features: ["Global reach", "New markets", "Competitive edge"]
        }
    ];

    return (
      <section className="relative w-full py-16 overflow-hidden sm:py-32 bg-brandLight dark:bg-bgDark" id="advantages">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brandPrimary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10">
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
