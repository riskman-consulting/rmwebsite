import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
    return (
      <section className="relative py-16 overflow-hidden bg-brandPrimary">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-brandAccent/20 rounded-full blur-[150px]"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-brandNavy/50 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl font-heading">
                        Ready to Sustain <br /> Your Success?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-white/80">
                        Ensure a smooth digital future with RiskMan’s dedicated Support Services. Let's build a resilient foundation for your growth.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-12 py-6 text-xl font-bold transition-all duration-300 rounded-full shadow-2xl bg-brandAccent text-brandDark hover:shadow-white/20 hover:scale-105"
                    >
                        Partner with Us <ArrowRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};


export default CTASection
