import React from 'react';
import SEO from '../components/layout/SEO';
import ConditionsGrid from '../components/sections/ConditionsGrid';
import InteractiveBodyMap from '../components/sections/InteractiveBodyMap';

export default function ConditionsPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Conditions We Treat | Back Pain, Sciatica, Joint Arthritis, Sports Injuries"
        description="Non-surgical clinical physical therapy treatments for back pain, sciatica, frozen shoulder, knee arthritis, slip disc, and stroke recovery."
      />
      <div className="pt-8">
        <ConditionsGrid onOpenBooking={onOpenBooking} />
        <InteractiveBodyMap onOpenBooking={onOpenBooking} />
      </div>
    </>
  );
}
