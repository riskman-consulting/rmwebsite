import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialHero = () => {
  const navigator=useNavigate();
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brandDark transition-colors duration-300 pt-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Corporate Building" 
          className="object-cover w-full h-full opacity-40 dark:opacity-30"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto py-14 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brandAccent uppercase bg-brandAccent/10 rounded-full">
              RiskMan Consulting
            </span>
            
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white font-heading md:text-4xl lg:text-5xl">
              Secure your <span className="text-brandGold">financial future</span> and mitigate risk
            </h1>
            
            <p className="max-w-2xl mb-8 font-sans text-lg leading-relaxed text-gray-300 md:text-xl">
              {/* Our Financial Advisory Services provide guidance to corporates and business entities to navigate funding sources, 
              optimise borrowings, and adopt actionable financial strategies including capex management. */}

              At RiskMan Consulting, our Financial Advisory Services are designed to provide guidances and advisories to corporates and other business entities to navigate funding sources, optimise borrowings and adopt actionable financial strategies including capex management.
              
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all duration-300 rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark shadow-brandAccent/20">
                Explore Solutions
              </button>
              <button className="px-8 py-4 font-bold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white/10">
                Our Accomplishments
              </button>
            </div>
          </div>

          {/* Key Value Propositions Box */}
          <div className="lg:col-span-5">
            <div className="relative p-8 border shadow-2xl bg-surfaceDark/80 backdrop-blur-md rounded-2xl border-white/10">
              <h3 className="flex items-center mb-6 text-xl font-bold text-white font-heading">
                <span className="w-8 h-1 mr-3 bg-brandAccent"></span>
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
                  <li key={index} className="flex items-center font-sans font-medium text-gray-200">
                    <svg className="w-5 h-5 mr-3 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 mt-8 border-t border-white/10">
                <p className="text-sm italic text-gray-400">
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