import { ArrowRight } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
    <section className="py-20">
        <div className="container">
          <div className="bg-brandPrimary rounded-[2rem] p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-brandAccent">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Secure Your Financial Integrity</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ensure your financial reporting stands up to the highest levels of professional and regulatory scrutiny.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl flex items-center gap-3 mx-auto">
              Schedule An Audit Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection