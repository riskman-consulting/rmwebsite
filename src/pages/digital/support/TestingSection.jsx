import React from 'react'

function TestingSection() {
  return (
     <section className="py-20 border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold font-heading">Development Testing & UAT </h2>
              <p className="opacity-80">Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols. </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:w-2/3 md:grid-cols-2">
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Scenario-Based UAT </h3>
                <p className="text-sm opacity-80 text-balance">Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs. </p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Real-Time Defect Triaging </h3>
                <p className="text-sm opacity-80">Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved before final deployment. </p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">Test Case Coverage [cite: 170]</h3>
                <p className="text-sm opacity-80">Prepare exhaustive test cases and track coverage meticulously to ensure no technical or business requirement goes unverified.</p>
              </div>
              <div className="p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <h3 className="mb-2 font-bold text-brandPrimary dark:text-brandGold">System Integration Testing </h3>
                <p className="text-sm opacity-80">Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TestingSection