import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogs from "../../data/blogs.json";
import BlogTemplate from "../../templates/BlogTemplate";

export default function BlogSingle() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-xl text-center text-red-600">
        Blog Not Found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | RiskMan Consulting</title>
        <meta name="description" content={blog.excerpt || blog.description || `Read the latest insights from RiskMan Consulting: ${blog.title}`} />
        <link rel="canonical" href={`https://www.riskman.in/insights/${blog.slug}`} />
      </Helmet>
      <BlogTemplate blog={blog} />
    </>
  );
}