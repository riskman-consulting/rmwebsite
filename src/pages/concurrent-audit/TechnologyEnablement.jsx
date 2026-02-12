// import React from 'react';
// import { motion } from 'framer-motion';
// import { Cpu, Database, BarChart3, Binary, Share2, Layers } from 'lucide-react';
// import InfographicNote from './InfographicNote';

// const TechnologyEnablement = () => {
//     const techStack = [
//         { icon: <Database className="text-brandGold" />, title: "Data Ingestion", desc: "Automated extraction from diverse ERPs (SAP, Oracle, MS Dynamics, etc.)" },
//         { icon: <Binary className="text-brandAccent" />, title: "Rule Engine", desc: "Customized scripts to flag exceptions based on policy and logic" },
//         { icon: <BarChart3 className="text-brandGold" />, title: "Visualization", desc: "Real-time dashboards for exception tracking and aging analysis" },
//         { icon: <Share2 className="text-brandAccent" />, title: "Workflow Integration", desc: "Automatic escalation via email/API to relevant business owners" }
//     ];

//     return (
//         <section id="tech" className="relative z-10 py-24 bg-bgDark">
//             <div className="container relative z-10">
//                 <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
//                     <div className="w-5 h-[1px] bg-brandAccent" />
//                     Technology & Enablement
//                 </div>

//                 <div className="grid items-center gap-16 lg:grid-cols-2">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
//                             Assurance Powered by Analytics
//                         </h2>
//                         <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

//                         <p className="mb-8 font-sans text-lg font-light leading-relaxed text-brandLight/70">
//                             While our methodology is people-driven, our execution is technology-enabled. RiskMan leverages advanced data analytics and continuous monitoring tools to gain 100% visibility into transaction universes — moving beyond sampling to comprehensive oversight.
//                         </p>

//                         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                             {techStack.map((tech, index) => (
//                                 <div key={index} className="p-6 transition-colors border bg-surfaceDark/40 border-borderDark rounded-xl hover:border-brandGold/20">
//                                     <div className="mb-4">{tech.icon}</div>
//                                     <div className="mb-2 text-sm font-bold font-heading text-brandLight">{tech.title}</div>
//                                     <div className="text-[0.8rem] text-brandLight/50 leading-relaxed font-sans font-light">{tech.desc}</div>
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
//                         <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-brandGold/20 group">
//                             <img
//                                 src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
//                                 alt="Technology & Analytics"
//                                 className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-brandDark/60 via-transparent to-transparent" />

//                             {/* Overlay elements */}
//                             <div className="absolute p-4 border rounded-lg top-6 left-6 bg-brandDark/80 backdrop-blur-md border-brandGold/30">
//                                 <Cpu className="mb-2 text-brandGold" size={24} />
//                                 <div className="text-[0.6rem] font-mono uppercase tracking-widest text-brandLight/60">Node Status</div>
//                                 <div className="text-xs font-bold text-brandAccent">REAL-TIME MONITORING ACTIVE</div>
//                             </div>
//                         </div>

//                         {/* Decorative background circle */}
//                         <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-brandAccent/10 rounded-full blur-[80px]" />
//                     </motion.div>
//                 </div>

//                 {/* <InfographicNote title="The Tech Stack" type="info">
//                     A visual overview of the <strong>Technology Architecture for Concurrent Audit</strong> — including data ingestion, transformation, and dashboard layers — is available for IT and security leadership review.
//                 </InfographicNote> */}
//             </div>
//         </section>
//     );
// };

// export default TechnologyEnablement;


import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, BarChart3, Binary, Share2, Layers } from 'lucide-react';
import InfographicNote from './InfographicNote';

const TechnologyEnablement = () => {
    const techStack = [
        { icon: <Database className="text-brandGold" />, title: "Data Ingestion", desc: "Automated extraction from diverse ERPs (SAP, Oracle, MS Dynamics, etc.)" },
        { icon: <Binary className="text-brandAccent" />, title: "Rule Engine", desc: "Customized scripts to flag exceptions based on policy and logic" },
        { icon: <BarChart3 className="text-brandGold" />, title: "Visualization", desc: "Real-time dashboards for exception tracking and aging analysis" },
        { icon: <Share2 className="text-brandAccent" />, title: "Workflow Integration", desc: "Automatic escalation via email/API to relevant business owners" }
    ];

    return (
        <section id="tech" className="relative z-10 transition-colors py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
            <div className="container relative z-10 px-6 lg:px-20">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Technology & Enablement
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-6 text-2xl font-extrabold leading-tight font-heading md:text-3xl text-brandDark dark:text-white">
                            Assurance Powered by Analytics
                        </h2>
                        <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                        <p className="mb-8 font-sans leading-relaxed text-md text-brandNavy dark:text-white/70">
                            While our methodology is people-driven, our execution is technology-enabled. RiskMan leverages advanced data analytics and continuous monitoring tools to gain 100% visibility into transaction universes — moving beyond sampling to comprehensive oversight.
                        </p>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {techStack.map((tech, index) => (
                                <div key={index} className="p-6 transition-all border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:border-brandGold/20">
                                    <div className="mb-4">{tech.icon}</div>
                                    <div className="mb-2 text-sm font-bold font-heading text-brandDark dark:text-brandAccent">{tech.title}</div>
                                    <div className="text-[0.8rem] text-brandNavy dark:text-white/70 opacity-60 leading-relaxed font-sans font-semibold">{tech.desc}</div>
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
                        <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-brandGold/20 group">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                                alt="Technology & Analytics"
                                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Overlay elements */}
                            <div className="absolute p-4 transition-colors border rounded-lg top-6 left-6 bg-bgLight/80 dark:bg-bgDark/80 backdrop-blur-md border-brandGold/30">
                                <Cpu className="mb-2 text-brandGold" size={24} />
                                <div className="text-[0.6rem] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 opacity-60">Node Status</div>
                                <div className="text-xs font-bold text-brandAccent">REAL-TIME MONITORING ACTIVE</div>
                            </div>
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-brandAccent/10 rounded-full blur-[80px]" />
                    </motion.div>
                </div>

                {/* <InfographicNote title="The Tech Stack" type="info">
                    A visual overview of the <strong>Technology Architecture for Concurrent Audit</strong> — including data ingestion, transformation, and dashboard layers — is available for IT and security leadership review.
                </InfographicNote> */}
            </div>
        </section>
    );
};

export default TechnologyEnablement;
