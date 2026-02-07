import hero2Img from '../../assets/home-page/hero2.jpg';
import hero3Img from '../../assets/home-page/hero3.jpg';
import hero1Img from '../../assets/home-page/hero1.jpg';
import gaganImg from '../../assets/directors/Dr. Gagan Deep Chhabra.png';
import swatiImg from '../../assets/directors/Dr. Swati Chhabra.png';
import sharadImg from '../../assets/directors/Mr. SHARAD SHUKLA.png';
import vinayImg from '../../assets/directors/Mr. Vinay Jain.jpeg';
import tanushreeImg from '../../assets/directors/Ms. Tanushree Bhargava.png';

// A reusable component for team members, based on your screenshot
function TeamMemberCard({ image, name, title, bio, color = 'sky' }) {
  const bgColors = {
    sky: 'bg-sky-50',
    pink: 'bg-pink-50',
  };

  return (
    <div className={`rounded-lg ${bgColors[color]} p-8`}>
      <div className="flex flex-col sm:flex-row sm:items-start gap-8">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-lg font-semibold text-teal-700 mb-4">{title}</p>
          <p className="text-gray-600 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="bg-white">
      {/* --- "About" Section --- */}
      <section className="w-full bg-sky-50 py-16 md:py-24 pt-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Suvatsalya Child Growth and Development Centre is a nurturing space dedicated to the holistic development of every child. Founded with the vision to bridge compassion and understanding in child care, the centre provides individualized support that helps children learn, grow, and thrive at their own pace.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Our multidisciplinary team of clinical psychologists, special educators, occupational and speech therapists works collaboratively to address developmental, behavioural, emotional, and learning needs. At Suvatsalya, we combine scientific expertise with empathy to create an inclusive, child-friendly environment where potential blossoms naturally.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We believe in nurturing strengths, celebrating milestones, and empowering families throughout the journey of growth and discovery. Suvatsalya — a complete family solution for child development, learning, and emotional well-being.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img
                src={hero2Img} // Placeholder
                alt="Child at desk"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- "Our Vision" Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={hero3Img} // Placeholder
                alt="Child running with kite"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To create an inclusive, compassionate, and growth-oriented environment where every child — regardless of ability or challenge — is empowered to reach their fullest potential. We envision a world where early intervention, empathy, and family support come together to build confident, capable, and emotionally balanced individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- "Our Mission" Section --- */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our Mission
              </h2>
              <ul className="list-disc list-inside space-y-4 text-base text-gray-700 leading-relaxed">
                <li>
                  <strong className="text-gray-800">To provide</strong> comprehensive, evidence-based care that supports the cognitive, emotional, physical, and social development of children.
                </li>
                <li>
                  <strong className="text-gray-800">To offer</strong> personalized therapy and learning programs designed to meet each child’s unique needs and strengths.
                </li>
                <li>
                  <strong className="text-gray-800">To empower</strong> families through counselling, education, and collaboration, fostering a supportive network around every child.
                </li>
                <li>
                  <strong className="text-gray-800">To create</strong> a safe, inclusive, and child-friendly space where growth is celebrated and progress is nurtured with compassion.
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img
                src={hero1Img} // Placeholder
                alt="Father teaching child to ride bike"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- "Our Founder" Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team" className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
            Our Founder
          </h2>

          <div className="space-y-8">
            <TeamMemberCard
              image={sharadImg}
              name="Mr. Sharad Shukla"
              title="Director & Co-Founder"
              bio="Mr. Sharad Shukla founded Suvatsalya to create a nurturing, inclusive space where children with diverse needs can grow at their own pace. With a background in Nautical Science and advanced training in Special Education and Clinical Psychology, he bridges discipline, empathy, and evidence-based care to support families through every step of the developmental journey."
              color="sky"
            />
          </div>
        </div>
      </section>

      {/* --- "Founder’s Message" Section --- */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              A Message from the Founder
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Families often arrive with questions, worry, and hope. Suvatsalya exists to remind them that they are not alone. We focus on seeing every child beyond labels, celebrating small victories, and building confidence step by step.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Through early intervention, therapeutic support, and ongoing parent guidance, we partner with families to understand each child’s unique strengths and needs. Our responsibility is not to rush or reshape a child, but to listen, support, and gently guide them toward independence in a safe, respectful, and nurturing environment.
            </p>
          </div>
        </div>
      </section>

      {/* --- "Board of Advisors" Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="board" className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
            Board of Advisors
          </h2>

          <div className="space-y-8">
            <TeamMemberCard
              image={swatiImg}
              name="Dr. Swati Chhabra"
              title="Advisor, Developmental Paediatrics"
              bio="Dr. Swati Chhabra is a Developmental Paediatrician with over 10 years of experience in early intervention and child development. She leads the Developmental Paediatrics Department at Yatharth Hospital and advises early intervention services at AIIMS Jodhpur."
              color="sky"
            />

            <TeamMemberCard
              image={gaganImg}
              name="Dr. Gagan Deep Chhabra"
              title="Advisor, Nephrology"
              bio="Dr. Gagan Deep Chhabra is a distinguished nephrologist with extensive clinical and academic experience, including over 2500 renal transplants. His advisory role supports clinical governance, quality, and evidence-based practice."
              color="pink"
            />

            <TeamMemberCard
              image={tanushreeImg}
              name="Ms. Tanushree Bhargava"
              title="Advisor, Clinical Psychology (RCI)"
              bio="Ms. Tanushree Bhargava is an RCI-licensed Clinical Psychologist with over 10 years of experience across academic and clinical settings. She specializes in neurodevelopmental disorders, psychological assessments, and child-centered interventions."
              color="sky"
            />

            <TeamMemberCard
              image={vinayImg}
              name="Mr. Vinay Jain"
              title="Advisor, Technology & Operations"
              bio="Mr. Vinay Jain brings over 10 years of experience in product development and technology leadership. He supports the centre’s digital systems, process efficiency, and operational scalability."
              color="pink"
            />
          </div>
        </div>
      </section>
    </div>
  );
}