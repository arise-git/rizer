import React from 'react';
import { Page } from '../types';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          VERSION 2.4 NOW LIVE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 gradient-text uppercase">
          Power Your PC<br />Like a Weapon
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          The elite Windows optimization engine. AI-driven performance, 
          ultra-low latency, and uncompromising power for the modern professional.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setPage(Page.DOWNLOAD)}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            Download for Windows
          </button>
          <button 
            onClick={() => setPage(Page.FEATURES)}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
          >
            How It Works
          </button>
        </div>

        <div className="mt-20 relative">
          <div className="max-w-5xl mx-auto p-4 glass rounded-3xl border-white/10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-3xl" />
            <img 
              src="https://picsum.photos/id/0/1200/600" 
              alt="RIZER Dashboard" 
              className="rounded-2xl grayscale brightness-50 opacity-40 mix-blend-screen"
            />
            <div className="absolute bottom-10 left-0 w-full z-20 px-10 text-left flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Advanced Telemetry Suppression</h3>
                <p className="text-zinc-400 text-sm max-w-md">Eliminate background interruptions and reclaimed up to 15% system resources instantly.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-blue-500 font-bold text-xl">+42%</div>
                  <div className="text-xs text-zinc-500 uppercase">FPS Boost</div>
                </div>
                <div className="text-center px-4 py-2 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-red-500 font-bold text-xl">-12ms</div>
                  <div className="text-xs text-zinc-500 uppercase">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
