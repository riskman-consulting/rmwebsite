import { BarChart3 } from 'lucide-react'
import React from 'react'
import { auditPlanning } from './data'

function StrategicSection() {
  return (
       <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold font-heading lg:text-4xl text-brandDark dark:text-brandAccent/60">Strategic Audit Planning</h2>
              <p className="mb-10 text-lg text-brandNavy dark:text-white/70">Organizations require a meticulously scoped audit process that identifies material risks before they impact the bottom line.</p>
              <div className="space-y-6">
                {auditPlanning.map((plan, i) => (
                  <div key={i} className="flex gap-4 p-6 border-l-4 bg-surfaceLight dark:bg-surfaceDark rounded-xl border-brandPrimary dark:border-brandAccent/70">
                    <span className="text-2xl font-black text-brandPrimary dark:text-brandAccent">0{i+1}</span>
                    <div>
                      <h4 className="font-bold text-brandDark dark:text-white">{plan.title}</h4>
                      <p className="text-sm text-brandNavy dark:text-white/70">{plan.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
                <div className="p-2 bg-borderLight dark:bg-borderDark rounded-3xl">
                    <div className="bg-brandNavy p-12 rounded-[1.4rem] text-center">
                        <BarChart3 size={64} className="mx-auto mb-6 text-brandAccent" />
                        <h3 className="mb-4 text-2xl font-bold text-white dark:text-brandAccent">Material Risk Identification</h3>
                        <div className="w-20 h-1 mx-auto mb-6 bg-brandAccent"></div>
                        <p className="text-sm leading-relaxed text-white dark:text-white/70">
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