import React from "react";

import HeroSection from "./HeroSection";
import StrategicFoundation from "./StrategicFoundation";
import ThreeLinesModel from "./ThreeLinesModel";
import GlobalOperatingModel from "./GlobalOperatingModel";
import ValueCreation from "./ValueCreation";

// ✅ SECTION WRAPPERS (IMPORTANT)
import ThreeLinesCSASection from "./ThreeLinesCSASection";
import CSALifecycleSection from "./CSALifecycleSection";

// Other diagrams (standalone)
import GlobalOperatingModelDiagram from "./GlobalOperatingModelDiagram";
import CSAMaturityModelDiagram from "./CSAMaturityModelDiagram";

import CTASection from "./CTASection";

// import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen transition-colors bg-white dark:bg-slate-950">
      <HeroSection />

      <StrategicFoundation />

      <ThreeLinesModel />

      {/* ✅ Three Lines Diagram + InfoPanel */}
      <ThreeLinesCSASection />

      <GlobalOperatingModel />

      {/* ✅ CSA Lifecycle Diagram + InfoPanel */}
      <CSALifecycleSection />

      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
            Visual Framework: Global Operating Model Architecture
          </h2>
          <GlobalOperatingModelDiagram />
        </div>
      </section>

      <ValueCreation />

      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
            Visual Framework: CSA Maturity Model
          </h2>
          <CSAMaturityModelDiagram />
        </div>
      </section>


      <CTASection/>

      {/* <Footer /> */}
    </div>
  );
}
