import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Phone, Menu, X, Calendar, Sparkles, ChevronDown, 
  Hand, Trophy, Brain, Bone, Zap, Pin, Maximize, Dumbbell, 
  ShieldCheck, HeartPulse, Layers, Compass, HelpCircle, FileText, Image, UserCheck, CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA, CONDITIONS_DATA } from '../../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'services' | 'conditions' | 'more' | null
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Ticker Bar */}
      <div className="bg-[#0F172A] text-white text-[11px] py-1.5 px-4 hidden md:block border-b border-[#0D6E60]/30 font-semibold relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-[#4ECCA3] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4ECCA3]" />
              <span>Direct Access Approved: No Doctor Referral Needed</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">{CLINIC_INFO.workingHours.weekdays}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className="text-[#4ECCA3] hover:text-white font-extrabold transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#4ECCA3]" />
              <span className="text-white">{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-slate-400">|</span>
            <span className="text-[#E07A5F] font-black tracking-wider">Tarasaka Digital Portfolio</span>
          </div>
        </div>
      </div>

      {/* Floating Glass Navbar */}
      <header 
        className="sticky top-3 z-50 px-4 sm:px-6 transition-all duration-500"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <motion.nav 
          animate={{
            maxWidth: scrolled ? '1120px' : '1240px',
            paddingTop: scrolled ? '10px' : '14px',
            paddingBottom: scrolled ? '10px' : '14px'
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto rounded-full transition-all duration-500 relative ${
            scrolled 
              ? 'glass-panel shadow-glass border-[#0D6E60]/20 px-6 bg-white/90' 
              : 'bg-white/95 backdrop-blur-xl border border-[#4ECCA3]/40 px-8 shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div 
                style={{ background: 'linear-gradient(135deg, #0B4F46 0%, #0D6E60 50%, #4ECCA3 100%)' }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
              >
                <Activity className="w-6 h-6 animate-pulse text-[#D1F5EA]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-display text-[#0F172A] tracking-tight leading-none flex items-center">
                  Motion<span className="text-[#0D6E60]">Care</span>
                  <span className="ml-1 w-2 h-2 rounded-full bg-[#E07A5F] inline-block animate-ping" />
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                  Human Kinetic Lab
                </span>
              </div>
            </Link>

            {/* STREAMLINED DESKTOP TOP NAV (5 Items) */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                  location.pathname === '/' 
                    ? 'bg-[#D1F5EA] text-[#0B4F46] border border-[#4ECCA3]/50' 
                    : 'text-[#0F172A] hover:text-[#0D6E60] hover:bg-slate-100'
                }`}
              >
                Home
              </Link>

              {/* Mega Dropdown 1: Services */}
              <button
                onMouseEnter={() => setActiveMegaMenu('services')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'services' ? null : 'services')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all flex items-center space-x-1 ${
                  activeMegaMenu === 'services' || location.pathname.includes('/services')
                    ? 'bg-[#D1F5EA] text-[#0B4F46] border border-[#4ECCA3]/50'
                    : 'text-[#0F172A] hover:text-[#0D6E60] hover:bg-slate-100'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'services' ? 'rotate-180 text-[#0D6E60]' : ''}`} />
              </button>

              {/* Mega Dropdown 2: Conditions */}
              <button
                onMouseEnter={() => setActiveMegaMenu('conditions')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'conditions' ? null : 'conditions')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all flex items-center space-x-1 ${
                  activeMegaMenu === 'conditions' || location.pathname.includes('/conditions')
                    ? 'bg-[#D1F5EA] text-[#0B4F46] border border-[#4ECCA3]/50'
                    : 'text-[#0F172A] hover:text-[#0D6E60] hover:bg-slate-100'
                }`}
              >
                <span>Conditions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'conditions' ? 'rotate-180 text-[#0D6E60]' : ''}`} />
              </button>

              {/* Single Link: Exercise Lab */}
              <Link
                to="/exercise-library"
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
                  location.pathname === '/exercise-library' 
                    ? 'bg-[#D1F5EA] text-[#0B4F46] border border-[#4ECCA3]/50' 
                    : 'text-[#0F172A] hover:text-[#0D6E60] hover:bg-slate-100'
                }`}
              >
                Exercise Lab
              </Link>

              {/* Mega Dropdown 3: More */}
              <button
                onMouseEnter={() => setActiveMegaMenu('more')}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'more' ? null : 'more')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all flex items-center space-x-1 ${
                  activeMegaMenu === 'more'
                    ? 'bg-[#D1F5EA] text-[#0B4F46] border border-[#4ECCA3]/50'
                    : 'text-[#0F172A] hover:text-[#0D6E60] hover:bg-slate-100'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'more' ? 'rotate-180 text-[#0D6E60]' : ''}`} />
              </button>
            </div>

            {/* RIGHT CONSULTATION CTA BUTTON (Always Visible, Direct Inline Style Background & White Text) */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onOpenBooking}
                style={{
                  backgroundColor: '#0D6E60',
                  backgroundImage: 'linear-gradient(135deg, #0B4F46 0%, #0D6E60 60%, #0F172A 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 25px -4px rgba(11, 79, 70, 0.4)'
                }}
                className="px-6 py-2.5 rounded-full font-black text-xs tracking-wide hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer border-2 border-[#4ECCA3] shrink-0 z-50 shadow-lg text-white"
              >
                <Calendar className="w-4 h-4 text-[#4ECCA3]" />
                <span className="text-white font-extrabold whitespace-nowrap">Book Consultation</span>
                <Sparkles className="w-4 h-4 text-[#E07A5F] animate-pulse" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-2xl bg-slate-100 text-[#0F172A] hover:text-[#0D6E60] border border-gray-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* FULL-WIDTH MEGA MENUS DROPDOWNS */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-w-6xl mx-auto mt-2 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#4ECCA3]/40 p-8 shadow-2xl overflow-hidden relative z-50"
            >
              {/* MEGA MENU 1: SERVICES */}
              {activeMegaMenu === 'services' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-xs font-black uppercase text-[#E07A5F] tracking-wider">Comprehensive Therapy Services</span>
                      <h3 className="text-xl font-bold font-display text-[#0F172A]">Specialized Clinical Modalities</h3>
                    </div>
                    <Link 
                      to="/services" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="px-4 py-2 rounded-xl bg-[#D1F5EA] text-[#0B4F46] font-bold text-xs hover:bg-[#0D6E60] hover:text-white transition-colors"
                    >
                      View All 12 Services →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      to="/services"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all flex items-start space-x-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-[#0D6E60] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Hand className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-display group-hover:text-[#0D6E60]">Manual Physical Therapy</h4>
                        <p className="text-[11px] text-slate-500">Hands-on joint mobilization & soft tissue release.</p>
                      </div>
                    </Link>

                    <Link
                      to="/sports-rehabilitation"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all flex items-start space-x-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-[#E07A5F] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-display group-hover:text-[#0D6E60]">Sports Rehabilitation</h4>
                        <p className="text-[11px] text-slate-500">ACL tears, hamstring strains & athletic return.</p>
                      </div>
                    </Link>

                    <Link
                      to="/neurological-rehabilitation"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all flex items-start space-x-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-[#0B4F46] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-display group-hover:text-[#0D6E60]">Neurological Rehab</h4>
                        <p className="text-[11px] text-slate-500">Stroke recovery, Bobath method & balance.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all flex items-start space-x-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-[#0D6E60] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-display group-hover:text-[#0D6E60]">Dry Needling & Shockwave</h4>
                        <p className="text-[11px] text-slate-500">Deep knot release & acoustic regenerative pulses.</p>
                      </div>
                    </Link>

                    <Link
                      to="/treatments"
                      onClick={() => setActiveMegaMenu(null)}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all flex items-start space-x-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-[#0B4F46] text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Bone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-display group-hover:text-[#0D6E60]">Post-Surgical Rehab</h4>
                        <p className="text-[11px] text-slate-500">Protocol recovery post joint replacement.</p>
                      </div>
                    </Link>

                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0B4F46] to-[#0F172A] text-white flex flex-col justify-between">
                      <span className="text-[10px] font-black uppercase text-[#4ECCA3]">Direct Access</span>
                      <span className="text-xs font-bold">Book Evaluation Without Physician Referral</span>
                      <button onClick={() => { setActiveMegaMenu(null); onOpenBooking(); }} className="text-[11px] font-bold text-[#E07A5F] underline text-left mt-2 cursor-pointer">
                        Book Now →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* MEGA MENU 2: CONDITIONS WE TREAT */}
              {activeMegaMenu === 'conditions' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-xs font-black uppercase text-[#E07A5F] tracking-wider">Clinical Specializations</span>
                      <h3 className="text-xl font-bold font-display text-[#0F172A]">Conditions & Symptoms We Solve</h3>
                    </div>
                    <Link 
                      to="/conditions" 
                      onClick={() => setActiveMegaMenu(null)}
                      className="px-4 py-2 rounded-xl bg-[#D1F5EA] text-[#0B4F46] font-bold text-xs hover:bg-[#0D6E60] hover:text-white transition-colors"
                    >
                      Explore All 12 Conditions →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    {[
                      { title: "Back Pain & Slip Disc", desc: "Spinal decompression & core stabilization.", path: "/conditions" },
                      { title: "Neck Pain & Tech-Neck", desc: "Cervical traction & ergonomic release.", path: "/conditions" },
                      { title: "Frozen Shoulder", desc: "Capsular stretch & 360° range recovery.", path: "/conditions" },
                      { title: "Knee Pain & Arthritis", desc: "Cartilage-sparing quad strengthening.", path: "/conditions" },
                      { title: "Sciatica & Nerve Pinches", desc: "Piriformis release & neural glides.", path: "/conditions" },
                      { title: "Posture Correction", desc: "3D Postural biofeedback & alignment.", path: "/conditions" }
                    ].map((cond, idx) => (
                      <Link
                        key={idx}
                        to={cond.path}
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 transition-all block group"
                      >
                        <h4 className="font-bold text-[#0F172A] group-hover:text-[#0D6E60] font-display">{cond.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-1">{cond.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* MEGA MENU 3: MORE */}
              {activeMegaMenu === 'more' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-xs font-black uppercase text-[#E07A5F] tracking-wider">Directory & Resources</span>
                      <h3 className="text-xl font-bold font-display text-[#0F172A]">Clinic Information & Patient Portal</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <Link to="/about" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <UserCheck className="w-4 h-4 text-[#0D6E60]" />
                      <span>About Our Clinic</span>
                    </Link>
                    <Link to="/success-stories" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E07A5F]" />
                      <span>Patient Success Outcomes</span>
                    </Link>
                    <Link to="/gallery" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <Image className="w-4 h-4 text-[#0D6E60]" />
                      <span>Clinic Photo Gallery</span>
                    </Link>
                    <Link to="/blog" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-[#0B4F46]" />
                      <span>Rehabilitation Blog</span>
                    </Link>
                    <Link to="/faqs" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4 text-[#0D6E60]" />
                      <span>FAQs & Direct Access</span>
                    </Link>
                    <Link to="/contact" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#E07A5F]" />
                      <span>Contact & Location Map</span>
                    </Link>
                    <Link to="/privacy-policy" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-slate-500" />
                      <span>Privacy Policy</span>
                    </Link>
                    <Link to="/terms" onClick={() => setActiveMegaMenu(null)} className="p-4 rounded-2xl bg-slate-50 hover:bg-[#D1F5EA]/40 border border-gray-200 font-bold text-[#0F172A] flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span>Terms of Service</span>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="lg:hidden max-w-xl mx-auto mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#4ECCA3]/40 p-6 shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Home</Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Services</Link>
                <Link to="/conditions" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Conditions</Link>
                <Link to="/sports-rehabilitation" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Sports Rehab</Link>
                <Link to="/neurological-rehabilitation" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Neuro Rehab</Link>
                <Link to="/exercise-library" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Exercise Lab</Link>
                <Link to="/success-stories" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Results</Link>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Blog</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl">Contact</Link>
              </div>

              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                style={{ backgroundColor: '#E07A5F', color: '#FFFFFF' }}
                className="w-full py-3.5 rounded-2xl text-white font-extrabold text-xs shadow-lg flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Recovery Consultation</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
