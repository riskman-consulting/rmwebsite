import React from 'react'
import { envAnalysis } from './data'

function AnalysisSection() {
  return (
    <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Control Environment Analysis</h2>
            <p className="text-gray-600">A resilient organization begins with a disciplined control culture that cascades from the top level down.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {envAnalysis.map((item, idx) => (
              <div key={idx} className="p-8 bg-brandLight rounded-2xl border border-transparent hover:border-brandPrimary transition-all text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AnalysisSection