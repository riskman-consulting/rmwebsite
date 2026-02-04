// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaArrowRight, FaShieldAlt, FaChartLine, FaFileContract, FaLightbulb, FaGraduationCap, FaSearch, FaLeaf, FaCog, FaBalanceScale, FaUserShield, FaClipboardCheck, FaHandshake } from "react-icons/fa";

// /* --- Icons Map stays the same --- */
// const serviceIcons = {
//   "risk-advisory": <FaShieldAlt />,
//   consulting: <FaLightbulb />,
//   "outsourcing-training": <FaGraduationCap />,
//   "esg-advisory": <FaLeaf />,
//   "financial-advisory": <FaChartLine />,
//   "forensic-investigation": <FaSearch />,
//   "soc-services": <FaShieldAlt />,
//   "iso-certifications": <FaFileContract />,
//   "pci-dss-compliance": <FaClipboardCheck />,
//   tprm: <FaHandshake />,
//   "itgc-itac": <FaCog />,
//   "bcp-dr": <FaShieldAlt />,
//   "it-risk-management": <FaChartLine />,
//   cybersecurity: <FaUserShield />,
//   "data-privacy": <FaBalanceScale />,
// };

// export const ServiceCardCompact = ({ service, index }) => {
//   const icon = serviceIcons[service.id] || <FaShieldAlt />;
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
//       className="h-full"
//     >
//       <Link
//         to={`/services/${service.id}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="block h-full group"
//       >
//         {/* Main Card: Using your brand colors (bg-surfaceLight/Dark) */}
//         <div className="relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-brandAccent/40">
          
//           {/* 1. Header: Image with your brand gradient overlay */}
//           <div className="relative overflow-hidden h-52">
//             <img
//               src={service.headerImage}
//               alt={service.title}
//               className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-110"
//             />
//             {/* Gradient that fades into your brand background */}
//             <div className="absolute inset-0 bg-gradient-to-t from-surfaceLight dark:from-surfaceDark via-transparent to-transparent" />
            
//             {/* Icon: Using your brandAccent/brandPrimary */}
//             <div className="absolute z-20 top-6 left-6">
//               <div className="flex items-center justify-center w-12 h-12 transition-all duration-500 border backdrop-blur-md bg-brandPrimary/10 dark:bg-brandAccent/10 border-brandPrimary/20 dark:border-brandAccent/20 rounded-2xl text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark">
//                 {icon}
//               </div>
//             </div>
//           </div>

//           {/* 2. Content Section */}
//           <div className="relative flex flex-col flex-1 p-8">
//             {/* Index: Minimal but using brand colors */}
//             <span className="absolute top-8 right-8 font-mono text-[10px] tracking-widest text-brandNavy/20 dark:text-white/20 group-hover:text-brandAccent transition-colors">
//               // 0{index + 1}
//             </span>

//             <h3 className="mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//               {service.title}
//             </h3>

//             <p className="mb-8 text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandDark dark:group-hover:text-gray-200 line-clamp-3">
//               {service.summary}
//             </p>

//             {/* 3. Footer: Modern CTA using your brand theme */}
//             <div className="flex items-center justify-between pt-6 mt-auto border-t border-borderLight dark:border-borderDark">
//               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandNavy/40 dark:text-white/40 group-hover:text-brandDark dark:group-hover:text-white transition-colors">
//                 Explore Solution
//               </span>
              
//               {/* Loginord-style arrow button but with YOUR brandAccent */}
//               <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden transition-all duration-500 border rounded-full border-borderLight dark:border-borderDark group-hover:border-brandAccent">
//                 <FaArrowRight 
//                   className="z-10 transition-all duration-500 -rotate-45 text-brandPrimary dark:text-brandAccent group-hover:text-brandDark group-hover:rotate-0" 
//                   size={12} 
//                 />
//                 <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-brandAccent group-hover:translate-y-0" />
//               </div>
//             </div>
//           </div>

//           {/* Optional: Your brand accent line at bottom */}
//           <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-700 bg-brandAccent group-hover:w-full" />
//         </div>
//       </Link>
//     </motion.div>
//   );
// };


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaChartLine, FaFileContract, FaLightbulb, FaGraduationCap, FaSearch, FaLeaf, FaCog, FaBalanceScale, FaUserShield, FaClipboardCheck, FaHandshake } from "react-icons/fa";

/* --- Icons Map stays the same --- */
const serviceIcons = {
  "risk-advisory": <FaShieldAlt />,
  consulting: <FaLightbulb />,
  "outsourcing-training": <FaGraduationCap />,
  "esg-advisory": <FaLeaf />,
  "financial-advisory": <FaChartLine />,
  "forensic-investigation": <FaSearch />,
  "soc-services": <FaShieldAlt />,
  "iso-certifications": <FaFileContract />,
  "pci-dss-compliance": <FaClipboardCheck />,
  tprm: <FaHandshake />,
  "itgc-itac": <FaCog />,
  "bcp-dr": <FaShieldAlt />,
  "it-risk-management": <FaChartLine />,
  cybersecurity: <FaUserShield />,
  "data-privacy": <FaBalanceScale />,
};

export const ServiceCardCompact = ({ service, index }) => {
  const icon = serviceIcons[service.id] || <FaShieldAlt />;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link
        to={`/services/${service.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block h-full group"
      >
        {/* Main Card with CURTAIN OVER ENTIRE CARD */}
        <div className="relative h-full flex flex-col bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-brandAccent/40">
          
          {/* CURTAIN EFFECT - Covers ENTIRE card, not just image */}
          <motion.div
            className="absolute inset-0 z-20 bg-brandDark dark:bg-brandNavy"
            initial={{ x: "0%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.65, 0, 0.35, 1] 
            }}
          />

          {/* 1. Header: Image section */}
          <div className="relative overflow-hidden h-52">
            <img
              src={service.headerImage}
              alt={service.title}
              className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surfaceLight dark:from-surfaceDark via-transparent to-transparent z-[5]" />

            {/* Hover sweep effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[8]">
              <div className="absolute w-[150%] h-full bg-white/40 dark:bg-white/20 -left-[150%] top-0 -skew-x-12 group-hover:left-full transition-all duration-1000 ease-out" />
            </div>
            
            {/* Icon - Appears after curtain */}
            <motion.div 
              className="absolute z-20 top-6 left-6"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15 + 0.5,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 transition-all duration-500 border backdrop-blur-md bg-brandPrimary/10 dark:bg-brandAccent/10 border-brandPrimary/20 dark:border-brandAccent/20 rounded-2xl text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark">
                {icon}
              </div>
            </motion.div>
          </div>

          {/* 2. Content Section */}
          <div className="relative flex flex-col flex-1 p-8">
            {/* Index */}
            <motion.span 
              className="absolute top-8 right-8 font-mono text-[10px] tracking-widest text-brandNavy/20 dark:text-white/20 group-hover:text-brandAccent transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              // 0{index + 1}
            </motion.span>

            <motion.h3 
              className="mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            >
              {service.title}
            </motion.h3>

            <motion.p 
              className="mb-8 text-sm leading-relaxed transition-colors duration-300 text-brandNavy dark:text-gray-400 group-hover:text-brandDark dark:group-hover:text-gray-200 line-clamp-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
            >
              {service.summary}
            </motion.p>

            {/* 3. Footer CTA */}
            <motion.div 
              className="flex items-center justify-between pt-6 mt-auto border-t border-borderLight dark:border-borderDark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandNavy/40 dark:text-white/40 group-hover:text-brandDark dark:group-hover:text-white transition-colors">
                Explore Solution
              </span>
              
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden transition-all duration-500 border rounded-full border-borderLight dark:border-borderDark group-hover:border-brandAccent">
                <FaArrowRight 
                  className="z-10 transition-all duration-500 -rotate-45 text-brandPrimary dark:text-brandAccent group-hover:text-brandDark group-hover:rotate-0" 
                  size={12} 
                />
                <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-brandAccent group-hover:translate-y-0" />
              </div>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-700 bg-brandAccent group-hover:w-full" />
        </div>
      </Link>
    </motion.div>
  );
};