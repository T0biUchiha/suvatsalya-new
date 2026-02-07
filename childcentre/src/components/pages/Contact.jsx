import { Phone, Mail, MapPin } from 'lucide-react';
import { AppointmentForm } from '../layout/AppointmentForm';

function ContactInfoCard({ icon, title, line1, line2 }) {
  const Icon = icon;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
      <Icon className="h-8 w-8 text-sky-700 flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{line1}</p>
        {line2 && <p className="text-sm text-gray-500">{line2}</p>}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* --- 1. Title Section --- */}
      <section className="w-full bg-sky-50 py-16 pt-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Make an appointment
          </h1>
        </div>
      </section>

      {/* --- 2. Form Section --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Info Text */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              We are here to help. Whether you have questions about our services, need to book an assessment, or just want to talk about your concerns, our team is ready to listen.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Please fill out the form, and one of our coordinators will get back to you as soon as possible.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="w-full">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* --- 3. Map and Info Section --- */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Map */}
          <div className="h-72 md:h-full w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=A-111%2C%20Sector-70%2C%20Gautam%20Buddha%20Nagar%2C%20Noida%2C%20Pincode%20201301&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Contact Info (UPDATED with Footer info) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Noida Office</h2>
            <ContactInfoCard
              icon={Phone}
              title="8400015666"
              line1="Mon - Sat 10:00 AM - 06:00 PM"
            />
            <ContactInfoCard
              icon={Mail}
              title="info@suvatsalya.in"
              line1="Email us for queries"
            />
            <ContactInfoCard
              icon={MapPin}
              title="A-111, Sector-70"
              line1="Gautam Buddha Nagar, Noida, Pincode -201301"
            />
          </div>

        </div>
      </section>
    </div>
  );
}