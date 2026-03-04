import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import speechImg from '../../assets/images/Speech Therapy.png';
import occupationalImg from '../../assets/images/occupational therapy.png';
import abaImg from '../../assets/images/ABA therapy.png';
import physioImg from '../../assets/relogoimages/physiotherapy_1536x1024_fullstretch.png';
import psychImg from '../../assets/images/Clinical psychologist.png';
import specialImg from '../../assets/images/Special Education.png';

function TherapyCard({ title, href, image, children }) {
  return (
    <Link to={href} className="group flex flex-col sm:flex-row gap-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
      <div className="sm:w-48 h-48 sm:h-36 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
          {children}
        </p>
        <span className="inline-flex items-center text-sm font-medium text-brand-teal group-hover:text-brand-teal-dark">
          Learn More
          <ArrowRight size={14} className="ml-1" />
        </span>
      </div>
    </Link>
  );
}

export function TherapiesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Section - text only */}
      <section className="w-full bg-brand-cream py-14 pt-32 md:pt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-4">
            Therapies We Provide
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Our multidisciplinary team offers a comprehensive range of evidence-based therapies designed to support every aspect of your child's development.
          </p>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            
            <TherapyCard 
              title="Speech and Language Therapy"
              href="/therapies/speech-therapy"
              image={speechImg}
            >
              Speech and Language Therapy helps children who have difficulties speaking clearly, understanding language, or communicating effectively in social settings. Early intervention can make a remarkable difference.
            </TherapyCard>

            <TherapyCard 
              title="Occupational Therapy"
              href="/therapies/occupational-therapy"
              image={occupationalImg}
            >
              Occupational Therapy helps children develop the skills needed for daily living, independence, and participation in school, home, and social life through play-based, individualized approaches.
            </TherapyCard>

            <TherapyCard 
              title="ABA Therapy"
              href="/therapies/aba-therapy"
              image={abaImg}
            >
              Applied Behavior Analysis (ABA) is one of the most effective, scientifically supported therapies for helping children acquire meaningful skills and reduce behaviors that interfere with learning.
            </TherapyCard>

            <TherapyCard 
              title="Physiotherapy"
              href="/therapies/physiotherapy"
              image={physioImg}
            >
              Physiotherapy focuses on improving gross motor skills, strength, balance, and coordination through targeted exercises and movement-based activities for children with physical challenges.
            </TherapyCard>

            <TherapyCard 
              title="Psychological Assessment &amp; Testing"
              href="/therapies/psychological-tests"
              image={psychImg}
            >
              Comprehensive psychological assessments help understand a child's cognitive, emotional, and behavioural profile to guide effective treatment planning and educational support.
            </TherapyCard>

            <TherapyCard 
              title="Special Education"
              href="/therapies/special-education"
              image={specialImg}
            >
              Special Education provides structured, individualized learning plans that help children with developmental challenges build academic, cognitive, and pre-writing skills in a supportive environment.
            </TherapyCard>

          </div>
        </div>
      </section>
    </div>
  );
}
