import { Link } from 'react-router-dom';
import { Button } from '../layout/Button';
import hrnImg from '../../assets/images/High Risk.jpeg';

function ContentListItem({ children }) {
  return (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  );
}

export function HighRiskNewbornPage() {
  const title = "High-Risk Newborns & Developmental Concerns";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section --- */}
      <section className="w-full bg-brand-cream py-10 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-last md:order-first">
              <img
                src={hrnImg}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
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

      {/* --- 2. Content Area --- */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-5">

              {/* Definition */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  Definition of a High-Risk Newborn
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  As defined by the <strong>American Academy of Pediatrics (AAP)</strong>, a high-risk newborn is an infant who is born prematurely or with a health condition that increases their risk of developmental and health problems — including preterm babies, low birth weight infants, birth asphyxia, neonatal seizures, and NICU-admitted infants. Many of these conditions require specialized, multidisciplinary care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  A High-Risk Newborn has medical, biological, or environmental conditions that increase the likelihood of developmental delays or neurodevelopmental disorders. These infants require close monitoring, early screening, and timely intervention to support optimal brain development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Early identification significantly improves long-term cognitive, motor, speech, and social outcomes.
                </p>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  Categories of High-Risk Newborns
                </h2>

                {/* 1. Biological & Medical */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Biological &amp; Medical Risk Factors</h3>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">A. Prematurity (Preterm Birth)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Definition: Birth before 37 weeks of gestation</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <ContentListItem>Moderate Preterm: 32–36 weeks</ContentListItem>
                  <ContentListItem>Very Preterm: &lt;32 weeks</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Cerebral Palsy</ContentListItem>
                  <ContentListItem>Speech delay</ContentListItem>
                  <ContentListItem>Attention deficits</ContentListItem>
                  <ContentListItem>Learning disabilities</ContentListItem>
                  <ContentListItem>Sensory processing difficulties</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">B. Low Birth Weight (LBW)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Definition: Birth weight less than 2.5 kg</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Very Low Birth Weight: &lt;1.5 kg</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Reasons:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Prematurity</ContentListItem>
                  <ContentListItem>Poor maternal nutrition</ContentListItem>
                  <ContentListItem>Placental insufficiency</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Cognitive delay</ContentListItem>
                  <ContentListItem>Growth delay</ContentListItem>
                  <ContentListItem>Behavioral concerns</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">C. Birth Asphyxia / Hypoxic Ischemic Encephalopathy (HIE)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Definition: Lack of adequate oxygen to the brain during or immediately after birth</p>
                <p className="text-lg font-semibold text-gray-700 mb-1">Common Causes:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Prolonged labor</ContentListItem>
                  <ContentListItem>Cord around neck</ContentListItem>
                  <ContentListItem>Meconium aspiration</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Cerebral Palsy</ContentListItem>
                  <ContentListItem>Epilepsy</ContentListItem>
                  <ContentListItem>Global Developmental Delay</ContentListItem>
                  <ContentListItem>Motor impairment</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">D. Neonatal Seizures</h4>
                <p className="text-lg font-semibold text-gray-700 mb-1">Reason:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Brain injury</ContentListItem>
                  <ContentListItem>Infection</ContentListItem>
                  <ContentListItem>Metabolic disturbances</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Developmental regression</ContentListItem>
                  <ContentListItem>Learning disability</ContentListItem>
                  <ContentListItem>Epilepsy</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">E. Severe Neonatal Jaundice (Kernicterus)</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Reason: Extremely high bilirubin levels affecting brain cells</p>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Hearing loss</ContentListItem>
                  <ContentListItem>Motor delay</ContentListItem>
                  <ContentListItem>Speech delay</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">F. Congenital Infections (TORCH)</h4>
                <p className="text-lg font-semibold text-gray-700 mb-1">Includes:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Toxoplasmosis</ContentListItem>
                  <ContentListItem>Rubella</ContentListItem>
                  <ContentListItem>Cytomegalovirus (CMV)</ContentListItem>
                  <ContentListItem>Herpes</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Microcephaly</ContentListItem>
                  <ContentListItem>Hearing impairment</ContentListItem>
                  <ContentListItem>Intellectual disability</ContentListItem>
                  <ContentListItem>Autism-like features</ContentListItem>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">G. Genetic &amp; Chromosomal Conditions</h4>
                <p className="text-lg font-semibold text-gray-700 mb-1">Examples include:</p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <ContentListItem>Down Syndrome</ContentListItem>
                  <ContentListItem>Fragile X Syndrome</ContentListItem>
                  <ContentListItem>Metabolic disorders</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Risks:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Intellectual disability</ContentListItem>
                  <ContentListItem>Delayed milestones</ContentListItem>
                  <ContentListItem>Speech &amp; language delay</ContentListItem>
                </ul>

                {/* 2. Maternal Risk Factors */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">2. Maternal Risk Factors During Pregnancy</h3>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <ContentListItem>Uncontrolled Diabetes</ContentListItem>
                  <ContentListItem>Hypertension</ContentListItem>
                  <ContentListItem>Thyroid disorders</ContentListItem>
                  <ContentListItem>Severe anemia</ContentListItem>
                  <ContentListItem>Alcohol or tobacco use</ContentListItem>
                  <ContentListItem>Infections during pregnancy</ContentListItem>
                  <ContentListItem>Poor antenatal care</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Impact on Development:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Poor fetal brain growth</ContentListItem>
                  <ContentListItem>Increased risk of ADHD, ASD, learning delays</ContentListItem>
                </ul>

                {/* 3. Delivery-Related */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">3. Delivery-Related Risk Factors</h3>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <ContentListItem>Prolonged or obstructed labor</ContentListItem>
                  <ContentListItem>Emergency Cesarean section</ContentListItem>
                  <ContentListItem>Instrumental delivery (forceps/vacuum)</ContentListItem>
                  <ContentListItem>Meconium aspiration</ContentListItem>
                  <ContentListItem>NICU admission &gt;5 days</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Possible Developmental Concerns:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Motor delay</ContentListItem>
                  <ContentListItem>Feeding difficulties</ContentListItem>
                  <ContentListItem>Sensory regulation issues</ContentListItem>
                </ul>

                {/* 4. Environmental */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">4. Environmental &amp; Psychosocial Risk Factors</h3>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <ContentListItem>Severe malnutrition</ContentListItem>
                  <ContentListItem>Lack of stimulation</ContentListItem>
                  <ContentListItem>Neglect</ContentListItem>
                  <ContentListItem>Institutional care</ContentListItem>
                  <ContentListItem>Maternal depression</ContentListItem>
                </ul>
                <p className="text-lg font-semibold text-gray-700 mb-1">Developmental Impact:</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <ContentListItem>Delayed language</ContentListItem>
                  <ContentListItem>Emotional regulation difficulties</ContentListItem>
                  <ContentListItem>Social skill challenges</ContentListItem>
                </ul>
              </div>

              {/* Developmental Issues */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  Developmental Issues Common in High-Risk Newborns
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  High-risk infants are more likely to develop:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <ContentListItem>Global Developmental Delay (GDD)</ContentListItem>
                  <ContentListItem>Cerebral Palsy</ContentListItem>
                  <ContentListItem>Autism Spectrum Disorder (ASD)</ContentListItem>
                  <ContentListItem>ADHD</ContentListItem>
                  <ContentListItem>Learning Disabilities</ContentListItem>
                  <ContentListItem>Speech &amp; Language Disorders</ContentListItem>
                  <ContentListItem>Sensory Processing Disorder</ContentListItem>
                </ul>
              </div>

              {/* Early Screening */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  Importance of Early Screening
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  High-risk newborns require:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <ContentListItem>Developmental screening at 3, 6, 9, 12 months</ContentListItem>
                  <ContentListItem>Neuromotor assessment</ContentListItem>
                  <ContentListItem>Hearing &amp; vision screening</ContentListItem>
                  <ContentListItem>Early Intervention programs</ContentListItem>
                  <ContentListItem>Parent counselling</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Early therapy can significantly improve outcomes during the first 3 years of life, when brain plasticity is highest.
                </p>
              </div>

              {/* At Suvatsalya */}
              <div>
                <h2 className="text-3xl font-semibold text-brand-blue mb-3">
                  High-Risk Newborn Follow-Up at Suvatsalya
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  At Suvatsalya, our <strong>Developmental Paediatrician</strong> leads a structured follow-up programme for high-risk newborns, aligned with guidelines from the American Academy of Pediatrics. Our multidisciplinary team provides:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <ContentListItem>Comprehensive developmental history and physical examination</ContentListItem>
                  <ContentListItem>Neuromotor and cognitive milestone assessment</ContentListItem>
                  <ContentListItem>Hearing and vision screening</ContentListItem>
                  <ContentListItem>Speech and language evaluation</ContentListItem>
                  <ContentListItem>Early Intervention programs tailored to each child</ContentListItem>
                  <ContentListItem>Parent counselling and home stimulation guidance</ContentListItem>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With timely identification and structured therapy, children born with high-risk conditions can achieve meaningful developmental progress and a better quality of life.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
