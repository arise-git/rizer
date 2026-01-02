
import React, { useState } from 'react';

const FAQS = [
  {
    q: "Is RIZER safe for anti-cheat systems?",
    a: "Yes. RIZER operates at the OS level and does not inject code into game processes. It is fully compatible with Easy Anti-Cheat, BattlEye, and Ricochet."
  },
  {
    q: "Will this void my hardware warranty?",
    a: "No. RIZER uses official Windows APIs and registry settings to optimize performance. We do not perform permanent BIOS modifications or physical hardware alterations."
  },
  {
    q: "How many devices can I use with one license?",
    a: "The current version of RIZER is free for community use. You can install it on as many Windows machines as you own."
  },
  {
    q: "Do I need to keep RIZER open in the background?",
    a: "No. RIZER applies optimizations that persist even after the application is closed. However, 'ARISE Dynamic Mode' requires the service to be running for real-time adjustments."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Intelligence Briefing</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass rounded-2xl border-white/5 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
