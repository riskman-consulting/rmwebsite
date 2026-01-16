import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import LeadershipModal from "./LeadershipModal";
 
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
 
export default function LeadershipSection() {
    const [selectedLeader, setSelectedLeader] = React.useState(null);
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
    <section id="co-founders" className="relative bg-bgLight dark:bg-bgDark py-16 sm:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
       
        {/* HEADER - Consistent with KeyServices & FAQ */}
        <div className="text-left mb-16 max-w-4xl">
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-3 text-sm font-bold tracking-[0.2em] uppercase text-brandNavy dark:text-brandAccent"
          >
            Visionary Mindset
          </motion.p>
 
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-6 text-3xl font-black md:text-5xl leading-tight text-brandDark dark:text-white"
          >
            Our <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Leadership</span> Team
          </motion.h2>
 
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl text-lg leading-relaxed text-brandNavy dark:text-white/70"
          >
            Meet the visionary leaders driving RiskMan's mission to transform industry complexities into strategic opportunities.
          </motion.p>
        </div>
 
        {/* TEAM GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              onClick={() => setSelectedLeader(m)}
              className="group relative p-8 transition-all duration-500 border cursor-pointer bg-white dark:bg-surfaceDark border-gray-200 dark:border-borderDark rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold/40 dark:hover:border-brandAccent/40"
            >
              {/* Image Section with Refined Border */}
              <div className="relative flex justify-center mb-8">
                <div className="relative p-1 rounded-full border-2 border-dashed border-brandGold/20 dark:border-brandAccent/20 group-hover:border-solid group-hover:border-brandGold transition-all duration-500">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="object-cover transition-all duration-700 rounded-full w-32 h-32 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
               
                {/* LinkedIn Floating Icon */}
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-0 right-1/3 translate-x-10 w-10 h-10 bg-brandDark dark:bg-brandAccent text-white dark:text-brandDark rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
 
              {/* Text Content - Aligned with FAQ spacing */}
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-black text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
                  {m.name}
                </h3>
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-brandGold dark:text-brandAccent">
                  {m.title}
                </p>
                <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-white/60 line-clamp-3">
                  {m.bio}
                </p>
 
                {/* Bottom Action - Style from KeyServices */}
                <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-brandNavy/40 dark:text-white/30 group-hover:text-brandDark dark:group-hover:text-white transition-all">
                  View Full Bio <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
 
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 bg-brandGold dark:bg-brandAccent transition-all duration-500 group-hover:w-1/2 rounded-t-full" />
            </motion.div>
          ))}
        </div>
        <LeadershipModal selectedLeader={selectedLeader} setSelectedLeader={setSelectedLeader} />
      </div>
    </section>
  );
}