


import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConcurrentAuditCTA = () => {
    const navigator = useNavigate()
    return (
        <section className="relative py-24 overflow-hidden transition-colors bg-bgLight dark:bg-bgDark">
            {/* Background Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandGold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-12 md:p-20 bg-gradient-to-br from-brandNavy to-bgDark border border-brandGold/30 rounded-[2rem] text-center shadow-2xl relative overflow-hidden group"
                >
                    {/* Animated light effect */}
                    <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-brandGold/5 to-transparent skew-x-[-30deg] animate-[shimmer_5s_infinite] group-hover:animate-none" />

                    <div className="inline-flex items-center justify-center w-20 h-20 mb-10 border shadow-lg rounded-2xl bg-brandGold/10 border-brandGold/20 text-brandGold">
                        <Calendar size={36} />
                    </div>

                    <h2 className="mb-8 text-3xl font-extrabold leading-tight md:text-5xl text-brandLight font-heading">
                        Transition to<br />
                        <span className="italic text-transparent bg-gradient-to-r from-brandGold to-brandAccent bg-clip-text">
                            Real-Time Assurance
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto mb-12 font-sans text-lg font-light leading-relaxed text-brandLight/60">
                        Ready to explore how RiskMan's Concurrent Audit programs can transform your control environment? Schedule a diagnostic session with our risk advisory leadership.
                    </p>

                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <motion.button
                          onClick={()=>navigator("/contact")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center  text-sm md:text-[14px]  justify-center gap-3 px-4  py-5 font-extrabold transition-colors rounded-full shadow-xl bg-brandGold text-brandNavy font-heading hover:bg-brandAccent"
                        >
                            Request a Diagnostic <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=>navigator("/careers")}
                            className="px-10 py-5 font-bold transition-colors bg-transparent border rounded-full border-brandGold/30 text-brandGold font-heading hover:bg-brandGold/10"
                        >
                            Download Brochure
                        </motion.button>
                    </div>

                    <div className="mt-12 text-[0.7rem] font-mono uppercase tracking-[3px] text-white">
                        STRATEGIC ASSURANCE AT SCALE
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConcurrentAuditCTA;