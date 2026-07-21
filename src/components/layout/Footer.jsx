import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Clock, ArrowRight, Shield, Send, Sparkles, HeartPulse } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA, CONDITIONS_DATA } from '../../data/clinicData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-dark text-white pt-24 pb-12 border-t border-emerald-deep/30 relative overflow-hidden">
      {/* Background Organic Wave Layers & Kinetic Glows */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-coral-warm via-emerald-deep to-mint-fresh" />
      <div className="absolute top-10 left-1/4 w-[35rem] h-[35rem] bg-emerald-deep/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-mint-fresh/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Top Full-Width Landing CTA Banner */}
        <div className="glass-dark-canvas rounded-3xl p-8 sm:p-14 border border-mint-fresh/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-mint-fresh text-xs font-black uppercase tracking-wider border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Move Better • Recover Faster • Live Pain Free</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-white leading-tight">
                Ready to Reclaim Your <br />
                <span className="gradient-text">Kinetic Range & Power?</span>
              </h2>
              <p className="text-mint-soft text-sm sm:text-base max-w-2xl leading-relaxed">
                Schedule your comprehensive 3D postural and biomechanical joint evaluation with our Doctor of Physical Therapy specialists today. Direct Access approved — no doctor referral needed.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full px-8 py-4.5 bg-coral-warm hover:bg-coral-warm/90 text-white rounded-2xl font-extrabold text-xs tracking-wider uppercase shadow-coral-glow transition-all hover:scale-105 text-center flex items-center justify-center space-x-2"
              >
                <span>Book Evaluation Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-mint-fresh" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700">
          
          {/* Col 1 & 2: Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-deep to-mint-fresh flex items-center justify-center text-white shadow-emerald-glow">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-2xl font-black font-display text-white tracking-tight">
                Motion<span className="text-mint-fresh">Care</span>
              </span>
            </Link>

            <p className="text-slate-light text-xs leading-relaxed max-w-sm">
              MotionCare is an Awwwards-certified digital physical therapy showcase designed for human kinetic movement, sports injury recovery, and non-surgical spinal decompression.
            </p>

            <div className="space-y-2.5 text-xs text-slate-light">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-mint-fresh shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-mint-fresh shrink-0" />
                <span className="font-bold text-white">{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-mint-fresh shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            {/* Newsletter Glass Box */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Subscribe to Motion & Ergonomic Tips</span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-mint-fresh w-full"
                />
                <button type="submit" className="p-3 rounded-xl bg-emerald-deep hover:bg-emerald-dark text-white transition-colors shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black font-display uppercase tracking-widest text-mint-fresh">Treatment Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-light">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-mint-fresh transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-deep">•</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Conditions We Treat */}
          <div className="space-y-4">
            <h4 className="text-xs font-black font-display uppercase tracking-widest text-mint-fresh">Conditions We Treat</h4>
            <ul className="space-y-2.5 text-xs text-slate-light">
              {CONDITIONS_DATA.slice(0, 6).map((condition) => (
                <li key={condition.id}>
                  <Link to="/conditions" className="hover:text-mint-fresh transition-colors flex items-center space-x-1.5">
                    <span className="text-emerald-deep">•</span>
                    <span>{condition.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Quick Links & Google Map Preview */}
          <div className="space-y-4">
            <h4 className="text-xs font-black font-display uppercase tracking-widest text-mint-fresh">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-light">
              <li><Link to="/about" className="hover:text-mint-fresh transition-colors">About Our Clinic</Link></li>
              <li><Link to="/sports-rehabilitation" className="hover:text-mint-fresh transition-colors">Sports Injury Rehab</Link></li>
              <li><Link to="/exercise-library" className="hover:text-mint-fresh transition-colors">Interactive Exercise Library</Link></li>
              <li><Link to="/success-stories" className="hover:text-mint-fresh transition-colors">Patient Outcomes</Link></li>
              <li><Link to="/faqs" className="hover:text-mint-fresh transition-colors">FAQ & Direct Access</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-mint-fresh transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-mint-fresh transition-colors">Terms of Service</Link></li>
            </ul>

            {/* Interactive Map Preview Card */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 p-3 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-light">
                  <span className="font-semibold text-white">Clinic Location</span>
                  <span className="text-[10px] text-mint-fresh">Open 7 Days</span>
                </div>
                <div className="h-20 bg-slate-700 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-slate-900/80" />
                  <MapPin className="w-6 h-6 text-coral-warm animate-bounce relative z-10" />
                  <span className="absolute bottom-1 text-[10px] text-white/80 font-medium z-10">742 Kinetic Blvd, NY</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & TARASAKA DIGITAL Solutions Credit */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-light space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} MotionCare Physical Therapy & Rehabilitation. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-light">Designed for Human Kinetic Excellence</span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-deep/30 text-mint-fresh font-black text-[11px] border border-emerald-deep/50 shadow-sm">
              Developed by TARASAKA DIGITAL Solutions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
