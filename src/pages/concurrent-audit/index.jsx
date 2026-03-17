import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
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
            <Helmet>
              <title>Concurrent Audit Services | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting's concurrent audit services provide real-time oversight during high-stakes projects, capital expenditure, and digital transformations to detect and mitigate risks as they arise." />
              <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/concurrent-audits" />
            </Helmet>
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
