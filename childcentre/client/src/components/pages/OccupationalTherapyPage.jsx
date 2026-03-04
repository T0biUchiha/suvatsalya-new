import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import occupationalImg from '../../assets/images/occupational therapy.png';

// Reusable list item for content
function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function OccupationalTherapyPage() {
  const title = "Occupational Therapy (OT)";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-last md:order-first">
              <img
                src={occupationalImg}
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
                   Occupational Therapy (OT) for Children
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we believe that every child has the right to live, learn, and grow with confidence. For some children, simple everyday activities — like holding a spoon, buttoning a shirt, writing, or playing — can be challenging due to developmental delays, sensory difficulties, or physical limitations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This is where Occupational Therapy (OT) plays a transformative role. Occupational Therapy helps children develop the skills needed for daily living, independence, and participation in school, home, and social life.
                </p>
              </div>

              {/* What is OT? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What is Occupational Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Occupational Therapy (OT) is a child-centered, evidence-based therapeutic approach that focuses on helping children gain independence in daily life activities through play, exercises, and skill-building tasks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  The term “occupation” in children refers to their everyday activities — playing, learning, socializing, eating, and self-care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  An occupational therapist helps children build, regain, or strengthen the physical, sensory, and cognitive abilities required for these activities. In simple words, OT helps children do what they need and love to do — more easily and independently.
                </p>
              </div>

              {/* Who Needs OT? */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Who Needs Occupational Therapy?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Occupational Therapy benefits children with a wide range of developmental, neurological, physical, or behavioral challenges, such as:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Developmental Conditions</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Global Developmental Delay (GDD)</ContentListItem>
                  <ContentListItem>Developmental Coordination Disorder (DCD)</ContentListItem>
                  <ContentListItem>Prematurity or low birth weight</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Neurological Conditions</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Cerebral Palsy (CP)</ContentListItem>
                  <ContentListItem>Down Syndrome</ContentListItem>
                  <ContentListItem>Traumatic brain injury</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Neurodevelopmental Disorders</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Autism Spectrum Disorder (ASD)</ContentListItem>
                  <ContentListItem>Attention Deficit Hyperactivity Disorder (ADHD)</ContentListItem>
                  <ContentListItem>Learning Disabilities</ContentListItem>
                </ul>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Sensory and Behavioral Challenges</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Sensory Processing Disorder (SPD)</ContentListItem>
                  <ContentListItem>Poor attention and impulse control</ContentListItem>
                  <ContentListItem>Feeding and self-care difficulties</ContentListItem>
                </ul>
                 <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Other Situations</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Motor planning or handwriting difficulties</ContentListItem>
                  <ContentListItem>Poor posture, balance, or coordination</ContentListItem>
                  <ContentListItem>Difficulty adapting to school routines</ContentListItem>
                </ul>
              </div>

              {/* Core Areas */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                  ️ Core Areas of Occupational Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Occupational Therapy at Suvatsalya focuses on five core areas of development:
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Fine Motor Skills</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Activities that strengthen small muscles of the hands and fingers. Helps in tasks like writing, buttoning, cutting, feeding, and dressing.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Gross Motor Skills</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enhances body strength, balance, and coordination. Improves posture, sitting tolerance, and movement control.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Sensory Integration</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Helps children process and respond to sensory input (touch, sound, movement, sight, smell). Especially beneficial for children who are over- or under-sensitive to sensory experiences.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Activities of Daily Living (ADL)</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Builds independence in self-care routines: eating, bathing, dressing, grooming, and toileting.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5. Cognitive and Social Skills</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Focuses on attention, memory, planning, and problem-solving. Encourages interaction, play, and participation with peers and family.
                </p>
              </div>

              {/* Signs You May Need OT */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Signs Your Child May Need Occupational Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Parents often notice subtle signs that their child struggles with day-to-day tasks. You may consider an OT evaluation if your child:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Has difficulty holding a pencil, crayon, or spoon</ContentListItem>
                  <ContentListItem>Avoids touch, sound, or movement (or seeks too much of it)</ContentListItem>
                  <ContentListItem>Struggles with dressing, buttoning, or tying shoelaces</ContentListItem>
                  <ContentListItem>Has poor balance or frequent falls</ContentListItem>
                  <ContentListItem>Writes slowly or illegibly</ContentListItem>
                  <ContentListItem>Finds it hard to focus or follow multi-step instructions</ContentListItem>
                  <ContentListItem>Avoids play or group activities</ContentListItem>
                  <ContentListItem>Gets easily frustrated with small tasks</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Early identification and therapy can prevent these challenges from affecting your child’s confidence and academic performance.
                </p>
              </div>

              {/* OT at Suvatsalya */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Occupational Therapy at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, our Occupational Therapy program is led by qualified therapists trained in paediatric developmental care. We offer a play-based, individualized approach that turns therapy into fun and learning.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Our OT Services Include:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Sensory Integration Therapy</ContentListItem>
                  <ContentListItem>Fine and Gross Motor Skill Training</ContentListItem>
                  <ContentListItem>Handwriting Improvement Programs</ContentListItem>
                  <ContentListItem>Activities of Daily Living (ADL) Training</ContentListItem>
                  <ContentListItem>Feeding and Oral-Motor Therapy</ContentListItem>
                  <ContentListItem>Postural Control and Balance Activities</ContentListItem>
                  <ContentListItem>Behavior Modification Techniques</ContentListItem>
                  <ContentListItem>School Readiness and Attention Training</ContentListItem>
                  <ContentListItem>Parent Education and Home-based Programs</ContentListItem>
                </ul>
              </div>

              {/* Goals of OT */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Goals of Occupational Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Our therapy plans are personalized for each child, with clear developmental goals:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Domain</ContentListItem>
                  <ContentListItem>Motor Skills</ContentListItem>
                  <ContentListItem>Sensory Regulation</ContentListItem>
                  <ContentListItem>Self-Care Skills</ContentListItem>
                  <ContentListItem>Academic Readiness</ContentListItem>
                  <ContentListItem>Social and Play Skills</ContentListItem>
                </ul>
              </div>

              {/* OT Session */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   What Happens During an OT Session?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Each session at Suvatsalya is designed to be engaging, interactive, and goal-oriented. A typical session may include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Warm-up and movement activities</ContentListItem>
                  <ContentListItem>Fine-motor games (puzzles, pegboards, clay play)</ContentListItem>
                  <ContentListItem>Balance and coordination exercises</ContentListItem>
                  <ContentListItem>Sensory play (swings, textures, lights)</ContentListItem>
                  <ContentListItem>Role-play for self-care (feeding, brushing, dressing)</ContentListItem>
                  <ContentListItem>Relaxation and breathing exercises</ContentListItem>
                  <ContentListItem>Parent feedback and home program suggestions</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Sessions are adjusted regularly based on your child’s progress and comfort.
                </p>
              </div>

              {/* Parent Involvement */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Parent Involvement and Home Programs
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we believe parents are co-therapists. We train parents to continue therapy activities at home for better consistency and faster improvement.
                </p>
                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">We Guide Parents To:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Encourage independence in daily routines</ContentListItem>
                  <ContentListItem>Offer gentle support, not over-assistance</ContentListItem>
                  <ContentListItem>Create sensory-friendly home spaces</ContentListItem>
                  <ContentListItem>Reinforce fine-motor activities (drawing, stacking, picking)</ContentListItem>
                  <ContentListItem>Praise effort and progress, not perfection</ContentListItem>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Benefits of Occupational Therapy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Occupational Therapy can make a lifelong impact on a child’s development. Some key benefits include:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Improved muscle strength and coordination</ContentListItem>
                  <ContentListItem>Better attention and focus</ContentListItem>
                  <ContentListItem>Enhanced sensory regulation and emotional control</ContentListItem>
                  <ContentListItem>Greater independence in daily tasks</ContentListItem>
                  <ContentListItem>Improved handwriting and school participation</ContentListItem>
                  <ContentListItem>Increased confidence and self-esteem</ContentListItem>
                  <ContentListItem>Better parent-child bonding through shared progress</ContentListItem>
                </ul>
              </div>

              {/* Our Approach */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Our Approach at Suvatsalya
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, we combine scientific therapy with compassionate care. Our OT rooms are equipped with child-friendly sensory tools, swings, tactile boards, therapy balls, and adaptive aids designed to stimulate curiosity and comfort.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We focus not just on treating symptoms — but on empowering each child to explore, learn, and thrive in every environment.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-3xl font-semibold text-brand-blue mb-3">
                   Our Occupational Therapy Services Include:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Paediatric Occupational Therapy</ContentListItem>
                  <ContentListItem>Sensory Integration Therapy</ContentListItem>
                  <ContentListItem>School Readiness Program</ContentListItem>
                  <ContentListItem>Handwriting and Fine Motor Training</ContentListItem>
                  <ContentListItem>Daily Living Skills Training</ContentListItem>
                  <ContentListItem>Feeding Therapy</ContentListItem>
                  <ContentListItem>Parental Guidance Sessions</ContentListItem>
                  <ContentListItem>Progress Evaluation and Reporting</ContentListItem>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}