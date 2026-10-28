import { CheckCircleIcon, ShieldCheck } from 'lucide-react'
import React from 'react'

function DefinitionSection() {
  return (
    <section className="py-16 border-y bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold font-heading">What Is SOC Compliance?</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              SOC compliance is an AICPA-based framework where independent CPAs assess whether your internal controls are properly designed and, where required, operate effectively. It converts control quality into a reusable, recognized assurance asset for customers, auditors, and regulators.
            </p>
          </div>
          <div className="p-8 border shadow-inner bg-bgLight dark:bg-brandDark rounded-2xl border-borderLight dark:border-borderDark">
            <h4 className="flex items-center mb-6 text-xl font-bold">
              <ShieldCheck className="mr-2 text-brandPrimary dark:text-brandGold" />
              Who Relies on a SOC Report
            </h4>
            <div className="space-y-4">
              {['Your customers', 'Your customers’ external auditors', 'Regulators'].map((item) => (
                <div key={item} className="flex items-center space-x-3 font-semibold text-brandNavy dark:text-brandGold">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DefinitionSection
