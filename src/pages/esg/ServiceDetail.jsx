import React from 'react';

const ServiceDetails = () => {
  const serviceBenefits = [
    {
      icon: "📊",
      title: "ESG Strategy & Materiality",
      description: "Establish the strategic foundation for your ESG program through rigorous materiality analysis and stakeholder-informed prioritization.",
      offerings: [
        "Double materiality assessment (impact and financial)",
        "Stakeholder mapping and engagement design",
        "Peer benchmarking and best practice analysis",
        "SDG alignment and impact prioritization"
      ],
      color: "brandPrimary"
    },
    {
      icon: "🌡️",
      title: "Climate Risk & GHG Management",
      description: "Comprehensive climate program development from emissions measurement through decarbonization implementation.",
      offerings: [
        "GHG inventorization (Scope 1, 2, and 3)",
        "Climate risk assessment (TCFD-aligned)",
        "Science-Based Targets initiative (SBTi) support",
        "Net-zero strategy and decarbonization roadmaps"
      ],
      color: "brandNavy"
    },
    {
      icon: "📋",
      title: "ESG Reporting & Disclosure",
      description: "Navigate the complex reporting landscape with confidence through multi-framework disclosure support.",
      offerings: [
        "CSRD / ESRS compliance and reporting",
        "ISSB (IFRS S1/S2) implementation",
        "BRSR and regulatory compliance (India, US SEC)",
        "GRI and SASB standards alignment"
      ],
      color: "brandAccent"
    },
    {
      icon: "⚖️",
      title: "Governance & Internal Controls",
      description: "Build an institutional-grade ESG operating model with robust oversight and data integrity.",
      offerings: [
        "Board oversight and committee design",
        "ESG internal control framework development",
        "Data governance and assurance readiness",
        "Policy architecture and SOP development"
      ],
      color: "brandDark"
    }
  ];

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Core Capabilities
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-white text-4xl lg:text-5xl leading-tight mb-6 uppercase">
            Detailed Service <br /> <span className="text-brandPrimary underline decoration-brandAccent">Offerings</span>
          </h2>
          <p className="text-lg text-brandDark/70 dark:text-surfaceLight/70 font-sans leading-relaxed">
            We provide specialized technical expertise across the four pillars of modern 
            enterprise sustainability to ensure your organization meets global excellence standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {serviceBenefits.map((service, index) => (
            <div 
              key={index}
              className="group p-8 lg:p-10 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[32px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-bgLight dark:bg-bgDark flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="text-[10px] font-black tracking-widest text-brandPrimary/30 dark:text-brandGold/30 uppercase border-b border-current pb-1">
                  Capability {index + 1}
                </div>
              </div>

              <h3 className="font-heading font-bold text-2xl text-brandDark dark:text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-sm text-brandDark/60 dark:text-surfaceLight/60 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.offerings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brandAccent shrink-0" />
                    <span className="text-xs font-bold text-brandDark/80 dark:text-surfaceLight/80 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🛡️",
              title: "Assurance Readiness",
              benefit: "Internal controls aligned with global standards.",
              color: "border-brandPrimary"
            },
            {
              icon: "🤝",
              title: "Stakeholder Trust",
              benefit: "Enhanced investor confidence & employer brand.",
              color: "border-brandAccent"
            },
            {
              icon: "🌡️",
              title: "Climate Mitigation",
              benefit: "Science-aligned targets & scenario analysis.",
              color: "border-brandGold"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className={`p-6 border-l-4 bg-white dark:bg-surfaceDark shadow-lg rounded-r-2xl transition-all hover:translate-x-2 ${item.color}`}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="text-sm font-black text-brandDark dark:text-white uppercase mb-1">{item.title}</h4>
              <p className="text-[11px] text-brandDark/60 dark:text-surfaceLight/60 font-medium">{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;