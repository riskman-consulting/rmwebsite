import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer, isOpen, toggle, index, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden"
        >
            <button
                onClick={toggle}
                className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 text-left ${isOpen
                        ? 'bg-brandPrimary dark:bg-brandAccent shadow-lg'
                        : 'bg-white dark:bg-surfaceDark hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm'
                    }`}
            >
                <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${isOpen
                            ? 'bg-white/20 text-white dark:text-brandDark'
                            : 'bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent'
                        }`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-heading font-bold text-base sm:text-lg ${isOpen ? 'text-white dark:text-brandDark' : 'text-brandDark dark:text-white'
                        }`}>
                        {question}
                    </span>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen
                        ? 'bg-white/20 rotate-180'
                        : 'bg-slate-100 dark:bg-white/10'
                    }`}>
                    <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-white dark:text-brandDark' : 'text-slate-500'
                        }`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-5 py-6 ml-12">
                            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ISOTISAXFAQ = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "What is the difference between ISO 27001 and TISAX?",
            a: "ISO 27001 is a general international standard for information security management systems (ISMS), while TISAX is specifically tailored for the automotive industry. TISAX builds upon ISO 27001 principles but includes additional requirements specific to automotive supply chain security and data protection."
        },
        {
            q: "How long does a typical implementation take?",
            a: "Implementation timelines vary based on organizational size and complexity. Small organizations typically take 3-6 months, medium enterprises may require 6-12 months, while large multinational corporations could take 12-18 months. RiskMan optimizes timelines through expert-led project management."
        },
        {
            q: "What are the primary steps in the audit process?",
            a: "The audit process involves four key phases: 1) Scoping and survey to define boundaries, 2) Strategic planning for resource allocation, 3) Evidence fieldwork including document reviews and interviews, and 4) Analysis and reporting with gap identification and recommendations."
        },
        {
            q: "Can non-compliance lead to financial loss?",
            a: "Yes, significantly. Non-compliance can result in lost business contracts (especially in regulated sectors), legal penalties, regulatory fines, increased insurance premiums, and substantial remediation costs. Data breaches from poor security can lead to damages in the millions."
        },
        {
            q: "What is the 'Exchange' in TISAX?",
            a: "The 'Exchange' refers to the ENX portal mechanism where certified organizations can securely share their TISAX assessment results with authorized business partners. This eliminates the need for multiple audits from different customers in the automotive supply chain."
        }
    ];

    return (
        <section className="relative w-full py-14 md:py-20 overflow-hidden  bg-brandLight dark:bg-bgDark" id="faq">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brandPrimary/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full px-6 lg:px-20 mx-auto max-w-[1280px] relative z-10">
                <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                    {/* Left column - Header & Image */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10">
                                <HelpCircle className="w-4 h-4 text-brandPrimary dark:text-brandAccent" />
                                <span className="text-sm font-bold tracking-widest uppercase font-heading text-brandPrimary dark:text-brandAccent">
                                    FAQ
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">
                                Get answers to common questions about ISO and TISAX certification services.
                            </p>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative mt-8"
                        >
                            <div className="overflow-hidden shadow-2xl rounded-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop"
                                    alt="Compliance consultation"
                                    className="object-cover w-full h-64 lg:h-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/60 to-transparent" />

                                {/* Overlay card */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 shadow-lg rounded-2xl bg-white/95 dark:bg-surfaceDark/95 backdrop-blur-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brandAccent">
                                                <MessageCircle className="w-6 h-6 text-brandDark" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-brandDark dark:text-white">Need more help?</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">Our experts are ready</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 font-bold transition-all text-brandPrimary dark:text-brandAccent hover:gap-3"
                            >
                                Contact our team
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column — FAQ Accordion */}
                    <div className="space-y-4 lg:col-span-3">
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
        </section>
    );
};

export default ISOTISAXFAQ;
