// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes, FaExternalLinkAlt, FaHandshake } from "react-icons/fa";
// import { ArrowUpRight } from "lucide-react";

// /* =======================
//    ANIMATIONS (Aligned with RiskMan Timing)
// ======================= */
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6, ease: "easeOut" },
// };

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.95 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.95 },
//   transition: { duration: 0.3 },
// };

// const alliancePartners = [
//   {
//     name: "Integrität Audit, Accounting & Advisory",
//     shortName: "Integrität CPA",
//     title: "Integrated Audit Services",
//     description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
//     website: "https://www.integritatcpa.com",
//     fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services focused on internal control over financial reporting (ICFR) and compliance for high-growth issuers.`,
//     services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance"],
//     region: "United States & European Union",
//   },
//   {
//     name: "Supriyo Mullick CPA PLLC",
//     shortName: "SM CPA",
//     title: "Comprehensive Accounting & Advisory Services",
//     description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
//     website: "https://www.smcpallc.com",
//     fullDescription: `Specializing in US GAAP and international financial reporting, serving clients from emerging startups to established global enterprises with precision and integrity.`,
//     services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Business Process Improvement"],
//     region: "United States & Global",
//   },
// ];

// export default function AlliancePartnersSection() {
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const servicesRibbon = ["Audit", "Accounting", "Tax", "Advisory", "Bookkeeping", "SOC Compliance", "Internal Controls", "Risk Management"];

//   return (
//     <section id="alliance-partners" className="relative overflow-hidden transition-colors duration-300 py-14 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">
//         {/* Header - Styled like KeyServices */}
//         <div className="mb-16 text-start">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brandDark/10 dark:bg-brandAccent/15">
//                 <FaHandshake className="text-2xl text-brandDark dark:text-brandAccent" />
//             </div>
//             <h2 className="text-4xl font-bold leading-tight text-brandDark dark:text-white">
//               Strategic <span className="text-brandGold dark:text-brandAccent">Alliance Partners</span>
//             </h2>
//           </div>
//           <p className="max-w-3xl mb-8 text-lg text-brandNavy dark:text-white/70">
//             Collaborating with leading global firms to deliver comprehensive solutions. We combine our internal control expertise with our partners' specialized audit capabilities to bridge the gap between compliance and operational excellence.
//           </p>
//         </div>

//         {/* Grid - Cards follow KeyServices Structure */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {alliancePartners.map((partner, i) => (
//             <motion.div
//               key={i}
//               {...fadeInUp}
//               className="relative p-8 transition-all duration-300 border cursor-pointer group rounded-3xl bg-surfaceLight border-borderLight hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:hover:border-brandAccent"
//               onClick={() => setSelectedPartner(partner)}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="relative mb-6">
//                     <img
//                       src={partner.image}
//                       alt={partner.name}
//                       className="object-cover w-32 h-32 transition-colors duration-300 border-4 rounded-full border-borderLight dark:border-borderDark group-hover:border-brandGold"
//                     />
//                     <div className="absolute p-2 text-white rounded-full -bottom-2 -right-2 bg-brandDark dark:bg-brandAccent dark:text-brandDark">
//                         <ArrowUpRight size={16} />
//                     </div>
//                 </div>
                
//                 <h3 className="mb-2 text-2xl font-bold text-brandDark dark:text-white">{partner.shortName}</h3>
//                 <p className="mb-3 font-semibold text-brandGold dark:text-brandAccent">{partner.title}</p>
//                 <p className="mb-6 text-sm leading-relaxed text-brandNavy dark:text-white/70">{partner.description}</p>
                
//                 <span className="px-4 py-1 text-xs font-medium border rounded-full bg-brandDark/5 dark:bg-white/5 text-brandNavy dark:text-white/50 border-borderLight dark:border-borderDark">
//                   {partner.region}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Scrolling Ribbon Section */}
//         <div className="relative flex items-center justify-center h-40 mt-24">
//            {/* Ribbon styling matches your branding: Navy for light, Gold for dark */}
//            <div className="absolute w-[120%] h-16 bg-brandDark dark:bg-brandAccent rotate-[-3deg] flex items-center overflow-hidden shadow-xl">
//               <div className="flex whitespace-nowrap animate-scroll-left">
//                 {[...Array(4)].map((_, i) => (
//                   <div key={i} className="flex gap-12 px-6">
//                     {servicesRibbon.map((s, idx) => (
//                       <span key={idx} className="text-2xl italic font-black text-white uppercase dark:text-brandDark opacity-90">{s}</span>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//            </div>
//         </div>
//       </div>

//       {/* Modal - Enhanced with your Brand UI */}
//       <AnimatePresence>
//         {selectedPartner && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brandDark/90 backdrop-blur-sm"
//             onClick={() => setSelectedPartner(null)}
//           >
//             <motion.div 
//               variants={scaleIn} initial="initial" animate="animate" exit="exit"
//               className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
//               onClick={e => e.stopPropagation()}
//             >
//               <div className="p-8 md:p-12">
//                 <button 
//                   onClick={() => setSelectedPartner(null)}
//                   className="absolute p-3 transition-colors rounded-full top-6 right-6 bg-brandDark/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandGold dark:hover:bg-brandAccent"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="flex flex-col items-start gap-8 mb-8 md:flex-row">
//                     <img src={selectedPartner.image} className="object-cover w-24 h-24 border-2 rounded-2xl border-brandGold" />
//                     <div>
//                         <h2 className="mb-2 text-3xl font-bold text-brandDark dark:text-white">{selectedPartner.name}</h2>
//                         <p className="font-bold text-brandGold dark:text-brandAccent">{selectedPartner.title}</p>
//                     </div>
//                 </div>

//                 <div className="grid gap-8 md:grid-cols-2">
//                     <div>
//                         <h4 className="mb-4 text-xs font-bold tracking-widest uppercase text-brandDark dark:text-white">Overview</h4>
//                         <p className="leading-relaxed text-brandNavy dark:text-white/70">{selectedPartner.fullDescription}</p>
//                     </div>
//                     <div>
//                         <h4 className="mb-4 text-xs font-bold tracking-widest uppercase text-brandDark dark:text-white">Key Services</h4>
//                         <ul className="space-y-2">
//                             {selectedPartner.services.map((s, i) => (
//                                 <li key={i} className="flex items-center gap-2 text-sm text-brandNavy dark:text-white/70">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent" /> {s}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="flex justify-center pt-8 mt-12 border-t border-borderLight dark:border-borderDark">
//                     <a 
//                       href={selectedPartner.website} 
//                       target="_blank" 
//                       className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-transform rounded-full bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105"
//                     >
//                         <FaExternalLinkAlt size={14} /> Visit Official Website
//                     </a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         @keyframes scroll-left {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll-left { animation: scroll-left 30s linear infinite; }
//       `}</style>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ExternalLink, Handshake, ArrowUpRight } from "lucide-react";

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6 },
// };

// const alliancePartners = [
//   {
//     name: "Integrität Audit, Accounting & Advisory",
//     shortName: "Integrität CPA",
//     title: "Integrated Audit Services",
//     description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
//     website: "https://www.integritatcpa.com",
//     fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services focused on internal control over financial reporting (ICFR) and compliance for high-growth issuers.`,
//     services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance"],
//     region: "United States & European Union",
//   },
//   {
//     name: "Supriyo Mullick CPA PLLC",
//     shortName: "SM CPA",
//     title: "Comprehensive Accounting & Advisory Services",
//     description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
//     website: "https://www.smcpallc.com",
//     fullDescription: `Specializing in US GAAP and international financial reporting, serving clients from emerging startups to established global enterprises with precision and integrity.`,
//     services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Business Process Improvement"],
//     region: "United States & Global",
//   },
// ];

// export default function AlliancePartnersSection() {
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const servicesRibbon = ["Audit", "Accounting", "Tax", "Advisory", "Bookkeeping", "SOC Compliance", "Internal Controls", "Risk Management"];

//   return (
//     <section id="alliance-partners" className="relative py-4 overflow-hidden transition-colors duration-300 lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container mx-auto max-w-7xl">
        
//         <div className="max-w-3xl mx-auto mb-20 text-center">
//           <motion.div {...fadeInUp} className="flex flex-col items-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-brandAccent/10">
//                 <Handshake size={32} className="text-brandAccent" />
//             </div>
//             <h2 className="mb-6 text-4xl font-black md:text-5xl text-brandDark dark:text-white font-heading">
//                Our CPA  <span className="text-brandGold dark:text-brandAccent">Alliance Partners</span>
//             </h2>
//             <p className="text-lg text-brandNavy/70 dark:text-white/60">
//             Collaborating with leading global firms to deliver comprehensive solutions. We combine our internal control expertise with our partners' specialized audit capabilities to bridge the gap between compliance and operational excellence.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-2">
//           {alliancePartners.map((partner, i) => (
//             <motion.div
//               key={i}
//               {...fadeInUp}
//               transition={{ delay: i * 0.1 }}
//               className="group relative p-10 border border-borderLight dark:border-borderDark rounded-[2.5rem] bg-surfaceLight dark:bg-surfaceDark hover:border-brandAccent transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl"
//               onClick={() => setSelectedPartner(partner)}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="relative mb-8">
//                     <img
//                       src={partner.image}
//                       alt={partner.name}
//                       className="object-cover transition-transform duration-500 border-4 border-white rounded-full shadow-lg w-36 h-36 dark:border-bgDark group-hover:scale-105"
//                     />
//                     <div className="absolute p-3 rounded-full shadow-lg bottom-1 right-1 bg-brandAccent text-brandDark">
//                         <ArrowUpRight size={20} />
//                     </div>
//                 </div>
                
//                 <h3 className="mb-3 text-3xl font-black transition-colors text-brandDark dark:text-white group-hover:text-brandAccent">
//                   {partner.shortName}
//                 </h3>
//                 <p className="mb-4 text-sm font-black tracking-widest uppercase text-brandAccent">
//                   {partner.title}
//                 </p>
//                 <p className="mb-8 text-sm leading-relaxed text-brandNavy/60 dark:text-white/50">
//                   {partner.description}
//                 </p>
                
//                 <span className="px-6 py-2 text-xs font-black rounded-full bg-brandNavy dark:bg-brandAccent text-white dark:text-brandDark uppercase tracking-[0.1em]">
//                   {partner.region}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative h-20 mt-32">
//            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-16 bg-brandAccent rotate-[-2deg] flex items-center overflow-hidden shadow-2xl">
//               <div className="flex whitespace-nowrap animate-scroll-left">
//                 {[...Array(4)].map((_, i) => (
//                   <div key={i} className="flex gap-16 px-8">
//                     {servicesRibbon.map((s, idx) => (
//                       <span key={idx} className="text-xl italic font-black uppercase text-brandDark">
//                         {s} •
//                       </span>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//            </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedPartner && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brandDark/95 backdrop-blur-md"
//             onClick={() => setSelectedPartner(null)}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-[3rem] shadow-3xl overflow-hidden max-h-[90vh] overflow-y-hidden"
//               onClick={e => e.stopPropagation()}
//             >
//               <div className="p-10 md:p-14">
//                 <button 
//                   onClick={() => setSelectedPartner(null)}
//                   className="absolute p-3 transition-all rounded-full top-8 right-8 bg-brandNavy/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandAccent hover:text-brandDark"
//                 >
//                   <X size={24} />
//                 </button>

//                 <div className="flex flex-col items-center gap-10 mb-12 md:flex-row md:items-start">
//                     <img src={selectedPartner.image} className="object-cover border-4 shadow-xl w-28 h-28 rounded-3xl border-brandAccent" alt="" />
//                     <div className="text-center md:text-left">
//                         <h2 className="mb-3 text-4xl font-black leading-tight text-brandDark dark:text-white">{selectedPartner.name}</h2>
//                         <span className="inline-block px-4 py-1 text-xs font-black tracking-widest uppercase rounded-lg bg-brandAccent text-brandDark">
//                           {selectedPartner.title}
//                         </span>
//                     </div>
//                 </div>

//                 <div className="grid gap-12 md:grid-cols-2">
//                     <div>
//                         <h4 className="text-brandAccent font-black mb-4 uppercase tracking-[0.2em] text-xs">Overview</h4>
//                         <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/70">
//                           {selectedPartner.fullDescription}
//                         </p>
//                     </div>
//                     <div>
//                         <h4 className="text-brandAccent font-black mb-4 uppercase tracking-[0.2em] text-xs">Specializations</h4>
//                         <ul className="grid grid-cols-1 gap-3">
//                             {selectedPartner.services.map((s,i) => (
//                                 <li key={i} className="flex items-center gap-3 text-sm font-medium text-brandNavy dark:text-white/80">
//                                     <div className="w-2 h-2 rounded-full bg-brandAccent" /> {s}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="flex justify-center pt-10 border-t mt-14 border-borderLight dark:border-borderDark/20">
//                     <a 
//                       href={selectedPartner.website} 
//                       target="_blank" 
//                       className="flex items-center gap-3 px-10 py-5 text-sm font-black tracking-widest text-white uppercase transition-all shadow-xl group rounded-2xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105 shadow-brandAccent/10"
//                     >
//                         Explore Partnership <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                     </a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Handshake, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const alliancePartners = [
  {
    name: "Integrität Audit, Accounting & Advisory",
    shortName: "Integrität CPA",
    title: "Integrated Audit Services",
    description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    website: "https://www.integritatcpa.com",
    fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services focused on internal control over financial reporting (ICFR) and compliance for high-growth issuers.`,
    services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance"],
    region: "United States & European Union",
  },
  {
    name: "Supriyo Mullick CPA PLLC",
    shortName: "SM CPA",
    title: "Comprehensive Accounting & Advisory Services",
    description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    website: "https://www.smcpallc.com",
    fullDescription: `Specializing in US GAAP and international financial reporting, serving clients from emerging startups to established global enterprises with precision and integrity.`,
    services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Business Process Improvement"],
    region: "United States & Global",
  },
];

export default function AlliancePartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const servicesRibbon = ["Audit", "Accounting", "Tax", "Advisory", "Bookkeeping", "SOC Compliance", "Internal Controls", "Risk Management"];

  return (
    <section id="alliance-partners" className="relative py-4 overflow-hidden lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        
        {/* Header */}
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
            Alliance Partners
          </span>
          
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-brandAccent/10">
            <Handshake size={32} className="text-brandAccent" />
          </div>
          
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Our CPA{" "}
            <span className="font-serif italic font-medium text-brandGold">
              Alliance
            </span>{" "}
            Partners
          </h2>
          
          <p className="text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
            Collaborating with leading global firms to deliver comprehensive solutions. We combine our internal control expertise with our partners' specialized audit capabilities to bridge the gap between compliance and operational excellence.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:gap-10">
          {alliancePartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 overflow-hidden transition-all duration-500 border cursor-pointer group lg:p-10 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setSelectedPartner(partner)}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-brandAccent/5 to-brandGold/5 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Partner Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-br from-brandAccent/20 to-brandGold/20 blur-xl group-hover:blur-2xl" />
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="relative object-cover w-32 h-32 transition-all duration-500 border-4 rounded-full shadow-lg border-brandPrimary/30 dark:border-brandAccent/30 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 p-2 transition-all duration-300 rounded-full shadow-lg bg-brandAccent text-brandDark group-hover:scale-110">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="mb-2 text-2xl font-bold transition-colors lg:text-3xl text-brandDark dark:text-white group-hover:text-brandAccent dark:group-hover:text-brandGold">
                  {partner.shortName}
                </h3>
                
                <p className="mb-4 text-xs font-bold tracking-widest uppercase text-brandAccent">
                  {partner.title}
                </p>
                
                <p className="mb-6 text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
                  {partner.description}
                </p>
                
                {/* Region Badge */}
                <span className="inline-block px-5 py-2 text-xs font-bold uppercase rounded-full bg-brandNavy dark:bg-brandAccent text-white dark:text-brandDark tracking-[0.1em]">
                  {partner.region}
                </span>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 opacity-0 bg-gradient-to-bl from-brandAccent/10 to-transparent rounded-bl-3xl rounded-tr-3xl group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Services Ribbon */}
        <div className="relative mt-20 h-28">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-20 bg-gradient-to-r from-brandAccent to-brandGold rotate-[-2deg] flex items-center overflow-hidden shadow-2xl">
            <div className="flex whitespace-nowrap animate-scroll">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-12 px-8">
                  {servicesRibbon.map((s, idx) => (
                    <span key={idx} className="text-xl font-black uppercase text-brandDark">
                      {s} •
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brandDark/95 backdrop-blur-md"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8 md:p-12 lg:p-14">
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedPartner(null)}
                  className="absolute p-3 transition-all rounded-full top-6 right-6 md:top-8 md:right-8 bg-brandNavy/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandAccent hover:text-brandDark"
                >
                  <X size={24} />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center gap-8 pb-8 mb-8 border-b md:flex-row md:items-start border-borderLight dark:border-borderDark">
                  <img 
                    src={selectedPartner.image} 
                    className="object-cover w-24 h-24 border-4 shadow-xl md:w-28 md:h-28 rounded-2xl border-brandAccent" 
                    alt={selectedPartner.name} 
                  />
                  <div className="text-center md:text-left">
                    <h2 className="mb-3 text-3xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
                      {selectedPartner.name}
                    </h2>
                    <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-lg bg-brandAccent text-brandDark">
                      {selectedPartner.title}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid gap-8 mb-10 md:grid-cols-2 md:gap-12">
                  <div>
                    <h4 className="text-brandAccent font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                      Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
                      {selectedPartner.fullDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-brandAccent font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                      Specializations
                    </h4>
                    <ul className="space-y-3">
                      {selectedPartner.services.map((s, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-brandDark dark:text-white/80">
                          <div className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandAccent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-8 border-t border-borderLight dark:border-borderDark">
                  <a 
                    href={selectedPartner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all shadow-xl group rounded-2xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105"
                  >
                    Explore Partnership 
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
