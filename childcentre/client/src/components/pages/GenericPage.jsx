import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import specialImg from '../../assets/images/Our Friends.png';

export function GenericPage() {
  const { slug, subSlug } = useParams();
  const title = subSlug ? subSlug.replace(/-/g, ' ') : (slug ? slug.replace(/-/g, ' ') : 'Page');

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section - Title first on mobile */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Title - first on mobile */}
            <div className="text-center md:text-left order-first md:order-last">
              <h1 className="text-3xl md:text-4xl font-semibold text-brand-blue capitalize">
                {title}
              </h1>
              <div className="mt-6">
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>
            </div>
            {/* Image - second on mobile */}
            <div className="order-last md:order-first">
              <img
                src={specialImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-semibold text-brand-blue mb-4">
                There are Options. There are Methods and Corrective Measures.
              </h2>
              <p className="text-xl font-bold text-gray-800 leading-relaxed mb-4">
                This is the content for the &ldquo;{title}&rdquo; page. You can edit this file to add real content later.
              </p>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </p>
                <h3 className="text-3xl font-semibold text-brand-blue pt-4">Understanding {title}</h3>
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
