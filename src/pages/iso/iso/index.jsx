import React from 'react';
import { Helmet } from "react-helmet-async";
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
              <title>ISO Certification Services | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting provides end-to-end ISO certification services including ISO 27001, 27701, 22301, 31000, 42001, and TISAX for enterprises seeking global compliance standards." />
              <link rel="canonical" href="https://www.riskman.in/services/iso-certifications" />
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