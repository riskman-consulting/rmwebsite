import { Fingerprint } from 'lucide-react'
import React from 'react'
import { digitalForensics } from './data'

function DigitalSection() {
  return (
     <section className="py-14 md:py-20 bg-brandNavy text-white">
        <div className="container px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Digital Forensics & Response</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">In an era of data-centric operations, our team secures critical evidence from digital environments to mitigate high-tech risks.</p>
              <div className="space-y-4">
                {digitalForensics.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-surfaceDark border border-white/5 rounded-xl hover:border-brandAccent transition-colors">
                    <div className="text-brandAccent shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 bg-gradient-to-br from-brandAccent/40 to-transparent rounded-[2.5rem]">
                <div className="bg-brandDark p-12 rounded-[2.4rem] text-center">
                  <Fingerprint size={80} className="text-brandAccent mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Evidence Preservation</h3>
                  <p className="text-gray-400 text-sm italic">"We maintain a strict chain of custody and follow international standards to ensure all digital findings are court-admissible."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DigitalSection