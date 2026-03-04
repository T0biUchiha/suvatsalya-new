import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import ldImg from '../../assets/relogoimages/Learning_Disability_1536x1024.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function LearningDisabilityPage() {
  const title = "Learning Disabilities (LD)";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={ldImg}
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
                   Understanding Learning Disabilities (LD) in Children
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Every child learns in their own way — some absorb information quickly, while others need more time, structure, and support. When a child consistently struggles to read, write, spell, or understand numbers despite average intelligence and good schooling, it may be a sign of a Learning Disability (LD).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya, we believe that a learning difficulty is not a learning inability. With timely assessment, tailored interventions, and emotional support, children with learning disabilities can achieve their full potential.
                </p>
              </div>

              {/* What is LD? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What is a Learning Disability?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  A Learning Disability (LD) — also known as a Specific Learning Disorder (SLD) — is a neurodevelopmental condition that affects the brain’s ability to receive, process, store, and respond to information efficiently.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Children with LD have average or above-average intelligence, but their brains process information differently, making reading, writing, or math more challenging than for their peers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learning disabilities are not due to poor teaching, low intelligence, or lack of effort — they are caused by differences in brain function related to language and cognitive processing.
                </p>
              </div>

              {/* Types of LD */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3" id="dyspraxia"> {/* ID for Dyspraxia link */}
                   Types of Learning Disabilities
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Learning disabilities can affect one or more areas of academic functioning. The most common types include:
                </p>
                
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3" id="dyslexia"> {/* ID for Dyslexia */}
                  1. Dyslexia (Reading Disorder)
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Difficulty recognizing words, decoding sounds, and spelling</ContentListItem>
                  <ContentListItem>Reads slowly and makes frequent mistakes</ContentListItem>
                  <ContentListItem>Poor reading comprehension despite good oral ability</ContentListItem>
                </ul>
                
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3" id="dysgraphia"> {/* ID for Dysgraphia */}
                  2. Dysgraphia (Writing Disorder)
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Illegible handwriting</ContentListItem>
                  <ContentListItem>Trouble organizing written work or expressing thoughts on paper</ContentListItem>
                  <ContentListItem>Frequent spelling, grammar, or punctuation errors</ContentListItem>
                </ul>
                
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3" id="dyscalculia"> {/* ID for Dyscalculia */}
                  3. Dyscalculia (Mathematics Disorder)
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Difficulty understanding numbers, symbols, and arithmetic concepts</ContentListItem>
                  <ContentListItem>Trouble remembering math facts or following sequences</ContentListItem>
                  <ContentListItem>Confusion with time, measurements, or money</ContentListItem>
                </ul>

                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Non-Verbal Learning Disability (NVLD)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Strong language skills but difficulty understanding visual-spatial concepts</ContentListItem>
                  <ContentListItem>Struggles with organization, body coordination, and social cues</ContentListItem>
                </ul>

                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Written Expression Disorder</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Ideas are present but cannot be clearly expressed in writing</ContentListItem>
                  <ContentListItem>Frequent omission or repetition of words and letters</ContentListItem>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Many children may show overlapping symptoms of more than one type.
                </p>
              </div>

              {/* Common Signs */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Common Signs and Symptoms
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Preschool Years</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Delayed speech or difficulty learning rhymes</ContentListItem>
                  <ContentListItem>Trouble identifying letters, colors, or shapes</ContentListItem>
                  <ContentListItem>Difficulty following directions</ContentListItem>
                  <ContentListItem>Poor fine motor skills (holding pencil, buttoning clothes)</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Primary School</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Avoids reading or writing tasks</ContentListItem>
                  <ContentListItem>Frequent spelling mistakes</ContentListItem>
                  <ContentListItem>Confuses similar-looking letters or numbers (b/d, 6/9)</ContentListItem>
                  <ContentListItem>Slow, effortful reading or writing</ContentListItem>
                  <ContentListItem>Struggles to remember basic math facts</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">In Older Children</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Poor comprehension while reading</ContentListItem>
                  <ContentListItem>Difficulty summarizing or organizing ideas</ContentListItem>
                  <ContentListItem>Problems with time management and written expression</ContentListItem>
                  <ContentListItem>Low self-confidence and frustration about schoolwork</ContentListItem>
                </ul>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Learning disabilities are linked to neurobiological differences in the brain regions that control language and processing.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Possible Contributing Factors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Genetic or hereditary factors (family history of LD or dyslexia)</ContentListItem>
                  <ContentListItem>Differences in brain structure or function</ContentListItem>
                  <ContentListItem>Premature birth or low birth weight</ContentListItem>
                  <ContentListItem>Prenatal exposure to alcohol, drugs, or infections</ContentListItem>
                  <ContentListItem>Early brain injury or developmental delay</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  However, LDs are not caused by poor parenting, lack of motivation, or environmental deprivation.
                </p>
              </div>

              {/* Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Diagnosis and Assessment at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we use a comprehensive, multidisciplinary approach for assessment. Our evaluations aim to identify the child’s specific areas of difficulty while highlighting their strengths.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Assessment Includes:</h4>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li>Detailed developmental and educational history from parents and teachers</li>
                  <li>Clinical interview and observation</li>
                  <li>
                    Psycho-educational testing, such as:
                    <ul className="list-disc list-inside pl-10 space-y-1 mt-2">
                      <li>MISIC (Malin’s Intelligence Scale for Indian Children) – to measure intellectual ability</li>
                      <li>NIMHANS SLD Battery / Dyslexia Screening Tools</li>
                      <li>Curriculum-based assessments (reading, spelling, writing, math)</li>
                      <li>CBCL (Child Behavior Checklist) for associated emotional or behavioral issues</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A Specific Learning Disability is diagnosed when a child’s performance in reading, writing, or math is significantly below what is expected for their age and intelligence level.
                </p>
              </div>

              {/* Co-Occurring Conditions */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Co-Occurring Conditions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Many children with LD also experience:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>ADHD (Attention-Deficit/Hyperactivity Disorder)</ContentListItem>
                  <ContentListItem>Emotional difficulties like anxiety or frustration</ContentListItem>
                  <ContentListItem>Speech and language delays</ContentListItem>
                  <ContentListItem>Low self-esteem and academic stress</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Therefore, a holistic evaluation is crucial to address all aspects of the child’s development.
                </p>
              </div>

              {/* Management */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Management and Intervention at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  There is no “cure” for learning disabilities — but with early identification, structured support, and consistent therapy, children can learn effectively and succeed academically. Our interventions focus on building skills, confidence, and motivation.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Remedial Education</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Individualized teaching using multi-sensory techniques</ContentListItem>
                  <ContentListItem>Phonics-based reading instruction</ContentListItem>
                  <ContentListItem>Step-by-step learning in spelling, grammar, and math</ContentListItem>
                  <ContentListItem>Focus on comprehension, reasoning, and memory strategies</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves handwriting, visual-motor coordination, and attention</ContentListItem>
                  <ContentListItem>Strengthens sensory processing and organization skills</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Enhances phonological awareness, comprehension, and verbal expression</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Behavioral and Emotional Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Counselling for self-esteem, motivation, and coping with school stress</ContentListItem>
                  <ContentListItem>Teaching relaxation and self-regulation strategies</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Parental Guidance</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Helping parents understand learning differences</ContentListItem>
                  <ContentListItem>Creating supportive home environments and homework routines</ContentListItem>
                  <ContentListItem>Coordination with schools for classroom accommodations</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. School Collaboration</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>We work closely with teachers to provide:</ContentListItem>
                  <ul className="list-circle list-inside pl-10 space-y-1 mt-2">
                    <li>Extended time for exams</li>
                    <li>Oral testing instead of written work</li>
                    <li>Simplified instructions and visual aids</li>
                    <li>Exemption or modification of certain subjects (as per CBSE/ICSE guidelines under RPwD Act, 2016)</li>
                  </ul>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Home Strategies for Parents
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Encourage your child’s strengths (art, music, sports, creativity)</ContentListItem>
                  <ContentListItem>Celebrate small academic achievements</ContentListItem>
                  <ContentListItem>Avoid comparisons with other children</ContentListItem>
                  <ContentListItem>Break tasks into smaller, manageable steps</ContentListItem>
                  <ContentListItem>Use charts, color codes, and visual cues for better understanding</ContentListItem>
                  <ContentListItem>Read aloud and discuss stories together</ContentListItem>
                  <ContentListItem>Stay patient — progress takes time, but it is meaningful</ContentListItem>
                </ul>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Prognosis and Hope
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  With early diagnosis and consistent support, children with learning disabilities can do exceptionally well in academics and life. Many famous personalities — from Albert Einstein to Agatha Christie — had learning difficulties but thrived because someone believed in them.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Suvatsalya, our goal is to create that same belief, support, and opportunity for every child.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Our Services for Learning Disabilities
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive diagnostic assessment for SLD</ContentListItem>
                  <ContentListItem>Remedial education and skill-building sessions</ContentListItem>
                  <ContentListItem>Occupational and speech therapy</ContentListItem>
                  <ContentListItem>Emotional and behavioural counselling</ContentListItem>
                  <ContentListItem>Parental training and school coordination</ContentListItem>
                  <ContentListItem>Regular progress reviews and academic planning</ContentListItem>
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