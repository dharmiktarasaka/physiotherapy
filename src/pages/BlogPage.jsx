import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import SEO from '../components/layout/SEO';
import { BLOG_POSTS } from '../data/clinicData';

export default function BlogPage() {
  return (
    <>
      <SEO 
        title="Physical Therapy & Ergonomic Health Blog | MotionCare"
        description="Evidence-based articles on back pain prevention, desk ergonomics, sports injury rehabilitation timelines, and dry needling."
      />

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-warm-white to-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-deep" />
              <span>Evidence-Based Rehabilitation Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-dark">
              Rehabilitation & Ergonomics <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-slate-muted text-base">
              Articles written directly by our Doctors of Physical Therapy to help you understand biomechanics, prevent injuries, and optimize movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="glass-card rounded-3xl overflow-hidden border border-mint-fresh/20 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-deep text-white text-[11px] font-bold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] text-slate-muted">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-bold font-display text-slate-dark group-hover:text-emerald-deep transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-deep hover:text-emerald-dark transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
