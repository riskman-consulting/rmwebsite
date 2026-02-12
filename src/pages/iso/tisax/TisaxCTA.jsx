import React from 'react';
import { ArrowRight, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const TisaxCTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brandPrimary">
                <div className="absolute inset-0 bg-gradient-to-br from-brandDark via-transparent to-brandAccent/20" />
                {/* Abstract Patterns */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="inline-flex items-center justify-center w-20 h-20 mb-8 shadow-2xl rounded-3xl bg-brandAccent text-brandDark shadow-brandAccent/40"
                    >
                        <Shield className="w-10 h-10" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-6 text-4xl font-black text-white font-heading sm:text-6xl"
                    >
                        Secure Your Automotive <br />
                        <span className="text-brandAccent">Partnerships</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto mb-12 text-xl text-blue-100/80"
                    >
                        Don't let non-compliance stall your growth—partner with RiskMan for a streamlined and successful TISAX journey.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                    >
                        <button className="relative px-10 py-5 overflow-hidden text-sm font-black transition-all shadow-2xl group rounded-2xl bg-brandAccent font-heading text-brandDark shadow-brandAccent/30 hover:scale-105 active:scale-95">
                            <span className="relative z-10 flex items-center gap-3">
                                <Sparkles className="w-5 h-5" />
                                Become TISAX Ready
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 transition-opacity bg-white opacity-0 group-hover:opacity-20" />
                        </button>

                        <p className="text-sm font-medium text-white/60">
                            Join 500+ secure organizations
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TisaxCTA;
