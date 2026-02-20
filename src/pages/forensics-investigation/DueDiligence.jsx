import React from 'react';
import { ArrowRight } from 'lucide-react';

const DueDiligenceSection = () => {
  const mapImage = "https://public.youware.com/users-website-assets/prod/9ff22b8d-6a23-4340-a80f-898c8b5c261b/262fe200a8374e1c8b14894806e4aa38";
  const meetingImage = "https://public.youware.com/users-website-assets/prod/9ff22b8d-6a23-4340-a80f-898c8b5c261b/a9656aa2eba0444fb08510fcf112790c";
  const fraudImage = "https://public.youware.com/users-website-assets/prod/9ff22b8d-6a23-4340-a80f-898c8b5c261b/a2c5f9ff022442b99be18037b98347f4";

  return (
    <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandNavy dark:text-white">
            Integrity Due Diligence and Compliance
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We help Organizations navigate complex regulatory landscapes by providing deep insights into partners, vendors, and high-value transactions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { 
              title: "Background Intelligence", 
              desc: "Comprehensive screening of entities and individuals to highlight red flags before they manifest as liabilities.",
              image: mapImage
            },
            { 
              title: "Regulatory Compliance", 
              desc: "Assessing internal controls against global standards to prevent bribery, corruption, and statutory violations.",
              image: meetingImage
            },
            { 
              title: "Litigation Support", 
              desc: "Providing expert testimony and detailed forensic reporting to bolster legal positions in commercial disputes.",
              image: fraudImage
            }
          ].map((card, idx) => (
            <div key={idx} className="flex flex-col overflow-hidden transition-all duration-300 bg-white border shadow-lg group dark:bg-bgDark rounded-2xl hover:shadow-2xl border-borderLight dark:border-borderDark">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 z-10 transition-colors bg-brandNavy/20 group-hover:bg-transparent"></div>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1 p-8">
                <h3 className="mb-3 text-xl font-bold transition-colors text-brandNavy dark:text-white group-hover:text-brandGold">
                  {card.title}
                </h3>
                <p className="flex-1 mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {card.desc}
                </p>
                <a href="#" className="inline-flex items-center mt-auto text-sm font-semibold text-brandPrimary dark:text-brandGold hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DueDiligenceSection;
