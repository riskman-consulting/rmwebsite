// import React, { useState, useEffect, useRef } from "react";
// import {
//   ShieldAlert,
//   Fingerprint,
//   Search,
//   Database,
//   FileSearch,
//   Lock,
//   History,
//   ArrowRight,
//   ChevronDown,
//   Gavel,
//   Network,
//   EyeOff,
//   ShieldCheck,
//   Moon,
//   Sun,
//   Shield,
//   Eye,
//   Scale,
//   Globe,
//   AlertTriangle,
//   CheckCircle,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// /* ──────────────────────────── DATA ──────────────────────────── */
// const fraudDetection = [
//   {
//     title: "Forensic Accounting",
//     desc: "Detailed examination of financial records to trace misappropriated funds and identify embezzlement patterns.",
//     icon: <FileSearch className="w-8 h-8" />,
//   },
//   {
//     title: "Whistleblower Response",
//     desc: "Independent investigation of internal allegations to ensure transparency while protecting reputation.",
//     icon: <EyeOff className="w-8 h-8" />,
//   },
//   {
//     title: "Asset Tracing",
//     desc: "Global capabilities to locate and recover diverted assets through meticulous transaction mapping.",
//     icon: <History className="w-8 h-8" />,
//   },
// ];

// const digitalForensics = [
//   {
//     title: "Data Breach Investigations",
//     d: "Rapid analysis to determine the source, scope, and impact of unauthorized access.",
//     icon: <ShieldAlert size={20} />,
//   },
//   {
//     title: "Evidence Preservation",
//     d: "Court-admissible collection of electronic data from servers, cloud, and mobile.",
//     icon: <Database size={20} />,
//   },
//   {
//     title: "Cyber Fraud Analytics",
//     d: "Utilizing AI-driven patterns to detect sophisticated digital manipulation.",
//     icon: <Network size={20} />,
//   },
// ];

// const faqs = [
//   {
//     q: "How does RiskMan ensure the confidentiality of a sensitive internal investigation?",
//     a: "We utilize encrypted communication channels and restricted 'need-to-know' access protocols to protect sensitive data and organizational reputation throughout the process.",
//   },
//   {
//     q: "What types of Organizations typically require forensic services?",
//     a: "Any entity facing complex financial structures, regulatory scrutiny, or digital threats benefit from our specialized investigative and forensic expertise.",
//   },
//   {
//     q: "Can RiskMan assist in recovering lost financial assets?",
//     a: "Yes, our forensic accountants specialize in tracing complex fund flows across jurisdictions to identify and help recover diverted capital.",
//   },
//   {
//     q: "Is the evidence gathered by RiskMan admissible in legal proceedings?",
//     a: "Absolutely. We maintain a strict chain of custody and follow international forensic standards to ensure all findings are court-admissible.",
//   },
//   {
//     q: "How quickly can RiskMan respond to a suspected data breach?",
//     a: "Our rapid response team is equipped to initiate digital preservation and forensic triage within hours of an incident report.",
//   },
// ];

// /* ──────────────────────────── INTERSECTION OBSERVER HOOK ──────────────────────────── */
// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         observer.disconnect();
//       }
//     }, { threshold: 0.15, ...options });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
//   return [ref, isVisible];
// }

// /* ──────────────────────────── HERO SECTION ──────────────────────────── */
// function HeroSection() {
//   return (
//     <section className="relative bg-[#001F3F] dark:bg-[#000d1a] text-white py-24 lg:py-40 overflow-hidden">
//       {/* Ambient blurs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004080] rounded-full blur-[150px] -mr-32 -mt-32 opacity-20" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFC000] rounded-full blur-[200px] -ml-48 -mb-48 opacity-5" />
//       </div>

//       {/* Grid pattern overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 relative z-10">
//         <div className="flex flex-col items-center gap-16 lg:flex-row">
//           <div className="lg:w-3/5">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC000]/10 border border-[#FFC000]/30 text-[#FFC000] rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
//               <Lock size={14} className="mr-1" /> Confidential Investigative Elite
//             </div>
//             <h1
//               className="mb-6 text-5xl font-bold leading-tight lg:text-7xl"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               Advanced Forensics and{" "}
//               <span className="text-[#FFC000]">Investigation</span> Services
//             </h1>
//             <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
//               Protect organizational integrity through rigorous investigative
//               protocols. We provide the clarity and evidence needed to resolve
//               complex internal and external threats.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-[#004080] text-white px-10 py-4 rounded-md font-bold hover:bg-[#003366] transition-all shadow-xl">
//                 Explore Our Services
//               </button>
//               <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#001F3F] transition-all">
//                 Consult Our Experts
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="w-full lg:w-2/5">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#FFC000]/20 to-[#004080]/20 rounded-[2rem] blur-xl" />
//               <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700&fit=crop&crop=center"
//                   alt="Data analytics dashboard showing forensic investigation metrics"
//                   className="w-full h-[400px] lg:h-[480px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="flex items-center gap-3 bg-[#001F3F]/80 backdrop-blur-md rounded-xl p-4 border border-white/10">
//                     <ShieldCheck className="text-[#FFC000] shrink-0" size={24} />
//                     <div>
//                       <p className="text-sm font-bold">Trusted by 500+ Organizations</p>
//                       <p className="text-xs text-gray-400">Global forensic investigations since 2005</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── STRATEGIC SECTION ──────────────────────────── */
// function StrategicSection() {
//   const [ref, isVisible] = useInView();
//   return (
//     <section className="py-20 bg-white dark:bg-[#001122] border-b border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)]">
//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//         <div
//           ref={ref}
//           className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//         >
//           <h2
//             className="text-3xl lg:text-4xl font-bold mb-6 text-[#001F3F] dark:text-white tracking-tight"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             Strategic Investigative Solutions
//           </h2>
//           <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
//             Organizations today face sophisticated threats that demand more than
//             just standard oversight. RiskMan delivers high-stakes investigative
//             expertise to identify vulnerabilities and resolve misconduct with
//             absolute precision.
//           </p>
//         </div>

//         {/* Stats strip with image */}
//         <div className="grid items-center gap-8 mt-16 md:grid-cols-2">
//           <div className="relative overflow-hidden shadow-xl rounded-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center"
//               alt="Professional team analyzing investigation documents"
//               className="w-full h-[300px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/70 to-transparent" />
//             <div className="absolute bottom-0 left-0 right-0 p-8">
//               <p className="text-lg font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                 20+ Years of Elite Investigation
//               </p>
//               <p className="mt-1 text-sm text-gray-300">
//                 Serving Fortune 500 companies and government agencies
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { num: "500+", label: "Cases Resolved", icon: <CheckCircle size={20} /> },
//               { num: "98%", label: "Success Rate", icon: <Shield size={20} /> },
//               { num: "45+", label: "Countries Covered", icon: <Globe size={20} /> },
//               { num: "24/7", label: "Rapid Response", icon: <AlertTriangle size={20} /> },
//             ].map((s, i) => (
//               <div
//                 key={i}
//                 className="bg-[#F5F5F5] dark:bg-[#001A33] p-6 rounded-xl text-center border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] hover:border-[#FFC000]/40 transition-colors"
//               >
//                 <div className="text-[#FFC000] mx-auto mb-2 flex justify-center">{s.icon}</div>
//                 <p className="text-2xl font-black text-[#001F3F] dark:text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                   {s.num}
//                 </p>
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── FRAUD DETECTION SECTION ──────────────────────────── */
// function FraudDetectionSection() {
//   const [ref, isVisible] = useInView();
//   return (
//     <section className="py-20 bg-white dark:bg-[#001122]">
//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//         <div className="flex items-center gap-4 mb-16">
//           <h2
//             className="text-2xl lg:text-3xl font-bold shrink-0 text-[#001F3F] dark:text-white"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             Fraud and Misconduct Detection
//           </h2>
//           <div className="h-px bg-[rgba(0,31,63,0.1)] dark:bg-[rgba(255,192,0,0.15)] w-full" />
//         </div>

//         <div ref={ref} className="grid gap-8 md:grid-cols-3">
//           {fraudDetection.map((item, idx) => (
//             <div
//               key={idx}
//               className={`p-8 bg-[#F5F5F5] dark:bg-[#001A33] rounded-2xl hover:bg-[#004080] dark:hover:bg-[#004080] hover:text-white transition-all duration-500 group border border-transparent hover:border-[#FFC000]/30 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//               style={{ transitionDelay: `${idx * 120}ms` }}
//             >
//               <div className="mb-6 text-[#FFC000] group-hover:text-[#FFC000] transition-colors">
//                 {item.icon}
//               </div>
//               <h3 className="mb-3 text-xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                 {item.title}
//               </h3>
//               <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Image banner below fraud cards */}
//         <div className="relative mt-12 overflow-hidden shadow-lg rounded-2xl">
//           <img
//             src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=350&fit=crop&crop=center"
//             alt="Financial documents and magnifying glass for forensic accounting"
//             className="w-full h-[250px] lg:h-[300px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/90 via-[#001F3F]/60 to-transparent" />
//           <div className="absolute inset-0 flex items-center">
//             <div className="max-w-lg px-8 lg:px-12">
//               <p className="text-[#FFC000] text-sm font-bold uppercase tracking-widest mb-2">
//                 Financial Intelligence
//               </p>
//               <p className="text-xl font-bold text-white lg:text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                 Every dollar tells a story. Our forensic accountants read between the lines.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── DIGITAL FORENSICS SECTION ──────────────────────────── */
// function DigitalSection() {
//   const [ref, isVisible] = useInView();
//   return (
//     <section className="py-20 bg-[#003366] dark:bg-[#000d1a] text-white">
//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//         <div ref={ref} className="flex flex-col items-center gap-16 lg:flex-row">
//           <div className={`lg:w-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
//             <h2
//               className="text-3xl lg:text-4xl font-bold mb-6 text-[#FFC000]"
//               style={{ fontFamily: "Montserrat, sans-serif" }}
//             >
//               Digital Forensics & Response
//             </h2>
//             <p className="mb-8 leading-relaxed text-gray-300">
//               In an era of data-centric operations, our team secures critical
//               evidence from digital environments to mitigate high-tech risks.
//             </p>
//             <div className="space-y-4">
//               {digitalForensics.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-4 p-5 bg-[#001A33] dark:bg-[#001122] border border-white/5 rounded-xl hover:border-[#FFC000] transition-colors"
//                 >
//                   <div className="text-[#FFC000] shrink-0">{item.icon}</div>
//                   <div>
//                     <h5 className="mb-1 text-sm font-bold">{item.title}</h5>
//                     <p className="text-xs text-gray-400">{item.d}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`lg:w-1/2 w-full transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
//             <div className="relative">
//               {/* Decorative frame */}
//               <div className="absolute -inset-3 bg-gradient-to-br from-[#FFC000]/30 to-transparent rounded-[2.5rem] blur-lg" />
//               <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
//                 <img
//                   src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=500&fit=crop&crop=center"
//                   alt="Cybersecurity operations center with multiple monitors"
//                   className="w-full h-[350px] lg:h-[420px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-[#001F3F]/30 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-8">
//                   <div className="flex items-center gap-4">
//                     <div className="w-14 h-14 bg-[#FFC000]/20 border border-[#FFC000]/40 rounded-2xl flex items-center justify-center">
//                       <Fingerprint size={28} className="text-[#FFC000]" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-bold">Evidence Preservation</h3>
//                       <p className="text-xs italic text-gray-400">
//                         Strict chain of custody with international standards
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── COMPLIANCE SECTION ──────────────────────────── */
// function ComplianceSection() {
//   const [ref, isVisible] = useInView();
//   return (
//     <section className="py-24 bg-white dark:bg-[#001122]">
//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//         <div className="max-w-2xl mx-auto mb-16 text-center">
//           <h2
//             className="text-3xl lg:text-4xl font-bold mb-4 text-[#001F3F] dark:text-white"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             Integrity Due Diligence
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             Navigate complex regulatory landscapes by providing deep insights
//             into partners, vendors, and high-value transactions.
//           </p>
//         </div>

//         {/* Image + Cards layout */}
//         <div className="flex flex-col items-stretch gap-12 lg:flex-row">
//           {/* Due diligence image */}
//           <div className="lg:w-2/5 relative rounded-2xl overflow-hidden shadow-lg min-h-[300px]">
//             <img
//               src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=600&fit=crop&crop=center"
//               alt="Business professional conducting due diligence review"
//               className="absolute inset-0 object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-transparent to-[#001F3F]/20" />
//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="p-5 border bg-white/10 backdrop-blur-md rounded-xl border-white/20">
//                 <Scale className="text-[#FFC000] mb-3" size={28} />
//                 <p className="text-lg font-bold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                   Regulatory Confidence
//                 </p>
//                 <p className="mt-1 text-sm text-gray-300">
//                   Full compliance coverage across 45+ jurisdictions
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Cards */}
//           <div ref={ref} className="grid gap-6 lg:w-3/5">
//             {[
//               {
//                 t: "Background Intelligence",
//                 d: "Comprehensive screening to highlight red flags before they manifest as liabilities.",
//                 icon: <Search className="text-[#004080] dark:text-[#FFC000]" />,
//               },
//               {
//                 t: "Regulatory Reviews",
//                 d: "Assessing internal controls against global standards to prevent bribery and corruption.",
//                 icon: <ShieldCheck className="text-[#004080] dark:text-[#FFC000]" />,
//               },
//               {
//                 t: "Litigation Support",
//                 d: "Providing expert testimony and forensic reporting to bolster legal positions.",
//                 icon: <Gavel className="text-[#004080] dark:text-[#FFC000]" />,
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className={`flex gap-6 items-start p-6 bg-[#F5F5F5] dark:bg-[#001A33] rounded-xl border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] hover:border-[#FFC000]/50 hover:shadow-lg transition-all duration-500 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
//                 style={{ transitionDelay: `${i * 150}ms` }}
//               >
//                 <div className="w-14 h-14 bg-[#F5F5F5] dark:bg-[#001F3F] border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#004080] group-hover:text-white group-hover:border-[#004080] transition-all">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-xl mb-2 text-[#001F3F] dark:text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
//                     {item.t}
//                   </h4>
//                   <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                     {item.d}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── FAQ SECTION ──────────────────────────── */
// function FAQSection() {
//   const [activeFaq, setActiveFaq] = useState(null);
//   return (
//     <section className="py-20 bg-[#FAFAFA] dark:bg-[#000d1a]">
//       <div className="max-w-3xl px-5 mx-auto sm:px-8">
//         <h2
//           className="text-3xl font-bold mb-10 text-center text-[#001F3F] dark:text-white"
//           style={{ fontFamily: "Montserrat, sans-serif" }}
//         >
//           Investigation Insights FAQ
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               className="bg-white dark:bg-[#001A33] rounded-xl shadow-sm border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] overflow-hidden"
//             >
//               <button
//                 onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
//                 className="flex items-center justify-between w-full p-6 font-bold text-left"
//               >
//                 <span className="text-[#001F3F] dark:text-white pr-8">
//                   {faq.q}
//                 </span>
//                 <ChevronDown
//                   className={`shrink-0 transition-transform duration-300 text-[#004080] dark:text-[#FFC000] ${activeFaq === idx ? "rotate-180" : ""}`}
//                 />
//               </button>
//               <div
//                 className="overflow-hidden transition-all duration-300"
//                 style={{
//                   maxHeight: activeFaq === idx ? "200px" : "0px",
//                   opacity: activeFaq === idx ? 1 : 0,
//                 }}
//               >
//                 <div className="px-6 pt-4 pb-6 text-gray-600 border-t dark:text-gray-300 border-gray-50 dark:border-white/5">
//                   {faq.a}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── CTA SECTION ──────────────────────────── */
// function CTASection() {
//   return (
//     <section className="py-20 bg-white dark:bg-[#001122]">
//       <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//         <div className="relative bg-[#001F3F] dark:bg-[#000d1a] rounded-[3rem] p-12 lg:p-24 text-center text-white shadow-2xl overflow-hidden border-b-8 border-[#FFC000]">
//           {/* Background image */}
//           <div className="absolute inset-0">
//             <img
//               src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop&crop=center"
//               alt=""
//               className="object-cover w-full h-full opacity-10"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/80 to-[#001F3F]" />
//           </div>

//           {/* Decorative grid */}
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `linear-gradient(rgba(255,192,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,192,0,0.3) 1px, transparent 1px)`,
//               backgroundSize: "40px 40px",
//             }}
//           />

//           <div className="relative z-10">
//             <h2 className="mb-6 text-3xl font-bold lg:text-5xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
//               Protect Your Organization
//             </h2>
//             <p className="max-w-2xl mx-auto mb-10 text-xl font-medium text-gray-300">
//               Implement proactive safeguards and reactive excellence for all
//               investigative requirements.
//             </p>
//             <button className="bg-[#FFC000] text-[#001F3F] px-12 py-5 rounded-md font-black text-xl hover:bg-[#FFB800] transition-all shadow-xl inline-flex items-center gap-3">
//               Request A Confidential Consultation <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ──────────────────────────── MAIN PAGE ──────────────────────────── */
// const ForensicsInvestigationPage = () => {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);

//   return (
//     <div className={`font-sans bg-[#FAFAFA] dark:bg-[#001122] text-[#001F3F] dark:text-white ${dark ? "dark" : ""}`} style={{ fontFamily: "Inter, sans-serif" }}>
//       {/* Dark mode toggle */}
//       <button
//         onClick={() => setDark(!dark)}
//         className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white dark:bg-[#001A33] border border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
//         aria-label="Toggle dark mode"
//       >
//         {dark ? <Sun size={20} className="text-[#FFC000]" /> : <Moon size={20} className="text-[#001F3F]" />}
//       </button>

//       <HeroSection />
//       <StrategicSection />
//       <FraudDetectionSection />
//       <DigitalSection />
//       <ComplianceSection />
//       <FAQSection />
//       <CTASection />

//       {/* FOOTER */}
//       <footer className="py-12 border-t border-[rgba(0,31,63,0.1)] dark:border-[rgba(255,192,0,0.15)] bg-white dark:bg-[#000d1a]">
//         <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
//           <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//             <div className="font-black text-2xl tracking-tighter text-[#003366] dark:text-white uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
//               RISK<span className="text-[#FFC000]">MAN</span>{" "}
//               <span className="ml-2 text-sm font-normal text-gray-400 lowercase">
//                 Forensics Unit
//               </span>
//             </div>
//             <div className="flex items-center gap-6 text-sm text-gray-400">
//               <span className="flex items-center gap-2">
//                 <Mail size={14} /> contact@riskman.com
//               </span>
//               <span className="flex items-center gap-2">
//                 <Phone size={14} /> +1 (800) 555-0199
//               </span>
//             </div>
//           </div>
//           <div className="mt-6 pt-6 border-t border-[rgba(0,31,63,0.05)] dark:border-[rgba(255,192,0,0.08)] text-center">
//             <p className="text-sm text-gray-500 dark:text-gray-500">
//               © 2026 RiskMan Consulting | Licensed Investigation & Forensic Accounting Group
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ForensicsInvestigationPage;



import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FraudSection from './FraudDetectionSection';
import CyberSection from './CyberSection';
import DueDiligenceSection from './DueDiligence';
import FaqSection from './FAQSection';
import CtaSection from './CTASection';


const ForensicsPage = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      <Helmet>
        <title>Forensics & Investigation Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers expert forensics and investigation services including fraud detection, digital forensics, cyber investigations, due diligence, and compliance reviews for enterprises." />
        <link rel="canonical" href="https://www.riskman.in/services/forensics-investigation" />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <FraudSection />
      <CyberSection />
      <DueDiligenceSection />
      <FaqSection />
      <CtaSection />
     
    </div>
  );
};

export default ForensicsPage;