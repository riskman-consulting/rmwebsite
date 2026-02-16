// import React from 'react';
// import { motion } from 'framer-motion';
// import { TrendingUp, ShieldAlert, Zap, BarChart } from 'lucide-react';
// import InfographicNote from './InfographicNote';

// const ValueDelivered = () => {
//     const impacts = [
//         { icon: <TrendingUp className="text-brandGold" />, title: "Leakage Prevention", desc: "Identification of duplicate payments, incorrect tax applications, and contract non-compliance before the cash outflow occurs." },
//         { icon: <ShieldAlert className="text-brandAccent" />, title: "Risk Mitigation", desc: "Continuous monitoring of high-risk transactions for policy deviations, unauthorized approvals, and regulatory gaps." },
//         { icon: <Zap className="text-brandGold" />, title: "Cycle Time Reduction", desc: "Automated flagging of exceptions reduces the time spent on periodic reconciliations and annual audit preparation." },
//         { icon: <BarChart className="text-brandAccent" />, title: "Process Intelligence", desc: "Root cause analysis of recurring exceptions provides insights for structural process and control improvements." },
//     ];

//     return (
//         <section id="value" className="relative z-10 py-24 bg-bgDark">
//             <div className="container relative z-10">
//                 <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
//                     <div className="w-5 h-[1px] bg-brandAccent" />
//                     Value Delivered
//                 </div>

//                 <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
//                     Impact Beyond Compliance
//                 </h2>
//                 <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

//                 <p className="text-lg font-light text-brandLight/70 mb-16 leading-relaxed max-w-[800px] font-sans">
//                     RiskMan's Concurrent Audit programs deliver measurable financial and operational impact. We transform assurance from a "check-the-box" requirement into a strategic lever for organizational efficiency and risk resilience.
//                 </p>

//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//                     {impacts.map((impact, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="p-8 transition-all duration-300 border bg-surfaceDark/40 backdrop-blur-sm border-brandGold/10 rounded-2xl hover:border-brandGold/30 hover:bg-surfaceDark group"
//                         >
//                             <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform border border-brandGold/20 rounded-xl bg-brandDark group-hover:scale-110">
//                                 {impact.icon}
//                             </div>
//                             <div className="mb-3 text-lg font-bold font-heading text-brandLight">{impact.title}</div>
//                             <div className="font-sans text-sm font-light leading-relaxed text-brandLight/60">{impact.desc}</div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Impact metrics */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="relative p-10 mt-16 overflow-hidden border shadow-2xl bg-gradient-to-br from-surfaceDark to-brandDark border-brandGold/20 rounded-3xl"
//                 >
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-brandGold/5 rounded-full blur-[100px] -mr-32 -mt-32" />

//                     <div className="relative z-10 grid gap-12 text-center md:grid-cols-3">
//                         <div>
//                             <div className="mb-2 text-4xl font-bold text-brandGold font-heading">200K+</div>
//                             <div className="text-[0.6rem] tracking-[2px] uppercase text-brandDark dark:text-white font-semibold">Transactions Analyzed Monthly</div>
//                         </div>
//                         <div className="border-x border-white/5">
//                             <div className="mb-2 text-4xl font-bold text-brandAccent font-heading">15-20%</div>
//                             <div className="text-[0.6rem] tracking-[2px] uppercase text-brandDark dark:text-white font-semibold">Reduction in Error Rates</div>
//                         </div>
//                         <div>
//                             <div className="mb-2 text-4xl font-bold text-brandGold font-heading">ROI 3:1</div>
//                             <div className="text-[0.6rem] tracking-[2px] uppercase text-brandDark dark:text-white font-semibold">Average Program Return</div>
//                         </div>
//                     </div>
//                 </motion.div>
// {/* 
//                 <InfographicNote title="Impact Dashboard" type="lightbulb">
//                     A sample <strong>Executive Value Summary</strong> — showcasing measurable cost savings, risk mitigation metrics, and ROI from a global concurrent audit deployment — is available as a case study reference.
//                 </InfographicNote> */}
//             </div>
//         </section>
//     );
// };

// export default ValueDelivered;


import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, Zap, BarChart } from 'lucide-react';
import InfographicNote from './InfographicNote';

const ValueDelivered = () => {
    const impacts = [
        { icon: <TrendingUp className="text-brandGold" />, title: "Leakage Prevention", desc: "Identification of duplicate payments, incorrect tax applications, and contract non-compliance before the cash outflow occurs." },
        { icon: <ShieldAlert className="text-brandAccent" />, title: "Risk Mitigation", desc: "Continuous monitoring of high-risk transactions for policy deviations, unauthorized approvals, and regulatory gaps." },
        { icon: <Zap className="text-brandGold" />, title: "Cycle Time Reduction", desc: "Automated flagging of exceptions reduces the time spent on periodic reconciliations and annual audit preparation." },
        { icon: <BarChart className="text-brandAccent" />, title: "Process Intelligence", desc: "Root cause analysis of recurring exceptions provides insights for structural process and control improvements." },
    ];

    return (
        <section id="value" className="relative z-10 transition-colors py-14 md:py-20 bg-bgLight dark:bg-bgDark">
            <div className="container relative z-10 px-6 lg:px-12">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Value Delivered
                </div>

                <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandDark dark:text-brandLight">
                    Impact Beyond Compliance
                </h2>
                <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                <p className="text-lg text-brandNavy dark:text-white/70 mb-16 leading-relaxed max-w-[800px] font-sans">
                    RiskMan's Concurrent Audit programs deliver measurable financial and operational impact. We transform assurance from a "check-the-box" requirement into a strategic lever for organizational efficiency and risk resilience.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 transition-all duration-300 border bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold/30 hover:shadow-xl group"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-all border shadow-md border-borderLight dark:border-borderDark rounded-xl bg-bgLight dark:bg-bgDark group-hover:scale-110">
                                {impact.icon}
                            </div>
                            <div className="mb-3 text-lg font-bold font-heading text-brandDark dark:text-brandAccent">{impact.title}</div>
                            <div className="font-sans font-light leading-relaxed text-md text-brandDark dark:text-white/70 opacity-70">{impact.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Impact metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-10 bg-gradient-to-br from-brandNavy/90 to-bgDark border border-brandGold/20 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brandGold/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                    <div className="relative z-10 grid gap-12 text-center md:grid-cols-3">
                        <div>
                            <div className="mb-2 text-4xl font-extrabold text-brandGold font-heading">200K+</div>
                            <div className="text-[0.6rem] tracking-[2px] uppercase text-brandLight/40 font-mono">Transactions Analyzed Monthly</div>
                        </div>
                        <div className="md:border-x border-white/5">
                            <div className="mb-2 text-4xl font-extrabold text-brandAccent font-heading">15-20%</div>
                            <div className="text-[0.6rem] tracking-[2px] uppercase text-brandLight/40 font-mono">Reduction in Error Rates</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-extrabold text-brandGold font-heading">ROI 3:1</div>
                            <div className="text-[0.6rem] tracking-[2px] uppercase text-brandLight/40 font-mono">Average Program Return</div>
                        </div>
                    </div>
                </motion.div>

                {/* <InfographicNote title="Impact Dashboard" type="lightbulb">
                    A sample <strong>Executive Value Summary</strong> — showcasing measurable cost savings, risk mitigation metrics, and ROI from a global concurrent audit deployment — is available as a case study reference.
                </InfographicNote> */}
            </div>
        </section>
    );
};

export default ValueDelivered;
