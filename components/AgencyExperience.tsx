import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  { id: 1, company: "Elite Model Mgmt", role: "Signed Model", period: "2022 — Present", location: "NEW YORK, USA" },
  { id: 2, company: "IMG London", role: "Development Board", period: "2020 — 2022", location: "LONDON, UK" },
  { id: 3, company: "Ford Models", role: "Runway Division", period: "2018 — 2020", location: "PARIS, FRANCE" },
  { id: 4, company: "Freelance", role: "Commercial Talent", period: "2016 — 2018", location: "MIAMI, USA" },
  { id: 5, company: "Scouted", role: "New Face", period: "2014 — 2016", location: "CHICAGO, USA" },
];

export const AgencyExperience: React.FC = () => {
  return (
    <div className="glow-container">
      <div className="glow-content p-8 md:p-14">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-28">
           <div>
            <h2 className="text-6xl md:text-[7rem] text-white mb-0 leading-[0.85] tracking-tighter">
              <span className="font-medium font-sans block">Agency</span>
            </h2>
            <h2 className="text-6xl md:text-[7rem] text-gray-400 font-serif italic leading-[0.85] tracking-tight font-normal">
               Experience
            </h2>
             {/* 
               SUBTITLE FIX:
               - text-gray-400 (whiter)
               - font-medium (thinner than bold)
               - tracking-widest
            */}
             <p className="text-gray-400 uppercase text-[11px] tracking-[0.25em] font-medium mt-10 pl-2">// Skills & Timeline</p>
          </div>
          <div className="text-right hidden md:block pb-4">
            <span className="text-blue-500 font-medium text-xl block mb-3">03</span>
            {/* 
               DESCRIPTION FIX:
               - text-gray-300 (whiter)
               - font-light (thinner)
            */}
            <p className="text-gray-300 font-light text-lg max-w-[350px] leading-relaxed text-right ml-auto">
              A timeline of my agency representation and key career milestones.
            </p>
          </div>
        </div>

        <div className="w-full">
          {/* White Header Bar */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-0 py-5 bg-white text-black rounded-sm text-xs font-black tracking-[0.25em] uppercase mb-2 items-center">
              <div className="col-span-4 pl-6">Representation</div>
              <div className="col-span-4 pl-4">Freelance Projects</div>
              <div className="col-span-4 text-right pr-6">Location</div>
          </div>

          {/* LIST ROWS */}
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                /* 
                   SPACING FIX: 
                   - Reduced to py-9 (was py-14) to match screenshot tightness.
                */
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 px-2 md:px-6 py-9 border-b border-white/10 hover:bg-white/5 transition-all items-center pointer-events-auto"
              >
                {/* COMPANY */}
                <div className="col-span-4">
                  {/* 
                     FONT WEIGHT FIX: 
                     - Changed to font-semibold (was bold) to be less heavy.
                  */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-500 transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                   <span className="md:hidden text-gray-500 text-xs mt-2 block">{exp.period}</span>
                </div>
                
                {/* PERIOD & ROLE */}
                <div className="col-span-4 flex flex-col md:flex-row md:items-center gap-8">
                   {/* 
                      SIZE FIX: 
                      - Increased to text-base (was text-sm).
                      - Ensured text-gray-400.
                   */}
                   <span className="hidden md:block text-gray-400 text-base font-normal w-32 shrink-0">{exp.period}</span>
                   
                   <div className="inline-flex">
                     <span className="text-white text-lg font-medium">
                       {exp.role}
                     </span>
                   </div>
                </div>
                
                {/* LOCATION */}
                <div className="col-span-4 text-right">
                  {/* 
                     SIZE/FONT FIX: 
                     - Increased to text-sm (was text-xs).
                     - Whiter (gray-400).
                     - Tracking wider.
                  */}
                  <span className="text-sm text-gray-400 font-semibold tracking-[0.15em] uppercase group-hover:text-white transition-colors">
                      {exp.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};