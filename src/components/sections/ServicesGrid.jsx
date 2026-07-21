import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hand, Trophy, Brain, Bone, Zap, Pin, Maximize, Dumbbell, CheckCircle2, Smile, Shield, Heart, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../../data/clinicData';

const iconMap = {
  Hand,
  Trophy,
  Brain,
  Bone,
  Zap,
  Pin,
  Maximize,
  Dumbbell,
  CheckCircle2,
  Smile,
  Shield,
  Heart
};

export default function ServicesGrid({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-deep" />
            <span>High-Fashion Clinical Interventions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-dark">
            Editorial <span className="gradient-text-editorial">Treatment Directory</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            A magazine-style showcase of non-invasive physical therapy modalities engineered around human kinetic performance.
          </p>
        </div>

        {/* Editorial Magazine Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Magazine Nav List (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {SERVICES_DATA.map((service, idx) => {
              const IconComp = iconMap[service.icon] || Hand;
              const isSelected = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group border ${
                    isSelected
                      ? 'bg-slate-dark text-white border-emerald-deep shadow-xl scale-[1.02]'
                      : 'bg-warm-bg text-slate-dark border-gray-200 hover:bg-mint-soft/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
                      isSelected ? 'bg-emerald-deep text-mint-fresh' : 'bg-mint-soft text-emerald-deep'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold font-display">{service.title}</span>
                      <span className={`text-[11px] block ${isSelected ? 'text-mint-soft' : 'text-slate-muted'}`}>
                        {service.duration} • {service.badge}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-coral-warm translate-x-1' : 'text-slate-muted group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Large Editorial Magazine Feature Box (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-warm-bg to-white p-8 sm:p-12 rounded-3xl border border-mint-fresh/40 shadow-2xl space-y-8 sticky top-28">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-coral-soft text-coral-warm text-xs font-black uppercase tracking-wider">
                {activeService.badge}
              </span>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-muted">
                <Clock className="w-4 h-4 text-emerald-deep" />
                <span>Session Duration: {activeService.duration}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-black font-display text-slate-dark">
                {activeService.title}
              </h3>
              <p className="text-sm font-bold text-emerald-deep">
                "{activeService.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                {activeService.desc}
              </p>
            </div>

            {/* Key Clinical Benefits */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-dark block">Clinical Outcomes & Benefits</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-gray-200 text-xs font-bold text-slate-dark flex items-center space-x-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-slate-muted font-medium">Direct Access Evaluation Approved</span>
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-deep to-emerald-dark text-white font-extrabold text-xs shadow-emerald-glow hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <span>Book {activeService.title}</span>
                <ArrowRight className="w-4 h-4 text-mint-fresh" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
