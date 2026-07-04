import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 px-4 flex justify-center items-center flex-col z-10">
      <div className="absolute inset-0 hero-ambient-glow -z-10 pointer-events-none w-full h-[150%]"></div>
      
      <div className="text-center max-w-6xl mx-auto">
        <span className="text-electric font-bold tracking-[0.3em] text-base md:text-lg uppercase mb-5 block animate-pulse">
          National Multi-Domain Hackathon | 2nd Edition
        </span>
        
        <h1 className="text-7xl md:text-[8.5rem] font-black leading-none mb-6 tracking-tighter uppercase font-heading">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] block mb-2">NEO-NEXUS 36.1</span>
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight uppercase text-white">
          Where Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-neonPurple bg-[length:200%_auto] animate-text-shimmer animate-pulse-glow">Collide.</span> Innovations Emerge.
        </h2>
        
        <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-normal max-w-4xl mx-auto leading-relaxed">
          36 Hours. 6 Domains. Infinite Possibilities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-[#030811]/70 backdrop-blur-md px-8 py-4 rounded-full border border-electric/50 shadow-[0_0_15px_rgba(14,124,196,0.2)]">
            <span className="font-extrabold text-base tracking-widest text-electric uppercase">8th & 9th August 2026</span>
          </div>
          <div className="bg-[#030811]/70 backdrop-blur-md px-8 py-4 rounded-full border border-cyan/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="font-extrabold text-base tracking-widest text-white uppercase">IEEE SB, BITM Ballari</span>
          </div>
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* UPDATED: Google Form Link Placeholder */}
          <Link href="YOUR_GOOGLE_FORM_LINK_HERE" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-electric to-cyan hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 rounded-full font-black text-xl tracking-wide transition-all shadow-[0_0_20px_rgba(14,124,196,0.5)] hover:shadow-[0_0_40px_rgba(14,124,196,0.8)] hover:scale-105 border border-white/10">
            Register Now
          </Link>
          <Link href="#tracks" className="bg-[#030811]/60 backdrop-blur-md hover:bg-white/10 text-white px-12 py-6 rounded-full font-black text-xl tracking-wide transition-all border border-gray-500 hover:border-electric hover:shadow-[0_0_20px_rgba(14,124,196,0.3)]">
            Explore Tracks
          </Link>
        </div>
      </div>
    </section>
  );
}