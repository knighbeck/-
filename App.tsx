import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { About } from './components/About';
import { AgencyExperience } from './components/AgencyExperience';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables for the global glow effect
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white relative flex justify-center pb-12">
      {/* 
        LAYOUT CORRECTION:
        - w-[94%]: Reduced from 98% to increase side margins (whitespace).
        - max-w-[1500px]: Reduced from 1800px to avoid "too big" look.
        - space-y-8: Maintained vertical separation.
      */}
      <div className="w-[94%] max-w-[1500px] my-10 space-y-10 relative z-10">
        <Hero />
        <FeaturedWork />
        <About />
        <AgencyExperience />
        <Contact />
      </div>
    </div>
  );
};

export default App;