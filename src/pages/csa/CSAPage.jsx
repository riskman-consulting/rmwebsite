// import React from "react";

// import HeroSection from "./HeroSection";
// import StrategicFoundation from "./StrategicFoundation";
// import ThreeLinesModel from "./ThreeLinesModel";
// import GlobalOperatingModel from "./GlobalOperatingModel";
// import ValueCreation from "./ValueCreation";

// // ✅ SECTION WRAPPERS (IMPORTANT)
// import ThreeLinesCSASection from "./ThreeLinesCSASection";
// import CSALifecycleSection from "./CSALifecycleSection";

// // Other diagrams (standalone)
// import GlobalOperatingModelDiagram from "./GlobalOperatingModelDiagram";
// import CSAMaturityModelDiagram from "./CSAMaturityModelDiagram";

// import CTASection from "./CTASection";

// // import Footer from "./Footer";

// export default function CSAPage() {
//   return (
//     <div className="min-h-screen transition-colors bg-white dark:bg-slate-950">
//       <HeroSection />

//       <StrategicFoundation />

//       {/* <ThreeLinesModel /> */}

//       {/* ✅ Three Lines Diagram + InfoPanel */}
//       <ThreeLinesCSASection />

//       <GlobalOperatingModel />

//       {/* ✅ CSA Lifecycle Diagram + InfoPanel */}
//       <CSALifecycleSection />

//       <section className="py-12 bg-white dark:bg-slate-900">
//         <div className="container px-6 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
//             Visual Framework: Global Operating Model Architecture
//           </h2>
//           <GlobalOperatingModelDiagram />
//         </div>
//       </section>

//       <ValueCreation />

//       <section className="py-12 bg-white dark:bg-slate-900">
//         <div className="container px-6 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
//             Visual Framework: CSA Maturity Model
//           </h2>
//           <CSAMaturityModelDiagram />
//         </div>
//       </section>


//       <CTASection/>

//       {/* <Footer /> */}
//     </div>
//   );
// }



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

export default function CSAPage() {
  return (
    <div className="min-h-screen transition-colors bg-white dark:bg-slate-950">
      <HeroSection />

      <StrategicFoundation />

      {/* <ThreeLinesModel /> */}

      {/* ✅ Three Lines Diagram + InfoPanel */}
      <ThreeLinesCSASection />

      <GlobalOperatingModel />

      {/* ✅ CSA Lifecycle Diagram + InfoPanel */}
      <CSALifecycleSection />

      <section className="bg-white py-14 md:py-20 dark:bg-slate-900">
        <div className="container px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-slate-800 dark:text-white">
            Visual Framework: Global Operating Model Architecture
          </h2>
          <GlobalOperatingModelDiagram />
        </div>
      </section>

      {/* ✅ Technology & GRC Integration Section - ADDED HERE */}
      {/* <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-6xl px-6 mx-auto">
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
      </section> */}
    
     {/* <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark"> */}
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

      <ValueCreation />

      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container h-96 md:h-auto  px-6 mx-auto">
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