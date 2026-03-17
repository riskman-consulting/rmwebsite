import React from 'react';
import HeroSection from './HeroSection';
import StrategicAssessment from './StrategicAssessment';
import AuditingPlan from './AuditingPlan';
import RBIAAdvisory from './RBIAAdvisory';
import FrameworkSection from './FrameworkSection';
import CustomizedApproach from './CustomizedApproach';
import SampleIAPlan from './SampleIAPlan';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import { Helmet } from 'react-helmet-async';

const RBIAPage = () => {
    return (
        <div className="min-h-screen bg-bgLight dark:bg-bgDark">

            <Helmet>
                <title> Risk-Based Internal Audit (RBIA) Services | RiskMan Consulting </title>
                <meta
                    name="description"
                    content='Secure your future with RiskMan Consulting’s customized RBIA services. Our team delivers strategic insight and enduring value for your business.'
                />
                <link rel="canonical" href="https://www.riskman.in/rbia" />
            </Helmet>
            {/* Hero Section with Image */}
            <HeroSection />

            {/* Strategic Assessment */}
            <StrategicAssessment />

            {/* Auditing Plan - 3 Cards */}
            <AuditingPlan />

            {/* RBIA Advisory */}
            <RBIAAdvisory />

            {/* Framework Section with IMAGE 1 */}
            <FrameworkSection />

            {/* 5 Phase Customized Approach */}
            <CustomizedApproach />

            {/* Sample IA Plan with IMAGE 2 */}
            <SampleIAPlan />

            {/* CTA Section */}
            <CTASection />

            {/* FAQ Section */}
            <FAQSection />
        </div>
    );
};

export default RBIAPage;