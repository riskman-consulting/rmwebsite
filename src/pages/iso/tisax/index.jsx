import React, { useEffect } from 'react';
import TisaxHero from './TisaxHero';
import TisaxProcess from './TISAXProcess';
import TisaxBenefits from './TISAXBenefits';
import TisaxChallenges from './TISAXChallenges';
import TisaxFAQ from './TISAXFAQ';
import TisaxCTA from './TISAXCTA';

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
