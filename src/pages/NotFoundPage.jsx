import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Home } from 'lucide-react';
import SEO from '../components/layout/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 Page Not Found | MotionCare" />
      <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-20 h-20 bg-mint-soft text-emerald-deep rounded-full flex items-center justify-center mx-auto">
            <Activity className="w-10 h-10 animate-bounce" />
          </div>
          <h1 className="text-6xl font-extrabold font-display text-slate-dark">404</h1>
          <h2 className="text-2xl font-bold text-emerald-deep">Movement Path Out of Alignment</h2>
          <p className="text-xs text-slate-muted">The rehabilitation route you requested could not be found.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-deep text-white font-bold text-xs shadow-emerald-glow hover:bg-emerald-dark transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
}
