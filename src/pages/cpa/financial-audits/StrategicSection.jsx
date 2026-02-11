import { BarChart3 } from 'lucide-react'
import React from 'react'
import { auditPlanning } from './data'

function StrategicSection() {
  return (
       <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Strategic Audit Planning</h2>
              <p className="text-gray-600 mb-10 text-lg">Organizations require a meticulously scoped audit process that identifies material risks before they impact the bottom line.</p>
              <div className="space-y-6">
                {auditPlanning.map((plan, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-brandLight rounded-xl border-l-4 border-brandPrimary">
                    <span className="text-2xl font-black text-brandPrimary/20">0{i+1}</span>
                    <div>
                      <h4 className="font-bold text-brandDark">{plan.title}</h4>
                      <p className="text-sm text-gray-500">{plan.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
                <div className="p-2 bg-gray-100 rounded-3xl">
                    <div className="bg-brandNavy p-12 rounded-[1.4rem] text-center">
                        <BarChart3 size={64} className="text-brandAccent mx-auto mb-6" />
                        <h3 className="text-white text-2xl font-bold mb-4">Material Risk Identification</h3>
                        <div className="h-1 w-20 bg-brandAccent mx-auto mb-6"></div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "A successful audit is built on the foundation of exhaustive planning and risk-focused resource deployment."
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StrategicSection