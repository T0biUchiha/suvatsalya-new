import { Link } from 'react-router-dom';

export function TermsPage() {
  const title = "Terms of Use";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section (REPLACED) --- */}
      <section className="w-full bg-gray-50 py-16 pt-40">
        {/* Centered title, matching the content width */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
        </div>
      </section>
      
      {/* --- 2. Content Area --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This div centers the article content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4">
                Terms of Use — Suvatsalya Child Growth and Development Centre
              </h2>
              <p>
                These Terms of Use govern your access to and use of this website. By using the site,
                you agree to the terms below. If you do not agree, please do not use the website.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Use of the Website</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>The website is intended to provide general information about our services and programs.</li>
                  <li>You agree not to misuse the site, including attempting to disrupt, harm, or access it without authorization.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Medical Disclaimer</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Information on this site does not replace professional medical advice, diagnosis, or treatment.</li>
                  <li>Always consult a qualified healthcare professional for personalized guidance.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointments and Communication</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Submitting a form does not guarantee an appointment. Our team will contact you to confirm availability.</li>
                  <li>Accurate contact details help us respond promptly and appropriately.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All content on this site, including text, images, logos, and design, is the property of Suvatsalya.</li>
                  <li>You may not copy, reproduce, or distribute content without written permission.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Links</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>The site may include links to third-party websites for convenience.</li>
                  <li>We do not control or endorse third-party content and are not responsible for their practices.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We strive to keep information accurate and up to date, but we do not guarantee completeness or accuracy.</li>
                  <li>Suvatsalya is not liable for any direct or indirect damages arising from the use of this website.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Changes to These Terms</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We may update these terms from time to time.</li>
                  <li>Continued use of the website after updates indicates acceptance of the revised terms.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact</h3>
                <p>
                  For questions about these terms, please reach out via our contact page.
                  You can also review our <Link to="/policies" className="text-sky-700 underline">privacy policy</Link>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}