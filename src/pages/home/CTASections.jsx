import { Linkedin } from "lucide-react";

const CTASection = () => {
  const teamMembers = [
    {
      name: "Mira Smith",
      role: "Business Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      color: "bg-pink-200",
      featured: true,
    },
    {
      name: "Sarah Johnson",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      color: "bg-amber-100",
    },
    {
      name: "Michael Chen",
      role: "Risk Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      color: "bg-blue-200",
    },
    {
      name: "David Park",
      role: "Compliance Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      color: "bg-green-200",
    },
    {
      name: "James Wilson",
      role: "Audit Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      color: "bg-orange-200",
    },
    {
      name: "Robert Lee",
      role: "Senior Auditor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      color: "bg-cyan-200",
    },
  ];

  // Avatar images for top (first 3 members)
  const topAvatars = [
    "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
  ];

  return (
    <section
      className="relative w-full py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28"
    >
      {/* ✅ MATCH HEADER CONTAINER */}
      {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
      <div className="container">
        
        {/* TOP AVATARS */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center -space-x-4">
            {topAvatars.map((avatar, i) => (
              <div
                key={i}
                className="relative overflow-hidden border-4 rounded-full shadow-lg w-14 h-14 border-surfaceLight dark:border-surfaceDark ring-1 ring-borderLight dark:ring-borderDark"
              >
                <img
                  src={avatar}
                  alt={`Team member ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <div className="relative flex items-center justify-center border-4 rounded-full shadow-lg w-14 h-14 border-surfaceLight dark:border-surfaceDark bg-brandGold dark:bg-brandAccent">
              <span className="text-sm font-bold text-white dark:text-brandDark">12K+</span>
            </div>
          </div>
        </div>

        {/* HEADING */}
        <h2 className="mb-6 text-4xl font-bold text-center md:text-5xl lg:text-6xl text-brandDark dark:text-white">
          Create Your Success
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto mb-10 text-base leading-relaxed text-center md:text-lg text-brandNavy dark:text-white/70">
          Receive personalized guidance from seasoned startup advisors who have
          not only navigated the challenges of launching a business but have
          also successfully built their own ventures.
        </p>

        {/* CTA BUTTON */}
        <div className="flex justify-center mb-12">
          <a 
            href="/contact"
            className="inline-block px-8 py-4 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg hover:scale-105 bg-brandDark hover:bg-brandPrimary hover:shadow-xl dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Schedule a Free Consultation
          </a>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-3 lg:grid-cols-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl overflow-hidden aspect-[3/4]
                ${member.color}
                transition-transform duration-300 hover:-translate-y-2
                ring-1 ring-borderLight dark:ring-borderDark
                ${member.featured ? 'md:col-span-1' : ''}
              `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full transition-all duration-300 mix-blend-luminosity hover:mix-blend-normal"
              />
              
              {/* NAME OVERLAY (Featured member only) */}
              {member.featured && (
                <div className="absolute top-4 left-4 right-4">
                  <h3 className="text-brandDark font-semibold text-sm mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-brandNavy">
                    {member.role}
                  </p>
                </div>
              )}

              {/* LINKEDIN ICON (Featured member only) */}
              {member.featured && (
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center justify-center w-8 h-8 transition-transform duration-200 rounded shadow-md bg-brandDark dark:bg-brandAccent hover:scale-110">
                    <Linkedin size={16} className="text-white dark:text-brandDark" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CAPTION */}
        <p className="text-sm font-medium text-center text-brandNavy/60 dark:text-white/50">
          Our leader board
        </p>
      </div>
    </section>
  );
};

export default CTASection;