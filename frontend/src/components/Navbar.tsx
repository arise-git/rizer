
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage(Page.HOME)}
        >
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-xl italic group-hover:bg-blue-500 transition-colors">
            R
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Rizer</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { id: Page.HOME, label: 'Home' },
            { id: Page.FEATURES, label: 'Features' },
            { id: Page.AI_OPTIMIZER, label: 'ARISE AI' },
            { id: Page.FAQ, label: 'FAQ' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.id ? 'text-blue-500' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setPage(Page.DOWNLOAD)}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95"
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
