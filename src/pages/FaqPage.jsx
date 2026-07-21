import React from 'react';
import SEO from '../components/layout/SEO';
import FaqAndBlogSection from '../components/sections/FaqAndBlogSection';

export default function FaqPage() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions & Insurance Direct Access | MotionCare"
        description="Find answers to common questions about physical therapy direct access, health insurance coverage, first visit expectations, and dry needling safety."
      />
      <div className="pt-8">
        <FaqAndBlogSection />
      </div>
    </>
  );
}
