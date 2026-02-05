import React from 'react'

function DefinitionSection() {
  return (
    <section className="py-20 container">
        <div className="max-w-4xl mx-auto bg-brandNavy text-white rounded-[2rem] p-10 lg:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl font-bold mb-6">What Is SOC Compliance?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              SOC compliance is an AICPA-based framework where independent CPAs assess whether your internal controls are properly designed and, where required, operate effectively. It converts control quality into a reusable, recognized assurance asset for customers, auditors, and regulators.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-brandGold opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>
  )
}

export default DefinitionSection