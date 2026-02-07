import { Link } from 'react-router-dom'; // 1. Import Link
import { Button } from '../layout/Button'; // 2. Import Button
import specialImg from '../../assets/images/special.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function AutismPage() {
  const title = "Autism Spectrum Disorder";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={specialImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right: Title */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
              {/* --- 3. ADDED BUTTON HERE --- */}
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
              
              {/* --- All your content follows --- */}

              {/* Intro */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">
                   Understanding Autism Spectrum Disorder (ASD)
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  At Suvatsalya Child Growth and Development Centre
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, we believe that every child sees the world in their own beautiful way. Some children communicate, learn, or play differently — not because they cannot, but because their brains process information uniquely. One such developmental difference is called Autism Spectrum Disorder (ASD).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Autism is not an illness; it is a neurodevelopmental condition that affects the way a person communicates, socializes, and responds to the world. Early understanding, acceptance, and support can make a world of difference for a child on the spectrum.
                </p>
              </div>

              {/* What is ASD? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   What is Autism Spectrum Disorder (ASD)?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Autism Spectrum Disorder (ASD) is a lifelong neurodevelopmental disorder that affects: Social interaction and communication, and Behavioral patterns, interests, and sensory responses.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The term “spectrum” means that each child has a unique combination of strengths and challenges — no two individuals with autism are exactly alike. Some children may require significant support in daily living, while others may live independently but face subtle difficulties in social communication.
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Core Features of Autism
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ASD primarily involves three core areas:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Social Communication and Interaction Challenges</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Difficulty making or maintaining eye contact</ContentListItem>
                  <ContentListItem>Limited use of gestures or facial expressions</ContentListItem>
                  <ContentListItem>Prefers to play alone or parallel play</ContentListItem>
                  <ContentListItem>Trouble understanding emotions, tone, or social cues</ContentListItem>
                  <ContentListItem>May not respond to their name</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Restricted or Repetitive Behaviors</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Repetitive movements such as flapping, spinning, or rocking</ContentListItem>
                  <ContentListItem>Following rigid routines or rituals</ContentListItem>
                  <ContentListItem>Intense focus on specific topics or objects</ContentListItem>
                  <ContentListItem>Difficulty adjusting to changes in environment or routine</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Sensory Sensitivities</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Over- or under-sensitivity to sounds, lights, touch, textures, or smells</ContentListItem>
                  <ContentListItem>Unusual reactions to sensory experiences (covering ears, fascination with lights, etc.)</ContentListItem>
                </ul>
              </div>

              {/* Early Signs */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Early Signs of Autism (by Age)
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Before 1 Year</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Limited eye contact</ContentListItem>
                  <ContentListItem>Rarely smiles socially</ContentListItem>
                  <ContentListItem>Does not respond to name or familiar voice</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 2 Years</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>No meaningful two-word phrases</ContentListItem>
                  <ContentListItem>Limited pointing or showing gestures</ContentListItem>
                  <ContentListItem>Prefers to play alone rather than with others</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 3 Years and Above</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Speech delay or unusual speech patterns (echolalia, scripting)</ContentListItem>
                  <ContentListItem>Difficulty sharing interests or emotions</ContentListItem>
                  <ContentListItem>Rigid routines or fixations on particular toys or activities</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Early identification allows for timely intervention — the earlier we start, the better the developmental outcome.
                </p>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  ASD does not have a single known cause. It is believed to arise from a combination of genetic and environmental factors that affect early brain development.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Possible Contributing Factors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Genetic predisposition (runs in families)</ContentListItem>
                  <ContentListItem>Differences in brain structure and connectivity</ContentListItem>
                  <ContentListItem>Prenatal exposure to toxins, infections, or stress</ContentListItem>
                  <ContentListItem>Advanced parental age at conception</ContentListItem>
                  <ContentListItem>Low birth weight or premature birth</ContentListItem>
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 text-lg">️ Important Note:</h4>
                  <p className="text-yellow-700 text-lg">Autism is not caused by vaccines, poor parenting, or emotional deprivation. These are outdated myths.</p>
                </div>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Diagnosis and Assessment at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, we follow a comprehensive, multidisciplinary assessment model to understand the child’s developmental profile.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Assessment Process Includes:</h4>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li>Detailed Developmental History (from parents and caregivers)</li>
                  <li>Clinical Observation (of communication, play, and social behavior)</li>
                  <li>
                    Screening and Diagnostic Tools, such as:
                    <ul className="list-disc list-inside pl-10 space-y-1 mt-2">
                      <li>ISAA (Indian Scale for Assessment of Autism)</li>
                      <li>DP4 (Developmental Profile – 4th Edition)</li>
                      <li>CARS (Childhood Autism Rating Scale)</li>
                      <li>M-CHAT-R/F (Modified Checklist for Autism in Toddlers)</li>
                    </ul>
                  </li>
                  <li>Speech, Occupational, and Psychological Evaluations for associated delays or sensory issues</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A proper diagnosis is made only after observing symptoms across multiple settings and confirming that behaviors significantly impact functioning.
                </p>
              </div>

              {/* Associated Difficulties */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Associated Difficulties
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Children with ASD may also experience:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Speech and language delays</ContentListItem>
                  <ContentListItem>Sensory processing difficulties</ContentListItem>
                  <ContentListItem>Feeding or sleep issues</ContentListItem>
                  <ContentListItem>Hyperactivity or attention difficulties (ADHD overlap)</ContentListItem>
                  <ContentListItem>Learning challenges or intellectual disability</ContentListItem>
                  <ContentListItem>Emotional regulation difficulties (meltdowns, anxiety)</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Each child’s developmental profile is different — which is why personalized intervention is essential.
                </p>
              </div>

              {/* Therapies */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Therapies and Interventions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya, we focus on developing the child’s potential rather than “fixing” them. Our multidisciplinary team designs individualized therapy programs suited to each child’s unique needs.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Enhances communication, comprehension, and social speech</ContentListItem>
                  <ContentListItem>Encourages meaningful interaction using verbal and nonverbal modes</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy (OT)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves sensory processing, motor coordination, and daily living skills</ContentListItem>
                  <ContentListItem>Helps children tolerate touch, textures, and sounds better</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Behavioral Therapy (ABA-based and Play Therapy)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Uses positive reinforcement to teach desired behaviors</ContentListItem>
                  <ContentListItem>Focuses on improving social communication, imitation, and adaptive skills</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Special Education</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Structured learning environment with individualized teaching plans</ContentListItem>
                  <ContentListItem>Promotes academic, cognitive, and pre-writing skills</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Parental Counselling and Guidance</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Equips parents with strategies to handle behavioral challenges</ContentListItem>
                  <ContentListItem>Encourages consistent home routines and emotional bonding</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Group Therapy and Social Skills Training</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Small group sessions to improve peer interaction and cooperation</ContentListItem>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Home Strategies for Parents
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parents play the most crucial role in supporting their child’s development. Here are some tips that make a big difference:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Maintain consistent routines for meals, sleep, and therapy</ContentListItem>
                  <ContentListItem>Use visual schedules and cues to aid understanding</ContentListItem>
                  <ContentListItem>Reward positive behaviors immediately</ContentListItem>
                  <ContentListItem>Limit screen time and encourage interactive play</ContentListItem>
                  <ContentListItem>Avoid comparing your child to others — focus on progress, not perfection</ContentListItem>
                  <ContentListItem>Work closely with therapists and teachers</ContentListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Prognosis and Hope
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With early intervention, children with autism can make significant progress in communication, behavior, and independence. Many children go on to attend mainstream schools, form friendships, and develop fulfilling lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Autism does not define a child’s future — it simply describes one aspect of who they are.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya, we believe that with love, patience, and the right support, every child can learn, grow, and thrive.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Our Autism Services at Suvatsalya Include
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive developmental assessment (DP4, ISAA, CARS)</ContentListItem>
                  <ContentListItem>Speech and language therapy</ContentListItem>
                  <ContentListItem>Occupational and sensory integration therapy</ContentListItem>
                  <ContentListItem>Behavioral and play therapy</ContentListItem>
                  <ContentListItem>Special education support</ContentListItem>
                  <ContentListItem>Parental counselling and training</ContentListItem>
                  <ContentListItem>Regular developmental progress reviews</ContentListItem>
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