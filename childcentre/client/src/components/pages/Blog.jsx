import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { FileText } from 'lucide-react';
import blogImg from '../../assets/relogoimages/blog_image_1536x1024.png';

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
            src={article.imageUrl || blogImg}
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </Link>
      </div>
      
      {/* Content */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          <Link to={`/blog/${article.slug}`} className="hover:text-brand-teal transition-colors">
            {article.title}
          </Link>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          {snippet}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="font-semibold text-brand-teal hover:text-brand-teal-dark"
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
      <section className="w-full bg-gray-50 py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={blogImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left order-first md:order-last">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Blog List) --- */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
              </div>
            ) : articles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
                  <FileText className="h-10 w-10 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Articles Yet</h3>
                <p className="text-gray-500 max-w-md">We are working on some insightful articles. Check back soon for updates on child development, therapies, and more.</p>
              </div>
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