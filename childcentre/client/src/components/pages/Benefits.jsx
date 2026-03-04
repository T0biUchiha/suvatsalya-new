import { useState, useEffect } from 'react';
import api from '../../api';
import { ExternalLink, FileText, ChevronRight, Gift } from 'lucide-react';

export function Benefits() {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await api.get('/api/benefits');
        setBenefits(response.data);
      } catch (err) {
        setError('Unable to load benefits at this time.');
        console.error(err);
      }
      setLoading(false);
    };
    fetchBenefits();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Title Section */}
      <section className="w-full bg-brand-cream py-12 pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-3">
            Government Benefits
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Information about government schemes, subsidies, and benefits available for children with developmental needs and their families.
          </p>
        </div>
      </section>

      {/* Benefits List */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && benefits.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
                <Gift className="h-10 w-10 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Benefits Listed Yet</h3>
              <p className="text-gray-500 max-w-md">Information about government schemes and benefits for children with developmental needs will be updated here soon.</p>
            </div>
          )}

          <div className="space-y-10">
            {benefits.map((benefit) => (
              <article
                key={benefit._id}
                className="bg-brand-cream rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image column (if exists) */}
                  {benefit.imageUrl && (
                    <div className="md:col-span-1">
                      <img
                        src={benefit.imageUrl}
                        alt={benefit.title}
                        className="w-full h-full min-h-[200px] object-cover"
                      />
                    </div>
                  )}

                  {/* Content column */}
                  <div className={`p-8 ${benefit.imageUrl ? 'md:col-span-2' : 'md:col-span-3'}`}>
                    <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
                      {benefit.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                      {benefit.description}
                    </p>

                    {/* Action links */}
                    <div className="flex flex-wrap gap-4">
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
