import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaHandshake } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

/* =======================
   ANIMATIONS (Aligned with RiskMan Timing)
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3 },
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
    <section id="alliance-partners" className="relative py-14 bg-bgLight dark:bg-bgDark transition-colors duration-300 overflow-hidden">
      <div className="container">
        {/* Header - Styled like KeyServices */}
        <div className="mb-16 text-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brandDark/10 dark:bg-brandAccent/15">
                <FaHandshake className="text-2xl text-brandDark dark:text-brandAccent" />
            </div>
            <h2 className="text-4xl font-bold leading-tight text-brandDark dark:text-white">
              Strategic <span className="text-brandGold dark:text-brandAccent">Alliance Partners</span>
            </h2>
          </div>
          <p className="max-w-3xl mb-8 text-lg text-brandNavy dark:text-white/70">
            Collaborating with leading global firms to deliver comprehensive solutions. We combine our internal control expertise with our partners' specialized audit capabilities to bridge the gap between compliance and operational excellence.
          </p>
        </div>

        {/* Grid - Cards follow KeyServices Structure */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {alliancePartners.map((partner, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="group relative p-8 border rounded-3xl transition-all duration-300 bg-surfaceLight border-borderLight hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:hover:border-brandAccent cursor-pointer"
              onClick={() => setSelectedPartner(partner)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-borderLight dark:border-borderDark group-hover:border-brandGold transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-brandDark dark:bg-brandAccent p-2 rounded-full text-white dark:text-brandDark">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-brandDark dark:text-white">{partner.shortName}</h3>
                <p className="text-brandGold dark:text-brandAccent font-semibold mb-3">{partner.title}</p>
                <p className="text-brandNavy dark:text-white/70 text-sm leading-relaxed mb-6">{partner.description}</p>
                
                <span className="px-4 py-1 text-xs font-medium rounded-full bg-brandDark/5 dark:bg-white/5 text-brandNavy dark:text-white/50 border border-borderLight dark:border-borderDark">
                  {partner.region}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Ribbon Section */}
        <div className="relative flex items-center justify-center mt-24 h-40">
           {/* Ribbon styling matches your branding: Navy for light, Gold for dark */}
           <div className="absolute w-[120%] h-16 bg-brandDark dark:bg-brandAccent rotate-[-3deg] flex items-center overflow-hidden shadow-xl">
              <div className="flex whitespace-nowrap animate-scroll-left">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-12 px-6">
                    {servicesRibbon.map((s, idx) => (
                      <span key={idx} className="text-2xl font-black italic uppercase text-white dark:text-brandDark opacity-90">{s}</span>
                    ))}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Modal - Enhanced with your Brand UI */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brandDark/90 backdrop-blur-sm"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div 
              variants={scaleIn} initial="initial" animate="animate" exit="exit"
              className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-brandDark/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandGold dark:hover:bg-brandAccent transition-colors"
                >
                  <FaTimes />
                </button>

                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <img src={selectedPartner.image} className="w-24 h-24 rounded-2xl object-cover border-2 border-brandGold" />
                    <div>
                        <h2 className="text-3xl font-bold text-brandDark dark:text-white mb-2">{selectedPartner.name}</h2>
                        <p className="text-brandGold dark:text-brandAccent font-bold">{selectedPartner.title}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-brandDark dark:text-white font-bold mb-4 uppercase tracking-widest text-xs">Overview</h4>
                        <p className="text-brandNavy dark:text-white/70 leading-relaxed">{selectedPartner.fullDescription}</p>
                    </div>
                    <div>
                        <h4 className="text-brandDark dark:text-white font-bold mb-4 uppercase tracking-widest text-xs">Key Services</h4>
                        <ul className="space-y-2">
                            {selectedPartner.services.map((s, i) => (
                                <li key={i} className="flex items-center gap-2 text-brandNavy dark:text-white/70 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent" /> {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-borderLight dark:border-borderDark flex justify-center">
                    <a 
                      href={selectedPartner.website} 
                      target="_blank" 
                      className="px-8 py-4 rounded-full bg-brandDark text-white dark:bg-brandAccent dark:text-brandDark font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                        <FaExternalLinkAlt size={14} /> Visit Official Website
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
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
      `}</style>
    </section>
  );
}