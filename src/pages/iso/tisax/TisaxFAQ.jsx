import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "Who needs TISAX?",
        a: "Any company working in or with the automotive industry that handles sensitive data or intellectual property."
    },
    {
        q: "Does it involve an external audit?",
        a: "Yes, an accredited third-party auditor must review your organizational security practices."
    },
    {
        q: "How does it help with risk?",
        a: "It offers a trusted, standardized way to manage security risks and secure vital business data."
    },
    {
        q: "What if an organization fails the assessment?",
        a: "You must implement corrective actions to meet the required standards before the results are finalized."
    },
    {
        q: "Can it prevent cyberattacks?",
        a: "Yes, by significantly heightening security standards and reducing known system vulnerabilities."
    }
];

const TisaxFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-bgLight dark:bg-bgDark">
            <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
                <div className="grid items-start gap-16 lg:grid-cols-12">
                    {/* Header Side */}
                    <div className="sticky lg:col-span-5 top-32">
                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 text-xs font-black tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/20 font-heading text-brandAccent">
                            <HelpCircle className="w-4 h-4" />
                            General Knowledge
                        </div>
                        <h2 className="mb-6 text-4xl font-black leading-tight lg:text-5xl text-brandDark dark:text-white">
                            Common <br />Questions About <br /><span className="text-brandAccent">TISAX</span>
                        </h2>
                        <p className="max-w-sm mb-10 text-slate-500 dark:text-slate-400">
                            Get answers to the most common questions about the Trusted Information Security Assessment Exchange.
                        </p>

                        <div className="p-8 bg-white border shadow-2xl rounded-3xl dark:bg-surfaceDark border-slate-100 dark:border-white/5">
                            <h4 className="mb-2 font-bold text-brandDark dark:text-white">Need more clarity?</h4>
                            <p className="mb-6 text-sm text-slate-500">Our experts are available for a 1-on-1 discovery call to discuss your specific needs.</p>
                            <button className="w-full py-4 text-sm font-bold text-white transition-colors rounded-xl bg-brandPrimary hover:bg-brandNavy">
                                Schedule a Call
                            </button>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4 lg:col-span-7">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`rounded-3xl border transition-all duration-500 ${openIndex === idx
                                        ? "bg-white dark:bg-surfaceDark border-brandAccent/30 shadow-2xl"
                                        : "bg-transparent border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="flex items-center justify-between w-full p-8 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === idx ? "text-brandPrimary dark:text-brandAccent" : "text-brandDark dark:text-white"
                                        }`}>
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 ml-4 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                        {openIndex === idx ? <Minus className="w-5 h-5 text-brandAccent" /> : <Plus className="w-5 h-5 text-slate-400" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pt-0 pb-8 mt-2 leading-relaxed transition-colors border-t text-slate-500 dark:text-slate-400 border-slate-100 dark:border-white/5">
                                                <div className="pt-6">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TisaxFAQ;
