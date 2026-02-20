import React from 'react';

const DataManagementPhase = () => {
    return (
        <section className="py-24 bg-surfaceLight dark:bg-surfaceDark">
            <div className="container px-6 mx-auto lg:px-12">
                <div className="mx-auto mb-16 text-center ">
                    <h2 className="mb-4 text-3xl font-black font-heading md:text-4xl">
                        Data Management & <span className="text-brandPrimary dark:text-brandGold">Migration</span>
                    </h2>
                    <p className="max-w-2xl text-lg opacity-70 justify-center items-center mx-auto">
                        Ensure data integrity and seamless transitions with structured cleansing, mapping, and validation frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            phase: "Phase 1",
                            title: "Data Lifecycle Planning",
                            desc: "Establish end-to-end strategic plans for managing data assets from extraction to integration.",
                            color: "from-blue-500 to-cyan-500",
                            bgColor: "bg-blue-500/10"
                        },
                        {
                            phase: "Phase 2",
                            title: "Cleansing & Validation",
                            desc: "Implement rigorous frameworks to ensure only accurate, high-quality data reaches the new environment.",
                            color: "from-purple-500 to-pink-500",
                            bgColor: "bg-purple-500/10"
                        },
                        {
                            phase: "Phase 3",
                            title: "Field-Level Mapping",
                            desc: "Define precise transformation logic to maintain data consistency across disparate digital systems.",
                            color: "from-orange-500 to-red-500",
                            bgColor: "bg-orange-500/10"
                        },
                        {
                            phase: "Phase 4",
                            title: "Defect Reconciliation",
                            desc: "Utilize specialized logging tools to identify and resolve migration discrepancies in real time.",
                            color: "from-green-500 to-emerald-500",
                            bgColor: "bg-green-500/10"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Gradient Top Bar */}
                            <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

                            <div className="p-6">
                                {/* Phase Badge */}
                                <div className={`inline-block px-4 py-2 mb-4 text-sm font-bold rounded-full ${item.bgColor}`}>
                                    {item.phase}
                                </div>

                                <h4 className="mb-3 text-xl font-bold text-brandPrimary dark:text-brandGold">
                                    {item.title}
                                </h4>

                                <p className="text-sm leading-relaxed opacity-70">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Hover Effect Arrow */}
                            <div className="absolute transition-opacity duration-300 opacity-0 bottom-4 right-4 group-hover:opacity-100">
                                <svg className="w-6 h-6 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataManagementPhase;
