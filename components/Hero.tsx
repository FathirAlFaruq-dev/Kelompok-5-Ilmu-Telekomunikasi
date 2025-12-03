import React from 'react';
import { Network, Signal, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-cyber-900 border-b border-cyber-700">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-cyber-800 rounded-full px-4 py-1.5 mb-6 border border-cyber-700 shadow-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-accent"></span>
          </span>
          <span className="text-xs font-mono text-cyan-100 uppercase tracking-wider">InfraTelko Systems Live</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Langkah Mewujudkan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-blue-500">
            Infrastruktur Telekomunikasi
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Panduan interaktif langkah demi langkah untuk membangun jaringan telekomunikasi yang handal, dari analisis hingga optimasi.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2 px-4 py-2 bg-cyber-800 rounded-lg border border-cyber-700">
            <Network className="w-4 h-4 text-cyber-accent" />
            <span>Topologi Modern</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyber-800 rounded-lg border border-cyber-700">
            <Signal className="w-4 h-4 text-cyber-accent" />
            <span>Konektivitas Luas</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyber-800 rounded-lg border border-cyber-700">
            <Zap className="w-4 h-4 text-cyber-accent" />
            <span>Optimasi Cerdas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;