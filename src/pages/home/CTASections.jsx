import { Linkedin } from "lucide-react";
 
const CTASection = () => {
  // Team members data update if needed in future
  const teamMembers = [];
 
  const topAvatars = [
    "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
    "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
  ];
 
  return (
    <section className="relative w-full py-8 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:pt-20">
      <div className="container px-4 mx-auto">
       
        {/* TOP AVATARS - Social Proof */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center -space-x-4">
            {topAvatars.map((avatar, i) => (
              <div
                key={i}
                className="relative w-16 h-16 overflow-hidden border-4 border-white rounded-full shadow-xl dark:border-surfaceDark ring-1 ring-gray-200 dark:ring-borderDark"
              >
                <img
                  src={avatar}
                  alt={`Team member ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <div className="relative flex items-center justify-center w-16 h-16 border-4 border-white rounded-full shadow-xl dark:border-surfaceDark bg-brandGold dark:bg-brandAccent">
              <span className="text-sm font-black text-white dark:text-brandDark">12K+</span>
            </div>
          </div>
        </div>
 
        {/* HEADING - Matches KeyServices/Blog/FAQ Typography */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-brandNavy dark:text-brandAccent">
            Get Started
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
            Create Your <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Scalable Success</span>
          </h2>
        </div>
 
        {/* DESCRIPTION - Matches FAQ answer text size */}
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center text-brandNavy dark:text-white/70">
          Leverage the collective wisdom of partners who have successfully navigated the complexities of global markets and regulatory landscapes. At RiskMan, we don't just offer advice; we provide a blueprint for resilience. Benefit from personalized guidance rooted in decades of experience building high-growth service lines and safeguarding multi-national enterprises.
        </p>
 
        {/* CTA BUTTON - Premium Style */}
        <div className="flex justify-center mb-16">
          <a
            href="/contact"
            className="inline-block px-10 py-5 text-sm font-black tracking-widest text-white uppercase transition-all duration-300 rounded-full shadow-lg hover:scale-105 bg-brandDark hover:bg-brandPrimary hover:shadow-2xl dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
          >
            Schedule a Free Consultation
          </a>
        </div>
 
        {/* TEAM GRID (Conditional rendering if teamMembers has data) */}
        {teamMembers.length > 0 && (
          <div className="grid grid-cols-2 gap-6 mb-6 md:grid-cols-3 lg:grid-cols-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`
                  relative rounded-3xl overflow-hidden aspect-[3/4]
                  ${member.color}
                  transition-all duration-500 hover:-translate-y-3
                  border border-gray-100 dark:border-borderDark
                  shadow-md hover:shadow-2xl
                `}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0"
                />
               
                {member.featured && (
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <h3 className="mb-1 text-lg font-black text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold tracking-wider uppercase text-white/80">
                      {member.role}
                    </p>
                    <div className="mt-4">
                       <Linkedin size={20} className="text-brandAccent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
 
export default CTASection;
 