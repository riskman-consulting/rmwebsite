import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Building2, Globe, Flag, Users, FileCheck } from 'lucide-react';

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const impactStats = [
    {
      icon: Trophy,
      number: '5',
      label: 'Years of Excellence',
      color: 'bg-gradient-to-br from-orange-400 to-orange-500',
      countUp: false
    },
    {
      icon: Building2,
      number: '150',
      suffix: '+',
      label: 'Clients Served',
      color: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
      countUp: true
    },
    {
      icon: Globe,
      number: '4',
      label: 'Countries Reached',
      color: 'bg-gradient-to-br from-blue-400 to-blue-500',
      countUp: false
    },
    {
      icon: Flag,
      number: '25',
      suffix: '+',
      label: 'Conference Presentations',
      color: 'bg-gradient-to-br from-purple-400 to-purple-500',
      countUp: true
    },
    {
      icon: Users,
      number: '50',
      suffix: '+',
      label: 'Team Members',
      color: 'bg-gradient-to-br from-pink-400 to-pink-500',
      countUp: true
    },
    {
      icon: FileCheck,
      number: '500',
      suffix: '+',
      label: 'Projects Completed',
      color: 'bg-gradient-to-br from-indigo-400 to-indigo-500',
      countUp: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ target, suffix = '', countUp }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible || !countUp) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, target, countUp]);

    return (
      <span>
        {countUp ? count : target}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-bgLight to-white">
      <div className="container px-5 mx-auto sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl font-heading text-brandDark">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600">
            Five years of dedication, growth, and excellence in risk management and consulting services
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {/* Icon */}
                <div className="inline-flex mb-6">
                  <div className={`${stat.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-3 text-5xl font-bold sm:text-6xl text-brandDark font-heading">
                  <AnimatedNumber 
                    target={parseInt(stat.number)} 
                    suffix={stat.suffix || ''} 
                    countUp={stat.countUp}
                  />
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}