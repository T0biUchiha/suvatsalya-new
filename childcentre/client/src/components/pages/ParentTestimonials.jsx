import { useState, useEffect } from 'react';
import { MessageCircleHeart } from 'lucide-react';
import api from '../../api';
import testimonialImg from '../../assets/images/Parent Testimonials.png';

export function ParentTestimonials() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = "Parent Testimonials";

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/stories');
        setStories(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
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
              <h1 className="text-4xl md:text-5xl font-semibold text-brand-blue">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-cream border-t-brand-teal" />
              </div>
            ) : stories.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream mb-4">
                  <MessageCircleHeart className="h-10 w-10 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-blue mb-3">No Testimonials Yet</h3>
                <p className="text-gray-500 max-w-md">Parent stories and testimonials will be shared here soon. We look forward to celebrating every child&apos;s journey with their families.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {stories.map((story) => (
                  <div key={story._id} className="border-b pb-12">
                    <h2 className="text-3xl font-semibold text-brand-blue mb-4">
                      {story.title}
                    </h2>
                    {story.imageUrl && (
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                      />
                    )}
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {story.story}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
