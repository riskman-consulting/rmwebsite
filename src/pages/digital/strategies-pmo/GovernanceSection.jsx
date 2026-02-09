import React from 'react'

function GovernanceSection() {
  return (
     <section className="py-16 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Governance Management</h2>
          <p className="mb-12 text-lg opacity-80">Establish structural integrity and proactive control through systematic oversight and defined protocols.</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Centralized RAID Log Maintenance</h3>
              <p className="text-sm opacity-80">Track Risks, Assumptions, Issues, and Dependencies in a unified repository to ensure complete operational visibility.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Escalation & Resolution Protocols</h3>
              <p className="text-sm opacity-80">Implement defined matrices and resolution workflows to address critical project hurdles and maintain steady progress.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Governance Calendar</h3>
              <p className="text-sm opacity-80">Utilize structured review checkpoints to maintain consistent oversight, accountability, and alignment across all project workstreams.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Compliance & Documentation</h3>
              <p className="text-sm opacity-80">Conduct rigorous audits to ensure all project artifacts and documentation align perfectly with corporate governance standards.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GovernanceSection