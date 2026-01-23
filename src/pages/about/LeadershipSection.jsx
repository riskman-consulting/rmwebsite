// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa";
// import sukanta from "../../assets/images/sukant sir.png"

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// export default function LeadershipSection({ setSelectedLeader }) {
//   const teamMembers = [
//     {
//       name: "Sukanta Nag",
//       title: "Partner | Financial Advisory",
//       bio:
//         "CA, CS, CMA, CAIIB with 41+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
//       image:
//         sukanta,
//       linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
//       fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
//     },
//     {
//       name: "Prasen Pal",
//       title: "Partner | ERS & Sustainability",
//       bio:
//         "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
//       image:
//         "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
//       linkedin: "https://www.linkedin.com/in/prasen-pal",
//       fullBio: "A CA, Sustainability and Climate Risk (SCR) Professional (GARP), Lean Six Sigma Green Belt (Genpact), RPA Business Analyst, Diploma in RPA Implementation Methodology,  Certified in Sustainability and BRSR (ICAI), Certified in GST (ICAI), ex-Deloitte ERS, EY-GDS, and Genpact ERC with 17+ years of experience spanning Risk Management, Internal Audits, Sustainability and ESG, Process mining and engineering, Process automation and RPA, domestic Tax Laws, and adoption of AI. He is instrumental in managing various advisory and outsourced services with multiple corporate houses.",
//     },
//     {
//       name: "Arpit Garg",
//       title: "Partner | ERS & ITRS",
//       bio:
//         "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
//       image:
//         "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906764/Arpit_Garg_Image_dlfmvh.webp",
//       linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
//       fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
//     },
//   ];

//   return (
//     <section id="co-founders" className="relative py-4 lg:pb-12 lg:pt-4 bg-surfaceLight dark:bg-surfaceDark ">
//       <div className="container">
//         <motion.h2
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="mb-4 text-2xl font-bold text-start md:text-2xl"
//         >
//           Our Co-founding Partners
//         </motion.h2>

//         <motion.p
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="max-w-2xl mb-12 text-gray-600 text-start dark:text-gray-400"
//         >
//           Our Co-founding Partners are industry veterans who bridge decades of institutional expertise with an entrepreneurial drive.
//         </motion.p>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {teamMembers.map((m, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               className="p-6 transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
//               onClick={() => setSelectedLeader(m)}
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={m.image}
//                   alt={m.name}
//                   className="object-cover object-top transition-all duration-500 border-4 rounded-full w-28 h-28 border-brandPrimary/30 dark:border-brandAccent/30 grayscale group-hover:grayscale-0 hover:scale-105"
//                 />
//               </div>
//               <h3 className="mb-2 text-2xl font-bold text-brandDark dark:text-white">{m.name}</h3>
//               <p className="mb-3 font-semibold text-brandPrimary dark:text-brandAccent">
//                 {m.title}
//               </p>
//               <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{m.bio}</p>
//               <div className="flex items-center gap-4">
//                 <a
//                   href={m.linkedin}
//                   className="inline-flex items-center gap-2 transition-colors text-brandPrimary dark:text-brandAccent hover:text-brandNavy dark:hover:text-brandGold"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <FaLinkedin /> LinkedIn
//                 </a>
//                 <button className="text-sm transition-colors text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent">
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import sukanta from "../../assets/images/sukant sir.png"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function LeadershipSection({ setSelectedLeader }) {
  const teamMembers = [
    {
      name: "Sukanta Nag",
      title: "Partner | Financial Advisory",
      bio:
        "CA, CS, CMA, CAIIB with 41+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
      image:
        "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1769154641/sukant_sir_nelcot.webp",
      linkedin: "https://www.linkedin.com/in/ca-sukanta-nag-50221021",
      fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 41 years of experience spanning Credit Rating, Corporate Banking, Risk Management and Financial & Management Consulting. His key strengths are in understanding the holistic approach of the business and client's need for offering 360-degree solutions and build a meaningful relationship with them.",
    },
    {
      name: "Prasen Pal",
      title: "Partner | ERS & Sustainability",
      bio:
        "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
      image:
        "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906075/Prasen_pal_xe5jx8.webp",
      linkedin: "https://www.linkedin.com/in/prasen-pal",
      fullBio: "A CA, Sustainability and Climate Risk (SCR) Professional (GARP), Lean Six Sigma Green Belt (Genpact), RPA Business Analyst, Diploma in RPA Implementation Methodology,  Certified in Sustainability and BRSR (ICAI), Certified in GST (ICAI), ex-Deloitte ERS, EY-GDS, and Genpact ERC with 17+ years of experience spanning Risk Management, Internal Audits, Sustainability and ESG, Process mining and engineering, Process automation and RPA, domestic Tax Laws, and adoption of AI. He is instrumental in managing various advisory and outsourced services with multiple corporate houses.",
    },
    {
      name: "Arpit Garg",
      title: "Partner | ERS & ITRS",
      bio:
        "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
      image:
        "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768906764/Arpit_Garg_Image_dlfmvh.webp",
      linkedin: "https://www.linkedin.com/in/arpit-garg-88070560",
      fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
    },
  ];

  return (
    <section id="co-founders" className="relative py-4 lg:pb-12 lg:pt-4 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12">
          {/* <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
            Leadership
          </span> */}
          
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Our{" "}
            <span className="font-serif italic font-medium text-brandGold">
              Co-founding
            </span>{" "}
            Partners
          </h2>
          
          <p className="max-w-2xl text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
            Our Co-founding Partners are industry veterans who bridge decades of institutional expertise with an entrepreneurial drive.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setSelectedLeader(m)}
            >
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 opacity-0 bg-gradient-to-bl from-brandAccent/10 to-transparent rounded-bl-3xl rounded-tr-2xl group-hover:opacity-100" />
              
              {/* Profile Image */}
              <div className="relative flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 transition-all duration-500 rounded-full bg-gradient-to-br from-brandAccent/20 to-brandGold/20 blur-xl group-hover:blur-2xl" />
                  <img
                    src={m.image}
                    alt={m.name}
                    className="relative object-cover object-top w-32 h-32 transition-all duration-500 border-4 rounded-full border-brandPrimary/30 dark:border-brandAccent/30 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold text-center lg:text-2xl text-brandDark dark:text-white">
                  {m.name}
                </h3>
                
                <p className="mb-4 text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
                  {m.title}
                </p>
                
                <p className="mb-6 text-sm leading-relaxed text-center text-brandDark/70 dark:text-white/70">
                  {m.bio}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 border rounded-full text-brandPrimary dark:text-brandAccent border-brandPrimary/30 dark:border-brandAccent/30 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10 hover:border-brandPrimary dark:hover:border-brandAccent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full text-brandAccent dark:text-brandGold hover:text-brandGold dark:hover:text-brandAccent">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 bg-gradient-to-r from-brandAccent to-brandGold rounded-br-2xl group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}