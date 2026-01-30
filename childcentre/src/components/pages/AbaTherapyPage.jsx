import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Placeholder image

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function AbaTherapyPage() {
  const title = "Applied Behavior Analysis (ABA) Therapy";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-gray-50 py-12 pt-32">
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
                  At Suvatsalya Child Growth and Development Centre, we believe that every child has the potential to learn, communicate, and thrive. Some children, especially those with Autism Spectrum Disorder (ASD) or behavioral and developmental challenges, may need structured, evidence-based interventions to develop essential skills.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ABA (Applied Behavior Analysis) Therapy is one of the most effective, scientifically supported therapies for helping children acquire meaningful skills and reduce behaviors that interfere with learning and social participation.
                </p>
              </div>

              {/* What is ABA? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🧠 What is ABA Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Applied Behavior Analysis (ABA) is a therapy based on the science of learning and behavior. It uses structured teaching strategies, positive reinforcement, and data-driven interventions to help children:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Develop communication and language skills</ContentListItem>
                  <ContentListItem>Improve social and adaptive behaviors</ContentListItem>
                  <ContentListItem>Build daily living and academic skills</ContentListItem>
                  <ContentListItem>Reduce challenging or harmful behaviors</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  ABA focuses on breaking down complex skills into smaller, achievable steps and reinforcing progress through rewards and encouragement.
                </p>
              </div>

              {/* Who Can Benefit? */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  👶 Who Can Benefit from ABA Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ABA Therapy is particularly beneficial for children with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Autism Spectrum Disorder (ASD)</ContentListItem>
                  <ContentListItem>Developmental Delays</ContentListItem>
                  <ContentListItem>Intellectual Disabilities</ContentListItem>
                  <ContentListItem>Attention and Behavioral Challenges</ContentListItem>
                  <ContentListItem>Social Communication Difficulties</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  While it is widely associated with autism, ABA can also help children with learning and behavioral challenges to reach developmental milestones.
                </p>
              </div>

              {/* Core Principles */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🔍 Core Principles of ABA Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ABA is based on scientific principles of behavior, which include:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Positive Reinforcement</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Encouraging desired behaviors by rewarding progress.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Task Analysis</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Breaking skills into smaller steps for easier learning.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Prompting and Fading</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Using guidance to teach a skill and gradually reducing support.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Data Collection and Monitoring</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tracking performance to ensure progress and adjust strategies.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Generalization</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Helping the child apply learned skills across different settings, people, and situations.
                </p>
              </div>

              {/* Key Areas */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🧩 Key Areas Addressed in ABA Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ABA Therapy can help children develop:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Communication Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Expressing needs and emotions</ContentListItem>
                  <ContentListItem>Understanding instructions</ContentListItem>
                  <ContentListItem>Building vocabulary and conversational skills</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Social Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Eye contact, turn-taking, and sharing</ContentListItem>
                  <ContentListItem>Peer interaction and play skills</ContentListItem>
                  <ContentListItem>Emotional regulation</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Daily Living Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Dressing, feeding, hygiene, and self-care</ContentListItem>
                  <ContentListItem>Following routines and instructions</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Academic and Cognitive Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Pre-academic concepts, counting, and problem-solving</ContentListItem>
                  <ContentListItem>Attention, focus, and task completion</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Behavior Management</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Reducing challenging behaviors such as aggression, tantrums, or self-injury</ContentListItem>
                  <ContentListItem>Replacing unwanted behaviors with functional alternatives</ContentListItem>
                </ul>
              </div>

              {/* How it Works */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🏫 How ABA Therapy Works at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Suvatsalya Child Growth and Development Centre, ABA Therapy is individualized and child-focused:
                </p>
                <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                  <li>Functional Behavioral Assessment (FBA) to understand strengths and challenges.</li>
                  <li>Specific, measurable, and achievable goals based on the child’s needs.</li>
                  <li>One-on-one or small group sessions using play, activities, and reinforcement.</li>
                  <li>Parents are trained to reinforce learning at home and in daily routines.</li>
                  <li>Progress is tracked using data collection and analysis to refine strategies.</li>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  🌈 Benefits of ABA Therapy
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>✅ Improved communication and social interaction</ContentListItem>
                  <ContentListItem>✅ Enhanced daily living and self-help skills</ContentListItem>
                  <ContentListItem>✅ Reduction of challenging or disruptive behaviors</ContentListItem>
                  <ContentListItem>✅ Increased attention, focus, and learning readiness</ContentListItem>
                  <ContentListItem>✅ Strengthened parent-child interaction</ContentListItem>
                  <ContentListItem>✅ Better integration into school and community activities</ContentListItem>
                </ul>
              </div>

              {/* Role of Parents */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  💖 Role of Parents in ABA Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Parents are active participants in ABA therapy. At Suvatsalya, we guide parents to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Reinforce skills at home consistently</ContentListItem>
                  <ContentListItem>Use positive reinforcement and encouragement</ContentListItem>
                  <ContentListItem>Maintain structured routines</ContentListItem>
                  <ContentListItem>Celebrate small achievements and milestones</ContentListItem>
                  <ContentListItem>Collaborate with therapists for goal-setting and progress review</ContentListItem>
                </ul>
              </div>

              {/* Why Choose Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  ✨ Why Choose Suvatsalya for ABA Therapy?
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Certified and experienced ABA therapists</ContentListItem>
                  <ContentListItem>Child-centered, engaging, and play-based sessions</ContentListItem>
                  <ContentListItem>Integration with Speech Therapy, Occupational Therapy, and Special Education</ContentListItem>
                  <ContentListItem>Data-driven, individualized intervention plans</ContentListItem>
                  <ContentListItem>Supportive, family-focused approach</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  At Suvatsalya, our goal is to help every child unlock their potential, communicate effectively, and participate confidently in daily life.
                </p>
              </div>

              {/* Get in Touch */}
              <div className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  📞 Get in Touch
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To learn more about our ABA Therapy programs, please contact us to schedule an evaluation.
                </p>
                <Link to="/contact">
                  <Button text="Book an Appointment" variant="secondary" />
                </Link>
              </div>

                {/* Quote */}
              <div className="border-l-4 border-teal-500 pl-6 italic mt-10">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  “ABA Therapy is about shaping possibilities, celebrating progress, and empowering children to learn, connect, and thrive.”
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}