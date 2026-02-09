import React from 'react'

function ToolSection() {
  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Tool Evaluation & Optimization </h2>
          <p className="mb-12 text-lg opacity-80">Select and refine your digital ecosystem through data-backed assessment and strategic feasibility analysis. </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Comparative Tool Evaluation", desc: "Perform side-by-side assessments of digital solutions to identify the best fit for your specific organizational requirements.", id: 105, p: 106 },
              { title: "Cost-Benefit & POC", desc: "Execute proof-of-concept trials and detailed financial analysis to validate investment value before full-scale deployment.", id: 107, p: 108 },
              { title: "Vendor Scorecarding", desc: "Utilize objective vendor assessments and scorecards to ensure third-party partners meet all performance and stability benchmarks.", id: 109, p: 110 },
              { title: "Integration Feasibility", desc: "Conduct comprehensive licensing and integration checks to ensure new tools synchronize seamlessly with your existing technology stack.", id: 111, p: 112 }
            ].map((item) => (
              <div key={item.id} className="p-6 border shadow-sm bg-bgLight dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark">
                <h3 className="mb-3 font-bold text-brandPrimary dark:text-brandGold">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ToolSection