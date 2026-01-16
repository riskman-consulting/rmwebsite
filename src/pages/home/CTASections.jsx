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
    <section className="relative w-full py-16 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28">
      <div className="container mx-auto px-4">
       
        {/* TOP AVATARS - Social Proof */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center -space-x-4">
            {topAvatars.map((avatar, i) => (
              <div
                key={i}
                className="relative overflow-hidden border-4 rounded-full shadow-xl w-16 h-16 border-white dark:border-surfaceDark ring-1 ring-gray-200 dark:ring-borderDark"
              >
                <img
                  src={avatar}
                  alt={`Team member ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <div className="relative flex items-center justify-center border-4 rounded-full shadow-xl w-16 h-16 border-white dark:border-surfaceDark bg-brandGold dark:bg-brandAccent">
              <span className="text-sm font-black text-white dark:text-brandDark">12K+</span>
            </div>
          </div>
        </div>
 
        {/* HEADING - Matches KeyServices/Blog/FAQ Typography */}
        <div className="text-center mb-8">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-brandNavy dark:text-brandAccent">
            Get Started
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white">
            Create Your <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">Success</span> Story
          </h2>
        </div>
 
        {/* DESCRIPTION - Matches FAQ answer text size */}
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center text-brandNavy dark:text-white/70">
          Receive personalized guidance from seasoned advisors who have not only
          navigated the challenges of risk and compliance but have also successfully
          scaled critical business operations globally.
        </p>
 
        {/* CTA BUTTON - Premium Style */}
        <div className="flex justify-center mb-16">
          <a
            href="/contact"
            className="inline-block px-10 py-5 font-black uppercase tracking-widest text-sm text-white transition-all duration-300 rounded-full shadow-lg hover:scale-105 bg-brandDark hover:bg-brandPrimary hover:shadow-2xl dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold"
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
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
               
                {member.featured && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white font-black text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-white/80 font-bold uppercase tracking-wider">
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