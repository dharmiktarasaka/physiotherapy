import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, CheckCircle2 } from 'lucide-react';
import SEO from '../components/layout/SEO';
import { BLOG_POSTS } from '../data/clinicData';

export default function BlogPostPage({ onOpenBooking }) {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  return (
    <>
      <SEO 
        title={`${post.title} | MotionCare Blog`}
        description={post.excerpt}
      />

      <article className="py-16 px-4 sm:px-6 bg-white min-h-[80vh]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Link to="/blog" className="inline-flex items-center space-x-2 text-xs font-bold text-slate-muted hover:text-emerald-deep transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rehabilitation Blog</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-mint-soft text-emerald-dark text-xs font-extrabold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-dark leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-xs text-slate-muted pt-2 border-b border-gray-100 pb-4">
              <span className="font-semibold text-slate-dark">By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-80 sm:h-96 bg-slate-100 shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-slate max-w-none text-slate-dark space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="text-lg font-medium text-slate-muted">
              {post.excerpt}
            </p>

            <h3 className="text-xl font-bold font-display text-emerald-deep pt-4">Biomechanical Breakdown & Clinical Rationale</h3>
            <p>
              When dealing with lower back strain or disc irritation, sitting for prolonged periods increases intradiscal pressure up to 140kg compared to standing. Incorporating micro-movement breaks and proper pelvic lumbar roll support centralizes disc nucleus pressure.
            </p>

            <div className="bg-warm-bg p-6 rounded-2xl border-l-4 border-emerald-deep space-y-2">
              <span className="font-bold text-emerald-deep block text-sm">Doctor's Prescribed Key Takeaways:</span>
              <ul className="space-y-2 text-xs text-slate-dark">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                  <span>Maintain monitor height at eye level to prevent C5-C6 cervical spine compression.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-deep shrink-0" />
                  <span>Perform chin tucks and scapular wall slides every 60 minutes of desk work.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-mint-soft/30 p-8 rounded-3xl border border-mint-fresh/40 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            <div className="space-y-1">
              <h4 className="text-lg font-bold font-display text-slate-dark">Experiencing Similar Symptoms?</h4>
              <p className="text-xs text-slate-muted">Book a 1-on-1 consultation with our physical therapists today.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-emerald-deep hover:bg-emerald-dark text-white font-bold text-xs shadow-emerald-glow shrink-0"
            >
              Book Evaluation
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
