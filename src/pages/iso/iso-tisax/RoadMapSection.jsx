import React from 'react'
import { roadmap } from './data'

function RoadMapSection() {
  return (
     <section className="py-20 bg-brandLight">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">The RiskMan Implementation Roadmap</h2>
              <p className="text-gray-600 mb-8">Our structured methodology ensures that your organization transitions from initial assessment to full compliance readiness efficiently and effectively.</p>
              <div className="p-6 bg-brandNavy text-white rounded-lg">
                <p className="italic">"We streamline the complex to make compliance a competitive tool, not a burden."</p>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {roadmap.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-brandAccent">
                  <span className="text-4xl font-black text-brandAccent/20 block mb-2">{step.step}</span>
                  <h4 className="font-heading text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default RoadMapSection