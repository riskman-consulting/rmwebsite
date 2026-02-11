import React, { useEffect } from 'react';
import ConcurrentAuditHero from './ConcurrentAuditHero';
import StrategicContext from './StrategicContext';
import ConceptDefined from './ConceptDefined';
import OperatingModel from './OperationalModel';
// import GlobalDelivery from './GlobalDelivery';
import TechnologyEnablement from './TechnologyEnablement';
import ValueDelivered from './ValueDelivered';
import WhyRiskMan from './WhyRiskMan';
import ConcurrentAuditCTA from './ConcurrentAuditCTA';

const ConcurrentAuditPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans bg-bgDark text-brandLight/80 selection:bg-brandGold selection:text-brandNavy">
            <ConcurrentAuditHero />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <StrategicContext />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <ConceptDefined />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <OperatingModel />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            {/* <GlobalDelivery /> */}
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <TechnologyEnablement />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <ValueDelivered />
            <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-brandGold/20 to-transparent" />
            <WhyRiskMan />
            <ConcurrentAuditCTA />
        </div>
    );
};

export default ConcurrentAuditPage;
