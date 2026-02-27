import React from 'react';

import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FraudSection from './FraudDetectionSection';
import CyberSection from './CyberSection';
import DueDiligenceSection from './DueDiligence';
import FaqSection from './FAQSection';
import CtaSection from './CTASection';

import { Helmet } from 'react-helmet-async';


const ForensicsPage = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">

          <Helmet>
                         <title>Forensics and Investigation Services | RiskMan</title>
                         <meta
                           name="description"
                           content="Mitigate organizational risk with RiskMan’s elite Forensics and Investigation services. We deliver evidence-based insights, fraud detection, and regulatory compliance to safeguard assets."
                         />
                         <link
                           rel="canonical"
                           href="https://www.riskman.in/forensics-and-investigation"
                         />
                       </Helmet>
    
      <HeroSection />
      <ServicesSection />
      <FraudSection />
      <CyberSection />
      <DueDiligenceSection />
      <FaqSection />
      <CtaSection />
     
    </div>
  );
};

export default ForensicsPage;