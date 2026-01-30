import hero2Img from '../../assets/home-page/hero2.jpg';
import hero3Img from '../../assets/home-page/hero3.jpg';
import hero1Img from '../../assets/home-page/hero1.jpg';
import hero4Img from '../../assets/home-page/hero4.jpg'; // Placeholder for team

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
              <ul className="space-y-4 text-base text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🌱</span>
                  <span>
                    <strong className="text-gray-800">To provide</strong> comprehensive, evidence-based care that supports the cognitive, emotional, physical, and social development of children.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">💬</span>
                  <span>
                    <strong className="text-gray-800">To offer</strong> personalized therapy and learning programs designed to meet each child’s unique needs and strengths.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🤝</span>
                  <span>
                    <strong className="text-gray-800">To empower</strong> families through counselling, education, and collaboration, fostering a supportive network around every child.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">💖</span>
                  <span>
                    <strong className="text-gray-800">To create</strong> a safe, inclusive, and child-friendly space where growth is celebrated and progress is nurtured with compassion.
                  </span>
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

      {/* --- "Our Team" Section --- */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. ADDED ID="team" HERE */}
          <h2 id="team" className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
            Our Co-Founders
          </h2>
          
          <div className="space-y-8">
            <TeamMemberCard
              image={hero4Img} // Placeholder
              name="Dr. Jane Doe - Co-founder"
              title="Clinical Director"
              bio="Jane is an entrepreneur and philanthropist, who joined to support children with special needs, aiming to make therapy accessible for every child. Beyond business, Jane is dedicated to uplifting underprivileged children through autism education and healthcare, driven by a vision of building a better, inclusive society."
              color="sky"
            />
            
            <TeamMemberCard
              image={hero4Img} // Placeholder
              name="Dr. John Smith - Pediatric Neurologist"
              title="Lead Therapist"
              bio="Dr. Smith is the best pediatric neurologist in London. He has a career spanning 25 years in pediatric neurology. Dr. Smith made a name for himself with a focus on diagnosis and managing of various challenging child issues including but not limited to autism and cognitive disabilities. He has treated over 20k cases."
              color="pink"
            />
            
            {/* You can add more team members here */}
            
          </div>
        </div>
      </section>
    </div>
  );
}