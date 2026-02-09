import React from 'react'

function SolutionSection() {
  return (
   <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-12 text-3xl font-bold font-heading">BRD & Solution Design </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <h3 className="mb-4 text-xl font-bold">Functional Documentation </h3>
              <p className="opacity-80">Draft structured requirements covering both functional and non-functional needs to provide a clear technical roadmap. </p>
            </div>
            <div className="p-8 border bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
              <h3 className="mb-4 text-xl font-bold">Stakeholder Walkthroughs [cite: 139]</h3>
              <p className="opacity-80">Conduct validation walkthroughs with key stakeholders to ensure the proposed solution design meets all business expectations. </p>
            </div>
          </div>
          <div className="p-10 mt-20 text-center border bg-brandGold/10 dark:bg-brandGold/5 rounded-3xl border-brandGold/20">
            <h2 className="mb-4 text-3xl font-bold font-heading text-brandDark dark:text-brandGold">Ready to Optimize Your Implementation? </h2>
           <p className="max-w-2xl mx-auto mb-8 opacity-90">Drive measurable impact with RiskMan's Accelerating Value Realization framework. </p>
            <button className="px-12 py-4 font-bold text-white transition-transform rounded-full bg-brandDark dark:bg-brandGold dark:text-brandDark hover:scale-105">
             Contact Our Experts 
            </button>
          </div>
        </div>
      </section>
  )
}

export default  SolutionSection
