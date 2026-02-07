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
      <section className="py-24 bg-bgLight dark:bg-bgDark overflow-hidden">
        <div className="container">
          {/* Section Header */}
          <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
                The RiskMan Advantage
              </span>
              <h2 className="font-heading font-black text-brandDark dark:text-white text-4xl lg:text-5xl uppercase leading-tight">
                Why Global Leaders <br /> <span className="text-brandPrimary underline decoration-brandAccent underline-offset-8">Trust RiskMan</span>
              </h2>
            </div>
            <p className="text-lg text-brandDark/60 dark:text-surfaceLight/60 font-sans max-w-md lg:text-right">
              We bridge the gap between strategic sustainability ambition and operational execution excellence.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[32px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-bgLight dark:bg-bgDark flex items-center justify-center text-3xl mb-8 shadow-inner group-hover:bg-brandPrimary group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-xl text-brandDark dark:text-white mb-4 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-brandDark/60 dark:text-surfaceLight/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Board */}
          <div className="bg-brandDark rounded-[40px] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandPrimary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl lg:text-5xl font-black text-brandGold mb-2 group-hover:scale-110 transition-transform">
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
      <footer className="bg-brandDark pt-20 pb-10 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">
                RISK<span className="text-brandGold">MAN</span>
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                A global specialized advisory practice dedicated to transforming sustainability into a core driver of enterprise value.
              </p>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brandGold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">ESG Strategy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Climate Risk</li>
                <li className="hover:text-white transition-colors cursor-pointer">Reporting & Disclosure</li>
                <li className="hover:text-white transition-colors cursor-pointer">Internal Controls</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brandGold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Methodology</li>
                <li className="hover:text-white transition-colors cursor-pointer">Global Practice</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brandGold mb-6">Global Reach</h4>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-[10px] font-black uppercase text-white/30 mb-2">Practice Inquiries</p>
                <p className="text-sm font-bold text-white mb-4">contact@riskman.com</p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-brandGold hover:text-brandDark transition-all cursor-pointer">in</div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-brandGold hover:text-brandDark transition-all cursor-pointer">X</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[4px]">
              © {new Date().getFullYear()} RISKMAN CONSULTING LLP. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
              <span className="hover:text-brandGold cursor-pointer">Privacy Policy</span>
              <span className="hover:text-brandGold cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WhyRiskManSection;