import React from 'react'
import { fiduciaryGovernance } from './data'

function DataFiduciarySection() {
  return (
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Data Fiduciary Governance</h2>
            <p className="text-gray-600">Organizations must establish a clear hierarchy of accountability to manage personal data life cycles in accordance with the DPDP Act’s standards.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fiduciaryGovernance.map((item, idx) => (
              <div key={idx} className="p-8 border border-borderLight rounded-2xl bg-surfaceLight hover:shadow-xl transition-all">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default DataFiduciarySection