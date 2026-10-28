import React from 'react'
import { processIntegrity } from './data'

function IntegritySection() {
  return (
    <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Process Integrity Validation</h2>
            <p className="text-gray-600 dark:text-gray-300">Organizations depend on consistent processes to deliver value; we ensure those processes are followed without deviation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processIntegrity.map((item, idx) => (
              <div key={idx} className="h-full p-10 bg-brandLight dark:bg-bgDark rounded-2xl border border-transparent hover:border-brandPrimary transition-all group">
                <div className="mb-6 group-hover:rotate-12 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IntegritySection