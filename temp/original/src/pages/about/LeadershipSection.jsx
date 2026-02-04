import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function LeadershipSection({ setSelectedLeader }) {
  const teamMembers = [
    {
      name: "Sukanta Nag",
      title: "Partner | Financial Advisory",
      bio:
        "CA, CS, CMA, CAIIB with 41+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
      linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
      fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
    },
    {
      name: "Prasen Pal",
      title: "Partner | ERS & Sustainability",
      bio:
        "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
      linkedin: "https://www.linkedin.com/in/prasen-pal",
      fullBio: "A CA, Sustainability and Climate Risk (SCR) Professional (GARP), Lean Six Sigma Green Belt (Genpact), RPA Business Analyst, Diploma in RPA Implementation Methodology,  Certified in Sustainability and BRSR (ICAI), Certified in GST (ICAI), ex-Deloitte ERS, EY-GDS, and Genpact ERC with 17+ years of experience spanning Risk Management, Internal Audits, Sustainability and ESG, Process mining and engineering, Process automation and RPA, domestic Tax Laws, and adoption of AI. He is instrumental in managing various advisory and outsourced services with multiple corporate houses.",
    },
    {
      name: "Arpit Garg",
      title: "Partner | ERS & ITRS",
      bio:
        "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
      linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
      fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
    },
  ];

  return (
    <section id="co-founders" className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-4 text-2xl font-bold text-start md:text-2xl"
        >
          Our Leadership Team
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-12 text-gray-600 text-start dark:text-gray-400"
        >
          Meet the visionary leaders driving RiskMan's mission forward
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-6 transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setSelectedLeader(m)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={m.image}
                  alt={m.name}
                  className="object-cover transition-all duration-500 border-4 rounded-full w-28 h-28 border-brandPrimary/30 dark:border-brandAccent/30 grayscale group-hover:grayscale-0 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-brandDark dark:text-white">{m.name}</h3>
              <p className="mb-3 font-semibold text-brandPrimary dark:text-brandAccent">
                {m.title}
              </p>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{m.bio}</p>
              <div className="flex items-center gap-4">
                <a
                  href={m.linkedin}
                  className="inline-flex items-center gap-2 transition-colors text-brandPrimary dark:text-brandAccent hover:text-brandNavy dark:hover:text-brandGold"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <button className="text-sm transition-colors text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}