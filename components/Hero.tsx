import React from 'react';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';

// Custom X (formerly Twitter) Icon SVG to match screenshot
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <div className="glow-container group/hero">
      <div className="glow-content overflow-hidden relative h-[85vh] min-h-[750px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out delay-300 group-hover/hero:scale-105"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop")',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
          
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

          {/* Navigation */}
          <nav className="absolute top-0 left-0 w-full p-8 md:px-12 md:py-10 flex justify-between items-center z-20">
            <div className="flex items-center gap-12">
              <span className="text-2xl font-bold tracking-tighter text-white">SK</span>
              {/* 
                 FONT FIX:
                 - Reduced from text-lg (18px) to text-base (16px) as requested ("smaller by 0.5 size").
                 - Kept font-medium.
              */}
              <div className="hidden md:flex gap-8 text-base text-gray-200 font-medium">
                <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="hover:text-white transition-colors">Bio</a>
                <a href="#" className="hover:text-white transition-colors">Services</a>
              </div>
            </div>

            {/* 
               BUTTON:
               - Kept text-base (16px) and bold as previous feedback requested it "slightly bigger".
            */}
            <button className="relative inline-flex w-[165px] h-[55px] overflow-hidden rounded-full p-[1px] focus:outline-none hover:scale-105 transition-transform duration-300 pointer-events-auto shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute inset-0 bg-pinstripe opacity-100 mix-blend-soft-light" />
                <span className="relative flex items-center gap-2 text-white font-bold text-base tracking-widest uppercase z-10 pt-[1px]">
                  Book Suki
                  <ArrowRight className="w-5 h-5" strokeWidth={3} />
                </span>
              </span>
            </button>
          </nav>

          {/* Main Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:px-16 md:pb-16 flex flex-col md:flex-row justify-between items-end z-10">
            <div className="w-full md:w-auto">
              <h1 className="text-6xl md:text-[9rem] text-white leading-none mb-6 md:whitespace-nowrap">
                <span className="font-sans font-medium tracking-tight">Suki</span> <span className="font-serif italic text-gray-300 font-normal">Kimura</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-light">
                Professional fashion, runway, and commercial model based in New York. Bringing elegance, versatility, and energy to every frame.
              </p>
            </div>

            {/* Icons Area */}
            <div className="flex gap-6 mt-8 md:mt-0 pointer-events-auto z-20">
              <SocialButton 
                icon={<Instagram size={22} strokeWidth={2} />} 
                bgClass="bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9]" 
              />
              <SocialButton 
                icon={<XIcon />} 
                bgClass="bg-[#14171A]" 
              />
              <SocialButton 
                icon={<Linkedin size={22} fill="currentColor" strokeWidth={0} />} 
                bgClass="bg-[#0077B5]" 
              />
            </div>
          </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, bgClass }: { icon: React.ReactNode, bgClass: string }) => (
  <a 
    href="#" 
    className="relative block w-14 h-14 group/btn" 
  >
    <div 
      className={`absolute inset-0 rounded-2xl ${bgClass} transition-transform duration-300 ease-out origin-bottom
        group-hover/hero:rotate-[35deg] 
        shadow-xl`}
    />
    <div className="relative h-full w-full flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg z-10">
      {icon}
    </div>
  </a>
);