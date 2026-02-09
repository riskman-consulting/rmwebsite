import React from 'react'

function LifecycleSection() {
  return (
       <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Project Lifecycle Ownership</h2>
          <p className="max-w-2xl mb-10 opacity-80">Maintain end-to-end accountability from initial concept to formal closure for consistent value delivery.</p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4 p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              <span className="text-3xl font-bold text-brandPrimary dark:text-brandGold font-heading">01</span>
              <div>
                <h3 className="mb-2 text-xl font-bold text-brandNavy dark:text-brandGold">Concept-to-Close Governance</h3>
                <p className="opacity-80">Drive seamless execution through every phase, ensuring total accountability from project initiation through formal sign-off.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              <span className="text-3xl font-bold text-brandPrimary dark:text-brandGold font-heading">02</span>
              <div>
                <h3 className="mb-2 text-xl font-bold text-brandNavy dark:text-brandGold">Milestone Health Tracking</h3>
                <p className="opacity-80">Monitor delivery of velocity by tracking project health against key milestones to identify and mitigate delays early.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              <span className="text-3xl font-bold text-brandPrimary dark:text-brandGold font-heading">03</span>
              <div>
                <h3 className="mb-2 text-xl font-bold text-brandNavy dark:text-brandGold">Integrated Performance Monitoring</h3>
                <p className="opacity-80">Synchronize timeline, cost, and scope tracking to provide a holistic view of project integrity and performance.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border rounded-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              <span className="text-3xl font-bold text-brandPrimary dark:text-brandGold font-heading">04</span>
              <div>
                <h3 className="mb-2 text-xl font-bold text-brandNavy dark:text-brandGold">Closure & Documentation</h3>
                <p className="opacity-80">Systematically capture lessons learned and finalize closure documentation to preserve institutional knowledge for future digital initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LifecycleSection