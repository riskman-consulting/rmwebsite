      
      
      import { Settings, TrendingUp, Zap } from 'lucide-react'
import React from 'react'
      
      function ImprovementSection() {
        return (
          <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Continuous Improvement Frameworks</h2>
        
        
        <p className="text-gray-600">Quality is not a destination; we help build a culture of perpetual refinement and innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Root Cause Analysis", d: "Digging deep into failures to prevent recurrence across the enterprise.", icon: <Settings /> },
              { t: "Efficiency Optimization", d: "Removing waste while maintaining high performance standards.", icon: <Zap /> },
              { t: "Agility Testing", d: "Ensuring quality remains high even during periods of rapid scaling.", icon: <TrendingUp /> }
            ].map((framework, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {framework.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{framework.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{framework.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        )
      }
      
      export default ImprovementSection
      
      
      