



import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import heroImg from "../../assets/images/tprm/hero-bg.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden text-white bg-brandDark">
      {/* Background Overlay with Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={heroImg}
          alt="Cyber Security Background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-4 py-24 mx-auto text-center sm:py-32 lg:py-40">
        <div className="mb-6 animate-float">
          <Shield className="w-16 h-16 text-brandAccent" />
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl font-heading">
          Audit-Ready <span className="text-brandAccent">Third-Party Risk Management</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-300 sm:text-xl">
          Build evidence-driven TPRM frameworks that satisfy regulators. We move beyond "checkbox compliance" to provide deep visibility into vendor lifecycles.
        </p>
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-300 transform border border-transparent rounded-md shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-300 border-2 border-white rounded-md hover:bg-white hover:text-brandDark"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Shape */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-bgLight">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
