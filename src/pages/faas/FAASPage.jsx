import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ServiceGroupsSection from "./ServiceGroupsSection";
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
      </Helmet>

      <HeroSection />
      <ServiceGroupsSection />
      <CTASection />
    </div>
  );
};

export default FAASPage;
