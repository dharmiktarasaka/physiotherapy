import React from 'react';
import SEO from '../components/layout/SEO';
import ServicesGrid from '../components/sections/ServicesGrid';
import BeforeAfterRecovery from '../components/sections/BeforeAfterRecovery';

export default function TreatmentsPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Evidence-Based Physical Therapy Treatments | MotionCare"
        description="Comprehensive therapy treatments incorporating dry needling, myofascial release, joint distraction, and acoustic shockwave."
      />
      <div className="pt-8">
        <ServicesGrid onOpenBooking={onOpenBooking} />
        <BeforeAfterRecovery onOpenBooking={onOpenBooking} />
      </div>
    </>
  );
}
