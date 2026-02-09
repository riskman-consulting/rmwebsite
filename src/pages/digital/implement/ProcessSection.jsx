import React from 'react'

function ProcessSection() {
  return (
     <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col items-start gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold font-heading">Business Process Re-engineering </h2>
              <p className="opacity-80">Redesign core workflows to eliminate bottlenecks and maximize the efficiency of your digital operations. </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:w-2/3 md:grid-cols-2">
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">AS-IS/TO-BE Workflows </h4>
                <p className="text-sm opacity-80">Map current state processes and design optimized future-state models to drive significant operational improvements. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Simplification & Automation </h4>
                <p className="text-sm opacity-80">Develop targeted plans for process digitization and automation to reduce manual effort and enhance overall output.</p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Root Cause Analysis </h4>
                <p className="text-sm opacity-80">Identify and resolve structural bottlenecks through deep-dive analysis to ensure streamlined and frictionless business operations. </p>
              </div>
              <div className="p-6 border-b-2 border-brandGold">
                <h4 className="mb-2 font-bold">Process Documentation </h4>
                <p className="text-sm opacity-80">Create detailed SOPs and swim lane diagrams to provide clear, standardized guidance for every stakeholder involved. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProcessSection