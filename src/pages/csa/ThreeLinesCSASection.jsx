// import React, { useState } from "react";
// import ThreeLinesCSADiagram from "./ThreeLinesCSADiagram";
// import InfoPanel from "./InfoPanel";

// export default function ThreeLinesCSASection() {
//   const [selectedZone, setSelectedZone] = useState(null);

//   return (
//     <section className="py-12 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container px-6 mx-auto max-w-7xl">
//         {/* Section Header */}
//         <h2 className="mb-4 text-3xl font-bold text-center text-brandDark dark:text-white">
//           Visual Framework: Three Lines Model
//         </h2>

//         <p className="max-w-4xl mx-auto mb-12 leading-relaxed text-center text-brandNavy dark:text-white/70">
//           The following visual frameworks are integral to RiskMan's CSA methodology and are used extensively in client engagements, executive presentations, and governance reporting. These diagrams provide the visual architecture that supports strategic communication of CSA concepts to diverse stakeholder architecture.
//         </p>

//         {/* Centered Diagram */}
//         <div className="mb-8">
//           <ThreeLinesCSADiagram
//             activeZone={selectedZone}
//             onZoneClick={setSelectedZone}
//           />
//         </div>

//         {/* Info Panel - Only shows when a zone is selected */}
//         {selectedZone && (
//           <div className="max-w-3xl mx-auto mt-8">
//             <InfoPanel
//               selectedZone={selectedZone}
//               onClose={() => setSelectedZone(null)}
//               mode="architecture"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



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

        {/* Governance Alignment Box */}
        {/* <div className="max-w-3xl mx-auto mt-8">
          <div className="p-8 border-l-4 border-yellow-500 rounded-r-lg shadow-md bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-brandDark/10 dark:to-brandDark/20">
            <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">
              Governance Alignment
            </h3>
            <p className="italic leading-relaxed text-brandPrimary dark:text-white/70">
              RiskMan's CSA methodology ensures seamless integration across all three lines, creating 
              a unified control assurance ecosystem that satisfies regulatory expectations and Board 
              governance requirements.
            </p>
          </div>
        </div> */}

         <div className="p-8 border-l-4 border-yellow-500 rounded-r-lg shadow-md bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-brandDark/10 dark:to-brandDark/20">
          <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">Governance Alignment</h3>
          <p className="italic leading-relaxed text-brandPrimary dark:text-white/70">
            RiskMan's CSA methodology ensures seamless integration across all three lines, creating 
            a unified control assurance ecosystem that satisfies regulatory expectations and Board 
            governance requirements.
          </p>
        </div>
      </div>
    </section>
  );
}