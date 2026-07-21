import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cpu, UserCheck, Zap, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenBooking }) {
  const reasons = [
    {
      title: "Licensed DPT Experts",
      desc: "100% of our therapists hold Doctor of Physical Therapy degrees with specialized board certifications.",
      icon: Award
    },
    {
      title: "Evidence-Based Protocols",
      desc: "We utilize clinically proven mechanical diagnosis and treatment (MDT) and Bobath neurological techniques.",
      icon: ShieldCheck
    },
    {
      title: "Modern Medical Tech",
      desc: "FDA-cleared acoustic shockwave, 15W high-intensity laser, and 3D computer spinal decompression.",
      icon: Cpu
    },
    {
      title: "Personalized 1-on-1 Care",
      desc: "Dedicated 60-minute individual sessions with your therapist — no double booking or unassisted aides.",
      icon: UserCheck
    },
    {
      title: "Accelerated Recovery",
      desc: "Our combined manual & high-tech modalities drop recovery timelines by up to 45%.",
      icon: Zap
    },
    {
      title: "Empowering Patient Education",
      desc: "We teach you the biomechanical origin of your pain and prescribe custom app-guided home kinesiotherapy.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-warm-white via-mint-light/20 to-warm-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-deep" />
            <span>The MotionCare Clinical Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-dark">
            Why Patients Choose <span className="gradient-text">MotionCare</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            We transcend generic hospital therapy by delivering high-touch, evidence-driven kinetic rehabilitation.
          </p>
        </div>

        {/* Infographic 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => {
            const IconComp = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-mint-fresh/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-mint-soft text-emerald-deep flex items-center justify-center group-hover:bg-emerald-deep group-hover:text-white transition-colors shadow-sm">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-dark group-hover:text-emerald-deep transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-muted leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="bg-slate-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-deep/30 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-warm">Direct Access Health Standard</span>
            <h4 className="text-2xl font-bold font-display">No Referral Needed. Start Today.</h4>
            <p className="text-slate-light text-xs sm:text-sm">
              Schedule your 60-minute diagnostic session with our physical therapists without doctor referrals or waiting lists.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-2xl bg-emerald-deep hover:bg-emerald-dark text-white font-bold text-sm shadow-emerald-glow transition-all shrink-0 flex items-center space-x-2"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-4 h-4 text-mint-fresh" />
          </button>
        </div>

      </div>
    </section>
  );
}
