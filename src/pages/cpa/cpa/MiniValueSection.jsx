import React from 'react'

function MiniValueSection() {
  return (
    <section className="py-12 bg-white border-y border-borderLight">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">US</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Standards Focused</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">H-F</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">High-Fidelity Assurance</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">RT</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Real-Time Insights</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-black text-brandPrimary">SG</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Sustainable Growth</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MiniValueSection