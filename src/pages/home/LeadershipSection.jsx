


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight, MapPin, Heart } from "lucide-react";
import { teamsImages } from "../../assets/teams";
import {
  PrasenPalRichBio,
  SukantaNagRichBio,
  ArpitGargRichBio,
} from "./LeadershipRichBio";
import { LeadershipModal } from "./LeadershipModal";

/* =========================
   Animations
========================= */
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  card: (i) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

/* =========================
   Team Data
========================= */
const TEAM_MEMBERS = [
  {
    name: "Sukanta Nag",
    title: "Co-Founder & Partner | Financial Advisory",
    bio: "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
    image: teamsImages.sukantaSir,
    location: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
    richBio: <SukantaNagRichBio />,
  },
  {
    name: "Prasen Pal",
    title: "Co-Founder & Partner | ERS & Sustainability",
    location: "Kolkata, India",
    bio: "A Chartered Accountant with 18+ years of global experience, formerly Deloitte and Genpact ERC. Certified in SCR (GARP), Six Sigma, RPA, and BRSR. Expert in ERM, Internal Audit, ESG, AI Automation, and Tax Advisory.",
    image:
      "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    linkedin: "https://www.linkedin.com/in/prasen-pal",
    richBio: <PrasenPalRichBio />,
  },
  {
    name: "Arpit Garg",
    title: "Co-Founder & Partner | ERS & ITRS",
    location: "Gurgaon, India",
    bio: " A Chartered Accountant and Certified Internal Auditor (CIA, CRMA, CISA) with 14+ years in risk assurance and advisory. Partner at RiskMan Consulting, ex-EY and Genpact. Expert in internal audit, IT risk, SOX/IFC, and fraud analytics.",
    image: teamsImages.arpitSir,
    linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
    richBio: <ArpitGargRichBio />,
  },
];


export function MemberCard({ member, index, onSelect }) {
  return (
    <motion.div
      {...animations.card(index)}
      onClick={() => onSelect(member)}
      className="p-6 transition-all duration-300 border cursor-pointer rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark group hover:border-brandGold hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover object-top w-32 h-32 mx-auto transition-all duration-300 border-4 rounded-full border-brandPrimary/30 group-hover:border-brandGold group-hover:scale-105"
        />
      </div>

      <h3 className="mb-1 text-xl font-bold text-center text-brandDark dark:text-white">
        {member.name}
      </h3>

      <p className="mb-3 text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
        {member.title}
      </p>

      {member.location && (
        <div className="flex items-center justify-center gap-1 mb-4 text-xs text-brandDark/60 dark:text-white/50">
          <MapPin className="w-3 h-3" />
          {member.location}
        </div>
      )}

      <p className="mb-5 text-sm leading-relaxed text-center text-brandDark/70 dark:text-white/70 line-clamp-5">
        {member.bio}
      </p>

      <div className="flex items-center justify-center gap-3">
        
          <a href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-4 py-2 text-sm transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        <button className="flex items-center gap-2 px-4 py-2 text-sm transition-colors border rounded-full text-brandDark dark:text-white border-borderLight dark:border-borderDark hover:bg-brandGold/10 hover:border-brandGold">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Section
========================= */
export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  

  return (
    <>
      <section className="px-6 py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            {...animations.fadeInUp}
            className="mb-16 text-4xl font-bold text-center md:text-5xl text-brandDark dark:text-white"
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-brandPrimary to-brandGold bg-clip-text">
              Co-founding
            </span>{" "}
            Partners
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((m, i) => (
              <MemberCard
                key={m.name}
                member={m}
                index={i}
                onSelect={setSelectedLeader}
              />
            ))}
          </div>

          {/* Tribute Section - appears after the 3 co-founders */}
          {/* <TributeSection /> */}
        </div>
      </section>

      {/* Modal */}
      {selectedLeader && (
        <LeadershipModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      )}
    </>
  );
}