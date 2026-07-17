export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-24 relative z-10">
      <div className="bg-[#030811]/75 backdrop-blur-lg py-6 px-4 md:px-8 rounded-2xl border border-electric/40 shadow-[0_0_30px_rgba(14,124,196,0.25)] relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50"></div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 w-full text-center text-gray-200 font-bold uppercase tracking-widest">
          
          {/* UPPER LINE: Prize Pool updated to 1 LAKH */}
          <div className="text-gold font-black text-xl md:text-2xl drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] tracking-widest">
            Prize Pool: 1 LAKH
          </div>
          
          {/* BOTTOM LINE: The 4 other stats with sparkles */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm lg:text-base">
            
            <span className="whitespace-nowrap">6 Domains</span>
            
            <span className="hidden sm:inline text-cyan/60 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
            
            <span className="whitespace-nowrap">36 Hours</span>
            
            <span className="hidden sm:inline text-cyan/60 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
            
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan font-black text-sm md:text-lg drop-shadow-[0_0_10px_rgba(14,124,196,0.4)]">
              Multiple Domain
            </span>
            
            <span className="hidden sm:inline text-cyan/60 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
            
            <span className="whitespace-nowrap">2-4 Members/Team</span>

          </div>
          
        </div>
      </div>
    </div>
  );
}
