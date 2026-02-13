import React from 'react';
import { Globe, Zap, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import riskMitigationImg from "../../../assets/images/tisax/risk-mitigation.jpg";

const benefits = [
    {
        title: "Supply Chain Integration",
        desc: "Protects sensitive information and intellectual property across the entire automotive partner network.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Operational Efficiency",
        desc: "Streamlines security assessments, reducing the need for multiple redundant audits from different manufacturers.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Market Credibility",
        desc: "Builds high levels of trust by adhering to a recognized and respected industry security standard.",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Risk Mitigation",
        desc: "Helps proactively identify and address vulnerabilities before they lead to breaches or lost contracts.",
        icon: AlertCircle,
        image: riskMitigationImg
    }
];

const TisaxBenefits = () => {
    return (
        <section className="py-14 md:py-20 bg-bgLight dark:bg-bgDark">
            <div className="container px-6 mx-auto lg:px-20">
                <div className="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-bold tracking-widest uppercase text-brandAccent"
                        >
                            Advantages
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-4 text-4xl font-black font-heading text-brandDark dark:text-white lg:text-5xl"
                        >
                            Essential Benefits <br />
                            <span className="text-slate-400">of Compliance</span>
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-5">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-lg text-slate-500 dark:text-slate-400"
                        >
                            Organizations that achieve TISAX compliance gain immediate credibility within the global automotive network, unlocking new and lucrative partnership opportunities.
                        </motion.p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative h-80 overflow-hidden rounded-[2rem] border border-slate-100 dark:border-white/5"
                        >
                            {/* Background Image */}
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-brandDark via-brandDark/40 to-transparent group-hover:opacity-90" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-xl bg-brandAccent/20 backdrop-blur-md text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h3 className="mb-2 text-2xl font-black text-white">{benefit.title}</h3>
                                <p className="max-w-sm text-sm transition-all duration-300 transform translate-y-4 opacity-0 text-white/70 group-hover:translate-y-0 group-hover:opacity-100">
                                    {benefit.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TisaxBenefits;
