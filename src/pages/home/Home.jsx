// src/pages/home/Home.jsx
import React,{useState} from "react";
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
// import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
// import BlogSection from "./BlogSection";
import AuditService from "./AuditService";
import CTASection from "./CTASections";
import ClientSection from "./ClientsSection";
import StrategicSection from "./Features";
// import LeadershipSection from "./LeadershipSection";
import LeadershipSection from "../about/LeadershipSection";
import LeadershipModal from "../about/LeadershipModal";
import EventSection from "./EventSection";
import StaticVideoCard from "../../components/yt/VIdeoCard";


export default function Home() {
  const [selectedLeader, setSelectedLeader] =useState(null);
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
          <StaticVideoCard />
           

          {/* FEATURES */}
          {/* <Features /> */}

          
            <StrategicSection/>

             <ClientSection/>


             <Testimonials />
            

          {/* <StatsSection /> */}

          {/* <AuditService/> */}

          {/* RISK & COMPLIANCE */}
          {/* <RiskCompliance /> */}

          {/* KEY SERVICES */}
          <KeyServices />

          {/* INDUSTRIALIZATION */}
          

          {/* VALUE DIFFERENTIATORS */}
          {/* <ValueDifferentiators /> */}


          {/* Clients Section */}
         

          <LeadershipSection setSelectedLeader={setSelectedLeader}/>

         <LeadershipModal
                 leader={selectedLeader}
                 onClose={() => setSelectedLeader(null)}
               />

          {/* WHY RISKMAN */}
          <WhyRiskman />

            <EventSection/>

           <IndustralizationService />




{/* 
           <BlogSection/> */}



          {/* STATS */}
          {/* <StatsSection /> */}

          {/* TESTIMONIALS */}

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