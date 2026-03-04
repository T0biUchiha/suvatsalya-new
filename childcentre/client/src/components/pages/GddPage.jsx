import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import gddImg from '../../assets/relogoimages/global_development_delay_1536x1024.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function GddPage() {
  const title = "Global Developmental Delay";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={gddImg}
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
                   Understanding Global Developmental Delay (GDD)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we understand that every child’s journey unfolds at their own pace. Some children may take a little longer to reach milestones like walking, talking, or learning — and that may be due to a condition known as Global Developmental Delay (GDD).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Early recognition and intervention can make a world of difference. With compassionate care, structured therapies, and family guidance, children with GDD can develop essential skills and move toward independence.
                </p>
              </div>

              {/* What is GDD? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What is Global Developmental Delay?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Global Developmental Delay (GDD) is a diagnosis given to children under 5 years of age who show significant delays in two or more areas of development, such as:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Motor skills (sitting, crawling, walking)</ContentListItem>
                  <ContentListItem>Speech and language</ContentListItem>
                  <ContentListItem>Cognitive skills (learning, problem-solving)</ContentListItem>
                  <ContentListItem>Social and emotional interaction</ContentListItem>
                  <ContentListItem>Daily living and self-help abilities</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  In simple terms, GDD means that a child is developing slower than expected for their age in several areas — but with early therapy and support, they can make remarkable progress.
                </p>
              </div>

              {/* GDD vs ID */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Difference Between GDD and Intellectual Disability (ID)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  GDD is diagnosed in children under 5 years, as it’s too early to assess full intellectual functioning.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If developmental delays persist beyond 5 years and affect learning and daily functioning, the diagnosis may change to Intellectual Disability (ID).
                </p>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  ️ Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Global Developmental Delay can result from various biological, genetic, or environmental factors affecting the developing brain. In many cases, the exact cause may remain unknown.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Possible Causes Include:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Genetic abnormalities (e.g., Down Syndrome, Fragile X Syndrome)</ContentListItem>
                  <ContentListItem>Brain malformations or structural abnormalities</ContentListItem>
                  <ContentListItem>Premature birth or low birth weight</ContentListItem>
                  <ContentListItem>Birth complications leading to oxygen deprivation</ContentListItem>
                  <ContentListItem>Metabolic or endocrine disorders</ContentListItem>
                  <ContentListItem>Infections during pregnancy (rubella, cytomegalovirus, toxoplasmosis)</ContentListItem>
                  <ContentListItem>Postnatal infections (meningitis, encephalitis)</ContentListItem>
                  <ContentListItem>Severe malnutrition</ContentListItem>
                  <ContentListItem>Environmental deprivation or lack of stimulation</ContentListItem>
                  <ContentListItem>Exposure to toxins (alcohol, lead, drugs)</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Each child’s condition is unique — understanding the root cause helps in planning effective intervention strategies.
                </p>
              </div>

              {/* Early Signs */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Early Signs of Global Developmental Delay
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Parents are often the first to notice when something feels “different.” Some common early signs include:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Motor Delay:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Poor head control beyond 4 months</ContentListItem>
                  <ContentListItem>Late sitting, crawling, or walking</ContentListItem>
                  <ContentListItem>Low or stiff muscle tone</ContentListItem>
                  <ContentListItem>Clumsiness or uncoordinated movements</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Speech and Language Delay:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Not babbling or responding to name by 12 months</ContentListItem>
                  <ContentListItem>Limited vocabulary for age</ContentListItem>
                  <ContentListItem>Difficulty understanding instructions</ContentListItem>
                  <ContentListItem>Poor speech clarity</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Cognitive Delay:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Difficulty recognizing familiar objects or people</ContentListItem>
                  <ContentListItem>Trouble following simple commands</ContentListItem>
                  <ContentListItem>Struggles with attention, memory, or play</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Social and Emotional Delay:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Poor eye contact or limited social smile</ContentListItem>
                  <ContentListItem>Not imitating actions or gestures</ContentListItem>
                  <ContentListItem>Difficulty playing with peers</ContentListItem>
                  <ContentListItem>Limited emotional response</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Adaptive (Daily Living) Delay:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Difficulty feeding independently</ContentListItem>
                  <ContentListItem>Late toilet training</ContentListItem>
                  <ContentListItem>Trouble with dressing or self-care</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If multiple areas show delays, evaluation for Global Developmental Delay is recommended.
                </p>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Diagnosis at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, diagnosis is a collaborative and child-friendly process, focused on understanding the child’s strengths and challenges.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Our Diagnostic Approach Includes:</h4>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li>Detailed Developmental History (pregnancy, birth, milestones)</li>
                  <li>Physical and Neurological Examination</li>
                  <li>
                    Developmental Screening and Standardized Assessments, such as:
                    <ul className="list-disc list-inside pl-10 space-y-1 mt-2">
                      <li>DP4 (Developmental Profile – 4th Edition)</li>
                      <li>Bayley Scales of Infant and Toddler Development</li>
                      <li>Vineland Adaptive Behavior Scales (VABS)</li>
                      <li>Childhood Autism Rating Scale (CARS) (if social delay observed)</li>
                    </ul>
                  </li>
                  <li>Hearing and Vision Testing</li>
                  <li>Genetic, Metabolic, or Imaging Studies (if indicated)</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Our goal is not just to label — but to understand why the delay exists, which areas need support, and how to build a personalized plan for growth.
                </p>
              </div>

              {/* Management */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Management and Early Intervention
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  While GDD cannot be “cured,” timely and consistent intervention can help a child reach their developmental potential. At Suvatsalya, we offer a multidisciplinary intervention model, combining therapies tailored to each child’s developmental profile.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Physiotherapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Enhances motor development and coordination</ContentListItem>
                  <ContentListItem>Improves posture, balance, and muscle strength</ContentListItem>
                  <ContentListItem>Uses play-based movement activities</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy (OT)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Develops fine motor and self-help skills</ContentListItem>
                  <ContentListItem>Improves sensory integration and attention</ContentListItem>
                  <ContentListItem>Encourages independence in daily routines</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Stimulates communication and understanding</ContentListItem>
                  <ContentListItem>Builds vocabulary, comprehension, and expression</ContentListItem>
                  <ContentListItem>Addresses feeding and oral-motor difficulties</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Special Education and Cognitive Stimulation</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Customized learning programs for early concepts</ContentListItem>
                  <ContentListItem>Enhances memory, problem-solving, and adaptive behavior</ContentListItem>
                  <ContentListItem>Encourages play-based learning and creativity</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Behavioral and Psychological Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Manages hyperactivity, frustration, and emotional difficulties</ContentListItem>
                  <ContentListItem>Family counselling to promote positive parenting</ContentListItem>
                  <ContentListItem>Structured routine and reinforcement strategies</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Medical and Nutritional Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Regular medical check-ups for associated conditions</ContentListItem>
                  <ContentListItem>Nutritional guidance to support brain growth and overall health</ContentListItem>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Role of Parents and Home Environment
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Parents are the child’s first and most consistent teachers. At Suvatsalya, we emphasize parental involvement and guide families with practical home-based strategies.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Parenting Tips for GDD:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Talk, sing, and read to your child daily</ContentListItem>
                  <ContentListItem>Encourage physical play and exploration</ContentListItem>
                  <ContentListItem>Use picture cards, songs, and games for learning</ContentListItem>
                  <ContentListItem>Break down tasks into small, achievable steps</ContentListItem>
                  <ContentListItem>Reinforce efforts with praise and affection</ContentListItem>
                  <ContentListItem>Maintain a predictable routine to reduce anxiety</ContentListItem>
                  <ContentListItem>Collaborate with therapists for home carryover programs</ContentListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Prognosis and Hope
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  The outlook for children with GDD depends on its cause and severity. With early diagnosis and continuous therapy, many children show tremendous improvement — some even catch up with peers over time.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Even when delays persist, children learn to adapt, communicate, and function meaningfully in daily life with consistent support. At Suvatsalya, we believe that every milestone — no matter how small — is a victory worth celebrating.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Our GDD Services at Suvatsalya Include:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive developmental evaluation</ContentListItem>
                  <ContentListItem>Physiotherapy and occupational therapy</ContentListItem>
                  <ContentListItem>Speech and language therapy</ContentListItem>
                  <ContentListItem>Sensory integration therapy</ContentListItem>
                  <ContentListItem>Cognitive and play-based interventions</ContentListItem>
                  <ContentListItem>Parental counselling and home programs</ContentListItem>
                  <ContentListItem>Progress tracking and individualized reports</ContentListItem>
                </ul>
              </div>

              {/* Commitment */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Our Commitment
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we walk hand-in-hand with families — helping each child unlock their potential through care, compassion, and consistency. Our team of specialists, therapists, and educators work collaboratively to ensure holistic development in every child.
                </p>
              </div>

              {/* Quote */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}