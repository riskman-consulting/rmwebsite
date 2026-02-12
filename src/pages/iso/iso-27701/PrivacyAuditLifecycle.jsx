import React from 'react';
import { Search, FileWarning, Settings, RefreshCw } from 'lucide-react';

const PrivacyAuditLifecycle = () => {
    const steps = [
        {
            icon: Search,
            step: "01",
            title: "Privacy Scoping",
            desc: "Defining the boundaries of personal data processing within your specific organizational environment and systems."
        },
        {
            icon: FileWarning,
            step: "02",
            title: "Gap Assessment",
            desc: "Identifying discrepancies between current practices and ISO 27701 requirements to prioritize remediation and resource spend."
        },
        {
            icon: Settings,
            step: "03",
            title: "Control Integration",
            desc: "Implementing specific privacy controls to mitigate identified risks to data subjects and organizational compliance."
        },
        {
            icon: RefreshCw,
            step: "04",
            title: "Continuous Monitoring",
            desc: "Establishing ongoing reviews to maintain compliance as privacy regulations and technologies continue to evolve globally."
        }
    ];

    return (
        <section
            className="w-full px-5 py-20 sm:px-8 lg:px-12 xl:px-14 sm:py-28 bg-brandDark dark:bg-surfaceDark"
            id="lifecycle"
        >
            <div className="mx-auto max-w-[1280px]">
                <div className="text-center">
                    <span className="text-sm font-semibold tracking-widest uppercase font-heading text-brandAccent">
                        Process
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-white font-heading sm:text-4xl">
                        The Privacy Audit Lifecycle
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-blue-200/70 dark:text-slate-400 sm:text-lg">
                        Our audit process ensures that every touchpoint of personal data is
                        mapped, secured, and managed according to international privacy best
                        practices.
                    </p>
                </div>

                <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((item, i) => (
                        <div key={i} className="relative text-center group">
                            {/* Connector line */}
                            {i < 3 && (
                                <div className="absolute right-0 hidden w-full h-px translate-x-1/2 top-10 bg-gradient-to-r from-brandAccent/50 to-transparent lg:block" />
                            )}
                            <div className="relative flex items-center justify-center w-20 h-20 mx-auto transition-all duration-300 border rounded-2xl border-brandAccent/20 bg-brandNavy/50 group-hover:border-brandAccent group-hover:bg-brandAccent/10">
                                <item.icon className="w-8 h-8 text-brandAccent" />
                                <span className="absolute flex items-center justify-center text-xs font-bold rounded-full -right-2 -top-2 h-7 w-7 bg-brandAccent text-brandDark">
                                    {item.step}
                                </span>
                            </div>
                            <h3 className="mt-5 text-lg font-bold text-white font-heading">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-blue-200/60 dark:text-slate-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrivacyAuditLifecycle;
