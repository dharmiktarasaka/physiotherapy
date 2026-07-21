import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Play, Layers, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXERCISES_DATA } from '../../data/clinicData';

export default function ExerciseLibraryPreview() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ['All', 'Back', 'Shoulder', 'Hip', 'Knee', 'Neck', 'Balance'];

  const filtered = filterCategory === 'All'
    ? EXERCISES_DATA
    : EXERCISES_DATA.filter(e => e.category === filterCategory);

  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-black uppercase tracking-wider">
              <Dumbbell className="w-4 h-4 text-emerald-deep" />
              <span>Targeted Home Kinesiotherapy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-dark">
              3D Layered <span className="gradient-text-editorial">Exercise Library</span>
            </h2>
            <p className="text-slate-muted text-base">
              Physiotherapist-prescribed movement guides to perform targeted stretching, strength loading, and joint mobilization safely at home.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                  filterCategory === cat
                    ? 'bg-emerald-deep text-white shadow-emerald-glow'
                    : 'bg-warm-bg text-slate-dark hover:bg-mint-soft/50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Layered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((ex, idx) => (
            <div key={ex.id} className="card-3d-perspective">
              <div className="card-3d-inner glass-card-editorial rounded-3xl overflow-hidden border border-mint-fresh/30 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl">
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img 
                      src={ex.image} 
                      alt={ex.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-emerald-deep text-[10px] font-black uppercase shadow-sm">
                      {ex.category} • {ex.type}
                    </span>

                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-dark text-white text-[10px] font-bold">
                      {ex.difficulty}
                    </span>

                    <button
                      onClick={() => setActiveVideo(ex)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-emerald-deep/90 hover:bg-emerald-deep text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    >
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold font-display text-slate-dark">{ex.title}</h3>
                    <p className="text-xs text-slate-muted leading-relaxed">{ex.description}</p>
                    
                    <div className="space-y-1 pt-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-muted">Target Muscle:</span>
                        <span className="font-bold text-emerald-deep">{ex.targetMuscle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-muted">Prescribed Dosage:</span>
                        <span className="font-bold text-coral-warm">{ex.reps}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveVideo(ex)}
                    className="w-full py-3 rounded-xl bg-warm-bg hover:bg-emerald-deep hover:text-white text-emerald-deep font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>View Step-by-Step Execution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Execution Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)}
                className="fixed inset-0 bg-slate-dark/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-3xl p-6 max-w-lg w-full z-10 shadow-2xl space-y-4 border border-mint-fresh"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-display text-slate-dark">{activeVideo.title}</h3>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="p-2 rounded-full bg-gray-100 text-slate-dark"
                  >
                    ✕
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden bg-black h-64 flex items-center justify-center relative">
                  <img src={activeVideo.image} alt={activeVideo.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute text-white text-center p-4 space-y-2">
                    <Play className="w-12 h-12 mx-auto text-mint-fresh animate-bounce" />
                    <span className="text-xs font-bold block">Demonstration Execution Video</span>
                    <span className="text-[11px] text-mint-soft">Prescribed dosage: {activeVideo.reps}</span>
                  </div>
                </div>

                <div className="p-3 bg-warm-bg rounded-xl text-xs space-y-1 text-slate-dark">
                  <span className="font-bold text-emerald-deep block">Clinical Execution Tip:</span>
                  <p>{activeVideo.description}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
