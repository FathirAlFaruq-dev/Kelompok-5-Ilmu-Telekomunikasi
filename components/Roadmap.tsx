import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { STEPS } from '../constants';
import { StepDetail } from '../types';

interface RoadmapProps {
  onSelectStep: (step: StepDetail) => void;
}

const Roadmap: React.FC<RoadmapProps> = ({ onSelectStep }) => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;
          // Determine arrow direction based on grid flow visual (simplified for responsiveness)
          
          return (
            <div key={step.id} className="relative group">
              {/* Connector Lines (Desktop visual simulation) */}
              {!isLast && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyber-700 z-0">
                  <ArrowRight className="absolute -right-2 -top-2.5 text-cyber-700 w-5 h-5" />
                </div>
              )}
              {!isLast && (
                <div className="block lg:hidden absolute left-1/2 -bottom-8 h-8 w-0.5 bg-cyber-700 z-0 -translate-x-1/2">
                   <ArrowDown className="absolute -bottom-2 -left-2.5 text-cyber-700 w-5 h-5" />
                </div>
              )}

              <button
                onClick={() => onSelectStep(step)}
                className="relative z-10 w-full h-full text-left bg-cyber-800/50 hover:bg-cyber-800 border border-cyber-700 hover:border-cyber-accent rounded-xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden"
              >
                {/* Background Number */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-slate-800/50 group-hover:text-cyber-accent/5 transition-colors select-none">
                  {step.id}
                </span>

                <div className="flex flex-col h-full justify-between relative z-20">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-cyber-900 rounded-lg flex items-center justify-center border border-cyber-700 group-hover:border-cyber-accent text-cyber-accent mb-4 shadow-lg">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-glow transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-cyber-700/50 flex items-center text-xs font-mono text-cyber-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <span>KLIK UNTUK DETAIL</span>
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;