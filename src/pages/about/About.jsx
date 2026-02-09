import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Section Imports
import IntroSection from "./IntroSection";
import MissionVisionSection from "./MissionVisionSection";
import LeadershipSection from "./LeadershipSection";
import ServiceLeadersSection from "./ServiceLeadersSection";
import MarqueeClientsSection from "./MarqueClientsSection";
import AlliancePartnersSection from "./AlllianceSections";
import TeamMembersSection from "./TeamMembersSection";
import WhyRiskman from "./WhyRiskMan";
import CTASection from "./CTASection";
import LeadershipModal from "./LeadershipModal";
import SingleSlide from "./SingleSlide";

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const location = useLocation();

  // Handle Smooth Scrolling with Offset
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const yOffset = -20; // Extra breathing room
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // REUSABLE ANCHOR: Invisible div used for tracking IDs
  const ScrollAnchor = ({ id }) => (
    <div id={id} className="relative scroll-mb-40" aria-hidden="true" />
  );

  return (
    <>
      <Helmet>
        <title>About RiskMan Consulting | Meet the Team</title>
        <meta name="description" content="Partner with RiskMan Consulting’s propreneurs..." />
        <link rel="canonical" href="https://www.riskman.in/about" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
        
        {/* HERO SECTION */}
        <SingleSlide />

        {/* 1. INTRODUCTION */}
        <ScrollAnchor id="introduction" />
        <IntroSection />

        {/* 2. VISION & MISSION */}
        <ScrollAnchor id="mission-vision" />
        <MissionVisionSection />

        {/* 3. CO-FOUNDERS (Leadership) */}
        <ScrollAnchor id="co-founders" />
        <LeadershipSection setSelectedLeader={setSelectedLeader} />

        {/* 4. RISKMAN TEAMS (Service Leaders) */}
        <ServiceLeadersSection setSelectedLeader={setSelectedLeader} />

        {/* OTHER SECTIONS */}
        <MarqueeClientsSection />
        <AlliancePartnersSection />
        <ScrollAnchor id="riskman-teams" />
        <TeamMembersSection />
        <WhyRiskman />
        <CTASection />

        {/* LEADERSHIP MODAL */}
        <LeadershipModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      </div>
    </>
  );
}