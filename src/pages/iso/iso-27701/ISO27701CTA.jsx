import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ISO27701CTA = () => {
    return (
        <section className="w-full py-14  md:py-20 px-6 lg:px-20  bg-surfaceLight dark:bg-bgDark" id="contact">
            <div className="mx-auto max-w-[1280px]">
                <div className="relative p-10 overflow-hidden text-center rounded-3xl bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary sm:p-16">
                    {/* Decorative */}
                    <div className="absolute rounded-full pointer-events-none -right-10 -top-10 h-60 w-60 bg-brandAccent/10 blur-3xl" />
                    <div className="absolute w-48 h-48 rounded-full pointer-events-none -bottom-10 -left-10 bg-brandAccent/10 blur-3xl" />

                    <div className="relative">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 shadow-lg rounded-2xl bg-brandAccent shadow-brandAccent/30">
                            <Lock className="w-8 h-8 text-brandDark" />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-heading sm:text-4xl lg:text-5xl">
                            Protect Your Data Subjects Today
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-blue-200/80 sm:text-lg">
                            Let RiskMan guide your organization through the complexities of
                            international privacy management and ISO 27701 certification.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 mt-8 text-base font-bold transition-all rounded-lg shadow-lg bg-brandAccent font-heading text-brandDark shadow-brandAccent/25 hover:bg-brandGold hover:shadow-brandGold/30"
                        >
                            Secure Your Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO27701CTA;
