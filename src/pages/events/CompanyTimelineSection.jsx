import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Zap, Trophy, Award } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Riskman Consulting was founded with a vision to revolutionize risk management consulting across industries.',
      icon: <Target />,
      achievements: ['Founded in Mumbai', 'First 5 clients onboarded', 'Team of 8 passionate professionals']
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded operations and established ourselves as a trusted partner in the risk management space.',
      icon: <TrendingUp />,
      achievements: ['Expanded to 3 cities', 'Team grew to 20+', 'Launched first industry report']
    },
    {
      year: '2022',
      title: 'International Presence',
      description: 'Crossed borders and brought our expertise to international markets.',
      icon: <Globe />,
      achievements: ['Opened UAE office', 'Served clients in 4 countries', 'Won Industry Excellence Award']
    },
    {
      year: '2023',
      title: 'Innovation & Recognition',
      description: 'Launched innovative solutions and gained industry-wide recognition for our work.',
      icon: <Zap />,
      achievements: ['Launched AI-powered platform', 'Featured in top industry publications', 'Team reached 40+']
    },
    {
      year: '2024',
      title: 'Consolidation & Excellence',
      description: 'Strengthened our position as industry leaders with cutting-edge solutions and exceptional client service.',
      icon: <Trophy />,
      achievements: ['Top 10 Risk Consulting Firm', 'Served 100+ enterprise clients', 'Published 5 white papers']
    },
    {
      year: '2025',
      title: 'Five Years Strong',
      description: 'Celebrating five years of innovation, growth, and unwavering commitment to excellence.',
      icon: <Award />,
      achievements: ['50+ team members globally', '4 international offices', '200+ successful projects']
    }
  ];

  return (
    <section id="journey" className="py-32 bg-white dark:bg-[#001A33] transition-colors duration-500 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FFB800]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#003366]/10 dark:bg-[#FFC000]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-12">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.3em] mb-4 block">
              Our Story
            </span>
            <h2 className="mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
              <span className="text-[#001F3F] dark:text-white">Journey Through</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif">
                Five Remarkable Years
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[#001F3F]/60 dark:text-white/60 text-lg mx-auto italic">
              "Every milestone represents countless hours of dedication, innovation, and the collective effort of an incredible team"
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFB800] via-[#FFC000] to-[#FFB800] transform -translate-x-1/2 hidden lg:block"></div>

          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-[#000d1a] p-10 rounded-[2.5rem] shadow-xl border border-[#003366]/10 dark:border-[#FFC000]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#FFC000] rounded-2xl flex items-center justify-center text-[#001F3F] shadow-lg group-hover:scale-110 transition-transform">
                        {event.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-black text-[#FFB800]">{event.year}</div>
                        <div className="text-xs font-black text-[#001F3F]/40 dark:text-white/40 uppercase tracking-widest">Year {index + 1}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#001F3F] dark:text-white mb-4 tracking-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-[#001F3F]/70 dark:text-white/70 leading-relaxed mb-6 italic">
                      "{event.description}"
                    </p>
                    
                    <div className="space-y-3">
                      {event.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FFC000]"></div>
                          <span className="text-sm font-medium text-[#001F3F] dark:text-white/80">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative flex-shrink-0 hidden w-24 h-24 lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800] to-[#FFC000] rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white dark:bg-[#001A33] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#FFC000] rounded-full shadow-lg"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;