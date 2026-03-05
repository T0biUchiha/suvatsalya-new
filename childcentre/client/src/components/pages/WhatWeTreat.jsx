import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import autismImg from '../../assets/relogoimages/image_1536x1024.png';
import adhdImg from '../../assets/relogoimages/ADHD_1536x1024_fullstretch.png';
import ldImg from '../../assets/relogoimages/Learning_Disability_1536x1024.png';
import cpImg from '../../assets/relogoimages/cerebral_palsy_1536x1024.png';
import dsImg from '../../assets/relogoimages/ChatGPT Image Mar 1, 2026, 10_01_34 PM.png';
import gddImg from '../../assets/relogoimages/global_development_delay_1536x1024.png';
import hrnImg from '../../assets/images/High Risk.jpeg';

function TreatCard({ title, href, image, children }) {
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

export function WhatWeTreat() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Section - text only */}
      <section className="w-full bg-brand-cream py-14 pt-32 md:pt-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-4">
            What We Treat
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            We provide comprehensive care for a range of neurodevelopmental conditions. Our multidisciplinary team creates individualized treatment plans tailored to each child's unique needs.
          </p>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            
            <TreatCard 
              title="Autism Spectrum Disorder"
              href="/what-we-treat/autism"
              image={autismImg}
            >
              Every child sees the world in their own beautiful way. Some children communicate, learn, or play differently — not because they cannot, but because their brains process information uniquely.
            </TreatCard>

            <TreatCard 
              title="ADHD"
              href="/what-we-treat/adhd"
              image={adhdImg}
            >
              One of the most common concerns parents share with us is when their child seems &quot;too restless,&quot; &quot;easily distracted,&quot; or &quot;unable to sit still.&quot; The underlying reason may be Attention-Deficit/Hyperactivity Disorder.
            </TreatCard>

            <TreatCard 
              title="Learning Disability"
              href="/what-we-treat/learning-disability"
              image={ldImg}
            >
              Every child learns in their own way — some absorb information quickly, while others need more time, structure, and support. When a child consistently struggles to read, write, spell, or understand numbers despite average intelligence, it may be a Learning Disability.
            </TreatCard>

            <TreatCard 
              title="Cerebral Palsy"
              href="/what-we-treat/cerebral-palsy"
              image={cpImg}
            >
              When a child struggles with movement, muscle control, or coordination due to an early brain injury or developmental difference, it may be a condition known as Cerebral Palsy.
            </TreatCard>

            <TreatCard 
              title="Down Syndrome"
              href="/what-we-treat/down-syndrome"
              image={dsImg}
            >
              Down Syndrome is not a disease — it is a genetic condition that affects how a child grows and learns. With the right guidance, therapies, and inclusive support, children with Down Syndrome can live healthy, happy, and independent lives.
            </TreatCard>

            <TreatCard
              title="Global Development Delay"
              href="/what-we-treat/gdd"
              image={gddImg}
            >
              Some children may take a little longer to reach milestones like walking, talking, or learning — and that may be due to a condition known as Global Developmental Delay (GDD).
            </TreatCard>

            <TreatCard
              title="High-Risk Newborns & Developmental Concerns"
              href="/what-we-treat/high-risk-newborn"
              image={hrnImg}
            >
              A high-risk newborn is an infant born prematurely or with a condition that increases the risk of developmental problems. Early identification and intervention significantly improve long-term cognitive, motor, speech, and social outcomes.
            </TreatCard>

          </div>
        </div>
      </section>
    </div>
  );
}
