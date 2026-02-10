import React from 'react';
import { ShieldCheck, Eye, Lock, Globe } from 'lucide-react';

const CoreComponents = () => {
    const components = [
        {
            icon: ShieldCheck,
            title: "PIMS Implementation",
            desc: "Establish a Privacy Information Management System that complements and extends your existing security controls.",
            color: "from-brandPrimary to-brandNavy",
            darkColor: "dark:from-brandAccent dark:to-brandGold"
        },
        {
            icon: Eye,
            title: "PII Controller Roles",
            desc: "Define clear responsibilities for managing personal data based on your specific organizational functions and legal requirements.",
            color: "from-blue-600 to-blue-800",
            darkColor: "dark:from-amber-400 dark:to-yellow-500"
        },
        {
            icon: Lock,
            title: "Risk-Based Privacy",
            desc: "Apply the same rigorous risk management principles to privacy as you do to general information security.",
            color: "from-indigo-600 to-indigo-800",
            darkColor: "dark:from-orange-400 dark:to-amber-500"
        },
        {
            icon: Globe,
            title: "Regulatory Alignment",
            desc: "Ensure your data handling practices meet the requirements of international privacy laws across different jurisdictions.",
            color: "from-brandNavy to-brandDark",
            darkColor: "dark:from-brandGold dark:to-brandAccent"
        }
    ];

    return (
        <section className="w-full px-5 py-20 sm:px-8 lg:px-12 xl:px-14 sm:py-28 bg-surfaceLight dark:bg-bgDark" id="components">
            <div className="mx-auto max-w-[1280px]">
                <div className="text-center">
                    <span className="text-sm font-semibold tracking-widest uppercase font-heading text-brandPrimary dark:text-brandAccent">
                        Framework
                    </span>
                    <h2 className="mt-3 text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl">
                        Core Components of ISO 27701
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400 sm:text-lg">
                        Establishing a robust privacy framework requires a combination of
                        technical controls and organizational governance focused on data
                        subject protection.
                    </p>
                </div>

                <div className="grid gap-6 mt-14 sm:grid-cols-2 lg:gap-8">
                    {components.map((item, i) => (
                        <div
                            key={i}
                            className="relative p-8 overflow-hidden transition-all duration-300 border group rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="absolute w-24 h-24 transition-transform duration-500 rounded-full -right-6 -top-6 bg-brandAccent/5 group-hover:scale-150" />
                            <div
                                className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} ${item.darkColor} shadow-lg`}
                            >
                                <item.icon className="text-white h-7 w-7 dark:text-brandDark" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold font-heading text-brandDark dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreComponents;
