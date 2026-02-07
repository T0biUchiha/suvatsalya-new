import HeroSection from '../page-components/HeroSection';
import { Button } from '../layout/Button';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/banner.png';
import doctorImg from '../../assets/images/doctor.png';
import specialImg from '../../assets/images/special.png';
import speechImg from '../../assets/images/speech.png';
import occupationalImg from '../../assets/images/occupational therapy.png';
import abaImg from '../../assets/images/ABA Therapy.png';
import { ArrowRight } from 'lucide-react';

export function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection imageUrl={bannerImg} />

      {/* Welcome Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-12">
              Welcome to the Child Development Centre
            </h2>
            
            <p className="text-sm md:text-base text-gray-600 tracking-wide uppercase mb-8 leading-relaxed">
              WE ARE SPECIALISTS IN RETAINED REFLEXES, WHICH IS BELIEVED TO BE THE ROOT OF NEURO-DEVELOPMENTAL DELAY AND MANY CHILDHOOD DISORDERS. WE OFFER DRUG FREE, EFFECTIVE AND NATURAL TREATMENT & THERAPIES FOR ISSUES INCLUDING ATTENTION DEFICIT HYPERACTIVITY DISORDER (ADHD), ATTENTION DEFICIT DISORDER (ADD), DYSPRAXIA, DYSLEXIA, ASPERGER'S SYNDROME, AUTISM, SENSORY PROCESSING DISORDER, ANXIETY AND EVEN GLUE EAR AND BEDWETTING.
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              But those are just the labelled disorders. Retained reflexes and neurodevelopmental delay affects many more of us at a low-level. We learn to cope with it, but it undermines our whole existence. If your child finds writing difficult, is poor at sports, is a fussy eater, a fidget and can't bear labels in the back of their clothes, there is a high probability that he or she has some form of Retained Reflexes or neurodevelopmental immaturity.
            </p>

            {/* 2. WRAPPED BUTTON IN LINK */}
            <Button to="/contact" text="BOOK A CONSULTATION" />
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="w-full bg-white">
        <div className="grid md:grid-cols-2">
          {/* Left side - Teal background with text */}
          <div className="bg-teal-600 text-white p-12 md:p-16 lg:p-20 flex items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Who Are We?
              </h2>
              
              <p className="text-sm md:text-base tracking-wide uppercase mb-6 leading-relaxed">
                THE CHILD DEVELOPMENT CENTRE IS A PRIVATE LONDON-BASED CLINIC SPECIALISING IN THE TREATMENT OF RETAINED REFLEXES AND NEURODEVELOPMENTAL DELAY. RETAINED REFLEXES ARE THE ROOT OF MANY CHILDHOOD DISORDERS INCLUDING ADHD, DYSPRAXIA AND DYSLEXIA.
              </p>

              <p className="text-base mb-6 leading-relaxed">
                We also offer other therapeutic interventions for many aspects of development.
              </p>

              <p className="text-base mb-6 leading-relaxed">
                We use a personal approach with individually tailored treatment methods based on neural stimulation techniques. These exercises help children and adults overcome developmental difficulties. Unlike other treatments, we target the real root of neuro-developmental delay and its associated learning difficulties. With these interventions and other therapies combined, we help achieve lifelong solutions for our patients and their families.
              </p>

              <p className="text-base mb-8 leading-relaxed">
                The Child Development Centre has over 25 years experience treating children with childhood disorders and has been a leader in this area in London for that time.
              </p>

              {/* 3. UPDATED LINK */}
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

      {/* Our Patients Section */}
      <section className="w-full relative">
        {/* Hero Image with Overlay Text */}
        <div className="relative h-80 md:h-96">
          <img 
            src={specialImg} 
            alt="Child development activities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 px-12 py-8 md:px-20 md:py-12">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800">
                Our Patients
              </h2>
            </div>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="bg-gray-50 py-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* About Us Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={speechImg}
                  alt="Speech and language therapy" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    About Us
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Find out about the diverse neuro-developmental difficulties that we treat.
                  </p>
                  {/* 4. WRAPPED BUTTON IN LINK */}
                  <Button to="/about" text="LEARN MORE" />
                </div>
              </div>

              {/* The Practioners Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={occupationalImg} 
                  alt="Occupational therapy" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    The Practioners
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Meet the Practitioners at the Child Development Centre.
                  </p>
                  {/* 5. WRAPPED BUTTON IN LINK */}
                  <Button to="/about#team" text="MEET THE TEAM" />
                </div>
              </div>

              {/* Contact Us Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img 
                  src={abaImg}
                  alt="Applied behavior analysis therapy" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    If you have any questions, or would like to book an Initial Consultation.
                  </p>
                  {/* 6. WRAPPED BUTTON IN LINK */}
                  <Button to="/contact" text="GET IN TOUCH" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mulhall Integration Programme Banner */}
        <div className="bg-slate-800 hover:bg-gray-900 text-white py-16 text-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-widest uppercase mb-4">
              THE MULHALL INTEGRATION PROGRAMME
            </p>
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              LEARN MORE
            </h3>
            {/* 7. UPDATED LINK */}
            <Link 
              to="/therapies" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}