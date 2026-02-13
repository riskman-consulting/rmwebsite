import React from "react";
import { Link } from "react-router-dom";

const groups = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Industries", url: "/industries" },
      { name: "Blogs", url: "/blogs" },
      { name: "Insights", url: "/insights" },
      { name: "Events", url: "/events" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Careers", url: "/careers" },
      { name: "Governance", url: "/governance" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms", url: "/terms" },
    ],
  },
  {
    title: "Popular Services",
    links: [
      { name: "Cybersecurity", url: "/services/cybersecurity" },
      { name: "Risk Advisory", url: "/services/risk-advisory" },
      { name: "ISO Certifications", url: "/services/iso-certifications" },
      { name: "SOC Services", url: "/services/soc-services" },
      { name: "Digital Transformation", url: "/services/digital-transformation" },
    ],
  },
];

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
      <div className="container py-20">

        {/* Top */}
        <div className="text-center mb-14">
          <h1 className="font-heading text-7xl font-bold text-brandPrimary dark:text-brandGold mb-4">
            404
          </h1>

          <h2 className="text-2xl font-semibold mb-3">
            Page not found
          </h2>

          <p className="max-w-xl mx-auto opacity-80">
            The page you’re looking for doesn’t exist or may have moved.
            Try one of the sections below.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-7 py-3 rounded-xl
                       bg-brandPrimary hover:bg-brandNavy
                       text-white font-semibold
                       transition shadow-sm hover:shadow-md"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Sitemap Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl
                         bg-surfaceLight dark:bg-surfaceDark
                         border border-borderLight dark:border-borderDark
                         p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold mb-4
                             text-brandPrimary dark:text-brandGold">
                {group.title}
              </h3>

              <div className="space-y-2">
                {group.links.map((l) => (
                  <Link
                    key={l.url}
                    to={l.url}
                    className="block rounded-lg px-3 py-2
                               hover:bg-brandLight/70
                               dark:hover:bg-brandDark/50
                               transition font-medium"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}