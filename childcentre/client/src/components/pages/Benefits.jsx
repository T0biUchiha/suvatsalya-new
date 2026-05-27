import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import { Gift } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

function BenefitsListContent({ loading, error, benefits }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (benefits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
          <Gift className="h-10 w-10 text-brand-teal" />
        </div>
        <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Benefits Listed Yet</h3>
        <p className="text-gray-500 max-w-md">
          Information about government schemes and benefits for children with developmental needs
          will be updated here soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {benefits.map((benefit) => (
        <BenefitCard key={benefit._id} benefit={benefit} />
      ))}
    </div>
  );
}

BenefitsListContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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
      <section className="w-full bg-brand-cream py-12 pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-3">
            Government Benefits
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Information about government schemes, subsidies, and benefits available for children
            with developmental needs and their families.
          </p>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BenefitsListContent loading={loading} error={error} benefits={benefits} />
          </div>
        </div>
      </section>
    </div>
  );
}
