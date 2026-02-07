import { useState, useEffect } from 'react';
import api from '../../api';

// Import all your frontend images
import hero1Img from '../../assets/home-page/hero1.jpg';
import hero2Img from '../../assets/home-page/hero2.jpg';
import hero3Img from '../../assets/home-page/hero3.jpg';
import hero4Img from '../../assets/home-page/hero4.jpg';
import hero5Img from '../../assets/home-page/hero5.jpg';
import hero6Img from '../../assets/home-page/hero6.jpg';

// Create a map to dynamically select the correct image
const imageMap = {
  'hero1.jpg': hero1Img,
  'hero2.jpg': hero2Img,
  'hero3.jpg': hero3Img,
  'hero4.jpg': hero4Img,
  'hero5.jpg': hero5Img,
  'hero6.jpg': hero6Img,
};

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
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image (using a default placeholder) */}
            <div>
              <img
                src={hero4Img}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Stories List) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <p className="text-center text-lg text-gray-700">Loading stories...</p>
            ) : stories.length === 0 ? (
              <p className="text-center text-lg text-gray-700">No stories have been posted yet. Check back soon!</p>
            ) : (
              <div className="space-y-12">
                {stories.map((story) => (
                  <div key={story._id} className="border-b pb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                      {story.title}
                    </h2>
                    <img
                      src={imageMap[story.imageName] || hero1Img} // Use selected image or a fallback
                      alt={story.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                    />
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {/* whitespace-pre-wrap respects new lines in the text area */}
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