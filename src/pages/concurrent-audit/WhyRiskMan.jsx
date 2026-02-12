// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Search, Briefcase } from 'lucide-react';

// const WhyRiskMan = () => {
//     const differentiators = [
//         { icon: <Award className="text-brandGold" />, title: "Domain Expertise", desc: "Auditors with deep process understanding across P2P, O2C, Payroll, and Treasury cycles." },
//         { icon: <Users className="text-brandAccent" />, title: "Hybrid Delivery", desc: "Strategic mix of onsite presence and offshore scale for cost-effective global coverage." },
//         { icon: <Search className="text-brandGold" />, title: "Risk-First Lens", desc: "Methodology focused on identifying high-impact leakage and control bypasses." },
//         { icon: <Briefcase className="text-brandAccent" />, title: "Governance Track Record", desc: "Trusted by Fortune 500 audit committees for multi-year concurrent audit programs." }
//     ];

//     return (
//         <section id="why" className="relative z-10 py-24 bg-bgDark">
//             <div className="container relative z-10">
//                 <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
//                     <div className="w-5 h-[1px] bg-brandAccent" />
//                     07 — Why RiskMan?
//                 </div>

//                 <div className="grid items-center gap-16 lg:grid-cols-2">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
//                             The RiskMan Advantage
//                         </h2>
//                         <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

//                         <p className="mb-10 font-sans text-lg font-light leading-relaxed text-brandLight/70">
//                             Deploying a concurrent audit program requires more than just tools; it requires a partner who understands the nuance of global operations and the rigor of assurance standards. RiskMan brings a combined 18 years of specialized experience in audit and advisory.
//                         </p>

//                         <div className="space-y-4">
//                             {differentiators.map((item, index) => (
//                                 <div key={index} className="flex gap-5 p-5 transition-colors border bg-surfaceDark/40 border-borderDark rounded-xl hover:border-brandGold/20 group">
//                                     <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-lg shrink-0 bg-brandDark border-brandGold/10 group-hover:border-brandGold/40">
//                                         {item.icon}
//                                     </div>
//                                     <div>
//                                         <div className="font-heading text-[0.95rem] font-bold text-brandLight mb-1">{item.title}</div>
//                                         <div className="font-sans text-xs font-light leading-relaxed text-brandLight/50">{item.desc}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="relative"
//                     >
//                         <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-brandGold/20">
//                             <img
//                                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
//                                 alt="RiskMan Team Collaboration"
//                                 className="w-full h-[600px] object-cover"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-transparent to-transparent" />

//                             <div className="absolute p-6 border bottom-8 left-8 right-8 bg-surfaceDark/90 backdrop-blur-md rounded-xl border-brandGold/30">
//                                 <div className="mb-1 text-xl font-bold text-brandGold font-heading">Global Scale. Local Nuance.</div>
//                                 <div className="text-sm font-light leading-relaxed text-brandLight/60">Bringing standardized governance to localized operations across multiple countries.</div>
//                             </div>
//                         </div>

//                         {/* Decorative background circle */}
//                         <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 rounded-full blur-[80px]" />
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyRiskMan;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Search, Briefcase } from 'lucide-react';
import image from "../../assets/images/concurrent-audit/why_risk.png"

const WhyRiskMan = () => {
    const differentiators = [
        { icon: <Award className="text-brandGold" />, title: "Domain Expertise", desc: "Auditors with deep process understanding across P2P, O2C, Payroll, and Treasury cycles." },
        { icon: <Users className="text-brandAccent" />, title: "Hybrid Delivery", desc: "Strategic mix of onsite presence and offshore scale for cost-effective global coverage." },
        { icon: <Search className="text-brandGold" />, title: "Risk-First Lens", desc: "Methodology focused on identifying high-impact leakage and control bypasses." },
        { icon: <Briefcase className="text-brandAccent" />, title: "Governance Track Record", desc: "Trusted by Fortune 500 audit committees for multi-year concurrent audit programs." }
    ];

    return (
        <section id="why" className="relative z-10 transition-colors py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
            <div className="container relative z-10 px-6 lg:px-20">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Why RiskMan?
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandDark dark:text-white">
                            The RiskMan Advantage
                        </h2>
                        <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                        <p className="mb-10 font-sans font-light leading-relaxed text-md text-brandPrimary dark:text-white/70">
                            Deploying a concurrent audit program requires more than just tools; it requires a partner who understands the nuance of global operations and the rigor of assurance standards. RiskMan brings a combined 18 years of specialized experience in audit and advisory.
                        </p>

                        <div className="space-y-4">
                            {differentiators.map((item, index) => (
                                <div key={index} className="flex gap-5 p-5 transition-all border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandGold/20 group">
                                    <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-lg shadow-sm shrink-0 bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark group-hover:border-brandGold/40">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="mb-1 text-sm font-bold font-heading text-brandDark dark:text-brandAccent">{item.title}</div>
                                        <div className="font-sans font-light leading-relaxed text-md text-brandNavy dark:text-white/70 opacity-60">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-brandGold/20">
                            <img
                                src={image}
                                alt="RiskMan Team Collaboration"
                                className="w-full h-[600px] object-top object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute p-6 transition-colors border bottom-8 left-8 right-8 bg-bgLight/90 dark:bg-bgDark/90 backdrop-blur-md rounded-xl border-brandGold/30">
                                <div className="mb-1 text-xl font-bold text-brandGold font-heading">Global Scale. Local Nuance.</div>
                                <div className="font-light leading-relaxed text-md text-brandDark dark:text-white/70 opacity-70">Bringing standardized governance to localized operations across multiple countries.</div>
                            </div>
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyRiskMan;
