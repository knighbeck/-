import React from 'react';
import { Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  // Particles configuration: Adjusted for visibility and movement
  const particles = React.useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50}%`, // Confined mostly to the upper "sky" area
      size: Math.random() * 3 + 1 + 'px',
      delay: `-${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 8}s` // Slower, smoother float
    }));
  }, []);

  return (
    <div className="glow-container">
      <div className="glow-content relative h-[700px] overflow-hidden bg-[#050505] flex flex-col items-center justify-end">
        
        {/* 1. SKY AREA (Behind the semi-circle) */}
        <div className="absolute inset-0 z-0 h-full w-full">
           {/* Spotlight Effect - Top Center */}
           <div 
             className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
             style={{
               background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)'
             }}
           />
           
           {/* Animated Particles */}
           {particles.map((p) => (
             <div 
               key={p.id}
               className="absolute rounded-full bg-white/60 animate-float-particle"
               style={{
                 left: p.left,
                 top: p.top,
                 width: p.size,
                 height: p.size,
                 animationDelay: p.delay,
                 animationDuration: p.duration
               }}
             />
           ))}
        </div>

        {/* 2. SEMI-CIRCLE STRUCTURE */}
        {/* 
           Restored structure: A clean rounded top element.
           z-10 to cover the bottom of the sky.
        */}
        <div className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] md:w-[120%] aspect-square rounded-full bg-black z-10 shadow-[0_-10px_60px_rgba(255,255,255,0.12)] border-t border-white/20">
             {/* Inner gradient for volume */}
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_#000_40%)]" />
        </div>

        {/* 3. CONTENT AREA */}
        {/* 
           z-20 to sit ON TOP of the black semi-circle.
           mb-20 / pb-12 to position it correctly inside the black area.
        */}
        <div className="relative z-20 w-full flex flex-col items-center pb-12 md:pb-16">
            
            {/* Center Text Group */}
            {/* Added margin-bottom to push it up slightly but keep it grounded in the black */}
            <div className="text-center mb-16 md:mb-24">
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tighter mb-0 leading-[0.9]">
                  Let's work
                </h2>
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-500 font-serif italic mb-10 leading-[0.9] font-normal">
                  together.
                </h2>
                
                <p className="text-gray-400 mb-12 text-base md:text-lg max-w-md mx-auto font-light">
                    Have a project in mind? Let's create something extraordinary.
                </p>

                <a 
                  href="mailto:bookings@sarahwilliams.com" 
                  className="inline-flex items-center gap-3 bg-white text-black px-9 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <Mail size={18} />
                  bookings@sarahwilliams.com
                </a>
            </div>

            {/* Bottom Links */}
            <div className="w-full max-w-[90%] flex justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4">
              <div className="flex gap-4 md:gap-8">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Dribbble</a>
              </div>
              <div className="text-right md:text-left">
                &copy; 2024 Portfolio. All rights reserved.
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};