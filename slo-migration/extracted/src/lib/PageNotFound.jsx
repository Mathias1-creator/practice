import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#111111' }}>
      <div className="text-center px-4">
        <p className="text-8xl font-black mb-4" style={{ color: '#CC0000' }}>404</p>
        <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white text-sm uppercase tracking-wider rounded"
          style={{ backgroundColor: '#CC0000' }}>
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}