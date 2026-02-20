// import React, { useState } from "react";
// import GlobalOperatingModelDiagram from "./GlobalOperatingModelDiagram";
// import InfoPanel from "./InfoPanel";

// export default function GlobalCSAOperatingModelSection() {
//   const [activeZone, setActiveZone] = useState(null);

//   return (
//     <section className="py-16 bg-white dark:bg-slate-900">
//       <div className="container px-6 mx-auto max-w-7xl">
//         <h2 className="mb-12 text-4xl font-bold text-center text-slate-800 dark:text-white">
//           Visual Framework: Global Operating Model Architecture
//         </h2>

//         <div className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
//           {/* Diagram */}
//           <div className="w-full">
//             <GlobalOperatingModelDiagram
//               activeZone={activeZone}
//               onZoneClick={setActiveZone}
//             />
//           </div>

//           {/* Info Panel */}
//           <div className="w-full">
//             <InfoPanel
//               selectedZone={activeZone}
//               onClose={() => setActiveZone(null)}
//               mode="operatingModel"
//             />
//           </div>


          
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import GlobalOperatingModelDiagram from "./GlobalOperatingModelDiagram";
import InfoPanel from "./InfoPanel";

export default function GlobalCSAOperatingModelSection() {
  const [activeZone, setActiveZone] = useState(null);

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-6xl px-6 lg:px-12 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-brandDark dark:text-white">
            RiskMan's Global CSA Operating Model
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-brandNavy dark:text-white/70">
            RiskMan has developed a proven, scalable CSA operating model specifically designed for 
            complex global organizations operating across multiple geographies, regulatory regimes, 
            and business models. Our approach balances global consistency with local adaptability—ensuring 
            standardized governance while respecting regional nuances.
          </p>

          {/* Centralized Governance */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-brandAccent">
              Centralized Governance, Localized Execution
            </h3>
            <p className="mb-6 leading-relaxed text-brandNavy dark:text-white/70">
              Our operating model establishes a central CSA Program Management Office (PMO) that defines 
              methodology, standards, and reporting requirements, while regional execution hubs manage 
              day-to-day assessment activities within their jurisdictions. This federated structure ensures:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 border-l-4 border-teal-600 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <h4 className="mb-2 text-lg font-bold text-teal-700 dark:text-teal-400">Consistent Methodology</h4>
                <p className="text-brandNavy dark:text-white/70">
                  Standardized assessment frameworks, rating scales, and documentation requirements 
                  across all business units and regions.
                </p>
              </div>

              <div className="p-6 border-l-4 border-purple-600 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <h4 className="mb-2 text-lg font-bold text-purple-700 dark:text-purple-400">Regulatory Customization</h4>
                <p className="text-brandNavy dark:text-white/70">
                  Tailored control libraries and assessment criteria reflecting jurisdiction-specific 
                  requirements (SOX, J-SOX, UK SOX, SEBI LODR, and others).
                </p>
              </div>

              <div className="p-6 border-l-4 border-blue-600 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <h4 className="mb-2 text-lg font-bold text-blue-700 dark:text-blue-400">Cultural Sensitivity</h4>
                <p className="text-brandNavy dark:text-white/70">
                  Assessment facilitation approaches adapted to local organizational cultures and 
                  communication norms.
                </p>
              </div>

              <div className="p-6 border-l-4 border-yellow-600 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <h4 className="mb-2 text-lg font-bold text-yellow-700 dark:text-yellow-400">Language Localization</h4>
                <p className="text-brandNavy dark:text-white/70">
                  Assessment materials and reporting available in local languages to maximize First 
                  Line engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Framework Section */}
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

      {/* Technology & GRC Integration Section */}
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-6xl px-6 lg:px-12 mx-auto">
          <div className="p-8 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-xl">
            <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-brandAccent">
              Technology & GRC Integration
            </h3>
            <p className="mb-6 leading-relaxed text-brandNavy dark:text-white">
              RiskMan's CSA programs are designed for seamless integration with leading GRC platforms. 
              Our technology-enabled approach ensures:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-brandNavy dark:text-white/70">
                  Automated workflow orchestration for assessment distribution and collection
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-brandNavy dark:text-white/70">
                  Real-time dashboards providing enterprise-wide control health visibility
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-brandNavy dark:text-white/70">
                  Integration with ERM risk registers for unified risk-control mapping
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-brandNavy dark:text-white/70">
                  Issue and action tracking with automated escalation protocols
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-brandNavy dark:text-white/70">
                  Analytics-driven insights including trend analysis and predictive indicators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}