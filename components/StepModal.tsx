import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, CheckCircle2 } from 'lucide-react';
import { StepDetail, ChatMessage } from '../types';
import { askAiConsultant } from '../services/geminiService';

interface StepModalProps {
  step: StepDetail;
  onClose: () => void;
}

const StepModal: React.FC<StepModalProps> = ({ step, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: `Halo! Saya asisten AI spesialis infrastruktur. Ada yang ingin ditanyakan mengenai tahap "${step.title}"?`,
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
      const responseText = await askAiConsultant(step.title, step.points, userMsg.text);
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-cyber-800 border border-cyber-700 w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Left Side: Detail Content */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-cyber-900/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyber-accent/10 rounded-xl border border-cyber-accent/20">
              <step.icon className="w-8 h-8 text-cyber-accent" />
            </div>
            <div>
              <div className="text-cyber-accent text-sm font-mono font-bold">LANGKAH {step.id}</div>
              <h2 className="text-2xl font-bold text-white">{step.title}</h2>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">{step.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Poin Utama</h3>
            {step.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-cyber-800 rounded-lg border border-cyber-700/50 hover:border-cyber-accent/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-200">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: AI Chat */}
        <div className="w-full md:w-1/2 flex flex-col bg-cyber-950 border-t md:border-t-0 md:border-l border-cyber-700 h-[500px] md:h-auto">
          <div className="p-4 border-b border-cyber-800 flex justify-between items-center bg-cyber-900">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyber-glow" />
              <span className="font-semibold text-white">AI Konsultan Teknik</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-cyber-accent text-cyber-900 rounded-br-none' 
                    : 'bg-cyber-800 text-slate-200 border border-cyber-700 rounded-bl-none'
                }`}>
                  <div className="flex items-center gap-2 mb-1 text-xs opacity-70">
                    {msg.role === 'user' ? <User className="w-3 h-3"/> : <Bot className="w-3 h-3"/>}
                    <span>{msg.role === 'user' ? 'Anda' : 'AI'}</span>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-cyber-800 p-4 rounded-2xl rounded-bl-none border border-cyber-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyber-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-cyber-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-cyber-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-cyber-900 border-t border-cyber-800">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya detail teknis..."
                className="w-full bg-cyber-950 text-white pl-4 pr-12 py-3 rounded-xl border border-cyber-700 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent focus:outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!query.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-cyber-accent text-cyber-900 rounded-lg hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepModal;