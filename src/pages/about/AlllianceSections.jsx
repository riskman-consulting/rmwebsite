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
    website: "https://www.smcpallc.com",
    fullDescription: `Specializing in US GAAP and international financial reporting, serving clients from emerging startups to established global enterprises with precision and integrity.`,
    services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Business Process Improvement"],
    region: "United States & Global",
  },
];

const servicesRibbon = ["Risk", "Assurance", "Advisory", "Audit", "SOC Compliance", "Internal Controls", "Risk Management"];

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
      </div>

      {/* ═══════════════════════════════════════════
          RIBBONS — two crossing bands, always visible,
          scrolling in opposite directions like an X
      ═══════════════════════════════════════════ */}
      <div className="relative mt-16 sm:mt-20 h-40 sm:h-48 md:h-56">

        {/* RIBBON 1: Tilting DOWN-RIGHT → scrolls LEFT */}
        <div
          className="absolute z-20 flex items-center overflow-hidden"
          style={{
            width: "150%",
            height: "70px",
            left: "-25%",
            top: "15%",
            transform: "rotate(-4deg)",
            backgroundColor: "#FFC000",
            boxShadow: "0 8px 30px rgba(255, 192, 0, 0.35)",
          }}
        >
          <div className="ribbon-scroll-left flex whitespace-nowrap">
            {[...Array(6)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center flex-shrink-0 gap-6 sm:gap-10 md:gap-14 px-3 sm:px-5 md:px-6">
                {servicesRibbon.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-base sm:text-xl md:text-2xl lg:text-3xl italic font-black tracking-tighter uppercase"
                    style={{ color: "#0A1628" }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIBBON 2: Tilting UP-RIGHT → scrolls RIGHT */}
        <div
          className="absolute z-10 flex items-center overflow-hidden"
          style={{
            width: "150%",
            height: "70px",
            left: "-25%",
            bottom: "15%",
            transform: "rotate(3.5deg)",
            backgroundColor: "#FFC000",
            boxShadow: "0 8px 30px rgba(255, 192, 0, 0.35)",
          }}
        >
          <div className="ribbon-scroll-right flex whitespace-nowrap">
            {[...Array(6)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center flex-shrink-0 gap-6 sm:gap-10 md:gap-14 px-3 sm:px-5 md:px-6">
                {servicesRibbon.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-base sm:text-xl md:text-2xl lg:text-3xl italic font-black tracking-tighter uppercase"
                    style={{ color: "#0A1628" }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            ))}
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-brandDark/95 backdrop-blur-md"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-14">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="absolute p-2.5 sm:p-3 transition-all rounded-full top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 bg-brandNavy/5 dark:bg-white/5 text-brandDark dark:text-white hover:bg-brandAccent hover:text-brandDark z-10"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center gap-5 sm:gap-8 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b md:flex-row md:items-start border-borderLight dark:border-borderDark">
                  <img
                    src={selectedPartner.image}
                    className="object-cover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-4 shadow-xl rounded-2xl border-brandAccent flex-shrink-0"
                    alt={selectedPartner.name}
                  />
                  <div className="text-center md:text-left">
                    <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-brandDark dark:text-white">
                      {selectedPartner.name}
                    </h2>
                    <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-lg bg-brandAccent text-brandDark">
                      {selectedPartner.title}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-10 md:grid-cols-2 md:gap-12">
                  <div>
                    <h4 className="text-brandAccent font-bold mb-3 sm:mb-4 uppercase tracking-[0.2em] text-xs">
                      Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-brandDark/70 dark:text-white/70">
                      {selectedPartner.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-brandAccent font-bold mb-3 sm:mb-4 uppercase tracking-[0.2em] text-xs">
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
                <div className="flex justify-center pt-6 sm:pt-8 border-t border-borderLight dark:border-borderDark">
                  <a
                    href={selectedPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-white uppercase transition-all shadow-xl group rounded-2xl bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-105"
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

      {/* Ribbon animation keyframes */}
      <style>{`
        @keyframes ribbon-scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes ribbon-scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .ribbon-scroll-right {
          animation: ribbon-scroll-right 25s linear infinite;
        }
        .ribbon-scroll-left {
          animation: ribbon-scroll-left 25s linear infinite;
        }
      `}</style>
    </section>
  );
}