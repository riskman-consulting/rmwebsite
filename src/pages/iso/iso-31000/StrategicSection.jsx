import React from 'react'
import {process} from "./data"

function StrategicSection() {
  return (
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">RiskMan’s Strategic Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Building a culture of risk awareness that ensures long-term stability and sustainable growth.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            {process.map((step, idx) => (
              <div key={idx} className="bg-brandPrimary/20 p-8 rounded-xl border border-white/10 hover:bg-brandPrimary/40 transition-colors">
                <div className="text-brandAccent mb-4">{step.icon}</div>
                <h4 className="font-heading text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StrategicSection