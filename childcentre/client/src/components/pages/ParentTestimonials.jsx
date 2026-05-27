import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MessageCircleHeart } from 'lucide-react';
import api from '../../api';
import testimonialImg from '../../assets/images/Parent Testimonials.png';
import { TestimonialCard } from './TestimonialCard';

function TestimonialsListContent({ loading, stories }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
          <MessageCircleHeart className="h-10 w-10 text-brand-teal" />
        </div>
        <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Testimonials Yet</h3>
        <p className="text-gray-500 max-w-md">
          Parent stories and testimonials will be shared here soon. We look forward to celebrating
          every child&apos;s journey with their families.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {stories.map((story) => (
        <TestimonialCard key={story._id} story={story} />
      ))}
    </div>
  );
}

TestimonialsListContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export function ParentTestimonials() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = 'Parent Testimonials';

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/stories');
        setStories(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <img
                src={testimonialImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left order-first md:order-last">
              <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue">{title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <TestimonialsListContent loading={loading} stories={stories} />
          </div>
        </div>
      </section>
    </div>
  );
}
