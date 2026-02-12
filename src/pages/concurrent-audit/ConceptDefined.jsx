// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Search, AreaChart, Plane, CheckCircle2, AlertCircle } from 'lucide-react';
// import InfographicNote from './InfographicNote';

// const ConceptDefined = () => {
//     const comparisonData = [
//         { traditional: "Retrospective — post-period review", concurrent: "Real-time — review as transactions occur" },
//         { traditional: "Sample-based testing", concurrent: "Full population or risk-stratified coverage" },
//         { traditional: "Findings reported after the fact", concurrent: "Exceptions flagged and escalated immediately" },
//         { traditional: "Annual or quarterly cycle", concurrent: "Continuous — daily, weekly, or event-driven" },
//         { traditional: "Corrective action is delayed", concurrent: "Preventive action is embedded into the process" },
//     ];

//     const scopeCards = [
//         { icon: <ShieldCheck className="text-brandGold" size={32} />, title: "Pre-Payment Audit", desc: "Review of invoices, POs, and payment triggers before disbursement" },
//         { icon: <Search className="text-brandAccent" size={32} />, title: "Post-Payment Audit", desc: "Verification of processed payments for leakage, duplicates, and non-compliance" },
//         { icon: <AreaChart className="text-brandGold" size={32} />, title: "Revenue Assurance", desc: "End-to-end review of billing accuracy, revenue recognition, and receivable integrity" },
//         { icon: <Plane className="text-brandAccent" size={32} />, title: "Travel & Expense Audit", desc: "Policy compliance review of T&E claims, approvals, and reimbursement accuracy" },
//     ];

//     return (
//         <section id="concept" className="relative z-10 py-24 bg-bgDark">
//             <div className="container relative z-10">
//                 <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
//                     <div className="w-5 h-[1px] bg-brandAccent" />
//                     Concept Defined
//                 </div>

//                 <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
//                     What Is a Concurrent Audit?
//                 </h2>
//                 <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

//                 <p className="text-lg font-light text-brandLight/70 mb-12 leading-relaxed max-w-[800px] font-sans">
//                     A Concurrent Audit is the systematic, real-time or near-real-time review of transactions, processes, and controls as they occur within an organization's operating cycle. Unlike traditional audits, which examine historical records after period-end close, concurrent audits operate alongside business processes — catching errors, policy violations, and control gaps before they translate into financial losses or compliance exposure.
//                 </p>

//                 {/* Comparison Table */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="mt-12 overflow-hidden border shadow-2xl border-brandGold/20 rounded-2xl bg-surfaceDark/40 backdrop-blur-sm"
//                 >
//                     <div className="grid grid-cols-2 border-b bg-brandNavy/30 border-brandGold/20">
//                         <div className="p-5 text-xs font-bold tracking-widest uppercase font-heading text-brandLight/50">
//                             Traditional Audit
//                         </div>
//                         <div className="flex items-center gap-2 p-5 text-xs font-bold tracking-widest uppercase border-l font-heading text-brandGold border-brandGold/20">
//                             <CheckCircle2 size={16} /> Concurrent Audit
//                         </div>
//                     </div>
//                     {comparisonData.map((row, index) => (
//                         <div key={index} className="grid grid-cols-2 transition-colors border-b border-white/5 hover:bg-white/5 last:border-b-0 group">
//                             <div className="p-5 text-[0.9rem] font-sans font-light text-brandLight/40 flex items-center gap-3">
//                                 <AlertCircle size={14} className="transition-opacity opacity-0 group-hover:opacity-100" />
//                                 {row.traditional}
//                             </div>
//                             <div className="p-5 text-[0.9rem] font-sans font-medium text-brandLight border-l border-brandGold/10 flex items-center gap-3">
//                                 <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
//                                 {row.concurrent}
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>

//                 {/* <InfographicNote title="Strategy Guide: Decision Makers" type="info">
//                     A one-page infographic — <strong>"Traditional vs Concurrent Audit at a Glance"</strong> — is available as a downloadable reference for board and audit committee distribution.
//                 </InfographicNote> */}

//                 {/* Scope of Coverage */}
//                 <div className="flex items-center gap-4 mt-20 mb-10 text-xs font-bold tracking-widest uppercase font-heading text-brandAccent">
//                     Scope of Coverage <div className="flex-1 h-px bg-brandGold/10" />
//                 </div>

//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {scopeCards.map((card, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceDark/60 border-brandGold/10 rounded-2xl hover:border-brandGold/30 hover:bg-surfaceDark"
//                         >
//                             <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 transition-colors rounded-full bg-brandGold/5 blur-2xl group-hover:bg-brandGold/10" />
//                             <div className="relative z-10 mb-6 transition-transform duration-300 transform group-hover:-translate-y-1">{card.icon}</div>
//                             <div className="relative z-10 mb-3 text-lg font-bold font-heading text-brandLight">{card.title}</div>
//                             <div className="relative z-10 font-sans text-sm font-light leading-relaxed text-brandLight/60">{card.desc}</div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ConceptDefined;



import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, AreaChart, Plane, CheckCircle2, AlertCircle } from 'lucide-react';
import InfographicNote from './InfographicNote';

const ConceptDefined = () => {
    const comparisonData = [
        { traditional: "Retrospective — post-period review", concurrent: "Real-time — review as transactions occur" },
        { traditional: "Sample-based testing", concurrent: "Full population or risk-stratified coverage" },
        { traditional: "Findings reported after the fact", concurrent: "Exceptions flagged and escalated immediately" },
        { traditional: "Annual or quarterly cycle", concurrent: "Continuous — daily, weekly, or event-driven" },
        { traditional: "Corrective action is delayed", concurrent: "Preventive action is embedded into the process" },
    ];

    const scopeCards = [
        { icon: <ShieldCheck className="text-brandGold" size={32} />, title: "Pre-Payment Audit", desc: "Review of invoices, POs, and payment triggers before disbursement" },
        { icon: <Search className="text-brandAccent" size={32} />, title: "Post-Payment Audit", desc: "Verification of processed payments for leakage, duplicates, and non-compliance" },
        { icon: <AreaChart className="text-brandGold" size={32} />, title: "Revenue Assurance", desc: "End-to-end review of billing accuracy, revenue recognition, and receivable integrity" },
        { icon: <Plane className="text-brandAccent" size={32} />, title: "Travel & Expense Audit", desc: "Policy compliance review of T&E claims, approvals, and reimbursement accuracy" },
    ];

    return (
        <section id="concept" className="relative z-10 py-16 transition-colors bg-surfaceLight dark:bg-surfaceDark">
            <div className="container relative z-10 px-6 lg:px-20">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Concept Defined
                </div>

                <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandDark dark:text-brandLight">
                    What Is a Concurrent Audit?
                </h2>
                <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                <p className="text-lg  text-brandNavy dark:text-white/70 mb-12 leading-relaxed max-w-[800px] font-sans">
                    A Concurrent Audit is the systematic, real-time or near-real-time review of transactions, processes, and controls as they occur within an organization's operating cycle. Unlike traditional audits, which examine historical records after period-end close, concurrent audits operate alongside business processes — catching errors, policy violations, and control gaps before they translate into financial losses or compliance exposure.
                </p>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 overflow-hidden transition-colors border shadow-2xl border-borderLight dark:border-borderDark rounded-2xl bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm"
                >
                    <div className="grid grid-cols-2 transition-colors border-b bg-brandGold/5 border-borderLight dark:border-borderDark">
                        <div className="p-5 text-xs font-bold tracking-widest text-gray-500 uppercase opacity-50 font-heading dark:text-gray-400">
                            Traditional Audit
                        </div>
                        <div className="flex items-center gap-2 p-5 text-xs font-bold tracking-widest uppercase transition-colors border-l font-heading text-brandGold border-borderLight dark:border-borderDark">
                            <CheckCircle2 size={16} /> Concurrent Audit
                        </div>
                    </div>
                    {comparisonData.map((row, index) => (
                        <div key={index} className="grid grid-cols-2 transition-colors border-b border-borderLight dark:border-borderDark hover:bg-brandGold/5 last:border-b-0 group">
                            <div className="p-5 text-[0.9rem] font-sans font-light text-black dark:text-bgLight opacity-60 flex items-center gap-3">
                                <AlertCircle size={14} className="transition-opacity opacity-0 group-hover:opacity-100" />
                                {row.traditional} 
                            </div>
                            <div className="p-5 text-[0.9rem] font-sans font-medium text-brandDark dark:text-brandLight border-l border-borderLight dark:border-borderDark flex items-center gap-3 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
                                {row.concurrent}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* <InfographicNote title="Strategy Guide: Decision Makers" type="info">
                    A one-page infographic — <strong>"Traditional vs Concurrent Audit at a Glance"</strong> — is available as a downloadable reference for board and audit committee distribution.
                </InfographicNote> */}

                {/* Scope of Coverage */}
                <div className="flex items-center gap-4 mt-20 mb-10 text-xs font-bold tracking-widest uppercase font-heading text-brandAccent">
                    Scope of Coverage <div className="flex-1 h-px bg-brandGold/10" />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {scopeCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandGold/30 hover:shadow-xl"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 transition-colors rounded-full bg-brandGold/5 blur-2xl group-hover:bg-brandGold/10" />
                            <div className="relative z-10 mb-6 transition-transform duration-300 transform group-hover:-translate-y-1">{card.icon}</div>
                            <div className="relative z-10 mb-3 text-lg font-bold font-heading text-brandDark dark:text-brandAccent">{card.title}</div>
                            <div className="relative z-10 font-sans text-sm font-light leading-relaxed text-brandNavy dark:text-white/70">{card.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConceptDefined;