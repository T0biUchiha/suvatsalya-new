import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import { Button } from '../layout/Button';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Default placeholder image

export function SingleArticlePage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams(); // Gets the 'slug' from the URL

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        // Fetches the single article using its slug
        const response = await api.get(`/api/articles/${slug}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div className="pt-40 text-center">Loading article...</div>;
  }

  if (!article) {
    return <div className="pt-40 text-center">Article not found.</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={article.imageUrl || hero4Img} // Use article image or placeholder
                alt={article.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {article.title}
              </h1>
              <div className="mt-8">
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Full Article) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* This `prose` class from Tailwind's typography plugin 
              will automatically style your article content.
              'whitespace-pre-wrap' ensures your line breaks are respected.
            */}
            <div className="prose prose-lg text-gray-700 max-w-none whitespace-pre-wrap">
              {article.content}
            </div>

            {/* Back to Blog link */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <Link
                to="/blog"
                className="font-semibold text-sky-700 hover:text-sky-800"
              >
                &laquo; Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}