import React from 'react'

function ManagementSection() {
  return (
     <section className="py-20 text-white bg-brandNavy dark:bg-brandDark">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <h2 className="mb-4 text-3xl font-bold font-heading">Data Management & Migration </h2>
          <p className="max-w-2xl mb-12 opacity-90">Ensure data integrity and seamless transitions with structured cleansing, mapping, and validation frameworks. </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 1 </h4>
              <p className="text-sm">Data Lifecycle Planning: Establish end-to-end strategic plans for managing data assets from extraction to integration. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 2 </h4>
              <p className="text-sm">Cleansing & Validation: Implement rigorous frameworks to ensure only accurate, high-quality data reaches the new environment. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 3 </h4>
              <p className="text-sm">Field-Level Mapping: Define precise transformation logic to maintain data consistency across disparate digital systems. </p>
            </div>
            <div className="p-6 rounded-lg bg-surfaceDark/50">
              <h4 className="mb-2 text-lg italic font-bold text-brandGold">Phase 4 [cite: 131]</h4>
              <p className="text-sm">Defect Reconciliation: Utilize specialized logging tools to identify and resolve migration discrepancies in real time. </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ManagementSection