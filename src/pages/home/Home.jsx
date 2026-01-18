// src/pages/home/Home.jsx
import React from "react";

// layout / common

import HeroSection from "./HeroSections";

// sections
import Features from "./Features";
import RiskCompliance from "./RiskCompliance";
import KeyServices from "./KeyServices";
import IndustralizationService from "./IndustralizationService";
import ValueDifferentiators from "./ValueDifferentiators";
import WhyRiskman from "./WhyRiskman";
import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import BlogSection from "./BlogSection";
import AuditService from "./AuditService";
import CTASection from "./CTASections";
import ClientSection from "./ClientsSection";
import StrategicSection from "./StrategicSection";
import LeadershipSection from "./LeadershipSection";
import { EventCTASection } from "./EventSection";

export default function Home() {
  
  return (
    <main
      className="
        w-full overflow-x-hidden transition-colors duration-300
        bg-white text-slate-900
        dark:bg-[#06071B] dark:text-white
      "
    >
      {/* 1. CINEMATIC INTRO EXPERIENCE (400vh scroll) */}
      {/* <EnhancedAuditHero /> */}

      {/* <HeaderBlend/>

      <DeloitteHero/> */}



      {/* 2. MAIN SITE CONTENT (Starts here) */}
      <div id="main-content">

        {/* <BackgroundGrid/> */}
        <HeroSection />

        {/* STRATEGIC SECTION */}
        <StrategicSection />

        {/* STATS */}
        <StatsSection />
        {/* FEATURES */}
        {/* <Features /> */}

        {/* <AuditService/> */}

        {/* RISK & COMPLIANCE */}
        {/* <RiskCompliance /> */}

        {/* KEY SERVICES */}
        <KeyServices />

        {/* INDUSTRIALIZATION */}
        <IndustralizationService />

        {/* Clients Section */}
        <ClientSection />

        {/* Leader section */}
        <LeadershipSection  />

        {/* Event Section */}
        <EventCTASection />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* WHY RISKMAN */}
        <WhyRiskman />

        {/* AUDIT CTA */}
        <CTASection />

        {/* VALUE DIFFERENTIATORS */}
        {/* <ValueDifferentiators /> */}

        <BlogSection />

        
        {/* FAQ */}
        <FAQSection />


        {/* <AuditService /> */}
      </div>
    </main>
  );
}