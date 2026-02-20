import React from 'react'
import { defenseSystem } from './data'
import { Eye, Lock } from 'lucide-react'

function DetectiveSection() {
  return (
        <section className="py-14 md:py-20 bg-brandNavy text-white">
        <div className="container px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-brandGold">Preventative & Detective Measures</h2>
            <p className="text-gray-300">Our dual-layered defense system protects institutional assets at every stage of the operational lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {defenseSystem.map((sys, i) => (
              <div key={i} className="p-10 bg-surfaceDark rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {i === 0 ? <Lock size={200} /> : <Eye size={200} />}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brandPrimary/20 rounded-lg flex items-center justify-center mb-6">
                    {sys.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{sys.title}</h3>
                  <p className="text-brandAccent text-sm font-medium mb-6 uppercase tracking-widest">{sys.type}</p>
                  <ul className="space-y-3">
                    {sys.items.map((li, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default DetectiveSection