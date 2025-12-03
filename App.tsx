import React, { useState } from 'react';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import StepModal from './components/StepModal';
import { StepDetail } from './types';

const App: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<StepDetail | null>(null);

  return (
    <div className="min-h-screen bg-cyber-900 text-slate-100 selection:bg-cyber-accent selection:text-cyber-900 font-sans">
      <Hero />
      
      <main className="relative">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Peta Jalan Pembangunan
            </h2>
            <div className="w-24 h-1 bg-cyber-accent rounded-full mb-4"></div>
            <p className="text-slate-400 text-center max-w-2xl">
              Klik pada setiap kartu tahapan di bawah ini untuk mempelajari detail teknis dan berkonsultasi langsung dengan AI Engineer kami.
            </p>
          </div>
        </div>

        <Roadmap onSelectStep={setSelectedStep} />
      </main>

      <Footer />

      {selectedStep && (
        <StepModal 
          step={selectedStep} 
          onClose={() => setSelectedStep(null)} 
        />
      )}
    </div>
  );
};

export default App;