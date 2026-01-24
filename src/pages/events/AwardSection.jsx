import React from 'react';
import { Award, Trophy, Users, Globe, Lightbulb, Star, Medal, ArrowRight } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: 'Industry Excellence',
      description: 'Recognized for outstanding risk management solutions',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      icon: Users,
      title: 'Best Workplace',
      description: 'Top-rated consulting firm for employee satisfaction',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'International presence across 4 countries',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leader',
      description: 'Pioneering AI-driven audit methodologies',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Star,
      title: 'Client Excellence',
      description: '98% client satisfaction and retention rate',
      color: 'from-rose-500 to-red-600',
      bgColor: 'from-rose-50 to-red-50'
    },
    {
      icon: Medal,
      title: 'Thought Leadership',
      description: '25+ conference presentations and keynotes',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-gradient-to-br from-teal-500 to-teal-600">
            <Award className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl font-heading text-brandDark">
            Awards & Recognition
          </h2>
          
          <p className="text-lg text-gray-600">
            Celebrating excellence and achievements that define our journey
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed text-gray-600">
                  {award.description}
                </p>

                {/* Learn More Link */}
                <button className="inline-flex items-center gap-2 font-semibold text-teal-600 transition-colors group/link hover:text-teal-700">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Banner */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="p-8 shadow-2xl bg-gradient-to-br from-brandDark to-brandNavy rounded-3xl sm:p-12">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  98%
                </div>
                <div className="font-medium text-gray-300">
                  Client Satisfaction
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  25+
                </div>
                <div className="font-medium text-gray-300">
                  Industry Awards
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  150+
                </div>
                <div className="font-medium text-gray-300">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Timeline */}
        <div className="max-w-4xl p-8 mx-auto mt-16 border bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl sm:p-12 border-cyan-100">
          <h3 className="mb-8 text-3xl font-bold text-center font-heading text-brandDark">
            Recent Recognitions
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="mb-1 font-bold text-brandDark">Excellence in Risk Management - 2024</div>
                <div className="text-sm text-gray-600">Awarded by Institute of Internal Auditors</div>
              </div>
              <div className="text-sm font-semibold text-teal-600">2024</div>
            </div>

            <div className="flex items-start gap-4 p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="mb-1 font-bold text-brandDark">Best Place to Work - 2023</div>
                <div className="text-sm text-gray-600">Recognized for outstanding workplace culture</div>
              </div>
              <div className="text-sm font-semibold text-teal-600">2023</div>
            </div>

            <div className="flex items-start gap-4 p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="mb-1 font-bold text-brandDark">Innovation in Audit Technology - 2023</div>
                <div className="text-sm text-gray-600">For pioneering AI-driven methodologies</div>
              </div>
              <div className="text-sm font-semibold text-teal-600">2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}