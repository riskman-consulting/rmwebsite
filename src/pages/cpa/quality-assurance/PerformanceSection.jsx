import React from 'react'
import { metrics } from './data'
import { ShieldCheck } from 'lucide-react'

function PerformanceSection() {
  return (
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Operational Performance Metrics</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">We transform qualitative quality goals into quantitative data that leadership can use to drive decision-making.</p>
              <div className="space-y-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-surfaceDark border border-white/5 rounded-xl">
                    <div className="text-brandAccent">{metric.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{metric.title}</h5>
                      <p className="text-xs text-gray-400">{metric.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-12 bg-brandPrimary/10 border border-brandAccent/20 rounded-[3rem] text-center">
                 <ShieldCheck className="mx-auto mb-6 text-brandAccent" size={64} />
                 <h3 className="text-2xl font-bold mb-4 italic">Evidence-Based Quality</h3>
                 <p className="text-gray-400 text-sm">"Real-time dashboards and trend prediction convert high-level quality goals into actionable institutional assets."</p>
               </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PerformanceSection