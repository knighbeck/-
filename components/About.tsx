import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="glow-container">
      <div className="glow-content p-8 md:p-14">
        
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-6xl md:text-[7rem] text-white mb-4 leading-[0.85] tracking-tighter">
              <span className="font-medium font-sans">About</span> <span className="font-serif italic text-gray-400 font-normal">Suki</span>
            </h2>
             {/* 
               SUBTITLE FIX: Whiter and Thinner
            */}
            <p className="text-gray-400 uppercase text-[11px] tracking-[0.25em] font-medium pl-2 mt-10">// Intro & Philosophy</p>
          </div>
          
          <div className="text-right hidden md:block mt-32">
            <span className="text-blue-500 font-medium text-xl block mb-3">02</span>
             {/* 
               DESCRIPTION FIX: Whiter and Thinner
            */}
            <p className="text-gray-300 font-light text-lg max-w-[350px] leading-relaxed ml-auto">
              Model, muse, and visual storyteller. A glimpse into my journey and professional background.
            </p>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* IMAGE COLUMN */}
          <div className="md:col-span-5 relative h-[800px] rounded-3xl overflow-hidden group border border-white/10 bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1400&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Suki Portrait"
            />
             <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Available for work</span>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="md:col-span-7 flex flex-col justify-center h-full pt-4 pb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
                I combine natural presence with <br className="hidden md:block"/> professional discipline.
              </h3>
              
              <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed w-full">
                <p>
                  I'm a professional model working with top agencies and brands worldwide.
                </p>
                <p>
                  My approach is deeply rooted in expression, bringing a unique energy to every shoot. Whether on the runway or in front of the lens, I strive to embody the designer's vision.
                </p>
                <p>
                  My philosophy is simple: versatility is key. From high fashion to commercial lifestyle, I adapt to tell the story through movement and expression.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-12 mt-20 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-white">5'10"</h4>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mt-3">Height</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-white">34-24-35</h4>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mt-3">Measurements</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-white">Black</h4>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold mt-3">Eyes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};