import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { CONDITIONS_DATA, SERVICES_DATA, TEAM_MEMBERS, CLINIC_INFO } from '../../data/clinicData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    condition: 'Back Pain & Lumbar Strain',
    service: 'Manual Physical Therapy',
    therapist: 'Dr. Elena Vance, DPT, OCS',
    date: '',
    time: '10:00 AM',
    patientName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-dark/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-mint-fresh/30 z-10 my-8"
        >
          {/* Top Decorative Header */}
          <div className="bg-gradient-to-r from-emerald-deep via-emerald-dark to-emerald-light p-6 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-mint-fresh/20 rounded-xl">
                <Activity className="w-6 h-6 text-mint-fresh" />
              </div>
              <span className="text-xs uppercase tracking-widest text-mint-soft font-semibold">TARASAKA Digital Consultation</span>
            </div>
            <h3 className="text-2xl font-bold font-display">Book Recovery Consultation</h3>
            <p className="text-mint-soft text-sm mt-1">Start your journey to pain-free movement with licensed DPT specialists.</p>
          </div>

          {!isSubmitted ? (
            <div className="p-6 sm:p-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                {[
                  { num: 1, label: 'Condition' },
                  { num: 2, label: 'Schedule' },
                  { num: 3, label: 'Details' }
                ].map((s) => (
                  <div key={s.num} className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step >= s.num ? 'bg-emerald-deep text-white' : 'bg-gray-100 text-slate-muted'
                    }`}>
                      {s.num}
                    </div>
                    <span className={`text-xs font-medium ${step >= s.num ? 'text-slate-dark' : 'text-slate-muted'}`}>
                      {s.label}
                    </span>
                    {s.num < 3 && <ChevronRight className="w-4 h-4 text-gray-300 ml-2" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                        Select Primary Pain / Condition Area
                      </label>
                      <select 
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium bg-warm-bg text-sm"
                      >
                        {CONDITIONS_DATA.map((c) => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                        Preferred Treatment Service
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium bg-warm-bg text-sm"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                        Select Physical Therapy Specialist
                      </label>
                      <select 
                        value={formData.therapist}
                        onChange={(e) => setFormData({ ...formData, therapist: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium bg-warm-bg text-sm"
                      >
                        {TEAM_MEMBERS.map((t) => (
                          <option key={t.id} value={t.name}>{t.name} ({t.specialty})</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 bg-emerald-deep hover:bg-emerald-dark text-white rounded-xl font-bold text-sm transition-all shadow-emerald-glow flex items-center space-x-2"
                      >
                        <span>Next: Date & Time</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                          Preferred Appointment Date
                        </label>
                        <div className="relative">
                          <Calendar className="w-5 h-5 absolute left-3 top-3 text-slate-muted" />
                          <input 
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                          Preferred Time Slot
                        </label>
                        <div className="relative">
                          <Clock className="w-5 h-5 absolute left-3 top-3 text-slate-muted" />
                          <select 
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                          >
                            <option>08:00 AM</option>
                            <option>10:00 AM</option>
                            <option>01:00 PM</option>
                            <option>03:30 PM</option>
                            <option>05:30 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-mint-soft/30 p-4 rounded-xl border border-mint-fresh/40 flex items-center space-x-3 text-xs text-slate-dark">
                      <ShieldCheck className="w-5 h-5 text-emerald-deep shrink-0" />
                      <span>Direct Access Approved: No prescription or referral required for your evaluation.</span>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-slate-dark rounded-xl font-bold text-sm transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 bg-emerald-deep hover:bg-emerald-dark text-white rounded-xl font-bold text-sm transition-all shadow-emerald-glow flex items-center space-x-2"
                      >
                        <span>Next: Patient Info</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 absolute left-3 top-3 text-slate-muted" />
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.patientName}
                          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="w-5 h-5 absolute left-3 top-3 text-slate-muted" />
                          <input 
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-5 h-5 absolute left-3 top-3 text-slate-muted" />
                          <input 
                            type="email"
                            required
                            placeholder="sarah@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase tracking-wider mb-2">
                        Brief Symptom / Pain Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Describe pain location, onset, or recent surgical history..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20 text-slate-dark font-medium text-sm bg-warm-bg"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-slate-dark rounded-xl font-bold text-sm transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-coral-warm hover:bg-coral-warm/90 text-white rounded-xl font-bold text-sm transition-all shadow-coral-glow flex items-center space-x-2"
                      >
                        <span>Confirm Consultation</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-mint-soft text-emerald-deep rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-dark">Appointment Confirmed!</h4>
              <p className="text-slate-muted text-sm max-w-md mx-auto">
                Thank you <span className="font-semibold text-emerald-deep">{formData.patientName}</span>. Your evaluation for <span className="font-semibold">{formData.condition}</span> with <span className="font-semibold">{formData.therapist}</span> has been reserved.
              </p>

              <div className="bg-warm-bg p-4 rounded-2xl max-w-sm mx-auto text-left text-xs space-y-2 border border-gray-200">
                <div className="flex justify-between">
                  <span className="text-slate-muted">Scheduled Date:</span>
                  <span className="font-bold text-slate-dark">{formData.date || 'Tomorrow'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-muted">Time Slot:</span>
                  <span className="font-bold text-slate-dark">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-muted">Location:</span>
                  <span className="font-bold text-slate-dark">742 Kinetic Blvd, NY</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-emerald-deep hover:bg-emerald-dark text-white rounded-xl font-bold text-sm shadow-emerald-glow transition-all"
                >
                  Close & View Confirmation
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
