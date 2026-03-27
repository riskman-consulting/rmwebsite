import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MapPin, Briefcase, Target, TrendingUp, Award } from "lucide-react";
import { teamsImages } from "../../assets/teams";

/* ── DATA ── */
const COFOUNDERS = [
  {
    name: "Sukanta Nag",
    title: "Co-Founder & Partner | Financial Advisory",
    badge: "Co-Founder & Partner | Financial Advisory",
    location: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
    image: teamsImages.sukantaSir,
    bio: "CA, CS, CMA, CAIIB and M.Com with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in deep regulatory expertise and long-standing corporate relationships.",
    summaryBlocks: [
      { text: "A distinguished professional with over <strong>41+ years of experience</strong> across Credit Rating, Corporate Banking, Risk Management and Financial Advisory — bringing deep regulatory expertise and trusted advisory to corporates." },
      { text: "CA, CS, CMA, CAIIB, M.Com — a rare combination of qualifications that positions him as a <strong>360-degree financial advisor</strong> capable of navigating complex corporate decisions." },
    ],
    expertise: ["Corporate Banking", "Credit Rating", "Risk Management", "Valuation", "Financial Consulting", "Regulatory Advisory"],
    highlightsTitle: "Key Strengths",
    highlights: [
      "360-degree advisory across finance, risk, and compliance",
      "Decades-long BFSI expertise with deep regulatory insight",
      "Long-term trusted relationships with leading corporates",
    ],
    certTitle: "Professional Qualifications",
    certifications: [
      { title: "CA — Chartered Accountant", org: "ICAI" },
      { title: "CS — Company Secretary", org: "ICSI" },
      { title: "CMA — Cost & Management Accountant", org: "ICMAI" },
      { title: "CAIIB", org: "Indian Institute of Banking & Finance" },
    ],
    philosophyBlocks: [
      "A trusted advisor to corporates, guiding complex financial and strategic decisions with decades of wisdom.",
      "He continues to shape how organizations approach risk, compliance, and long-term value creation.",
    ],
  },
  {
    name: "Prasen Pal",
    title: "Co-Founder & Partner | ERS & Sustainability",
    badge: "Co-Founder & Partner | ERS & Sustainability",
    location: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/prasen-pal",
    image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    bio: "A Chartered Accountant with 18+ years of global experience, formerly Deloitte and Genpact ERC. Certified in SCR (GARP), Six Sigma, RPA, and BRSR. Expert in ERM, Internal Audit, ESG, AI Automation, and Tax.",
    summaryBlocks: [
      { text: "A seasoned professional with over <strong>18 years of distinguished experience</strong> across Big Four and global consulting powerhouses—including <strong>Deloitte, EY, and Genpact</strong>—he brings a rare blend of strategic vision and technical mastery to the firm's leadership." },
    ],
    expertise: ["Enterprise Risk Management", "Internal Audit", "ESG & BRSR", "Sustainability Strategy", "Process Excellence", "AI Automation", "Tax & Compliance Advisory"],
    highlightsTitle: "Key Highlights",
    highlights: [
      "Big Four veteran with global consulting experience",
      "Pioneer in ESG integration and sustainability reporting",
      "Expert in deploying automation and AI at scale",
    ],
    certTitle: "Professional Certifications",
    certifications: [
      { title: "Sustainability & Climate Risk (SCR)", org: "GARP" },
      { title: "Lean Six Sigma Green Belt", org: "" },
      { title: "RPA Business Analyst", org: "Implementation Specialist" },
      { title: "BRSR & Sustainability", org: "ICAI" },
      { title: "GST Certification", org: "ICAI" },
      { title: "AICA (L-1)", org: "ICAI" },
    ],
    philosophyBlocks: [
      "He is widely recognized for architecting end-to-end advisory solutions that help organizations navigate complexity—whether embedding ESG into corporate strategy, engineering leaner processes, deploying automation at scale, or harnessing AI for competitive advantage.",
      "A trusted advisor to leading corporate houses, he continues to shape how businesses think about risk, resilience, and responsible growth in an evolving global landscape.",
    ],
  },
  {
    name: "Arpit Garg",
    title: "Co-Founder & Partner | ERS & ITRS",
    badge: "Co-Founder & Partner | ERS & ITRS",
    location: "Gurgaon, India",
    linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
    image:teamsImages.arpitSir,
    bio: "Mr. Arpit Garg, A Chartered Accountant, Certified Internal Auditor, CRMA, and CISA with 14+ years in risk assurance and advisory. Partner at RiskMan Consulting, ex-EY, Genpact, and SNB.",
    summaryBlocks: [
      { text: "<strong>Mr. Arpit Garg, A Chartered Accountant </strong>, Certified Internal Auditor, CRMA, and CISA with 14+ years in risk assurance and advisory. Partner at RiskMan Consulting, ex-EY, Genpact, and SNB." },
    ],
    expertise: ["Internal Audit", "ERM", "IT Risk", "SOC 1", "SOC 2", "SOX/IFC", "Fraud Analytics"],
    highlightsTitle: "Impact Areas",
    highlights: [
      "Comprehensive risk audits across diverse industries",
      "Expert in control design and governance frameworks",
      "Specialist in IT general controls and cybersecurity risk",
    ],
    certTitle: "Certifications",
    certifications: [
      { title: "CA — Chartered Accountant", org: "ICAI" },
      { title: "CIA — Certified Internal Auditor", org: "IIA" },
      { title: "CRMA — Certification in Risk Management Assurance", org: "IIA" },
      { title: "CISA — Certified Information Systems Auditor", org: "ISACA" },
    ],
    philosophyBlocks: [
      "Designs resilient internal control frameworks that help organizations proactively manage risk and meet governance standards.",
      "A respected voice in IT risk and audit circles, he brings precision and depth to every engagement.",
    ],
  },
];

/* ── MODAL ── */
function LeadershipModal({ leader, onClose }) {
  if (!leader) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden
                     bg-surfaceLight dark:bg-surfaceDark
                     border border-borderLight dark:border-borderDark"
        >
          {/* ── HEADER ── */}
          <div className="flex-shrink-0 px-7 py-6
                          bg-gradient-to-r from-brandPrimary/5 to-brandGold/10
                          dark:from-brandPrimary/10 dark:to-brandGold/10
                          border-b border-borderLight dark:border-borderDark">

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-5">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0
                             border-[3px] border-brandGold/50"
                />
                <div>
                  <h2 className="font-heading text-2xl md:text-[1.75rem] font-bold leading-tight mb-1
                                 text-brandDark dark:text-white">
                    {leader.name}
                  </h2>
                  <p className="text-sm font-semibold mb-2 text-brandPrimary dark:text-brandAccent">
                    {leader.title}
                  </p>
                  {leader.location && (
                    <div className="flex items-center gap-1.5 text-xs text-brandDark/50 dark:text-white/40">
                      <MapPin className="w-3.5 h-3.5" />
                      {leader.location}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-full transition-colors
                           hover:bg-brandDark/10 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5 text-brandDark dark:text-white" />
              </button>
            </div>

            {leader.linkedin && (
              <div className="mt-4">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full
                             border transition-colors
                             text-brandPrimary border-brandPrimary/30 hover:bg-brandPrimary/10
                             dark:text-brandAccent dark:border-brandAccent/30 dark:hover:bg-brandAccent/10"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div className="flex-1 overflow-y-auto px-7 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* LEFT */}
              <div className="flex flex-col gap-4">

                {/* Badge */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brandGold/10 dark:bg-brandGold/15">
                    <Briefcase className="w-4 h-4 text-brandGold" />
                  </div>
                  <span className="text-xs font-semibold px-4 py-2 rounded-full
                                   border border-brandGold/30 bg-brandGold/10
                                   text-brandDark dark:text-white/90">
                    {leader.badge}
                  </span>
                </div>

                {/* Summary blocks */}
                {leader.summaryBlocks.map((block, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-l-4 border-brandGold rounded-r-xl
                               bg-brandPrimary/5 dark:bg-brandPrimary/10
                               [&_strong]:font-semibold [&_strong]:text-brandPrimary dark:[&_strong]:text-brandAccent"
                  >
                    <p
                      className="text-sm leading-relaxed text-brandDark/90 dark:text-white/80"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  </div>
                ))}

                {/* Core Expertise */}
                <div className="p-5 rounded-2xl border transition-shadow hover:shadow-md
                                bg-surfaceLight dark:bg-brandNavy/40
                                border-borderLight dark:border-borderDark">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-brandPrimary/10 dark:bg-brandPrimary/20">
                      <Target className="w-4 h-4 text-brandPrimary dark:text-brandAccent" />
                    </div>
                    <h4 className="text-sm font-bold text-brandDark dark:text-white">Core Expertise</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg
                                   border border-brandPrimary/20 bg-brandPrimary/5
                                   dark:border-brandAccent/20 dark:bg-brandAccent/5
                                   text-brandDark dark:text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-5 rounded-2xl border
                                border-brandGold/30 dark:border-brandGold/20
                                bg-gradient-to-br from-brandGold/5 to-brandPrimary/5
                                dark:from-brandGold/10 dark:to-brandPrimary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-brandGold" />
                    <h4 className="text-sm font-bold text-brandDark dark:text-white">{leader.highlightsTitle}</h4>
                  </div>
                  <ul className="space-y-3">
                    {leader.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-brandDark/80 dark:text-white/70">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brandGold flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4">

                {/* Certifications */}
                <div className="p-5 rounded-2xl border transition-shadow hover:shadow-md
                                bg-surfaceLight dark:bg-brandNavy/40
                                border-borderLight dark:border-borderDark">
                  <div className="flex items-center gap-3 mb-5">
                    <Award className="w-5 h-5 text-brandGold" />
                    <h4 className="text-sm font-bold text-brandDark dark:text-white">{leader.certTitle}</h4>
                  </div>
                  <ul className="space-y-3">
                    {leader.certifications.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1 w-2 h-2 rounded-full bg-brandGold flex-shrink-0" />
                        <div>
                          <strong className="text-sm font-semibold text-brandDark dark:text-white">{c.title}</strong>
                          {c.org && (
                            <span className="block text-xs mt-0.5 text-brandDark/50 dark:text-white/40">{c.org}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Philosophy */}
                <div className="px-5 py-4 border-l-4 border-brandPrimary dark:border-brandAccent
                                rounded-r-xl bg-brandPrimary/5 dark:bg-brandAccent/5">
                  {leader.philosophyBlocks.map((p, i) => (
                    <p
                      key={i}
                      className={`text-sm leading-relaxed italic text-brandDark/80 dark:text-white/75
                                  ${i < leader.philosophyBlocks.length - 1 ? "mb-3" : ""}`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ── CARD ── */
function MemberCard({ member, index, onSelect, isSelected }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(member)}
      className={`group flex flex-col items-center px-6 py-8 rounded-2xl cursor-pointer
                  transition-all duration-200 font-sans
                  bg-surfaceLight dark:bg-surfaceDark
                  ${isSelected
                    ? "border-2 border-brandGold shadow-[0_8px_32px_rgba(255,184,0,0.2)] dark:shadow-[0_8px_32px_rgba(255,192,0,0.15)]"
                    : "border border-borderLight dark:border-borderDark hover:shadow-xl hover:border-brandGold/50 dark:hover:border-brandGold/30"
                  }`}
    >
      {/* Avatar */}
      <div className={`w-28 h-28 rounded-full overflow-hidden mb-4 transition-all duration-200
                       ring-offset-2 ring-offset-surfaceLight dark:ring-offset-surfaceDark
                       ${isSelected
                         ? "ring-[3px] ring-brandGold"
                         : "ring-[3px] ring-borderLight dark:ring-borderDark group-hover:ring-brandGold/60"
                       }`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="font-heading text-xl font-bold text-center mb-1 text-brandDark dark:text-white">
        {member.name}
      </h3>
      <p className="text-sm font-semibold text-center mb-2 text-brandPrimary dark:text-brandAccent">
        {member.title}
      </p>
      <div className="flex items-center gap-1.5 text-xs mb-4 text-brandDark/50 dark:text-white/40">
        <MapPin className="w-3 h-3" />
        {member.location}
      </div>
      <p className="text-sm leading-relaxed text-center mb-5 line-clamp-4 text-brandDark/60 dark:text-white/50">
        {member.bio}
      </p>

      <div className="flex gap-2.5 mt-auto">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full
                     border transition-colors
                     border-borderLight text-brandDark hover:bg-brandDark/5
                     dark:border-borderDark dark:text-white/80 dark:hover:bg-white/5"
        >
          <Linkedin className="w-3.5 h-3.5" />
          LinkedIn
        </a>
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(member); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full
                     border transition-colors
                     border-borderLight text-brandDark hover:bg-brandDark/5
                     dark:border-borderDark dark:text-white/80 dark:hover:bg-white/5"
        >
          Read More →
        </button>
      </div>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function LeadershipSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 px-6 min-h-screen bg-bgLight dark:bg-bgDark font-sans">
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {COFOUNDERS.map((m, i) => (
          <MemberCard
            key={m.name}
            member={m}
            index={i}
            onSelect={setSelected}
            isSelected={selected?.name === m.name}
          />
        ))}
      </div>

      <LeadershipModal leader={selected} onClose={() => setSelected(null)} />
    </section>
  );
}