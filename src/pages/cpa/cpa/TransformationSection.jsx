import { Activity, ShieldCheck } from 'lucide-react'
import React from 'react'

function TransformationSection() {
  return (
      <section className="py-24 bg-brandNavy text-white">
        <div className="container">
          <div className="bg-surfaceDark p-12 lg:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brandPrimary/10 -skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Strengthen Your Governance Framework</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Partner with RiskMan to transform your assurance processes into a strategic asset for sustainable growth. We move beyond simple verification to provide enterprise-wide clarity.
                </p>
                <button className="bg-brandAccent text-brandDark px-10 py-5 rounded-md font-black text-lg hover:bg-brandGold transition-all">
                  Request A Comprehensive Review
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-brandPrimary/20 rounded-2xl border border-white/10 text-center">
                    <Activity className="mx-auto mb-2 text-brandAccent" />
                    <span className="block text-2xl font-bold">Real-Time</span>
                    <span className="text-xs text-gray-400 uppercase">Oversight</span>
                  </div>
                  <div className="p-8 bg-brandPrimary/20 rounded-2xl border border-white/10 text-center mt-10">
                    <ShieldCheck className="mx-auto mb-2 text-brandAccent" />
                    <span className="block text-2xl font-bold">Rigorous</span>
                    <span className="text-xs text-gray-400 uppercase">Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TransformationSection