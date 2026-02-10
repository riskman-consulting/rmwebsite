import React from 'react'
import { roadmap } from './data'

function RoadMapSection() {
  return (
     <section className="py-20 bg-brandLight">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandNavy">The Implementation Roadmap</h2>
              <p className="text-gray-600 mb-8">RiskMan simplifies the complex task of AI governance by breaking it down into manageable stages of development and organizational oversight.</p>
              <div className="bg-brandAccent/10 p-6 rounded-lg border-l-4 border-brandAccent">
                <p className="text-brandNavy font-bold">AI Strategy Integration</p>
                <p className="text-xs text-gray-500 mt-1 italic">Aligning AIMS with business objectives.</p>
              </div>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {roadmap.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-white hover:border-brandPrimary transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-brandNavy text-brandAccent rounded-lg flex items-center justify-center group-hover:bg-brandPrimary transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-brandGold font-bold tracking-widest text-xs uppercase">Stage {idx + 1}</span>
                  </div>
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