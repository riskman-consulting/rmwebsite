import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin, Layout, BarChart, FileCheck } from 'lucide-react';

const GlobalDelivery = () => {
    const regions = [
        { pos: "top-2.5 left-1/2 -translate-x-1/2", icon: "🇪🇺", name: "Europe", detail: "Multi-jurisdiction" },
        { pos: "top-1/4 right-8", icon: "🇺🇸", name: "Americas", detail: "SOX-aligned" },
        { pos: "bottom-1/4 right-8", icon: "🇦🇪", name: "Middle East", detail: "Free zone & onshore" },
        { pos: "bottom-2.5 left-1/2 -translate-x-1/2", icon: "🇮🇳", name: "South Asia", detail: "Shared service hubs" },
        { pos: "bottom-1/4 left-8", icon: "🇹🇭", name: "Southeast Asia", detail: "High-volume ops" },
        { pos: "top-1/4 left-8", icon: "🇿🇦", name: "Africa", detail: "Emerging markets" },
    ];

    const features = [
        { icon: <Layout className="text-brandGold" size={24} />, title: "Standardized Methodology", desc: "Uniform audit frameworks and exception taxonomy deployed globally — ensuring consistency in findings quality." },
        { icon: <MapPin className="text-brandAccent" size={24} />, title: "Localized Execution", desc: "Each location is supported with regulatory awareness and language capability to ensure audit relevance." },
        { icon: <FileCheck className="text-brandGold" size={24} />, title: "Governance & Reporting", desc: "Defined reporting cadence via weekly dashboards and quarterly reviews with clear escalation protocols." },
    ];

    return (
        <section id="global" className="relative z-10 py-24 overflow-hidden bg-bgDark">
            {/* Background World Pattern (Decorative) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                <Globe2 size={800} strokeWidth={0.5} className="text-brandGold" />
            </div>

            <div className="container relative z-10">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    04 — Global Delivery
                </div>

                <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
                    Multi-Country, Multi-Entity Execution
                </h2>
                <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                <p className="text-lg font-light text-brandLight/70 mb-16 leading-relaxed max-w-[800px] font-sans">
                    RiskMan's Concurrent Audit programs are built for global deployment — standardized in methodology, yet flexible enough to accommodate local regulatory requirements. Our hub-and-spoke delivery architecture enables centralized governance with localized execution.
                </p>

                {/* Global Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-12 bg-surfaceDark/40 backdrop-blur-xl border border-brandGold/20 rounded-3xl p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brandPrimary/5 via-transparent to-brandAccent/5" />

                    <div className="relative flex items-center justify-center min-h-[400px]">
                        {/* Pulsing connections (Decorative) */}
                        <div className="absolute w-[300px] h-[300px] border border-brandGold/5 rounded-full animate-ping opacity-20" />

                        {/* Center Hub */}
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: [0.95, 1, 0.95] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="z-20 text-center"
                        >
                            <div className="w-36 h-36 border-2 border-brandGold/50 rounded-full flex flex-col items-center justify-center bg-bgDark shadow-[0_0_80px_rgba(255,184,0,0.2)]">
                                <div className="mb-1 text-sm font-bold leading-tight tracking-tighter uppercase font-heading text-brandGold">
                                    RiskMan<br />Central Hub
                                </div>
                                <div className="text-[0.6rem] tracking-[2px] uppercase text-brandLight/40 font-mono">
                                    Governance
                                </div>
                            </div>
                        </motion.div>

                        {/* Hub Spokes (Desktop) */}
                        <div className="absolute inset-0 hidden md:block">
                            {regions.map((region, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`absolute text-center z-10 group w-36 ${region.pos}`}
                                >
                                    <div className="w-16 h-16 border border-brandGold/30 rounded-full flex items-center justify-center mx-auto mb-3 bg-surfaceDark/80 backdrop-blur-sm text-xl transition-all duration-300 group-hover:border-brandGold group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,184,0,0.2)]">
                                        {region.icon}
                                    </div>
                                    <div className="text-xs font-bold transition-colors text-brandLight group-hover:text-brandGold">{region.name}</div>
                                    <div className="text-[0.6rem] text-brandLight/40 font-mono uppercase tracking-tighter">{region.detail}</div>
                                </motion.div>
                            ))}

                            {/* Connection Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 5px rgba(255,192,0,0.2))' }}>
                                {regions.map((_, i) => (
                                    <motion.line
                                        key={i}
                                        x1="50%" y1="50%"
                                        x2={i === 0 ? "50%" : i === 1 ? "85%" : i === 2 ? "85%" : i === 3 ? "50%" : i === 4 ? "15%" : "15%"}
                                        y2={i === 0 ? "10%" : i === 1 ? "30%" : i === 2 ? "70%" : i === 3 ? "90%" : i === 4 ? "70%" : "30%"}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                        opacity="0.3"
                                    />
                                ))}
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#FFB800" stopOpacity="0" />
                                        <stop offset="50%" stopColor="#FFC000" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Mobile View Spokes */}
                        <div className="relative z-10 grid w-full grid-cols-2 gap-8 mt-20 md:hidden">
                            {regions.map((region, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex items-center justify-center mx-auto mb-3 text-xl border rounded-full w-14 h-14 border-brandGold/20 bg-surfaceDark">
                                        {region.icon}
                                    </div>
                                    <div className="text-[0.7rem] font-bold text-brandLight">{region.name}</div>
                                    <div className="text-[0.6rem] text-brandLight/40 uppercase font-mono">{region.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 transition-all duration-300 border bg-surfaceDark/40 backdrop-blur-sm border-brandGold/10 rounded-2xl hover:border-brandGold/30 hover:bg-surfaceDark/60"
                        >
                            <div className="mb-6">{feature.icon}</div>
                            <div className="mb-3 text-lg font-bold font-heading text-brandLight">{feature.title}</div>
                            <div className="font-sans text-sm font-light leading-relaxed text-brandLight/60">{feature.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalDelivery;
