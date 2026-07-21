import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/clinicData';

export default function TeamSection({ onOpenBooking }) {
  return (
    <section className="py-24 px-4 sm:px-6 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-deep" />
            <span>Board-Certified Doctors of Physical Therapy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-dark">
            Meet Our <span className="gradient-text">Physiotherapy Experts</span>
          </h2>
          <p className="text-slate-muted text-base sm:text-lg">
            Our clinical team consists of DPT specialists with over 50+ years of combined experience in spine rehabilitation, sports trauma, and neuro-recovery.
          </p>
        </div>

        {/* Team 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-mint-fresh/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Member Photo */}
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-deep text-white text-[11px] font-bold shadow-md">
                    {member.exp}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-mint-fresh block uppercase tracking-wider">
                      {member.specialty}
                    </span>
                    <h3 className="text-lg font-bold font-display leading-tight">{member.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-3 text-xs text-slate-muted">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-emerald-deep shrink-0 mt-0.5" />
                    <span>{member.edu}</span>
                  </div>

                  <p className="p-3 bg-warm-bg rounded-xl italic text-slate-dark text-[11px] border border-gray-100">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-emerald-deep hover:bg-emerald-dark text-white font-bold text-xs shadow-emerald-glow transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-mint-fresh" />
                  <span>Book with Specialist</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
