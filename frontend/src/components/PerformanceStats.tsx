
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Valorant', stock: 210, rizer: 345 },
  { name: 'Cyberpunk', stock: 68, rizer: 94 },
  { name: 'MW3', stock: 145, rizer: 198 },
  { name: 'CS2', stock: 280, rizer: 410 },
];

const PerformanceStats: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Quantifiable Superiority</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              We don't deal in feelings. We deal in frame times, latency, and throughput. 
              Our benchmarks show consistent gains of 25-45% in CPU-bound scenarios.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-zinc-400">Average FPS Gain</span>
                <span className="text-blue-500 font-bold text-xl">+38.2%</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-zinc-400">0.1% Lows Improvement</span>
                <span className="text-blue-500 font-bold text-xl">+55.0%</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-zinc-400">Input Lag Reduction</span>
                <span className="text-red-500 font-bold text-xl">-8.4ms</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[400px] glass p-6 rounded-3xl border-white/10">
            <h4 className="text-center text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Frames Per Second Comparison</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} />
                <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#111'}}
                  contentStyle={{backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px'}}
                  itemStyle={{fontWeight: 'bold'}}
                />
                <Bar dataKey="stock" fill="#333" radius={[4, 4, 0, 0]} name="Stock Windows" />
                <Bar dataKey="rizer" fill="#2563eb" radius={[4, 4, 0, 0]} name="RIZER Optimized" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
