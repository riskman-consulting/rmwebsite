// ISO27001.jsx
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from './HeroSection';
import StrategicSolutions from './StrategicSolutionSection';
import CTASection from './CTASection';
import FAQ from './FAQSection';


const ISO27001 = () => {
  useEffect(() => {
    // Set meta tags
    document.title = 'International Organization for Standardization (ISO) 27001 Services | RiskMan';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Achieve ISO 27001 certification with RiskMan. Our expert readiness assessments, risk mitigation, and ISMS frameworks ensure global compliance and data security.');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>ISO 27001 Certification Services | RiskMan Consulting</title>
        <meta name="description" content="Achieve ISO 27001 certification with RiskMan Consulting. Our expert readiness assessments, risk mitigation, and ISMS implementation frameworks ensure global information security compliance." />
        <link rel="canonical" href="https://www.riskman.in/services/iso-certifications/iso-27001" />
      </Helmet>
      <HeroSection />
      <StrategicSolutions />
      <CTASection />
      <FAQ />
    </main>
  );
};

export default ISO27001;