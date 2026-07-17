'use client';
import { useState, useEffect } from 'react';

export default function Winners() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock scrolling when the modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  const closeModal = () => setSelectedImage(null);

  const winnersData = [
    {
      place: "Winner",
      teamName: "HACKSMITH'S",
      imagePath: "/winners/first.JPG", 
      glow: "from-gold to-yellow-400",
      border: "border-gold/50 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
    },
    {
      place: "1st Runner Up",
      teamName: "OSCORP",
      imagePath: "/winners/runnerups.JPG", 
      glow: "from-gray-300 to-gray-500",
      border: "border-gray-400/50 shadow-[0_0_20px_rgba(156,163,175,0.2)]"
    },
    {
      place: "2nd Runner Up",
      teamName: "SPATIKA",
      imagePath: "/winners/secondrunnerups.JPG", 
      glow: "from-amber-600 to-orange-700",
      border: "border-amber-600/50 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
    }
  ];

  return (
    <>
      <section id="winners" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading text-white">
              Neo-Nexus 36.0 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">Hall of Fame</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">Honoring the brilliant minds who conquered the previous edition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {winnersData.map((winner, index) => (
              <div key={index} className={`bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border ${winner.border} flex flex-col items-center text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${winner.glow} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="relative z-10 w-full flex flex-col items-center h-full">
                  
                  {/* --- CLICKABLE IMAGE TAG (Reverted to aspect-[4/3]) --- */}
                  <div 
                    onClick={() => setSelectedImage(winner.imagePath)}
                    className="w-full aspect-[4/3] rounded-2xl mb-6 overflow-hidden border border-white/10 bg-black/40 cursor-pointer relative"
                  >
                    <img 
                      src={winner.imagePath} 
                      alt={`${winner.teamName} - ${winner.place}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    {/* Hover Overlay indicating clickability */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  <span className={`inline-block px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${winner.glow}`}>
                    {winner.place}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-auto">{winner.teamName}</h3>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- ZOOM MODAL --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          
          {/* Blurred Dark Background */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-zoom-out" 
            onClick={closeModal}
          ></div>
          
          {/* Image Container */}
          <div className="relative z-10 max-w-5xl w-full flex justify-center items-center">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:-right-4 bg-white/10 hover:bg-red-500/30 text-white p-2 rounded-full backdrop-blur-md transition-all z-[110] border border-white/20"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* The Zoomed Image */}
            <img 
              src={selectedImage} 
              alt="Winner Zoomed"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
}
