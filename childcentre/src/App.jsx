import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

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
import { AutismPage } from './components/pages/AutismPage';
import { AdhdPage } from './components/pages/AdhdPage';
import { LearningDisabilityPage } from './components/pages/LearningDisabilityPage';
import { CerebralPalsyPage } from './components/pages/CerebralPalsyPage';
import { DownSyndromePage } from './components/pages/DownSyndromePage';
import { GddPage } from './components/pages/GddPage';
import { OccupationalTherapyPage } from './components/pages/OccupationalTherapyPage';
import { SpeechTherapyPage } from './components/pages/SpeechTherapyPage';
import { AbaTherapyPage } from './components/pages/AbaTherapyPage';
import { PhysiotherapyPage } from './components/pages/PhysiotherapyPage';
import { PsychologicalTestPage } from './components/pages/PsychologicalTestPage';
import { SingleArticlePage } from './components/pages/SingleArticlePage'; 
import { TermsPage } from './components/pages/TermsPage';
import { PolicyPage } from './components/pages/PolicyPage';

// --- Import Admin components ---
import { LoginPage } from './components/pages/admin/LoginPage';
import { AdminLayout } from './components/pages/admin/AdminLayout';
import { ContactQueries } from './components/pages/admin/ContactQueries';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { ManageArticles } from './components/pages/admin/ManageArticles';
import { ManageCareer } from './components/pages/admin/ManageCareer';
import { ManageStories } from './components/pages/admin/ManageStories';
import { Dashboard } from './components/pages/admin/Dashboard'; // 1. IMPORT THE NEW DASHBOARD

// This component wraps public pages in the Header and Footer
function PublicLayout() {
  return (
    <>
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
    <Routes>
      {/* 1. Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        
        {/* Main Category Pages */}
        <Route path="what-we-treat" element={<WhatWeTreat />} />
        <Route path="therapies" element={<SpeechTherapyPage />} /> 
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

        {/* --- "What We Treat" Sub-Pages --- */}
        <Route path="what-we-treat/autism" element={<AutismPage />} />
        <Route path="what-we-treat/adhd" element={<AdhdPage />} />
        <Route path="what-we-treat/learning-disability" element={<LearningDisabilityPage />} />
        <Route path="what-we-treat/cerebral-palsy" element={<CerebralPalsyPage />} />
        <Route path="what-we-treat/down-syndrome" element={<DownSyndromePage />} />
        <Route path="what-we-treat/gdd" element={<GddPage />} />
        <Route path="what-we-treat/:slug" element={<GenericPage />} />
        <Route path="what-we-treat/:slug/:subSlug" element={<GenericPage />} />
        
        {/* --- "Therapies" Sub-Pages --- */}
        <Route path="therapies/speech-therapy" element={<SpeechTherapyPage />} />
        <Route path="therapies/occupational-therapy" element={<OccupationalTherapyPage />} />
        <Route path="therapies/aba-therapy" element={<AbaTherapyPage />} />
        <Route path="therapies/physiotherapy" element={<PhysiotherapyPage />} />
        <Route path="therapies/psychological-tests" element={<PsychologicalTestPage />} />
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
      </Route>
    </Routes>
  );
}

export default App;