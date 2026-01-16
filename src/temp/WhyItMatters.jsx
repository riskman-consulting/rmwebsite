
import React from 'react';
const WHY_IT_MATTERS = [
  {
    title: "Networking",
    description: "Connect with industry leaders and peers to share insights and build lasting professional relationships.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "Stay ahead of the curve with the latest audit technologies and methodologies.",
    icon: "🚀"
  },
  {
    title: "Certification",
    description: "Earn CPE credits and enhance your professional credentials with expert-led workshops.",
    icon: "🎓"
  },
  {
    title: "Strategy",
    description: "Learn how to align internal audit with organizational strategy for maximum impact.",
    icon: "🎯"
  }
];

const WhyItMatters = () => {
  return (
    <section id="why-it-matters" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Why It Matters</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Empowering the Audit Community
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Our events are more than just meetings—they are catalysts for professional growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_IT_MATTERS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-3xl flex items-center justify-center rounded-xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-blue-500/20">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your career?</h3>
            <p className="text-blue-100 text-lg opacity-90">Join thousands of audit professionals in our upcoming gatherings.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
            See All Upcoming Dates
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
