import React from 'react';
import { Lightbulb, Users, Briefcase, Award, Target, Sparkles, TrendingUp, Heart } from 'lucide-react';

export default function CultureSection() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Learning & Ownership',
      description: 'An environment where learning and ownership go hand in hand. Team members are encouraged to take responsibility while receiving consistent guidance from leadership.',
      color: 'from-cyan-500 to-teal-500',
      borderColor: 'border-t-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaborative & Supportive',
      description: 'The culture is collaborative with approachable seniors and partners. Strong emphasis on mentoring, knowledge sharing, and constructive feedback focused on quality improvement.',
      color: 'from-orange-500 to-amber-500',
      borderColor: 'border-t-orange-500'
    },
    {
      icon: Briefcase,
      title: 'Practical Approach',
      description: 'Focus on practical risk management with exposure to diverse industries and real business challenges. Understanding how risk, processes, and technology operate in actual business environments.',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-t-purple-500'
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Values discipline, accountability, and adaptability while working in dynamic client settings. Recognizes effort and celebrates team achievements, creating a positive and motivating work environment.',
      color: 'from-teal-500 to-emerald-500',
      borderColor: 'border-t-teal-500'
    }
  ];

  const additionalValues = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: 'Innovation Driven',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-6 py-2 mb-4 font-semibold text-orange-600 bg-orange-100 rounded-full">
            Our Culture
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl font-heading text-brandDark">
            Culture at RiskMan
          </h2>
          <p className="text-lg text-gray-600">
            A culture that has played a significant role in professional growth and helped shape confident, responsible professionals
          </p>
        </div>

        {/* Main Culture Cards Grid */}
        <div className="grid gap-6 mx-auto mb-12 md:grid-cols-2 max-w-7xl">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 ${value.borderColor} hover:-translate-y-1`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Values - Smaller Cards */}
        <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto lg:grid-cols-4">
          {additionalValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-6 transition-all duration-300 border border-gray-200 group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-3`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-lg font-semibold text-brandDark">
                  {value.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Key Achievements Stats */}
        <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto mt-16 lg:grid-cols-4">
          <div className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100">
              <Target className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="mb-2 text-4xl font-bold text-brandDark">5 Years</div>
            <div className="font-medium text-gray-600">With RiskMan</div>
          </div>

          <div className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <div className="mb-2 text-4xl font-bold text-brandDark">10+</div>
            <div className="font-medium text-gray-600">Team Members Led</div>
          </div>

          <div className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100">
              <Lightbulb className="w-8 h-8 text-cyan-500" />
            </div>
            <div className="mb-2 text-4xl font-bold text-brandDark">CIA & CISA</div>
            <div className="font-medium text-gray-600">Certifications</div>
          </div>

          <div className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
            <div className="mb-2 text-4xl font-bold text-brandDark">Manager</div>
            <div className="font-medium text-gray-600">Current Role</div>
          </div>
        </div>
      </div>
    </section>
  );
}