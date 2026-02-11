import React from 'react';
import { Target, Users, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const challenges = [
    {
        title: "Requirement Clarity",
        desc: "Navigating the specific and often complex TISAX assessment levels (AL1, AL2, or AL3).",
        icon: Target,
        tags: ["AL1", "AL2", "AL3"]
    },
    {
        title: "Resource Management",
        desc: "Efficiently allocating internal staff and budget for necessary system and process improvements.",
        icon: Users,
        tags: ["Staffing", "Budgeting"]
    },
    {
        title: "Continuous Compliance",
        desc: "Implementing long-term strategies to stay compliant during regular industry reassessments.",
        icon: RefreshCw,
        tags: ["Strategy", "Long-term"]
    }
];

const TisaxChallenges = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
            {/* Animated BG Shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full -top-32 -right-32 w-96 h-96 bg-brandAccent/5 blur-3xl"
            />

            <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
                <div className="max-w-3xl mx-auto mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-black font-heading text-brandDark dark:text-white sm:text-5xl"
                    >
                        Addressing TISAX <span className="text-brandAccent">Challenges</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg text-slate-500 dark:text-slate-400"
                    >
                        RiskMan helps organizations overcome the common hurdles associated with automotive security assessments through expert resource allocation and strategic planning.
                    </motion.p>
                </div>

                <div className="grid gap-12 lg:grid-cols-3">
                    {challenges.map((challenge, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="flex items-center justify-center w-20 h-20 mb-8 transition-colors duration-500 border rounded-full bg-bgLight dark:bg-bgDark border-slate-100 dark:border-white/10 group-hover:border-brandAccent">
                                <challenge.icon className="w-10 h-10 text-brandPrimary dark:text-brandAccent" />
                            </div>

                            <h3 className="mb-4 text-2xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandAccent">
                                {challenge.title}
                            </h3>

                            <p className="mb-8 leading-relaxed text-slate-500 dark:text-slate-400">
                                {challenge.desc}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                {challenge.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Note */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-8 p-8 mt-20 border rounded-3xl bg-brandDark dark:bg-bgDark border-brandAccent/20 md:flex-row"
                >
                    <div className="h-16 w-16 min-w-[4rem] rounded-2xl bg-brandAccent flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-brandDark" />
                    </div>
                    <div>
                        <h4 className="mb-2 text-xl font-bold text-white font-heading">Our Expert Allocation Approach</h4>
                        <p className="text-sm italic text-blue-100/60">
                            We don't just advise; we embed experts into your workflows to ensure every AL level requirement is met with precision and documented for audit success.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TisaxChallenges;
