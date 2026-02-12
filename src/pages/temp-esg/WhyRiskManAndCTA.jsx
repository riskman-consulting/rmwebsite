import React from 'react';

const WhyRiskManAndCTA = () => {
  const differentiators = [
    {
      icon: '🎯',
      title: 'Integrated Expertise',
      description: 'Deep ESG domain knowledge combined with financial reporting, internal controls, and risk management capabilities.'
    },
    {
      icon: '⚡',
      title: 'Practical Implementation Focus',
      description: 'Real-world implementation experience, not just advisory backgrounds.'
    },
    {
      icon: '🚀',
      title: 'Agility & Responsiveness',
      description: 'Rapid response and adaptive execution without audit independence conflicts.'
    },
    {
      icon: '💎',
      title: 'Value-Oriented Delivery',
      description: 'Enterprise-grade ESG at competitive economics through efficient global delivery.'
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description: 'Success measured by client outcomes, building internal capabilities while providing ongoing support.'
    }
  ];

  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        {/* Why RiskMan Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="mb-12 text-4xl font-bold text-center font-heading md:text-5xl text-brandDark dark:text-white">
            Why RiskMan
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-bgDark rounded-xl hover:shadow-2xl hover:-translate-y-1 border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden shadow-2xl bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy rounded-2xl">
            <div className="p-12 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl">
                Begin Your ESG Transformation
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-brandLight/90">
                Whether you are establishing foundational ESG capabilities, advancing toward leading practice, 
                or navigating complex multi-jurisdictional requirements, RiskMan provides the strategic guidance, 
                practical expertise, and sustained support to achieve your sustainability objectives.
              </p>

              <div className="p-6 mb-8 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                <p className="leading-relaxed text-brandLight">
                  Our integrated approach—combining advisory excellence, implementation capability, and training-led 
                  transformation—ensures that ESG becomes embedded in how your organization operates, not merely how it reports.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row">
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark rounded-xl hover:shadow-xl hover:scale-105"
                >
                  <span>Start Your Journey</span>
                  <span>→</span>
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 bg-white/10 hover:bg-white/20 rounded-xl border-white/30 hover:border-white/50 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="text-2xl italic text-brandAccent font-heading">
                  Let's build a sustainable future—together.
                </p>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="p-6 border-t bg-brandDark/50 backdrop-blur-sm border-white/10">
              <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '100+', label: 'Global Clients' },
                  { value: '50+', label: 'Countries Served' },
                  { value: '500+', label: 'Projects Delivered' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="mb-2 text-3xl font-bold md:text-4xl text-brandAccent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brandLight/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="p-8 bg-white border shadow-lg dark:bg-bgDark rounded-xl border-borderLight dark:border-borderDark">
            <h3 className="mb-6 text-2xl font-bold font-heading text-brandDark dark:text-white">
              Ready to Transform Your ESG Journey?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-2xl">📧</span>
                <a 
                  href="mailto:esg@riskmanconsulting.com" 
                  className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent"
                >
                  esg@riskmanconsulting.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-2xl">🌐</span>
                <a 
                  href="https://www.riskmanconsulting.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brandPrimary dark:hover:text-brandAccent"
                >
                  www.riskmanconsulting.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-2xl">📱</span>
                <span>Connect on LinkedIn</span>
              </div>
            </div>

            {/* <div className="pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong className="text-brandDark dark:text-white">RiskMan Consulting LLP</strong>
                <br />
                Global ESG & Sustainability Practice
                <br />
                Trusted advisors to leading organizations worldwide
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRiskManAndCTA;