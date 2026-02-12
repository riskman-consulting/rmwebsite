// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ExternalLink, Handshake, ArrowUpRight } from "lucide-react";

// import integritatImg from "../../assets/images/logo/integritat.png";
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// };

// const alliancePartners = [
//   {
//     name: "Integrität Audit, Accounting & Advisory",
//     shortName: "Integrität CPA",
//     title: "US based Public Accounting firm providing Assurance services ",
//     description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
//     image:integritatImg,
//     website: "https://www.integritatcpa.com",
//     fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services focused on internal control over financial reporting (ICFR) and compliance for high-growth issuers.`,
//     services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance"],
//     region: "United States & European Union",
//   },
//   {
//     name: "Supriyo Mullick CPA PLLC",
//     shortName: "SM CPA",
//     title: "US based CPA firm delivering reliable services on SOC 1, SOC 2 engagements",
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
//   const servicesRibbon = ["Risk Assurance and Advisory","Digital Transformation", "Sustainability & ESG", "Financial Advisory", "Digital Transformation"];

//   return (
//     <section id="alliance-partners" className="relative py-4 overflow-hidden lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="px-6 mx-auto max-w-7xl lg:px-12">
        
//         {/* Header */}
//         <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16 text-center">
//           <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
//             Alliance Partners
//           </span>
          
//           <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-brandAccent/10">
//             <Handshake size={32} className="text-brandAccent" />
//           </div>
          
//           <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
//             Our CPA{" "}
//             <span className="font-serif italic font-medium text-brandGold">
//               Alliance
//             </span>{" "}
//             Partners
//           </h2>
          
//           <p className="text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
//             Collaborating with leading global CPA firms to deliver comprehensive Assurance engagements as per US GAAP, and AICPA standards. 
//           </p>
//         </motion.div>

//         {/* Partners Grid */}
//         <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:gap-10">
//           {alliancePartners.map((partner, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="relative p-8 overflow-hidden transition-all duration-500 border cursor-pointer group lg:p-10 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
//               onClick={() => setSelectedPartner(partner)}
//             >
//               {/* Background Glow */}
//               <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-brandAccent/5 to-brandGold/5 group-hover:opacity-100" />
              
//               <div className="relative z-10 flex flex-col items-center text-center">
//                 {/* Partner Image */}
//                 <div className="relative mb-6">
//                   <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-br from-brandAccent/20 to-brandGold/20 blur-xl group-hover:blur-2xl" />
//                   <img
//                     src={partner.image}
//                     alt={partner.name}
//                     className="relative object-cover w-32 h-32 transition-all duration-500 border-4 rounded-full shadow-lg border-brandPrimary/30 dark:border-brandAccent/30 group-hover:scale-105"
//                   />
//                   <div className="absolute bottom-0 right-0 p-2 transition-all duration-300 rounded-full shadow-lg bg-brandAccent text-brandDark group-hover:scale-110">
//                     <ArrowUpRight size={16} />
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <h3 className="mb-2 text-2xl font-bold transition-colors lg:text-3xl text-brandDark dark:text-white group-hover:text-brandAccent dark:group-hover:text-brandGold">
//                   {partner.shortName}
//                 </h3>
                
//                 <p className="mb-4 text-xs font-bold tracking-widest uppercase text-brandAccent">
//                   {partner.title}
//                 </p>
                
//                 <p className="mb-6 text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
//                   {partner.description}
//                 </p>
                
//                 {/* Region Badge */}
//                 <span className="inline-block px-5 py-2 text-xs font-bold uppercase rounded-full bg-brandNavy dark:bg-brandAccent text-white dark:text-brandDark tracking-[0.1em]">
//                   {partner.region}
//                 </span>
//               </div>

//               {/* Decorative Corner */}
//               <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 opacity-0 bg-gradient-to-bl from-brandAccent/10 to-transparent rounded-bl-3xl rounded-tr-3xl group-hover:opacity-100" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Services Ribbon */}
//         <div className="relative mt-20 h-28">
//           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-20 bg-brandDark/10 dark:bg-brandAccent/60 rotate-[-2deg] flex items-center overflow-hidden shadow-2xl">
//             <div className="flex whitespace-nowrap animate-scroll">
//               {[...Array(4)].map((_, i) => (
//                 <div key={i} className="flex gap-12 px-8">
//                   {servicesRibbon.map((s, idx) => (
//                     <span key={idx} className="text-xl font-black uppercase text-brandDark dark:text-white/70">
//                       {s} •
//                     </span>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selectedPartner && (
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-brandDark/95 backdrop-blur-md"
//             onClick={() => setSelectedPartner(null)}
//           >
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0 }} 
//               animate={{ scale: 1, opacity: 1 }} 
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
//               onClick={e => e.stopPropagation()}
//             >
//               <div className="p-8 md:p-12 lg:p-14">
//                 {/* Close Button */}
//                 <button 
//                   onClick={() => setSelectedPartner(null)}
//                   className="absolute p-3 transition-all rounded-full top-6 right-6 md:top-8 md:right-8 bg-brandNavy/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandAccent hover:text-brandDark"
//                 >
//                   <X size={24} />
//                 </button>

//                 {/* Header */}
//                 <div className="flex flex-col items-center gap-8 pb-8 mb-8 border-b md:flex-row md:items-start border-borderLight dark:border-borderDark">
//                   <img 
//                     src={selectedPartner.image} 
//                     className="object-cover w-24 h-24 border-4 shadow-xl md:w-28 md:h-28 rounded-2xl border-brandAccent" 
//                     alt={selectedPartner.name} 
//                   />
//                   <div className="text-center md:text-left">
//                     <h2 className="mb-3 text-3xl font-bold leading-tight md:text-4xl text-brandDark dark:text-white">
//                       {selectedPartner.name}
//                     </h2>
//                     <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-lg bg-brandAccent text-brandDark">
//                       {selectedPartner.title}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content Grid */}
//                 <div className="grid gap-8 mb-10 md:grid-cols-2 md:gap-12">
//                   <div>
//                     <h4 className="text-brandAccent font-bold mb-4 uppercase tracking-[0.2em] text-xs">
//                       Overview
//                     </h4>
//                     <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
//                       {selectedPartner.fullDescription}
//                     </p>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-brandAccent font-bold mb-4 uppercase tracking-[0.2em] text-xs">
//                       Specializations
//                     </h4>
//                     <ul className="space-y-3">
//                       {selectedPartner.services.map((s, i) => (
//                         <li key={i} className="flex items-start gap-3 text-sm font-medium text-brandDark dark:text-white/80">
//                           <div className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-brandAccent" />
//                           {s}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="flex justify-center pt-8 border-t border-borderLight dark:border-borderDark">
//                   <a 
//                     href={selectedPartner.website} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all shadow-xl group rounded-2xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105"
//                   >
//                     Explore Partnership 
//                     <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Handshake, ArrowUpRight } from "lucide-react";

import integritatImg from "../../assets/images/logo/integritat.png";

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
    title: "US based Public Accounting firm providing Assurance services ",
    description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
    image: integritatImg,
    website: "https://www.integritatcpa.com",
    fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services focused on internal control over financial reporting (ICFR) and compliance for high-growth issuers.`,
    services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance"],
    region: "United States & European Union",
  },
  {
    name: "Supriyo Mullick CPA PLLC",
    shortName: "SM CPA",
    title: "US based CPA firm delivering reliable services on SOC 1, SOC 2 engagements",
    description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    website: "https://smcpaservices.com",
    fullDescription: `Specializing in US GAAP and international financial reporting, serving clients from emerging startups to established global enterprises with precision and integrity.`,
    services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Business Process Improvement"],
    region: "United States & Global",
  },
];

const enterpriseServices = [
  "Risk Assurance and Advisory",
  "Digital Transformation",
  "Sustainability & ESG",
  "Financial Advisory",
  "AI & Technology",
  "Forensics and Investigation"
];

const itRiskServices = [
  "SOC Compliance",
  "ISO & TISAX Readiness",
  "PCI DSS",
  "ITGC and ITAC",
  "BCP/DR",
  "Cyber Security",
  "Data Privacy"
];

export default function AlliancePartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState(null);

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
            Collaborating with leading global CPA firms to deliver comprehensive Assurance engagements as per US GAAP, and AICPA standards. 
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

        {/* Services Ribbons */}
        <div className="relative flex items-center justify-center mt-24 mb-16 h-96">
          {/* Background Glow Effects */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-brandAccent/20 dark:bg-brandAccent/30 blur-[100px] rounded-full"
              style={{ transform: "translate(-50%, -50%) rotate(-2.5deg)" }}
            />
            <div 
              className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-brandNavy/20 dark:bg-brandNavy/30 blur-[100px] rounded-full"
              style={{ transform: "translate(-50%, 50%) rotate(2.5deg)" }}
            />
          </div>

          {/* RIBBON 1: Top - Enterprise Services */}
          <div
            className="absolute w-[160%] z-30 flex items-center overflow-hidden group"
            style={{
              transform: "rotate(-3deg) translateY(-50px)",
              transformOrigin: "center",
              height: "100px",
              left: "-30%",
            }}
          >
            {/* Main Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-brandAccent to-brandGold dark:from-brandAccent dark:via-brandGold dark:to-[#FFD700]" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10" />
            
            {/* Diagonal Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.1) 10px,
                  rgba(255,255,255,0.1) 20px
                )`
              }}
            />
            
            {/* Top Border with Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            
            {/* Bottom Border with Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-brandDark/40 to-transparent" />
            
            {/* 3D Shadow Effect */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                boxShadow: `
                  0 8px 32px rgba(255, 192, 0, 0.4),
                  0 2px 8px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `
              }}
            />

            {/* Content */}
            <div className="relative flex whitespace-nowrap animate-scroll-left">
              {[...Array(5)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-20 px-10">
                  {enterpriseServices.map((service, idx) => (
                    <React.Fragment key={idx}>
                      <span 
                        className="text-4xl font-black tracking-tight uppercase transition-all duration-300 text-brandDark hover:scale-110"
                        style={{ 
                          fontStyle: "italic",
                          textShadow: `
                            2px 2px 0px rgba(0, 0, 0, 0.1),
                            0 0 20px rgba(255, 255, 255, 0.3),
                            1px 1px 2px rgba(0, 0, 0, 0.2)
                          `,
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {service}
                      </span>
                      {idx < enterpriseServices.length - 1 && (
                        <span className="text-3xl font-black text-brandDark/40">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIBBON 2: Bottom - IT Risk Management */}
          <div
            className="absolute w-[160%] z-20 flex items-center overflow-hidden group"
            style={{
              transform: "rotate(3deg) translateY(50px)",
              transformOrigin: "center",
              height: "100px",
              left: "-30%",
            }}
          >
            {/* Main Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a33] via-brandDark to-brandNavy dark:from-brandNavy dark:via-[#003d6b] dark:to-brandNavy" />
            
            {/* Metallic Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
            
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px"
              }}
            />
            
            {/* Top Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandAccent/50 to-transparent" />
            
            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
            
            {/* 3D Shadow Effect */}
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                boxShadow: `
                  0 12px 40px rgba(0, 31, 63, 0.6),
                  0 4px 12px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.4)
                `
              }}
            />

            {/* Content */}
            <div className="relative flex whitespace-nowrap animate-scroll-right">
              {[...Array(5)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-20 px-10">
                  {itRiskServices.map((service, idx) => (
                    <React.Fragment key={idx}>
                      <span 
                        className="text-4xl font-black tracking-tight text-white uppercase transition-all duration-300 hover:scale-110"
                        style={{ 
                          fontStyle: "italic",
                          textShadow: `
                            2px 2px 4px rgba(0, 0, 0, 0.5),
                            0 0 30px rgba(255, 192, 0, 0.2),
                            1px 1px 3px rgba(0, 0, 0, 0.8)
                          `,
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {service}
                      </span>
                      {idx < itRiskServices.length - 1 && (
                        <span className="text-3xl font-black text-brandAccent/60">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-brandAccent/30 dark:bg-brandAccent/40 blur-sm"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full bg-gradient-to-br from-brandAccent/10 to-transparent blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-gradient-to-tl from-brandNavy/10 to-transparent blur-2xl" />
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          }
        `}</style>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-brandDark/95 backdrop-blur-md"
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
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
      `}</style>
    </section>
  );
}