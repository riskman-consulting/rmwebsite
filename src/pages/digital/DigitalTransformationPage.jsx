

import { Helmet } from "react-helmet-async";

import CTASection from "./CTASection";
import FAQ from "./FAQ.";
import HeroSection from "./HeroSection";
import Offerings from "./Offerings";

const DigitalTransformationPage = () => {
  return (
    <main className="w-full overflow-hidden">
<Helmet>
  <title>Digital Transformation Services | RiskMan Consulting</title>
  <meta
    name="description"
    content=' Evolve your organizational digital transformation with RiskMan Consulting’s strategic PMO, implementation excellence, and support services.'
  />
  <link rel="canonical" href="https://www.riskman.in/digital-transformation" />
</Helmet>


      {/* 1. Hero Section */}
      <HeroSection/>

      {/* 2. Introduction / Journey */}
      <Offerings />

      {/* 3. ERM Advantages */}
      <CTASection />

      {/* 4. Strategic ERM Framework */}
      <FAQ />
    </main>
  );
};

export default DigitalTransformationPage;