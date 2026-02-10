import React from 'react';
import { Shield, Lock, Car, ArrowRight, CheckCircle, Sparkles, Award, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ISOTISAXHero = () => {
    return (
        <section className="relative flex items-center w-full min-h-screen overflow-hidden bg-bgLight dark:bg-bgDark">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary" />

                {/* Animated mesh gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/30 blur-[120px] animate-evaporate" />
                    <div className="absolute bottom-0 -right-[20%] w-[60%] h-[60%] rounded-full bg-brandAccent/20 blur-[100px] animate-evaporate" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[80px] animate-pulse-custom" />
                </div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-grid)" />
                    </svg>
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-brandAccent animate-float" />
                <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-white/50 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 left-[20%] w-4 h-4 rounded-full bg-blue-400/40 animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/3 right-[25%] w-2.5 h-2.5 rounded-full bg-brandGold/50 animate-float" style={{ animationDelay: '2s' }} />

                {/* Decorative circles */}
                <div className="absolute w-64 h-64 border rounded-full top-10 right-10 border-white/5" />
                <div className="absolute border rounded-full -bottom-20 -left-20 w-80 h-80 border-brandAccent/10" />
            </div>

            <div className="relative z-10 w-full px-5 py-24 sm:px-8 lg:px-12 xl:px-14 lg:py-0">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 border border-white/20"
                            >
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="h-3.5 w-3.5 text-brandAccent fill-brandAccent" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-white">Trusted by 500+ Organizations</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="font-heading text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                Master Compliance with{" "}
                                <span className="relative">
                                    <span className="relative z-10 text-transparent bg-gradient-to-r from-brandAccent via-brandGold to-brandAccent bg-clip-text">
                                        Strategic Security
                                    </span>
                                    <span className="absolute -inset-1 bg-gradient-to-r from-brandAccent/20 to-brandGold/20 blur-xl" />
                                </span>{" "}
                                Frameworks
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="max-w-xl mt-8 text-lg leading-relaxed text-blue-100/80 sm:text-xl"
                            >
                                RiskMan empowers global organizations to navigate complex regulatory landscapes through specialized ISO and TISAX frameworks.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 mt-10"
                            >
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-3 px-8 py-5 text-sm font-bold transition-all duration-300 shadow-2xl group rounded-2xl bg-brandAccent font-heading text-brandDark shadow-brandAccent/30 hover:bg-brandGold hover:scale-105 hover:shadow-brandGold/40"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    View All Services
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-5 text-sm font-bold text-white transition-all duration-300 border-2 group rounded-2xl border-white/30 bg-white/5 backdrop-blur-sm font-heading hover:bg-white/15 hover:border-white/50"
                                >
                                    <Play className="w-4 h-4 fill-white" />
                                    Book Consultation
                                </Link>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap items-center gap-6 mt-12"
                            >
                                {[
                                    { icon: CheckCircle, text: "ISO Certified Partner" },
                                    { icon: CheckCircle, text: "TISAX Approved" },
                                    { icon: CheckCircle, text: "24/7 Support" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                                        <item.icon className="w-4 h-4 text-brandAccent" />
                                        {item.text}
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right — Visual showcase */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Main image card */}
                                <div className="relative p-3 overflow-hidden border shadow-2xl rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=500&fit=crop"
                                        alt="Security team collaboration"
                                        className="w-full h-[380px] object-cover rounded-2xl"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute pointer-events-none inset-3 bg-gradient-to-t from-brandDark/60 via-transparent to-transparent rounded-2xl" />

                                    {/* Stats overlay */}
                                    {/* <div className="absolute flex justify-between bottom-8 left-8 right-8">
                                        {[
                                            { value: "500+", label: "Audits" },
                                            { value: "98%", label: "Success" },
                                            { value: "50+", label: "Countries" }
                                        ].map((stat, idx) => (
                                            <div key={idx} className="text-center">
                                                <p className="text-3xl font-black text-white">{stat.value}</p>
                                                <p className="text-xs text-white/70">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>

                                {/* Floating ISO Card */}
                                {/* <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute p-5 bg-white border shadow-2xl -left-8 top-8 w-52 rounded-2xl dark:bg-surfaceDark border-slate-100 dark:border-white/10"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-brandDark dark:text-white">ISO 27001</p>
                                            <p className="text-xs text-slate-500">Information Security</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                                            <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-green-400 to-green-500" />
                                        </div>
                                        <span className="text-xs font-bold text-green-500">Certified</span>
                                    </div>
                                </motion.div> */}

                                {/* Floating TISAX Card */}
                                {/* <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute w-48 p-5 shadow-2xl -right-6 bottom-24 rounded-2xl bg-gradient-to-br from-brandAccent to-brandGold"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brandDark/20">
                                            <Car className="w-5 h-5 text-brandDark" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-brandDark">TISAX</p>
                                            <p className="text-xs text-brandDark/70">Automotive</p>
                                        </div>
                                    </div>
                                </motion.div> */}

                                {/* Award badge */}
                                {/* <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute p-4 bg-white shadow-xl -top-4 right-16 rounded-2xl dark:bg-surfaceDark"
                                >
                                    <div className="flex items-center gap-2">
                                        <Award className="w-8 h-8 text-brandAccent" />
                                        <div>
                                            <p className="text-xs font-bold text-brandDark dark:text-white">Top Rated</p>
                                            <p className="text-xs text-slate-500">Consulting</p>
                                        </div>
                                    </div>
                                </motion.div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 50L48 45.8C96 41.7 192 33.3 288 37.5C384 41.7 480 58.3 576 62.5C672 66.7 768 58.3 864 50C960 41.7 1056 33.3 1152 35.4C1248 37.5 1344 50 1392 56.3L1440 62.5V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
                        className="fill-brandLight dark:fill-bgDark" />
                </svg>
            </div>
        </section>
    );
};

export default ISOTISAXHero;
