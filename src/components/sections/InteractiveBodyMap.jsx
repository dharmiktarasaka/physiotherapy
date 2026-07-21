import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, CheckCircle2, ArrowRight, Dumbbell, Zap, Sparkles } from 'lucide-react';
import { BODY_MAP_DATA } from '../../data/clinicData';

export default function InteractiveBodyMap({ onOpenBooking }) {
  const [activeJoint, setActiveJoint] = useState('back');
  const jointInfo = BODY_MAP_DATA[activeJoint] || BODY_MAP_DATA.back;

  const hotspots = [
    { id: 'neck', label: 'Cervical Neck', top: '15%', left: '50%' },
    { id: 'shoulder', label: 'Rotator Shoulder', top: '24%', left: '32%' },
    { id: 'elbow', label: 'Elbow Complex', top: '38%', left: '25%' },
    { id: 'back', label: 'Lumbar Spine', top: '44%', left: '50%' },
    { id: 'hip', label: 'Pelvic Hip', top: '56%', left: '44%' },
    { id: 'knee', label: 'Knee Patella', top: '74%', left: '42%' },
    { id: 'foot', label: 'Ankle Plantar', top: '91%', left: '40%' }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-warm-white via-mint-light/20 to-warm-white relative overflow-hidden">
      
      {/* Background Diagonal Gradient Separation */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-dark/5 -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-coral-soft text-coral-warm text-xs font-black uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Interactive Biomechanical Canvas</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-dark">
            Anatomical <span className="gradient-text-editorial">Diagnostic Map</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            Click target joint focus nodes to explore biomechanical root causes, clinical treatment strategies, and recovery timelines.
          </p>
        </div>

        {/* Diagonal Split Layout: Left Interactive Vector Silhouette, Right Clinical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-mint-fresh/30 shadow-2xl">
          
          {/* LEFT: Vector Silhouette with Interactive Hotspots (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] bg-gradient-to-b from-warm-bg via-white to-mint-soft/20 rounded-3xl p-6 border border-gray-100 shadow-inner">
            
            <div className="relative w-64 h-[440px] flex items-center justify-center">
              {/* Human Vector Silhouette */}
              <svg viewBox="0 0 200 400" className="w-full h-full text-slate-300 fill-current filter drop-shadow opacity-90">
                <circle cx="100" cy="35" r="20" className="fill-slate-400" />
                <rect x="94" y="55" width="12" height="15" rx="3" className="fill-slate-400" />
                <path d="M 60 70 L 140 70 L 130 180 L 70 180 Z" className="fill-slate-400" />
                <line x1="100" y1="55" x2="100" y2="180" stroke="#0E7A6A" strokeWidth="5" strokeDasharray="4 4" />
                <path d="M 55 70 L 40 140 L 32 200" stroke="#94A3B8" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M 145 70 L 160 140 L 168 200" stroke="#94A3B8" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M 70 180 L 130 180 L 120 220 L 80 220 Z" className="fill-slate-500" />
                <path d="M 82 220 L 82 310 L 80 370" stroke="#94A3B8" strokeWidth="22" strokeLinecap="round" fill="none" />
                <path d="M 118 220 L 118 310 L 120 370" stroke="#94A3B8" strokeWidth="22" strokeLinecap="round" fill="none" />
              </svg>

              {/* Interactive Pulse Hotspots */}
              {hotspots.map((spot) => {
                const isActive = activeJoint === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveJoint(spot.id)}
                    style={{ top: spot.top, left: spot.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 transition-all ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`w-6 h-6 rounded-full animate-ping absolute ${
                        isActive ? 'bg-coral-warm' : 'bg-emerald-deep'
                      }`} />
                      <span className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                        isActive ? 'bg-coral-warm' : 'bg-emerald-deep'
                      }`} />
                    </div>

                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap shadow-sm transition-all ${
                      isActive
                        ? 'bg-slate-dark text-white border border-mint-fresh shadow-lg'
                        : 'bg-white text-slate-dark border border-gray-200 hover:bg-emerald-deep hover:text-white'
                    }`}>
                      {spot.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Select Buttons */}
            <div className="absolute bottom-3 left-4 right-4 flex flex-wrap justify-center gap-1 z-20">
              {Object.keys(BODY_MAP_DATA).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveJoint(key)}
                  className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-full transition-colors ${
                    activeJoint === key 
                      ? 'bg-emerald-deep text-white shadow-emerald-glow' 
                      : 'bg-gray-100 text-slate-muted hover:bg-gray-200'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Detailed Clinical Breakdown (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-deep text-white flex items-center justify-center shadow-emerald-glow">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-coral-warm tracking-wider">Target Biomechanical Region</span>
                <h3 className="text-3xl font-black font-display text-slate-dark">{jointInfo.title}</h3>
              </div>
            </div>

            {/* Common Diagnoses */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-muted uppercase tracking-wider">Common Clinical Diagnoses</span>
              <div className="flex flex-wrap gap-2">
                {jointInfo.commonConditions.map((cond, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-warm-bg text-slate-dark text-xs font-bold border border-gray-200">
                    • {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Presentation */}
            <div className="bg-warm-bg p-4 rounded-2xl border border-gray-200 space-y-1">
              <span className="text-xs font-black text-emerald-deep uppercase tracking-wider block">Symptom Presentation</span>
              <p className="text-xs text-slate-dark font-medium leading-relaxed">
                {jointInfo.symptoms}
              </p>
            </div>

            {/* Strategy */}
            <div className="bg-mint-soft/40 p-4 rounded-2xl border border-mint-fresh/40 space-y-1">
              <span className="text-xs font-black text-emerald-dark uppercase tracking-wider block">DPT Clinical Strategy</span>
              <p className="text-xs text-slate-dark font-semibold leading-relaxed">
                {jointInfo.treatmentStrategy}
              </p>
            </div>

            {/* Prescribed Kinesiotherapy */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-muted uppercase tracking-wider flex items-center space-x-1">
                <Dumbbell className="w-3.5 h-3.5 text-coral-warm" />
                <span>Prescribed Home Kinesiotherapy Flow</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {jointInfo.recommendedExercises.map((ex, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 text-xs font-bold text-slate-dark flex items-center space-x-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                    <span className="truncate">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-dark">
                <Clock className="w-4 h-4 text-coral-warm" />
                <span>Est. Recovery Timeline: <span className="text-emerald-deep">{jointInfo.avgRecovery}</span></span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-deep to-emerald-dark text-white font-extrabold text-xs shadow-emerald-glow hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Evaluation for {jointInfo.title}</span>
                <ArrowRight className="w-4 h-4 text-mint-fresh" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
