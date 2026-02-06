import React from 'react';

const WhyRiskManAndCTA = () => {
  const differentiators = [
    {
      icon: "🎯",
      title: "Integrated Expertise",
      description: "Deep ESG domain knowledge combined with financial reporting, internal controls, and risk management capabilities."
    },
    {
      icon: "🛠️",
      title: "Practical Implementation Focus",
      description: "Real-world implementation experience, not just advisory backgrounds."
    },
    {
      icon: "⚡",
      title: "Agility & Responsiveness",
      description: "Rapid response and adaptive execution without audit independence conflicts."
    },
    {
      icon: "💎",
      title: "Value-Oriented Delivery",
      description: "Enterprise-grade ESG at competitive economics through efficient global delivery."
    },
    {
      icon: "🤝",
      title: "Long-Term Partnership",
      description: "Success measured by client outcomes, building internal capabilities while providing ongoing support."
    }
  ];

  return (
    <>
      {/* Why RiskMan Section */}
      <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
                Why RiskMan
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
                RiskMan Consulting LLP brings a unique combination of capabilities that sets us apart in the ESG 
                consulting landscape
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-surfaceDark rounded-2xl p-8 shadow-lg border border-borderLight dark:border-borderDark hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl shadow-md bg-gradient-to-br from-brandPrimary to-brandNavy rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats/Proof Points */}
            <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
              <div className="p-6 text-center border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20 rounded-xl dark:border-blue-800">
                <div className="mb-2 text-4xl font-bold text-brandPrimary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
              </div>
              <div className="p-6 text-center border-2 border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl dark:border-green-800">
                <div className="mb-2 text-4xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ESG Projects</div>
              </div>
              <div className="p-6 text-center border-2 border-purple-200 bg-purple-50 dark:bg-purple-900/20 rounded-xl dark:border-purple-800">
                <div className="mb-2 text-4xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industries</div>
              </div>
              <div className="p-6 text-center border-2 border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-xl dark:border-orange-800">
                <div className="mb-2 text-4xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 192, 0, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255, 192, 0, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main CTA Content */}
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl font-heading">
              Begin Your ESG Transformation
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Whether you are establishing foundational ESG capabilities, advancing toward leading practice, or 
              navigating complex multi-jurisdictional requirements, RiskMan provides the strategic guidance, 
              practical expertise, and sustained support to achieve your sustainability objectives.
            </p>

            <div className="p-8 mb-12 border bg-white/10 backdrop-blur-md rounded-2xl border-white/20">
              <p className="text-lg leading-relaxed text-white">
                Our integrated approach—combining advisory excellence, implementation capability, and training-led 
                transformation—ensures that ESG becomes embedded in how your organization operates, not merely how it reports.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
              <button className="px-8 py-4 font-bold transition-all duration-300 rounded-lg shadow-xl bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 font-bold text-white transition-all duration-300 border-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/40 hover:scale-105">
                Download ESG Guide
              </button>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <p className="mb-2 text-2xl italic font-light md:text-3xl font-heading text-brandAccent">
                Let's build a sustainable future—together.
              </p>
              <div className="w-32 h-1 mx-auto mt-4 rounded-full bg-brandAccent"></div>
            </div>

            {/* Contact Info */}
            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                <div className="mb-3 text-3xl">📧</div>
                <h4 className="mb-2 font-semibold text-white">Email Us</h4>
                <p className="text-sm text-gray-200">esg@riskman.com</p>
              </div>
              <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                <div className="mb-3 text-3xl">📞</div>
                <h4 className="mb-2 font-semibold text-white">Call Us</h4>
                <p className="text-sm text-gray-200">+91 XXX XXX XXXX</p>
              </div>
              <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                <div className="mb-3 text-3xl">🌐</div>
                <h4 className="mb-2 font-semibold text-white">Visit Us</h4>
                <p className="text-sm text-gray-200">www.riskmanconsulting.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-brandDark border-white/10">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-white font-heading">RiskMan Consulting LLP</h3>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-400">Global ESG & Sustainability Practice</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 RiskMan Consulting LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WhyRiskManAndCTA;