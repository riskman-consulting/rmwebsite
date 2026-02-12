import { Laptop, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import { maturitySteps } from './data'

function ComplianceSection() {
  return (
       <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Compliance Maturity Scaling</h2>
            <p className="text-gray-600">Moving beyond basic adherence toward a mature, self-sustaining compliance culture.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {maturitySteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {i === 0 ? <Users size={24} /> : i === 1 ? <Laptop size={24} /> : <TrendingUp size={24} />}
                </div>
                <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ComplianceSection