import React from 'react';

const WhyRiskManSection = () => {
  const differentiators = [
    {
      icon: '🎯',
      title: 'Integrated Expertise',
      description: 'Deep ESG domain knowledge combined with financial reporting, internal controls, and risk management capabilities.'
    },
    {
      icon: '🛠️',
      title: 'Practical Implementation',
      description: 'Real-world implementation experience, moving beyond theory to deliver operational sustainability results.'
    },
    {
      icon: '⚡',
      title: 'Agility & Responsiveness',
      description: 'Rapid response and adaptive execution models without the constraints of audit independence conflicts.'
    },
    {
      icon: '💎',
      title: 'Value-Oriented Delivery',
      description: 'Enterprise-grade ESG services at competitive economics through our efficient global delivery model.'
    }
  ];

  const stats = [
    { value: '250+', label: 'Engagements' },
    { value: '15+', label: 'Industries' },
    { value: 'Global', label: 'Delivery' },
    { value: 'End-to-End', label: 'Solutions' }
  ];

  return (
    <>
      <section className="py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
        <div className="container px-6 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col items-end justify-between gap-8 mb-20 text-center lg:text-left lg:flex-row">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
                The RiskMan Advantage
              </span>
              <h2 className="text-4xl font-black leading-tight uppercase font-heading text-brandDark dark:text-white lg:text-5xl">
                Why Global Leaders <br /> <span className="underline text-brandPrimary decoration-brandAccent underline-offset-8">Trust RiskMan</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-lg text-brandDark/60 dark:text-surfaceLight/60 lg:text-right">
              We bridge the gap between strategic sustainability ambition and operational execution excellence.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[32px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-8 text-3xl transition-colors duration-500 shadow-inner rounded-2xl bg-bgLight dark:bg-bgDark group-hover:bg-brandPrimary group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="mb-4 text-xl font-bold tracking-tight uppercase font-heading text-brandDark dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-brandDark/60 dark:text-surfaceLight/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Board */}
          <div className="bg-brandDark rounded-[40px] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-brandPrimary/10 blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="mb-2 text-4xl font-black transition-transform lg:text-5xl text-brandGold group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unified Professional Footer */}
      <footer className="pt-20 pb-10 border-t bg-brandDark border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-2xl font-black tracking-tighter text-white">
                RISK<span className="text-brandGold">MAN</span>
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                A global specialized advisory practice dedicated to transforming sustainability into a core driver of enterprise value.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="mb-6 text-xs font-black tracking-widest uppercase text-brandGold">Solutions</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li className="transition-colors cursor-pointer hover:text-white">ESG Strategy</li>
                <li className="transition-colors cursor-pointer hover:text-white">Climate Risk</li>
                <li className="transition-colors cursor-pointer hover:text-white">Reporting & Disclosure</li>
                <li className="transition-colors cursor-pointer hover:text-white">Internal Controls</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-xs font-black tracking-widest uppercase text-brandGold">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li className="transition-colors cursor-pointer hover:text-white">About Us</li>
                <li className="transition-colors cursor-pointer hover:text-white">Our Methodology</li>
                <li className="transition-colors cursor-pointer hover:text-white">Global Practice</li>
                <li className="transition-colors cursor-pointer hover:text-white">Contact</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-xs font-black tracking-widest uppercase text-brandGold">Global Reach</h4>
              <div className="p-4 border bg-white/5 rounded-2xl border-white/10">
                <p className="text-[10px] font-black uppercase text-white/30 mb-2">Practice Inquiries</p>
                <p className="mb-4 text-sm font-bold text-white">contact@riskman.com</p>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 transition-all rounded-lg cursor-pointer bg-white/5 text-white/40 hover:bg-brandGold hover:text-brandDark">in</div>
                  <div className="flex items-center justify-center w-8 h-8 transition-all rounded-lg cursor-pointer bg-white/5 text-white/40 hover:bg-brandGold hover:text-brandDark">X</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-white/5 md:flex-row">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[4px]">
              © {new Date().getFullYear()} RISKMAN CONSULTING LLP. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
              <span className="cursor-pointer hover:text-brandGold">Privacy Policy</span>
              <span className="cursor-pointer hover:text-brandGold">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WhyRiskManSection;