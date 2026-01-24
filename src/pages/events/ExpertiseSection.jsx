import React from 'react';
import { Building2, Briefcase, FileText, Building, Shield, Monitor, Settings, DollarSign } from 'lucide-react';

export default function ExpertiseSection() {
  const industries = [
    'Quick Commerce',
    'Digital & News Media',
    'Insurance',
    'Textile',
    'Automobile',
    'Pharmaceuticals',
    'IT',
    'Ed-tech',
    'FMCG',
    'Alco-Bev'
  ];

  const clients = [
    'Zomato',
    'Blinkit',
    'Feeding India',
    'CARE Health Insurance',
    'Schoolnet',
    'Pernod Ricard',
    'TG Minda',
    'HP Maxico',
    'Emami',
    'Tirupati Medicare',
    'Daido',
    'Granules'
  ];

  const expertiseAreas = [
    {
      icon: FileText,
      title: 'Internal Audit',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Building,
      title: 'Concurrent Audit',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: DollarSign,
      title: 'Transaction Audits',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'IFC & SOX Testing',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Monitor,
      title: 'Digital Transformation',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Settings,
      title: 'BRD & UAT Execution',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bgLight to-white">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Industries & Clients Grid */}
        <div className="grid gap-8 mx-auto mb-20 lg:grid-cols-2 max-w-7xl">
          
          {/* Industries Covered */}
          <div className="p-8 border shadow-lg bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl border-cyan-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center shadow-lg w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl">
                <Building2 className="text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-brandDark">
                Industries Covered
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-teal-100 rounded-full shadow-sm hover:shadow-md hover:scale-105"
                >
                  {industry}
                </span>
              ))}
            </div>
            
            <div className="text-xl font-bold text-teal-600">
              10+ Industries
            </div>
          </div>

          {/* Major Clients */}
          <div className="p-8 border border-orange-100 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center shadow-lg w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl">
                <Briefcase className="text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-brandDark">
                Major Clients
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {clients.map((client, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-orange-100 rounded-full shadow-sm hover:shadow-md hover:scale-105"
                >
                  {client}
                </span>
              ))}
            </div>
            
            <div className="text-xl font-bold text-orange-600">
              15+ Major Clients
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="p-8 mx-auto shadow-2xl bg-gradient-to-br from-brandDark to-brandNavy rounded-3xl sm:p-12 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl font-heading">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive experience across multiple audit and transformation domains
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-400/30 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white w-7 h-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-teal-300">
                      {area.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}