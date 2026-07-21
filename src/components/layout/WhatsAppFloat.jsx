import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20MotionCare%20Physiotherapy,%20I%20would%20like%20to%20inquire%20about%20a%20rehab%20consultation.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Quick Chat Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 10px 30px -5px rgba(37, 211, 102, 0.5)'
        }}
        className="w-14 h-14 rounded-full text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative cursor-pointer border-2 border-white"
        aria-label="Chat on WhatsApp +91 7600583156"
      >
        <MessageSquare className="w-7 h-7 text-white fill-white" />
        <span className="absolute right-16 top-2 bg-[#0F172A] text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-[#4ECCA3]/30 pointer-events-none">
          Chat on WhatsApp (+91 76005 83156)
        </span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#E07A5F] rounded-full border-2 border-white animate-ping"></span>
      </a>
    </div>
  );
}
