import { Briefcase, CheckCircle, RefreshCw, ShieldAlert } from 'lucide-react'
import React from 'react'

function GovernanceSection() {
  return (
    
     <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Why Risk Governance Matters</h2>
              <p className="text-gray-600 mb-10 text-lg">Adopting a formal risk framework allows organizations to reduce crisis frequency and improve decision-making accuracy.</p>
              <div className="grid gap-6">
                {[
                  { t: "Improved Governance", d: "Integration into all organizational activities and strategic planning.", icon: <Briefcase className="text-brandPrimary" /> },
                  { t: "Increased Success Rate", d: "Minimizes negative surprises and improves business goal achievement.", icon: <CheckCircle className="text-brandPrimary" /> },
                  { t: "Enhanced Resilience", d: "Prepares the organization to respond effectively to market disruptions.", icon: <RefreshCw className="text-brandPrimary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-borderLight rounded-lg">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-brandDark">{item.t}</h5>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-brandLight p-12 rounded-[3rem] border-2 border-dashed border-brandPrimary/20 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brandAccent rounded-full flex items-center justify-center shadow-xl">
                  <ShieldAlert className="text-brandDark w-10 h-10" />
                </div>
                <p className="font-heading text-2xl font-light italic text-brandNavy leading-snug">
                  "Risk is not just a threat to be managed, but a resource to be optimized for organizational performance."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GovernanceSection