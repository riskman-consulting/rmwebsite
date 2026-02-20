import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ImplementationFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-white dark:bg-brandDark">
            <div className="container px-6 mx-auto lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl">
                        Frequently Asked <span className="text-brandPrimary dark:text-brandGold">Questions</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg opacity-70">
                        Get answers to common questions about our implementation excellence services
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {[
                        {
                            q: "What does process re-engineering include?",
                            a: "It covers digitization, automation plans, and bottleneck identification via root cause analysis.",
                            icon: "🔄"
                        },
                        {
                            q: "How is data migration secured?",
                            a: "Through end-to-end lifecycle planning and rigorous cleansing and validation frameworks.",
                            icon: "🔒"
                        },
                        {
                            q: "What is field-level mapping?",
                            a: "It is the transformation logic that ensures data fields align correctly between old and new systems.",
                            icon: "🗺️"
                        },
                        {
                            q: "How do we handle scope changes?",
                            a: "We maintain a traceability matrix and detailed change logs to monitor all modifications.",
                            icon: "📋"
                        }
                    ].map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="transition-all duration-300 border bg-bgLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold"
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex items-start w-full gap-4 p-6 text-left"
                                >
                                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-brandGold/10">
                                        <span className="text-2xl">{faq.icon}</span>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-brandPrimary dark:text-brandGold">
                                            {faq.q}
                                        </h4>
                                    </div>

                                    {/* ARROW */}
                                    <ChevronDown
                                        className={`mt-1 transition-transform duration-300 ${isOpen ? "rotate-180 text-brandGold" : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                {/* ANSWER */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-6 leading-relaxed opacity-70">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>


                {/* Additional Help CTA */}
                <div className="max-w-4xl p-8 mx-auto mt-12 text-center border bg-gradient-to-r from-brandGold/5 to-brandPrimary/5 dark:from-brandGold/10 dark:to-brandPrimary/5 rounded-2xl border-brandGold/20">
                    <h3 className="mb-3 text-2xl font-bold text-brandPrimary dark:text-brandGold">
                        Still have questions?
                    </h3>
                    <p className="mb-6 opacity-70">
                        Our team is here to help you with any queries about implementation excellence
                    </p>
                    <Link to="/contact" className="px-8 py-3 font-bold transition-all duration-300 transform border-2 rounded-full border-brandPrimary dark:border-brandGold text-brandPrimary dark:text-brandGold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandGold dark:hover:text-brandDark hover:scale-105">
                        Contact Support Team
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ImplementationFAQ;
