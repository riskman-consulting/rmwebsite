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
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <section className="py-14 sm:py-18 md:py-24 bg-bgLight dark:bg-bgDark">
            {/* container class picks up all padding from tailwind.config */}
            <div className="container mx-auto">

                {/* ── Mobile / Tablet Header (above FAQ) ── */}
                <div className="mb-10 sm:mb-12 lg:hidden">
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6 text-[10px] sm:text-xs font-black tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/20 font-heading text-brandAccent">
                        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        General Knowledge
                    </div>
                    <h2 className="mb-4 sm:mb-5 text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-brandDark dark:text-white">
                        Common Questions About{" "}
                        <span className="text-brandAccent">TISAX</span>
                    </h2>
                    <p className="max-w-md text-sm sm:text-base text-brandDark/60 dark:text-white/60">
                        Get answers to the most common questions about the Trusted Information Security Assessment Exchange.
                    </p>
                </div>

                {/* ── Desktop Grid: Sticky sidebar + FAQ ── */}
                <div className="grid items-start gap-10 lg:gap-16 lg:grid-cols-12">

                    {/* Sticky Sidebar — lg+ only */}
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="sticky top-28">
                            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 text-xs font-black tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/20 font-heading text-brandAccent">
                                <HelpCircle className="w-4 h-4" />
                                General Knowledge
                            </div>
                            <h2 className="mb-6 text-4xl font-black leading-tight xl:text-5xl text-brandDark dark:text-white">
                                Common <br />Questions About <br />
                                <span className="text-brandAccent">TISAX</span>
                            </h2>
                            <p className="max-w-sm mb-10 text-brandDark/60 dark:text-white/60">
                                Get answers to the most common questions about the Trusted Information Security Assessment Exchange.
                            </p>

                            <div className="p-6 xl:p-8 border shadow-2xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                                <h4 className="mb-2 font-bold text-brandDark dark:text-white">Need more clarity?</h4>
                                <p className="mb-5 xl:mb-6 text-sm text-brandDark/60 dark:text-white/60">Our experts are available for a 1-on-1 discovery call to discuss your specific needs.</p>
                                <button className="w-full py-3.5 xl:py-4 text-sm font-bold text-white transition-colors rounded-xl bg-brandPrimary hover:bg-brandNavy">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-3 sm:space-y-4 lg:col-span-7">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className={`rounded-2xl sm:rounded-3xl border transition-all duration-500 ${
                                    openIndex === idx
                                        ? "bg-surfaceLight dark:bg-surfaceDark border-brandAccent/30 shadow-2xl"
                                        : "bg-transparent border-borderLight dark:border-borderDark hover:border-brandDark/20 dark:hover:border-brandAccent/20"
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="flex items-center justify-between w-full gap-4 p-5 sm:p-6 md:p-8 text-left"
                                >
                                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                                        openIndex === idx
                                            ? "text-brandPrimary dark:text-brandAccent"
                                            : "text-brandDark dark:text-white"
                                    }`}>
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                        {openIndex === idx
                                            ? <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-brandAccent" />
                                            : <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-brandDark/40 dark:text-white/40" />
                                        }
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
                                            <div className="px-5 sm:px-6 md:px-8 pt-0 pb-5 sm:pb-6 md:pb-8 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed border-t text-brandDark/60 dark:text-white/60 border-borderLight dark:border-borderDark">
                                                <div className="pt-4 sm:pt-6">
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

                {/* ── Mobile CTA Card (below FAQ) ── */}
                <div className="mt-10 sm:mt-12 lg:hidden">
                    <div className="p-6 sm:p-8 border shadow-2xl rounded-2xl sm:rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                        <h4 className="mb-2 text-base sm:text-lg font-bold text-brandDark dark:text-white">Need more clarity?</h4>
                        <p className="mb-5 sm:mb-6 text-sm text-brandDark/60 dark:text-white/60">Our experts are available for a 1-on-1 discovery call to discuss your specific needs.</p>
                        <button className="w-full py-3.5 sm:py-4 text-sm font-bold text-white transition-colors rounded-xl bg-brandPrimary hover:bg-brandNavy">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TisaxFAQ;