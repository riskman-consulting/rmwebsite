import { Gavel, Search, ShieldCheck } from 'lucide-react'
import React from 'react'

function ComplianceSection() {
  return (
      <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Integrity Due Diligence</h2>
            <p className="text-brandDark dark:text-white/70">Navigate complex regulatory landscapes by providing deep insights into partners, vendors, and high-value transactions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Background Intelligence", d: "Comprehensive screening to highlight red flags before they manifest as liabilities.", icon: <Search className="text-brandPrimary" /> },
              { t: "Regulatory Reviews", d: "Assessing internal controls against global standards to prevent bribery and corruption.", icon: <ShieldCheck className="text-brandPrimary" /> },
              { t: "Litigation Support", d: "Providing expert testimony and forensic reporting to bolster legal positions.", icon: <Gavel className="text-brandPrimary" /> }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ComplianceSection