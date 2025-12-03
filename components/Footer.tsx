import React from 'react';
import { Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-950 border-t border-cyber-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">InfraTelko</h2>
          <p className="text-slate-500 text-sm">
            Membangun masa depan konektivitas Indonesia.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="p-2 text-slate-400 hover:text-cyber-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-cyber-accent transition-colors">
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-slate-600">
        © 2024 InfraTelko Interactive. Powered by React & Gemini AI.
      </div>
    </footer>
  );
};

export default Footer;