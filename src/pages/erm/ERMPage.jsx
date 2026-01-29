// ERMPage.jsx

import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ERMAdvantagesSection from "./ERMAdvantagesSection";
import StrategicERMFrameworkSection from "./StrategicERMFrameworkSection";
import ERMMethodologySection from "./ERMMethodologySection";
import OrganizationWideImplementationSection from "./OrganizationWideImplementationSection";
import RiskMaturitySection from "./RiskMaturitySection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const ERMPage = () => {
  return (
    <main className="min-h-screen bg-bgLight dark:bg-bgDark">

      {/* 1. Hero */}
      <HeroSection
        data={{
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        }}
      />

      {/* 2. Intro / Journey */}
      <IntroSection
        data={{
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
        }}
      />

      {/* 3. ERM Advantages */}
      <ERMAdvantagesSection />

      {/* 4. Strategic ERM Framework */}
      <StrategicERMFrameworkSection />

      {/* 5. Methodology / Process Flow */}
      <ERMMethodologySection />

      {/* 6. Organization-wide Implementation */}
      <OrganizationWideImplementationSection />

      {/* 7. Risk Maturity / Path Ahead */}
      <RiskMaturitySection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final CTA */}
      <CTASection />

    </main>
  );
};

export default ERMPage;
