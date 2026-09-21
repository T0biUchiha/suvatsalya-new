import './App.css';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScrollToTop } from './components/layout/ScrollToTop';

// --- Import Public Pages ---
import { Homepage } from './components/pages/Home';
import { AboutUs } from './components/pages/AboutUs';
import { WhatWeTreat } from './components/pages/WhatWeTreat';
import { Internships } from './components/pages/Internships';
import { ParentTestimonials } from './components/pages/ParentTestimonials';
import { Benefits } from './components/pages/Benefits';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { GenericPage } from './components/pages/GenericPage';
import { TherapiesPage } from './components/pages/TherapiesPage';
import { SpecialEducationPage } from './components/pages/SpecialEducationPage';
import { AutismPage } from './components/pages/AutismPage';
import { AdhdPage } from './components/pages/AdhdPage';
import { LearningDisabilityPage } from './components/pages/LearningDisabilityPage';
import { CerebralPalsyPage } from './components/pages/CerebralPalsyPage';
import { DownSyndromePage } from './components/pages/DownSyndromePage';
import { GddPage } from './components/pages/GddPage';
import { HighRiskNewbornPage } from './components/pages/HighRiskNewbornPage';
import { OccupationalTherapyPage } from './components/pages/OccupationalTherapyPage';
import { SpeechTherapyPage } from './components/pages/SpeechTherapyPage';
import { AbaTherapyPage } from './components/pages/AbaTherapyPage';
import { PhysiotherapyPage } from './components/pages/PhysiotherapyPage';
import { PsychologicalTestPage } from './components/pages/PsychologicalTestPage';
import { SingleArticlePage } from './components/pages/SingleArticlePage';
import { SingleBenefitPage } from './components/pages/SingleBenefitPage';
import { SingleTestimonialPage } from './components/pages/SingleTestimonialPage';
import { TermsPage } from './components/pages/TermsPage';
import { PolicyPage } from './components/pages/PolicyPage';
import { Seo } from './components/layout/Seo';

// --- Import Admin components ---
import { LoginPage } from './components/pages/admin/LoginPage';
import { AdminLayout } from './components/pages/admin/AdminLayout';
import { ContactQueries } from './components/pages/admin/ContactQueries';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { ManageArticles } from './components/pages/admin/ManageArticles';
import { ManageCareer } from './components/pages/admin/ManageCareer';
import { ManageStories } from './components/pages/admin/ManageStories';
import { Dashboard } from './components/pages/admin/Dashboard';
import { ManageBenefits } from './components/pages/admin/ManageBenefits';
import { ManageSocialLinks } from './components/pages/admin/ManageSocialLinks';

const routeSeo = {
  '/': {
    title: 'Child Growth and Development Centre in Noida',
    description:
      'Evidence-based child development assessments and therapies in Noida, including speech, occupational, ABA, physiotherapy, and special education.',
  },
  '/about': {
    title: 'About Suvatsalya',
    description:
      'Learn about Suvatsalya Child Growth and Development Centre and our multidisciplinary approach to supporting children and families in Noida.',
  },
  '/contact': {
    title: 'Contact Suvatsalya in Noida',
    description:
      'Contact Suvatsalya Child Growth and Development Centre in Noida to enquire about assessments, therapies, and appointments.',
  },
  '/blog': {
    title: 'Child Development Articles',
    description:
      'Practical articles for parents about child development, therapies, learning, behaviour, and developmental milestones.',
  },
  '/articles': {
    title: 'Child Development Articles',
    description:
      'Practical articles for parents about child development, therapies, learning, behaviour, and developmental milestones.',
    canonicalPath: '/blog',
  },
  '/media': {
    title: 'Child Development Articles',
    description:
      'Practical articles for parents about child development, therapies, learning, behaviour, and developmental milestones.',
    canonicalPath: '/blog',
  },
  '/testimonials': {
    title: 'Parent Testimonials',
    description:
      'Read experiences shared by families supported by Suvatsalya Child Growth and Development Centre in Noida.',
  },
  '/benefits': {
    title: 'Government Benefits for Children',
    description:
      'Information about government schemes, subsidies, and benefits for children with developmental needs and their families.',
  },
  '/internships': {
    title: 'Internships and Careers',
    description:
      'Explore internships and career opportunities with Suvatsalya Child Growth and Development Centre in Noida.',
  },
  '/terms': {
    title: 'Terms and Conditions',
    description:
      'Read the terms and conditions for Suvatsalya Child Growth and Development Centre.',
  },
  '/policies': {
    title: 'Privacy and Site Policies',
    description:
      'Read the privacy and site policies for Suvatsalya Child Growth and Development Centre.',
  },
  '/therapies': {
    title: 'Child Development Therapies in Noida',
    description:
      'Explore speech therapy, occupational therapy, ABA therapy, physiotherapy, psychological assessment, and special education at Suvatsalya.',
  },
  '/therapies/speech-therapy': {
    title: 'Speech Therapy for Children in Noida',
    description:
      'Speech and language therapy for children with communication, language, and speech-development needs in Noida.',
  },
  '/therapies/occupational-therapy': {
    title: 'Occupational Therapy for Children in Noida',
    description:
      'Occupational therapy to support children’s sensory, motor, self-care, and daily-living skills in Noida.',
  },
  '/therapies/aba-therapy': {
    title: 'ABA Therapy for Children in Noida',
    description: 'Individualised ABA therapy and behavioural support for children in Noida.',
  },
  '/therapies/physiotherapy': {
    title: 'Paediatric Physiotherapy in Noida',
    description:
      'Physiotherapy to support children’s movement, strength, coordination, and physical development in Noida.',
  },
  '/therapies/psychological-tests': {
    title: 'Psychological Assessment for Children in Noida',
    description: 'Psychological and developmental assessments for children and families in Noida.',
  },
  '/therapies/special-education': {
    title: 'Special Education Support in Noida',
    description:
      'Individualised special education support for children with learning and developmental needs in Noida.',
  },
  '/what-we-treat': {
    title: 'Child Development Conditions We Support',
    description:
      'Learn about the developmental, learning, and behavioural concerns supported by Suvatsalya in Noida.',
  },
  '/what-we-treat/autism': {
    title: 'Autism Support and Therapy in Noida',
    description:
      'Assessment and multidisciplinary therapy support for children with autism in Noida.',
  },
  '/what-we-treat/adhd': {
    title: 'ADHD Support for Children in Noida',
    description:
      'Assessment and support for children with ADHD, attention, and behavioural needs in Noida.',
  },
  '/what-we-treat/learning-disability': {
    title: 'Learning Disability Support in Noida',
    description:
      'Assessment and learning support for children with learning disabilities in Noida.',
  },
  '/what-we-treat/cerebral-palsy': {
    title: 'Cerebral Palsy Therapy in Noida',
    description:
      'Multidisciplinary therapy and developmental support for children with cerebral palsy in Noida.',
  },
  '/what-we-treat/down-syndrome': {
    title: 'Down Syndrome Support in Noida',
    description:
      'Child development therapies and family support for children with Down syndrome in Noida.',
  },
  '/what-we-treat/gdd': {
    title: 'Global Developmental Delay Support in Noida',
    description:
      'Assessment and early intervention support for children with global developmental delay in Noida.',
  },
  '/what-we-treat/high-risk-newborn': {
    title: 'High-Risk Newborn Follow-Up in Noida',
    description:
      'Developmental monitoring and early support for high-risk newborns and their families in Noida.',
  },
};

function PublicRouteSeo() {
  const { pathname } = useLocation();
  if (/^\/(blog|testimonials|benefits)\//.test(pathname)) return null;
  const page = routeSeo[pathname] || {
    title: 'Child Development Therapies in Noida',
    description:
      'Evidence-based assessments and therapies for children at Suvatsalya Child Growth and Development Centre in Noida.',
  };
  return (
    <Seo title={page.title} description={page.description} path={page.canonicalPath || pathname} />
  );
}

// This component wraps public pages in the Header and Footer
function PublicLayout() {
  return (
    <>
      <PublicRouteSeo />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// 2. DELETE the old AdminDashboard function
// function AdminDashboard() { ... }

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* 1. Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutUs />} />

          {/* Main Category Pages */}
          <Route path="what-we-treat" element={<WhatWeTreat />} />
          <Route path="therapies" element={<TherapiesPage />} />
          <Route path="internships" element={<Internships />} />
          <Route path="media" element={<Blog />} />
          <Route path="testimonials" element={<ParentTestimonials />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="blog" element={<Blog />} />
          <Route path="articles" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="policies" element={<PolicyPage />} />

          {/* --- Single Article Routes --- */}
          <Route path="blog/:slug" element={<SingleArticlePage />} />
          <Route path="articles/:slug" element={<SingleArticlePage />} />
          <Route path="benefits/:slug" element={<SingleBenefitPage />} />
          <Route path="testimonials/:slug" element={<SingleTestimonialPage />} />

          {/* --- "What We Treat" Sub-Pages --- */}
          <Route path="what-we-treat/autism" element={<AutismPage />} />
          <Route path="what-we-treat/adhd" element={<AdhdPage />} />
          <Route path="what-we-treat/learning-disability" element={<LearningDisabilityPage />} />
          <Route path="what-we-treat/cerebral-palsy" element={<CerebralPalsyPage />} />
          <Route path="what-we-treat/down-syndrome" element={<DownSyndromePage />} />
          <Route path="what-we-treat/gdd" element={<GddPage />} />
          <Route path="what-we-treat/high-risk-newborn" element={<HighRiskNewbornPage />} />
          <Route path="what-we-treat/:slug" element={<GenericPage />} />
          <Route path="what-we-treat/:slug/:subSlug" element={<GenericPage />} />

          {/* --- "Therapies" Sub-Pages --- */}
          <Route path="therapies/speech-therapy" element={<SpeechTherapyPage />} />
          <Route path="therapies/occupational-therapy" element={<OccupationalTherapyPage />} />
          <Route path="therapies/aba-therapy" element={<AbaTherapyPage />} />
          <Route path="therapies/physiotherapy" element={<PhysiotherapyPage />} />
          <Route path="therapies/psychological-tests" element={<PsychologicalTestPage />} />
          <Route path="therapies/special-education" element={<SpecialEducationPage />} />
          <Route path="therapies/:slug" element={<GenericPage />} />
        </Route>

        {/* 2. Admin Login Route */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* 3. Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* 3. UPDATE THIS LINE */}
          <Route index element={<Dashboard />} />

          <Route path="queries" element={<ContactQueries />} />
          <Route path="articles" element={<ManageArticles />} />
          <Route path="career" element={<ManageCareer />} />
          <Route path="stories" element={<ManageStories />} />
          <Route path="benefits" element={<ManageBenefits />} />
          <Route path="social" element={<ManageSocialLinks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
