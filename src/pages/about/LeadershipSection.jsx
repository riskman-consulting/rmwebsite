import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";

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
   Prasen Pal – EXACT BIO
========================= */
function PrasenPalRichBio() {
  return (
    <div className="space-y-6 text-brandDark/80 dark:text-white/80">
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-brandDark dark:text-brandAccent">
          Co-Founder & Partner
        </h3>

        <p>
          A seasoned professional with over{" "}
          <strong>17 years of distinguished experience</strong> across Big Four
          and global consulting powerhouses—including{" "}
          <strong>Deloitte, EY, and Genpact</strong>—he brings a rare blend of
          strategic vision and technical mastery to the firm's leadership.
        </p>

        <p>
          His expertise spans the critical intersections of modern business
          transformation:{" "}
          <strong>
            Risk Management & Internal Audit, Sustainability & ESG Advisory,
            Process Excellence & Intelligent Automation, and Regulatory
            Compliance.
          </strong>
        </p>

        <p>
          A Chartered Accountant by qualification, he holds an impressive
          portfolio of global certifications, including:
        </p>
      </div>

      <ul className="pl-5 space-y-2 list-disc">
        <li>
          <strong>Sustainability & Climate Risk (SCR) Professional</strong> —
          Global Association of Risk Professionals (GARP)
        </li>
        <li>
          <strong>Lean Six Sigma Green Belt</strong> — Process Excellence
        </li>
        <li>
          <strong>RPA Business Analyst & Implementation Specialist</strong>
        </li>
        <li>
          <strong>BRSR & Sustainability Certification</strong> — ICAI
        </li>
        <li>
          <strong>GST Certification</strong> — ICAI
        </li>
      </ul>

      <div className="space-y-3">
        <p>
          He is widely recognized for architecting end-to-end advisory solutions
          that help organizations navigate complexity—whether it's embedding ESG
          into corporate strategy, engineering leaner processes, deploying
          robotic automation at scale, or harnessing the power of AI for
          competitive advantage.
        </p>

        <p>
          A trusted advisor to leading corporate houses, he continues to shape
          how businesses think about risk, resilience, and responsible growth in
          an evolving global landscape.
        </p>
      </div>
    </div>
  );
}

/* =========================
   Team Data
========================= */
const TEAM_MEMBERS = [
  {
    name: "Sukanta Nag",
    title: "Co-Founder & Partner | Financial Advisory",
    bio: "CA, CS, CMA, CAIIB with 41+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
    image:
      "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1769154641/sukant_sir_nelcot.webp",
    linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
    fullBio:
      "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
  },
  {
    name: "Prasen Pal",
    title: "Co-Founder & Partner | ERS & Sustainability",
    bio: "A Chartered Accountant and globally certified professional—SCR (GARP), Six Sigma Green Belt, RPA Business Analyst, BRSR & Sustainability—with 18+ years of international experience. Formerly with Deloitte and Genpact ERC, he brings deep expertise in Enterprise Risk Management, Internal Audit, ESG Strategy & Reporting, AI-Powered Automation, and Tax & Regulatory Advisory.",
    image:
      "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
    linkedin: "https://www.linkedin.com/in/prasen-pal",
    richBio: <PrasenPalRichBio />,
  },
  {
    name: "Arpit Garg",
    title: "Co-Founder & Partner | ERS & ITRS",
    bio: "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
    image:
      "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906764/Arpit_Garg_Image_dlfmvh.webp",
    linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
    fullBio:
      "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
  },
];

/* =========================
   Card
========================= */
function MemberCard({ member, index, onSelect }) {
  return (
    <motion.div
      {...animations.card(index)}
      onClick={() => onSelect(member)}
      className="p-6 border cursor-pointer rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark group hover:border-brandGold hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="flex justify-center mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover object-top w-32 h-32 border-4 rounded-full border-brandPrimary/30 grayscale group-hover:grayscale-0"
        />
      </div>

      <h3 className="text-xl font-bold text-center text-brandDark dark:text-white">
        {member.name}
      </h3>
      <p className="text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
        {member.title}
      </p>
      <p className="mt-4 text-sm text-center text-brandDark/70 dark:text-white/70">
        {member.bio}
      </p>

      <div className="flex justify-center gap-3 mt-6">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <span className="flex items-center gap-2 text-sm text-brandAccent">
          Read More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Section
========================= */
export default function LeadershipSection({ setSelectedLeader }) {
  return (
    <section className="py-4 lg:py-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        <motion.div {...animations.fadeInUp} className="mb-12">
          <h2 className="text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Our{" "}
            <span className="font-serif italic font-medium text-brandGold">
              Co-founding
            </span>{" "}
            Partners
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((m, i) => (
            <MemberCard
              key={m.name}
              member={m}
              index={i}
              onSelect={setSelectedLeader}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
