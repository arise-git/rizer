
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-black text-xs italic">
            R
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">ARISE System Inc.</span>
        </div>

        <div className="flex gap-8 text-xs font-medium text-zinc-500">
          <button onClick={() => setPage(Page.PRIVACY)} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setPage(Page.TERMS)} className="hover:text-white transition-colors">Terms of Service</button>
          <button onClick={() => setPage(Page.FAQ)} className="hover:text-white transition-colors">FAQ</button>
          <a href="mailto:support@rizer.pc" className="hover:text-white transition-colors">Support</a>
        </div>

        <div className="text-[10px] text-zinc-600 uppercase tracking-widest">
          &copy; 2024 ARISE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
