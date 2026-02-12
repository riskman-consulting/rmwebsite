// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FileText,
//     GitBranch,
//     ListChecks,
//     Users,
//     Database,
//     Filter,
//     ArrowRightLeft,
//     ShieldCheck,
//     UploadCloud,
//     SearchCheck,
//     LifeBuoy
// } from 'lucide-react';
// import clsx from 'clsx';

// const ImplementationMethodology = () => {
//     const [activeTab, setActiveTab] = useState('brd');

//     const tabs = [
//         { id: 'brd', label: 'BRD Finalization Approach', icon: FileText },
//         { id: 'migration', label: 'Master Data Migration Approach', icon: Database },
//     ];

//     const brdSteps = [
//         {
//             title: "Objective",
//             desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits.",
//             icon: FileText
//         },
//         {
//             title: "Scope Finalization",
//             desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity.",
//             icon: (props) => <Filter {...props} />
//         },
//         {
//             title: "As‑Is and To‑Be Process Flow",
//             desc: "Documents current workflows and visualizes improved future‑state processes.",
//             icon: GitBranch
//         },
//         {
//             title: "Functional / Non‑Functional Requirements",
//             desc: "Lists detailed system features and business rules, along with performance expectations.",
//             icon: ListChecks
//         },
//         {
//             title: "Committee Discussion and Sign‑Off",
//             desc: "Facilitates review with governance bodies and captures formal approval.",
//             icon: Users
//         }
//     ];

//     const migrationSteps = [
//         {
//             title: "Data Profiling and Cleansing",
//             desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues.",
//             icon: Filter
//         },
//         {
//             title: "Mapping Legacy Fields to New Structure",
//             desc: "Converts old data fields to the new model using robust transformation logic.",
//             icon: ArrowRightLeft
//         },
//         {
//             title: "Master Data Approval and Sign‑Off",
//             desc: "Includes final validation by designated owners and formal approval of data readiness.",
//             icon: ShieldCheck
//         },
//         {
//             title: "Data Upload to New System",
//             desc: "Shares the approved database with the technical team for secure upload.",
//             icon: UploadCloud
//         },
//         {
//             title: "Validation and Reconciliation",
//             desc: "Compares migrated data with source records to confirm completeness and accuracy.",
//             icon: SearchCheck
//         },
//         {
//             title: "Post‑Migration Support",
//             desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system.",
//             icon: LifeBuoy
//         }
//     ];

//     const activeSteps = activeTab === 'brd' ? brdSteps : migrationSteps;

//     return (
//         <section className="relative py-20 overflow-hidden bg-surfaceLight dark:bg-bgDark">
//             {/* Background Elements */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//                 <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-brandPrimary/5 rounded-full blur-3xl" />
//                 <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-brandAccent/5 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10 px-4 mx-auto">
//                 <div className="max-w-3xl mx-auto mb-16 text-center">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white"
//                     >
//                         Implementation Methodology
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="text-lg text-slate-600 dark:text-slate-300"
//                     >
//                         We ensure every RiskMan implementation starts with a structured, governed approach to requirements and data.
//                     </motion.p>
//                 </div>

//                 {/* Tabs */}
//                 <div className="flex flex-wrap justify-center gap-4 mb-16">
//                     {tabs.map((tab) => {
//                         const Icon = tab.icon;
//                         const isActive = activeTab === tab.id;
//                         return (
//                             <button
//                                 key={tab.id}
//                                 onClick={() => setActiveTab(tab.id)}
//                                 className={clsx(
//                                     "relative px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 font-semibold text-lg border-2",
//                                     isActive
//                                         ? "bg-brandPrimary border-brandPrimary text-white shadow-lg shadow-brandPrimary/25 scale-105"
//                                         : "bg-white dark:bg-surfaceDark border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brandPrimary/50 hover:text-brandPrimary dark:hover:text-brandPrimary"
//                                 )}
//                             >
//                                 <Icon size={20} />
//                                 {tab.label}
//                                 {isActive && (
//                                     <motion.div
//                                         layoutId="activeTabIndicator"
//                                         className="absolute w-3 h-3 rotate-45 -translate-x-1/2 -bottom-3 left-1/2 bg-brandPrimary"
//                                     />
//                                 )}
//                             </button>
//                         );
//                     })}
//                 </div>

//                 {/* Content Area */}
//                 <div className="max-w-5xl mx-auto">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeTab}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -20 }}
//                             transition={{ duration: 0.3 }}
//                             className="p-8 bg-white border shadow-xl dark:bg-surfaceDark/50 rounded-3xl md:p-12 border-slate-100 dark:border-white/5"
//                         >
//                             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                                 {activeSteps.map((step, idx) => {
//                                     const Icon = step.icon;
//                                     return (
//                                         <motion.div
//                                             key={idx}
//                                             initial={{ opacity: 0, y: 20 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ delay: idx * 0.1 }}
//                                             className="relative group"
//                                         >
//                                             <div className="absolute inset-0 transition-transform duration-300 transform bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:scale-105 group-hover:-rotate-1" />

//                                             <div className="relative flex flex-col h-full p-6 transition-colors bg-white border border-slate-100 dark:border-white/5 rounded-2xl dark:bg-surfaceDark hover:border-brandPrimary/30 dark:hover:border-brandAccent/30">
//                                                 <div className="flex items-center justify-center w-12 h-12 mb-4 transition-transform duration-300 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent group-hover:scale-110">
//                                                     {typeof Icon === 'function' ? <Icon size={24} /> : <Icon size={24} />}
//                                                 </div>

//                                                 <div className="absolute text-6xl font-bold pointer-events-none select-none top-6 right-6 text-slate-100 dark:text-white/5">
//                                                     {idx + 1}
//                                                 </div>

//                                                 <h4 className="relative z-10 mb-3 text-xl font-bold text-brandDark dark:text-white">
//                                                     {step.title}
//                                                 </h4>
//                                                 <p className="relative z-10 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
//                                                     {step.desc}
//                                                 </p>
//                                             </div>
//                                         </motion.div>
//                                     );
//                                 })}
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ImplementationMethodology;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    GitBranch,
    ListChecks,
    Users,
    Database,
    Filter,
    ArrowRightLeft,
    ShieldCheck,
    UploadCloud,
    SearchCheck,
    LifeBuoy,
    ChevronRight,
} from 'lucide-react';
import clsx from 'clsx';

const ImplementationMethodology = () => {
    const [activeTab, setActiveTab] = useState('brd');
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        { id: 'brd', label: 'BRD Finalization Approach', icon: FileText },
        { id: 'migration', label: 'Master Data Migration Approach', icon: Database },
    ];

    const brdSteps = [
        {
            title: "Objective",
            desc: "Defines the project purpose, highlights key business problems, stakeholders, and measurable benefits.",
            icon: FileText
        },
        {
            title: "Scope Finalization",
            desc: "Clarifies what functionality is included or excluded in the project, minimizing ambiguity.",
            icon: Filter
        },
        {
            title: "As‑Is and To‑Be Process Flow",
            desc: "Documents current workflows and visualizes improved future‑state processes.",
            icon: GitBranch
        },
        {
            title: "Functional / Non‑Functional Requirements",
            desc: "Lists detailed system features and business rules, along with performance expectations.",
            icon: ListChecks
        },
        {
            title: "Committee Discussion and Sign‑Off",
            desc: "Facilitates review with governance bodies and captures formal approval.",
            icon: Users
        }
    ];

    const migrationSteps = [
        {
            title: "Data Profiling & Cleansing",
            desc: "Involves analyzing raw data to correct inconsistencies, duplicates, and formatting issues.",
            icon: Filter
        },
        {
            title: "Mapping Legacy Fields",
            desc: "Converts old data fields to the new model using robust transformation logic.",
            icon: ArrowRightLeft
        },
        {
            title: "Master Data Approval",
            desc: "Includes final validation by designated owners and formal approval of data readiness.",
            icon: ShieldCheck
        },
        {
            title: "Data Upload",
            desc: "Shares the approved database with the technical team for secure upload.",
            icon: UploadCloud
        },
        {
            title: "Validation & Reconciliation",
            desc: "Compares migrated data with source records to confirm completeness and accuracy.",
            icon: SearchCheck
        },
        {
            title: "Post‑Migration Support",
            desc: "Provides a window to handle exceptions, refine rules, and stabilize data in the live system.",
            icon: LifeBuoy
        }
    ];

    const activeSteps = activeTab === 'brd' ? brdSteps : migrationSteps;

    // Reset active index when switching tabs
    React.useEffect(() => {
        setActiveIndex(0);
    }, [activeTab]);

    return (
        <section className="relative py-24 overflow-hidden bg-surfaceLight dark:bg-bgDark">
            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl font-heading text-brandDark dark:text-white">
                        Implementation Methodology
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        A structured approach ensures project success and minimizes risk.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-bold text-sm border-2",
                                    isActive
                                        ? "bg-brandPrimary border-brandPrimary text-white shadow-lg scale-105"
                                        : "bg-white dark:bg-surfaceDark border-slate-200 dark:border-slate-700 text-slate-500 hover:border-brandPrimary/50"
                                )}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* TWO COLUMN LAYOUT: CIRCLE LEFT, CONTENT RIGHT */}
                <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24">

                    {/* LEFT: CIRCULAR NAVIGATION */}
                    <div className="relative w-[500px] h-[500px] flex-shrink-0 hidden lg:block">
                        {/* Connecting Line (Circle) */}
                        <div className="absolute inset-0 border border-dashed rounded-full border-slate-200 dark:border-white/10" />

                        {/* Active Segment Overlay (Visual only, simplified for now) */}
                        <motion.div
                            className="absolute inset-[2px] rounded-full border-2 border-brandAccent border-t-transparent border-l-transparent border-r-transparent opacity-20"
                            animate={{ rotate: activeIndex * (360 / activeSteps.length) }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />

                        {/* Central Hub (Just decorative usually, or shows number) */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-40 h-40 m-auto bg-white rounded-full shadow-2xl dark:bg-surfaceDark">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="text-center"
                                >
                                    <span className="text-5xl font-black text-brandPrimary dark:text-brandAccent">
                                        {String(activeIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="block mt-1 text-xs font-bold tracking-widest uppercase text-slate-400">
                                        Phase
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Satellites (Icons Only) */}
                        {activeSteps.map((step, idx) => {
                            const totalSteps = activeSteps.length;
                            const angle = (idx / totalSteps) * 2 * Math.PI - (Math.PI / 2); // Start at top
                            const radius = 250; // Radius of the circle
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            const isActive = activeIndex === idx;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={clsx(
                                        "absolute w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 z-20 shadow-lg",
                                        isActive
                                            ? "bg-brandPrimary text-white scale-125 z-30"
                                            : "bg-white dark:bg-surfaceDark text-slate-400 dark:text-slate-500 hover:text-brandPrimary hover:bg-slate-50 dark:hover:bg-white/5"
                                    )}
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-2rem', // half of height
                                        marginLeft: '-2rem', // half of width
                                        transform: `translate(${x}px, ${y}px)`
                                    }}
                                >
                                    <div className="transition-transform duration-300 transform">
                                        {React.createElement(step.icon, { size: 24 })}
                                    </div>

                                    {/* Active Pulse */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-xl bg-brandPrimary animate-ping opacity-20" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: CONTENT CARD */}
                    <div className="w-full max-w-lg lg:h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${activeIndex}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white dark:bg-surfaceDark p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5 w-full relative overflow-hidden"
                            >
                                {/* Decorative Number Background */}
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <span className="font-black text-9xl text-brandPrimary">
                                        {String(activeIndex + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-brandAccent/10 text-brandAccent">
                                        Step {String(activeIndex + 1).padStart(2, '0')}
                                    </div>

                                    <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
                                        {activeSteps[activeIndex].title}
                                    </h3>

                                    <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                        {activeSteps[activeIndex].desc}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-colors shadow-lg bg-brandPrimary rounded-xl hover:bg-brandDark shadow-brandPrimary/20">
                                            Detailed Analysis
                                        </button>

                                        <button
                                            onClick={() => setActiveIndex((prev) => (prev + 1) % activeSteps.length)}
                                            className="flex items-center gap-2 px-6 py-4 font-bold transition-opacity text-brandPrimary dark:text-brandAccent hover:opacity-80"
                                        >
                                            Next Phase <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* MOBILE LAYOUT (Simple Stack) */}
                <div className="grid gap-6 mt-12 lg:hidden">
                    {activeSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`p-6 rounded-2xl border transition-all duration-300 ${activeIndex === idx
                                ? 'bg-brandPrimary text-white shadow-xl'
                                : 'bg-white dark:bg-surfaceDark border-slate-100 dark:border-white/10'
                                }`}
                            onClick={() => setActiveIndex(idx)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className={`text-xl font-bold ${activeIndex === idx ? 'text-white' : 'text-brandDark dark:text-white'}`}>
                                    {step.title}
                                </h3>
                                <span className={`text-2xl font-black opacity-20 ${activeIndex === idx ? 'text-white' : 'text-brandPrimary'}`}>
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <p className={`text-sm leading-relaxed ${activeIndex === idx ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImplementationMethodology;
