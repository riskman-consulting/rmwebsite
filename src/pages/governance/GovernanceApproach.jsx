import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';

const SectionHeading = ({ tag, title, subtitle, centered = false }) => (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
        >
            <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
            {tag}
        </motion.div>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black leading-tight md:text-6xl font-heading"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl text-lg leading-relaxed text-brandDark/70 dark:text-brandLight/70 md:text-xl"
                style={{ margin: centered ? '0 auto' : '0' }}
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

const GovernancePyramid = () => (
    <div className="relative max-w-lg mx-auto group lg:mx-0">
        <div className="absolute inset-0 bg-brandAccent/10 blur-[80px] rounded-full group-hover:bg-brandAccent/20 transition-all duration-700" />
        <svg viewBox="0 0 500 400" className="relative z-10 w-full drop-shadow-2xl">
            <defs>
                <linearGradient id="p-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFB800" />
                </linearGradient>
                <linearGradient id="p-navy" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#001F3F" />
                </linearGradient>
            </defs>

            <motion.g initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <path d="M250,20 L330,120 L170,120 Z" fill="url(#p-navy)" className="stroke-brandAccent" strokeWidth="1" />
                <text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">BOARD INTENT</text>

                <path d="M165,130 L335,130 L385,220 L115,220 Z" className="fill-brandNavy stroke-brandAccent" strokeWidth="0.5" opacity="0.9" />
                <text x="250" y="185" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">POLICIES</text>

                <path d="M110,230 L390,230 L440,320 L60,320 Z" className="fill-brandPrimary stroke-brandAccent" strokeWidth="0.5" opacity="0.8" />
                <text x="250" y="285" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">SOPs & PROCEDURES</text>

                <rect x="30" y="330" width="440" height="50" rx="8" fill="url(#p-gold)" />
                <text x="250" y="362" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900" fontFamily="Montserrat">DAY-TO-DAY EXECUTION</text>
            </motion.g>
        </svg>
    </div>
);

const LifecycleWheel = () => {
    const phases = [
        { label: "Design &\nStructuring", angle: -90 },
        { label: "Review &\nAlignment", angle: -18 },
        { label: "Approval &\nGovernance", angle: 54 },
        { label: "Implementation\n& Communication", angle: 126 },
        { label: "Monitoring &\nImprovement", angle: 198 },
    ];
    const r = 140, cx = 220, cy = 210;
    return (
        <svg viewBox="0 0 440 420" className="w-full max-w-[440px]">
            <defs>
                <radialGradient id="lcg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#004080" />
                    <stop offset="100%" stopColor="#003366" />
                </radialGradient>
            </defs>
            <circle cx={cx} cy={cy} r={r + 30} fill="none" className="stroke-brandAccent/20" strokeWidth="1" strokeDasharray="6,4" />
            <circle cx={cx} cy={cy} r="45" fill="url(#lcg)" className="stroke-brandAccent" strokeWidth="2" />
            <text x={cx} y={cy - 5} textAnchor="middle" className="fill-brandAccent" fontSize="10" fontWeight="900" fontFamily="Montserrat">POLICY</text>
            <text x={cx} y={cy + 12} textAnchor="middle" className="fill-brandAccent" fontSize="10" fontWeight="900" fontFamily="Montserrat">LIFECYCLE</text>
            {phases.map((p, i) => {
                const rad = (p.angle * Math.PI) / 180;
                const x = cx + r * Math.cos(rad);
                const y = cy + r * Math.sin(rad);
                return (
                    <g key={i}>
                        <line x1={cx + 50 * Math.cos(rad)} y1={cy + 50 * Math.sin(rad)} x2={cx + (r - 40) * Math.cos(rad)} y2={cy + (r - 40) * Math.sin(rad)} className="stroke-brandAccent/30" strokeWidth="2" />
                        <motion.circle
                            initial={{ r: 0 }}
                            whileInView={{ r: 38 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            cx={x} cy={y} r="38"
                            className="fill-brandNavy stroke-brandAccent"
                            strokeWidth="2"
                        />
                        <text x={x} y={y - 2} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Inter">
                            {p.label.split("\n").map((l, j) => <tspan key={j} x={x} dy={j === 0 ? 0 : 12}>{l}</tspan>)}
                        </text>
                        <text x={x} y={y - 24} textAnchor="middle" className="fill-brandAccent" fontSize="14" fontWeight="900" fontFamily="Montserrat">{`0${i + 1}`}</text>
                    </g>
                );
            })}
        </svg>
    );
};

const GovernanceApproach = () => {
    return (
        <div className="space-y-32">
            {/* 1. Architecture Section */}
            <section className="px-6 py-32">
                <div className="container mx-auto">
                    <div className="grid items-center gap-24 lg:grid-cols-2">
                        <div className="bg-brandAccent/5 rounded-[40px] p-8 relative overflow-hidden flex items-center justify-center shadow-inner">
                            <div className="absolute inset-0 hero-grid opacity-10" />
                            <GovernancePyramid />
                        </div>
                        <div>
                            <SectionHeading
                                tag="Global Architecture"
                                title="Unified Governance Layer"
                                subtitle="Policies define 'what' we do; SOPs define 'how' we do it. Our architecture bridges this gap to eliminate operational ambiguity."
                            />
                            <div className="space-y-8">
                                {[
                                    { title: "Strategic Intent", desc: "Board-level policies that align every action with the organization's core risk appetite." },
                                    { title: "Operational Rigor", desc: "Granular SOPs that ensure consistency across entities, reducing process deviations." },
                                    { title: "Sustained Compliance", desc: "Automatic alignment with global and regional regulatory frameworks." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-xl bg-brandNavy text-brandAccent border-brandAccent/30">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="mb-2 text-xl font-bold">{item.title}</h4>
                                            <p className="leading-relaxed text-muted-themed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Lifecycle Section */}
            <section className="relative px-6 py-32 border-t bg-bgLight/50 dark:bg-bgDark/30 border-borderLight dark:border-borderDark">
                <div className="container mx-auto">
                    <div className="grid items-center gap-24 lg:grid-cols-2">
                        <div>
                            <SectionHeading
                                tag="Lifecycle Management"
                                title="Methodical Governance Iteration"
                                subtitle="A policy is not a static document. We manage the entire lifecycle from design to continuous monitoring."
                            />
                            <ul className="grid gap-6 sm:grid-cols-2">
                                {[
                                    "Standards-Aligned Design", "Stakeholder Alignment", "Global Rollout Plan",
                                    "Training & Adoption", "Version Control", "Annual Review Cadence"
                                ].map((t, i) => (
                                    <li key={i} className="flex items-center gap-3 px-6 py-4 text-sm font-bold border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                                        <Zap size={16} className="text-brandAccent" /> {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative flex justify-center p-12 rounded-full bg-brandNavy/20 aspect-square shadow-3xl">
                            <div className="absolute inset-0 rounded-full bg-brandAccent/5 blur-3xl" />
                            <LifecycleWheel />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GovernanceApproach;
