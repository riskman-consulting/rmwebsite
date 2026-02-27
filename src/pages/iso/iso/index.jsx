import React from 'react';
import ISOTISAXHero from './ISOTISAXHero';
import ComplianceSolution from './ComplianceSolution';
import ImplementationRoadmap from './ImplementationRoadmap';
import CompetitiveAdvantages from './CompetitiveAdvantages';
import ISOTISAXCTA from './ISOTISAXCTA';
import ISOTISAXFAQ from './ISOTISAXFAQ';

const ISOTISAXPage = () => {
    return (
        <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark">

            <Helmet>
                                                              <title>The International Organization for Standardization and Trusted Information Security Assessment Exchange Services | RiskMan</title>
                                                              <meta
                                                                name="description"
                                                                content="Elevate organizational resilience with RiskMan’s expert ISO and TISAX consulting. We streamline compliance to secure your global partnerships and data assets."
                                                              />
                                                              <link
                                                                rel="canonical"
                                                                href="https://www.riskman.in/iso-and-tisax"
                                                              />
                                                            </Helmet>
            <ISOTISAXHero />
            <ComplianceSolution />
            <ImplementationRoadmap />
            <CompetitiveAdvantages />
            <ISOTISAXCTA />
            <ISOTISAXFAQ />
        </div>
    );
};

export default ISOTISAXPage;