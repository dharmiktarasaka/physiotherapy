import React from 'react';
import SEO from '../components/layout/SEO';
import ServicesGrid from '../components/sections/ServicesGrid';
import RehabEquipment from '../components/sections/RehabEquipment';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Physical Therapy & Rehabilitation Services | MotionCare Clinic"
        description="Explore MotionCare's 12 specialized rehabilitation services: Manual Therapy, Sports Physiotherapy, Neurological Rehab, Dry Needling, and Electrotherapy."
      />
      <div className="pt-8">
        <ServicesGrid onOpenBooking={onOpenBooking} />
        <RehabEquipment onOpenBooking={onOpenBooking} />
      </div>
    </>
  );
}
