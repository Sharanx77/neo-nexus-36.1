import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 px-4 flex justify-center items-center flex-col z-10">
      <div className="absolute inset-0 hero-ambient-glow -z-10 pointer-events-none w-full h-[150%]"></div>
      
      <div className="text-center max-w-6xl mx-auto w-full">
        {/* PERFORMANCE UPDATE: Removed pulse animation on mobile (md:animate-pulse) */}
        <span className="text-electric font-bold tracking-[0.2em] text-xs sm:text-sm md:text-base lg:text-lg uppercase mb-4 sm:mb-5 block md:animate-pulse">
          National Multi-Domain Hackathon | 2nd Edition
        </span>
        
        <h1 className="text-[3.5rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[8.5rem] font-black sm:leading-none mb-4 sm:mb-6 tracking-tighter uppercase font-heading">
          <span className="text-white md:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] block mb-2">NEO-NEXUS 36.1</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight uppercase text-white leading-snug">
          Where Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-neonPurple bg-[length:200%_auto] md:animate-text-shimmer">Collide.</span> Innovations Emerge.
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 sm:mb-12 font-normal max-w-4xl mx-auto leading-relaxed px-2">
          36 Hours. 6 Domains. Infinite Possibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          <div className="bg-[#030811]/90 md:bg-[#030811]/70 backdrop-blur-none md:backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-electric/50 shadow-md md:shadow-[0_0_15px_rgba(14,124,196,0.2)]">
            <span className="font-extrabold text-sm sm:text-base tracking-widest text-electric uppercase">8th & 9th August 2026</span>
          </div>
          <div className="bg-[#030811]/90 md:bg-[#030811]/70 backdrop-blur-none md:backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-cyan/50 shadow-md md:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="font-extrabold text-sm sm:text-base tracking-widest text-white uppercase">IEEE SB, BITM Ballari</span>
          </div>
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none px-4 sm:px-0">
          <Link href="YOUR_GOOGLE_FORM_LINK_HERE" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-electric to-cyan hover:from-blue-600 hover:to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg sm:text-xl tracking-wide transition-all shadow-lg md:shadow-[0_0_20px_rgba(14,124,196,0.5)] md:hover:shadow-[0_0_40px_rgba(14,124,196,0.8)] hover:scale-105 border border-white/10 text-center">
            Register Now
          </Link>
          <Link href="#tracks" className="w-full sm:w-auto bg-[#030811]/80 md:bg-[#030811]/60 backdrop-blur-none md:backdrop-blur-md hover:bg-white/10 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg sm:text-xl tracking-wide transition-all border border-gray-500 hover:border-electric md:hover:shadow-[0_0_20px_rgba(14,124,196,0.3)] text-center">
            Explore Tracks
          </Link>
        </div>
      </div>
    </section>
  );
}
