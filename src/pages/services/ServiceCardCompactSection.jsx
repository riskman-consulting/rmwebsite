import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import allServices from "../../data/services-master-list.json";
import { CurtainRevealImage } from "./CurtainRevealImageSection";

/* =======================
   SERVICE ICONS MAP
======================= */
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        to={`/services/${service.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative h-full overflow-hidden transition-all duration-500 border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl"
          whileHover={{
            y: -8,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Image with Curtain */}
          <CurtainRevealImage
            src={service.headerImage}
            alt={service.title}
            delay={(index % 3) * 0.08}
            isCompact={true}
          />

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Icon */}
            <motion.div
              className="flex items-center justify-center text-xl transition-all duration-300 w-14 h-14 rounded-2xl"
              animate={{
                backgroundColor: isHovered ? "#FFC000" : "rgba(0, 64, 128, 0.1)",
                scale: isHovered ? 1.05 : 1,
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

            {/* Title */}
            <h3 className="text-xl font-bold text-brandDark dark:text-white font-heading">
              {service.title}
            </h3>

            {/* Summary */}
            <p className="text-sm leading-relaxed text-brandNavy dark:text-gray-400 line-clamp-3">
              {service.summary}
            </p>

            {/* Learn More */}
            <div className="pt-4 border-t border-borderLight dark:border-borderDark">
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
                <FaArrowRight size={14} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
