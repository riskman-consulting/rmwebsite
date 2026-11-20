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
import RelatedLinks from "../../components/sections/RelatedLinks";

const ConcurrentAuditPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight/80 selection:bg-brandGold selection:text-brandNavy">
            <Helmet>
              <title>Concurrent Audit Services | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting's concurrent audit services provide real-time oversight during high-stakes projects, capital expenditure, and digital transformations to detect and mitigate risks as they arise." />
              <link rel="canonical" href="https://www.riskman.in/services/risk-advisory/concurrent-audits" />
            </Helmet>
            <ConcurrentAuditHero />
            <StrategicContext />
            <ConceptDefined />
            <OperatingModel />
            {/* <GlobalDelivery /> */}
            <TechnologyEnablement />
            <ValueDelivered />
            <WhyRiskMan />
            <RelatedLinks
              intro="RiskMan GRC records audit plans, fieldwork, reports and the follow-up of every observation on one platform."
              links={[
                { label: "Internal audit management software", path: "/products/riskman-grc/risk-based-internal-audit" },
                { label: "Audit findings and remediation tracking", path: "/products/riskman-grc/action-taken-report" },
              ]}
            />

            <ConcurrentAuditCTA />
        </div>
    );
};

export default ConcurrentAuditPage;
