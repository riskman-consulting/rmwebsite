// import React from 'react';
// import { motion } from 'framer-motion';

// const StrategicContext = () => {
//     return (
//         <section id="context" className="relative z-10 py-24 bg-bgDark">
//             {/* Decorative Background */}
//             <div className="absolute top-1/2 left-0 w-64 h-64 bg-brandPrimary/5 rounded-full blur-[100px] pointer-events-none" />

//             <div className="container relative z-10">
//                 <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent mb-6">
//                     <div className="w-5 h-[1px] bg-brandAccent" />
//                     Strategic Context
//                 </div>

//                 <div className="grid items-start gap-16 lg:grid-cols-2">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandLight">
//                             The Limits of Looking Back
//                         </h2>
//                         <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

//                         <div className="space-y-6 text-brandLight/70 font-sans leading-relaxed text-[0.95rem]">
//                             <p>
//                                 Global enterprises today process millions of transactions across geographies, entities, currencies, and regulatory regimes. Shared service centers, multi-layered approval workflows, and high-velocity procure-to-pay and order-to-cash cycles generate complexity that traditional, retrospective audit approaches were never designed to address.
//                             </p>
//                             <p>
//                                 By the time a conventional audit identifies control failures, the financial impact has already occurred — leakage has been absorbed, compliance gaps have widened, and the cost of remediation has multiplied.
//                             </p>
//                             <p className="py-1 pl-4 border-l-2 border-brandAccent/30">
//                                 The fundamental question is no longer <em className="text-brandAccent">"what went wrong?"</em> but <em className="text-brandAccent">"can we prevent it from going wrong in the first place?"</em>
//                             </p>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="space-y-10"
//                     >
//                         <div className="relative group">
//                             <div className="absolute inset-0 transition-colors duration-500 bg-brandGold/10 rounded-2xl blur-xl group-hover:bg-brandGold/20" />
//                             <p className="relative py-4 pl-8 text-xl italic font-medium leading-relaxed border-l-4 font-heading md:text-2xl text-brandLight border-brandGold bg-surfaceDark/40 backdrop-blur-sm rounded-r-2xl">
//                                 "Traditional audits tell you what <em className="not-italic text-brandGold">happened</em>. Concurrent Audits ensure the right thing <em className="not-italic font-bold text-brandAccent">is happening</em> — in real time, at every transaction touchpoint."
//                             </p>
//                         </div>

//                         <div className="overflow-hidden border shadow-2xl rounded-2xl border-borderDark">
//                             <img
//                                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
//                                 alt="Strategic Context Visualization"
//                                 className="object-cover w-full h-64"
//                             />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default StrategicContext;



import React from 'react';
import { motion } from 'framer-motion';

const StrategicContext = () => {
    return (
        <section id="context" className="relative z-10 py-24 transition-colors bg-surfaceLight dark:bg-surfaceDark">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brandPrimary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-6 lg:px-12">
                <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-semibold tracking-[4px] uppercase text-brandAccent dark:text-white mb-6">
                    <div className="w-5 h-[1px] bg-brandAccent" />
                    Strategic Context
                </div>

                <div className="grid items-start gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-6 text-3xl font-extrabold leading-tight font-heading md:text-4xl text-brandDark dark:text-brandAccent">
                            The Limits of Looking Back
                        </h2>
                        <hr className="w-12 h-[2px] border-none bg-gradient-to-r from-brandGold to-brandAccent mb-8" />

                        <div className="space-y-6 text-brandNavy dark:text-white/70 font-sans leading-relaxed text-[0.95rem]">
                            <p>
                                Global enterprises today process millions of transactions across geographies, entities, currencies, and regulatory regimes. Shared service centers, multi-layered approval workflows, and high-velocity procure-to-pay and order-to-cash cycles generate complexity that traditional, retrospective audit approaches were never designed to address.
                            </p>
                            <p>
                                By the time a conventional audit identifies control failures, the financial impact has already occurred — leakage has been absorbed, compliance gaps have widened, and the cost of remediation has multiplied.
                            </p>
                            <p className="py-1 pl-4 border-l-2 border-brandAccent/30">
                                The fundamental question is no longer <em className="text-brandAccent">"what went wrong?"</em> but <em className="text-brandAccent">"can we prevent it from going wrong in the first place?"</em>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 transition-colors duration-500 bg-brandGold/10 rounded-2xl blur-xl group-hover:bg-brandGold/20" />
                            <p className="relative py-4 pl-8 text-xl italic font-medium leading-relaxed transition-colors border-l-4 font-heading md:text-2xl text-brandDark dark:text-brandLight border-brandGold bg-surfaceLight dark:bg-surfaceDark/40 backdrop-blur-sm rounded-r-2xl border-borderLight dark:border-borderDark">
                                "Traditional audits tell you what <em className="not-italic text-brandGold">happened</em>. Concurrent Audits ensure the right thing <em className="not-italic font-bold text-brandAccent">is happening</em> — in real time, at every transaction touchpoint."
                            </p>
                        </div>

                        <div className="overflow-hidden transition-colors border shadow-2xl rounded-2xl border-borderLight dark:border-borderDark">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
                                alt="Strategic Context Visualization"
                                className="object-cover w-full h-64"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StrategicContext;

