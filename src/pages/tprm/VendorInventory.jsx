// // VendorInventory.jsx
// import React from 'react';

// const inventoryFeatures = [
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//       </svg>
//     ),
//     title: "Centralized Inventory",
//     description: "Includes all IT and non-IT for third-party service providers."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//       </svg>
//     ),
//     title: "Data Scrutiny",
//     description: "Identifies access to PII, sensitive, or confidential organizational data."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//       </svg>
//     ),
//     title: "Tiering Methodology",
//     description: "Vendors are classified based on documented, approved classification criteria."
//   },
//   {
//     icon: (
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg>
//     ),
//     title: "Ownership",
//     description: "Assigns a dedicated business owner to every third-party relationship."
//   }
// ];

// const VendorInventory = () => {
//   return (
//     <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             Comprehensive Vendor Inventory and Classification
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//             We establish a centralized inventory of all third parties, documenting data access types and system integrations. By applying a rigorous criticality methodology, we classify vendors from low to high risk to prioritize your oversight efforts.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {inventoryFeatures.map((feature, index) => (
//             <div 
//               key={index}
//               className="relative p-6 transition-all duration-300 border-2 border-transparent group bg-surfaceLight dark:bg-surfaceDark rounded-xl hover:border-brandAccent/50 hover:shadow-xl"
//             >
//               {/* Gradient Border Effect */}
//               <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-br from-brandPrimary/0 to-brandAccent/0 group-hover:from-brandPrimary/5 group-hover:to-brandAccent/5 rounded-xl"></div>
              
//               <div className="relative">
//                 {/* Icon */}
//                 <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition-transform duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold rounded-xl group-hover:scale-110">
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="leading-relaxed text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VendorInventory;



import React from 'react';
import { Database, ShieldAlert, Layers, UserCheck } from 'lucide-react';

const Inventory = () => {
  const features = [
    {
      icon: <Database className="w-10 h-10 text-brandAccent" />,
      title: "Centralized Inventory",
      description: "Includes all IT and non-IT for third-party service providers."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-brandAccent" />,
      title: "Data Scrutiny",
      description: "Identifies access to PII, sensitive, or confidential organizational data."
    },
    {
      icon: <Layers className="w-10 h-10 text-brandAccent" />,
      title: "Tiering Methodology",
      description: "Vendors are classified based on documented, approved classification criteria."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-brandAccent" />,
      title: "Ownership",
      description: "Assigns a dedicated business owner to every third-party relationship."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark">
            Comprehensive Vendor Inventory and Classification
          </h2>
          <p className="text-lg text-gray-600">
            We establish a centralized inventory of all third parties, documenting data access types and system integrations. By applying a rigorous criticality methodology, we classify vendors from low to high risk to prioritize your oversight efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-8 transition-all duration-300 transform border-t-4 shadow-lg bg-bgLight rounded-xl hover:shadow-2xl hover:-translate-y-2 border-brandNavy group">
              <div className="inline-block p-4 mb-6 transition-colors duration-300 bg-white rounded-full shadow-md group-hover:bg-brandNavy group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-brandDark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
