import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Shield, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import SEO from '../components/layout/SEO';

export default function SportsRehabPage({ onOpenBooking }) {
  return (
    <>
      <SEO 
        title="Sports Injury Rehabilitation & Athletic Performance | MotionCare"
        description="Elite physical therapy for ACL tears, hamstring strains, rotator cuff repairs, and high-performance return-to-sport testing."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white via-mint-soft/20 to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-emerald-deep" />
              <span>High-Performance Athletic Recovery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-dark">
              Sports Injury <span className="gradient-text">Rehabilitation</span>
            </h1>
            <p className="text-slate-muted text-base sm:text-lg">
              Engineered for marathon runners, collegiate athletes, and fitness enthusiasts to recover from ligament tears and return to peak competition stronger than before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              {
                title: "ACL & Knee Ligament Protocol",
                desc: "Objective quad-to-hamstring strength indexing, graft protection, and high-speed plyometric jump landing testing.",
                badge: "Knee & ACL"
              },
              {
                title: "Overhead Athlete Shoulder Rehab",
                desc: "Scapular kinematics, velocity rotation training, and cuff endurance for tennis, swimming, and baseball.",
                badge: "Rotator Cuff"
              },
              {
                title: "Tendon & Muscle Tear Repair",
                desc: "High-intensity laser photobiomodulation + eccentric tendon loading for Achilles and hamstring strains.",
                badge: "Tendon Regeneration"
              }
            ].map((card, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 space-y-4 border border-mint-fresh/30">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-coral-soft text-coral-warm">{card.badge}</span>
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
              <span>Schedule Sports Injury Evaluation</span>
              <ArrowRight className="w-4 h-4 text-mint-fresh" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
