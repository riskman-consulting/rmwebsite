import React from 'react';
import { Search, ClipboardCheck, BarChart4, Share2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const processSteps = [
    {
        title: "Preparation",
        icon: Search,
        description: "We help your organization understand specific assessment requirements and identify current security gaps through internal audits.",
        color: "bg-blue-500",
        shadow: "shadow-blue-500/20"
    },
    {
        title: "Assessment",
        icon: ClipboardCheck,
        description: "Coordination with accredited auditors to review your information security practices in detail against the VDA ISA catalog.",
        color: "bg-brandAccent",
        shadow: "shadow-brandAccent/20"
    },
    {
        title: "Evaluation",
        icon: BarChart4,
        description: "Receiving a comprehensive report that highlights your organizational strengths and identifies critical areas for improvement.",
        color: "bg-indigo-500",
        shadow: "shadow-indigo-500/20"
    },
    {
        title: "Exchange",
        icon: Share2,
        description: "Facilitating the sharing of your certified results with business partners through the secure and official ENX portal.",
        color: "bg-emerald-500",
        shadow: "shadow-emerald-500/20"
    }
];

const TisaxProcess = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-surfaceLight dark:bg-bgDark">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-white/[0.02] -skew-x-12 transform translate-x-20" />

            <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
                <div className="max-w-4xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black font-heading text-brandDark dark:text-white sm:text-4xl lg:text-5xl"
                    >
                        The TISAX Process <span className="text-brandAccent">Roadmap</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg text-slate-600 dark:text-slate-400"
                    >
                        Navigating the automotive security landscape requires a dedicated focus on the assessment of exchange mechanisms and industry-specific security protocols.
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full p-8 transition-all duration-300 bg-white border shadow-xl rounded-3xl dark:bg-surfaceDark border-slate-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-2">
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white ${step.color} ${step.shadow} mb-6 transition-transform group-hover:rotate-12`}>
                                    <step.icon className="h-7 w-7" />
                                </div>

                                <h3 className="mb-4 text-xl font-bold font-heading text-brandDark dark:text-white">
                                    {step.title}
                                </h3>

                                <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                    {step.description}
                                </p>

                                <div className="flex items-center text-xs font-bold tracking-widest uppercase transition-opacity opacity-0 text-brandAccent group-hover:opacity-100">
                                    Step 0{idx + 1}
                                    <ChevronRight className="w-3 h-3 ml-1" />
                                </div>

                                {/* Connecting Line for Desktop */}
                                {idx < processSteps.length - 1 && (
                                    <div className="absolute z-0 hidden w-6 h-px lg:block top-1/4 -right-3 bg-slate-200 dark:bg-white/10" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TisaxProcess;
