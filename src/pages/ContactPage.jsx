import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import SEO from '../components/layout/SEO';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact MotionCare Physical Therapy Clinic | Phone, Map & Hours"
        description="Get in touch with MotionCare Rehabilitation Center. View clinic location, office hours, phone hotline, and emergency contact details."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white to-white min-h-[80vh]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-deep" />
              <span>Reach Our Clinical Care Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-dark">
              Contact <span className="gradient-text">MotionCare</span>
            </h1>
            <p className="text-slate-muted text-base">
              Have questions about physical therapy, direct insurance coverage, or customized rehabilitation plans? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Info & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-dark text-white p-8 rounded-3xl space-y-6 border border-emerald-deep/30 shadow-2xl">
                <h3 className="text-2xl font-bold font-display text-mint-fresh">Clinic Headquarters</h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-mint-fresh shrink-0 mt-0.5" />
                    <span>{CLINIC_INFO.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-mint-fresh shrink-0" />
                    <span className="font-bold text-sm">{CLINIC_INFO.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-mint-fresh shrink-0" />
                    <span>{CLINIC_INFO.email}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700 space-y-2 text-xs">
                  <span className="font-bold text-mint-fresh block uppercase">Working Hours</span>
                  <p className="text-slate-light">{CLINIC_INFO.workingHours.weekdays}</p>
                  <p className="text-slate-light">{CLINIC_INFO.workingHours.saturday}</p>
                  <p className="text-coral-warm font-semibold">{CLINIC_INFO.workingHours.sunday}</p>
                </div>
              </div>

              {/* Map Mock */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 h-60 relative bg-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60" />
                <MapPin className="w-10 h-10 text-coral-warm animate-bounce relative z-10" />
                <span className="absolute bottom-4 text-white text-xs font-bold z-10 bg-slate-dark/80 px-4 py-1.5 rounded-full">
                  742 Kinetic Blvd, NY 10016
                </span>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-mint-fresh/30 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold font-display text-slate-dark mb-4">Send Us a Direct Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep bg-warm-bg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-dark uppercase mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep bg-warm-bg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-dark uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep bg-warm-bg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-dark uppercase mb-1">Message / Pain Inquiry</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="How can our physical therapy team help you?" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-emerald-deep focus:ring-1 focus:ring-emerald-deep bg-warm-bg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-deep hover:bg-emerald-dark text-white font-bold text-sm shadow-emerald-glow transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-mint-fresh" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-deep mx-auto" />
                  <h3 className="text-2xl font-bold font-display text-slate-dark">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-muted max-w-sm mx-auto">
                    Our clinic coordinator will respond to your inquiry within 2 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
