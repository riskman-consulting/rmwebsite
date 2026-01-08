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
      title: "Founder & Managing Partner",
      bio:
        "CA, CS, CMA, CAIIB with 39+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
      linkedin: "#",
      fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 39 years of experience spanning Credit Rating, Corporate Management, Risk Management, Financial and Management Consulting. His key strengths are in Understanding the holistic approach to the business and client's need for offering 360-degree solutions and build an effective relationship with them.",
    },
    {
      name: "Prasen Pal",
      title: "Partner – Corporate Compliance",
      bio:
        "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
      linkedin: "#",
      fullBio: "A CA, ex-Deloitte ERS and Genpact ERC with 16+ years of experience spanning Internal Audits, ESG, Direct and Indirect taxation including GST, Process automation and RPA, adoption of AI. He is instrumental in managing pre-investment, post-investment, and other advisory and outsourced services.",
    },
    {
      name: "Arpit Garg",
      title: "Partner – Risk & IT Advisory",
      bio:
        "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
      linkedin: "#",
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
          className="mb-4 text-4xl font-bold text-start md:text-5xl"
        >
          Co-founding
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">Partners</span>
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