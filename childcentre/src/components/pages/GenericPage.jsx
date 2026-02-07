import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; // 1. Import Link
import { Button } from '../layout/Button'; // 2. Import Button
import specialImg from '../../assets/images/special.png';

export function GenericPage() {
  const { slug, subSlug } = useParams();
  const title = subSlug ? subSlug.replace(/-/g, ' ') : (slug ? slug.replace(/-/g, ' ') : 'Page');

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={specialImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 capitalize">
                {title}
              </h1>
              {/* --- 3. ADDED BUTTON HERE --- */}
              <div className="mt-8">
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Single-Column Layout) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This div centers the article content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Left Column: Main Content (Bigger Text) */}
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                There are Options. There are Methods and Corrective Measures.
              </h2>
              <p className="text-xl font-bold text-gray-800 leading-relaxed mb-6">
                This is the dummy content for the "{title}" page. You can edit this file to add real content later.
              </p>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </p>
                <h3 className="text-3xl font-semibold text-gray-900 pt-4">Understanding {title}</h3>
                <p>
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                  <li>Aliquam tincidunt mauris eu risus.</li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}