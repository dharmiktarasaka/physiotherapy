import React from 'react';
import SEO from '../components/layout/SEO';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy | MotionCare Physical Therapy" />
      <div className="py-20 px-4 max-w-4xl mx-auto space-y-6 text-slate-dark text-sm">
        <h1 className="text-3xl font-bold font-display text-emerald-deep">Privacy Policy</h1>
        <p className="text-xs text-slate-muted">Last Updated: July 2026</p>
        <p>At MotionCare Physical Therapy Clinic, patient privacy and HIPAA compliance are our highest priority. We safeguard all personal and protected health information (PHI) collected during consultations.</p>
        <h3 className="text-lg font-bold font-display text-slate-dark pt-4">Data Collection & Medical Confidentiality</h3>
        <p>Any medical history, intake forms, diagnostic images, or contact details submitted via this website are encrypted and strictly accessible only by your treating Doctor of Physical Therapy.</p>
      </div>
    </>
  );
}
