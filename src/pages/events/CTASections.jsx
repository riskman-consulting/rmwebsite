import React, { useState } from 'react';
import { Mail, Linkedin, ArrowRight, Calendar, MapPin, Flag, Shield, Users, Network } from 'lucide-react';

export default function CTASections() {
  const [email, setEmail] = useState('');

  const upcomingEvents = [
    {
      icon: Flag,
      iconBg: 'bg-teal-500',
      category: 'Conference',
      categoryColor: 'text-teal-400',
      title: 'IIA Global Conference 2025',
      date: 'March 2025',
      location: 'Mumbai, India'
    },
    {
      icon: Shield,
      iconBg: 'bg-blue-500',
      category: 'Summit',
      categoryColor: 'text-blue-400',
      title: 'Risk Management Summit',
      date: 'April 2025',
      location: 'Singapore'
    },
    {
      icon: Users,
      iconBg: 'bg-pink-500',
      category: 'Team Event',
      categoryColor: 'text-pink-400',
      title: 'Team Building Retreat',
      date: 'May 2025',
      location: 'Goa, India'
    },
    {
      icon: Network,
      iconBg: 'bg-orange-500',
      category: 'Networking',
      categoryColor: 'text-orange-400',
      title: 'Annual Client Appreciation',
      date: 'June 2025',
      location: 'Mumbai, India'
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container px-4 py-16 mx-auto md:py-20">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-teal-500/10 border-teal-400/30">
            <Calendar className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-semibold text-teal-400">What's Next</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Upcoming Events & Activities
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 md:text-xl">
            Stay connected with us and never miss an opportunity to be part of our journey
          </p>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="p-6 transition-all duration-300 border group bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-2xl hover:border-teal-400/50 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${event.iconBg} rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Category */}
                <span className={`inline-block text-sm font-semibold mb-3 ${event.categoryColor}`}>
                  {event.category}
                </span>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-teal-400">
                  {event.title}
                </h3>

                {/* Meta Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Stay Updated Section */}
          <div className="relative p-8 overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 md:p-10">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 bg-white/10 blur-2xl"></div>

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Mail className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                Stay Updated
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Subscribe to our newsletter and get the latest updates about our events, achievements, and opportunities.
              </p>

              {/* Email Input and Button */}
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 text-white transition-all duration-300 border-2 border-transparent placeholder-white/60 rounded-xl bg-white/20 backdrop-blur-sm focus:outline-none focus:border-white/40 focus:bg-white/25"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full px-6 py-4 font-semibold text-teal-600 transition-all duration-300 bg-white rounded-xl hover:bg-white/90 hover:scale-105"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Follow Our Journey Section */}
          <div className="p-8 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-3xl md:p-10 hover:border-slate-600">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-500 rounded-2xl">
              <Linkedin className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              Follow Our Journey
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              Connect with us on LinkedIn for real-time updates, behind-the-scenes moments, and professional insights.
            </p>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/riskman-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 mb-6 transition-all duration-300 border group bg-slate-800/50 border-slate-700 rounded-xl hover:border-blue-500/50 hover:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold text-white">Riskman Consulting</span>
              </div>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-400" />
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center transition-all duration-300 border bg-slate-800/30 border-slate-700 rounded-xl hover:border-blue-500/30">
                <div className="mb-1 text-2xl font-bold text-teal-400 md:text-3xl">
                  5K+
                </div>
                <div className="text-xs font-medium md:text-sm text-slate-400">
                  Followers
                </div>
              </div>
              <div className="p-4 text-center transition-all duration-300 border bg-slate-800/30 border-slate-700 rounded-xl hover:border-blue-500/30">
                <div className="mb-1 text-2xl font-bold md:text-3xl text-cyan-400">
                  200+
                </div>
                <div className="text-xs font-medium md:text-sm text-slate-400">
                  Posts
                </div>
              </div>
              <div className="p-4 text-center transition-all duration-300 border bg-slate-800/30 border-slate-700 rounded-xl hover:border-blue-500/30">
                <div className="mb-1 text-2xl font-bold text-blue-400 md:text-3xl">
                  50K+
                </div>
                <div className="text-xs font-medium md:text-sm text-slate-400">
                  Impressions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}