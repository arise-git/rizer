
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'FPS Boost',
    description: 'Dynamic power scaling that forces your hardware to maintain peak clock speeds during heavy loads.',
    icon: '⚡'
  },
  {
    title: 'RAM Cleaner',
    description: 'Real-time memory purging that eliminates cache buildup without causing micro-stutters.',
    icon: '🧠'
  },
  {
    title: 'CPU Priority',
    description: 'Assigns kernel-level priority to your active applications, bypassing Windows Scheduler limitations.',
    icon: '🎯'
  },
  {
    title: 'Network Optimizer',
    description: 'Tuning the TCP/IP stack for the lowest possible packet delay and jitter in competitive environments.',
    icon: '🌐'
  },
  {
    title: 'Startup Manager',
    description: 'Deep-clean of the Registry and boot sequence to reduce Windows startup time by up to 60%.',
    icon: '🚀'
  },
  {
    title: 'ARISE Smart Mode',
    description: 'Our proprietary AI continuously monitors system health and adapts settings based on behavior.',
    icon: '💠'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Weaponized Optimization</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">RIZER isn't a utility. It's an overhaul of the Windows kernel communication layer, designed for those who demand the absolute limit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURE_LIST.map((feat, idx) => (
            <div 
              key={idx} 
              className="p-8 glass glass-hover rounded-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
