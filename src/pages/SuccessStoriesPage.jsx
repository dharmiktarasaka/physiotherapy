import React from 'react';
import SEO from '../components/layout/SEO';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BeforeAfterRecovery from '../components/sections/BeforeAfterRecovery';

export default function SuccessStoriesPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Patient Recovery Results & Success Stories | MotionCare"
        description="Explore real patient stories, objective pain index drops, and range-of-motion recovery benchmarks achieved at MotionCare Physical Therapy Clinic."
      />
      <div className="pt-8">
        <BeforeAfterRecovery onOpenBooking={onOpenBooking} />
        <TestimonialsSection />
      </div>
    </>
  );
}
