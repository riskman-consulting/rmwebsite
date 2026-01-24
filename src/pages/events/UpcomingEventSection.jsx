import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Filter, Tag } from 'lucide-react';

export default function UpcomingEvents() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const events = [
    {
      id: 1,
      title: "IIA Bombay Chapter International Conference 2026",
      date: "15 March 2026",
      year: "2026",
      location: "Mumbai, India",
      type: "International Conference",
      organizer: "The Institute of Internal Auditors (IIA) – Bombay Chapter",
      theme: "Future of Governance – Trends, Technologies & Talent",
      description: "A prestigious international conference focused on the future of governance, internal audit, and risk management featuring insightful discussions on risk assurance, digital transformation, AI in audit, ESG, and the evolving role of internal audit.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      status: "upcoming",
      highlights: [
        "Engagement with esteemed industry leaders and speakers",
        "Discussions on AI, digital transformation, ESG, and risk assurance",
        "Networking with auditors, professionals, partners, and delegates"
      ]
    },
    {
      id: 2,
      title: "Leadership & Team Alignment Meet – Kolkata",
      date: "December 2025",
      year: "2025",
      location: "Kolkata Office, India",
      type: "Internal Leadership Meet",
      description: "A leadership-driven team meet focused on collaboration, mentorship, and aligning people with purpose as 2025 draws to a close. The discussion focused on collaboration, mentorship, clarity of direction, and ownership & accountability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      status: "past",
      focusAreas: [
        "Collaboration and collective thinking",
        "Mentorship-driven leadership",
        "Clarity of direction and priorities",
        "Ownership and accountability"
      ]
    },
    {
      id: 3,
      title: "IIA Bombay Chapter",
      date: "5 March 2025",
      year: "2025",
      location: "Mumbai, India",
      type: "Chapter",
      description: "Focused conversations on strengthening audit excellence. The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 4,
      title: "IIA Hyderabad Chapter",
      date: "24 May 2025",
      year: "2025",
      location: "Hyderabad, India",
      type: "Chapter",
      description: "Insightful discussions on governance, risk, and internal audit excellence. We connected with audit professionals to exchange perspectives on governance and risk management.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 5,
      title: "IIA Bangalore Chapter",
      date: "19 Feb 2025",
      year: "2025",
      location: "Bangalore, India",
      type: "Chapter",
      description: "Exploring innovation and technology in modern internal auditing. Discussing innovation, digital transformation, and the future of internal auditing.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 6,
      title: "IIA Kolkata Chapter",
      date: "10 Feb 2025",
      year: "2025",
      location: "Kolkata, India",
      type: "Chapter",
      description: "Meaningful dialogue on governance and emerging audit trends. Professionals explored emerging trends in governance, compliance, and internal audit practices.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 7,
      title: "IIA Kolkata Chapter Annual Meet 2025",
      date: "2025",
      year: "2025",
      location: "Bhubaneswar Club, India",
      type: "Annual Meet",
      theme: "Insight • Oversight • Foresight",
      description: "A thought-leadership address focused on repositioning internal audit as a strategic enabler. The session presented a boardroom-ready narrative on transforming internal audit from traditional assurance into strategic enablement.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      status: "past",
      focusAreas: [
        "Data-driven risk intelligence",
        "Stronger governance and oversight",
        "Predictive risk sensing and technology leverage"
      ]
    },
    {
      id: 8,
      title: "IIA Hyderabad Annual Conference 2025",
      date: "2025",
      year: "2025",
      location: "ITC Kakatiya, Hyderabad",
      type: "Annual Conference",
      role: "Silver Sponsor",
      description: "RiskMan Consulting participated as Silver Sponsors engaging with audit and risk professionals. Featured panel discussion on 'Risks in Focus: Current, Emerging, and Future Risks' with focus on internal audit, ESG, and enterprise risk management.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      status: "past",
      highlights: [
        "Silver sponsorship by RiskMan Consulting",
        "Panel discussion on current, emerging, and future risks",
        "Engagement on internal audit, ESG, and enterprise risk management"
      ]
    },
    {
      id: 9,
      title: "Cybersecurity Risks & Internal Audit – IIA India International Conference 2025",
      date: "2025",
      year: "2025",
      location: "India",
      type: "International Conference",
      description: "A thought-provoking session highlighting critical cybersecurity risks for 2025 and the evolving role of internal auditors. The session emphasized endpoint security, auditor involvement in validating security controls, and adoption of standardized benchmarks.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      status: "past",
      keyTakeaways: [
        "Endpoint security is critical defense against cyber threats",
        "CIS Benchmarks provide standardized guidelines",
        "Proactive adoption strengthens cybersecurity posture"
      ]
    },
    {
      id: 10,
      title: "IIA India Bangalore Chapter Annual Conference 2025",
      date: "2025",
      year: "2025",
      location: "Bangalore, India",
      type: "Annual Conference",
      theme: "Insight to Impact",
      role: "Sponsor",
      description: "RiskMan Consulting participated as proud sponsor featuring insightful discussions on audit transformation, risk management, compliance, and automation. The conference provided an excellent platform to connect with industry leaders shaping the future of internal audit.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      status: "past",
      focusAreas: [
        "Audit transformation",
        "Risk management",
        "Compliance and governance",
        "Automation and future-ready audit practices"
      ]
    },
    {
      id: 11,
      title: "IIA India International Conference 2025",
      date: "2025",
      year: "2025",
      location: "Taj The Trees, Mumbai",
      type: "International Conference",
      description: "RiskMan Consulting engaged with leaders on the future of internal audit, risk, and governance. Featured panel discussion on 'Risks Your Organization Should Be Preparing For in 2025' bringing together thought leaders and risk experts.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 12,
      title: "AGM IIA Delhi",
      date: "18 July 2025",
      year: "2025",
      location: "Delhi, India",
      type: "Conference",
      description: "Strategic discussions shaping the future of internal auditing. Audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      status: "past"
    },
    {
      id: 13,
      title: "WOFA 2025",
      date: "31 Jan – 2 Feb 2025",
      year: "2025",
      location: "New Delhi, India",
      type: "Conference",
      description: "A global platform celebrating leadership and innovation. WOFA 2025 brought together changemakers and leaders for global collaboration.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      status: "past"
    }
  ];

  const years = ['all', '2026', '2025'];
  const eventTypes = [...new Set(events.map(e => e.type))];
  const types = ['all', ...eventTypes];

  const filteredEvents = events.filter(event => {
    const yearMatch = selectedYear === 'all' || event.year === selectedYear;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    return yearMatch && typeMatch;
  });

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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-400">Filter by:</span>
          </div>
          
          {/* Year Filter */}
          <div className="flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-teal-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {year === 'all' ? 'All Years' : year}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-lg bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="relative overflow-hidden transition-all duration-300 border group bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-2xl hover:border-teal-400/50 hover:-translate-y-1"
            >
              {/* Status Badge */}
              {event.status === 'upcoming' && (
                <div className="absolute z-10 px-3 py-1 text-xs font-semibold text-white bg-teal-500 rounded-full top-4 left-4">
                  Upcoming
                </div>
              )}

              {/* Role Badge */}
              {event.role && (
                <div className="absolute z-10 px-3 py-1 text-xs font-semibold text-white rounded-full top-4 right-4 bg-purple-500/90">
                  {event.role}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Event Type */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-teal-400 rounded-full bg-teal-500/20">
                  {event.type}
                </span>

                <h3 className="mb-3 text-xl font-bold text-white transition-colors line-clamp-2 group-hover:text-teal-400">
                  {event.title}
                </h3>

                {event.theme && (
                  <p className="mb-3 text-sm italic text-slate-400">
                    "{event.theme}"
                  </p>
                )}

                <p className="mb-4 text-sm leading-relaxed text-slate-300 line-clamp-3">
                  {event.description}
                </p>

                {/* Highlights/Focus Areas */}
                {(event.highlights || event.focusAreas || event.keyTakeaways) && (
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Tag className="w-3 h-3 text-teal-400" />
                      <span className="text-xs font-semibold text-slate-400">
                        {event.highlights ? 'Highlights' : event.focusAreas ? 'Focus Areas' : 'Key Takeaways'}
                      </span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {(event.highlights || event.focusAreas || event.keyTakeaways)?.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-teal-400">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Meta Info */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                {/* Learn More Link */}
                <button className="flex items-center gap-2 text-sm font-semibold text-teal-400 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-slate-600" />
            <h3 className="mb-2 text-xl font-bold text-slate-400">No Events Found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more events</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="p-8 border bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border-teal-400/30 rounded-2xl md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-teal-400" />
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Want to Join Our Next Event?
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              Subscribe to our newsletter and be the first to know about upcoming conferences, workshops, and networking opportunities.
            </p>
            <button className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-teal-500 rounded-lg hover:bg-teal-600 hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}