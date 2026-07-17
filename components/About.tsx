'use client';
import { useState, useEffect } from 'react';

export default function About() {
  // Array of your hackathon memory images
  const images = [
    "/NN36.0/1.jpg",
    "/NN36.0/3.jpg",
    "/NN36.0/4.jpg",
    "/NN36.0/5.jpg",
    "/NN36.0/6.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect: Changes image every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  // Manual controls
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="about" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Banner */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-10 md:p-16 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 font-heading text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">About</span> Neo-Nexus
          </h2>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 font-normal">
            Neo-Nexus 36.1 is the second edition of the flagship multi-domain hackathon organized by IEEE Student Branch BITM and Ballari Institute of Technology and Management (BITM). Building on the legacy of Neo-Nexus 36.0, this event challenges student innovators from across India to solve real-world problems.
          </p>

          {/* --- NEW RESPONSIVE SLIDESHOW --- */}
          <div className="relative mb-6 sm:mb-8 w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] group">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Neo-Nexus 36.0 Memory ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
              />
            ))}

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-electric/80 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/20"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-electric/80 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-white/20"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Tracking Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>
          {/* --- END SLIDESHOW --- */}

          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
            <strong className="text-white font-bold">Our Mission:</strong> Empower student innovators to solve real-world multi-domain challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center border-t border-white/10 pt-8 sm:pt-10">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">200+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Registrations</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">40+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Teams Shortlisted</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">15+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Colleges</span>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Color Neon Framed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
          
          {/* UPDATED: Changed "Prizes" to "Prize Pool" */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-gold/40 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <h4 className="text-gold font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Prize Pool</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">1 Lakh+</p>
          </div>
          
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Mentorship</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">Expert Guidance</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Networking</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">Pan-India Reach</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-success/40 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <h4 className="text-success font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Certificates</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">For all participants</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-neonPurple/40 shadow-[0_0_15px_rgba(168,85,247,0.1)] sm:col-span-2 lg:col-span-1">
            <h4 className="text-neonPurple font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Industry Connect</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">Top Tech Leaders</p>
          </div>
        </div>

        {/* --- VIDEO SECTION --- */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-cyan"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 font-heading text-center text-white">
            Neo-Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">36.0</span>
          </h3>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
            <video 
              src="/NN36.0/NN36video.mp4" 
              poster="/NN36.0/screen.png" 
              controls 
              muted 
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/30 rounded-2xl transition-colors pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
