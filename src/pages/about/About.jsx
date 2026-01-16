import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import AboutHero from "./AboutHero";
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
import professionalExcellenceImg from "../../assets/images/professional_excellence_team.png";
import propreneurialImg from "../../assets/images/propreneurial_mindset_presentation.png";
import longtermRelationshipsImg from "../../assets/images/longterm_relationships_handshake.png";
import Testimonials from "./Testimonials";
import MainEvent from "../../temp/MainEvent";



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
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      {/* ================= HERO ================= */}
      <AboutHero />

      {/* ================= INTRODUCTION SECTION ================= */}
      <IntroSection />

      {/* ================= TRIBUTE SECTION ================= */}
      <TributeSection />

      {/* ================= FEATURES ================= */}
      <FeatureSection />

      {/* ================= MISSION & VISION ================= */}
      <MissionVisionSection />

      {/* ================= LEADERSHIP ================= */}
      <LeadershipSection setSelectedLeader={setSelectedLeader} />

      {/* ================= SERVICE LEADERS ================= */}
      <ServiceLeadersSection setSelectedLeader={setSelectedLeader} />

      {/* ================= TESTIMONIALS ================= */}
      {/* <TestimonialsSection /> */}

      <Testimonials/>

      {/* ================= MARQUEE CLIENTS ================= */}
      <MarqueeClientsSection />

      {/* ================= ALLIANCE PARTNERS ================= */}
      <AlliancePartnersSection />

      {/* ================= TEAM MEMBERS ================= */}
      <TeamMembersSection />

      {/* ================= EVENTS ================= */}
      {/* <Events /> */}
      <MainEvent/>

      {/* ================= FAQ ================= */}
      <FAQSection />

      {/* ================= CTA ================= */}
      <CTASection />

      {/* ================= LEADER MODAL ================= */}
      <LeadershipModal selectedLeader={selectedLeader} setSelectedLeader={setSelectedLeader} />
    </div>
  );
}