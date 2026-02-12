import { Building2, Stethoscope, Zap } from 'lucide-react'
import React from 'react'

function SpecificSection() {
  return (
    <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Industry-Specific Data Standards</h2>
              <p className="text-gray-300 mb-10 text-lg">Specialized controls for healthcare and finance that go beyond general privacy mandates.</p>
              <div className="grid gap-6">
                {[
                  { t: "HIPAA Safeguards", d: "Technical controls to protect Electronic Protected Health Information (ePHI).", icon: <Stethoscope className="text-brandAccent" /> },
                  { t: "GLBA Compliance", d: "Managing Non-Public Personal Information (NPI) through encryption.", icon: <Building2 className="text-brandAccent" /> },
                  { t: "Cross-Sectoral Mapping", d: "Identifying overlapping rules to eliminate redundant compliance tasks.", icon: <Zap className="text-brandAccent" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brandPrimary/20 rounded-xl border border-white/5">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-white">{item.t}</h5>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-1 bg-gradient-to-br from-brandAccent to-brandPrimary rounded-[2rem]">
                  <div className="bg-surfaceDark p-10 rounded-[1.9rem]">
                    <h3 className="text-brandGold text-2xl font-bold mb-4">Vertical Compliance</h3>
                    <p className="text-gray-300 font-light italic leading-relaxed">
                      "RiskMan identifies the intersection of industry regulations and privacy laws to ensure no data asset is left unprotected."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SpecificSection