// import React from 'react';
// import { ClipboardList, Users, FileText, PlayCircle } from 'lucide-react';
// import stepsImage from "../../../assets/images/iso/steps.png"

// const StepsSection = () => {
//   const steps = [
//     {
//       id: "01",
//       title: "Scoping The BCMS",
//       description: "Defining which parts of the organization are covered by the Business Continuity Management System for focused resilience.",
//       icon: <ClipboardList className="w-6 h-6" />
//     },
//     {
//       id: "02",
//       title: "Resource Allocation",
//       description: "Identifying the specific people, technology, and facilities required to maintain essential operations during downtime.",
//       icon: <Users className="w-6 h-6" />
//     },
//     {
//       id: "03",
//       title: "Documentation And Training",
//       description: "Creating accessible continuity manuals and ensuring staff are fully trained to execute them under pressure.",
//       icon: <FileText className="w-6 h-6" />
//     },
//     {
//       id: "04",
//       title: "Exercising And Testing",
//       description: "Conducting simulations and stress tests to validate the effectiveness of recovery procedures before a real incident occurs.",
//       icon: <PlayCircle className="w-6 h-6" />
//     }
//   ];

//   return (
//     <section id="process" className="py-24 bg-white">
//       <div className="container px-4 mx-auto md:px-6">
//         <div className="flex flex-col items-center gap-16 lg:flex-row">
//           <div className="relative order-2 lg:w-1/2 lg:order-1">
//             <div className="relative overflow-hidden border-8 border-white shadow-2xl rounded-2xl">
//               <img 
//                 src={stepsImage} 
//                 alt="Strategic Implementation" 
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="absolute hidden max-w-xs p-8 text-white shadow-xl -bottom-6 -right-6 bg-brandPrimary rounded-xl md:block">
//               <p className="mb-2 text-lg font-bold font-heading">Expert Guidance</p>
//               <p className="text-sm text-white/80">We work closely with leadership to ensure plans are practical and actionable.</p>
//             </div>
//           </div>

//           <div className="order-1 lg:w-1/2 lg:order-2">
//             <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandAccent">Our Process</h2>
//             <h3 className="mb-8 text-3xl font-bold md:text-4xl font-heading text-brandDark">Strategic Implementation Steps</h3>
            
//             <div className="space-y-8">
//               {steps.map((step, index) => (
//                 <div key={index} className="flex gap-6 group">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 font-bold transition-colors duration-300 border rounded-full shadow-sm bg-brandLight border-brandPrimary/10 text-brandPrimary group-hover:bg-brandPrimary group-hover:text-white">
//                       {step.id}
//                     </div>
//                     {index !== steps.length - 1 && (
//                       <div className="w-0.5 h-full bg-gray-100 mx-auto mt-2 group-hover:bg-brandPrimary/20 transition-colors"></div>
//                     )}
//                   </div>
//                   <div className="pb-8">
//                     <h4 className="flex items-center gap-2 mb-2 text-xl font-bold text-brandDark">
//                       {step.title}
//                     </h4>
//                     <p className="leading-relaxed text-gray-600">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StepsSection;



import React, { useState } from 'react';
import { Target, HardDrive, FileText, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import stepsImage from "../../../assets/images/iso/steps.png"

const ImplementationSteps = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            icon: Target,
            step: "01",
            title: "Scoping The BCMS",
            desc: "Defining which parts of the organization are covered by the Business Continuity Management System for focused resilience.",
            details: ["Boundary definition", "Stakeholder mapping", "Context analysis", "Policy establishment"],
            color: "#3B82F6",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        },
        {
            icon: HardDrive,
            step: "02",
            title: "Resource Allocation",
            desc: "Identifying the specific people, technology, and facilities required to maintain essential operations during downtime.",
            details: ["Talent identification", "Tech redundancy", "Fallback facilities", "Budgeting"],
            color: "#10B981",
            image: stepsImage
        },
        {
            icon: FileText,
            step: "03",
            title: "Documentation & Training",
            desc: "Creating accessible continuity manuals and ensuring staff are fully trained to execute them under pressure.",
            details: ["Manual creation", "Staff workshops", "Role play exercises", "Knowledge base"],
            color: "#F59E0B",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
        },
        {
            icon: Activity,
            step: "04",
            title: "Exercising & Testing",
            desc: "Conducting simulations and stress tests to validate the effectiveness of recovery procedures before a real incident occurs.",
            details: ["Tabletop exercises", "Full-scale simulations", "Performance metrics", "Continuous tuning"],
            color: "#8B5CF6",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop"
        }
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden sm:py-32 bg-surfaceLight dark:bg-bgDark" id="steps">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-brandAccent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-brandPrimary/5 rounded-full blur-[80px]" />
            </div>

            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14 mx-auto max-w-[1280px] relative z-10">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 font-heading text-brandPrimary dark:text-brandAccent"
                    >
                        Implementation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl lg:text-5xl"
                    >
                        Strategic Implementation Steps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400"
                    >
                        We work closely with leadership to ensure that continuity plans are practical, actionable, and integrated into the daily culture of organizations.
                    </motion.p>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left - Steps List */}
                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <button
                                    onClick={() => setActiveStep(idx)}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeStep === idx
                                        ? 'bg-white dark:bg-surfaceDark border-transparent shadow-xl ring-2 ring-brandPrimary dark:ring-brandAccent'
                                        : 'bg-white/50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:border-brandPrimary/30 dark:hover:border-brandAccent/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-heading text-lg ${activeStep === idx
                                            ? 'bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark'
                                            : 'bg-slate-100 dark:bg-white/10 text-slate-400'
                                            }`}>
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className={`font-bold font-heading ${activeStep === idx ? 'text-brandDark dark:text-white' : 'text-slate-500'}`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right - Step Details */}
                    <div className="relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="h-full overflow-hidden bg-white border shadow-2xl rounded-3xl dark:bg-surfaceDark border-slate-100 dark:border-white/5"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md">
                                                {React.createElement(steps[activeStep].icon, { className: "h-5 w-5 text-white" })}
                                            </div>
                                            <span className="font-bold text-white font-heading">Phase {steps[activeStep].step}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                                        {steps[activeStep].desc}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {steps[activeStep].details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-brandPrimary dark:text-brandAccent" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImplementationSteps;
