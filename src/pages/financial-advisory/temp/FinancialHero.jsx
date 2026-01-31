import React from 'react';

const FinancialHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brandDark transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Corporate Building" 
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto py-16 md:py-24 lg:py-32 px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brandAccent uppercase bg-brandAccent/10 rounded-full">
              RiskMan Consulting
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Secure your <span className="text-brandGold">financial future</span> and mitigate risk
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Our Financial Advisory Services provide guidance to corporates and business entities to navigate funding sources, 
              optimise borrowings, and adopt actionable financial strategies including capex management.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brandAccent hover:bg-brandGold text-brandDark font-bold rounded-lg transition-all duration-300 shadow-lg shadow-brandAccent/20">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                Our Accomplishments
              </button>
            </div>
          </div>

          {/* Key Value Propositions Box */}
          <div className="lg:col-span-5">
            <div className="bg-surfaceDark/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 relative">
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-brandAccent mr-3"></span>
                Why Choose Us
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Industry expertise",
                  "Independent Assessment",
                  "Customised strategy",
                  "End-to-end advisory",
                  "Strong ring fencing"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-200 font-sans font-medium">
                    <svg className="w-5 h-5 mr-3 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 italic">
                  "Delivering meaningful solutions for M&A, divestments, and project expansions."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialHero;