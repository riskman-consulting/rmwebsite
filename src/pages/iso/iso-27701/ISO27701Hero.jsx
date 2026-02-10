import React from 'react';
import { ShieldCheck, Lock, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ISO27701Hero = () => {
    return (
        <section className="relative w-full px-5 pt-20 pb-24 overflow-hidden sm:px-8 lg:px-12 xl:px-14 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40 bg-bgLight dark:bg-bgDark">
            <div className="mx-auto max-w-[1280px]">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute rounded-full -top-20 -right-20 h-96 w-96 bg-brandAccent/10 blur-3xl" />
                    <div className="absolute rounded-full -bottom-20 -left-20 h-80 w-80 bg-brandPrimary/10 blur-3xl" />
                </div>

                <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left content */}
                    <div className="max-w-xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brandAccent/30 bg-brandAccent/10 px-4 py-1.5 text-sm font-medium text-brandDark dark:text-brandAccent">
                            <ShieldCheck className="w-4 h-4" />
                            ISO 27701 Certified Consulting
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight font-heading text-brandDark dark:text-white sm:text-5xl lg:text-6xl">
                            Elevate Data Privacy to{" "}
                            <span className="text-transparent bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold bg-clip-text">
                                Global Standards
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
                            RiskMan provides comprehensive ISO 27701 consulting to integrate
                            privacy management into your existing security posture, protecting
                            personal identifiable information and building stakeholder trust.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all rounded-lg shadow-lg bg-brandPrimary font-heading shadow-brandPrimary/25 hover:bg-brandNavy hover:shadow-brandNavy/30 dark:bg-brandAccent dark:text-brandDark dark:shadow-brandAccent/25 dark:hover:bg-brandGold"
                            >
                                Return To Services
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all border-2 rounded-lg border-brandPrimary font-heading text-brandPrimary hover:bg-brandPrimary hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </div>

                    {/* Right visual — Shield illustration */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-80 w-80 sm:h-96 sm:w-96">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandAccent/20 to-brandPrimary/20 dark:from-brandAccent/10 dark:to-brandPrimary/10 blur-2xl" />
                            {/* Main shield card */}
                            <div className="absolute flex flex-col items-center justify-center border shadow-2xl inset-4 rounded-3xl border-borderLight dark:border-borderDark bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-sm">
                                <div className="flex items-center justify-center w-24 h-24 shadow-lg rounded-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold">
                                    <ShieldCheck className="w-12 h-12 text-white dark:text-brandDark" />
                                </div>
                                <p className="mt-5 text-2xl font-bold font-heading text-brandDark dark:text-white">
                                    ISO 27701
                                </p>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Privacy Information Management
                                </p>
                                <div className="flex gap-3 mt-6">
                                    {["PIMS", "PII", "GDPR"].map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-semibold rounded-full bg-brandAccent/15 text-brandDark dark:text-brandAccent"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Floating badge top-right */}
                            <div
                                className="absolute flex items-center justify-center w-16 h-16 shadow-lg -right-2 top-8 rounded-2xl bg-brandAccent animate-float"
                            >
                                <Lock className="h-7 w-7 text-brandDark" />
                            </div>
                            {/* Floating badge bottom-left */}
                            <div
                                className="absolute flex items-center justify-center shadow-lg -left-2 bottom-12 h-14 w-14 rounded-xl bg-brandPrimary dark:bg-brandNavy animate-float"
                                style={{ animationDelay: '1.5s' }}
                            >
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO27701Hero;
