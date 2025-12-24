import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaHandshake } from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   ALLIANCE PARTNERS DATA
======================= */
const alliancePartners = [
  {
    name: "Integrität Audit, Accounting & Advisory",
    shortName: "Integrität CPA",
    title: "Integrated Audit Services",
    description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    website: "https://www.integritatcpa.com",
    fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services...`,
    services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance", "Audit & Review Services (US GAAP)"],
    region: "United States & European Union",
  },
  {
    name: "GQ Auditores Consultores",
    shortName: "GQ Auditores",
    title: "Financial Statement Audits in Spanish",
    description: "Chilean public accounting firm providing financial statement audit and review services in Spanish.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    website: "https://gqauditores.cl",
    fullDescription: `GQ Auditores Consultores is located in Santiago (Chile)...`,
    services: ["Financial Statement Audits (US GAAP)", "Financial Statement Reviews (IFRS)", "Bilingual Audit Services", "Going Public Support", "Merger & Reverse Merger Services"],
    region: "Latin America (Chile) & United States",
  },
  {
    name: "Supriyo Mullick CPA PLLC",
    shortName: "SM CPA",
    title: "Comprehensive Accounting & Advisory Services",
    description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    website: "https://www.smcpallc.com",
    fullDescription: `At Supriyo Mullick CPA PLLC, we specialize in delivering insightful...`,
    services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Internal Controls", "Business Process Improvement"],
    region: "United States & Global",
  },
];

export default function AlliancePartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const services = [
    "Audit", "Accounting", "Tax", "Advisory", 
    "Bookkeeping", "SOC Compliance", "Internal Controls", "Risk Management"
  ];

  return (
    <>
      <section id="alliance-partners" className="relative overflow-hidden bg-black py-14 md:pt-20 md:pb-0 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaHandshake className="text-3xl text-[var(--accent-blue-light)]" />
              <h2 className="text-3xl font-bold md:text-4xl">
                Strategic<br />
                <span className="gradient-text">Alliance Partners</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mb-12 text-base text-white text-start"
          >
            Collaborating with leading firms to deliver comprehensive solutions across audit, compliance, and consulting services.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {alliancePartners.map((partner, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-800 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/20 hover:scale-[1.02]"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-32 h-32 rounded-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 border-4 border-[var(--accent-blue)]/30 group-hover:border-[var(--accent-blue)]/60"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-center group-hover:text-[var(--accent-blue-light)] transition-colors duration-500">
                    {partner.shortName}
                  </h3>
                  <p className="text-[var(--accent-blue-light)] font-semibold mb-3 text-center">{partner.title}</p>
                  <p className="mb-6 text-sm leading-relaxed text-center text-white/70">{partner.description}</p>
                  <div className="flex justify-center">
                    <span className="px-4 py-2 text-xs rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/40 text-[var(--accent-blue-light)]">
                      {partner.region}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= UPDATED ANIMATED RIBBON ================= */}
          <div className="relative flex items-center justify-center mt-20 mb-10 h-80">

            {/* <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" /> */}
            
            {/* RIBBON 1: Tilting Down Right (Blue/Purple) */}
            <div 
              className="absolute w-[150%] z-20 flex items-center overflow-hidden border-y border-white/10"
              style={{ 
                transform: "rotate(-4.5deg) translateY(-20px)",
                transformOrigin:"left center",
                background: "linear-gradient(90deg, #1e3a8a 0%, #6b21a8 50%, #1e3a8a 100%)",
                // background: "linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-purple) 100%)",
                height: "85px",
                left:"-25%",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-left">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-3xl italic font-black tracking-tighter text-white uppercase">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIBBON 2: Tilting Up Right (Green Gradient as per image) */}
            <div 
              className="absolute w-[150%] z-10 flex items-center overflow-hidden"
              style={{ 
                transform: "rotate(3.5deg)  translateY(30px)",
                transformOrigin:"right center",
                background: "linear-gradient(90deg, #4c1d95 0%, #172554 100%)",
                // background: "linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-purple) 100%)", // Matching the green screenshot
                height: "85px",
                left:"-25%",
                boxShadow: "0 15x 35px rgba(0,0,0,0.5)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-right">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-2xl italic font-black tracking-tighter uppercase text-white/90">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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

      {/* ================= PARTNER DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] border shadow-2xl bg-zinc-900 border-white/10 rounded-3xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button onClick={() => setSelectedPartner(null)} className="absolute top-6 right-6 text-white/70 hover:text-white">
                  <FaTimes size={24} />
                </button>
                <div className="flex flex-col items-center mb-8">
                  <img src={selectedPartner.image} alt={selectedPartner.name} className="w-32 h-32 rounded-full border-4 border-[var(--accent-blue)] mb-4" />
                  <h2 className="text-3xl font-bold text-center text-white">{selectedPartner.name}</h2>
                </div>
                <div className="leading-relaxed whitespace-pre-line text-white/80">
                  {selectedPartner.fullDescription}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}