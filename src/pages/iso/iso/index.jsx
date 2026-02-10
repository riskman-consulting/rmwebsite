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