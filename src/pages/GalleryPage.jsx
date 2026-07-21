import React from 'react';
import { motion } from 'framer-motion';
import { Image, Sparkles } from 'lucide-react';
import SEO from '../components/layout/SEO';

export default function GalleryPage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      caption: "Manual Spinal & Lumbar Mobilization Session"
    },
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      caption: "Class IV High Intensity Laser Photobiomodulation"
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
      caption: "Postural Biofeedback & Scapular Retraction Training"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      caption: "Resisted Band Kinesiotherapy Suite"
    },
    {
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
      caption: "Quadriceps VMO Terminal Knee Extension Protocol"
    },
    {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      caption: "Proprioceptive Balance & Bosu Platform Training"
    }
  ];

  return (
    <>
      <SEO 
        title="Clinic Facility & Rehabilitation Gallery | MotionCare"
        description="Take a visual tour of MotionCare's modern physical therapy facility, private therapy rooms, shockwave suites, and kinesiotherapy gym."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <Image className="w-4 h-4 text-emerald-deep" />
              <span>Modern Rehabilitation Facility</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-dark">
              Clinic <span className="gradient-text">Photo Gallery</span>
            </h1>
            <p className="text-slate-muted text-base">
              A glimpse inside our ultra-clean, state-of-the-art rehabilitation facility equipped for 1-on-1 physical therapy excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-mint-fresh/30 group relative h-72"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold text-sm font-display">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
