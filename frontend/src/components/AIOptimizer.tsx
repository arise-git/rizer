import React, { useState, useRef, useEffect } from 'react';
import { apiService } from '../services/apiService';

const AIOptimizer = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: "SYSTEM: ARISE Neural Core Online. All optimization protocols are currently LOCKED." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setLoading(true);

    // AI ka reply
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "ARISE: Optimization request denied. Sir ji, pehle RIZER download karo aur install karo, tabhi main kernel-level changes kar paunga." 
      }]);
      setLoading(false);
      
      // Backend ko info bhejna (Optional)
      apiService.sendChatMessage(userText).catch(e => console.log("Backend offline, but message handled."));
    }, 1000);
  };

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">ARISE <span className="text-blue-600">AI</span></h2>
      </div>
      <div className="glass rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[500px] shadow-2xl">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-xl ${msg.role === 'user' ? 'bg-blue-600' : 'bg-zinc-900 border border-white/10'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-black/40 border-t border-white/10 flex gap-4">
          <input 
            type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 outline-none"
            placeholder="Pucho kuch bhi..."
          />
          <button onClick={handleSend} className="bg-blue-600 px-8 rounded-xl font-bold">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default AIOptimizer;