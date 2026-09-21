import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import { Button } from '../layout/Button';
import { ContentImage } from '../layout/ContentImage';
import { ArticleContent } from '../layout/ArticleContent';
import { Seo } from '../layout/Seo';
import { buildSnippet } from '../../utils/snippet';
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
        const response = await api.get(`/api/articles/${encodeURIComponent(slug)}`);
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
      <Seo
        title={article.title}
        description={buildSnippet(article.content, 155)}
        path={`/blog/${encodeURIComponent(article.slug)}`}
        image={article.imageUrl}
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: buildSnippet(article.content, 155),
          image: article.imageUrl,
          datePublished: article.createdAt,
          dateModified: article.updatedAt || article.createdAt,
          mainEntityOfPage: `https://suvatsalya.in/blog/${encodeURIComponent(article.slug)}`,
          author: {
            '@type': 'Organization',
            name: 'Suvatsalya Child Growth and Development Centre',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Suvatsalya Child Growth and Development Centre',
          },
        }}
      />
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <ContentImage src={article.imageUrl || hero4Img} alt={article.title} />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{article.title}</h1>
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
            <ArticleContent content={article.content} />

            {article.relatedArticles?.length > 0 && (
              <aside className="mt-14 border-t border-gray-200 pt-10" aria-label="Related blogs">
                <h2 className="text-2xl font-bold text-gray-900">Related blogs</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {article.relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle._id}
                      to={`/blog/${encodeURIComponent(relatedArticle.slug)}`}
                      className="group rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-brand-teal hover:bg-brand-cream"
                    >
                      <p className="font-semibold text-gray-900 transition group-hover:text-brand-teal">
                        {relatedArticle.title}
                      </p>
                      <span className="mt-3 inline-block text-sm font-semibold text-brand-teal">
                        Read article &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </aside>
            )}

            {/* Back to Blog link */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <Link to="/blog" className="font-semibold text-brand-teal hover:text-brand-teal-dark">
                &laquo; Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
