import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Trophy, HeartPulse } from 'lucide-react';
import { TESTIMONIALS } from '../../data/clinicData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-emerald-deep" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-dark">
            Patient <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            Read real recovery stories from athletes, desk professionals, and seniors who restored their active quality of life with MotionCare.
          </p>
        </div>

        {/* Testimonials 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-mint-fresh/20 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-mint-soft absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-coral-warm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Outcome Highlight Pill */}
                <div className="inline-block px-3 py-1 rounded-full bg-mint-soft text-emerald-dark text-xs font-extrabold">
                  ✓ {t.metric}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-dark leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center space-x-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-mint-fresh"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-dark font-display">{t.name}</h4>
                  <span className="text-[11px] text-slate-muted block">{t.role} • {t.condition}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
