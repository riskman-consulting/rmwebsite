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
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center p-4 md:p-8 lg:p-12 overflow-x-hidden">
      {/* Header Area */}
      <div className="w-full mb-6 text-center select-none md:mb-8 max-w-7xl md:text-left">
        <h1 className="text-3xl font-black tracking-tight text-center md:text-4xl lg:text-5xl text-slate-800">
        ESG Stakeholder Ecosystem
        </h1>
        <p className="text-slate-500 text-center font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mt-2">
         The Multi-Stakeholder Imperative: Bidirectional Value Exchange
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-start justify-center w-full gap-6 max-w-7xl lg:flex-row lg:gap-8 xl:gap-12">
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
              <div className="hidden lg:flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-3xl opacity-30 min-h-[320px]">
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

      {/* Background visual depth */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  )
}

export default App