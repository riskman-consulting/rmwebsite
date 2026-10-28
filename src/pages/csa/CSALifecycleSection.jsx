import React, { useState } from "react";
import CSALifecycleDiagram from "./CSALifecycleDiagram";
import InfoPanel from "./InfoPanel";

export default function CSALifecycleSection() {
  const [activePhase, setActivePhase] = useState(null);

  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold text-center font-heading md:text-4xl text-brandDark dark:text-white">
          Visual Framework: CSA Lifecycle
        </h2>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-start">
          {/* Diagram */}
          <CSALifecycleDiagram
            activePhase={activePhase}
            onPhaseClick={setActivePhase}
          />

          {/* Info Panel */}
          <InfoPanel
            selectedZone={activePhase}
            onClose={() => setActivePhase(null)}
            mode="lifecycle"
          />
        </div>
      </div>
    </section>
  );
}
