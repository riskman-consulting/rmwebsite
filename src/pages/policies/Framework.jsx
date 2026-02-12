// import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from "../../components/ui/SectionComponents";

// const LifecycleWheel = () => {
//   const phases = [
//     { label: "Design &\nStructuring", angle: -90 },
//     { label: "Review &\nAlignment", angle: -18 },
//     { label: "Approval &\nGovernance", angle: 54 },
//     { label: "Implementation\n& Communication", angle: 126 },
//     { label: "Monitoring &\nImprovement", angle: 198 },
//   ];
//   const r = 140, cx = 220, cy = 210;
//   return (
//     <svg viewBox="0 0 440 420" className="w-full max-w-[440px] animate-pulse-custom">
//       <defs>
//         <radialGradient id="lcg" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" stopColor="#003366" />
//           <stop offset="100%" stopColor="#001F3F" />
//         </radialGradient>
//       </defs>
//       <circle cx={cx} cy={cy} r={r + 30} fill="none" className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="2" strokeDasharray="6,4" opacity="0.4" />
//       <circle cx={cx} cy={cy} r="38" className="fill-brandPrimary dark:fill-[url(#lcg)]" />
//       <text x={cx} y={cy - 5} textAnchor="middle" className="fill-white dark:fill-brandAccent" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">POLICY</text>
//       <text x={cx} y={cy + 10} textAnchor="middle" className="fill-white dark:fill-brandAccent" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">LIFECYCLE</text>
//       {phases.map((p, i) => {
//         const rad = (p.angle * Math.PI) / 180;
//         const x = cx + r * Math.cos(rad);
//         const y = cy + r * Math.sin(rad);
//         // Colors for light/dark mode handled via classes if possible, but SVG needs explicit fills often.
//         // We'll use a mix of classes and inline styles for simplicity in this SVG component
//         return (
//           <g key={i}>
//             <line x1={cx + 42 * Math.cos(rad)} y1={cy + 42 * Math.sin(rad)} x2={cx + (r - 36) * Math.cos(rad)} y2={cy + (r - 36) * Math.sin(rad)} className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="1.5" />
//             <circle cx={x} cy={y} r="34" className="fill-brandNavy dark:fill-brandDark stroke-brandPrimary dark:stroke-brandAccent" strokeWidth="1.5">
//               <animate attributeName="r" from="0" to="34" dur="0.5s" begin={`${i * 0.12}s`} fill="freeze" />
//             </circle>
//             <text x={x} y={y - 5} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600" fontFamily="Montserrat, sans-serif">
//               {p.label.split("\n").map((l, j) => <tspan key={j} x={x} dy={j === 0 ? 0 : 12}>{l}</tspan>)}
//             </text>
//             <text x={x} y={y - 22} textAnchor="middle" className="fill-brandAccent" fontSize="18" fontWeight="700" fontFamily="Montserrat, sans-serif">{`0${i + 1}`}</text>
//           </g>
//         );
//       })}
//       {/* Curved arrows between nodes */}
//       {phases.map((_, i) => {
//         const a1 = (phases[i].angle * Math.PI) / 180;
//         const a2 = (phases[(i + 1) % 5].angle * Math.PI) / 180;
//         const midAngle = (a1 + a2) / 2;
//         const arcR = r + 18;
//         const sx = cx + arcR * Math.cos(a1 + 0.18);
//         const sy = cy + arcR * Math.sin(a1 + 0.18);
//         const ex = cx + arcR * Math.cos(a2 - 0.18);
//         const ey = cy + arcR * Math.sin(a2 - 0.18);
//         return <path key={`a${i}`} d={`M ${sx} ${sy} A ${arcR} ${arcR} 0 0 1 ${ex} ${ey}`} fill="none" className="stroke-brandPrimary dark:stroke-[#4A90C4]" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrowBlue)" />;
//       })}
//       <defs><marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-brandPrimary dark:fill-[#4A90C4]"/></marker></defs>
//     </svg>
//   );
// };

// export default function FrameworkSection() {
//   return (
//     <SectionWrapper id="framework">
//       <div className="px-6 py-24 transition-colors duration-300 bg-bgLight dark:bg-bgDark">
//         <div className="max-w-6xl mx-auto">
//           <SectionTag>Methodology</SectionTag>
//           <SectionTitle>RiskMan's Enterprise Policy & SOP Framework</SectionTitle>
//           <SectionDesc>
//             A structured, end-to-end methodology that ensures every policy and SOP is designed for purpose, 
//             aligned with regulations, and embedded into organizational workflows — not filed away in a folder.
//           </SectionDesc>

//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//             <div>
//               <div className="flex justify-center">
//                 <LifecycleWheel />
//               </div>
//             </div>
//             <div>
//               {[
//                 { num: "01", title: "Design & Structuring", desc: "Define policy architecture, hierarchy, and taxonomies. Establish templates aligned with industry standards, regulatory requirements, and the organization's risk appetite." },
//                 { num: "02", title: "Review & Stakeholder Alignment", desc: "Engage process owners, risk teams, legal, and compliance functions. Ensure policies reflect operational realities and stakeholder input across business units." },
//                 { num: "03", title: "Approval & Governance", desc: "Route through defined governance workflows — committee reviews, management sign-offs, and Board-level approvals where required." },
//                 { num: "04", title: "Implementation & Communication", desc: "Deploy policies through training, awareness campaigns, and digital platforms. Ensure every impacted team understands their obligations and accountabilities." },
//                 { num: "05", title: "Monitoring & Continuous Improvement", desc: "Establish review cadences, track compliance metrics, and trigger updates based on regulatory changes, audit findings, or business evolution." },
//               ].map((item, i) => (
//                 <div key={i} className="flex gap-4 mb-7 group">
//                   <div className="text-[56px] font-extrabold font-heading text-brandPrimary/20 dark:text-brandNavy leading-none group-hover:text-brandPrimary dark:group-hover:text-brandPrimary transition-colors">{item.num}</div>
//                   <div>
//                     <div className="text-[17px] font-bold text-brandDark dark:text-white mb-1 font-sans group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">{item.title}</div>
//                     <p className="m-0 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Framework pillars */}
//           <div className="flex flex-wrap gap-5 mt-12">
//             {["Regulatory Alignment", "Risk Appetite Integration", "Industry Best Practices", "Technology Enablement"].map((t, i) => (
//               <div key={i} className="flex-1 min-w-[200px] bg-white dark:bg-gradient-to-br dark:from-brandDark dark:to-brandNavy border border-slate-200 dark:border-brandPrimary/30 rounded-xl p-5 text-center hover:border-brandPrimary/40 dark:hover:border-brandAccent/40 transition-all shadow-sm dark:shadow-none">
//                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2.5 text-brandPrimary dark:text-brandAccent">
//                   {[
//                     <path key="a" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
//                     <path key="b" d="M13 10V3L4 14h7v7l9-11h-7z" />,
//                     <path key="c" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8m-4 0v6m-4 6h8" />,
//                     <path key="d" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />,
//                   ][i]}
//                 </svg>
//                 <div className="text-[13px] font-semibold text-brandDark dark:text-slate-200">{t}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SectionWrapper, SectionTag, SectionTitle, SectionDesc } from '../../components/ui/SectionComponents';

const GovernancePyramid = () => (
    <div className="relative max-w-lg mx-auto group lg:mx-0">
        <div className="absolute inset-0 bg-brandAccent/10 blur-[80px] rounded-full group-hover:bg-brandAccent/20 transition-all duration-700" />
        <svg viewBox="0 0 500 400" className="relative z-10 w-full drop-shadow-2xl">
            <defs>
                <linearGradient id="p-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFB800" />
                </linearGradient>
                <linearGradient id="p-navy" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#001F3F" />
                </linearGradient>
            </defs>

            <motion.g initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <path d="M250,20 L330,120 L170,120 Z" fill="url(#p-navy)" className="stroke-brandAccent" strokeWidth="1" />
                <text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">BOARD INTENT</text>

                <path d="M165,130 L335,130 L385,220 L115,220 Z" className="fill-brandNavy stroke-brandAccent" strokeWidth="0.5" opacity="0.9" />
                <text x="250" y="185" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">POLICIES</text>

                <path d="M110,230 L390,230 L440,320 L60,320 Z" className="fill-brandPrimary stroke-brandAccent" strokeWidth="0.5" opacity="0.8" />
                <text x="250" y="285" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Montserrat">SOPs & PROCEDURES</text>

                <rect x="30" y="330" width="440" height="50" rx="8" fill="url(#p-gold)" />
                <text x="250" y="362" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900" fontFamily="Montserrat">DAY-TO-DAY EXECUTION</text>
            </motion.g>
        </svg>
    </div>
);

const LifecycleWheel = () => {
    const phases = [
        { label: "Design &\nStructuring", angle: -90 },
        { label: "Review &\nAlignment", angle: -18 },
        { label: "Approval &\nGovernance", angle: 54 },
        { label: "Implementation\n& Communication", angle: 126 },
        { label: "Monitoring &\nImprovement", angle: 198 },
    ];
    const r = 140, cx = 220, cy = 210;
    return (
        <svg viewBox="0 0 440 420" className="w-full max-w-[440px] animate-pulse-custom">
            <defs>
                <radialGradient id="lcg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#003366" />
                    <stop offset="100%" stopColor="#001F3F" />
                </radialGradient>
            </defs>
            <circle cx={cx} cy={cy} r={r + 30} fill="none" className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="2" strokeDasharray="6,4" opacity="0.4" />
            <circle cx={cx} cy={cy} r="38" className="fill-brandPrimary dark:fill-[url(#lcg)]" />
            <text x={cx} y={cy - 5} textAnchor="middle" className="fill-white dark:fill-brandAccent" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">POLICY</text>
            <text x={cx} y={cy + 10} textAnchor="middle" className="fill-white dark:fill-brandAccent" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">LIFECYCLE</text>
            {phases.map((p, i) => {
                const rad = (p.angle * Math.PI) / 180;
                const x = cx + r * Math.cos(rad);
                const y = cy + r * Math.sin(rad);

                return (
                    <g key={i}>
                        <line x1={cx + 42 * Math.cos(rad)} y1={cy + 42 * Math.sin(rad)} x2={cx + (r - 36) * Math.cos(rad)} y2={cy + (r - 36) * Math.sin(rad)} className="stroke-brandPrimary dark:stroke-[#004080]" strokeWidth="1.5" />
                        {/* Increased radius to 40 to accommodate text better */}
                        <motion.circle
                            initial={{ r: 0 }}
                            whileInView={{ r: 40 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            cx={x} cy={y} r="40"
                            className="fill-brandNavy dark:fill-brandDark stroke-brandPrimary dark:stroke-brandAccent"
                            strokeWidth="1.5"
                        />
                        {/* Adjusted y and dy for better centering in larger circle */}
                        <text x={x} y={y - 2} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="Montserrat, sans-serif">
                            {p.label.split("\n").map((l, j) => <tspan key={j} x={x} dy={j === 0 ? 0 : 11}>{l}</tspan>)}
                        </text>
                        <text x={x} y={y - 24} textAnchor="middle" className="fill-brandAccent" fontSize="18" fontWeight="700" fontFamily="Montserrat, sans-serif">{`0${i + 1}`}</text>
                    </g>
                );
            })}
            {/* Curved arrows between nodes */}
            {phases.map((_, i) => {
                const a1 = (phases[i].angle * Math.PI) / 180;
                const a2 = (phases[(i + 1) % 5].angle * Math.PI) / 180;
                const arcR = r + 18;
                const sx = cx + arcR * Math.cos(a1 + 0.18);
                const sy = cy + arcR * Math.sin(a1 + 0.18);
                const ex = cx + arcR * Math.cos(a2 - 0.18);
                const ey = cy + arcR * Math.sin(a2 - 0.18);
                return <path key={`a${i}`} d={`M ${sx} ${sy} A ${arcR} ${arcR} 0 0 1 ${ex} ${ey}`} fill="none" className="stroke-brandPrimary dark:stroke-[#4A90C4]" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrowBlue)" />;
            })}
            <defs><marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" className="fill-brandPrimary dark:fill-[#4A90C4]" /></marker></defs>
        </svg>
    );
};

const GovernanceApproach = () => {
    return (
        <div className="space-y-32">
            {/* 1. Architecture Section */}
            {/* <SectionWrapper id="architecture" className="px-6 py-32">
                <div className="container mx-auto">
                    <div className="grid items-center gap-24 lg:grid-cols-2">
                        <div className="bg-brandAccent/5 rounded-[40px] p-8 relative overflow-hidden flex items-center justify-center shadow-inner">
                            <div className="absolute inset-0 hero-grid opacity-10" />
                            <GovernancePyramid />
                        </div>
                        <div>
                            <SectionTag>Global Architecture</SectionTag>
                            <SectionTitle>Unified Governance Layer</SectionTitle>
                            <SectionDesc>
                                Policies define 'what' we do; SOPs define 'how' we do it. Our architecture bridges this gap to eliminate operational ambiguity.
                            </SectionDesc>
                            <div className="space-y-8">
                                {[
                                    { title: "Strategic Intent", desc: "Board-level policies that align every action with the organization's core risk appetite." },
                                    { title: "Operational Rigor", desc: "Granular SOPs that ensure consistency across entities, reducing process deviations." },
                                    { title: "Sustained Compliance", desc: "Automatic alignment with global and regional regulatory frameworks." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors border rounded-xl bg-bgLight dark:bg-bgDark text-brandAccent border-brandAccent/30">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="mb-2 text-xl font-bold">{item.title}</h4>
                                            <p className="leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper> */}

            {/* 2. Lifecycle Section */}
            <SectionWrapper id="framework" className="relative px-6 py-32 transition-colors duration-300 border-t bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
                <div className="container mx-auto">
                    <SectionTag>Methodology</SectionTag>
                    <SectionTitle>RiskMan's Enterprise Policy & SOP Framework</SectionTitle>
                    <SectionDesc>
                        A structured, end-to-end methodology that ensures every policy and SOP is designed for purpose,
                        aligned with regulations, and embedded into organizational workflows — not filed away in a folder.
                    </SectionDesc>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div>
                            <div className="flex justify-center">
                                <LifecycleWheel />
                            </div>
                        </div>
                        <div>
                            {[
                                { num: "01", title: "Design & Structuring", desc: "Define policy architecture, hierarchy, and taxonomies. Establish templates aligned with industry standards, regulatory requirements, and the organization's risk appetite." },
                                { num: "02", title: "Review & Stakeholder Alignment", desc: "Engage process owners, risk teams, legal, and compliance functions. Ensure policies reflect operational realities and stakeholder input across business units." },
                                { num: "03", title: "Approval & Governance", desc: "Route through defined governance workflows — committee reviews, management sign-offs, and Board-level approvals where required." },
                                { num: "04", title: "Implementation & Communication", desc: "Deploy policies through training, awareness campaigns, and digital platforms. Ensure every impacted team understands their obligations and accountabilities." },
                                { num: "05", title: "Monitoring & Continuous Improvement", desc: "Establish review cadences, track compliance metrics, and trigger updates based on regulatory changes, audit findings, or business evolution." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 mb-7 group">
                                    <div className="text-[56px] font-extrabold font-heading text-brandPrimary/20 dark:text-brandNavy leading-none group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">{item.num}</div>
                                    <div>
                                        <div className="text-[17px] font-bold text-brandDark dark:text-white mb-1 font-sans group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">{item.title}</div>
                                        <p className="m-0 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Framework pillars */}
                    <div className="flex flex-wrap gap-5 mt-12">
                        {["Regulatory Alignment", "Risk Appetite Integration", "Industry Best Practices", "Technology Enablement"].map((t, i) => (
                            <div key={i} className="flex-1 min-w-[200px] bg-white dark:bg-gradient-to-br dark:from-brandDark dark:to-brandNavy border border-slate-200 dark:border-brandPrimary/30 rounded-xl p-5 text-center hover:border-brandPrimary/40 dark:hover:border-brandAccent/40 transition-all shadow-sm dark:shadow-none">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2.5 text-brandPrimary dark:text-brandAccent">
                                    {[
                                        <path key="a" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                                        <path key="b" d="M13 10V3L4 14h7v7l9-11h-7z" />,
                                        <path key="c" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8m-4 0v6m-4 6h8" />,
                                        <path key="d" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />,
                                    ][i]}
                                </svg>
                                <div className="text-[13px] font-semibold text-brandDark dark:text-slate-200">{t}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default GovernanceApproach;
