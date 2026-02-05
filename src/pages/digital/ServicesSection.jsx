import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`mb-24 lg:mb-32 ${index === 2 ? 'mb-0' : ''}`}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
          <div className={`relative h-80 lg:h-96 bg-gradient-to-br ${service.gradient} rounded-2xl overflow-hidden shadow-2xl group`}>
            <div className={`absolute inset-0 ${service.overlay} group-hover:bg-black/10 transition-all duration-500`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {service.icon}
            </div>
            <div className="absolute w-32 h-32 rounded-full -top-4 -right-4 bg-brandAccent/20 blur-2xl"></div>
            <div className="absolute w-32 h-32 rounded-full -bottom-4 -left-4 bg-brandGold/20 blur-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-brandPrimary/10">
            <span className="text-sm font-semibold text-brandPrimary">Service {String(index + 1).padStart(2, '0')}</span>
          </div>
          
          <h3 className="text-3xl font-bold font-heading lg:text-4xl text-brandDark">
            {service.title}
          </h3>
          
          <p className="text-lg leading-relaxed text-gray-600">
            {service.description}
          </p>

          <Link 
            to={service.link} 
            className="inline-flex items-center gap-2 font-semibold transition-colors duration-300 text-brandPrimary hover:text-brandAccent group"
          >
            Learn More
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {service.features.map((feature, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 text-sm border rounded-full bg-brandLight text-brandDark border-borderLight"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Strategic PMO',
      description: 'Establish rigorous governance and risk control across the entire project lifecycle to ensure milestone-driven success.',
      link: '/strategic-pmo',
      gradient: 'from-brandPrimary to-brandNavy',
      overlay: 'bg-black/20',
      features: ['Governance', 'Risk Control', 'Milestone Tracking'],
      icon: (
        <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      ),
    },
    {
      title: 'Implementation Excellence',
      description: 'Accelerate value realization through optimized digital tools, process re-engineering, and seamless data migration.',
      link: '/implementation-excellence',
      gradient: 'from-brandAccent to-brandGold',
      overlay: 'bg-black/10',
      features: ['Digital Tools', 'Process Re-engineering', 'Data Migration'],
      icon: (
        <svg className="w-24 h-24 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
    },
    {
      title: 'Support Services',
      description: 'Sustain long-term performance through structured change management, comprehensive user testing, and post-launch hypercare.',
      link: '/support-services',
      gradient: 'from-brandNavy to-brandDark',
      overlay: 'bg-black/20',
      features: ['Change Management', 'User Testing', 'Hypercare'],
      icon: (
        <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surfaceLight">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 max-w-[1280px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center lg:mb-24">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark">
            Explore Our Core Digital Transformation Offerings
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            RiskMan Consulting bridges the gap between strategy and execution through governance-led PMO, implementation excellence, and comprehensive support. The services we offer are the following:
          </p>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;