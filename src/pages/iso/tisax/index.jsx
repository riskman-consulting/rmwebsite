import React, { useEffect } from 'react';
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
