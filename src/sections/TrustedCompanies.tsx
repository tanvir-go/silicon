"use client";

import React from "react";

interface LogoInfo {
  name: string;
  shortName: string;
  logoUrl: string;
}

const allCompanies: LogoInfo[] = [
  { name: "Beximco Pharmaceuticals Ltd.", shortName: "Beximco", logoUrl: "/images/logos/logo_r1_1.png" },
  { name: "Popular Diagnostic Centre Ltd.", shortName: "PDC", logoUrl: "/Customer/Popular Diagnostic Centre Ltd..jpg" },
  { name: "Popular Medical College & Hospital Ltd.", shortName: "PMC", logoUrl: "/Customer/Popular Medical College & Hospital Ltd.png" },
  { name: "KiDO DHAKA Co., Ltd.", shortName: "KiDO", logoUrl: "/Customer/KiDO DHAKA Co., Ltd..jpg" },
  { name: "Crowne Plaza Dhaka Gulshan by IHG", shortName: "Crowne Plaza", logoUrl: "/Customer/Crowne Plaza Dhaka Gulshan by IHG.svg" },
  { name: "Leading University", shortName: "LU", logoUrl: "/Customer/Leading University.png" },
  { name: "Counter Terrorism & Transnational Crime, DMP", shortName: "CTTC", logoUrl: "/Customer/Counter Terrorism & Transnational Crime, DMP.png" },
  { name: "Bangladesh Football Federation", shortName: "BFF", logoUrl: "/Customer/Bangladesh Football Federation.png" },
  { name: "BAIUST", shortName: "BAIUST", logoUrl: "/Customer/Bangladesh Army International University of Science and Technology (BAIUST).png" },
  { name: "MJL Bangladesh", shortName: "MJL", logoUrl: "/Customer/MJL Bangladesh.webp" },
  { name: "Divine Mercy Hospital Ltd.", shortName: "DMH", logoUrl: "/Customer/Divine Mercy Hospital Ltd..jpg" },
  { name: "NASSA Group", shortName: "NASSA", logoUrl: "/Customer/NASSA Group.png" },
  { name: "Bangladesh Ainjeebe Shahakari Samity", shortName: "BASS", logoUrl: "/Customer/Bangladesh Ainjeebe Shahakari Samity.png" },
  { name: "Bangladesh Development Bank Ltd.", shortName: "BDBL", logoUrl: "/Customer/Bangladesh Development Bank Ltd..png" },
  { name: "Office of the Registrar General, BDR", shortName: "BDR", logoUrl: "/Customer/Office of the Registrar General, Birth and Death Registration.png" },
  { name: "BRTA", shortName: "BRTA", logoUrl: "/Customer/BRTA.svg" },
  { name: "BGMEA University of Fashion and Technology", shortName: "BUFT", logoUrl: "/Customer/BGMEA University of Fashion and Technology.png" },
  { name: "CPTU", shortName: "CPTU", logoUrl: "/Customer/CPTU.jpg" },
  { name: "Crossline Knit and Fabric Ltd", shortName: "Crossline", logoUrl: "/Customer/Crossline Knit and Fabric Ltd.jpg" },
  { name: "Daffodil International University", shortName: "DIU", logoUrl: "/Customer/Daffodil International University.png" },
  { name: "Divine Mercy General Hospital", shortName: "DMGH", logoUrl: "/Customer/Divine Mercy General Hospital.jpg" },
  { name: "Dr. Fazlul Haque Colorectal Hospital Limited", shortName: "FHCH", logoUrl: "/Customer/Dr. Fazlul Haque Colorectal Hospital Limited.png" },
  { name: "Hannan Group", shortName: "Hannan", logoUrl: "/Customer/Hannan Group.png" },
  { name: "Ibn Sina Pharmaceuticals Ltd", shortName: "Ibn Sina", logoUrl: "/Customer/Ibn Sina Pharmaceuticals Ltd.png" },
  { name: "Eskayef Pharmaceuticals Ltd.", shortName: "SK+F", logoUrl: "/images/logos/logo_r1_8.png" },
  { name: "Nuvista Pharma Limited", shortName: "Nuvista", logoUrl: "/images/logos/logo_r1_7.png" },
  { name: "Mutual Trust Bank Securities", shortName: "MTB", logoUrl: "/images/logos/logo_r2_1.png" },
  { name: "TVS Auto Bangladesh Ltd.", shortName: "TVS", logoUrl: "/images/logos/logo_r2_3.png" }
];

const row1 = allCompanies.slice(0, 10);
const row2 = allCompanies.slice(10, 19);
const row3 = allCompanies.slice(19, 28);

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

          {/* Row 3 (Scrolls Left) */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex animate-scroll-left pause-on-hover w-max gap-6 px-3">
              {[...row3, ...row3].map((logo, idx) => (
                <div 
                  key={`r3-${idx}`}
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
