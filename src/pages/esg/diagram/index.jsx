import React, { useState, useMemo } from "react"
import Diagram from "./Diagram"
import DetailsCard from "./DetailsCard"
import { STAKEHOLDERS } from "./STAKEHOLDERS"

const App = () => {
  const [activeStakeholderId, setActiveStakeholderId] = useState(null)

  const activeStakeholder = useMemo(
    () => STAKEHOLDERS.find(s => s.id === activeStakeholderId) || null,
    [activeStakeholderId]
  )

  return (
    <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark">
    <div className="container flex flex-col items-center">
      {/* Header Area */}
      <div className="w-full mb-10 text-center select-none">
        <h2 className="text-3xl font-bold tracking-tight text-center font-heading md:text-4xl text-slate-800 dark:text-white">
        ESG Stakeholder Ecosystem
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mt-2">
         The Multi-Stakeholder Imperative: Bidirectional Value Exchange
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-start justify-center w-full gap-6 lg:flex-row lg:gap-8 xl:gap-12">
        {/* Left Section: Diagram - MADE BIGGER */}
        <div className="flex items-center justify-center w-full lg:w-auto shrink-0">
          <div className="w-full max-w-[520px] md:max-w-[600px] lg:max-w-[650px]">
            <Diagram
              activeId={activeStakeholderId}
              onHover={setActiveStakeholderId}
            />
          </div>
        </div>

        {/* Right Section: Details Card - MADE WIDER */}
        <div className="w-full lg:w-[520px]  xl:w-[560px] flex justify-center items-start lg:sticky lg:top-8 shrink-0">
          <div className="w-full">
            {activeStakeholder ? (
              <div className="transition-all duration-300 transform translate-y-0 opacity-100">
                <DetailsCard
                  stakeholder={activeStakeholder}
                  onClear={() => setActiveStakeholderId(null)}
                />
              </div>
            ) : (
              <div className="hidden lg:flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl opacity-30 min-h-[320px]">
                <svg 
                  className="w-16 h-16 mb-4 text-slate-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                  />
                </svg>
                <p className="text-xs font-bold leading-relaxed tracking-widest text-center uppercase text-slate-400">
                  Hover on a stakeholder
                  <br />
                  to view influence dynamics
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default App