import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import TisaxHero from './TisaxHero';
import TisaxProcess from './TisaxProcess';
import TisaxBenefits from './TisaxBenefits';
import TisaxChallenges from './TisaxChallenges';
import TisaxFAQ from './TisaxFAQ';
import TisaxCTA from './TisaxCTA';

const TisaxPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="transition-colors duration-300 bg-bgLight dark:bg-bgDark">
            <Helmet>
              <title>TISAX Certification Services | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting supports automotive industry organizations achieve TISAX (Trusted Information Security Assessment Exchange) certification for information security compliance with VDA ISA standards." />
              <link rel="canonical" href="https://www.riskman.in/services/iso-certifications/tisax" />
            </Helmet>
            <TisaxHero />
            <TisaxProcess />
            <TisaxBenefits />
            <TisaxChallenges />
            <TisaxCTA />
            <TisaxFAQ />
        </div>
    );
};

export default TisaxPage;
