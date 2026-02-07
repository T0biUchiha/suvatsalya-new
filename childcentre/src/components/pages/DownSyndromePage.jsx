import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import speechImg from '../../assets/images/speech.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function DownSyndromePage() {
  const title = "Down Syndrome (Trisomy 21)";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={speechImg}
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
                   Understanding Down Syndrome (Trisomy 21)
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  At Suvatsalya Child Growth and Development Centre
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya Child Growth and Development Centre, we believe that every child is unique, capable, and deserving of love, learning, and opportunity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Down Syndrome is not a disease — it is a genetic condition that affects how a child grows and learns. With the right guidance, therapies, and inclusive support, children with Down Syndrome can live healthy, happy, and independent lives.
                </p>
              </div>

              {/* What is Down Syndrome? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   What is Down Syndrome?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Down Syndrome (also known as Trisomy 21) is a genetic condition that occurs when a child is born with an extra copy of chromosome 21. Typically, humans have 46 chromosomes (23 pairs), but in Down Syndrome, there are 47 chromosomes — the additional chromosome changes the way the brain and body develop.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This extra genetic material affects physical features, cognitive abilities, and developmental pace — but every child with Down Syndrome has their own strengths, personality, and potential.
                </p>
              </div>

              {/* Types */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Types of Down Syndrome
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  There are three main types of Down Syndrome:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Trisomy 21 (Nondisjunction) — ~95% cases</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Every cell in the body has an extra copy of chromosome 21.</ContentListItem>
                  <ContentListItem>Most common and occurs randomly during cell division.</ContentListItem>
                </ul>
                
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Translocation Down Syndrome — ~3–4% cases</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>The extra chromosome 21 attaches (translocates) to another chromosome.</ContentListItem>
                  <ContentListItem>Can be inherited from a parent carrying a balanced translocation.</ContentListItem>
                </ul>
                
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Mosaic Down Syndrome — ~1–2% cases</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Only some cells have the extra chromosome 21.</ContentListItem>
                  <ContentListItem>Symptoms may be milder compared to other types.</ContentListItem>
                </ul>
              </div>

              {/* Causes */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Causes and Risk Factors
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Down Syndrome is not caused by anything parents did or didn’t do. It occurs due to random chromosomal changes during early cell division.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Risk Factors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Maternal Age: Risk increases after age 35.</ContentListItem>
                  <ContentListItem>Genetic Translocation: One parent may carry a translocated chromosome.</ContentListItem>
                  <ContentListItem>Previous Child with Down Syndrome: Slightly increases risk for subsequent pregnancies.</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Despite these factors, most babies with Down Syndrome are born to younger mothers because younger women have more pregnancies overall.
                </p>
              </div>

              {/* Physical Features */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Common Physical Features
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Not all children have the same features, but some common characteristics include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Flat facial profile</ContentListItem>
                  <ContentListItem>Upward slanting eyes</ContentListItem>
                  <ContentListItem>Small nose and ears</ContentListItem>
                  <ContentListItem>Short neck with extra skin fold</ContentListItem>
                  <ContentListItem>Single deep crease across the palm</ContentListItem>
                  <ContentListItem>Short stature</ContentListItem>
                  <ContentListItem>Low muscle tone (hypotonia) in infancy</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  These features do not define the child’s abilities — each child’s personality, talents, and learning potential are unique.
                </p>
              </div>

              {/* Profile */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Developmental and Cognitive Profile
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Children with Down Syndrome usually have mild to moderate intellectual disability, with strengths in:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Visual learning</ContentListItem>
                  <ContentListItem>Social interaction</ContentListItem>
                  <ContentListItem>Routine-based tasks</ContentListItem>
                  <ContentListItem>Empathy and emotional understanding</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-6">
                  They may show delays in:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Motor milestones (sitting, walking, running)</ContentListItem>
                  <ContentListItem>Speech and language development</ContentListItem>
                  <ContentListItem>Problem-solving and abstract reasoning</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  With early intervention, these delays can be minimized and compensated through targeted therapies and consistent home support.
                </p>
              </div>

              {/* Associated Conditions */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ️ Associated Medical and Developmental Conditions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Children with Down Syndrome may experience certain medical challenges, though not every child is affected.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Common Associated Conditions:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Congenital heart defects (40–50%)</ContentListItem>
                  <ContentListItem>Low muscle tone and joint laxity</ContentListItem>
                  <ContentListItem>Hearing or vision problems</ContentListItem>
                  <ContentListItem>Frequent ear or respiratory infections</ContentListItem>
                  <ContentListItem>Thyroid disorders</ContentListItem>
                  <ContentListItem>Gastrointestinal issues</ContentListItem>
                  <ContentListItem>Sleep apnea</ContentListItem>
                  <ContentListItem>Leukemia (rare but higher risk)</ContentListItem>
                  <ContentListItem>Developmental delays and speech impairment</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  With regular medical checkups and supportive therapies, most of these challenges can be well-managed.
                </p>
              </div>

              {/* Early Signs & Diagnosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Early Signs and Diagnosis
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">During Pregnancy (Prenatal Screening):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Blood tests and ultrasound can suggest higher risk.</ContentListItem>
                  <ContentListItem>Diagnostic tests like Amniocentesis, CVS (Chorionic Villus Sampling), or NIPT (Non-Invasive Prenatal Testing) confirm diagnosis.</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">After Birth (Postnatal Diagnosis):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Based on physical signs and chromosomal analysis (karyotype) confirming extra chromosome 21.</ContentListItem>
                </ul>
              </div>

              {/* Assessment */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Assessment and Early Intervention at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, we focus on early developmental stimulation and family-centred care. Our evaluation process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <ContentListItem>Detailed developmental and medical history</ContentListItem>
                  <ContentListItem>Developmental Profile (DP4) assessment</ContentListItem>
                  <ContentListItem>Speech, language, and cognitive evaluation</ContentListItem>
                  <ContentListItem>Motor and sensory screening</ContentListItem>
                  <ContentListItem>Emotional and adaptive behavior assessment</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Each child’s strengths and challenges are mapped to create a personalized therapy plan.
                </p>
              </div>

              {/* Management */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Therapeutic Management
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While Down Syndrome cannot be cured, early and continuous intervention helps children achieve developmental milestones and independence.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Physiotherapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves muscle tone, posture, balance, and motor coordination</ContentListItem>
                  <ContentListItem>Supports sitting, crawling, and walking</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Occupational Therapy (OT)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Enhances fine motor skills (grasping, feeding, dressing)</ContentListItem>
                  <ContentListItem>Improves sensory processing and self-help abilities</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Speech and Language Therapy</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Stimulates early sound and word production</ContentListItem>
                  <ContentListItem>Addresses speech clarity, comprehension, and social communication</ContentListItem>
                  <ContentListItem>May include AAC (Augmentative and Alternative Communication) tools</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Special Education</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Tailored learning methods to support memory, language, and functional academics</ContentListItem>
                  <ContentListItem>Encourages inclusion in mainstream schools with support</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Behavioral and Psychological Support</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Addresses attention, motivation, and emotional regulation</ContentListItem>
                  <ContentListItem>Family counselling for parental confidence and stress management</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Medical Care</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Regular cardiac, thyroid, vision, and hearing check-ups</ContentListItem>
                  <ContentListItem>Nutritional guidance and general health monitoring</ContentListItem>
                </ul>
              </div>

              {/* Home Strategies */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Parenting and Home Strategies
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parents play the most vital role in a child’s growth. At Suvatsalya, we guide parents with simple, daily-life activities to promote progress:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Encourage play-based learning</ContentListItem>
                  <ContentListItem>Use music, gestures, and visuals for communication</ContentListItem>
                  <ContentListItem>Reinforce routines and predictability</ContentListItem>
                  <ContentListItem>Celebrate small achievements</ContentListItem>
                  <ContentListItem>Involve siblings and peers for social inclusion</ContentListItem>
                  <ContentListItem>Maintain therapy consistency</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
                  Love, patience, and repetition are the strongest therapies a parent can offer.
                </p>
              </div>

              {/* Prognosis */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Prognosis and Life Expectancy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Children with Down Syndrome today live longer, healthier lives than ever before — often into their 60s or 70s, thanks to better medical care and early education.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  They can attend regular schools, pursue careers, participate in community life, and form meaningful relationships when given opportunities for inclusion.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Services for Down Syndrome at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, our multidisciplinary team provides:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Early developmental screening and diagnosis</ContentListItem>
                  <ContentListItem>Physiotherapy and occupational therapy</ContentListItem>
                  <ContentListItem>Speech and feeding therapy</ContentListItem>
                  <ContentListItem>Sensory integration therapy</ContentListItem>
                  <ContentListItem>Special education and early intervention programs</ContentListItem>
                  <ContentListItem>Parental counselling and home program guidance</ContentListItem>
                  <ContentListItem>Assistive device support and progress tracking</ContentListItem>
                </ul>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                   Our Philosophy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, we see ability in every child. We believe that with compassion, patience, and professional care — every child can learn, communicate, and blossom.
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