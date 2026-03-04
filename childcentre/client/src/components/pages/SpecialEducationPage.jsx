import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import specialImg from '../../assets/images/Special Education.png';

function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function SpecialEducationPage() {
  const title = "Special Education";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <img
                src={specialImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left order-first md:order-last">
              <h1 className="text-3xl md:text-4xl font-semibold text-brand-blue">
                {title}
              </h1>
              <div className="mt-6">
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              
              {/* Intro */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  Understanding Special Education
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Special Education is a tailored educational approach designed to meet the unique learning needs of children with developmental, intellectual, physical, or emotional challenges. It uses individualized teaching methods, adaptive tools, and structured learning plans to help every child reach their full potential.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya, we believe that every child can learn — they just need the right support, pace, and environment. Our Special Education program bridges the gap between a child's current abilities and their developmental goals.
                </p>
              </div>

              {/* Who Needs Special Education */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Who Can Benefit from Special Education?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Special Education is beneficial for children with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Autism Spectrum Disorder (ASD)</ContentListItem>
                  <ContentListItem>Attention Deficit Hyperactivity Disorder (ADHD)</ContentListItem>
                  <ContentListItem>Learning Disabilities (Dyslexia, Dysgraphia, Dyscalculia)</ContentListItem>
                  <ContentListItem>Intellectual Disability</ContentListItem>
                  <ContentListItem>Down Syndrome</ContentListItem>
                  <ContentListItem>Global Developmental Delay (GDD)</ContentListItem>
                  <ContentListItem>Cerebral Palsy</ContentListItem>
                  <ContentListItem>Speech and Language Delays</ContentListItem>
                </ul>
              </div>

              {/* Core Areas */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Core Areas of Special Education
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">1. Academic Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Pre-reading, reading, and phonics</ContentListItem>
                  <ContentListItem>Writing and pre-writing activities</ContentListItem>
                  <ContentListItem>Number concepts and basic mathematics</ContentListItem>
                  <ContentListItem>Comprehension and language development</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">2. Cognitive Development</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Attention and concentration training</ContentListItem>
                  <ContentListItem>Memory and sequencing tasks</ContentListItem>
                  <ContentListItem>Problem-solving and reasoning skills</ContentListItem>
                  <ContentListItem>Visual and auditory processing</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">3. Social and Behavioral Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Turn-taking, sharing, and cooperation</ContentListItem>
                  <ContentListItem>Following classroom rules and routines</ContentListItem>
                  <ContentListItem>Emotional regulation and self-expression</ContentListItem>
                  <ContentListItem>Building peer relationships</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">4. Life Skills and Independence</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Self-care routines (dressing, hygiene, feeding)</ContentListItem>
                  <ContentListItem>Safety awareness and community interaction</ContentListItem>
                  <ContentListItem>Functional communication for everyday situations</ContentListItem>
                </ul>
              </div>

              {/* Teaching Methods */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Teaching Methods and Approaches
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our special educators use a variety of research-backed methods to make learning effective and engaging:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Individualized Education Plans (IEPs) based on each child's assessment</ContentListItem>
                  <ContentListItem>Multisensory teaching using visual, auditory, and tactile inputs</ContentListItem>
                  <ContentListItem>Task analysis — breaking skills into small, manageable steps</ContentListItem>
                  <ContentListItem>Play-based and activity-based learning for younger children</ContentListItem>
                  <ContentListItem>Structured routines to build predictability and comfort</ContentListItem>
                  <ContentListItem>Assistive technology and adaptive tools where needed</ContentListItem>
                </ul>
              </div>

              {/* At Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Special Education at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our Special Education program at Suvatsalya is designed to work in close coordination with other therapies — including Speech Therapy, Occupational Therapy, and ABA — for a holistic developmental approach.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Our Services Include:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive learning assessment</ContentListItem>
                  <ContentListItem>Individualized teaching plans and goal setting</ContentListItem>
                  <ContentListItem>One-on-one and small group sessions</ContentListItem>
                  <ContentListItem>School readiness and pre-academic training</ContentListItem>
                  <ContentListItem>Handwriting improvement programs</ContentListItem>
                  <ContentListItem>Remedial education for school-going children</ContentListItem>
                  <ContentListItem>Parent counselling and home program guidance</ContentListItem>
                  <ContentListItem>Regular progress reviews and reporting</ContentListItem>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Benefits of Special Education
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Builds foundational academic and pre-academic skills</ContentListItem>
                  <ContentListItem>Improves attention, memory, and cognitive functioning</ContentListItem>
                  <ContentListItem>Enhances social interaction and classroom behavior</ContentListItem>
                  <ContentListItem>Develops independence in daily tasks</ContentListItem>
                  <ContentListItem>Boosts confidence and self-esteem</ContentListItem>
                  <ContentListItem>Prepares children for mainstream or supported schooling</ContentListItem>
                  <ContentListItem>Empowers parents with strategies for continued learning at home</ContentListItem>
                </ul>
              </div>

              {/* Role of Parents */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Role of Parents
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Parents are essential partners in the Special Education journey. We guide parents to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Reinforce learning activities at home</ContentListItem>
                  <ContentListItem>Create a structured and supportive home environment</ContentListItem>
                  <ContentListItem>Celebrate small achievements to build motivation</ContentListItem>
                  <ContentListItem>Collaborate with educators and therapists for consistent progress</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-3">
                  At Suvatsalya, our goal is to help every child learn, grow, and succeed — at their own pace, in their own way.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
