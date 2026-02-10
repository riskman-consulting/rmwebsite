import { ArrowRight } from 'lucide-react'
import React from 'react'
import { auditLifecycle } from './data'

function LifeCycleSection() {
  return (
      <section className="py-20 bg-brandLight">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">The Privacy Audit Lifecycle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our audit process ensures that every touchpoint of personal data is mapped, secured, and managed according to international privacy best practices.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditLifecycle.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-borderLight h-full relative z-10">
                  <div className="w-12 h-12 bg-brandNavy text-brandAccent rounded-lg flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx !== auditLifecycle.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 z-0">
                    <ArrowRight className="text-brandAccent/30 w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default LifeCycleSection