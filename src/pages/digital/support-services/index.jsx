import React, { useEffect } from 'react';
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