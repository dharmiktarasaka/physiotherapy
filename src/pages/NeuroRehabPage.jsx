import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/layout/SEO';

export default function NeuroRehabPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Neurological Rehabilitation & Stroke Recovery | MotionCare"
        description="Specialized Bobath and PNF physical therapy for stroke recovery, gait retraining, Parkinson's disease, and vestibular balance disorders."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white via-mint-light/20 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <Brain className="w-4 h-4 text-emerald-deep" />
              <span>Neuro-Plasticity & Motor Re-Education</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-dark">
              Neurological <span className="gradient-text">Rehabilitation</span>
            </h1>
            <p className="text-slate-muted text-base sm:text-lg">
              Utilizing brain-body neuroplasticity retraining to help patients overcome stroke-induced hemiparesis, Parkinson's motor freezing, and balance loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              {
                title: "Post-Stroke Motor Retraining",
                desc: "Bobath technique & mirror therapy to re-activate neural pathways and improve limb spasticity.",
                badge: "Stroke Recovery"
              },
              {
                title: "Vestibular & Vertigo Balance",
                desc: "Inner ear canalith repositioning (Epley) and computer force-plate balance stability retraining.",
                badge: "Balance & Vertigo"
              },
              {
                title: "Parkinson's & Gait Mobility",
                desc: "LSVT BIG amplitude movements to prevent gait freezing and improve independent stride confidence.",
                badge: "Parkinson's Care"
              }
            ].map((card, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 space-y-4 border border-mint-fresh/30">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-mint-soft text-emerald-dark">{card.badge}</span>
                <h3 className="text-2xl font-bold font-display text-slate-dark">{card.title}</h3>
                <p className="text-xs text-slate-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-2xl bg-emerald-deep text-white font-bold text-sm shadow-emerald-glow hover:bg-emerald-dark transition-all inline-flex items-center space-x-2"
            >
              <span>Book Neurological Consultation</span>
              <ArrowRight className="w-4 h-4 text-mint-fresh" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
