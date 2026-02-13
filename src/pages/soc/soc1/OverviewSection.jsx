import { BarChart3, CheckCircleIcon } from 'lucide-react'
import React from 'react'

function OverviewSection() {
  return (
     <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">SOC 1 In One View</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                SOC 1 focuses on controls that impact our customers’ financial reporting. Typical users include CFOs, controllers, and external auditors of our clients.
              </p>
              <div className="space-y-4">
                {['Payroll & Payment Processing', 'Fund Administration', 'Loan Servicing', 'Claims Processing'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-brandNavy dark:text-brandGold font-semibold">
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-bgLight dark:bg-brandDark p-8 rounded-2xl border border-borderLight dark:border-borderDark shadow-inner">
              <h4 className="font-bold text-xl mb-4 flex items-center">
                <BarChart3 className="mr-2 text-brandPrimary dark:text-brandGold" /> 
                The Core Outcome
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                The primary result is reduced duplicate testing and smoother external audits for our customers. It builds a bridge of trust between your operations and their finance departments.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OverviewSection