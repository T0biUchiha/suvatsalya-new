import hero2Img from '../../assets/images/about us.png';
import hero3Img from '../../assets/images/Our Friends.png';
import hero1Img from '../../assets/images/Our Practitioner.png';
import gaganImg from '../../assets/directors/Dr. Gagan Deep Chhabra.png';
import swatiImg from '../../assets/directors/Dr. Swati Chhabra.png';
import sharadImg from '../../assets/directors/Mr. SHARAD SHUKLA.png';
import vinayImg from '../../assets/directors/Mr. Vinay Jain.jpeg';
import tanushreeImg from '../../assets/directors/Tanushree Bhargava.jpeg';

function TeamMemberCard({ image, name, title, degrees, bio, color = 'teal', imagePosition = 'top' }) {
  const bgColors = {
    teal: 'bg-brand-cream',
    alt: 'bg-brand-cream-dark',
  };

  const objectPositionClass = imagePosition === 'center' ? 'object-center' : 'object-top';

  return (
    <div className={`rounded-lg ${bgColors[color]} p-8`}>
      <div className="flex flex-col sm:flex-row sm:items-start gap-8">
        <img
          src={image}
          alt={name}
          className={`w-36 h-36 rounded-full object-cover ${objectPositionClass} flex-shrink-0`}
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-brand-blue mb-1">{name}</h3>
          <p className="text-lg font-semibold text-brand-teal mb-1">{title}</p>
          {degrees && <p className="text-sm text-gray-500 mb-3">{degrees}</p>}
          <div className="text-gray-700 leading-relaxed space-y-3">{bio}</div>
        </div>
      </div>
    </div>
  );
}

export function AboutUs() {
  return (
    <div className="bg-white">
      {/* About Section */}
      <section className="w-full bg-brand-cream py-12 md:py-24 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-8">
                About Us
              </h2>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Suvatsalya Child Growth and Development Centre is a nurturing space dedicated to the holistic development of every child. Founded with the vision to bridge compassion and understanding in child care, the centre provides individualized support that helps children learn, grow, and thrive at their own pace.
              </p>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Our multidisciplinary team of developmental paediatricians, paediatric neurologist, paediatric ophthalmologist, paediatric orthopaedician, paediatric ENT specialist, clinical psychologists, special educators, occupational and speech therapists works collaboratively to address developmental, behavioural, emotional, and learning needs. At Suvatsalya, we combine scientific expertise with empathy to create an inclusive, child-friendly environment where potential blossoms naturally.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We believe in nurturing strengths, celebrating milestones, and empowering families throughout the journey of growth and discovery. Suvatsalya — a complete family solution for child development, learning, and emotional well-being.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img
                src={hero2Img}
                alt="Child at desk"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="w-full bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-first md:order-first">
              <img
                src={hero3Img}
                alt="Child running with kite"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-last md:order-last">
              <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-8">
                Our Vision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To create an inclusive, compassionate, and growth-oriented environment where every child — regardless of ability or challenge — is empowered to reach their fullest potential. We envision a world where early intervention, empathy, and family support come together to build confident, capable, and emotionally balanced individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-brand-cream py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <h2 className="text-4xl md:text-5xl font-semibold text-brand-blue mb-8">
                Our Mission
              </h2>
              <ul className="list-disc list-inside space-y-4 text-base text-gray-700 leading-relaxed">
                <li>
                  <strong className="text-gray-800">To provide</strong> comprehensive, evidence-based care that supports the cognitive, emotional, physical, and social development of children.
                </li>
                <li>
                  <strong className="text-gray-800">To offer</strong> personalized therapy and learning programs designed to meet each child&apos;s unique needs and strengths.
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
                src={hero1Img}
                alt="Father teaching child to ride bike"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="w-full bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team" className="text-4xl md:text-5xl font-semibold text-brand-blue mb-16 text-center">
            Our Founder
          </h2>

          <div className="space-y-5">
            <TeamMemberCard
              image={sharadImg}
              name="Mr. Sharad Shukla"
              title="Director &amp; Founder"
              degrees="M.A. in Clinical Psychology | Diploma in Special Education (RCI Regd.) | CTET Qualified | Diploma in Nautical Science"
              bio={<>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  <li>4+ Years of Special Education Experience</li>
                  <li>Multidisciplinary Background in Leadership &amp; Clinical Practice</li>
                  <li>Formally Trained in Special Education &amp; Clinical Psychology</li>
                  <li>Founder &ndash; Suvatsalya Child Growth &amp; Development Centre</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Professional Focus</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Early identification &amp; intervention in neurodevelopmental challenges</li>
                  <li>Structured therapy planning &amp; sensory integration approaches</li>
                  <li>Holistic, child-centred developmental frameworks</li>
                  <li>Parent-guided intervention models</li>
                </ul>
              </>}
              color="teal"
            />
          </div>

          {/* Founder's Message */}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="relative bg-brand-cream rounded-xl p-8 md:p-10 border-l-4 border-brand-teal">
              <span className="absolute -top-4 left-8 text-6xl leading-none text-brand-teal/30 font-heading select-none">&ldquo;</span>
              <h3 className="text-2xl font-semibold text-brand-blue mb-5">
                A Message from the Founder
              </h3>
              <p className="text-base text-gray-600 italic mb-5">&ldquo;Every child is not meant to fit into the world as it is &mdash; sometimes the world must learn how to meet the child.&rdquo;</p>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                When parents come to Suvatsalya, they seek clarity, reassurance, and a path forward. This centre was created to provide exactly that &mdash; a structured, compassionate space where children are understood beyond labels and supported with purpose.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                With a foundation in Special Education and Clinical Psychology, and guided by disciplined leadership, my vision for Suvatsalya is simple: integrate scientific insight with empathy-driven care to build strong developmental foundations.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                We do not rush children to fit timelines.<br />
                We strengthen them to build confidence, independence, and lifelong growth.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                At Suvatsalya, families are partners &mdash; and every step forward matters.
              </p>
              <p className="mt-6 text-sm font-semibold text-brand-teal">&mdash; Mr. Sharad Shukla, Director &amp; Founder</p>
            </div>
          </div>

          {/* Board of Advisors - within same section */}
          <h2 id="board" className="text-4xl md:text-5xl font-semibold text-brand-blue mb-10 mt-20 text-center">
            Board of Advisors
          </h2>

          <div className="space-y-6">
            <TeamMemberCard
              image={swatiImg}
              name="Dr. Swati Chhabra"
              title="Developmental Paediatrician"
              degrees="MBBS | Diploma in Child Health (DCH) | Post Graduate Diploma in Developmental Paediatrics (PGDDN)"
              bio={<>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  <li>10+ Years of Clinical Experience</li>
                  <li>HOD of Child Development Centre, Yatharth Hospital, Noida Extension</li>
                  <li>Medical Education &ndash; Himalayan Institute of Medical Sciences, Dehradun</li>
                  <li>Advanced Training &ndash; IPGMER, Kolkata</li>
                  <li>Advisor &ndash; Early Intervention Services, AIIMS Jodhpur</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Special Focus Areas</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Developmental delays (speech, motor &amp; social milestones)</li>
                  <li>Behavioural and attention-related concerns</li>
                  <li>High-risk newborn follow-up (as defined by the American Academy of Paediatrics &mdash; including preterm babies, low birth weight, birth asphyxia, neonatal seizures, and NICU-admitted infants)</li>
                  <li>Neuro-motor and learning challenges</li>
                </ul>
              </>}
              color="teal"
              imagePosition="center"
            />

            {/* Dr. Swati's Message */}
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-brand-cream rounded-xl p-8 md:p-10 border-l-4 border-brand-teal">
                <span className="absolute -top-4 left-8 text-6xl leading-none text-brand-teal/30 font-heading select-none">&ldquo;</span>
                <h3 className="text-2xl font-semibold text-brand-blue mb-5">
                  A Message from Dr. Swati Chhabra
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  Every child&apos;s development tells a story &mdash; and early understanding can shape its direction.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  In my years of working with children and families, I have seen how timely identification and structured intervention can significantly influence long-term outcomes. Developmental concerns, whether related to speech, attention, behaviour, or motor skills, deserve clarity, not uncertainty.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, our approach is rooted in evidence-based practice and multidisciplinary collaboration. We focus not only on diagnosis, but on designing individualized care pathways that strengthen developmental foundations.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  I strongly believe that parents are essential partners in this journey. With the right guidance, structured planning, and compassionate support, children can move forward with confidence.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Every child deserves early understanding, informed care, and the opportunity to reach their fullest potential.
                </p>
                <p className="mt-6 text-sm font-semibold text-brand-teal">&mdash; Dr. Swati Chhabra, Developmental Paediatrician</p>
              </div>
            </div>

            <TeamMemberCard
              image={gaganImg}
              name="Dr. Gagan Deep Chhabra"
              title="Advisor &ndash; Operations"
              degrees="MBBS | DNB (Medicine) | DNB (Nephrology)"
              bio={<>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  <li>15+ Years of Clinical &amp; Academic Experience</li>
                  <li>Associated with leading tertiary care institutions in India</li>
                  <li>AITSE Award Recipient (Recognized by the President of India)</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Clinical &amp; Academic Highlights</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>2500+ Renal Transplants Managed</li>
                  <li>Extensive experience in AVF &amp; AV Shunt Interventions</li>
                  <li>Former Consultant &ndash; Max Super Specialty Hospital, Saket</li>
                  <li>Associated with Sir Ganga Ram Hospital &amp; B.L.K Hospital</li>
                  <li>8+ Years as DNB Co-guide &amp; Academic Mentor</li>
                </ul>
              </>}
              color="alt"
            />

            <TeamMemberCard
              image={tanushreeImg}
              name="Ms. Tanushree Bhargava"
              title="Advisor &ndash; Clinical Psychology (RCI Licensed)"
              degrees="B.A. (Hons.) | M.A. Psychology | UGC NET Qualified | M.Phil Clinical Psychology (RCI Licensed)"
              bio={<>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  <li>10+ Years of Clinical &amp; Academic Experience</li>
                  <li>Former Assistant Professor &ndash; University of Delhi, Manipal University, Ch. Bansi Lal University</li>
                  <li>Clinical Experience &ndash; NIMHANS Bengaluru | Lok Nayak Hospital (New Delhi) | IGMC Shimla</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Areas of Expertise</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Neurodevelopmental Disorders (Autism Spectrum Disorder, ADHD, Learning Disabilities)</li>
                  <li>Psychological &amp; Diagnostic Assessments</li>
                  <li>Behaviour Therapy &amp; Psychotherapy</li>
                  <li>Child &amp; Adolescent Counselling</li>
                  <li>Emotional &amp; Behavioural Interventions</li>
                </ul>
              </>}
              color="teal"
            />

            <TeamMemberCard
              image={vinayImg}
              name="Mr. Vinay Jain"
              title="Advisor &ndash; Technology &amp; Operations"
              degrees="BCA | MCA (Rank Holder)"
              bio={<>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  <li>15+ Years of Technology &amp; Product Development Experience</li>
                  <li>Founder &ndash; Grepix Infotech</li>
                  <li>Specialized in iOS, Android &amp; Web Application Development</li>
                  <li>Top 10% iOS Developer &ndash; Stack Overflow Recognition</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Professional Highlights</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Led end-to-end development of multiple mobile &amp; web-based platforms</li>
                  <li>Provides strategic technical leadership and operational direction</li>
                  <li>Expertise in translating business goals into scalable digital solutions</li>
                  <li>Strong focus on innovation, user experience &amp; performance optimization</li>
                </ul>
              </>}
              color="alt"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
