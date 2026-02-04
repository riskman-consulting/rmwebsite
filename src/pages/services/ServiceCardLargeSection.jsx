import  { useState } from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaFileContract,
  FaLightbulb,
  FaGraduationCap,
  FaSearch,
  FaLeaf,
  FaCog,
  FaBalanceScale,
  FaUserShield,
  FaClipboardCheck,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { CurtainRevealImage } from "./CurtainRevealImageSection";

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

export const ServiceCardLarge = ({ service, index }) => {
  const icon = serviceIcons[service.id] || <FaShieldAlt />;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        to={`/services/${service.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative overflow-hidden transition-all duration-500 border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Image with Curtain - Now Compact */}
          <CurtainRevealImage
            src={service.headerImage}
            alt={service.title}
            delay={index * 0.1}
            isCompact={true}
          />

          {/* Content - Reduced padding */}
          <div className="p-6 space-y-4">
            {/* Number Badge & Icon - Smaller */}
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center justify-center w-12 h-12 text-xl transition-all duration-300 rounded-xl"
                animate={{
                  backgroundColor: isHovered ? "#FFC000" : "rgba(0, 64, 128, 0.1)",
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    color: isHovered ? "#001F3F" : "#004080",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              </motion.div>

              <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Title - Smaller */}
            <h3 className="text-xl font-bold text-brandDark dark:text-white font-heading">
              {service.title}
            </h3>

            {/* Summary - Smaller, limited lines */}
            <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400 line-clamp-2">
              {service.summary}
            </p>

            {/* Learn More Button */}
            <motion.div
              className="flex items-center gap-2 pt-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
              <FaArrowRight size={14} />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};