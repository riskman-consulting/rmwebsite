// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa";
// import { ArrowUpRight } from "lucide-react";
// import LeadershipModal from "../about/LeadershipModal";
 
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
// };
 
// export default function LeadershipSection() {
//     const [selectedLeader, setSelectedLeader] = React.useState(null);
//   const teamMembers = [
//     {
//       name: "Sukanta Nag",
//       title: "Partner | Financial Advisory",
//       bio:
//         "CA, CS, CMA, CAIIB with 41+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
//       image:
//         "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
//       linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
//       fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
//     },
//     {
//       name: "Prasen Pal",
//       title: "Partner | ERS & Sustainability",
//       bio:
//         "A Chartered Accountant and globally certified professional—SCR (GARP), Six Sigma Green Belt, RPA Business Analyst, BRSR & Sustainability—with 18+ years of international experience. Formerly with Deloitte and Genpact ERC, he brings deep expertise in Enterprise Risk Management, Internal Audit, ESG Strategy & Reporting, AI-Powered Automation, and Tax & Regulatory Advisory.",
//       image:
//         "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
//       linkedin: "https://www.linkedin.com/in/prasen-pal",
//       fullBio: "A CA, Sustainability and Climate Risk (SCR) Professional (GARP), Lean Six Sigma Green Belt (Genpact), RPA Business Analyst, Diploma in RPA Implementation Methodology,  Certified in Sustainability and BRSR (ICAI), Certified in GST (ICAI), ex-Deloitte ERS, EY-GDS, and Genpact ERC with 17+ years of experience spanning Risk Management, Internal Audits, Sustainability and ESG, Process mining and engineering, Process automation and RPA, domestic Tax Laws, and adoption of AI. He is instrumental in managing various advisory and outsourced services with multiple corporate houses.",
//     },
//     {
//       name: "Arpit Garg",
//       title: "Partner | ERS & ITRS",
//       bio:
//         "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
//       image:
//         "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
//       linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
//       fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
//     },
//   ];
 
 
//   return (
//     <section id="co-founders" className="relative px-2 py-8 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-16 sm:py-8">
//       <div className="container px-4 mx-auto md:px-8 lg:px-12">
       
//         {/* HEADER - Consistent with KeyServices & FAQ */}
//         <div className="max-w-4xl mb-16 text-left">
//           <motion.p
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="mb-3 text-sm font-bold tracking-[0.2em] uppercase text-brandNavy dark:text-brandAccent"
//           >
//             Visionary Mindset
//           </motion.p>
 
//           <motion.h2
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="mb-6 text-3xl font-black leading-tight md:text-5xl text-brandDark dark:text-white"
//           >
//             Our <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Leadership</span> Team
//           </motion.h2>
 
//           <motion.p
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="max-w-2xl text-lg leading-relaxed text-brandNavy dark:text-white/70"
//           >
//             Meet the visionary leaders driving RiskMan's mission to transform industry complexities into strategic opportunities.
//           </motion.p>
//         </div>
 
//         {/* TEAM GRID */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {teamMembers.map((m, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               onClick={() => setSelectedLeader(m)}
//               className="group relative p-8 transition-all duration-500 border cursor-pointer bg-white dark:bg-surfaceDark border-gray-200 dark:border-borderDark rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold/40 dark:hover:border-brandAccent/40"
//             >
//               {/* Image Section with Refined Border */}
//               <div className="relative flex justify-center mb-8">
//                 <div className="relative p-1 transition-all duration-500 border-2 border-dashed rounded-full border-brandGold/20 dark:border-brandAccent/20 group-hover:border-solid group-hover:border-brandGold">
//                   <img
//                     src={m.image}
//                     alt={m.name}
//                     className="object-cover w-32 h-32 transition-all duration-700 rounded-full grayscale group-hover:grayscale-0 group-hover:scale-105"
//                   />
//                 </div>
               
//                 {/* LinkedIn Floating Icon */}
//                 <a
//                   href={m.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="absolute bottom-0 flex items-center justify-center w-10 h-10 text-white transition-transform translate-x-10 rounded-full shadow-lg right-1/3 bg-brandDark dark:bg-brandAccent dark:text-brandDark hover:scale-110"
//                 >
//                   <FaLinkedin size={18} />
//                 </a>
//               </div>
 
//               {/* Text Content - Aligned with FAQ spacing */}
//               <div className="text-center">
//                 <h3 className="mb-2 text-2xl font-black transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                   {m.name}
//                 </h3>
//                 <p className="mb-4 text-xs font-black tracking-widest uppercase text-brandGold dark:text-brandAccent">
//                   {m.title}
//                 </p>
//                 <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-white/60 line-clamp-3">
//                   {m.bio}
//                 </p>
 
//                 {/* Bottom Action - Style from KeyServices */}
//                 <div className="flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase transition-all text-brandNavy/40 dark:text-white/30 group-hover:text-brandDark dark:group-hover:text-white">
//                   View Full Bio <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </div>
//               </div>
 
//               {/* Bottom Accent Line */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 bg-brandGold dark:bg-brandAccent transition-all duration-500 group-hover:w-1/2 rounded-t-full" />
//             </motion.div>
//           ))}
//         </div>
//         <LeadershipModal selectedLeader={selectedLeader} setSelectedLeader={setSelectedLeader} />
//       </div>
//     </section>
//   );
// }


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

/* =========================
   Tribute Section
========================= */
// function TributeSection() {
//   return (
//     <motion.div
//       {...animations.fadeInUp}
//       className="w-full py-6 my-12 border-y bg-gradient-to-r from-brandPrimary/5 via-brandGold/5 to-brandPrimary/5 border-brandAccent/20 dark:border-brandGold/30"
//     >
//       <div className="container px-4 mx-auto">
//         <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold tracking-wider uppercase rounded-full bg-brandAccent/10 text-brandAccent shrink-0">
//             <Heart className="w-3 h-3 fill-current" /> In Loving Memory
//           </div>
          
//           {/* Name */}
//           <span className="text-xl font-bold shrink-0 text-brandPrimary dark:text-brandAccent">
//             Prabirsen Gupta:
//           </span>
          
//           {/* Quote */}
//           <span className="text-lg italic text-brandNavy/70 dark:text-white/70">
//             "Excellence is not a destination; it is a continuous journey."
//           </span>
          
//           {/* Separator - hidden on mobile */}
//           <span className="hidden mx-4 md:inline text-brandAccent/30">•</span>
          
//           {/* Description */}
//           <p className="max-w-2xl text-base font-medium md:text-lg text-brandNavy/80 dark:text-white/80">
//             We honor the legacy of Prabir Sen Gupta whose vision and mentorship laid the foundation for RiskMan.
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

/* =========================
   Card
========================= */
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