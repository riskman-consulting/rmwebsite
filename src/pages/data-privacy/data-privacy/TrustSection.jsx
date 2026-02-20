import React from 'react'

function TrustSection() {
  return (
   <section className="py-14 md:py-20 border-y border-borderLight dark:border-borderDark bg-white dark:bg-surfaceDark transition-colors duration-300">
        <div className="container mx-auto px-6  lg:px-12">
          <p className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase mb-8">Trusted by industry leaders in</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['DPDP', 'GDPR', 'HIPAA', 'LGPD', 'CCPA'].map((item, i) => (
              <span key={i} className="font-heading font-black text-3xl lg:text-4xl tracking-widest text-brandDark dark:text-white hover:text-brandPrimary dark:hover:text-brandAccent cursor-default transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TrustSection