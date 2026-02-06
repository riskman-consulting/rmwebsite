// SecurityControls.jsx
import React from 'react';

const SecurityControls = () => {
  return (
    <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/20 to-brandAccent/20 rounded-2xl blur-2xl"></div>
              
              {/* Main Visual Card */}
              <div className="relative p-8 shadow-2xl bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandNavy dark:to-brandDark rounded-2xl">
                <div className="space-y-4">
                  {/* Security Metrics */}
                  <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-white">Encryption Status</span>
                      <span className="font-bold text-brandAccent">Active</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/20">
                      <div className="h-2 rounded-full bg-brandAccent" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-white">Patch Management</span>
                      <span className="font-bold text-brandAccent">98%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/20">
                      <div className="h-2 rounded-full bg-brandAccent" style={{ width: '98%' }}></div>
                    </div>
                  </div>

                  <div className="p-6 border bg-white/10 backdrop-blur-sm rounded-xl border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-white">Incident Response</span>
                      <span className="font-bold text-brandAccent">Ready</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/20">
                      <div className="h-2 rounded-full bg-brandAccent" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <svg className="w-8 h-8 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-bold text-white">Enterprise-Grade Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
              Advanced Information Security and Cyber Risk Controls
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Cyber threats often enter through the supply chain. We assess vendor incident response capabilities and evaluate encryption controls for data at rest and in transit. Our audits review patch management and vulnerability practices to ensure your data remains secure within the vendor's ecosystem.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Vendor incident response assessment',
                'Encryption control evaluation',
                'Patch management review',
                'Vulnerability practice audit',
                'Supply chain threat analysis',
                'Data security validation'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brandAccent rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-brandDark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityControls;