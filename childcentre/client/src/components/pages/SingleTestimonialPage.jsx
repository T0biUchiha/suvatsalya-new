import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import { ContentImage } from '../layout/ContentImage';
import { ArticleContent } from '../layout/ArticleContent';
import { RelatedReading } from '../layout/RelatedReading';
import { Seo } from '../layout/Seo';
import { buildSnippet } from '../../utils/snippet';

export function SingleTestimonialPage() {
  const { slug } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await api.get(`/api/stories/${encodeURIComponent(slug)}`);
        setStory(response.data);
      } catch (err) {
        console.error(err);
        setError('Testimonial not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="pt-40 text-center">
        <p className="text-gray-600 mb-4">{error || 'Testimonial not found.'}</p>
        <Link
          to="/testimonials"
          className="font-semibold text-brand-teal hover:text-brand-teal-dark"
        >
          &laquo; Back to all testimonials
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <Seo
        title={story.title}
        description={buildSnippet(story.story, 155)}
        path={`/testimonials/${encodeURIComponent(story.slug || story._id)}`}
        image={story.imageUrl}
        type="article"
      />
      <section className="w-full bg-brand-cream py-12 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue">{story.title}</h1>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {story.imageUrl && (
            <div className="mb-8">
              <ContentImage src={story.imageUrl} alt={story.title} />
            </div>
          )}

          <div className="mb-12">
            <ArticleContent content={story.story} />
          </div>

          <RelatedReading links={story.relatedLinks} />

          <div className="border-t border-gray-200 pt-8">
            <Link
              to="/testimonials"
              className="font-semibold text-brand-teal hover:text-brand-teal-dark"
            >
              &laquo; Back to all testimonials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
