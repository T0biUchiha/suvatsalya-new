// No imports are needed for this page
export function PolicyPage() {
  const title = "Website Policies";

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
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-semibold text-gray-900">Privacy Policy</h2>
              <p>
                Suvatsalya Child Growth and Development Centre ("us", "we", or "our") operates this website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              
              <h2 className="text-3xl font-semibold text-gray-900 pt-4">Information Collection and Use</h2>
              <p>
                We may collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, data submitted through our contact forms (such as name, phone number, and query).
              </p>
              
              <h2 className="text-3xl font-semibold text-gray-900 pt-4">Data Use</h2>
              <p>
                We use the collected data to contact you regarding your query, provide support, and improve our services. We will not share your personal information with any third parties without your explicit consent, unless required by law.
              </p>

              <h2 className="text-3xl font-semibold text-gray-900 pt-4">Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              
              <p className="pt-8 text-sm text-gray-500">This policy was last updated on November 4, 2025.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}