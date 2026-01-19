// src/pages/home/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

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
import StrategicSection from "./Features";
import LeadershipSection from "./LeadershipSection";
import EventSection from "./EventSection";


export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>RiskMan Consulting | Strategic Risk Advisory, IT GRC & ESG Consulting Solutions</title>
        <meta 
          name="description" 
          content="RiskMan offers "Propreneurial" partnership—senior-led expertise with an owner's commitment. Experience 100% on-time execution, fixed-price predictability, and bespoke Risk, IT GRC, and ESG strategies. Contact us today." 
        />
        <link rel="canonical" href="https://www.riskman.in/" />
      </Helmet> */}

      <Helmet>
  <title>RiskMan Consulting | Strategic Risk Advisory, IT GRC & ESG Consulting Solutions</title>
  <meta 
    name="description" 
    content="RiskMan offers &quot;Propreneurial&quot; partnership—senior-led expertise with an owner's commitment. Experience 100% on-time execution, fixed-price predictability, and bespoke Risk, IT GRC, and ESG strategies. Contact us today." 
  />
  <link rel="canonical" href="https://www.riskman.in/" />
</Helmet>

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

          {/* FEATURES */}
          {/* <Features /> */}
          <StrategicSection/>

          <StatsSection />

          {/* <AuditService/> */}

          {/* RISK & COMPLIANCE */}
          {/* <RiskCompliance /> */}

          {/* KEY SERVICES */}
          <KeyServices />

          {/* INDUSTRIALIZATION */}
          <IndustralizationService />

          {/* VALUE DIFFERENTIATORS */}
          {/* <ValueDifferentiators /> */}


          {/* Clients Section */}
          <ClientSection/>

          <LeadershipSection/>

          {/* WHY RISKMAN */}
          <WhyRiskman />

          <EventSection/>



           <BlogSection/>



          {/* STATS */}
          {/* <StatsSection /> */}

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* FAQ */}
          <FAQSection />

          <CTASection/>

          {/* AUDIT CTA */}
          {/* <AuditService /> */}
        </div>
      </main>
    </>
  );
}