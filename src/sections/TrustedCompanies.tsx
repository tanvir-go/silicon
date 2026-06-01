"use client";

import React from "react";

interface LogoInfo {
  name: string;
  shortName: string;
  logoUrl: string;
}

const allCompanies: LogoInfo[] = [
  { name: "Beximco Pharmaceuticals Ltd.", shortName: "Beximco", logoUrl: "/images/logos/logo_r1_1.png" },
  { name: "Popular Diagnostic Centre Ltd.", shortName: "PDC", logoUrl: "/images/logos/logo_r1_4.png" },
  { name: "Popular Medical College & Hospital Ltd.", shortName: "PMC", logoUrl: "/images/logos/logo_r1_4.png" },
  { name: "KiDO DHAKA Co., Ltd.", shortName: "KiDO", logoUrl: "/images/logos/logo_r1_5.png" },
  { name: "Crowne Plaza Dhaka Gulshan by IHG", shortName: "Crowne Plaza", logoUrl: "/images/logos/logo_r2_7.png" },
  { name: "Leading University", shortName: "LU", logoUrl: "/images/logos/logo_r2_6.png" },
  { name: "Counter Terrorism & Transnational Crime, DMP", shortName: "CTTC", logoUrl: "/images/logos/logo_r2_4.png" },
  { name: "Bangladesh Football Federation", shortName: "BFF", logoUrl: "/images/logos/logo_r1_5.png" },
  { name: "BAIUST", shortName: "BAIUST", logoUrl: "/images/logos/logo_r2_6.png" },
  { name: "MJL Bangladesh", shortName: "MJL", logoUrl: "/images/logos/logo_r2_3.png" },
  { name: "Divine Mercy Hospital Ltd.", shortName: "DMH", logoUrl: "/images/logos/logo_r1_3.png" },
  { name: "NASSA Group", shortName: "NASSA", logoUrl: "/images/logos/logo_r1_6.png" },
  { name: "Bangladesh Ainjeebe Shahakari Samity", shortName: "BASS", logoUrl: "/images/logos/logo_r2_8.png" },
  { name: "Bangladesh Development Bank Ltd.", shortName: "BDBL", logoUrl: "/images/logos/logo_r1_2.png" },
  { name: "Office of the Registrar General, BDR", shortName: "BDR", logoUrl: "/images/logos/logo_r2_5.png" },
  { name: "BRTA", shortName: "BRTA", logoUrl: "/images/logos/logo_r2_3.png" },
  { name: "BGMEA University of Fashion and Technology", shortName: "BUFT", logoUrl: "/images/logos/logo_r2_6.png" },
  { name: "CPTU", shortName: "CPTU", logoUrl: "/images/logos/logo_r2_5.png" },
  { name: "Crossline Knit and Fabric Ltd", shortName: "Crossline", logoUrl: "/images/logos/logo_r1_6.png" },
  { name: "Daffodil International University", shortName: "DIU", logoUrl: "/images/logos/logo_r2_6.png" },
  { name: "Divine Mercy General Hospital", shortName: "DMGH", logoUrl: "/images/logos/logo_r1_3.png" },
  { name: "Dr. Fazlul Haque Colorectal Hospital Limited", shortName: "FHCH", logoUrl: "/images/logos/logo_r1_3.png" },
  { name: "Hannan Group", shortName: "Hannan", logoUrl: "/images/logos/logo_r1_6.png" },
  { name: "Ibn Sina Pharmaceuticals Ltd", shortName: "Ibn Sina", logoUrl: "/images/logos/logo_r2_2.png" },
  { name: "Eskayef Pharmaceuticals Ltd.", shortName: "SK+F", logoUrl: "/images/logos/logo_r1_8.png" },
  { name: "Nuvista Pharma Limited", shortName: "Nuvista", logoUrl: "/images/logos/logo_r1_7.png" },
  { name: "Mutual Trust Bank Securities", shortName: "MTB", logoUrl: "/images/logos/logo_r2_1.png" },
  { name: "TVS Auto Bangladesh Ltd.", shortName: "TVS", logoUrl: "/images/logos/logo_r2_3.png" }
];

const row1 = allCompanies.slice(0, 14);
const row2 = allCompanies.slice(14, 28);

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
                  className="group relative w-36 h-20 sm:w-44 sm:h-24 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-3 select-none overflow-hidden shrink-0 cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <img 
                      src={logo.logoUrl} 
                      alt={logo.name} 
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300"
                    />
                  </div>
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
                  className="group relative w-36 h-20 sm:w-44 sm:h-24 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-3 select-none overflow-hidden shrink-0 cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <img 
                      src={logo.logoUrl} 
                      alt={logo.name} 
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
