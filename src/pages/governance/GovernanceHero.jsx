import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GovernanceHero = ({ containerRef }) => {
    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32 overflow-hidden bg-bgDark">
            <div className="absolute inset-0 hero-grid opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-brandDark/80 via-transparent to-bgDark" />

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brandAccent/50 bg-brandAccent/10 text-brandAccent text-sm font-black tracking-[0.4em] uppercase mb-12 shadow-2xl"
                >
                    Enterprise Governance
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-9xl font-heading font-black leading-[0.9] mb-12 text-white max-w-5xl mx-auto"
                >
                    POLICIES <span className="text-brandAccent">&</span> SOP<span className="text-brandAccent">s</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-16 text-xl font-light leading-relaxed md:text-2xl text-white/70"
                >
                    The silent backbone of enterprise excellence. Translating boardroom vision into frontline reality through structured, auditable discipline.
                </motion.p>

                <div className="flex flex-col justify-center gap-6 sm:flex-row">
                    <button className="flex items-center justify-center gap-3 px-10 py-5 text-xl font-black transition-all bg-brandAccent text-brandDark rounded-2xl shadow-3xl hover:-translate-y-1">
                        Request Advisory <ArrowRight size={22} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default GovernanceHero;
