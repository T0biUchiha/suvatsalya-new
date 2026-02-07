import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import occupationalImg from '../../assets/images/occupational therapy.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function CerebralPalsyPage() {
  const title = "Cerebral Palsy";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={occupationalImg}
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
                  ️ Understanding Cerebral Palsy (CP)
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  At Suvatsalya Child Growth and Development Centre
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya Child Growth and Development Centre, we believe that every child deserves the chance to move, grow, and thrive — at their own pace. When a child struggles with movement, muscle control, or coordination due to an early brain injury or developmental difference, it may be a condition known as Cerebral Palsy (CP).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cerebral Palsy is not a disease, but a neuromotor condition that affects posture, muscle tone, and movement. With timely therapy, assistive care, and family support, children with CP can lead active, independent, and fulfilling lives.
                </p>
              </div>

              {/* What is CP? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   What is Cerebral Palsy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Cerebral Palsy (CP) is a group of permanent movement and posture disorders caused by damage to the developing brain, either during pregnancy, birth, or early infancy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The term “cerebral” refers to the brain, and “palsy” means weakness or problems with muscle control.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Although the brain injury is non-progressive (it does not worsen with time), the physical challenges may change as the child grows — making ongoing therapy and support essential.
                </p>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ️ Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Cerebral Palsy occurs when the developing brain is injured or doesn’t develop normally. This can happen before, during, or shortly after birth.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Possible Causes Include:</h4>
                <h5 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Before Birth (Prenatal)</h5>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Maternal infections (rubella, cytomegalovirus, toxoplasmosis)</ContentListItem>
                  <ContentListItem>Restricted oxygen or blood supply to the fetus</ContentListItem>
                  <ContentListItem>Genetic or brain malformations</ContentListItem>
                  <ContentListItem>Maternal health issues (thyroid disorders, high blood pressure)</ContentListItem>
                </ul>
                <h5 className="text-xl font-semibold text-gray-800 mt-4 mb-2">During Birth (Perinatal)</h5>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Lack of oxygen (birth asphyxia)</ContentListItem>
                  <ContentListItem>Premature delivery</ContentListItem>
                  <ContentListItem>Complicated or prolonged labor</ContentListItem>
                  <ContentListItem>Low birth weight or multiple births (twins/triplets)</ContentListItem>
                </ul>
                <h5 className="text-xl font-semibold text-gray-800 mt-4 mb-2">After Birth (Postnatal)</h5>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Brain infections (meningitis, encephalitis)</ContentListItem>
                  <ContentListItem>Head injury</ContentListItem>
                  <ContentListItem>Severe jaundice (kernicterus)</ContentListItem>
                  <ContentListItem>Oxygen deprivation (choking, drowning, etc.)</ContentListItem>
                </ul>
              </div>

              {/* Types of CP */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Types of Cerebral Palsy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Cerebral Palsy is classified based on the type of movement disorder and which part of the brain is affected:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Spastic Cerebral Palsy (Most Common – 70–80%)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Muscles are stiff and tight (increased tone). Movements appear jerky or awkward.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">Subtypes:</p>
                <ul className="list-disc list-inside pl-6 space-y-2">
                  <ContentListItem>Spastic Diplegia: mainly affects legs</ContentListItem>
                  <ContentListItem>Spastic Hemiplegia: affects one side of the body</ContentListItem>
                  <ContentListItem>Spastic Quadriplegia: affects all four limbs and trunk</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Dyskinetic (Athetoid) Cerebral Palsy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Involuntary, uncontrolled movements (writhing or twisting)</ContentListItem>
                  <ContentListItem>May affect face, tongue, arms, and legs</ContentListItem>
                  <ContentListItem>Muscle tone fluctuates between tight and loose</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Ataxic Cerebral Palsy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Problems with balance and coordination</ContentListItem>
                  <ContentListItem>Unsteady walking and difficulty with fine motor skills</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Mixed Type</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Combination of two or more movement types (commonly spastic + dyskinetic)</ContentListItem>
                </ul>
              </div>

              {/* Associated Challenges */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Associated Challenges
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Children with CP may also experience:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Developmental delays (motor, speech, or cognitive)</ContentListItem>
                  <ContentListItem>Difficulty swallowing or feeding</ContentListItem>
                  <ContentListItem>Speech and communication difficulties</ContentListItem>
                  <ContentListItem>Vision or hearing impairments</ContentListItem>
                  <ContentListItem>Seizures (epilepsy)</ContentListItem>
                  <ContentListItem>Learning difficulties</ContentListItem>
                  <ContentListItem>Behavioral or emotional concerns</ContentListItem>
                  <ContentListItem>Orthopedic complications (scoliosis, joint deformities)</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Each child’s profile is unique — the severity and combination of symptoms vary widely.
                </p>
              </div>

              {/* Early Signs */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Early Signs of Cerebral Palsy
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Infants (0–12 months)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Poor head control or floppy body</ContentListItem>
                  <ContentListItem>Delayed rolling, sitting, or crawling</ContentListItem>
                  <ContentListItem>Stiff or tight muscles</ContentListItem>
                  <ContentListItem>Fisting of hands or scissoring of legs</ContentListItem>
                  <ContentListItem>Doesn’t reach out or use both sides of body equally</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Toddlers (1–3 years)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Late walking or abnormal gait</ContentListItem>
                  <ContentListItem>Frequent falls or toe-walking</ContentListItem>
                  <ContentListItem>Trouble feeding, drooling, or swallowing</ContentListItem>
                  <ContentListItem>Speech delay</ContentListItem>
                  <ContentListItem>Difficulty holding or manipulating objects</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Early identification allows for timely intervention, which can significantly improve mobility and independence.
                </p>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Diagnosis at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, diagnosis involves a multidisciplinary approach — combining medical, developmental, and neurological evaluations.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Diagnostic Steps Include:</h4>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li>Detailed Birth and Developmental History</li>
                  <li>Clinical Observation and Physical Examination</li>
                  <li>Neurological Evaluation</li>
                  <li>Motor and Reflex Assessment</li>
                  <li>
                    Developmental Screening Tools, such as:
                    <ul className="list-disc list-inside pl-10 space-y-1 mt-2">
                      <li>DP4 (Developmental Profile – 4th Edition)</li>
                      <li>GMFM (Gross Motor Function Measure)</li>
                      <li>Bayley Scales of Infant and Toddler Development</li>
                    </ul>
                  </li>
                  <li>Imaging (if indicated): MRI or CT scan to identify brain injury patterns</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  The focus is not just on confirming CP but also on understanding the child’s strengths and therapy needs.
                </p>
              </div>

              {/* Management */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Management and Intervention
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While the brain injury cannot be reversed, early and holistic therapy can greatly improve muscle control, balance, communication, and independence. At Suvatsalya, we design individualized intervention plans based on the child’s specific needs.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Physiotherapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Core therapy for improving muscle strength, balance, and movement</ContentListItem>
                  <ContentListItem>Stretching exercises to reduce spasticity</ContentListItem>
                  <ContentListItem>Gait training and posture correction</ContentListItem>
                  <ContentListItem>Use of supportive devices like braces or walkers</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy (OT)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Enhances fine motor and daily living skills (feeding, dressing, writing)</ContentListItem>
                  <ContentListItem>Improves sensory integration and body awareness</ContentListItem>
                  <ContentListItem>Adaptive equipment training for independence</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Helps with communication, swallowing, and oral-motor control</ContentListItem>
                  <ContentListItem>May include AAC (Augmentative and Alternative Communication) for non-verbal children</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Special Education and Cognitive Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Individualized learning plans</ContentListItem>
                  <ContentListItem>Focus on functional academics and adaptive skills</ContentListItem>
                  <ContentListItem>Coordination with schools for inclusive education</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Behavioral and Psychological Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Managing frustration, self-esteem, and social-emotional development</ContentListItem>
                  <ContentListItem>Family counselling and parent training</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Medical and Orthopedic Management</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Muscle relaxant medications (e.g., Baclofen) if required</ContentListItem>
                  <ContentListItem>Botulinum toxin (Botox) injections for spasticity</ContentListItem>
                  <ContentListItem>Orthopedic surgeries in severe contractures</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">7. Assistive Devices</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Orthoses, wheelchairs, standing frames, or adaptive seating systems</ContentListItem>
                  <ContentListItem>Technology-based aids for communication and mobility</ContentListItem>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Home Strategies for Parents
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parents are central to the child’s progress. At Suvatsalya, we empower parents with practical, daily-life strategies:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Continue home exercise programs taught by therapists</ContentListItem>
                  <ContentListItem>Encourage independent attempts, even if slow</ContentListItem>
                  <ContentListItem>Use adaptive utensils or supportive chairs for feeding</ContentListItem>
                  <ContentListItem>Provide emotional encouragement — not overprotection</ContentListItem>
                  <ContentListItem>Maintain therapy consistency and track milestones</ContentListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Prognosis and Hope
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Cerebral Palsy is a lifelong condition, but it does not define the child’s future. With early, consistent therapy and an enabling environment, most children can walk, communicate, learn, and live meaningful lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya Child Growth and Development Centre, our team of therapists, educators, and psychologists works together to nurture every child’s abilities — helping them move toward independence, confidence, and joy.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Our Cerebral Palsy Services Include
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Developmental and neurological assessment</ContentListItem>
                  <ContentListItem>Physiotherapy and occupational therapy</ContentListItem>
                  <ContentListItem>Speech and feeding therapy</ContentListItem>
                  <ContentListItem>Sensory integration therapy</ContentListItem>
                  <ContentListItem>Special education and early intervention programs</ContentListItem>
                  <ContentListItem>Parental counselling and home program guidance</ContentListItem>
                  <ContentListItem>Assistive device support and progress tracking</ContentListItem>
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