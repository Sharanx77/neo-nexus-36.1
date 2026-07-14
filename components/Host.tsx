'use client';
import { useState } from 'react';
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Host() {
  const [index, setIndex] = useState(-1);

  const campusPhotos = [
    "/bitm-pics/bitm1.jpg",
    "/bitm-pics/bitm2.jpg"
  ];
  const slides = campusPhotos.map(src => ({ src }));

  return (
    <section id="host" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Glow Framed Block */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT COLUMN - Images vertically stacked and larger */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="flex flex-col gap-6 w-full justify-center max-w-[400px]">
              {campusPhotos.map((photo, i) => (
                <div 
                  key={i}
                  onClick={() => setIndex(i)}
                  className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(14,124,196,0.2)] group relative cursor-pointer"
                >
                  <img src={photo} alt={`BITM Campus View ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-black mb-2 font-heading text-white">Ballari Institute of Technology & Management</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan font-black text-lg mb-4">NH-63, Ballari - 583104, Karnataka, India</p>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed font-normal">Leading engineering institution in North Karnataka known for innovation and excellence in technical education.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base mt-6">
              <div className="bg-[#030811]/40 p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                <span className="text-gray-400 font-semibold block mb-1">Website</span>
                <Link href="https://www.bitm.edu.in/" target="_blank" rel="noopener noreferrer" className="text-electric font-bold hover:underline">www.bitm.edu.in</Link>
              </div>
              <div className="bg-[#030811]/40 p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                <span className="text-gray-400 font-semibold block mb-1">Established</span>
                <span className="text-white font-bold">1997</span>
              </div>
              <div className="bg-[#030811]/40 p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                <span className="text-gray-400 font-semibold block mb-1">Affiliation</span>
                <span className="text-white font-bold">Autonomous under VTU</span>
              </div>
              <div className="bg-[#030811]/40 p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                <span className="text-gray-400 font-semibold block mb-1">NAAC Grade</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 font-black">A+ Grade</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, zoomInMultiplier: 2 }}
        styles={{
            container: { backgroundColor: "rgba(3, 8, 17, 0.95)", backdropFilter: "blur(12px)" },
            button: { filter: "drop-shadow(0 0 10px rgba(14,124,196,0.5))" }
        }}
      />
    </section>
  );
}
