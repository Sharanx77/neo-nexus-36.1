export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-24 relative z-10">
      <div className="bg-[#030811]/75 backdrop-blur-lg py-6 px-4 md:px-6 lg:px-8 rounded-2xl border border-electric/40 shadow-[0_0_30px_rgba(14,124,196,0.25)] relative overflow-hidden">
        
        {/* Subtle top edge glow line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50"></div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-y-5 gap-x-6 lg:gap-x-0 w-full text-center text-gray-200 font-bold text-xs sm:text-sm lg:text-base tracking-widest uppercase">
          
          <span className="whitespace-nowrap">6 Domains</span>
          
          <span className="hidden lg:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
          
          <span className="whitespace-nowrap">36 Hours</span>
          
          <span className="hidden lg:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
          
          {/* Centered on top for mobile, middle for laptop */}
          <span className="whitespace-nowrap w-full lg:w-auto order-first lg:order-none mb-2 lg:mb-0 text-gold font-black text-lg md:text-xl drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">
            Prize Pool: 1 Lakh+
          </span>
          
          <span className="hidden lg:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
          
          <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan font-black text-sm md:text-lg drop-shadow-[0_0_10px_rgba(14,124,196,0.4)]">
            Multiple Domain
          </span>
          
          <span className="hidden lg:inline text-cyan/50 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">✦</span>
          
          <span className="whitespace-nowrap">2-4 Members/Team</span>
          
        </div>
      </div>
    </div>
  );
}
