import { Link } from 'react-router-dom';

export function TermsPage() {
  const title = "Terms & Conditions";

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. Hero Section (REPLACED) --- */}
      <section className="w-full bg-gray-50 py-16 pt-40">
        {/* Centered title, matching the content width */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
        </div>
      </section>
      
      {/* --- 2. Content Area --- */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* This div centers the article content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4">
                Terms & Conditions — Suvatsalya Child Growth and Development Centre
              </h2>
              <p>
                Before giving your consent, please read the information below carefully.
                If you have any questions, our team will be happy to explain or provide a copy of this document.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Understanding and Communication</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Please inform our staff if you need <em>language interpretation</em> to fully understand the written or spoken information during your visits.</li>
                  <li>We will do our best to arrange interpretive support, though it may not always be immediately available.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Training and Supervision</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Suvatsalya Child Growth and Development Centre is a <em>learning-based institution</em>.</li>
                  <li>This means that <em>trainees or professionals under supervision</em> may participate in certain parts of your or your child’s care, always under the direct guidance of senior clinicians.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accuracy of Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>I confirm that the <em>information I provide</em> to the team is <em>true, accurate, and complete</em>.</li>
                  <li>I understand that the <em>quality of care and decisions</em> made will depend on the accuracy of the details I share.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Information About Services</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>I will receive <em>clear information</em> about all proposed <em>assessments, therapies, or procedures</em>, including their <strong>benefits, possible risks, alternatives</strong>, and expected outcomes.</li>
                  <li>I understand that I am encouraged to <em>ask questions</em> about anything I do not understand, and a qualified clinician will be available to answer them.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Choice and Consent</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>I understand that <em>no results or outcomes are guaranteed</em> for any service provided.</li>
                  <li>I have the <em>right to accept or decline</em> services at any time.</li>
                  <li>I may <em>withdraw my consent</em> or change my decision about continuing therapy or assessment whenever I wish.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Referrals and Further Care</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>If additional evaluation or treatment is required, the centre may provide <em>referrals</em> to other specialists or facilities.</li>
                  <li>I understand that I am <em>responsible for arranging and paying</em> for any referred services outside the centre.</li>
                  <li>I will be informed about how to <em>seek emergency support</em> if needed.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Confidentiality</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All <em>personal and clinical information</em> shared will be kept <em>confidential</em> according to the <Link to="/policies" className="text-sky-700 underline">privacy policy</Link> of Suvatsalya Child Growth and Development Centre.</li>
                  <li>Information may only be shared with other professionals <em>with my permission</em> or as required by law.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Acknowledgment</h3>
                <p>By signing or submitting this form, I confirm that:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>I have <em>read and understood</em> the above terms.</li>
                  <li>I have had an opportunity to <em>ask questions</em> and receive explanations.</li>
                  <li>I <em>voluntarily consent</em> to receive care and services from Suvatsalya Child Growth and Development Centre.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}