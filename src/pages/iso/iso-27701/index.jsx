import React from 'react';
import ISO27701Hero from './ISO27701Hero';
import CoreComponents from './CoreComponents';
import PrivacyAuditLifecycle from './PrivacyAuditLifecycle';
import StrategicBenefits from './StrategicBenefits';
import ISO27701CTA from './ISO27701CTA';
import ISO27701FAQ from './ISO27701FAQ';

const ISO27701Page = () => {
    return (
        <>
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