import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Placeholder image

// This is a new sub-component to cleanly list each item
function TreatItem({ title, href, children }) {
  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        <Link to={href} className="hover:text-sky-700 transition-colors">
          {title}
        </Link>
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {children}
      </p>
      <Link
        to={href}
        className="inline-flex items-center font-semibold text-sky-700 hover:text-sky-800"
      >
        Learn More
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
}

export function WhatWeTreat() {
  const title = "What We Treat";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section (Image Left, Title Right) --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={hero4Img} // Using hero4 as a placeholder
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Single Column List) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* We've removed the 2-column grid and sidebar here */}
          <div className="max-w-4xl mx-auto">
            
            <TreatItem 
              title="Autism Spectrum Disorder" 
              href="/what-we-treat/autism"
            >
              At Suvatsalya, we believe that every child sees the world in their own beautiful way. Some children communicate, learn, or play differently — not because they cannot, but because their brains process information uniquely. One such developmental difference is called Autism Spectrum Disorder (ASD).
            </TreatItem>

            <TreatItem 
              title="ADHD" 
              href="/what-we-treat/adhd"
            >
              At Suvatsalya Child Growth and Development Centre, we believe that every child deserves to be understood — not judged. One of the most common concerns parents share with us is when their child seems “too restless,” “easily distracted,” or “unable to sit still.” In many such cases, the underlying reason may be Attention-Deficit/Hyperactivity Disorder (ADHD) — a condition that affects how the brain develops and manages attention, activity, and self-control.
            </TreatItem>

            <TreatItem 
              title="Learning Disability" 
              href="/what-we-treat/learning-disability"
            >
              Every child learns in their own way — some absorb information quickly, while others need more time, structure, and support. When a child consistently struggles to read, write, spell, or understand numbers despite average intelligence and good schooling, it may be a sign of a Learning Disability (LD).
            </TreatItem>

            <TreatItem 
              title="Cerebral Palsy" 
              href="/what-we-treat/cerebral-palsy"
            >
              When a child struggles with movement, muscle control, or coordination due to an early brain injury or developmental difference, it may be a condition known as Cerebral Palsy (CP).
            </TreatItem>

            <TreatItem 
              title="Down Syndrome" 
              href="/what-we-treat/down-syndrome"
            >
              Down Syndrome is not a disease — it is a genetic condition that affects how a child grows and learns. With the right guidance, therapies, and inclusive support, children with Down Syndrome can live healthy, happy, and independent lives.
            </TreatItem>

            <TreatItem 
              title="Global Development Delay" 
              href="/what-we-treat/gdd"
            >
              Some children may take a little longer to reach milestones like walking, talking, or learning — and that may be due to a condition known as Global Developmental Delay (GDD).
            </TreatItem>

          </div>
        </div>
      </section>
    </div>
  );
}