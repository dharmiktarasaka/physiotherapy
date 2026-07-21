import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Award, ArrowRight, RotateCcw, CheckCircle2, Sliders, Sparkles } from 'lucide-react';

export default function BeforeAfterRecovery({ onOpenBooking }) {
  const [sliderVal, setSliderVal] = useState(85);

  const metrics = [
    {
      name: "Visual Pain Index (VAS)",
      before: "8.8 / 10 (Severe Lumbar Pain)",
      after: "0.4 / 10 (Zero Pain)",
      valBefore: 88,
      valAfter: 4,
      color: "from-coral-warm to-red-500"
    },
    {
      name: "Joint Range of Motion Flexion",
      before: "42% Restricted Joint Glide",
      after: "98% Full Fluid Motion",
      valBefore: 42,
      valAfter: 98,
      color: "from-emerald-deep to-mint-fresh"
    },
    {
      name: "Target Isometric Force Output",
      before: "35% Muscle Atrophy",
      after: "96% Peak Power Output",
      valBefore: 35,
      valAfter: 96,
      color: "from-emerald-dark to-emerald-light"
    },
    {
      name: "Unassisted Gait Velocity",
      before: "1.2 mph Limping Stride",
      after: "3.9 mph Natural Stride",
      valBefore: 30,
      valAfter: 95,
      color: "from-teal-500 to-mint-fresh"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-dark text-white relative overflow-hidden">
      {/* Background Kinetic Glows */}
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] bg-emerald-deep/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[25rem] h-[25rem] bg-mint-fresh/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-deep/40 text-mint-fresh text-xs font-black uppercase tracking-wider border border-emerald-deep/60">
            <Sliders className="w-4 h-4 text-mint-fresh" />
            <span>3D Interactive Outcomes Dashboard</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-white">
            Before vs. After <span className="gradient-text">Recovery Simulator</span>
          </h2>
          <p className="text-slate-light text-base sm:text-lg">
            Drag the kinetic timeline slider to simulate real patient physiological recovery outcomes from Intake to Week 6 post-rehabilitation.
          </p>
        </div>

        {/* Glass Dashboard Main Panel */}
        <div className="glass-dark-canvas rounded-3xl p-6 sm:p-12 border border-mint-fresh/30 shadow-2xl space-y-10">
          
          {/* Dashboard Top Control Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-coral-warm animate-ping" />
              <span className="text-xs font-black uppercase tracking-widest text-mint-fresh">Interactive Stage Simulator:</span>
            </div>

            {/* Slider Control */}
            <div className="w-full sm:w-96 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-light">
                <span>Intake (Day 01)</span>
                <span className="text-mint-fresh font-black">{sliderVal}% Recovery Index</span>
                <span>Post-Rehab (Week 06)</span>
              </div>
              <input 
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(parseInt(e.target.value))}
                className="w-full accent-mint-fresh cursor-pointer"
              />
            </div>
          </div>

          {/* 4 Metric Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metrics.map((m, idx) => {
              const currentVal = sliderVal > 50 ? m.valAfter : m.valBefore;
              const currentLabel = sliderVal > 50 ? m.after : m.before;

              return (
                <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-display text-white">{m.name}</span>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${
                      sliderVal > 50 ? 'bg-emerald-deep text-mint-fresh' : 'bg-coral-warm/20 text-coral-warm'
                    }`}>
                      {currentLabel}
                    </span>
                  </div>

                  <div className="h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${currentVal}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-light font-medium">
                    <span>Baseline Standard</span>
                    <span>{currentVal}% Verified Kinetic Index</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard Action CTA */}
          <div className="bg-gradient-to-r from-emerald-deep to-emerald-dark p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-mint-fresh/30">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-mint-fresh">Verified Outcomes</span>
              <h4 className="text-2xl font-bold font-display text-white">Achieve Your 0.0 Pain Score</h4>
              <p className="text-xs text-mint-soft">Schedule your 60-minute diagnostic session with our Doctors of Physical Therapy.</p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-coral-warm hover:bg-coral-warm/90 text-white font-extrabold text-xs shadow-coral-glow transition-all shrink-0 flex items-center space-x-2"
            >
              <span>Simulate Your Care Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
