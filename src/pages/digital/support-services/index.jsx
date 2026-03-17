import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Hero from './HeroSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import DevTestingSection from './DevTestingSection';
import UATProcessSection from './UATProcessSection';
import ChangeManagementSection from './ChangeManagementSection';
import ChangeApproachSection from './ChangeApproachSection';
import HypercareSection from './HypercareSection';
import ContinuousImprovementSection from './ContinuousImprovementSection';

const Cybersecurity = () => {
    return (
        <main className="min-h-screen">
            <Helmet>
              <title>Digital Transformation Support Services | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting provides post-implementation support services including UAT, change management, hypercare, and continuous improvement to ensure lasting digital transformation success." />
              <link rel="canonical" href="https://www.riskman.in/services/digital-transformation/support-services" />
            </Helmet>
            <Hero />
            <DevTestingSection />
            <UATProcessSection/>
            <ChangeManagementSection />
            <ChangeApproachSection/>
            <HypercareSection />
            <ContinuousImprovementSection />
            <FAQSection />
            <CTASection />
        </main>
    );
};

export default Cybersecurity;