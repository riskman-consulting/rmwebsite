import React, { useState } from "react";
import GlobalOperatingModelDiagram from "./GlobalOperatingModelDiagram";
import InfoPanel from "./InfoPanel";

export default function GlobalCSAOperatingModelSection() {
  const [activeZone, setActiveZone] = useState(null);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container px-6 mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-slate-800 dark:text-white">
          Visual Framework: Global Operating Model Architecture
        </h2>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
          {/* Diagram */}
          <div className="w-full">
            <GlobalOperatingModelDiagram
              activeZone={activeZone}
              onZoneClick={setActiveZone}
            />
          </div>

          {/* Info Panel */}
          <div className="w-full">
            <InfoPanel
              selectedZone={activeZone}
              onClose={() => setActiveZone(null)}
              mode="operatingModel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}