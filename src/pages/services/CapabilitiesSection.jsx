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



export const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies",
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance Excellence",
      description: "Stay ahead of regulatory requirements and industry standards",
    },
    {
      icon: <FaUserShield />,
      title: "Cybersecurity",
      description: "Advanced threat protection and security frameworks",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Advisory",
      description: "Expert guidance for complex business challenges",
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-brandDark dark:bg-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent">
            Our Capabilities
          </div>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl font-heading">
            Why Choose{" "}
            <span className="text-brandAccent">RiskMan</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Industry-leading expertise backed by proven methodologies and cutting-edge technology
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative p-8 overflow-hidden transition-all duration-300 border cursor-pointer group bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl hover:bg-white/10 hover:border-brandAccent/50"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl transition-all duration-300 rounded-full bg-brandAccent/20 text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white font-heading">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute w-20 h-20 transition-all duration-500 rounded-full -top-10 -right-10 bg-brandAccent/10 blur-2xl group-hover:bg-brandAccent/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};