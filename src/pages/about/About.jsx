import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import AboutHero from "./AboutHero";
import IntroSection from "./IntroSection";
import TributeSection from "./TributeSection";
import FeatureSection from "./FeaturesSection";
import MissionVisionSection from "./MissionVisionSection";
import LeadershipSection from "./LeadershipSection";
import ServiceLeadersSection from "./ServiceLeadersSection";
import TestimonialSimple from "./TestimonialSimple";
import TestimonialsSection from "./TestimonialsSection";
import MarqueeClientsSection from "./MarqueClientsSection";
import AlliancePartnersSection from "./AlllianceSections";
import TeamMembersSection from "./TeamMembersSection";
import Events from "./Events";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import LeadershipModal from "./LeadershipModal";
import Testimonials from "./Testimonials";
import { JourneyTimeline } from "./JourneyTimeline";
import SingleSlide from "./SingleSlide";
import WhyRiskman from "./WhyRiskMan";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      {/* =========================
          SEO META TAGS
      ========================== */}
      <Helmet>
        <title>About RiskMan Consulting | Meet the Team</title>
        <meta
          name="description"
          content="Partner with RiskMan Consulting’s propreneurs. We provide customized Risk Assurance and Advisory, Digital Transformation, ESG, Financial Advisory, AI and Technology, Forensics and Investigation and IT Risk Management services for global enterprises."
        />

         <link rel="canonical" href="https://www.riskman.in/about" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
        {/* ================= HERO ================= */}
        {/* <AboutHero /> */}
        <SingleSlide />

        {/* ================= INTRODUCTION ================= */}
        <IntroSection />

        {/* ================= TRIBUTE ================= */}
        <TributeSection />

        {/* ================= MISSION & VISION ================= */}
        <MissionVisionSection />

        {/* ================= LEADERSHIP ================= */}
        <LeadershipSection setSelectedLeader={setSelectedLeader} />

        {/* ================= SERVICE LEADERS ================= */}
        <ServiceLeadersSection setSelectedLeader={setSelectedLeader} />

        {/* ================= MARQUEE CLIENTS ================= */}
        <MarqueeClientsSection />

        {/* ================= ALLIANCE PARTNERS ================= */}
        <AlliancePartnersSection />

        {/* ================= TEAM MEMBERS ================= */}
        <TeamMembersSection />

        {/* ================= FAQ ================= */}
        <FAQSection />

        <WhyRiskman />

        {/* ================= CTA ================= */}
        <CTASection />

        {/* ================= LEADER MODAL ================= */}
        <LeadershipModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      </div>
    </>
  );
}
