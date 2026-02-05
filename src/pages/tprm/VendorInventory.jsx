// VendorInventory.jsx
import React from 'react';

const inventoryFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Centralized Inventory",
    description: "Includes all IT and non-IT for third-party service providers."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Data Scrutiny",
    description: "Identifies access to PII, sensitive, or confidential organizational data."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Tiering Methodology",
    description: "Vendors are classified based on documented, approved classification criteria."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Ownership",
    description: "Assigns a dedicated business owner to every third-party relationship."
  }
];

const VendorInventory = () => {
  return (
    <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
            Comprehensive Vendor Inventory and Classification
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            We establish a centralized inventory of all third parties, documenting data access types and system integrations. By applying a rigorous criticality methodology, we classify vendors from low to high risk to prioritize your oversight efforts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inventoryFeatures.map((feature, index) => (
            <div 
              key={index}
              className="relative p-6 transition-all duration-300 border-2 border-transparent group bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:border-brandAccent/50 hover:shadow-xl"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-br from-brandPrimary/0 to-brandAccent/0 group-hover:from-brandPrimary/5 group-hover:to-brandAccent/5 rounded-xl"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold rounded-xl group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorInventory;