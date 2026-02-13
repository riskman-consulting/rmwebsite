import React from 'react';
import { FileText, Truck, Scale } from 'lucide-react';

const PolicyValueChain = () => {
  return (
    <section className="relative overflow-hidden transition-colors duration-300 py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Process Flow</h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Value Chain Management
            </h3>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              Our framework covers the entire spectrum of credit operations to prevent the deterioration of borrower creditworthiness and reporting.
            </p>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 text-white border-4 rounded-full shadow-lg bg-brandPrimary border-bgLight dark:border-bgDark">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Credit Origination & Processing</h4>
                  <p className="text-gray-600 dark:text-gray-400">Standardizing fundamental principles from initial inquiry to final decision.</p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 border-4 rounded-full shadow-lg bg-brandAccent text-brandDark border-bgLight dark:border-bgDark">
                  <Truck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Delivery & Management</h4>
                  <p className="text-gray-600 dark:text-gray-400">Streamlining credit enhancement and delivery for maximum operational efficiency.</p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="z-10 flex items-center justify-center flex-shrink-0 w-16 h-16 text-white border-4 rounded-full shadow-lg bg-brandDark border-bgLight dark:border-bgDark">
                  <Scale className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-brandDark dark:text-white">Prudent Exposure</h4>
                  <p className="text-gray-600 dark:text-gray-400">Maintaining total exposure at levels consistent with available capital.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border-8 border-white shadow-2xl rounded-2xl dark:border-gray-800">
              <img 
                src="https://pixabay.com/get/g4a7004523dd931ae1277088febcb15f6c1ce22d7f430f0d7a2ea3c68a29f16ab62df7ef43f75d13b95498cb3a235fe700a993d005452d5d2e8a18f31c2e1bfac_1280.jpg" 
                alt="Value Chain Process" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-brandAccent/10 blur-3xl"></div>
            <div className="absolute w-40 h-40 rounded-full -bottom-10 -left-10 bg-brandPrimary/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyValueChain;
