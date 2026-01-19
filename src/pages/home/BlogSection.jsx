import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogsData from "../../data/blogs.json"

const BlogSection = () => {
  const navigate = useNavigate();

  // latest 3 blogs
  const latestBlogs = blogsData.slice(0, 3);

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section
      className="transition-colors duration-300 pt-10  pb-5 bg-bgLight dark:bg-bgDark"
    >
      {/* ✅ MATCH HEADER CONTAINER */}
      {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
      <div className="container">

        {/* HEADER */}
        <div className="text-left mb-14">
          <p className="mb-4 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Insights
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl text-brandDark dark:text-white">
            Latest from Our{" "}
            <span className="text-brandGold dark:text-brandAccent">
              Experts
            </span>
          </h2>

          <p className="max-w-3xl text-lg text-brandNavy dark:text-white/70">
            Stay updated with the latest insights, trends, and best practices in
            audit, risk management, and compliance.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleCardClick(blog.slug)}
              className="overflow-hidden transition-all duration-300 border shadow-lg cursor-pointer group rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-2 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-brandDark dark:bg-brandAccent dark:text-brandDark">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="mb-3 text-sm text-brandNavy/60 dark:text-white/50">
                  {blog.date}
                </p>

                <h3
                  className="mb-3 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandGold dark:group-hover:text-brandAccent"
                >
                  {blog.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed line-clamp-3 text-brandNavy dark:text-white/70">
                  {blog.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold transition-all text-brandGold dark:text-brandAccent group-hover:gap-3">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;