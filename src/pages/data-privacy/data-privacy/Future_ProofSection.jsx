import { Database, Zap, ArrowRight } from 'lucide-react'
import React from 'react'
import futureBg from '../../../assets/images/data-privacy/data-privacy/future-proof-bg.jpg'
import { useNavigate } from 'react-router-dom'

function FutureProofSection() {
  const navigator=useNavigate()
  return (
     <section className="py-14 md:py-20 transition-colors duration-300 bg-white dark:bg-bgDark">
        <div className="container px-6 lg:px-12 mx-auto">
          <div className="bg-brandLight dark:bg-surfaceDark rounded-[3rem] p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
              
              {/* Content */}
              <div className="relative z-10 lg:w-1/2">
                <div className="inline-block px-4 py-1 mb-6 border rounded-full border-brandPrimary/20 bg-white/50 dark:bg-white/5">
                  <span className="text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Strategic Advantage</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight font-heading lg:text-5xl text-brandDark dark:text-white">
                  Future-Proof Your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Data Strategy</span>
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Don't just react to regulations. Proactively build a privacy-first architecture that scales with your business. Contact RiskMan today to elevate your privacy program from a cost center to a strategic business enabler.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button onClick={()=>navigator("/contact")} className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all shadow-xl bg-brandPrimary rounded-xl hover:bg-brandNavy dark:hover:bg-brandAccent dark:hover:text-brandDark group">
                    Schedule Consultation <Zap size={20} className="text-brandAccent dark:text-brandDark group-hover:fill-current" />
                  </button>
                  <button className="flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold transition-all border rounded-xl text-brandDark dark:text-white border-borderLight dark:border-borderDark hover:bg-white dark:hover:bg-white/5">
                    View Case Studies <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative lg:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={futureBg} 
                    alt="Future Data Strategy" 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-brandPrimary/20 mix-blend-multiply" />
                  
                  {/* Floating Badge */}
                  <div className="absolute p-4 border shadow-lg bottom-6 right-6 bg-white/90 dark:bg-brandDark/90 backdrop-blur-md rounded-xl border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-brandDark dark:text-white">System Active</span>
                    </div>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -top-10 -left-10 w-full h-full border-2 border-brandAccent/30 rounded-[2.5rem] -z-10 transform -rotate-3" />
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default FutureProofSection