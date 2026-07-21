import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Search, Stethoscope, Dumbbell, CheckCircle, Flame, ArrowRight, Activity, Zap } from 'lucide-react';

export default function RecoveryTimeline({ onOpenBooking }) {
  return (
    <section id="recovery-journey" className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-extrabold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-emerald-deep" />
              <span>Progressive Kinetic Roadmap</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-dark leading-tight">
              The Rehabilitation <span className="gradient-text-editorial">Bento Journey</span>
            </h2>
            <p className="text-slate-muted text-base">
              From acute pain onset to peak athletic performance — an asymmetrical Bento architecture mapping your clinical path.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-emerald-deep hover:bg-emerald-dark text-white font-extrabold text-xs shadow-emerald-glow flex items-center space-x-2 shrink-0"
          >
            <span>Start Step 01 Assessment</span>
            <ArrowRight className="w-4 h-4 text-mint-fresh" />
          </button>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Box 1: Large Featured (2 Cols, 2 Rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-dark to-slate-medium text-white p-8 rounded-3xl border border-emerald-deep/30 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-deep/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-coral-warm text-white text-xs font-black uppercase tracking-wider">
                  Stage 01 • Intake
                </span>
                <span className="text-3xl font-black font-display text-mint-fresh">01</span>
              </div>
              <h3 className="text-3xl font-bold font-display text-white">Pain & Biomechanical Restriction</h3>
              <p className="text-xs text-slate-light leading-relaxed">
                Acute lumbar spasms, restricted neck rotation, or joint inflammation limiting daily work and exercise.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-2 text-xs font-bold text-coral-warm">
                <AlertCircle className="w-4 h-4" />
                <span>Baseline VAS Pain Index: 8.5 / 10</span>
              </div>
              <span className="text-xs text-mint-fresh font-semibold">Immediate Relief Goal</span>
            </div>
          </motion.div>

          {/* Bento Box 2: Tall Assessment (1 Col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-editorial p-6 rounded-3xl flex flex-col justify-between border border-mint-fresh/30 group hover:-translate-y-1 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-mint-soft text-emerald-dark text-[10px] font-black uppercase">
                  Stage 02
                </span>
                <Search className="w-6 h-6 text-emerald-deep" />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-dark">3D Motion Analysis</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Digital range-of-motion mapping and joint angle indexing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-bold text-emerald-deep">
              ✓ 100% Diagnostic Accuracy
            </div>
          </motion.div>

          {/* Bento Box 3: Targeted Therapy (1 Col) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card-editorial p-6 rounded-3xl flex flex-col justify-between border border-mint-fresh/30 group hover:-translate-y-1 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-coral-soft text-coral-warm text-[10px] font-black uppercase">
                  Stage 03
                </span>
                <Stethoscope className="w-6 h-6 text-coral-warm" />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-dark">Clinical Interventions</h4>
              <p className="text-xs text-slate-muted leading-relaxed">
                Acoustic shockwave, dry needling, and joint distraction.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-bold text-coral-warm">
              Pain Drops to 3.0 / 10
            </div>
          </motion.div>

          {/* Bento Box 4: Neuromuscular Rebuilding (2 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-r from-mint-soft to-warm-bg p-8 rounded-3xl border border-mint-fresh/40 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-deep text-white text-xs font-black uppercase">
                  Stage 04 • Rebuilding
                </span>
                <Dumbbell className="w-6 h-6 text-emerald-deep" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-dark">Targeted Muscle Kinesiotherapy</h3>
              <p className="text-xs text-slate-muted leading-relaxed">
                Progressive eccentric resistance loading to strengthen stabilizing core musculature and restore limb symmetry.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-mint-fresh/30 flex justify-between text-xs font-bold text-slate-dark">
              <span>Isometric Force Output:</span>
              <span className="text-emerald-deep">+85% Muscle Power</span>
            </div>
          </motion.div>

          {/* Bento Box 5: Long Term Resilience (2 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-emerald-deep text-white p-8 rounded-3xl shadow-emerald-glow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/20 text-mint-fresh text-xs font-black uppercase">
                  Stage 05 & 06 • Peak Performance
                </span>
                <Flame className="w-6 h-6 text-mint-fresh" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">Full Recovery & Lifelong Resilience</h3>
              <p className="text-xs text-mint-soft leading-relaxed">
                Uninhibited fluid movement, home exercise prescriptions, and zero pain recurrence.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex justify-between text-xs font-bold text-mint-fresh">
              <span>Final Pain Rating: 0.0 / 10</span>
              <span>100% Unrestricted Flexion</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
