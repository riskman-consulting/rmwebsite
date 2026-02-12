// import React from 'react';
// import { SectionWrapper } from '../../components/ui/SectionComponents';

// const ExecutionMethodology = () => {
//     const phases = [
//         {
//             id: "Phase I",
//             title: "Current State Understanding & Diagnostic",
//             color: "#0A1F44",
//             items: [
//                 "Review existing informal practices and documentation, where available",
//                 "Conduct structured process walkthroughs with all the relevant stakeholders",
//                 "Identify variations in practices across locations",
//                 "Map current processes to ERP transaction flows and system control environment",
//                 "Document key gaps in terms of current process and practices, and design level process inefficiencies"
//             ]
//         },
//         {
//             id: "Phase II",
//             title: "Design of Core SOP",
//             color: "#00A693",
//             items: [
//                 {
//                     text: "Develop the Core SOP incorporating:",
//                     subItems: [
//                         "Standardized process maps",
//                         "Step-by-step process narratives",
//                         "Clearly defined roles and responsibilities of each sub-process (RACI)",
//                         "Alignment of key MIS formats, KPIs and TATs, and approved authorization matrices",
//                         "ERP alignment and system dependencies"
//                     ]
//                 },
//                 "Ensure consistency with internal governance, audit, and compliance expectations",
//                 "Embed best practices"
//             ]
//         },
//         {
//             id: "Phase III",
//             title: "Customization Identification & Structuring",
//             color: "#0076C0",
//             items: [
//                 {
//                     text: "Identify genuine location-specific deviations arising from:",
//                     subItems: [
//                         "Statutory or regulatory requirements",
//                         "Physical infrastructure or logistics constraints",
//                         "Business-critical operational differences"
//                     ]
//                 },
//                 {
//                     text: "Document such deviations through structured local addendums, ensuring:",
//                     subItems: [
//                         "Clear linkage to the core SOP",
//                         "Defined approval and ownership",
//                         "No dilution of core controls"
//                     ]
//                 }
//             ]
//         },
//         {
//             id: "Phase IV",
//             title: "Stakeholder Validation & Alignment",
//             color: "#70757A",
//             items: [
//                 {
//                     text: "Conduct alignment workshops and review sessions with relevant stakeholders for:",
//                     subItems: [
//                         "Validation of SOP design",
//                         "Alignment on roles, controls, and MIS",
//                         "Final sign-off and governance endorsement"
//                     ]
//                 },
//                 "Incorporate feedback without compromising standardization objectives"
//             ]
//         },
//         {
//             id: "Phase V",
//             title: "Finalization & Handover",
//             color: "#0056B3",
//             items: [
//                 "Deliver the final SOP",
//                 "Provide standard key MIS and reporting templates",
//                 "Share implementation guidance and usage protocols",
//                 "Conduct training workshop involving all the relevant stakeholders across the locations to enable smooth transition",
//                 "Internal SOP rollout and implementation"
//             ]
//         }
//     ];

//     const outcomes = [
//         { text: "A consolidated understanding of current practices, deviations, and control expectations.", color: "#8E44AD" },
//         { text: "A draft Core SOP applicable uniformly across all locations.", color: "#9B59B6" },
//         { text: "A controlled addendum framework that preserves standardization while enabling flexibility.", color: "#2980B9" },
//         { text: "Finalized, approved SOP and addendums ready for rollout.", color: "#16A085" },
//         { text: "A robust, auditable, and scalable SOP framework ready for enterprise-wide adoption.", color: "#27AE60" }
//     ];

//     return (
//         <SectionWrapper id="methodology" className="px-6 py-24 transition-colors duration-300 bg-white dark:bg-bgDark">
//             <div className="mx-auto max-w-7xl">
//                 <h2 className="text-4xl font-black mb-12 text-[#0A1F44] dark:text-white">Methodology and Execution Framework</h2>

//                 <div className="relative overflow-x-auto lg:overflow-visible">
//                     <div className="min-w-[1000px] lg:min-w-0">
//                         {/* Header Chevrons */}
//                         <div className="grid grid-cols-5 mb-8">
//                             {phases.map((phase, idx) => (
//                                 <div key={idx} className="relative flex items-center justify-center h-16 px-8 text-center text-white" style={{ backgroundColor: phase.color, clipPath: idx === 4 ? "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 8% 50%)" : idx === 0 ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)", marginLeft: idx === 0 ? 0 : "-2%" }}>
//                                     <div className="z-10">
//                                         <div className="italic text-xs font-bold mb-0.5">{phase.id}</div>
//                                         <div className="text-[11px] font-black leading-tight uppercase tracking-tight">{phase.title}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Content Grid */}
//                         <div className="grid grid-cols-5 gap-4">
//                             {phases.map((phase, idx) => (
//                                 <div key={idx} className="text-[11px] leading-[1.3] text-gray-700 dark:text-gray-300 space-y-3 pr-2">
//                                     {phase.items.map((item, iIdx) => (
//                                         <div key={iIdx} className="relative pl-3">
//                                             <span className="absolute left-0 top-0.5 text-[8px] font-bold">➢</span>
//                                             {typeof item === 'string' ? (
//                                                 <span>{item}</span>
//                                             ) : (
//                                                 <div className="space-y-1.5">
//                                                     <span>{item.text}</span>
//                                                     <ul className="pl-4 space-y-1 list-disc">
//                                                         {item.subItems.map((sub, sIdx) => (
//                                                             <li key={sIdx}>{sub}</li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Outcomes Section */}
//                         <div className="mt-16">
//                             <h3 className="text-base font-black mb-4 text-[#0A1F44] dark:text-white">Outcomes:</h3>
//                             <div className="grid grid-cols-5">
//                                 {outcomes.map((outcome, idx) => (
//                                     <div key={idx} className="relative h-20 flex items-center justify-center p-4 text-center text-[10px] font-bold leading-tight border border-gray-200 dark:border-gray-700" style={{ backgroundColor: idx > 0 ? outcome.color : 'white', color: idx > 0 ? 'white' : '#333', clipPath: idx === 4 ? "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 8% 50%)" : idx === 0 ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)", marginLeft: idx === 0 ? 0 : "-2%" }}>
//                                         <div className="z-10 px-2">{outcome.text}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </SectionWrapper>
//     );
// };

// export default ExecutionMethodology;



import React from 'react';
import { SectionWrapper } from '../../components/ui/SectionComponents';

const ExecutionMethodology = () => {
    const phases = [
        {
            id: "Phase I",
            title: "Current State Understanding & Diagnostic",
            color: "#0A1F44",
            items: [
                "Review existing informal practices and documentation, where available",
                "Conduct structured process walkthroughs with all the relevant stakeholders",
                "Identify variations in practices across locations",
                "Map current processes to ERP transaction flows and system control environment",
                "Document key gaps in terms of current process and practices, and design level process inefficiencies"
            ]
        },
        {
            id: "Phase II",
            title: "Design of Core SOP",
            color: "#00A693",
            items: [
                {
                    text: "Develop the Core SOP incorporating:",
                    subItems: [
                        "Standardized process maps",
                        "Step-by-step process narratives",
                        "Clearly defined roles and responsibilities of each sub-process (RACI)",
                        "Alignment of key MIS formats, KPIs and TATs, and approved authorization matrices",
                        "ERP alignment and system dependencies"
                    ]
                },
                "Ensure consistency with internal governance, audit, and compliance expectations",
                "Embed best practices"
            ]
        },
        {
            id: "Phase III",
            title: "Customization Identification & Structuring",
            color: "#0076C0",
            items: [
                {
                    text: "Identify genuine location-specific deviations arising from:",
                    subItems: [
                        "Statutory or regulatory requirements",
                        "Physical infrastructure or logistics constraints",
                        "Business-critical operational differences"
                    ]
                },
                {
                    text: "Document such deviations through structured local addendums, ensuring:",
                    subItems: [
                        "Clear linkage to the core SOP",
                        "Defined approval and ownership",
                        "No dilution of core controls"
                    ]
                }
            ]
        },
        {
            id: "Phase IV",
            title: "Stakeholder Validation & Alignment",
            color: "#70757A",
            items: [
                {
                    text: "Conduct alignment workshops and review sessions with relevant stakeholders for:",
                    subItems: [
                        "Validation of SOP design",
                        "Alignment on roles, controls, and MIS",
                        "Final sign-off and governance endorsement"
                    ]
                },
                "Incorporate feedback without compromising standardization objectives"
            ]
        },
        {
            id: "Phase V",
            title: "Finalization & Handover",
            color: "#0056B3",
            items: [
                "Deliver the final SOP",
                "Provide standard key MIS and reporting templates",
                "Share implementation guidance and usage protocols",
                "Conduct training workshop involving all the relevant stakeholders across the locations to enable smooth transition",
                "Internal SOP rollout and implementation"
            ]
        }
    ];

    const outcomes = [
        { text: "A consolidated understanding of current practices, deviations, and control expectations.", color: "#8E44AD" },
        { text: "A draft Core SOP applicable uniformly across all locations.", color: "#9B59B6" },
        { text: "A controlled addendum framework that preserves standardization while enabling flexibility.", color: "#2980B9" },
        { text: "Finalized, approved SOP and addendums ready for rollout.", color: "#16A085" },
        { text: "A robust, auditable, and scalable SOP framework ready for enterprise-wide adoption.", color: "#27AE60" }
    ];

    return (
        <SectionWrapper id="methodology" className="px-6 py-24 transition-colors duration-300 bg-white dark:bg-bgDark">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-4xl font-black mb-12 text-[#0A1F44] dark:text-white">Methodology and Execution Framework</h2>

                {/* Scrollable container with visible scrollbar */}
                <div className="relative pb-4 overflow-x-auto overflow-y-visible" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>
                    <style jsx>{`
                        /* Webkit browsers (Chrome, Safari, Edge) */
                        div::-webkit-scrollbar {
                            height: 12px;
                        }
                        div::-webkit-scrollbar-track {
                            background: #f1f1f1;
                            border-radius: 6px;
                        }
                        div::-webkit-scrollbar-thumb {
                            background: #888;
                            border-radius: 6px;
                        }
                        div::-webkit-scrollbar-thumb:hover {
                            background: #555;
                        }
                        /* Dark mode scrollbar */
                        .dark div::-webkit-scrollbar-track {
                            background: #374151;
                        }
                        .dark div::-webkit-scrollbar-thumb {
                            background: #6B7280;
                        }
                        .dark div::-webkit-scrollbar-thumb:hover {
                            background: #9CA3AF;
                        }
                    `}</style>
                    
                    <div className="min-w-[1000px]">
                        {/* Header Chevrons */}
                        <div className="grid grid-cols-5 mb-8">
                            {phases.map((phase, idx) => (
                                <div key={idx} className="relative flex items-center justify-center h-16 px-8 text-center text-white" style={{ backgroundColor: phase.color, clipPath: idx === 4 ? "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 8% 50%)" : idx === 0 ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)", marginLeft: idx === 0 ? 0 : "-2%" }}>
                                    <div className="z-10">
                                        <div className="italic text-xs font-bold mb-0.5">{phase.id}</div>
                                        <div className="text-[11px] font-black leading-tight uppercase tracking-tight">{phase.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-5 gap-4">
                            {phases.map((phase, idx) => (
                                <div key={idx} className="text-[11px] leading-[1.3] text-gray-700 dark:text-gray-300 space-y-3 pr-2">
                                    {phase.items.map((item, iIdx) => (
                                        <div key={iIdx} className="relative pl-3">
                                            <span className="absolute left-0 top-0.5 text-[8px] font-bold">➢</span>
                                            {typeof item === 'string' ? (
                                                <span>{item}</span>
                                            ) : (
                                                <div className="space-y-1.5">
                                                    <span>{item.text}</span>
                                                    <ul className="pl-4 space-y-1 list-disc">
                                                        {item.subItems.map((sub, sIdx) => (
                                                            <li key={sIdx}>{sub}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Outcomes Section */}
                        <div className="mt-16">
                            <h3 className="text-base font-black mb-4 text-[#0A1F44] dark:text-white">Outcomes:</h3>
                            <div className="grid grid-cols-5">
                                {outcomes.map((outcome, idx) => (
                                    <div key={idx} className="relative h-20 flex items-center justify-center p-4 text-center text-[10px] font-bold leading-tight border border-gray-200 dark:border-gray-700" style={{ backgroundColor: idx > 0 ? outcome.color : 'white', color: idx > 0 ? 'white' : '#333', clipPath: idx === 4 ? "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 8% 50%)" : idx === 0 ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)", marginLeft: idx === 0 ? 0 : "-2%" }}>
                                        <div className="z-10 px-2">{outcome.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExecutionMethodology;