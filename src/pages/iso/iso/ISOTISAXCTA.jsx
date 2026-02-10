import React from 'react';
import { Shield, ArrowRight, Sparkles, CheckCircle, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ISOTISAXCTA = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden sm:py-32" id="cta">
            {/* Full background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
                    alt="Modern office"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 via-brandNavy/90 to-brandPrimary/85" />
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-32 h-32 border rounded-full top-10 right-10 border-white/10" />
                <div className="absolute w-48 h-48 border rounded-full bottom-10 left-10 border-brandAccent/20" />
                <div className="absolute w-4 h-4 rounded-full top-1/2 left-1/4 bg-brandAccent/40 animate-float" />
                <div className="absolute w-3 h-3 rounded-full top-1/3 right-1/3 bg-white/30 animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14 mx-auto max-w-[1280px] relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandAccent/20 border-brandAccent/30">
                            <Sparkles className="w-4 h-4 text-brandAccent" />
                            <span className="text-sm font-bold text-brandAccent">Get Started Today</span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight text-white font-heading sm:text-4xl lg:text-5xl">
                            Secure Your Competitive Edge Today
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-blue-100/80">
                            Partner with RiskMan to transform your compliance requirements into a strategic and sustainable business advantage.
                        </p>

                        {/* Benefits list */}
                        <div className="mt-8 space-y-4">
                            {[
                                "Free initial consultation",
                                "Expert guidance throughout",
                                "Fast-track certification process",
                                "24/7 dedicated support"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-brandAccent" />
                                    <span className="text-white/90">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 font-bold transition-all shadow-xl group rounded-xl bg-brandAccent text-brandDark font-heading shadow-brandAccent/30 hover:bg-brandGold hover:scale-105"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all border-2 rounded-xl border-white/30 font-heading hover:bg-white/10 hover:border-white/50"
                            >
                                View Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Contact card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="p-8 bg-white shadow-2xl rounded-3xl dark:bg-surfaceDark">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center justify-center w-16 h-16 shadow-lg rounded-2xl bg-gradient-to-br from-brandPrimary to-brandNavy">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-brandDark dark:text-white">Contact RiskMan</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">We're here to help</p>
                                </div>
                            </div>

                            {/* Contact options */}
                            <div className="mb-8 space-y-4">
                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10">
                                        <Phone className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Call us</p>
                                        <p className="font-bold text-brandDark dark:text-white">+1 (800) RISKMAN</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10">
                                        <Mail className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Email us</p>
                                        <p className="font-bold text-brandDark dark:text-white">hello@riskman.in</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10">
                                        <Clock className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Working hours</p>
                                        <p className="font-bold text-brandDark dark:text-white">Mon-Fri, 9AM-6PM IST</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
                                {["ISO 27001", "ISO 27701", "TISAX"].map((badge, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-bold rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute px-4 py-2 text-sm font-bold text-white bg-green-500 shadow-lg -top-4 -right-4 rounded-xl animate-float">
                            ✓ Free Consultation
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ISOTISAXCTA;
