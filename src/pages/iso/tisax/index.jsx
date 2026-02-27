import React, { useEffect } from 'react';
import TisaxHero from './TisaxHero';
import TisaxProcess from './TisaxProcess';
import TisaxBenefits from './TisaxBenefits';
import TisaxChallenges from './TisaxChallenges';
import TisaxFAQ from './TisaxFAQ';
import TisaxCTA from './TisaxCTA';

import { Helmet } from 'react-helmet-async';

const TisaxPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="transition-colors duration-300 bg-bgLight dark:bg-bgDark">
            <Helmet>
                      <title>Trusted Information Security Assessment Exchange Services | RiskMan</title>
                      <meta
                          name="description"
                          content="Secure your automotive partnerships with RiskMan’s TISAX services. We guide organizations through assessment and exchange to ensure industry compliance."
                      />
                      <link
                          rel="canonical"
                          href="https://www.riskman.in/tisax"
                      />
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
