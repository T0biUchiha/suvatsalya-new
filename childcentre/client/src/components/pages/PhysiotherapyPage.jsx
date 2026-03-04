import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import physioImg from '../../assets/relogoimages/physiotherapy_1536x1024_fullstretch.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function PhysiotherapyPage() {
  const title = "Physiotherapy";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={physioImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
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
      
      {/* --- 2. Content Area (Single-Column Layout) --- */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This div centers the article content */}
          <div className="max-w-6xl mx-auto">
            <div className="space-y-5">
              
              {/* Intro */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  ‍️ Physiotherapy for Children: Building Strength, Movement, and Confidence
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                   Introduction
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we understand that movement is a vital part of a child’s growth and independence. Some children face challenges in muscle strength, coordination, balance, or mobility due to developmental delays, neurological conditions, or injuries.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Physiotherapy is a specialized therapy that helps children develop, restore, or maintain their physical abilities, so they can participate fully in everyday life, school, and play.
                </p>
              </div>

              {/* What is Physiotherapy? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What is Physiotherapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Physiotherapy (also called physical therapy) is a science-based intervention aimed at improving a child’s movement, posture, muscle strength, and functional abilities. In children, physiotherapy helps:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Achieve developmental milestones like sitting, crawling, and walking</ContentListItem>
                  <ContentListItem>Improve posture and balance</ContentListItem>
                  <ContentListItem>Enhance coordination and motor planning</ContentListItem>
                  <ContentListItem>Prevent or manage complications from physical or neurological conditions</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  The therapy is individualized, goal-oriented, and often play-based to make exercises fun and engaging for children.
                </p>
              </div>

              {/* Who Needs Physiotherapy? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Who Needs Physiotherapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Children who may benefit from physiotherapy include those with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Cerebral Palsy (CP)</ContentListItem>
                  <ContentListItem>Down Syndrome or Global Developmental Delay</ContentListItem>
                  <ContentListItem>Premature birth complications</ContentListItem>
                  <ContentListItem>Muscle weakness, low tone (hypotonia), or high tone (hypertonia)</ContentListItem>
                  <ContentListItem>Autism Spectrum Disorder (ASD) with motor difficulties</ContentListItem>
                  <ContentListItem>Injuries, fractures, or orthopedic conditions</ContentListItem>
                  <ContentListItem>Post-surgical rehabilitation needs</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Early intervention is key to helping children maximize their physical potential and participate actively in daily life.
                </p>
              </div>

              {/* Assessment */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Assessment in Physiotherapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, physiotherapy begins with a comprehensive evaluation to understand the child’s strengths, challenges, and goals:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Review of medical and developmental history</ContentListItem>
                  <ContentListItem>Assessment of muscle strength, joint mobility, and tone</ContentListItem>
                  <ContentListItem>Evaluation of posture, balance, and coordination</ContentListItem>
                  <ContentListItem>Observation of gross motor milestones (sitting, crawling, walking)</ContentListItem>
                  <ContentListItem>Identification of functional limitations in daily activities</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Based on the findings, a personalized physiotherapy plan is designed to address the child’s specific needs.
                </p>
              </div>

              {/* Core Areas */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Core Areas of Paediatric Physiotherapy
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Gross Motor Development</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enhancing crawling, sitting, standing, walking, running, and jumping
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Muscle Strength and Tone Management</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Exercises to strengthen weak muscles or relax tight muscles. Improving postural stability and joint mobility
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Balance and Coordination</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Activities to develop motor planning, spatial awareness, and body control
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Gait Training and Mobility</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Helping children walk independently or use assistive devices effectively
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Posture Correction</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Preventing musculoskeletal deformities and promoting proper alignment
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Functional Skill Enhancement</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Supporting daily tasks such as climbing stairs, playing, or participating in school activities
                </p>
              </div>

              {/* Techniques */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Techniques Used in Paediatric Physiotherapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Physiotherapy is child-focused, engaging, and evidence-based. Techniques may include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Stretching and strengthening exercises</ContentListItem>
                  <ContentListItem>Balance and coordination games</ContentListItem>
                  <ContentListItem>Treadmill or gait training</ContentListItem>
                  <ContentListItem>Therapy ball and obstacle courses</ContentListItem>
                  <ContentListItem>Sensory-motor integration activities</ContentListItem>
                  <ContentListItem>Play-based exercises to encourage motivation and participation</ContentListItem>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Benefits of Physiotherapy
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves muscle strength, flexibility, and joint function</ContentListItem>
                  <ContentListItem>Enhances balance, coordination, and gross motor skills</ContentListItem>
                  <ContentListItem>Supports achievement of developmental milestones</ContentListItem>
                  <ContentListItem>Reduces risk of deformities and physical complications</ContentListItem>
                  <ContentListItem>Promotes independence in daily activities</ContentListItem>
                  <ContentListItem>Increases confidence, participation, and social inclusion</ContentListItem>
                </ul>
              </div>

              {/* Physiotherapy at Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Physiotherapy at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, our paediatric physiotherapy program is:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem><strong>Individualized:</strong> Each child receives a tailored therapy plan based on assessment</ContentListItem>
                  <ContentListItem><strong>Multidisciplinary:</strong> Coordinated with occupational therapy, speech therapy, and special education</ContentListItem>
                  <ContentListItem><strong>Play-based:</strong> Sessions are fun and engaging to motivate children</ContentListItem>
                  <ContentListItem><strong>Goal-oriented:</strong> Clear milestones are set and progress is regularly tracked</ContentListItem>
                  <ContentListItem><strong>Family-centered:</strong> Parents are guided to continue exercises at home for consistency</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  We focus on functional gains that help children actively participate in school, home, and community life.
                </p>
              </div>

              {/* Role of Parents */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Role of Parents
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Parents are integral to therapy success. At Suvatsalya, we train parents to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Encourage daily practice of exercises at home</ContentListItem>
                  <ContentListItem>Reinforce posture, balance, and mobility activities</ContentListItem>
                  <ContentListItem>Use play and daily routines to practice motor skills</ContentListItem>
                  <ContentListItem>Celebrate small achievements to motivate the child</ContentListItem>
                </ul>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Conclusion
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Physiotherapy empowers children to move, explore, and participate fully in life. With early intervention, structured therapy, and parental involvement, children can reach their physical potential, improve independence, and enjoy active, confident lives.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}