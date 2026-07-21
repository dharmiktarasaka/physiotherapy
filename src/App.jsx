import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import AppointmentModal from './components/common/AppointmentModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import TreatmentsPage from './pages/TreatmentsPage';
import SportsRehabPage from './pages/SportsRehabPage';
import NeuroRehabPage from './pages/NeuroRehabPage';
import ExerciseLibraryPage from './pages/ExerciseLibraryPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FaqPage from './pages/FaqPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-warm-white text-slate-dark selection:bg-mint-fresh selection:text-emerald-dark">
      {/* Top Floating Glass Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/conditions" element={<ConditionsPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/treatments" element={<TreatmentsPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/sports-rehabilitation" element={<SportsRehabPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/neurological-rehabilitation" element={<NeuroRehabPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/exercise-library" element={<ExerciseLibraryPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* WhatsApp Quick Chat Widget */}
      <WhatsAppFloat />

      {/* Interactive Consultation Modal */}
      <AppointmentModal isOpen={bookingOpen} onClose={handleCloseBooking} />

      {/* Premium Rehabilitation Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
