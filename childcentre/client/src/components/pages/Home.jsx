import { useEffect } from 'react';
import HeroSection from '../page-components/HeroSection';
import { Button } from '../layout/Button';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/Banner.png';
import doctorImg from '../../assets/images/What We are.png';
import speechImg from '../../assets/images/about us.png';
import occupationalImg from '../../assets/images/Our Practitioner.png';
import abaImg from '../../assets/images/ABA therapy.png';
import api from '../../api';

export function Homepage() {
  useEffect(() => {
    api.get('/api/articles').catch(() => {});
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection imageUrl={bannerImg} />

      {/* Welcome Section */}
      <section className="w-full py-14 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-12">
              Welcome to Suvatsalya
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto">
              We are specialists in child developmental delay and many childhood disorders. We offer effective, evidence-based, multidisciplinary therapies and individualized educational programs (IEPs) for issues including Attention Deficit Hyperactivity Disorder (ADHD), Autism, Cerebral Palsy, Down Syndrome, Global Developmental Delay and other developmental disorders under one roof.
            </p>

            <Button to="/about" text="Learn More" />
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="w-full bg-white">
        <div className="grid md:grid-cols-2">
          {/* Left side - Teal background with text */}
          <div className="bg-brand-teal text-white p-12 md:p-16 lg:p-20 flex items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Who are we?
              </h2>
              
              <p className="text-base mb-4 leading-relaxed">
                Suvatsalya Child Growth and Development Centre is a Noida-based centre specialising in consultation-based therapies for child development disorders. We are specialists in child developmental delay and many childhood disorders. We offer effective, evidence-based, multidisciplinary therapies and individualized educational programs (IEPs) for issues including Attention Deficit Hyperactivity Disorder (ADHD), Autism, Cerebral Palsy, Down Syndrome, Global Developmental Delay and other developmental disorders under one roof.
              </p>

              <p className="text-base mb-4 leading-relaxed">
                We use a personal approach with individually tailored treatment. Unlike other treatments, we target the real root of neuro-developmental delay and its associated learning difficulties. With these interventions and other therapies combined, we help achieve lifelong solutions for our patients and their families.
              </p>

              <p className="text-base mb-8 leading-relaxed">
                Suvatsalya has dedicated experience treating children with childhood disorders and has been a trusted centre for families in the region.
              </p>

              <Link to="/contact" className="text-white underline hover:text-gray-200 transition-colors">
                Book an initial consultation
              </Link>
              <span className="text-white"> with us to see how we can help you and your child.</span>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="h-full min-h-[500px] md:min-h-[600px]">
            <img 
              src={doctorImg}
              alt="Child development support" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Patients Section - Optimized */}
      <section className="w-full bg-gray-50 py-14">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue text-center mb-3">
              Our Patients
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">
              Supporting children and families through every step of their journey.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* About Us Card */}
              <Link to="/about" className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={speechImg}
                    alt="About Suvatsalya" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">
                    About Us
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Find out about the diverse neuro-developmental difficulties that we treat.
                  </p>
                </div>
              </Link>

              {/* The Practitioners Card */}
              <Link to="/about#team" className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={occupationalImg} 
                    alt="Our Practitioners" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">
                    The Practitioners
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Meet the team of specialists at Suvatsalya dedicated to your child&apos;s growth.
                  </p>
                </div>
              </Link>

              {/* Contact Us Card */}
              <Link to="/contact" className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={abaImg}
                    alt="Contact Suvatsalya" 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Have questions or would like to book an initial consultation? Reach out to us.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
