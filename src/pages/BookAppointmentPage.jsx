import React from 'react';
import { Calendar, Phone, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/layout/SEO';
import { CLINIC_INFO } from '../data/clinicData';

export default function BookAppointmentPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Book Physical Therapy Evaluation | MotionCare Clinic"
        description="Schedule your 60-minute physical therapy consultation and 3D postural diagnostic evaluation with Doctor of Physical Therapy specialists."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white via-mint-soft/20 to-white min-h-[80vh]">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-emerald-deep" />
              <span>Direct Access Evaluation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-dark">
              Book Your <span className="gradient-text">Recovery Consultation</span>
            </h1>
            <p className="text-slate-muted text-base sm:text-lg max-w-2xl mx-auto">
              Take the first step towards pain-free movement. No physician referral needed. Select your condition and therapist to launch the interactive booking system.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-mint-fresh/40 shadow-2xl space-y-6 text-center">
            <div className="w-20 h-20 rounded-full bg-mint-soft text-emerald-deep flex items-center justify-center mx-auto shadow-inner">
              <Calendar className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-bold font-display text-slate-dark">Launch Interactive Booking Modal</h3>
            <p className="text-xs text-slate-muted max-w-md mx-auto">
              Click below to choose your pain condition, preferred date/time slot, and physical therapist specialist.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-10 py-4 rounded-2xl bg-coral-warm hover:bg-coral-warm/90 text-white font-bold text-sm shadow-coral-glow transition-all hover:scale-105"
            >
              Open Appointment System
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-dark font-semibold">
            <div className="bg-warm-bg p-4 rounded-2xl border border-gray-200 flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-deep" />
              <span>Direct Access Approved</span>
            </div>
            <div className="bg-warm-bg p-4 rounded-2xl border border-gray-200 flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-deep" />
              <span>Same-Day Slots Available</span>
            </div>
            <div className="bg-warm-bg p-4 rounded-2xl border border-gray-200 flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-deep" />
              <span>Major Insurances Accepted</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
