import React from 'react';
import { Shield } from 'lucide-react';
import rbiaImg from "../../assets/images/rbia/rbia-risk-advisory.png"

const FrameworkSection = () => {
  return (
    <section className="py-16 text-white lg:py-24 bg-gradient-to-br from-brandPrimary to-brandNavy">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl">
              Our 'Risk-Based' Internal Audit Framework
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/90">
              Our Internal Audit services are supported by a consistent, substantially field tested 'risk-based' methodology derived from our experiences on multiple Internal audits and is consistent with the International Standards for the Professional Practice of Internal Auditing. Our methodology is linked to a number of supporting knowledge tools and databases. This methodology is aligned to our overarching methodology.
            </p>
          </div>
          
          {/* Framework Image - IMAGE 1 */}
          <div className="relative">
            {/* Replace with your actual framework diagram image */}
            <img 
              src={rbiaImg} 
              alt="Risk-Based Internal Audit Framework Diagram" 
              className="w-full h-auto shadow-2xl rounded-xl"
            />
            
            {/* Placeholder if image doesn't exist */}
            {/* <div className="absolute inset-0 flex items-center justify-center border-2 bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
              <div className="p-12 text-center">
                <Shield className="w-24 h-24 mx-auto mb-6 text-brandAccent" />
                <p className="mb-2 text-2xl font-semibold">Risk-Based Internal Audit Framework</p>
                <p className="mb-4 text-white/70">Comprehensive Methodology Diagram</p>
                <div className="inline-block px-6 py-3 rounded-lg bg-brandAccent/20">
                  <p className="text-sm text-white/90">IMAGE 1: Framework Diagram</p>
                  <p className="mt-1 text-xs text-white/70">Replace with /images/rbia-framework-diagram.jpg</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;