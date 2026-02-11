import React from 'react';
import { SectionWrapper } from '../../components/ui/SectionComponents';
import { motion } from 'framer-motion';

const OrganogramPreview = () => (
    <div className="w-full h-full p-2 text-[4px] lg:text-[5px] font-sans leading-tight text-slate-800 bg-white select-none overflow-hidden">
        <div className="font-bold border-b border-slate-200 mb-1 pb-0.5 text-[6px] lg:text-[7px]">5. Organization structure</div>
        <p className="mb-1 text-slate-600">The process control, functioning and day to day working in relation to Human Resources and Payroll is dealt by various teams such as recruitment, HRBP, Payroll and Finance.</p>
        <p className="mb-2 text-slate-600">The broad structure and responsibilities in relation to Human Resources and Payroll process and functioning has been designed for the purpose of defining control, reporting lines, and working relationship to ensure achievement of process objectives.</p>

        <div className="bg-black text-white text-[5px] lg:text-[6px] px-2 py-0.5 font-bold mb-3 inline-block uppercase">ORGANOGRAM</div>

        <div className="flex flex-col items-center">
            {/* Top Row */}
            <div className="grid w-full grid-cols-3 gap-4 px-4 mb-4">
                <div className="bg-[#0A1F44] text-white p-1 text-center font-bold rounded shadow-sm">Operations Head</div>
                <div className="bg-[#0A1F44] text-white p-1 text-center font-bold rounded shadow-sm">SVP Strategic Initiatives</div>
                <div className="bg-[#0A1F44] text-white p-1 text-center font-bold rounded shadow-sm">Finance Head</div>
            </div>

            {/* Mid Row */}
            <div className="grid w-full grid-cols-4 gap-2 px-2 mb-4">
                <div className="border border-[#0A1F44] p-1 text-center rounded bg-slate-50 font-bold leading-none py-1.5 flex items-center justify-center">Business Unit (BU) Head</div>
                <div className="border border-[#0A1F44] p-1 text-center rounded bg-slate-50 font-bold leading-none py-1.5 flex items-center justify-center">Associate Director, HR</div>
                <div className="border border-[#0A1F44] p-1 text-center rounded bg-slate-50 font-bold leading-none py-1.5 flex items-center justify-center">Director, Business Excellence</div>
                <div className="border border-[#0A1F44] p-1 text-center rounded bg-slate-50 font-bold leading-none py-1.5 flex items-center justify-center">Director Finance</div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-6 gap-1 w-full text-[3px] lg:text-[4px]">
                {[
                    "Senior Manager/ Manager/ Team lead (Operations Team)",
                    "Senior Manager/ Assistant Manager/ Team lead (Recruitment Team)",
                    "PMC (On-boarding Team)",
                    "Assistant Manager, Payroll",
                    "Senior Manager/ Assistant Manager/ Manager/ Team lead (HRBP Team)",
                    "Senior Manager/ Assistant Manager/ Manager/ Team lead (Finance Team)"
                ].map((role, i) => (
                    <div key={i} className="bg-[#0A1F44] text-white p-1 text-center rounded min-h-[25px] flex items-center justify-center font-bold leading-none">
                        {role}
                    </div>
                ))}
            </div>

            {/* Description Boxes below bottom row */}
            <div className="grid grid-cols-6 gap-1 w-full mt-1 text-[2.5px] lg:text-[3.5px] leading-[1.1] text-slate-500 italic">
                {[
                    "Ensure execution for manpower and business operations.",
                    "Strategy, sourcing and pipeline. Tie up agencies with BU.",
                    "Review documents, initiation of the tasks, signing-off docs.",
                    "Processing the payroll in relation to recruits & terminations.",
                    "Discharging the roles and bank in cases where required.",
                    "Processing funds related to employee payments."
                ].map((text, i) => (
                    <div key={i} className="border-t border-slate-100 pt-0.5 px-0.5 text-center">
                        {text}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ProcessMapPreview = () => (
    <div className="w-full h-full p-2 text-[4px] lg:text-[5px] font-sans text-slate-800 bg-white relative select-none overflow-hidden">
        <div className="font-bold border-b border-slate-200 mb-1 pb-0.5 text-[6px] lg:text-[7px]">Process Map:</div>
        <div className="pl-1 mb-2 font-bold text-black border-l-2 border-black">Employee onboarding, induction, and employee ID creation process</div>

        <div className="flex w-full mt-2 border h-4/5 border-slate-200">
            {/* Swimlanes labels */}
            <div className="w-8 border-r border-slate-200 flex flex-col font-bold text-[3.5px] lg:text-[4.5px] h-full bg-slate-50">
                <div className="flex items-center justify-center flex-1 -rotate-90 border-b border-slate-200">Onboarding Team</div>
                <div className="flex items-center justify-center flex-1 -rotate-90 border-b border-slate-200">Candidate</div>
                <div className="flex items-center justify-center flex-1 leading-tight text-center -rotate-90">IT / Facility / Admin Team</div>
            </div>

            {/* Lane Content */}
            <div className="relative flex flex-col flex-1 h-full">
                {/* Flow 1 */}
                <div className="flex flex-col items-center flex-1 p-1 border-b border-slate-200">
                    <div className="px-1 py-0.5 rounded-full border border-black bg-slate-50 mb-1 text-[3px]">Start</div>
                    <div className="w-4/5 p-1 border border-black bg-white text-center text-[3px] lg:text-[4px] leading-tight">
                        Candidate acceptance of offer letter, candidate profile is moved to pre-onboarding stage...
                    </div>
                    <div className="w-4/5 p-1 border border-black bg-white text-center text-[3px] lg:text-[4px] leading-tight mt-1">
                        Initiate the onboarding process by assigning following templates: Onboarding forms...
                    </div>
                </div>
                {/* Flow 2 */}
                <div className="flex flex-col items-center justify-center flex-1 p-1 border-b border-slate-200">
                    <div className="w-4/5 p-1 border border-black bg-white text-center text-[3px] lg:text-[4px] leading-tight">
                        Update profile and submit the required documents on link received
                    </div>
                </div>
                {/* Flow 3 */}
                <div className="flex flex-col items-center justify-center flex-1 p-1">
                    <div className="w-4/5 p-1 border border-black bg-white text-center text-[3px] lg:text-[4px] leading-tight">
                        Arrange IT Assets and workspace for the new onboarded candidates...
                    </div>
                    <div className="px-1 py-0.5 rounded-full border border-black bg-slate-50 mt-1 text-[3px]">End</div>
                </div>

                {/* Watermark Overlay (Specific to this preview as requested) */}
                <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center opacity-[0.2]">
                    <div className="text-[20px] lg:text-[30px] font-black text-[#F44336] uppercase tracking-[0.2em] -rotate-45 whitespace-nowrap">
                        Illustrative Deliverables
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const NarrativePreview = () => (
    <div className="w-full h-full p-2 text-[3.5px] lg:text-[4.5px] font-sans text-slate-800 bg-white select-none overflow-hidden">
        <div className="font-bold mb-1 text-[6px] lg:text-[7px]">Process Narratives:</div>
        <table className="w-full border border-collapse border-slate-300">
            <thead>
                <tr className="bg-[#0A1F44] text-white">
                    <th className="border border-slate-400 p-0.5 text-left">Step no.</th>
                    <th className="border border-slate-400 p-0.5 text-left w-1/2">Step details</th>
                    <th className="border border-slate-400 p-0.5 text-left">Responsibility</th>
                    <th className="border border-slate-400 p-0.5 text-left">Inputs</th>
                    <th className="border border-slate-400 p-0.5 text-left">Outputs</th>
                    <th className="border border-slate-400 p-0.5 text-left">Frequency</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-slate-200 font-bold border-y border-slate-300 text-[4px] lg:text-[5px]">
                    <td colSpan="6" className="p-0.5 py-1">C 1. Employee onboarding, induction, and employee ID creation</td>
                </tr>
                <tr className="italic font-bold border-b bg-slate-100 border-slate-300">
                    <td colSpan="6" className="p-0.5 px-2">Onboarding process</td>
                </tr>
                {[
                    {
                        id: "C 1.1",
                        details: "Based on candidate acceptance of offer letter, candidate profile is moved to pre-onboarding stage and candidate status is updated as 'Initiate onboarding'.",
                        res: "PMO, Onboarding Team",
                        in: "Offer letter",
                        out: "Initiate onboarding",
                        freq: "As and when"
                    },
                    {
                        id: "C 1.2",
                        details: "Initiate the onboarding process by assigning following templates: Onboarding candidate application form, Sign-off documents, Reference documents...",
                        res: "PMO, Onboarding Team",
                        in: "Initiate onboarding",
                        out: "Assigning templates and Key person",
                        freq: "As and when"
                    },
                    {
                        id: "C 1.3",
                        details: "Assign key people such as Buddy, teammates and CC users for the onboarding process. Arrange IT Assets and workspace for the new onboarded candidates.",
                        res: "IT/HRBP/Admin Facility Team",
                        in: "Assigning templates and Key person",
                        out: "Arrangement of assets",
                        freq: "As and when"
                    },
                    {
                        id: "C 1.4",
                        details: "Update profile and submit the required documents on link received. PMO/onboarding assist employee in case of any query.",
                        res: "Candidate",
                        in: "Arrangement of assets",
                        out: "Update candidate profile",
                        freq: "As and when"
                    }
                ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-200">
                        <td className="border-r border-slate-200 p-0.5 font-bold align-top">{row.id}</td>
                        <td className="border-r border-slate-200 p-0.5 leading-tight">{row.details}</td>
                        <td className="border-r border-slate-200 p-0.5 align-top">{row.res}</td>
                        <td className="border-r border-slate-200 p-0.5 align-top italic">{row.in}</td>
                        <td className="border-r border-slate-200 p-0.5 align-top">{row.out}</td>
                        <td className="p-0.5 align-top">{row.freq}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const SOPDeliverables = () => {
    const cards = [
        {
            title: "Organization Structure",
            desc: "Clear hierarchy and reporting lines ensuring accountability across all levels."
        },
        {
            title: "Process Maps",
            desc: "Visual workflows detailing every step, decision point, and system interaction."
        },
        {
            title: "Process Narratives",
            desc: "Detailed step-by-step descriptions with inputs, outputs, and responsibilities."
        }
    ];

    return (
        <SectionWrapper id="deliverables" className="py-24 px-6 bg-slate-50 dark:bg-[#001428] transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="relative p-8 overflow-hidden bg-white border shadow-xl dark:bg-surfaceDark rounded-3xl lg:p-12 border-slate-200 dark:border-white/5">

                    {/* Main Title Bar */}
                    <div className="py-4 mb-12 text-center text-white bg-black rounded-lg shadow-lg">
                        <h2 className="px-4 text-xl font-bold tracking-tight uppercase lg:text-3xl">Standard Operating Procedure document</h2>
                    </div>

                    {/* Header Columns */}
                    <div className="relative grid grid-cols-1 gap-8 px-2 mb-16 md:grid-cols-3 lg:px-0">
                        {cards.map((card, idx) => (
                            <div key={idx} className="space-y-6">
                                {/* Dashed Category Box */}
                                <div className="bg-[#D1D5DB] dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-500 py-3 text-center rounded-lg shadow-sm">
                                    <span className="text-xl font-black tracking-tight text-black uppercase lg:text-2xl dark:text-white">{card.title}</span>
                                </div>

                                {/* High-Fidelity Document Area */}
                                <div className="bg-white border border-slate-300 rounded shadow-md aspect-[1/1.414] relative overflow-hidden p-1 group hover:border-brandPrimary/30 transition-colors">
                                    {/* Detailed Previews */}
                                    {idx === 0 && <OrganogramPreview />}
                                    {idx === 1 && <ProcessMapPreview />}
                                    {idx === 2 && <NarrativePreview />}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Summary Cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 transition-all bg-white border shadow-sm dark:bg-slate-800/50 rounded-2xl border-slate-100 dark:border-white/5 hover:shadow-md group"
                            >
                                <h3 className="mb-2 text-lg font-black tracking-tight transition-transform text-brandPrimary dark:text-brandAccent group-hover:translate-x-1">{card.title}</h3>
                                <p className="text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-400">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default SOPDeliverables;
