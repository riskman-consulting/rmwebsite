import { ArrowRight } from 'lucide-react'
import React from 'react'

function CTASection() {
  return (
    <section className="py-14 md:py-20">
        <div className="px-6 lg:px-20">
          <div className="bg-brandPrimary rounded-[2rem] p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-brandAccent">
            <h2 className="mb-6 text-3xl font-bold font-heading lg:text-5xl">Secure Your Financial Integrity</h2>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-blue-100">
              Ensure your financial reporting stands up to the highest levels of professional and regulatory scrutiny.
            </p>
            <button className="flex items-center gap-3 px-12 py-5 mx-auto text-xl font-black transition-all rounded-md shadow-xl bg-brandAccent text-brandDark hover:bg-brandGold">
              Schedule An Audit Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTASection