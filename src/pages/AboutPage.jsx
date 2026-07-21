import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HeartPulse, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import SEO from '../components/layout/SEO';
import TeamSection from '../components/sections/TeamSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';

export default function AboutPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="About MotionCare | Award-Winning Physical Therapy & Rehabilitation"
        description="Learn about MotionCare Clinic's mission to redefine human movement through evidence-based kinesiotherapy, DPT doctor leadership, and non-invasive technologies."
      />

      {/* Hero Banner */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white via-mint-light/20 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4 text-emerald-deep" />
            <span>Our Clinical Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-dark max-w-4xl mx-auto leading-tight">
            Pioneering the Next Era of <span className="gradient-text">Human Kinetic Rehabilitation</span>
          </h1>
          <p className="text-slate-muted text-base sm:text-lg max-w-2xl mx-auto">
            At MotionCare, we believe movement is the foundational medicine of human vitality. Our mission is to liberate patients from joint pain, spinal nerve compression, and movement restrictions.
          </p>
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display text-slate-dark">
              Why We Founded MotionCare Physical Therapy
            </h2>
            <p className="text-slate-muted text-sm leading-relaxed">
              Traditional healthcare environments often treat symptoms with temporary prescription painkillers or rush patients through generic 15-minute exercises. MotionCare was established as an antidote to clinical assembly lines.
            </p>
            <div className="space-y-3">
              {[
                "Doctor-led 1-on-1 hands-on manual therapy for 60 full minutes.",
                "Non-surgical spinal decompression & high-intensity acoustic shockwave.",
                "Objective 3D motion tracking to measure real kinetic progress.",
                "Empowering home kinesiotherapy video prescriptions."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm text-slate-dark font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-deep shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
              alt="Physical therapist evaluating patient joint motion"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <TeamSection onOpenBooking={onOpenBooking} />
      <WhyChooseUs onOpenBooking={onOpenBooking} />
    </>
  );
}
