import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Placeholder image

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function PsychologicalTestPage() {
  const title = "Psychological Testing";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src={hero4Img} // Placeholder
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
                  🌼 Introduction
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  At Suvatsalya Child Growth and Development Centre
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya Child Growth and Development Centre, we believe that understanding a child’s unique strengths and challenges is the first step toward meaningful growth. Psychological tests are structured assessments that help identify a child’s cognitive, emotional, social, and behavioral profile. These assessments guide early intervention, therapy planning, and educational support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By assessing abilities scientifically and systematically, psychological tests help personalize care, track progress, and empower parents and educators to support the child effectively.
                </p>
              </div>

              {/* What are Psychological Tests? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🧩 What are Psychological Tests?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Psychological tests are standardized tools used to evaluate a child’s mental and emotional functioning. They measure areas such as:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Intelligence and cognitive abilities</ContentListItem>
                  <ContentListItem>Academic skills and learning potential</ContentListItem>
                  <ContentListItem>Memory, attention, and problem-solving skills</ContentListItem>
                  <ContentListItem>Personality, emotional well-being, and behavior</ContentListItem>
                  <ContentListItem>Social interaction and adaptive skills</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  These tests are conducted by trained psychologists in a safe, supportive environment. Results are interpreted carefully to provide actionable insights for therapy, education, and development.
                </p>
              </div>

              {/* Who Can Benefit? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  👶 Who Can Benefit from Psychological Testing?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Psychological tests are useful for children who:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Show delays in development or learning</ContentListItem>
                  <ContentListItem>Exhibit behavioral or emotional challenges</ContentListItem>
                  <ContentListItem>Have difficulty in school performance</ContentListItem>
                  <ContentListItem>Have suspected neurodevelopmental disorders like ADHD, Autism, or Learning Disabilities</ContentListItem>
                  <ContentListItem>Need special education or therapy planning</ContentListItem>
                  <ContentListItem>Require assessment of intellectual abilities or adaptive functioning</ContentListItem>
                </ul>
              </div>

              {/* Types of Tests */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🔍 Types of Psychological Tests for Children
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya, we use a variety of age-appropriate, evidence-based tests, including:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Intelligence Tests (IQ Tests)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Assess overall cognitive ability and reasoning.
                  <br />
                  <span className="italic">Examples: MISIC (Malin’s Intelligence Scale for Indian Children), WISC</span>
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Developmental Assessments</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Measure milestones in motor, speech, language, cognitive, and social development.
                  <br />
                  <span className="italic">Examples: DP4 (Developmental Profile-4), Vineland Adaptive Behavior Scales</span>
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Neuropsychological and Cognitive Tests</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Evaluate memory, attention, executive functioning, and problem-solving skills.
                  <br />
                  <span className="italic">Examples: Trail Making Test, Digit Span, Continuous Performance Test (CPT)</span>
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Behavioral and Emotional Assessments</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Identify emotional regulation, behavior patterns, and temperament.
                  <br />
                  <span className="italic">Examples: CBCL (Child Behavior Checklist), BASC</span>
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Projective and Personality Tests</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Explore personality, coping, and emotional processes.
                  <br />
                  <span className="italic">Examples: CAT (Children’s Apperception Test), KFD (Kinetic Family Drawing)</span>
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6. Learning and Academic Assessments</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Assess reading, writing, math, and learning-related skills.
                  <br />
                  <span className="italic">Examples: Dyslexia Screening, Academic Readiness Tests</span>
                </p>
              </div>

              {/* How it Works */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🧠 How Psychological Testing Works
                </h3>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li><strong>Referral and Initial Consultation:</strong> Psychologist gathers developmental history, medical records, school reports, and parental observations.</li>
                  <li><strong>Selection of Appropriate Tests:</strong> Based on the child’s age, presenting concerns, and developmental profile.</li>
                  <li><strong>Structured Testing Session:</strong> Child participates in standardized tasks, puzzles, games, or verbal exercises. Sessions are designed to be child-friendly, engaging, and non-stressful.</li>
                  <li><strong>Scoring and Interpretation:</strong> Results are scored according to standardized norms. Strengths, challenges, and recommendations are identified.</li>
                  <li><strong>Feedback and Planning:</strong> Parents and caregivers receive a detailed psychological report. Individualized interventions, therapy plans, or educational strategies are suggested.</li>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🌈 Benefits of Psychological Testing
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Provides a comprehensive understanding of the child’s abilities and challenges</ContentListItem>
                  <ContentListItem>Guides therapy and intervention planning for conditions like ADHD, Autism, Learning Disabilities</ContentListItem>
                  <ContentListItem>Helps in academic placement and special education decisions</ContentListItem>
                  <ContentListItem>Tracks progress over time</ContentListItem>
                  <ContentListItem>Empowers parents, educators, and therapists with actionable insights</ContentListItem>
                  <ContentListItem>Identifies hidden strengths for personal growth and confidence building</ContentListItem>
                </ul>
              </div>

              {/* Testing at Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🏫 Psychological Testing at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, our approach to psychological testing is:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem><strong>Child-Centered:</strong> Every assessment is conducted in a supportive, stress-free environment.</ContentListItem>
                  <ContentListItem><strong>Comprehensive:</strong> We evaluate multiple areas — cognitive, emotional, social, behavioral, and adaptive.</ContentListItem>
                  <ContentListItem><strong>Multidisciplinary:</strong> Results are used to guide occupational therapy, speech therapy, physiotherapy, ABA therapy, and special education.</ContentListItem>
                  <ContentListItem><strong>Family-Focused:</strong> Parents receive detailed explanations, guidance, and strategies to support the child at home and school.</ContentListItem>
                </ul>
              </div>

              {/* Role of Parents */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  💖 Role of Parents
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parents are essential partners in the assessment process. At Suvatsalya, we help parents:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Observe and share developmental milestones and concerns</ContentListItem>
                  <ContentListItem>Understand the testing results and their implications</ContentListItem>
                  <ContentListItem>Implement recommended strategies and interventions at home</ContentListItem>
                  <ContentListItem>Monitor progress and maintain communication with therapists and educators</ContentListItem>
                </ul>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ✨ Conclusion
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Psychological testing is a powerful tool for understanding children holistically. It helps identify developmental gaps, strengths, and potential, allowing for personalized interventions that support growth, learning, and emotional well-being.
                </p>
              </div>

              {/* Get in Touch */}
              <div className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  📞 Get in Touch
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you have concerns about your child's development, please contact us to schedule an evaluation.
                </p>
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-teal-500 pl-6 italic mt-10">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  “Every child has a unique mind and potential — psychological assessment helps us understand, support, and celebrate it.”
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}