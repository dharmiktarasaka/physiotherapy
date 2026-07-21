import React from 'react';
import SEO from '../components/layout/SEO';

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service | MotionCare Physical Therapy" />
      <div className="py-20 px-4 max-w-4xl mx-auto space-y-6 text-slate-dark text-sm">
        <h1 className="text-3xl font-bold font-display text-emerald-deep">Terms of Service</h1>
        <p className="text-xs text-slate-muted">Last Updated: July 2026</p>
        <p>Welcome to MotionCare Clinic. By accessing this website or scheduling a consultation, you agree to comply with our clinical care terms and cancellation policies.</p>
        <h3 className="text-lg font-bold font-display text-slate-dark pt-4">Direct Access & Professional Evaluation</h3>
        <p>Physical therapy services provided at MotionCare are conducted by licensed Doctors of Physical Therapy. Online exercise guides are for educational purposes and do not replace personalized in-clinic evaluation.</p>
      </div>
    </>
  );
}
