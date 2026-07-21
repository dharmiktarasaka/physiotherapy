import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, BookOpen, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { FAQS_DATA, BLOG_POSTS } from '../../data/clinicData';

export default function FaqAndBlogSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PART 1: FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-mint-soft text-emerald-dark text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-emerald-deep" />
              <span>Patient Direct Access & Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-dark leading-tight">
              Frequently Asked <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              Everything you need to know about starting physical therapy, insurance coverage, direct access regulations, and appointment preparations.
            </p>
            <div className="pt-4">
              <Link 
                to="/faqs" 
                className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-deep hover:text-emerald-dark transition-colors"
              >
                <span>View Full FAQ Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-warm-bg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-dark flex items-center justify-between space-x-4 hover:text-emerald-deep transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-deep' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs sm:text-sm text-slate-muted leading-relaxed border-t border-gray-100/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: Blog & Ergonomic Guides Preview */}
        <div className="space-y-12 pt-12 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-coral-soft text-coral-warm text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Rehabilitation & Posture Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-dark">
                Latest Clinical <span className="gradient-text">Blog & Articles</span>
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-deep hover:text-emerald-dark transition-colors"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

                    <h3 className="text-lg font-bold font-display text-slate-dark group-hover:text-emerald-deep transition-colors leading-snug">
                      {post.title}
                    </h3>

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
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
