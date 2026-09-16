import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ServiceGroupsSection from "./ServiceGroupsSection";
import EngagementSection from "./components/EngagementSection";
import CTASection from "./CTASection";

const FAASPage = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>
          Financial Accounting and Advisory Services (FAAS) | RiskMan Consulting
        </title>
        <meta
          name="description"
          content="RiskMan Consulting's Financial Accounting and Advisory Services (FAAS): managed finance operations, virtual CFO and controller services, financial advisory, transaction and audit readiness, costing and plant finance, and compliance and assurance."
        />
        <link rel="canonical" href="https://www.riskman.in/services/faas" />
        <meta
          property="og:title"
          content="Financial Accounting and Advisory Services (FAAS) | RiskMan Consulting"
        />
        <meta
          property="og:description"
          content="Six connected service groups under one team — from running the day-to-day finance function to standing up a CFO office and getting you audit- and deal-ready."
        />
        <meta property="og:url" content="https://www.riskman.in/services/faas" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <ServiceGroupsSection />
      <EngagementSection tone="surface" />
      <CTASection className="bg-bgLight dark:bg-bgDark" />
    </div>
  );
};

export default FAASPage;
