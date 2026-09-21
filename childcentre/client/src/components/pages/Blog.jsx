import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import { FileText } from 'lucide-react';
import blogImg from '../../assets/relogoimages/blog_image_1536x1024.png';
import { BlogCard } from './BlogCard';

function BlogListContent({ loading, articles }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
          <FileText className="h-10 w-10 text-brand-teal" />
        </div>
        <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Articles Yet</h3>
        <p className="text-gray-500 max-w-md">
          We are working on some insightful articles. Check back soon for updates on child
          development, therapies, and more.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {articles.map((article) => (
        <BlogCard key={article._id} article={article} />
      ))}
    </div>
  );
}

export function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = 'Our Blog';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/articles');
        setArticles(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="w-full bg-gray-50 py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <img src={blogImg} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="text-center md:text-left order-first md:order-last">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">{title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BlogListContent loading={loading} articles={articles} />
          </div>
        </div>
      </section>
    </div>
  );
}

BlogListContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
