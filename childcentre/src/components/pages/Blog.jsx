import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Default placeholder image

// This is a new component just for this page
function BlogCard({ article }) {
  // Create a snippet of the content
  const snippet = article.content.substring(0, 150) + '...';

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8">
      {/* Image */}
      <div className="md:w-1/3">
        <Link to={`/blog/${article.slug}`}>
          <img
            // Use the article's uploaded image, or the placeholder if it doesn't have one
            src={article.imageUrl || hero4Img}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </Link>
      </div>
      
      {/* Content */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          <Link to={`/blog/${article.slug}`} className="hover:text-sky-700 transition-colors">
            {article.title}
          </Link>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          {snippet}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="font-semibold text-sky-700 hover:text-sky-800"
        >
          Read More &raquo;
        </Link>
      </div>
    </div>
  );
}

export function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = "Our Blog";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // Use your api instance to fetch all articles
        const response = await api.get('/api/articles');
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={hero4Img} // Placeholder
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Blog List) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <p className="text-center text-lg text-gray-700">Loading articles...</p>
            ) : articles.length === 0 ? (
              <p className="text-center text-lg text-gray-700">No articles have been posted yet. Check back soon!</p>
            ) : (
              <div className="space-y-12">
                {articles.map((article) => (
                  <BlogCard key={article._id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}