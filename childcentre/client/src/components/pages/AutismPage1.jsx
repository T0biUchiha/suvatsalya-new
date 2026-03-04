import { Star, CheckCircle, Plus } from 'lucide-react';
import { AppointmentForm } from '../layout/AppointmentForm';

// Placeholder images from your assets
import stickyImg from '../../assets/home-page/hero1.jpg'; 
import therapyImg from '../../assets/home-page/hero2.jpg'; 
import faqImg from '../../assets/home-page/hero4.jpg'; 

// --- B. Reusable Bullet List ---
function StyledListItem({ children }) {
  // ... (this function is unchanged)
  return (
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <CheckCircle className="h-5 w-5 text-red-500" />
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

// --- C. Reusable FAQ Item ---
function FaqItem({ title, children }) {
  // ... (this function is unchanged)
  return (
    <details className="group border-b border-gray-200">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
        <Plus className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-45" />
      </summary>
      <div className="pb-4 text-gray-600 leading-relaxed">
        {children}
      </div>
    </details>
  );
}


// --- D. The Main Page Component ---
export function AutismPage() {
  return (
    <div className="bg-white pt-2">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-16 md:py-24 pt-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Autism Spectrum Disorder
              </h1>
              {/* ... (rest of the hero content is unchanged) ... */}
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                As of 2025, the Centers for Disease Control and Prevention (CDC) says that about 1 in 31 children aged 8 in the United States are diagnosed with Autism Spectrum Disorder (ASD). That's around 3.2% of children.
              </p>
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                Worldwide, the World Health Organization (WHO) says about 1 in 100 children may have ASD. This number can change based on how each country tests and reports it.
              </p>
              {/* Stats */}
              <div className="flex space-x-12">
                <div className="text-center">
                  <div className="flex text-yellow-500">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <p className="text-gray-700 mt-1">Google ratings</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-gray-900">30+</p>
                  <p className="text-gray-700 mt-1">Centers</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-gray-900">300+</p>
                  <p className="text-gray-700 mt-1">Therapist</p>
                </div>
              </div>
            </div>
            
            {/* Right Side: Appointment Form */}
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Main Content "Sticky" Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* --- Left Scrolling Column --- */}
            <div className="md:col-span-1 space-y-10">
              {/* All the content here is unchanged... */}
              {/* Intro Text */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">
                   Understanding Autism Spectrum Disorder (ASD)
                  At Suvatsalya Child Growth and Development Centre
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At Suvatsalya, we believe that every child sees the world in their own beautiful way. Some children communicate, learn, or play differently — not because they cannot, but because their brains process information uniquely. One such developmental difference is called Autism Spectrum Disorder (ASD).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Autism is not an illness; it is a neurodevelopmental condition that affects the way a person communicates, socializes, and responds to the world. Early understanding, acceptance, and support can make a world of difference for a child on the spectrum.
                </p>
              </div>

              {/* What is ASD? */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> What is Autism Spectrum Disorder (ASD)?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Autism Spectrum Disorder (ASD) is a lifelong neurodevelopmental disorder that affects:
                  Social interaction and communication, and
                  Behavioral patterns, interests, and sensory responses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The term “spectrum” means that each child has a unique combination of strengths and challenges — no two individuals with autism are exactly alike. Some children may require significant support in daily living, while others may live independently but face subtle difficulties in social communication.
                </p>
              </div>
              
              {/* Core Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Core Features of Autism</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">ASD primarily involves three core areas:</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Social Communication and Interaction Challenges</h4>
                <ul className="space-y-2">
                  <StyledListItem>Difficulty making or maintaining eye contact</StyledListItem>
                  <StyledListItem>Limited use of gestures or facial expressions</StyledListItem>
                  <StyledListItem>Prefers to play alone or parallel play</StyledListItem>
                  <StyledListItem>Trouble understanding emotions, tone, or social cues</StyledListItem>
                  <StyledListItem>May not respond to their name</StyledListItem>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2. Restricted or Repetitive Behaviors</h4>
                <ul className="space-y-2">
                  <StyledListItem>Repetitive movements such as flapping, spinning, or rocking</StyledListItem>
                  <StyledListItem>Following rigid routines or rituals</StyledListItem>
                  <StyledListItem>Intense focus on specific topics or objects</StyledListItem>
                  <StyledListItem>Difficulty adjusting to changes in environment or routine</StyledListItem>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3. Sensory Sensitivities</h4>
                <ul className="space-y-2">
                  <StyledListItem>Over- or under-sensitivity to sounds, lights, touch, textures, or smells</StyledListItem>
                  <StyledListItem>Unusual reactions to sensory experiences (covering ears, fascination with lights, etc.)</StyledListItem>
                </ul>
              </div>

              {/* Early Signs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Early Signs of Autism (by Age)</h3>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Before 1 Year</h4>
                <ul className="space-y-2">
                  <StyledListItem>Limited eye contact</StyledListItem>
                  <StyledListItem>Rarely smiles socially</StyledListItem>
                  <StyledListItem>Does not respond to name or familiar voice</StyledListItem>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">By 2 Years</h4>
                <ul className="space-y-2">
                  <StyledListItem>No meaningful two-word phrases</StyledListItem>
                  <StyledListItem>Limited pointing or showing gestures</StyledListItem>
                  <StyledListItem>Prefers to play alone rather than with others</StyledListItem>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">By 3 Years and Above</h4>
                <ul className="space-y-2">
                  <StyledListItem>Speech delay or unusual speech patterns (echolalia, scripting)</StyledListItem>
                  <StyledListItem>Difficulty sharing interests or emotions</StyledListItem>
                  <StyledListItem>Rigid routines or fixations on particular toys or activities</StyledListItem>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Early identification allows for timely intervention — the earlier we start, the better the developmental outcome.</p>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Causes and Risk Factors</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">ASD does not have a single known cause. It is believed to arise from a combination of genetic and environmental factors that affect early brain development.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Possible Contributing Factors:</h4>
                <ul className="space-y-2">
                  <StyledListItem>Genetic predisposition (runs in families)</StyledListItem>
                  <StyledListItem>Differences in brain structure and connectivity</StyledListItem>
                  <StyledListItem>Prenatal exposure to toxins, infections, or stress</StyledListItem>
                  <StyledListItem>Advanced parental age at conception</StyledListItem>
                  <StyledListItem>Low birth weight or premature birth</StyledListItem>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800">️ Important Note:</h4>
                  <p className="text-yellow-700">Autism is not caused by vaccines, poor parenting, or emotional deprivation. These are outdated myths.</p>
                </div>
              </div>
              
              {/* Diagnosis */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Diagnosis and Assessment at Suvatsalya</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">At Suvatsalya Child Growth and Development Centre, we follow a comprehensive, multidisciplinary assessment model to understand the child’s developmental profile.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Assessment Process Includes:</h4>
                <ul className="space-y-2">
                  <StyledListItem>Detailed Developmental History (from parents and caregivers)</StyledListItem>
                  <StyledListItem>Clinical Observation (of communication, play, and social behavior)</StyledListItem>
                  <StyledListItem>Screening and Diagnostic Tools, such as:</StyledListItem>
                  <ul className="space-y-1 list-disc list-inside pl-6 text-gray-950">
                    <li>ISAA (Indian Scale for Assessment of Autism)</li>
                    <li>DP4 (Developmental Profile – 4th Edition)</li>
                    <li>CARS (Childhood Autism Rating Scale)</li>
                    <li>M-CHAT-R/F (Modified Checklist for Autism in Toddlers)</li>
                  </ul>
                  <StyledListItem>Speech, Occupational, and Psychological Evaluations for associated delays or sensory issues</StyledListItem>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">A proper diagnosis is made only after observing symptoms across multiple settings and confirming that behaviors significantly impact functioning.</p>
              </div>

              {/* Associated Difficulties */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Associated Difficulties</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Children with ASD may also experience:</p>
                <ul className="space-y-2">
                  <StyledListItem>Speech and language delays</StyledListItem>
                  <StyledListItem>Sensory processing difficulties</StyledListItem>
                  <StyledListItem>Feeding or sleep issues</StyledListItem>
                  <StyledListItem>Hyperactivity or attention difficulties (ADHD overlap)</StyledListItem>
                  <StyledListItem>Learning challenges or intellectual disability</StyledListItem>
                  <StyledListItem>Emotional regulation difficulties (meltdowns, anxiety)</StyledListItem>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">Each child’s developmental profile is different — which is why personalized intervention is essential.</p>
              </div>

              {/* Therapies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Therapies and Interventions</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">At Suvatsalya, we focus on developing the child’s potential rather than “fixing” them. Our multidisciplinary team designs individualized therapy programs suited to each child’s unique needs.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Speech and Language Therapy</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Enhances communication, comprehension, and social speech</li>
                  <li>Encourages meaningful interaction using verbal and nonverbal modes</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2. Occupational Therapy (OT)</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Improves sensory processing, motor coordination, and daily living skills</li>
                  <li>Helps children tolerate touch, textures, and sounds better</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3. Behavioral Therapy (ABA-based and Play Therapy)</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Uses positive reinforcement to teach desired behaviors</li>
                  <li>Focuses on improving social communication, imitation, and adaptive skills</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">4. Special Education</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Structured learning environment with individualized teaching plans</li>
                  <li>Promotes academic, cognitive, and pre-writing skills</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5. Parental Counselling and Guidance</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Equips parents with strategies to handle behavioral challenges</li>
                  <li>Encourages consistent home routines and emotional bonding</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">6. Group Therapy and Social Skills Training</h4>
                <ul className="space-y-2 list-disc list-inside pl-6 text-gray-950">
                  <li>Small group sessions to improve peer interaction and cooperation</li>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Home Strategies for Parents</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Parents play the most crucial role in supporting their child’s development. Here are some tips that make a big difference:</p>
                <ul className="space-y-2">
                  <StyledListItem>Maintain consistent routines for meals, sleep, and therapy</StyledListItem>
                  <StyledListItem>Use visual schedules and cues to aid understanding</StyledListItem>
                  <StyledListItem>Reward positive behaviors immediately</StyledListItem>
                  <StyledListItem>Limit screen time and encourage interactive play</StyledListItem>
                  <StyledListItem>Avoid comparing your child to others — focus on progress, not perfection</StyledListItem>
                  <StyledListItem>Work closely with therapists and teachers</StyledListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Prognosis and Hope</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">With early intervention, children with autism can make significant progress in communication, behavior, and independence. Many children go on to attend mainstream schools, form friendships, and develop fulfilling lives.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">Autism does not define a child’s future — it simply describes one aspect of who they are.</p>
                <p className="text-gray-700 mb-4 leading-relaxed">At Suvatsalya, we believe that with love, patience, and the right support, every child can learn, grow, and thrive.</p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4"> Our Autism Services at Suvatsalya Include</h3>
                <ul className="space-y-2">
                  <StyledListItem>Comprehensive developmental assessment (DP4, ISAA, CARS)</StyledListItem>
                  <StyledListItem>Speech and language therapy</StyledListItem>
                  <StyledListItem>Occupational and sensory integration therapy</StyledListItem>
_                  <StyledListItem>Behavioral and play therapy</StyledListItem>
                  <StyledListItem>Special education support</StyledListItem>
                  <StyledListItem>Parental counselling and training</StyledListItem>
                  <StyledListItem>Regular developmental progress reviews</StyledListItem>
                </ul>
              </div>

              {/* Quote */}
            </div>

            {/* --- Right Sticky Column --- */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-40">
                <img
                  src={stickyImg}
                  alt="Child smiling"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Core Therapies Section --- */}
      <section className="w-full bg-brand-cream py-16 md:py-24">
        {/* ... (this section is unchanged) ... */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Content */}
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                Core Therapies at Suvatsalya
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">ABA Therapy:</h4>
                    <p className="text-gray-700">This therapy helps fix problem behavior and teaches good habits through rewards. Early support for the therapist can significantly enhance a kid's learning outcomes.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Occupational Therapy:</h4>
                    <p className="text-gray-700">This helps children improve hand control, thinking, doing daily tasks, and feeling good through simple activities.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Speech Therapy:</h4>
                    <p className="text-gray-700">This helps children speak clearly and learn language so they can talk and understand others better.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Physiotherapy:</h4>
                    <p className="text-gray-700">This therapy helps children move better, get stronger, improve balance and reach full physical ability.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Special Education:</h4>
                    <p className="text-gray-700">This supports children who need different ways to learn that regular classrooms may not offer. It helps them become more independent and do well in studies.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Right Side: Image */}
            <div>
              <img
                src={therapyImg}
                alt="Therapist with child"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FAQ Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        {/* ... (this section is unchanged) ... */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <div>
              <img
                src={faqImg} // Placeholder
                alt="Child thinking"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Right Side: Accordion */}
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                FAQ'S
              </h2>
              <div className="space-y-4">
                <FaqItem title="Can children with ASD become normal as they grow?">
                  <p>Yes. With the right help and therapy, many children improve a lot. Some children have very mild autism and may not even show signs later.</p>
                </FaqItem>
                <FaqItem title="Who should I talk to for help?">
                  <p>You can start by talking to your child's paediatrician. They can check your child and refer you to a specialist, like a developmental paediatrician, child neurologist, or a psychologist at a centre like Suvatsalya.</p>
                </FaqItem>
                <FaqItem title="Can autism come later in childhood?">
                  <p>Most signs of autism appear by age 2 or 3. Sometimes, a child may seem to develop typically and then regress (lose skills). In other cases, signs might be very subtle and not become noticeable until the child faces more complex social demands in school.</p>
                </FaqItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}