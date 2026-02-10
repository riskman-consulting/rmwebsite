import { steps } from './data'
import React from 'react'

function ImplementationSection() {
  return (
     <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-brandGold">Strategic Implementation Steps</h2>
            <p className="text-gray-300">We ensure that continuity plans are practical, actionable, and integrated into the daily culture of organizations.</p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-12 h-12 bg-brandPrimary rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brandAccent shadow-lg">
                  {step.icon}
                </div>
                <h4 className="font-heading text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ImplementationSection