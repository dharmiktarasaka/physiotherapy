import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Sun, Sliders, Cpu, Zap, Activity, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { EQUIPMENT_DATA } from '../../data/clinicData';

const iconMap = {
  Radio,
  Sun,
  Sliders,
  Cpu
};

export default function RehabEquipment({ onOpenBooking }) {
  const [activeEq, setActiveEq] = useState(0);
  const current = EQUIPMENT_DATA[activeEq] || EQUIPMENT_DATA[0];
  const IconComp = iconMap[current.icon] || Zap;

  return (
    <section className="py-24 px-4 sm:px-6 bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-black uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-emerald-deep" />
            <span>FDA-Approved Clinical Technologies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-dark">
            Orbital <span className="gradient-text-editorial">Equipment Suite</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            Interact with our high-tech medical technology suite designed for rapid cellular photobiomodulation and non-surgical disc retraction.
          </p>
        </div>

        {/* Orbital Circular Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-mint-fresh/30 shadow-2xl">
          
          {/* Left Orbital Ring Controls (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px]">
            {/* Center Pulsing Sphere */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-deep to-mint-fresh text-white flex flex-col items-center justify-center shadow-emerald-glow z-10">
              <IconComp className="w-10 h-10 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-wider mt-1">{current.category}</span>
            </div>

            {/* Orbit Circle Ring */}
            <div className="absolute inset-0 m-auto w-72 h-72 border-2 border-dashed border-mint-fresh rounded-full animate-spin-slow pointer-events-none" />

            {/* Orbital Trigger Buttons */}
            {EQUIPMENT_DATA.map((eq, idx) => {
              const angles = [0, 90, 180, 270];
              const angle = angles[idx % angles.length];
              const rad = (angle * Math.PI) / 180;
              const radius = 120; // px
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isSelected = activeEq === idx;

              return (
                <button
                  key={eq.name}
                  onClick={() => setActiveEq(idx)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all z-20 ${
                    isSelected
                      ? 'bg-slate-dark text-white shadow-xl scale-125 border-2 border-mint-fresh'
                      : 'bg-warm-bg text-slate-dark border border-gray-200 hover:bg-emerald-deep hover:text-white'
                  }`}
                >
                  <span className="text-xs font-black">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Right Selected Equipment Specification Panel (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-mint-soft text-emerald-dark text-xs font-black uppercase tracking-wider">
                {current.category}
              </span>
              <span className="text-xs font-bold text-slate-muted">Equipment Node 0{activeEq + 1} / 04</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-black font-display text-slate-dark">{current.name}</h3>
              <p className="text-sm text-slate-muted leading-relaxed">{current.purpose}</p>
            </div>

            <div className="p-4 bg-warm-bg rounded-2xl border border-gray-200 space-y-2">
              <span className="text-xs font-black text-emerald-deep uppercase tracking-wider block">Clinical Specification & Power</span>
              <p className="text-xs font-bold text-slate-dark">{current.specs}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-deep" />
                <span>FDA Cleared • Non-Invasive</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-emerald-deep hover:bg-emerald-dark text-white font-extrabold text-xs shadow-emerald-glow flex items-center space-x-2 transition-all"
              >
                <span>Request {current.name}</span>
                <ArrowRight className="w-4 h-4 text-mint-fresh" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
