import React from 'react';
import { Award, Scale, Zap } from 'lucide-react';

const StrategicBenefits = () => {
    const benefits = [
        {
            icon: Award,
            title: "Enhanced Brand Trust",
            desc: "Demonstrate a top-down commitment to protecting client and employee privacy through verified standards."
        },
        {
            icon: Scale,
            title: "Reduced Liability",
            desc: "Minimize the risk of legal action and regulatory scrutiny stemming from data breaches or mismanagement."
        },
        {
            icon: Zap,
            title: "Streamlined Operations",
            desc: "Harmonize privacy and security efforts to reduce redundant documentation and improve internal resource efficiency."
        }
    ];

    return (
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark" id="benefits">
            <div className="container">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left — Image / Visual */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                                alt="Team collaborating on data privacy strategy"
                                className="object-cover w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div>
                        <span className="text-sm font-semibold tracking-widest uppercase font-heading text-brandPrimary dark:text-brandAccent">
                            Why It Matters
                        </span>
                        <h2 className="mt-3 text-3xl font-bold font-heading text-brandDark dark:text-white md:text-4xl">
                            Strategic Benefits for Organizations
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 sm:text-lg">
                            Modern leadership must view privacy as a fundamental pillar of
                            business integrity rather than just a legal obligation for global
                            organizations.
                        </p>

                        <div className="mt-8 space-y-6">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-brandAccent/15 dark:bg-brandAccent/10">
                                        <item.icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-heading text-brandDark dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicBenefits;
