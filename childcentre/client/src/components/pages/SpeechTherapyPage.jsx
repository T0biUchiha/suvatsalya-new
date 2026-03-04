import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import speechImg from '../../assets/images/Speech Therapy.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function SpeechTherapyPage() {
  const title = "Speech and Language Therapy";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={speechImg}
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
                  ️ Speech and Language Therapy: Helping Every Child Find Their Voice
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                   Introduction
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Speech and Language Therapy (SLT) is a specialized field focused on assessing, diagnosing, and treating communication, speech, language, and swallowing disorders in children and adults.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For children, it plays a vital role in improving how they speak, understand, express, and connect with the world around them. Early intervention can make a remarkable difference in a child’s communication and overall development.
                </p>
              </div>

              {/* What is SLT? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What is Speech and Language Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Speech and Language Therapy helps individuals who have difficulties in:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Speaking clearly or fluently</ContentListItem>
                  <ContentListItem>Understanding and using language</ContentListItem>
                  <ContentListItem>Producing specific speech sounds</ContentListItem>
                  <ContentListItem>Communicating effectively in social settings</ContentListItem>
                  <ContentListItem>Feeding and swallowing (oral-motor skills)</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Speech therapists (also called Speech-Language Pathologists or SLPs) work through structured and play-based interventions to build language comprehension, speech clarity, and social communication.
                </p>
              </div>

              {/* Who Needs SLT? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Who Needs Speech and Language Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Children may benefit from speech therapy if they have any of the following:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Delayed speech or language milestones</ContentListItem>
                  <ContentListItem>Stammering / stuttering</ContentListItem>
                  <ContentListItem>Unclear speech or pronunciation errors</ContentListItem>
                  <ContentListItem>Difficulty following instructions or expressing thoughts</ContentListItem>
                  <ContentListItem>Poor vocabulary development</ContentListItem>
                  <ContentListItem>Autism Spectrum Disorder (ASD)</ContentListItem>
                  <ContentListItem>Down Syndrome or Intellectual Disability</ContentListItem>
                  <ContentListItem>Hearing impairment</ContentListItem>
                  <ContentListItem>Cerebral Palsy or developmental delay</ContentListItem>
                  <ContentListItem>Feeding or swallowing difficulties</ContentListItem>
                </ul>
              </div>

              {/* Common Areas */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Common Areas of Intervention
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Speech Disorders:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Problems with articulation (making specific sounds), voice, or fluency (e.g., stuttering).
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Language Disorders:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Difficulty understanding or using words in sentences. Includes both receptive (understanding) and expressive (speaking) challenges.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Social Communication Disorders:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trouble using language appropriately in social contexts — common in children with Autism Spectrum Disorder.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Oral-Motor and Feeding Issues:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Challenges in chewing, swallowing, or controlling mouth movements.
                </p>
              </div>

              {/* How it Works */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   How Speech Therapy Works
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Speech therapy sessions are designed according to the child’s developmental level and individual needs. Therapists use engaging, play-based, and goal-oriented techniques such as:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Articulation drills for sound correction</ContentListItem>
                  <ContentListItem>Language games to build comprehension and vocabulary</ContentListItem>
                  <ContentListItem>Picture cards and stories to improve sentence formation</ContentListItem>
                  <ContentListItem>Role-play activities to develop social communication</ContentListItem>
                  <ContentListItem>Oral-motor exercises to strengthen mouth muscles</ContentListItem>
                  <ContentListItem>Parent training sessions for home carryover and consistency</ContentListItem>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Benefits of Speech and Language Therapy
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improves clarity of speech and pronunciation</ContentListItem>
                  <ContentListItem>Builds expressive and receptive language</ContentListItem>
                  <ContentListItem>Boosts confidence and self-expression</ContentListItem>
                  <ContentListItem>Enhances social and peer communication skills</ContentListItem>
                  <ContentListItem>Strengthens oral-motor control for speech and feeding</ContentListItem>
                  <ContentListItem>Supports academic readiness and classroom learning</ContentListItem>
                  <ContentListItem>Promotes overall emotional and social development</ContentListItem>
                </ul>
              </div>

              {/* Role of Parents */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  Role of Parents and Caregivers
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Parents play a central role in speech therapy success. Speech therapists guide parents to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Continue language stimulation at home through daily interactions</ContentListItem>
                  <ContentListItem>Encourage verbal communication instead of gestures</ContentListItem>
                  <ContentListItem>Use reading, singing, and storytelling for language enrichment</ContentListItem>
                  <ContentListItem>Create a supportive, patient, and language-rich environment</ContentListItem>
                </ul>
              </div>

              {/* SLT at Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Speech Therapy at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Suvatsalya, our Speech and Language Therapy program focuses on:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Comprehensive assessment of speech, language, and communication skills</ContentListItem>
                  <ContentListItem>Individualized therapy plans designed for each child’s needs</ContentListItem>
                  <ContentListItem>Integration of play, movement, and visual learning for effective engagement</ContentListItem>
                  <ContentListItem>Close collaboration with parents, psychologists, and occupational therapists</ContentListItem>
                  <ContentListItem>Regular progress tracking and feedback sessions</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Our aim is to help every child find their voice, communicate confidently, and build meaningful connections with their world.
                </p>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Conclusion
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Communication is the bridge between thoughts and the world — and every child deserves the chance to cross it with confidence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through early intervention, structured therapy, and family support, Speech and Language Therapy can transform a child’s life — helping them express, understand, and connect more fully.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}