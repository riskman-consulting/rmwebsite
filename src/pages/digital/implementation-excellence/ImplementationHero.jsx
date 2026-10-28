import React from 'react';
import { Link } from 'react-router-dom';

import bg from "../../../assets/images/digital/implementation.png";

const ImplementationHero = () => {
    return (

        <section
              className="relative py-20 bg-center bg-cover lg:py-28"
              style={{ backgroundImage: `url(${bg})` }}
            >
              {/* layered gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40"></div>
        
              {/* subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
              <div className="container relative">
                <div className="max-w-3xl p-8 border shadow-2xl rounded-2xl bg-white/10 backdrop-blur-md border-white/20">

                  <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white border rounded-full bg-white/15 backdrop-blur border-white/20">
                    Digital Transformation
                  </div>
                  
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white font-heading md:text-5xl lg:text-6xl">
                    Accelerating Value Realization with{" "}
                    <span className="text-brandGold">
                      Implementation Excellence
                    </span>
                  </h1>
        
                  <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
                    RiskMan delivers implementation excellence through rigorous tool
                    optimization, process re-engineering, and structured data migration
                    frameworks to ensure your digital transformation succeeds.
                  </p>
        
                  <div className="flex flex-wrap gap-5">
                    <Link to="/contact" className="px-8 py-4 font-semibold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1">
                      Book a Consultation
                    </Link>
        
                    <Link to="/services" className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black">
                      Our Other Services
                    </Link>
                  </div>
        
                </div>
              </div>
            </section>
        
    );
};

export default ImplementationHero;
