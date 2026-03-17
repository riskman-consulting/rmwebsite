// Cybersecurity.jsx
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Hero from './HeroSection';
import StrategicAuditing from './StrategicAuditing';
import VulnerabilityManagement from './VulnerabilityManagement';
import TechnicalTesting from './TechnicalTesting';
import EmergingTechnology from './EmergingTechnology';
import OperationalIntegrity from './OperationalIntegrity';
import CTASection from './CTASection';
import FAQ from './FAQ';

const Cybersecurity = () => {
  useEffect(() => {
    // Set meta tags
    document.title = 'Cybersecurity Services | RiskMan';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Secure your digital future with RiskMan\'s elite cybersecurity services. We provide comprehensive audits, risk assessments, and proactive defense strategies tailored to modern enterprises.');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Cybersecurity Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers end-to-end cybersecurity services including vulnerability management, penetration testing, technical security assessments, and emerging technology risk for enterprises." />
        <link rel="canonical" href="https://www.riskman.in/services/cybersecurity" />
      </Helmet>
      <Hero />
      <StrategicAuditing />
      <VulnerabilityManagement />
      <TechnicalTesting />
      <EmergingTechnology />
      <OperationalIntegrity />
       <FAQ />
      <CTASection />
    </main>
  );
};

export default Cybersecurity;