import { Link } from 'react-router-dom'

const mainPages = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Insights', to: '/insights' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

const companyLinks = [
  { label: 'Careers', to: '/careers' },
  { label: 'Governance', to: '/governance' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms' },
]

const popularServices = [
  { label: 'Cybersecurity', to: '/services/cybersecurity' },
  { label: 'Risk Advisory', to: '/services/risk-advisory' },
  { label: 'ISO Certifications', to: '/services/iso-certifications' },
  { label: 'SOC Services', to: '/services/soc-services' },
  { label: 'Digital Transformation', to: '/services/digital-transformation' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-20">
      {/* 404 heading */}
      <h1 className="text-8xl font-bold text-[#1a3a6b] leading-none">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-900">Page not found</h2>
      <p className="mt-3 text-center text-gray-500 max-w-md">
        The page you're looking for doesn't exist or may have moved.<br />
        Try one of the sections below.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-[#1a3a6b] text-white rounded-full font-medium hover:bg-[#152e56] transition-colors"
      >
        Go to Homepage
      </Link>

      {/* Link cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Main Pages */}
        <div className="bg-white rounded-2xl border border-gray-200 px-8 py-8">
          <h3 className="text-[#1a3a6b] font-bold text-lg mb-6">Main Pages</h3>
          <ul className="space-y-4">
            {mainPages.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-700 hover:text-[#1a3a6b] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="bg-white rounded-2xl border border-gray-200 px-8 py-8">
          <h3 className="text-[#1a3a6b] font-bold text-lg mb-6">Company</h3>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-700 hover:text-[#1a3a6b] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Services */}
        <div className="bg-white rounded-2xl border border-gray-200 px-8 py-8">
          <h3 className="text-[#1a3a6b] font-bold text-lg mb-6">Popular Services</h3>
          <ul className="space-y-4">
            {popularServices.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-700 hover:text-[#1a3a6b] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
