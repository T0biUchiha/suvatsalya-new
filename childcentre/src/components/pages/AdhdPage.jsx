import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import doctorImg from '../../assets/images/doctor.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function AdhdPage() {
  const title = "ADHD (Attention-Deficit/Hyperactivity Disorder)";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={doctorImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
              <div className="mt-8">
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- 2. Content Area (Single-Column Layout) --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This div centers the article content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              
              {/* Intro */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">
                   Understanding ADHD (Attention-Deficit/Hyperactivity Disorder) in Children
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  At Suvatsalya Child Growth and Development Centre
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya Child Growth and Development Centre, we believe that every child deserves to be understood — not judged. One of the most common concerns parents share with us is when their child seems “too restless,” “easily distracted,” or “unable to sit still.”
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In many such cases, the underlying reason may be Attention-Deficit/Hyperactivity Disorder (ADHD) — a condition that affects how the brain develops and manages attention, activity, and self-control.
                </p>
              </div>

              {/* What is ADHD? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   What is ADHD?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that impacts a child’s ability to focus, control impulses, and regulate energy levels. It is not caused by bad parenting or laziness — it is a result of differences in the way the brain develops and functions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Children with ADHD may struggle to sit still, follow instructions, or complete tasks, especially in structured settings like school. These behaviours are more intense, frequent, and persistent than those typically seen in children of the same age.
                </p>
              </div>

              {/* Types of ADHD */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ️ Types of ADHD
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  According to the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders), ADHD is classified into three main types:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Predominantly Inattentive Type</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The child has trouble focusing, gets easily distracted, forgets things, and often appears to be “daydreaming.”
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Predominantly Hyperactive-Impulsive Type</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The child is excessively active, talks a lot, interrupts others, or finds it hard to wait for their turn.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Combined Type</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A mix of inattentive and hyperactive-impulsive symptoms.
                </p>
              </div>

              {/* Common Signs */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Common Signs and Symptoms
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Early Childhood (3–5 years)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Constant movement or running about</ContentListItem>
                  <ContentListItem>Difficulty sitting for meals or stories</ContentListItem>
                  <ContentListItem>Frequent temper tantrums</ContentListItem>
                  <ContentListItem>Short attention span</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In School-Age Children (6–12 years)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Struggles to complete homework</ContentListItem>
                  <ContentListItem>Easily distracted in class</ContentListItem>
                  <ContentListItem>Talks excessively or interrupts</ContentListItem>
                  <ContentListItem>Forgets things and loses belongings</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Adolescents</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Restlessness or feeling “on edge”</ContentListItem>
                  <ContentListItem>Difficulty organizing tasks or managing time</ContentListItem>
                  <ContentListItem>Poor concentration in studies or work</ContentListItem>
                  <ContentListItem>Low self-esteem due to repeated criticism</ContentListItem>
                </ul>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ADHD develops from a combination of genetic, biological, and environmental factors:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Family history of ADHD or related conditions</ContentListItem>
                  <ContentListItem>Differences in brain structure or neurotransmitters (dopamine and norepinephrine)</ContentListItem>
                  <ContentListItem>Premature birth or low birth weight</ContentListItem>
                  <ContentListItem>Prenatal exposure to tobacco, alcohol, or stress</ContentListItem>
                  <ContentListItem>Early childhood trauma or neglect</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  It is important to understand that ADHD is nobody’s fault — not the parents’, not the child’s.
                </p>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   How is ADHD Diagnosed?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya, our diagnostic process is comprehensive and child-friendly, involving multiple steps to ensure accuracy and sensitivity:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Assessment Process Includes:</h4>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Detailed developmental and behavioural history</li>
                  <li>Clinical interviews with parents and teachers</li>
                  <li>Direct observation in clinic and, if needed, school environment</li>
                  <li>
                    Standardized assessment tools such as:
                    <ul className="list-disc list-inside pl-10 space-y-1 mt-2">
                      <li>INCLEN ADHD Tool (India-specific)</li>
                      <li>Conners’ Rating Scales</li>
                      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
                      <li>CBCL (Child Behavior Checklist)</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  For a diagnosis, symptoms must persist for at least six months, appear before age twelve, and be observed in more than one setting (e.g., home and school).
                </p>
              </div>

              {/* Treatment */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Treatment and Management at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ADHD cannot be “cured,” but with the right approach, it can be effectively managed. Our treatment philosophy focuses on empowering children and families through a combination of therapies and strategies.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Behavioral Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Helps children learn self-control, patience, and emotional regulation.</ContentListItem>
                  <ContentListItem>Parents are trained to use positive reinforcement and consistent routines.</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves attention, sensory processing, and fine motor skills.</ContentListItem>
                  <ContentListItem>Helps children manage impulsive movements and develop self-organization.</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Supports communication and comprehension issues, especially in younger children.</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Educational and Classroom Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Individualized Education Plans (IEPs)</ContentListItem>
                  <ContentListItem>Breaks during tasks, visual schedules, and structured instructions</ContentListItem>
                  <ContentListItem>Collaboration with teachers to create an ADHD-friendly classroom</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Medication (if required)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>When prescribed by a child psychiatrist. Medication decisions are made with great care, only when clinically indicated.</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Parent and Family Counselling</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>ADHD affects the entire family. Through counselling, we help parents understand the child’s challenges, reduce stress, and create a positive home environment.</ContentListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ️ Prognosis and Outlook
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With early identification and the right support, children with ADHD can grow into focused, confident, and successful individuals. Many develop exceptional creativity, innovation, and problem-solving abilities once their strengths are nurtured.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya Child Growth and Development Centre, we walk hand in hand with families — helping each child focus, flourish, and find their rhythm.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Our Services for ADHD Include
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive ADHD assessment and diagnosis</ContentListItem>
                  <ContentListItem>Occupational and speech therapy sessions</ContentListItem>
                  <ContentListItem>Behavioural modification programs</ContentListItem>
                  <ContentListItem>Parental counselling and school collaboration</ContentListItem>
                  <ContentListItem>Regular progress monitoring</ContentListItem>
                </ul>
              </div>

              {/* Quote */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}