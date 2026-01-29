import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Globe,
  Zap,
  Trophy,
  Award,
} from "lucide-react";

// Images
import image_2020_1 from "../../assets/journey/ai/company-timeline/2020.webp";
import image_2020_2 from "../../assets/journey/ai/company-timeline/2020_1.webp";
import image_2021_1 from "../../assets/journey/ai/company-timeline/2021.webp";
import image_2021_2 from "../../assets/journey/ai/company-timeline/2021_1.webp";
import image_2022_1 from "../../assets/journey/ai/company-timeline/2022.webp";
import image_2022_2 from "../../assets/journey/ai/company-timeline/2022_1.webp";
import image_2023_1 from "../../assets/journey/ai/company-timeline/2023.webp";
import image_2023_2 from "../../assets/journey/ai/company-timeline/2023_1.webp";
import image_2024_1 from "../../assets/journey/ai/company-timeline/2024.webp";
import image_2024_2 from "../../assets/journey/ai/company-timeline/2024_1.webp";
import image_2025_1 from "../../assets/journey/ai/company-timeline/2025.webp";
import image_2025_2 from "../../assets/journey/ai/company-timeline/2025_1.webp";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const companyTimeline = [
  {
    year: "2020",
    title: "The Beginning",
    impact: "Foundation & Vision",
    icon: Target,
    description:
      "Riskman Consulting was founded with a vision to redefine risk management consulting through strategic insight and execution excellence.",
    achievements: [
      "Founded in Mumbai",
      "First 5 clients onboarded",
      "Team of 8 professionals",
    ],
    images: [image_2020_1, image_2020_2],
  },
  {
    year: "2021",
    title: "Rapid Growth",
    impact: "Market Expansion",
    icon: TrendingUp,
    description:
      "The firm expanded operations rapidly, establishing itself as a trusted partner across industries.",
    achievements: [
      "Expanded to 3 cities",
      "Team grew to 20+",
      "First industry report launched",
    ],
    images: [image_2021_1, image_2021_2],
  },
  {
    year: "2022",
    title: "International Presence",
    impact: "Global Reach",
    icon: Globe,
    description:
      "Riskman crossed borders, delivering risk advisory services to international markets.",
    achievements: [
      "UAE office launched",
      "Clients in 4 countries",
      "Industry Excellence Award",
    ],
    images: [image_2022_1, image_2022_2],
  },
  {
    year: "2023",
    title: "Innovation & Recognition",
    impact: "Technology Leadership",
    icon: Zap,
    description:
      "Innovation took center stage with the launch of AI-powered platforms and industry recognition.",
    achievements: [
      "AI-powered platform launched",
      "Featured in top publications",
      "Team scaled to 40+",
    ],
    images: [image_2023_1, image_2023_2],
  },
  {
    year: "2024",
    title: "Consolidation & Excellence",
    impact: "Industry Leadership",
    icon: Trophy,
    description:
      "Riskman strengthened its position as a top-tier consulting firm delivering enterprise-grade solutions.",
    achievements: [
      "Top 10 Risk Consulting Firm",
      "100+ enterprise clients",
      "5 white papers published",
    ],
    images: [image_2024_1, image_2024_2],
  },
  {
    year: "2025",
    title: "Five Years Strong",
    impact: "Scale & Legacy",
    icon: Award,
    description:
      "Five years of sustained growth, global presence, and unwavering commitment to excellence.",
    achievements: [
      "50+ team members globally",
      "4 international offices",
      "200+ successful projects",
    ],
    images: [image_2025_1, image_2025_2],
  },
];

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

const CompanyTimeline = () => {
  return (
    <section className="relative min-h-screen py-24 px-16 bg-surfaceLight dark:bg-bgDark overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-28">
          

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-brandDark dark:text-brandLight font-heading">
            Our <span className="italic text-brandPrimary">Growth Story</span>
          </h1>
        </div>

        {/* Diagonal Connector */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none">
            <motion.path
              d="M 50 750 L 1150 80"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="12 12"
              className="text-brandDark/10 dark:text-brandAccent/20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Timeline Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
          {companyTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:mt-64" : ""
              }`}
            >
              {/* Year */}
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-tighter text-brandPrimary block mb-1">
                  {item.title}
                </span>
                <h2 className="text-5xl font-black text-brandDark dark:text-brandLight font-heading">
                  {item.year}
                </h2>
              </div>

              {/* Card */}
              <div className="relative group">
                <div className="p-6 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-xl transition-colors duration-500">
                  <item.icon className="w-8 h-8 mb-4 text-brandPrimary dark:text-brandAccent" />

                  <p className="text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70 mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {item.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="text-sm text-brandDark/60 dark:text-brandLight/60"
                      >
                        • {a}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-borderLight dark:border-borderDark">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brandPrimary dark:text-brandAccent">
                      {item.impact}
                    </span>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-brandLight dark:bg-bgDark border-2 border-brandPrimary dark:border-brandAccent hidden lg:block shadow-[0_0_15px_rgba(255,192,0,0.3)]" />
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>

    </section>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <h4 className="text-4xl font-black text-brandDark dark:text-brandLight font-heading mb-2">
      {value}
    </h4>
    <p className="text-[10px] font-bold uppercase tracking-widest text-brandDark/40 dark:text-brandLight/40">
      {label}
    </p>
  </div>
);

export default CompanyTimeline;
