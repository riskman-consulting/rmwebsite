import React, { useState } from 'react';
import { Globe, MapPin, Calendar, CheckCircle2,Users } from 'lucide-react';

export default function InternationalAssignments() {
  const [activeCountry, setActiveCountry] = useState('indonesia');

  const countries = {
    indonesia: {
      code: 'ID',
      name: 'Indonesia',
      city: 'Jakarta',
      period: '2022 - Present',
      description: 'Leading risk assessment and internal audit projects for major Indonesian corporations across manufacturing and financial sectors.',
      projects: '12+ Projects',
      consultants: '8 consultants deployed',
      projectsCount: 'Completed',
      consultantsLabel: 'On Ground',
      image: 'https://images.unsplash.com/photo-1555899434-94d1eb5b5a4f?w=800&q=80',
      highlights: []
    },
    vietnam: {
      code: 'VN',
      name: 'Vietnam',
      city: 'Ho Chi Minh City',
      period: '2022 - Present',
      description: 'Comprehensive internal audit services for Vietnamese enterprises with focus on operational efficiency and compliance.',
      projects: '15+ Projects',
      consultants: '10 consultants deployed',
      projectsCount: 'Completed',
      consultantsLabel: 'On Ground',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
      highlights: [
        'Operational audit excellence',
        'Supply chain risk management',
        'IT systems audit',
        'Regulatory compliance support'
      ]
    },
    myanmar: {
      code: 'MM',
      name: 'Myanmar',
      city: 'Yangon',
      period: '2022 - 2024',
      description: 'Strategic risk management consulting for emerging businesses navigating complex regulatory environments.',
      projects: '8+ Projects',
      consultants: '6 consultants deployed',
      projectsCount: 'Completed',
      consultantsLabel: 'On Ground',
      image: 'https://images.unsplash.com/photo-1552304664-7d2e8b9a4ec8?w=800&q=80',
      highlights: [
        'Risk framework development',
        'Compliance program setup',
        'Internal control systems',
        'Audit methodology training'
      ]
    },
    china: {
      code: 'CN',
      name: 'China',
      city: 'Shanghai',
      period: '2023 - Present',
      description: 'Advanced risk assurance services for multinational corporations operating in Chinese markets with complex regulatory requirements.',
      projects: '10+ Projects',
      consultants: '12 consultants deployed',
      projectsCount: 'Completed',
      consultantsLabel: 'On Ground',
      image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&q=80',
      highlights: [
        'Cross-border compliance',
        'Enterprise risk management',
        'Digital transformation audits',
        'Strategic advisory services'
      ]
    }
  };

  const currentCountry = countries[activeCountry];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-brandDark to-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-64 h-64 border border-teal-400 rounded-full top-20 left-20"></div>
        <div className="absolute border border-teal-400 rounded-full bottom-20 right-20 w-96 h-96"></div>
      </div>

      <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 font-semibold text-teal-400 border rounded-full bg-teal-500/20 border-teal-500/30">
            <Globe className="w-5 h-5" />
            Global Presence
          </div>
          
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-heading">
            International Assignments
          </h2>
          
          <p className="text-lg text-gray-300">
            Our team members have successfully delivered projects across Asia, bringing world-class expertise to diverse markets
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
          
          {/* Left Side - Country Info */}
          <div className="p-8 border bg-white/5 backdrop-blur-sm border-white/10 rounded-3xl">
            
            {/* Country Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {Object.entries(countries).map(([key, country]) => (
                <button
                  key={key}
                  onClick={() => setActiveCountry(key)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeCountry === key
                      ? 'bg-teal-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="font-bold">{country.code}</span>
                  <span>{country.name}</span>
                </button>
              ))}
            </div>

            {/* Country Details */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white font-heading">
                {currentCountry.name}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span>{currentCountry.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span>{currentCountry.period}</span>
                </div>
              </div>

              <p className="leading-relaxed text-gray-300">
                {currentCountry.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border bg-white/5 rounded-2xl border-teal-500/20">
                  <div className="mb-1 text-3xl font-bold text-teal-400">
                    {currentCountry.projects}
                  </div>
                  <div className="text-sm text-gray-400">{currentCountry.projectsCount}</div>
                </div>
                <div className="p-6 border bg-white/5 rounded-2xl border-teal-500/20">
                  <div className="mb-1 text-3xl font-bold text-teal-400">
                    {currentCountry.consultants}
                  </div>
                  <div className="text-sm text-gray-400">{currentCountry.consultantsLabel}</div>
                </div>
              </div>

              {/* Key Highlights - Only show if available */}
              {currentCountry.highlights.length > 0 && (
                <div className="pt-4 space-y-3">
                  <h4 className="text-xl font-semibold text-white">Key Highlights</h4>
                  <ul className="space-y-2">
                    {currentCountry.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Country Image */}
          <div className="relative overflow-hidden shadow-2xl rounded-3xl group">
            <img 
              src={currentCountry.image}
              alt={currentCountry.city}
              className="w-full h-full object-cover min-h-[500px] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent"></div>
            
            {/* City Label on Image */}
            <div className="absolute bottom-8 left-8">
              <div className="mb-2 text-6xl font-bold text-white/20">
                {currentCountry.code}
              </div>
              <div className="mb-1 text-3xl font-bold text-white font-heading">
                {currentCountry.city}
              </div>
              <div className="font-semibold text-teal-400">
                {currentCountry.name}
              </div>
            </div>
          </div>
        </div>

        {/* Global Team Excellence Banner */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 p-8 border bg-gradient-to-r from-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-teal-500/30 rounded-3xl lg:flex-row">
            
            {/* Left Side - Icon and Text */}
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full">
                <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="mb-1 text-2xl font-bold text-white font-heading">
                  Global Team Excellence
                </h3>
                <p className="text-gray-300">
                  36+ consultants deployed across 4 countries
                </p>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="flex items-center gap-4">
              <div className="px-8 py-4 text-center border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                <div className="mb-1 text-3xl font-bold text-teal-400">45+</div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="px-8 py-4 text-center border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                <div className="mb-1 text-3xl font-bold text-teal-400">4</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}