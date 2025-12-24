import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Vogue Editorial",
    category: "Fashion • 2024",
    year: "2024",
    type: "PRINT",
    image1: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Paris Fashion Week",
    category: "Runway • 2023",
    year: "2023",
    type: "WALK",
    image1: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Zara Collection",
    category: "Commercial • 2023",
    year: "2023",
    type: "RETAIL",
    image1: "https://images.unsplash.com/photo-1485230946086-1d99dcc33ec0?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sephora Beauty",
    category: "Campaign • 2024",
    year: "2024",
    type: "BEAUTY",
    image1: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Elle Magazine",
    category: "Editorial • 2023",
    year: "2023",
    type: "COVER",
    image1: "https://images.unsplash.com/photo-1616880005703-a265691d17d6?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Nike Sport",
    category: "Lifestyle • 2024",
    year: "2024",
    type: "FITNESS",
    image1: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  }
];

export const FeaturedWork: React.FC = () => {
  return (
    <div className="glow-container">
      <div className="glow-content p-8 md:p-14 relative overflow-hidden">
        
        {/* 
           SPOTLIGHT GRADIENT FIX:
           - Increased Opacity to 0.15 (was 0.08).
           - Increased Size to 900px (was 500px) to spread down further.
        */}
        <div 
          className="absolute top-0 left-0 w-[900px] h-[900px] pointer-events-none z-0 translate-x-[-20%] translate-y-[-20%]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)'
          }}
        />

        {/* HEADER */}
        <div className="flex justify-between items-start mb-16 relative z-10 pl-4 pt-4">
          <div>
            <h2 className="text-6xl md:text-[7rem] text-white mb-4 leading-[0.85] tracking-tighter">
              <span className="font-medium font-sans">Featured</span> <span className="font-serif italic text-gray-400 font-normal">Work</span>
            </h2>
            <p className="text-gray-400 uppercase text-[11px] tracking-[0.25em] font-medium pl-2 mt-10">// Projects & Case Studies</p>
          </div>
          
          <div className="text-right hidden md:block mt-32">
            <span className="text-blue-500 font-medium text-xl block mb-3">01</span>
            <p className="text-gray-300 font-light text-lg max-w-[350px] leading-relaxed ml-auto">
              A curated collection of my most impactful and innovative creative projects.
            </p>
          </div>
        </div>

        {/* CARD LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer rounded-3xl bg-[#111] border border-white/5 hover:border-white/10 transition-all duration-500 p-4
                ${(index === 1 || index === 4) ? 'md:-translate-y-12' : ''}
              `}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image1} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                />
                <img 
                  src={project.image2} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-end px-1 pb-1">
                <div>
                  <h3 className="text-xl text-white font-bold group-hover:text-blue-400 transition-colors mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">{project.category}</p>
                </div>
                <div className="bg-[#1a1a1a] px-3 py-1.5 rounded border border-white/10">
                   <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold group-hover:text-white transition-colors">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};