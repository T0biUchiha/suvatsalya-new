export function PolicyPage() {
  const title = "Website Policies";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-brand-cream py-16 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">
            {title}
          </h1>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-brand-blue">Website Policies</h2>
              <p>
                This page explains how Suvatsalya Child Growth and Development Centre handles information collected
                through our website and outlines the policies that guide your use of our online services.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-blue pt-4">Privacy and Data We Collect</h2>
              <p>
                We may collect personal information you provide through forms, such as your name, phone number,
                and message. We only collect information that is necessary to respond to your enquiry or provide
                requested services.
              </p>
              
              <h2 className="text-3xl font-bold text-brand-blue pt-4">How We Use Your Information</h2>
              <p>
                Your information is used to contact you, confirm appointments, and provide relevant support.
                We do not sell or rent personal information to third parties.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Information Sharing</h2>
              <p>
                We may share information only when required to deliver services, comply with legal obligations,
                or protect the rights and safety of families and staff. We do not share data for marketing by
                third parties.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Cookies and Analytics</h2>
              <p>
                Our website may use basic cookies or analytics tools to improve functionality and user experience.
                You can manage cookie settings in your browser.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Data Retention</h2>
              <p>
                We retain website enquiry data only as long as needed to respond and provide services, unless a
                longer retention period is required by law.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Security</h2>
              <p>
                We take reasonable steps to protect your information, but no online transmission is completely
                secure. Please avoid sharing sensitive medical information through website forms.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Your Choices</h2>
              <p>
                You may request access, correction, or deletion of your submitted information by contacting us
                through the contact page.
              </p>

              <h2 className="text-3xl font-bold text-brand-blue pt-4">Updates</h2>
              <p>
                We may update these policies from time to time. The latest version will always be available on
                this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
