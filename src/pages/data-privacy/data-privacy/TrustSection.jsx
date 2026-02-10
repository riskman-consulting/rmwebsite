import React from 'react'

function TrustSection() {
  return (
   <section className="py-12 border-y border-borderLight bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <span className="font-heading font-black text-2xl tracking-widest text-brandDark">DPDP</span>
            <span className="font-heading font-black text-2xl tracking-widest text-brandDark">GDPR</span>
            <span className="font-heading font-black text-2xl tracking-widest text-brandDark">HIPAA</span>
            <span className="font-heading font-black text-2xl tracking-widest text-brandDark">LGPD</span>
          </div>
        </div>
      </section>
  )
}

export default TrustSection