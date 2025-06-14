import React from 'react';
import { Music } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated background circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>

        {/* Logo and loading animation */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <img 
                src="/download.png" 
                alt="Ruby Logo" 
                className="w-16 h-16 object-contain animate-pulse"
              />
            </div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Ruby
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 