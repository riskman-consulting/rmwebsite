import React from 'react';

const WhyRiskManSection = () => {
  const differentiators = [
    {
      icon: '🎯',
      title: 'Integrated Expertise',
      description: 'Deep ESG domain knowledge combined with financial reporting, internal controls, and risk management capabilities.'
    },
    {
      icon: '🚀',
      title: 'Practical Implementation Focus',
      description: 'Real-world implementation experience, not just advisory backgrounds.'
    },
    {
      icon: '⚡',
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
    <>
      {/* Why RiskMan Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-bgLight dark:from-surfaceDark dark:to-bgDark">
        <div className="container">
          {/* Section Header */}
          <div className="mb-16 text-center lg:mb-20">
            <div className="relative inline-block mb-5">
              <span className="text-xs sm:text-sm font-bold text-brandPrimary dark:text-brandAccent tracking-[2px] uppercase">
                Our Difference
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-brandAccent" />
            </div>
            
            <h2 className="font-heading font-extrabold text-brandDark dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight tracking-tight mb-6">
              Why RiskMan
            </h2>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-500 bg-white border-l-4 shadow-lg group dark:bg-surfaceDark rounded-2xl hover:shadow-2xl hover:-translate-y-2 border-l-transparent hover:border-l-brandAccent"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 text-3xl transition-transform duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandNavy dark:to-brandPrimary rounded-2xl group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-brandDark dark:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="p-10 text-white bg-gradient-to-br from-brandDark to-brandNavy dark:from-brandNavy dark:to-surfaceDark rounded-3xl lg:p-14">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {[
                { stat: '50+', label: 'Global Clients' },
                { stat: '200+', label: 'ESG Projects Delivered' },
                { stat: '30+', label: 'Countries Covered' },
                { stat: '15+', label: 'Industry Sectors' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold lg:text-5xl text-brandAccent">
                    {item.stat}
                  </div>
                  <div className="text-sm lg:text-base text-white/90">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden lg:py-32 bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-brandAccent blur-3xl" />
          <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-brandGold blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-white/15 backdrop-blur-md border-white/20">
              <span className="text-2xl">🌱</span>
              <span className="text-sm font-semibold tracking-wider uppercase text-white/95">
                Ready to Transform
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white font-heading sm:text-4xl md:text-5xl lg:text-6xl">
              Begin Your ESG Transformation
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed sm:text-xl text-white/90">
              Whether you are establishing foundational ESG capabilities, advancing toward leading practice, or navigating complex multi-jurisdictional requirements, RiskMan provides the strategic guidance, practical expertise, and sustained support to achieve your sustainability objectives.
            </p>

            <p className="max-w-2xl mx-auto mb-12 text-base leading-relaxed sm:text-lg text-white/85">
              Our integrated approach—combining advisory excellence, implementation capability, and training-led transformation—ensures that ESG becomes embedded in how your organization operates, not merely how it reports.
            </p>

            {/* Tagline */}
            <p className="mb-12 font-serif text-2xl italic sm:text-3xl text-brandAccent">
              Let's build a sustainable future—together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center gap-3 px-10 py-5 text-lg font-bold transition-all duration-300 rounded-full shadow-xl group bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-2xl shadow-brandAccent/40">
                <span>Get Started Today</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 rounded-full hover:bg-white/15 border-white/60 hover:border-white hover:-translate-y-1">
                Schedule a Consultation
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 mt-16 border-t border-white/20">
              <p className="mb-4 text-sm text-white/70">
                RiskMan Consulting LLP | Global ESG & Sustainability Practice
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="mailto:esg@riskmanconsulting.com" className="flex items-center gap-2 transition-colors text-brandAccent hover:text-brandGold">
                  <span>📧</span>
                  <span>esg@riskmanconsulting.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 transition-colors text-brandAccent hover:text-brandGold">
                  <span>📞</span>
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="#" className="flex items-center gap-2 transition-colors text-brandAccent hover:text-brandGold">
                  <span>🌐</span>
                  <span>www.riskmanconsulting.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brandDark dark:bg-bgDark">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
            {/* Company Info */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white font-heading">
                RiskMan Consulting LLP
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Delivering enterprise-grade ESG programs that combine strategic vision with practical execution excellence across global markets.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                {['ESG Strategy', 'Climate Risk Management', 'Reporting & Disclosure', 'Governance Design', 'Internal Controls'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 transition-colors hover:text-brandAccent">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Connect</h4>
              <div className="flex gap-4">
                {['💼', '🔗', '🐦', '📘'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-lg bg-white/10 hover:bg-brandAccent hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-sm text-center text-gray-500 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} RiskMan Consulting LLP. All rights reserved.</p>
            <p className="mt-2">Sustainability & ESG Excellence | Global Practice</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WhyRiskManSection;