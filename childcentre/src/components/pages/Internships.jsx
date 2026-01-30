import { useState, useEffect } from 'react';
import api from '../../api';
import { Button } from '../layout/Button';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Placeholder

export function Internships() {
  const [link, setLink] = useState('');
  const [isAccepting, setIsAccepting] = useState(true); // 1. Add new state
  const [loading, setLoading] = useState(true);
  const title = "Careers & Internships";

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const response = await api.get('/api/career');
        setLink(response.data.googleFormUrl);
        setIsAccepting(response.data.isAccepting); // 2. Get new field
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchLink();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section (Unchanged) --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={hero4Img} // Placeholder
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
      
      {/* --- 2. Content Area (Unchanged) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Join Our Team
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya Child Growth and Development Centre, we are always looking for passionate, dedicated, and skilled professionals to join our multidisciplinary team. We believe in creating a supportive environment not just for the children we help, but for our staff as well.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer opportunities for clinical psychologists, special educators, occupational therapists, speech therapists, and physiotherapists.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Internship Opportunities
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We also provide valuable internship programs for students and new graduates looking to gain hands-on experience in the field of child development. Our internships offer mentorship from senior therapists and exposure to a wide range of developmental conditions.
                </p>
              </div>

              {/* --- 3. UPDATED Dynamic Apply Button --- */}
              <div className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Apply Now
                </h3>
                {loading ? (
                  <p className="text-lg text-gray-700">Loading application status...</p>
                ) : isAccepting ? ( // <-- 4. Changed logic to use isAccepting
                  <>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We are currently accepting applications for careers and internships. Please click the button below to apply via our Google Form.
                    </p>
                    <a
                      href={link}
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer"
                    >
                      <Button text="Open Application Form" variant="secondary" />
                    </a>
                  </>
                ) : ( // This is the "not accepting" message
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are not accepting new applications at this time. Please check back later!
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}