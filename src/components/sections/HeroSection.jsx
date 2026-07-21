import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Calendar, ArrowRight, ShieldCheck, Sparkles, HeartPulse, Zap, RotateCcw } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 overflow-hidden kinetic-mesh-bg"
    >
      {/* Background Organic Blobs */}
      <div 
        className="absolute top-10 left-10 w-[35rem] h-[35rem] bg-mint-glow/15 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-emerald-noir/15 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
      />

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Top Editorial Headline Banner */}
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-emerald-noir/20 text-emerald-noir text-xs font-black uppercase tracking-widest shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-velvet-copper animate-ping" />
            <Activity className="w-4 h-4 text-emerald-deep" />
            <span>Human Kinetic Architecture • 2026 Portfolio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black font-display text-slate-noir tracking-tight leading-[0.95]"
          >
            MOVEMENT <br />
            <span className="gradient-text-editorial">IS MEDICINE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-muted text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Redefining non-surgical physical rehabilitation through 3D kinetic motion analysis, high-energy acoustic shockwave, and personalized kinesiotherapy.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              style={{
                backgroundColor: '#0D6E60',
                backgroundImage: 'linear-gradient(135deg, #0B4F46 0%, #0D6E60 60%, #0F172A 100%)',
                color: '#FFFFFF',
                boxShadow: '0 10px 30px -4px rgba(11, 79, 70, 0.5)'
              }}
              className="w-full sm:w-auto px-10 py-4.5 rounded-full font-black text-xs tracking-wider uppercase hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3 cursor-pointer border-2 border-[#4ECCA3] z-20 text-white group"
            >
              <Calendar className="w-4 h-4 text-[#4ECCA3] group-hover:rotate-12 transition-transform" />
              <span className="text-white font-extrabold tracking-wider">Book Recovery Consultation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#recovery-journey"
              className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-white/90 backdrop-blur-md text-slate-noir font-extrabold text-xs tracking-wider uppercase border border-gray-200 hover:border-emerald-deep/40 hover:bg-mint-soft/30 transition-all flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4 text-velvet-copper" />
              <span>Explore Rehabilitation Flow</span>
            </a>
          </motion.div>
        </div>

        {/* Asymmetrical Editorial Layered Media Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-6xl mx-auto pt-6"
        >
          {/* Main Panoramic Image Frame */}
          <div 
            className="relative rounded-3xl overflow-hidden shadow-3xl border-4 border-white/80 bg-white h-[420px] sm:h-[480px] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1600" 
              alt="High fashion athletic movement posture" 
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-noir/80 via-transparent to-emerald-deep/10" />

            {/* Overlaid Vector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-mint-glow opacity-60">
              <path d="M 100 200 Q 300 100 500 300 T 900 200" fill="none" strokeWidth="3" strokeDasharray="8 8" className="animate-pulse" />
              <circle cx="500" cy="300" r="10" fill="#E07A5F" className="animate-ping" />
            </svg>

            {/* Bottom Floating Title */}
            <div className="absolute bottom-6 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between text-white gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-mint-glow">Kinetic Posture Retraining</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">Biomechanical Spinal Realignment</h3>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                <ShieldCheck className="w-5 h-5 text-mint-glow" />
                <span className="text-xs font-semibold">100% Board Certified DPT Evaluation</span>
              </div>
            </div>
          </div>

          {/* FLOATING GLASS CARD 1 */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-4 sm:left-6 z-20 glass-card-editorial p-4 rounded-2xl flex items-center space-x-3 shadow-glass border-l-4 border-emerald-noir"
          >
            <div className="w-10 h-10 rounded-xl bg-mint-soft text-emerald-noir flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-noir animate-pulse" />
            </div>
            <div>
              <span className="block text-xs font-extrabold text-slate-noir">3D Spine Matrix</span>
              <span className="text-[11px] font-bold text-emerald-deep">Vertebral Alignment 99.4%</span>
            </div>
          </motion.div>

          {/* FLOATING GLASS CARD 2 */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -right-4 sm:right-6 z-20 glass-card-editorial p-4 rounded-2xl flex items-center space-x-3 shadow-glass border-l-4 border-velvet-copper"
          >
            <div className="w-10 h-10 rounded-xl bg-velvet-soft text-velvet-copper flex items-center justify-center">
              <HeartPulse className="w-5 h-5 text-velvet-copper animate-pulse" />
            </div>
            <div>
              <span className="block text-xs font-extrabold text-slate-noir">Joint Load Index</span>
              <span className="text-[11px] font-bold text-velvet-copper">-68% Decompression Relief</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
