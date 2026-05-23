"use client";

import React from "react";

interface LogoInfo {
  name: string;
  shortName: string;
}

const allCompanies: LogoInfo[] = [
  { name: "Popular Diagnostic Centre Ltd.", shortName: "PDC" },
  { name: "Popular Medical College & Hospital Ltd.", shortName: "PMC" },
  { name: "KiDO DHAKA Co., Ltd.", shortName: "KiDO" },
  { name: "Crowne Plaza Dhaka Gulshan by IHG", shortName: "Crowne Plaza" },
  { name: "Leading University", shortName: "LU" },
  { name: "Counter Terrorism & Transnational Crime, DMP", shortName: "CTTC" },
  { name: "Bangladesh Football Federation", shortName: "BFF" },
  { name: "BAIUST", shortName: "BAIUST" },
  { name: "MJL Bangladesh", shortName: "MJL" },
  { name: "Divine Mercy Hospital Ltd.", shortName: "DMH" },
  { name: "NASSA Group", shortName: "NASSA" },
  { name: "Bangladesh Ainjeebe Shahakari Samity", shortName: "BASS" },
  { name: "Bangladesh Development Bank Ltd.", shortName: "BDBL" },
  { name: "Office of the Registrar General, BDR", shortName: "BDR" },
  { name: "BRTA", shortName: "BRTA" },
  { name: "BGMEA University of Fashion and Technology", shortName: "BUFT" },
  { name: "CPTU", shortName: "CPTU" },
  { name: "Crossline Knit and Fabric Ltd", shortName: "Crossline" },
  { name: "Daffodil International University", shortName: "DIU" },
  { name: "Divine Mercy General Hospital", shortName: "DMGH" },
  { name: "Dr. Fazlul Haque Colorectal Hospital Limited", shortName: "FHCH" },
  { name: "Hannan Group", shortName: "Hannan" },
  { name: "Ibn Sina Pharmaceuticals Ltd", shortName: "Ibn Sina" },
];

const row1 = allCompanies.slice(0, 12);
const row2 = allCompanies.slice(12, 23);

export default function TrustedCompanies() {
  return (
    <section className="w-full py-20 bg-white border-y border-slate-200 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[100vw] mx-auto flex flex-col gap-12">
        
        {/* Section Title */}
        <div className="text-center px-6">
          <span className="text-xs font-extrabold tracking-widest text-[#0F2C59] uppercase relative pb-2 inline-block">
            COMPANIES WE WORK WITH
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#D32F2F]" />
          </span>
        </div>

        {/* Scrolling Marquees */}
        <div className="flex flex-col gap-8 w-full relative pt-4 pb-4">
          
          {/* Left / Right Fade Gradients for smooth clipping */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Row 1 (Scrolls Left) */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-scroll-left pause-on-hover w-max gap-6 px-3">
              {[...row1, ...row1].map((logo, idx) => (
                <div 
                  key={`r1-${idx}`}
                  className="group relative w-40 h-32 sm:w-48 sm:h-36 rounded-3xl bg-[#F0F4F7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-4 select-none overflow-hidden shrink-0 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <span className="text-[#0F2C59] font-black text-lg tracking-tight">
                      {logo.shortName.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 text-center leading-tight whitespace-normal break-words w-full group-hover:text-[#0F2C59] transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Scrolls Right) */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-scroll-right pause-on-hover w-max gap-6 px-3">
              {[...row2, ...row2].map((logo, idx) => (
                <div 
                  key={`r2-${idx}`}
                  className="group relative w-40 h-32 sm:w-48 sm:h-36 rounded-3xl bg-[#F0F4F7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-4 select-none overflow-hidden shrink-0 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <span className="text-[#D32F2F] font-black text-lg tracking-tight">
                      {logo.shortName.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 text-center leading-tight whitespace-normal break-words w-full group-hover:text-[#0F2C59] transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
