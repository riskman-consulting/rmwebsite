import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from "../../assets/images/rbia/rbia-heroImg.png"
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden text-white bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-32">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
              Mastering Risk, Empowering Success
            </h1>
            <p className="mb-8 text-lg leading-relaxed md:text-xl text-white/90">
              We deliver customized risk advisory solutions, creating enduring value through expert strategic partnerships and independent internal audit services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold transition-all duration-300 rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:shadow-xl hover:scale-105"
               >
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30"
              >
                Our Other Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Replace with your actual image */}
              <img 
                src={heroImg}
                alt="Risk-Based Internal Audit" 
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
              {/* If image doesn't exist, show placeholder */}
              <div className="absolute inset-0 flex items-center justify-center border-2 bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-brandAccent/20">
                    <svg className="w-12 h-12 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/70">Hero Image Placeholder</p>
                  <p className="mt-1 text-xs text-white/50">Replace with /images/rbia-hero.jpg</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute rounded-full -top-6 -right-6 w-72 h-72 bg-brandAccent/20 blur-3xl"></div>
            <div className="absolute rounded-full -bottom-6 -left-6 w-72 h-72 bg-brandGold/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;