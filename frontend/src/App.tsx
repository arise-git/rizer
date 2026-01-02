import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PerformanceStats from './components/PerformanceStats';
import AIOptimizer from './components/AIOptimizer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Page, Stats } from './types';
import { apiService } from './services/apiService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [stats, setStats] = useState<Stats | null>(null);

  // Load stats from Backend when app starts
  useEffect(() => {
    const fetchStats = async () => {
      const data = await apiService.getStats();
      if (data) setStats(data);
    };
    
    fetchStats();
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle Download Click
  const handleDownload = async () => {
  try {
    // 1. Backend ko count bhejo
    await apiService.trackDownload();
    
    // 2. Real Download Trigger karo
    const link = document.createElement('a');
    link.href = '/RIZER_Setup.exe'; // Ye 'public' folder se uthayega
    link.download = 'RIZER_Setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("🚀 RIZER Deployment Started!");
  } catch (error) {
    console.error("Download failed", error);
  }
};

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            <Features />
            <PerformanceStats />
            <AIOptimizer />
            <FAQ />
          </>
        );
      case Page.FEATURES:
        return <Features />;
      case Page.AI_OPTIMIZER:
        return <AIOptimizer />;
      
      case Page.DOWNLOAD:
        return (
          <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Deploy RIZER
            </h1>
            
            {/* Main Download Card */}
            <div className="glass p-12 rounded-3xl border border-white/10 inline-block mb-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="text-zinc-500 text-sm uppercase font-bold tracking-widest mb-2">Current Version</div>
                  <div className="text-green-400 font-mono font-bold text-lg flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    STABLE V 1.0.
                  </div>
                </div>

                <button 
                  onClick={handleDownload}
                  className="px-12 py-5 bg-blue-600 rounded-xl font-black text-xl hover:bg-blue-500 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] active:scale-95 mb-6 text-white"
                >
                  DOWNLOAD NOW
                </button>
                
                <div className="text-zinc-500 text-xs uppercase tracking-widest">Windows 10/11 x64 Only</div>
              </div>
            </div>
            
            {/* Dynamic Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-blue-500 text-3xl font-black mb-1">
                  {(stats?.downloads || 0).toLocaleString()}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Total Downloads</div>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-purple-500 text-3xl font-black mb-1">
                  {(stats?.activeUsers || 0).toLocaleString()}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Active Nodes</div>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-emerald-500 text-3xl font-black mb-1">
                  {stats?.systemStability || '99.9%'}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">System Stability</div>
              </div>
            </div>
          </div>
        );

      case Page.FAQ:
        return <FAQ />;
      
      case Page.PRIVACY:
      case Page.TERMS:
        return (
          <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 text-zinc-200">Legal Protocols</h1>
            <div className="prose prose-invert prose-lg text-zinc-400 space-y-8">
              <p>RIZER operates with maximum operational security. We do not harvest, sell, or monitor your personal files. Our architecture is designed for zero-knowledge privacy.</p>
              
              <div className="glass p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-white font-bold text-xl uppercase mb-2">Data Collection</h3>
                <p className="text-sm">We only collect anonymous telemetry related to hardware configuration (CPU Model, GPU Model) to improve our optimization database. No PII (Personally Identifiable Information) is transmitted.</p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl uppercase mb-2">User Agreement</h3>
                <p>By executing RIZER protocols, you acknowledge that modifying system settings involves inherent risks. While RIZER includes failsafes, the user assumes responsibility for system alterations.</p>
              </div>
            </div>
          </div>
        );

      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500 selection:text-white">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;