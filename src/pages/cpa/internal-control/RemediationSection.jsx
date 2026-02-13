import { LineChart, RotateCcw, Search } from 'lucide-react'
import React from 'react'

function RemediationSection() {
  return (
       <section className="py-14 md:py-20 bg-white">
        <div className="container px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Risk Assessment & Remediation</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Organizations must proactively evolve their controls to meet the challenges of a rapidly changing digital landscape.</p>
              <div className="grid gap-4">
                {[
                  { t: "Gap Identification", d: "Pinpointing weaknesses in current structures.", icon: <Search className="text-brandPrimary" size={20}/> },
                  { t: "Efficiency Calibration", d: "Removing redundant controls that slow down operations.", icon: <LineChart className="text-brandPrimary" size={20}/> },
                  { t: "Remediation Roadmaps", d: "Step-by-step guides to fortifying defenses.", icon: <RotateCcw className="text-brandPrimary" size={20}/> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-borderLight rounded-xl">
                    <div className="p-2 bg-brandLight rounded-lg">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{item.t}</h5>
                      <p className="text-xs text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-brandLight p-12 rounded-[3rem] border-2 border-dashed border-brandPrimary/20 text-center">
                 <h3 className="font-heading text-2xl font-bold text-brandDark mb-4 italic">Competitive Operational Advantage</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8">
                   "We transform internal controls from a necessary compliance burden into a tool for sustainable institutional growth."
                 </p>
                 <button className="bg-brandDark text-white px-10 py-4 rounded-full font-bold hover:bg-brandNavy transition-all shadow-lg">
                   Initiate A Control Review
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RemediationSection