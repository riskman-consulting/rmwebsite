import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTASection() {
    const navigator=useNavigate()
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="bg-brandDark rounded-[3rem] p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brandPrimary/20 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-bold font-heading lg:text-5xl">Strengthen Your European Footprint</h2>
                        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
                            Leverage RiskMan’s deep expertise to build a GDPR-compliant framework that enhances stakeholder trust and enables global data flows.
                        </p>
                        <button onClick={()=>navigator("/contact")} className="px-12 py-5 text-xl font-black transition-all transform rounded-md bg-brandAccent text-brandDark hover:bg-brandGold hover:-translate-y-1">
                            Secure Your GDPR Audit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection