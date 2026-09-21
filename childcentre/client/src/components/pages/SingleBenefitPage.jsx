import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api';
import { ExternalLink, FileText, ChevronRight } from 'lucide-react';
import { ContentImage } from '../layout/ContentImage';
import { Seo } from '../layout/Seo';
import { buildSnippet } from '../../utils/snippet';

export function SingleBenefitPage() {
  const { slug } = useParams();
  const [benefit, setBenefit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBenefit = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await api.get(`/api/benefits/${encodeURIComponent(slug)}`);
        setBenefit(response.data);
      } catch (err) {
        console.error(err);
        setError('Benefit not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchBenefit();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
      </div>
    );
  }

  if (error || !benefit) {
    return (
      <div className="pt-40 text-center">
        <p className="text-gray-600 mb-4">{error || 'Benefit not found.'}</p>
        <Link to="/benefits" className="font-semibold text-brand-teal hover:text-brand-teal-dark">
          &laquo; Back to all benefits
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <Seo
        title={benefit.title}
        description={buildSnippet(benefit.description, 155)}
        path={`/benefits/${encodeURIComponent(benefit.slug || benefit._id)}`}
        image={benefit.imageUrl}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: benefit.title,
          description: buildSnippet(benefit.description, 155),
          url: `https://suvatsalya.in/benefits/${encodeURIComponent(benefit.slug || benefit._id)}`,
        }}
      />
      <section className="w-full bg-brand-cream py-12 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue">{benefit.title}</h1>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {benefit.imageUrl && (
            <div className="mb-8 flex justify-center">
              <ContentImage src={benefit.imageUrl} alt={benefit.title} variant="benefit" />
            </div>
          )}

          <div className="cms-content whitespace-pre-line mb-8">{benefit.description}</div>

          <div className="flex flex-wrap gap-4 mb-12">
            {benefit.pdfUrl && (
              <a
                href={benefit.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-teal text-brand-teal rounded-md font-medium text-sm hover:bg-brand-teal hover:text-white transition-colors"
              >
                <FileText size={16} />
                Download PDF
              </a>
            )}
            {benefit.websiteLink && (
              <a
                href={benefit.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white rounded-md font-medium text-sm hover:bg-brand-teal-dark transition-colors"
              >
                <ExternalLink size={16} />
                Visit Government Website
                <ChevronRight size={14} />
              </a>
            )}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Link
              to="/benefits"
              className="font-semibold text-brand-teal hover:text-brand-teal-dark"
            >
              &laquo; Back to all benefits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
