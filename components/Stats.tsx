export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-24 relative z-10">
      <div className="bg-[#030811]/75 backdrop-blur-lg py-6 px-8 rounded-2xl border border-electric/40 shadow-[0_0_30px_rgba(14,124,196,0.25)] flex flex-wrap justify-center sm:justify-between items-center text-center gap-6 text-gray-200 font-bold text-base md:text-lg tracking-widest uppercase relative overflow-hidden">
        
        {/* Subtle top edge glow line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50"></div>

        <span>6 Domains</span>
        <span className="hidden sm:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
        
        <span>36 Hours</span>
        <span className="hidden sm:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
        
        {/* UPDATED PRIZE POOL */}
        <span className="text-gold font-black text-xl drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">1 Lakh+</span>
        <span className="hidden sm:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan font-black text-xl drop-shadow-[0_0_10px_rgba(14,124,196,0.4)]">National Level</span>
        <span className="hidden sm:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
        
        <span>2 to 4 Members / Team</span>
      </div>
    </div>
  );
}
