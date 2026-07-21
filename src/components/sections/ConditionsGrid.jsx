import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldAlert, Zap, RotateCcw, Layers, HeartPulse, Brain, Crosshair, Flame, Compass, UserCheck, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { CONDITIONS_DATA } from '../../data/clinicData';

const iconMap = {
  Activity,
  ShieldAlert,
  Zap,
  RotateCcw,
  Layers,
  HeartPulse,
  Brain,
  Crosshair,
  Flame,
  Compass,
  UserCheck
};

export default function ConditionsGrid({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCondition, setActiveCondition] = useState(null);

  const categories = ['All', 'Spine & Core', 'Sports Performance', 'Upper Limb', 'Joint Health', 'Neurology', 'Post-Op'];

  const filteredConditions = selectedCategory === 'All' 
    ? CONDITIONS_DATA 
    : CONDITIONS_DATA.filter(c => c.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <span>Clinical Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-dark">
              Conditions <span className="gradient-text">We Treat</span>
            </h2>
            <p className="text-slate-muted text-base">
              Non-invasive, evidence-based physical therapy protocols for acute injuries, spinal disc issues, chronic pain, and complex motor conditions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-deep text-white shadow-emerald-glow'
                    : 'bg-white text-slate-dark hover:bg-mint-soft/50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Activity;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 border border-mint-fresh/20 flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveCondition(item)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-mint-soft text-emerald-deep flex items-center justify-center group-hover:bg-emerald-deep group-hover:text-white transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-warm-bg text-slate-muted border border-gray-200">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-dark group-hover:text-emerald-deep transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-muted leading-relaxed line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-[11px] text-slate-dark font-semibold">
                    <Clock className="w-3.5 h-3.5 text-coral-warm" />
                    <span>Est. Recovery: {item.recoveryTime}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-deep group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                    <span>View Care Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Detailed Condition View */}
        <AnimatePresence>
          {activeCondition && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCondition(null)}
                className="fixed inset-0 bg-slate-dark/70 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full z-10 shadow-2xl space-y-6 border border-mint-fresh"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-coral-warm">{activeCondition.category}</span>
                    <h3 className="text-2xl font-bold font-display text-slate-dark">{activeCondition.title}</h3>
                  </div>
                  <button 
                    onClick={() => setActiveCondition(null)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-dark"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-xs text-slate-dark">
                  <div>
                    <span className="font-bold block text-slate-muted uppercase mb-1">Common Symptoms</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeCondition.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-center space-x-2 bg-warm-bg p-2 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold block text-slate-muted uppercase mb-1">Our Evidence-Based Treatment Approach</span>
                    <p className="p-3 bg-mint-soft/30 rounded-xl text-slate-dark font-medium border border-mint-fresh/30">
                      {activeCondition.treatmentApproach}
                    </p>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-warm-bg rounded-xl">
                    <span className="text-slate-muted font-medium">Expected Rehabilitation Time:</span>
                    <span className="font-extrabold text-emerald-deep text-sm">{activeCondition.recoveryTime}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    onClick={() => setActiveCondition(null)}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-slate-dark font-bold text-xs"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveCondition(null);
                      onOpenBooking();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-deep text-white font-bold text-xs shadow-emerald-glow hover:bg-emerald-dark"
                  >
                    Book Evaluation for This Condition
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
