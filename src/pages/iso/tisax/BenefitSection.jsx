import { Car, ShieldCheck } from 'lucide-react'
import React from 'react'

function BenefitSection() {
  return (
    <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Essential Benefits of Compliance</h2>
              <p className="text-gray-300 mb-10 text-lg">Achieving TISAX compliance gain immediate credibility within the global automotive network, unlocking lucrative partnership opportunities.</p>
              <div className="grid gap-6">
                {[
                  { t: "Supply Chain Integration", d: "Protects sensitive information and IP across the entire automotive partner network." },
                  { t: "Operational Efficiency", d: "Streamlines security assessments, reducing the need for redundant audits." },
                  { t: "Market Credibility", d: "Builds high levels of trust by adhering to a respected industry security standard." },
                  { t: "Risk Mitigation", d: "Proactively identify and address vulnerabilities before they lead to breaches." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brandPrimary/20 rounded-xl border border-white/5">
                    <ShieldCheck className="text-brandAccent shrink-0" />
                    <div>
                      <h5 className="font-bold text-brandGold">{benefit.t}</h5>
                      <p className="text-sm text-gray-400">{benefit.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
                <div className="relative p-12 bg-surfaceDark rounded-[3rem] border border-brandAccent/20">
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-brandAccent rounded-full flex items-center justify-center">
                        <Car className="text-brandDark" size={32} />
                    </div>
                    <h3 className="text-6xl font-black text-brandAccent/10 absolute bottom-10 right-10">TISAX</h3>
                    <p className="font-heading text-2xl font-light italic leading-relaxed relative z-10">
                        "Secure your position in the automotive supply chain with industry-mandated security assessment exchanges and rigorous audits."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BenefitSection