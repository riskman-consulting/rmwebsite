import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogsData from "../../data/blogs.json";

const BlogSection = () => {
  const navigate = useNavigate();

  // latest 3 blogs
  const latestBlogs = blogsData.slice(0, 3);

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section className="transition-colors duration-300 px-2  sm:py-24 bg-bgLight dark:bg-bgDark">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* HEADER - Consistent with KeyServices & FAQSection */}
        <div className="text-left mb-16 max-w-4xl">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] uppercase text-brandNavy dark:text-brandAccent">
            Insights & Intelligence
          </p>

          <h2 className="mb-6 text-3xl font-black md:text-5xl leading-tight text-brandDark dark:text-white">
            Latest from Our{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text">
              Experts
            </span>
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-brandNavy dark:text-white/70">
            Stay updated with the latest insights, trends, and best practices in
            audit, risk management, and compliance—straight from our core team.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleCardClick(blog.slug)}
              className="group relative flex flex-col h-full overflow-hidden transition-all duration-500 border shadow-md cursor-pointer rounded-[2rem] border-gray-200 bg-white hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold/40 dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent/40"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Category Badge - Matches FAQ Circle Accent style */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.15em] uppercase text-white rounded-full bg-brandDark/80 backdrop-blur-md border border-white/10 dark:bg-brandAccent dark:text-brandDark">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* CONTENT SECTION - Spacing aligned with FAQ answers */}
              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center gap-2 mb-4">
                   <span className="w-2 h-2 rounded-full bg-brandGold dark:bg-brandAccent animate-pulse" />
                   <p className="text-xs font-bold uppercase tracking-widest text-brandNavy/50 dark:text-white/40">
                    {blog.date}
                  </p>
                </div>

                <h3 className="mb-4 text-xl font-black leading-snug transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                  {blog.title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed line-clamp-3 text-gray-600 dark:text-white/60">
                  {blog.shortDescription}
                </p>

                {/* Interactive Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] transition-all text-brandGold dark:text-brandAccent group-hover:gap-4">
                    Read Full Article 
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  {/* Floating Action Circle (Reference to Icon Badges) */}
                  <div className="w-8 h-8 rounded-full border border-brandGold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:border-brandAccent/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent" />
                  </div>
                </div>
              </div>

              {/* Bottom Accent Bar - Matches IndustryGrid/FAQ accent logic */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-700 ease-in-out group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Optional View All - Bottom Action */}
        <div className="mt-16 text-center lg:text-left">
           <button 
             onClick={() => navigate('/blog')}
             className="px-8 py-4 bg-transparent border-2 border-brandDark/10 dark:border-white/10 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brandDark hover:text-white dark:hover:bg-white dark:hover:text-brandDark transition-all duration-300"
           >
             Explore All Insights
           </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;