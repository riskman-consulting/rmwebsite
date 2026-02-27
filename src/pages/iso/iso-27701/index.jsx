import React from 'react';
import ISO27701Hero from './ISO27701Hero';
import CoreComponents from './CoreComponents';
import PrivacyAuditLifecycle from './PrivacyAuditLifecycle';
import StrategicBenefits from './StrategicBenefits';
import ISO27701CTA from './ISO27701CTA';
import ISO27701FAQ from './ISO27701FAQ';

import { Helmet } from 'react-helmet-async';

const ISO27701Page = () => {
    return (
        <>


            <Helmet>
                <title>The International Organization for Standardization 27701 Services | RiskMan</title>
                <meta
                    name="description"
                    content="Integrate privacy into your security framework with RiskMan’s ISO 27701 services. We help organizations manage PII and ensure global data compliance."
                />
                <link
                    rel="canonical"
                    href="https://www.riskman.in/iso-27701"
                />
            </Helmet>
            {/* SEO: Install react-helmet-async to add meta tags */}
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