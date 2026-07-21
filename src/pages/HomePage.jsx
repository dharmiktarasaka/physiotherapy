import React from 'react';
import SEO from '../components/layout/SEO';
import HeroSection from '../components/sections/HeroSection';
import RecoveryTimeline from '../components/sections/RecoveryTimeline';
import ConditionsGrid from '../components/sections/ConditionsGrid';
import ServicesGrid from '../components/sections/ServicesGrid';
import InteractiveBodyMap from '../components/sections/InteractiveBodyMap';
import BeforeAfterRecovery from '../components/sections/BeforeAfterRecovery';
import RehabEquipment from '../components/sections/RehabEquipment';
import ExerciseLibraryPreview from '../components/sections/ExerciseLibraryPreview';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FaqAndBlogSection from '../components/sections/FaqAndBlogSection';

export default function HomePage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="MotionCare | Premier Physiotherapy & Rehabilitation Clinic"
        description="Move better, recover faster, and live pain free. Experience non-surgical physical rehabilitation, acoustic shockwave therapy, and 3D body posture mapping."
      />

      <HeroSection onOpenBooking={onOpenBooking} />
      <RecoveryTimeline onOpenBooking={onOpenBooking} />
      <ConditionsGrid onOpenBooking={onOpenBooking} />
      <ServicesGrid onOpenBooking={onOpenBooking} />
      <InteractiveBodyMap onOpenBooking={onOpenBooking} />
      <BeforeAfterRecovery onOpenBooking={onOpenBooking} />
      <RehabEquipment onOpenBooking={onOpenBooking} />
      <ExerciseLibraryPreview />
      <TeamSection onOpenBooking={onOpenBooking} />
      <TestimonialsSection />
      <WhyChooseUs onOpenBooking={onOpenBooking} />
      <FaqAndBlogSection />
    </>
  );
}
