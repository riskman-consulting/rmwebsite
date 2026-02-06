import { Search, ShieldCheck, Users, Zap } from 'lucide-react'
import React from 'react'

function StrategicSection() {
  return (
    
     <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center lg:text-left">Why SOC Matters for Your Organization?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users />, text: "Strengthen customer and regulator confidence in your control environment." },
              { icon: <Search />, text: "Reduce dependency on customer audits and ad-hoc security reviews." },
              { icon: <ShieldCheck />, text: "Support board-level risk oversight with independent third-party assurance." },
              { icon: <Zap />, text: "Enable faster enterprise sales by meeting SOC requirements upfront." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-bgLight dark:bg-bgDark border border-borderLight dark:border-borderDark group hover:border-brandGold transition-colors">
                <div className="mb-4 text-brandPrimary dark:text-brandGold transition-transform group-hover:scale-110">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StrategicSection