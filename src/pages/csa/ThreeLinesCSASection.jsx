import React, { useState } from "react";
import ThreeLinesCSADiagram from "./ThreeLinesCSADiagram";
import InfoPanel from "./InfoPanel";

export default function ThreeLinesCSASection() {
  const [selectedZone, setSelectedZone] = useState(null);

  return (
    <section className="py-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-4 text-3xl font-bold text-center text-brandDark dark:text-white">
          Visual Framework: Three Lines Model
        </h2>

        <p className="max-w-4xl mx-auto mb-12 leading-relaxed text-center text-brandNavy dark:text-white/70">
          The following visual frameworks are integral to RiskMan's CSA methodology and are used extensively in client engagements, executive presentations, and governance reporting. These diagrams provide the visual architecture that supports strategic communication of CSA concepts to diverse stakeholder architecture.
        </p>

        {/* Centered Diagram */}
        <div className="mb-8">
          <ThreeLinesCSADiagram
            activeZone={selectedZone}
            onZoneClick={setSelectedZone}
          />
        </div>

        {/* Info Panel - Only shows when a zone is selected */}
        {selectedZone && (
          <div className="max-w-3xl mx-auto mt-8">
            <InfoPanel
              selectedZone={selectedZone}
              onClose={() => setSelectedZone(null)}
              mode="architecture"
            />
          </div>
        )}
      </div>
    </section>
  );
}