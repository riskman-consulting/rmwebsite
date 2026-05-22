import React from 'react';
import { Helmet } from 'react-helmet-async';
import ISO27701Hero from './ISO27701Hero';
import CoreComponents from './CoreComponents';
import PrivacyAuditLifecycle from './PrivacyAuditLifecycle';
import StrategicBenefits from './StrategicBenefits';
import ISO27701CTA from './ISO27701CTA';
import ISO27701FAQ from './ISO27701FAQ';

const ISO27701Page = () => {
    return (
        <>
            <Helmet>
                <title>ISO 27701 Privacy Information Management | RiskMan Consulting</title>
                <meta name="description" content="ISO 27701 certification advisory for privacy information management — establish accountable, auditable data privacy practices aligned with GDPR and DPDP." />
                <link rel="canonical" href="https://www.riskman.in/services/iso-certifications/iso-27701" />
            </Helmet>
            <ISO27701Hero />
            <CoreComponents />
            <PrivacyAuditLifecycle />
            <StrategicBenefits />
            <ISO27701CTA />
            <ISO27701FAQ />
        </>
    );
};

export default ISO27701Page;