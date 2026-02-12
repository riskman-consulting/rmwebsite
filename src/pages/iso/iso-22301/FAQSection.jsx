import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer, isOpen, toggle, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-4 overflow-hidden"
        >
            <button
                onClick={toggle}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left ${isOpen
                    ? 'bg-brandPrimary dark:bg-brandAccent shadow-2xl scale-[1.02]'
                    : 'bg-white dark:bg-surfaceDark hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm border border-slate-100 dark:border-white/5'
                    }`}
            >
                <div className="flex items-center gap-5">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black ${isOpen
                        ? 'bg-white/20 text-white dark:text-brandDark'
                        : 'bg-brandPrimary/5 dark:bg-brandAccent/5 text-brandPrimary dark:text-brandAccent'
                        }`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-heading font-bold text-lg sm:text-xl ${isOpen ? 'text-white dark:text-brandDark' : 'text-brandDark dark:text-white'
                        }`}>
                        {question}
                    </span>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen
                    ? 'bg-white/20 rotate-180'
                    : 'bg-slate-100 dark:bg-white/10'
                    }`}>
                    <ChevronDown className={`h-6 w-6 ${isOpen ? 'text-white dark:text-brandDark' : 'text-slate-500'
                        }`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    >
                        <div className="px-8 py-8 mt-2 border-l-2 ml-14 border-slate-100 dark:border-white/10">
                            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ISO22301FAQ = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "What is ISO 22301?",
            a: "ISO 22301 is the international standard for implementing and maintaining a Business Continuity Management System (BCMS). It provides a framework for organizations to protect against, reduce the likelihood of occurrence, and ensure your business recovers from disruptive incidents."
        },
        {
            q: "What is a Business Impact Analysis (BIA)?",
            a: "A BIA is a systematic process to determine the criticality of business activities and the potential impact of their disruption. It helps prioritize recovery efforts by identifying which functions are essential for survival."
        },
        {
            q: "How does it differ from Disaster Recovery?",
            a: "While they are related, Disaster Recovery (DR) focuses primarily on restoring IT systems and infrastructure. ISO 22301 (BCMS) covers the entire business operation, including people, processes, facilities, and communications."
        },
        {
            q: "What is a Recovery Time Objective (RTO)?",
            a: "RTO refers to the targeted duration of time and a service level within which a business process must be restored after a disruption in order to avoid unacceptable consequences."
        },
        {
            q: "What is a Recovery Point Objective (RPO)?",
            a: "RPO is the maximum age of files or data that must be recovered from backup storage for operations to resume normally if a computer, system, or network goes down."
        }
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden sm:py-32 bg-brandLight dark:bg-bgDark" id="faq">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-brandAccent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-brandPrimary/5 rounded-full blur-[120px]" />
            </div>

            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14 mx-auto max-w-[1280px] relative z-10">
                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Header Side */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10">
                                <HelpCircle className="w-4 h-4 text-brandPrimary dark:text-brandAccent" />
                                <span className="text-sm font-black tracking-widest uppercase font-heading text-brandPrimary dark:text-brandAccent">Expert Guide</span>
                            </div>
                            <h2 className="text-4xl font-black leading-tight font-heading text-brandDark dark:text-white sm:text-5xl">
                                Frequently Asked <br />
                                <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                Get clear, expert answers to common questions about Business Continuity Management and ISO 22301 implementation.
                            </p>

                            {/* Contact Box */}
                            <div className="mt-12 p-8 rounded-[2rem] bg-white dark:bg-surfaceDark shadow-2xl border border-slate-100 dark:border-white/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center shadow-lg w-14 h-14 rounded-2xl bg-brandAccent">
                                        <MessageSquare className="h-7 w-7 text-brandDark" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-brandDark dark:text-white">Still have questions?</p>
                                        <p className="text-sm text-slate-500">Contact our resilience experts</p>
                                    </div>
                                </div>
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center w-full gap-3 py-4 font-bold text-white transition-all duration-300 rounded-xl bg-brandDark hover:bg-brandPrimary"
                                >
                                    Get In Touch
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Badge */}
                            <div className="flex items-center gap-4 px-6 py-4 mt-8 border rounded-2xl bg-green-500/10 border-green-500/20">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                                <span className="text-sm font-bold tracking-tighter text-green-600 uppercase dark:text-green-400">Verified Continuity Strategist</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Side */}
                    <div className="lg:col-span-7">
                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <FaqItem
                                    key={i}
                                    index={i}
                                    question={faq.q}
                                    answer={faq.a}
                                    isOpen={openFaq === i}
                                    toggle={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO22301FAQ;
