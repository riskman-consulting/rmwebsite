import React from 'react'
import { complianceCards } from './data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import frameworkBg from '../../../assets/images/data-privacy/data-privacy/framework-bg.jpg'

function FrameworkSection() {
  return (
     <section className="py-24 bg-bgLight dark:bg-bgDark transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-block mb-4">
                <span className="text-brandPrimary dark:text-brandAccent font-bold tracking-widest uppercase text-sm">Comprehensive Coverage</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-brandDark dark:text-white leading-tight">
                Integrated Compliance <span className="text-brandPrimary dark:text-brandAccent">Frameworks</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                A unified approach to privacy, ensuring organizations remain resilient across multiple legal jurisdictions and evolving technological landscapes. We simplify the complex.
              </p>
              
              <div className="grid gap-6">
                {complianceCards.map((card, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent transition-all hover:shadow-xl group">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-brandLight dark:bg-brandNavy flex items-center justify-center text-brandPrimary dark:text-brandAccent group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-xl font-bold text-brandDark dark:text-white">{card.title}</h3>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brandPrimary bg-brandPrimary/10 px-2 py-1 rounded-full">{card.tag}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{card.desc}</p>
                      <button className="flex items-center gap-2 text-brandPrimary dark:text-brandAccent font-bold text-sm hover:gap-3 transition-all">
                        LEARN MORE <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-surfaceDark">
                <img 
                  src={frameworkBg} 
                  alt="Compliance Framework" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="text-brandAccent" />
                    <span className="font-bold">Audit Ready</span>
                  </div>
                  <p className="text-sm text-gray-200">Our frameworks are designed to withstand rigorous regulatory scrutiny.</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandAccent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brandPrimary/20 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>
  )
}

export default FrameworkSection