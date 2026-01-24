import React from 'react';
import { Bell, Shield, Building2, Lightbulb, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function JourneyTimeline() {
  const timelineItems = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'He began his professional journey with RiskMan as an Article Assistant, working closely with the founding leadership and gaining early exposure to practical risk and audit engagements. Under the guidance of Arpit Sir and other partners, he developed a structured and business-aligned approach to risk management.',
      icon: Bell,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      achievements: [
        'Started as Article Assistant',
        'Learned business-oriented risk solutions',
        'Mentorship from founding partners'
      ],
      position: 'left'
    },
    {
      year: '2020-2021',
      title: 'Navigating Uncertainty',
      description: 'Even during the uncertainty of the COVID-19 pandemic, RiskMan\'s continued operations provided a strong foundation for learning, resilience, and professional discipline. This phase strengthened his adaptability and reinforced the importance of ownership and discipline in professional life.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=800&q=80',
      achievements: [
        'Adapted to remote work',
        'Developed ownership mindset',
        'Strengthened discipline and resilience'
      ],
      position: 'right'
    },
    {
      year: '2021-2023',
      title: 'Building Expertise',
      description: 'He worked across diverse industries including Quick Commerce, Digital Media, Insurance, Manufacturing, Pharmaceuticals, IT, FMCG, and Alco-Bev. His client portfolio includes leading organizations such as Zomato, Blinkit, Feeding India, CARE Health Insurance, Pernod Ricard, TG Minda, Emami, Tirupati Medicare, Granules, and others.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      achievements: [
        '10+ industries covered',
        '15+ major clients',
        'Internal & Concurrent Audit',
        'SOX & IFC engagements',
        'Digital transformation initiatives'
      ],
      position: 'left'
    },
    {
      year: '2023',
      title: 'Career Transition',
      description: 'After completing his article-ship, he transitioned into a Consultant role at RiskMan. Aligning his career goals with RiskMan\'s service focus, he pursued CIA and CISA certifications with full commitment and strategic career planning.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      achievements: [
        'Promoted to Consultant',
        'Career path alignment',
        'Started CIA & CISA preparation'
      ],
      position: 'right'
    },
    {
      year: '2025',
      title: 'Leadership & Growth',
      description: 'He qualified both CIA and CISA certifications and currently serves as a Manager, leading teams of over 10 professionals and managing multiple client engagements independently. His journey reflects continuous learning, trust, and professional growth.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      achievements: [
        'CIA & CISA qualified',
        'Promoted to Manager',
        'Leading 10+ team members',
        'Independent client management'
      ],
      position: 'left'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-bgLight">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-cyan-100 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 bg-teal-100 rounded-full w-96 h-96 blur-3xl opacity-30"></div>

      <div className="container relative z-10 px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Section Badge & Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-block px-6 py-2 mb-4 font-semibold rounded-full bg-cyan-100 text-cyan-600">
            Professional Journey
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl font-heading text-brandDark">
            Journey with RiskMan
          </h2>
          <p className="text-lg text-gray-600">
            A story of growth, learning, and leadership—from Article Assistant to Manager
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-7xl">
          {/* Central Timeline Line */}
          <div className="absolute hidden w-1 h-full transform -translate-x-1/2 lg:block left-1/2 bg-gradient-to-b from-cyan-300 via-teal-400 to-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.position === 'left';
              
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <div className={`${isLeft ? 'text-right pr-12' : 'col-start-2 pl-12'}`}>
                      <div className="inline-block px-4 py-1.5 bg-teal-500 text-white rounded-full font-bold text-sm mb-4">
                        {item.year}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark">
                        {item.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                      <ul className="mb-4 space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-teal-600 ${isLeft ? 'justify-end' : ''}`}>
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isLeft ? 'order-2' : ''}`} />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <button className={`group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors ${isLeft ? 'flex-row-reverse' : ''}`}>
                        View Details
                        <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isLeft ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Image Side */}
                    <div className={`${isLeft ? 'col-start-2 pl-12' : 'pr-12'}`}>
                      <div className="relative group">
                        <div className="absolute transition-opacity opacity-25 -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl group-hover:opacity-40 blur"></div>
                        <div className="relative overflow-hidden bg-white shadow-xl rounded-2xl">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="object-cover w-full h-64"
                          />
                          <div className="absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg top-4 right-4 bg-white/90 backdrop-blur-sm">
                            <Icon className="w-6 h-6 text-teal-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="overflow-hidden bg-white shadow-lg lg:hidden rounded-2xl">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="object-cover w-full h-48"
                      />
                      <div className="absolute top-4 left-4 px-4 py-1.5 bg-teal-500 text-white rounded-full font-bold text-sm">
                        {item.year}
                      </div>
                      <div className="absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg top-4 right-4 bg-white/90 backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark">
                        {item.title}
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                      <ul className="mb-4 space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-teal-600">
                            <CheckCircle2 className="flex-shrink-0 w-5 h-5" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="inline-flex items-center gap-2 font-semibold text-teal-600 transition-colors group hover:text-teal-700">
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute flex items-center justify-center hidden w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full shadow-lg lg:block left-1/2 top-1/2 bg-gradient-to-br from-teal-400 to-cyan-500">
                    <Icon className="text-white w-7 h-7" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Industries & Clients Preview */}
        <div className="grid max-w-4xl gap-6 mx-auto mt-20 md:grid-cols-2">
          <div className="p-8 border bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border-cyan-100">
            <div className="flex items-center justify-center mb-4 bg-teal-500 w-14 h-14 rounded-xl">
              <Building2 className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark">
              Industries Covered
            </h3>
            <p className="text-gray-600">
              Quick Commerce, Digital Media, Insurance, Manufacturing, Pharmaceuticals, IT, FMCG, Alco-Bev, and more
            </p>
          </div>

          <div className="p-8 border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
            <div className="flex items-center justify-center mb-4 bg-orange-500 w-14 h-14 rounded-xl">
              <Users className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark">
              Major Clients
            </h3>
            <p className="text-gray-600">
              Zomato, Blinkit, Feeding India, CARE Health Insurance, Pernod Ricard, TG Minda, Emami, and others
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}