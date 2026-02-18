import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import riskAssessmentImage from "../../assets/images/home/key-services/risk-assessment-audit.webp";
import operationalFinancialImage from "../../assets/images/home/key-services/operational-financial-audit.webp";
import riskComplianceAuditImage from "../../assets/images/home/key-services/risk-compliance-audit.webp";
import itCybersecurityImage from "../../assets/images/home/key-services/it-cybersecurity-audit.webp";

/* ================= DATA ================= */
const services = [
  {
    id: "01",
    title: "Enterprise Risk Management",
    description:
      "Strengthening corporate governance through integrated risk frameworks that enable proactive, risk-aware decision-making and operational resilience.",
    image: riskAssessmentImage,
    path: "/services/risk-advisory/erm"
  },
  {
    id: "02",
    title: "IT Risk & Cybersecurity",
    description:
      "Securing your digital frontier in an age of volatility. Using NIST and ISO 27001 standards, we provide assurance that protects data, systems, and stakeholder trust across the enterprise.",
    image: itCybersecurityImage,
    path: "/services/cybersecurity"
  },
  {
    id: "03",
    title: "ESG & Sustainability Advisory",
    description:
      "Future-proofing your business for a low-carbon economy. We translate sustainability goals into measurable, regulator-ready metrics aligned with investor expectations.",
    image: riskComplianceAuditImage,
    path: "/services/esg"
  },
  {
    id: "04",
    title: "Financial Advisory",
    description:
      "Protecting integrity and optimizing capital structures. Our leadership experience across global banks and rating agencies enables confident decision-making in high-stakes environments.",
    image: operationalFinancialImage,
    path: "/services/financial-advisory"
  },
];

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

/* ================= COMPONENT ================= */
export default function KeyServices() {
  const routeHandler = (pathUrl) => {
    window.location.href = pathUrl;
  };

  return (
    <section className="transition-colors py-14 md:py-12 bg-bgLight dark:bg-bgDark">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center md:mb-16">
          <h2 className="mb-6 text-3xl font-bold text-brandDark dark:text-white">
            Our Key Services
          </h2>
          <p 
            className="text-brandNavy dark:text-white/70"
            style={{ 
              fontSize: '16px', 
              fontWeight: 400, 
              lineHeight: 1.6 
            }}
          >
            At RiskMan, we don't just identify gaps; we build the bridges to fill them. Our services are designed to align with global standards while addressing the unique operational realities of your enterprise.
          </p>
        </div>

        {/* Vertical Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-brandGold/20 rounded-t-3xl" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="block mb-2 text-sm font-semibold tracking-widest text-brandGold">
                  {service.id}
                </span>

                <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
                  {service.title}
                </h3>

                <p 
                  className="mb-5 text-brandNavy dark:text-white/70"
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 400, 
                    lineHeight: 1.6 
                  }}
                >
                  {service.description}
                </p>

                <button
                  onClick={() => routeHandler(service?.path)}
                  className="inline-flex items-center gap-2 font-semibold text-brandDark hover:text-brandGold dark:text-brandAccent dark:hover:text-brandGold"
                >
                  Explore Service <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA - Fixed spacing for mobile */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <Link
            to="/services"
            className="px-12 py-4 font-semibold text-white border-2 rounded-full border-brandDark bg-brandDark dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}