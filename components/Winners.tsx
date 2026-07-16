export default function Winners() {
  const winnersData = [
    {
      place: "1st Place Champions",
      teamName: "[INSERT_1ST_PLACE_TEAM_NAME]",
      college: "[INSERT_1ST_PLACE_COLLEGE]",
      project: "[INSERT_1ST_PLACE_PROJECT_TITLE]",
      glow: "from-gold to-yellow-400",
      border: "border-gold/50 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
    },
    {
      place: "1st Runner Up",
      teamName: "[INSERT_2ND_PLACE_TEAM_NAME]",
      college: "[INSERT_2ND_PLACE_COLLEGE]",
      project: "[INSERT_2ND_PLACE_PROJECT_TITLE]",
      glow: "from-gray-300 to-gray-500",
      border: "border-gray-400/50 shadow-[0_0_20px_rgba(156,163,175,0.2)]"
    },
    {
      place: "2nd Runner Up",
      teamName: "[INSERT_3RD_PLACE_TEAM_NAME]",
      college: "[INSERT_3RD_PLACE_COLLEGE]",
      project: "[INSERT_3RD_PLACE_PROJECT_TITLE]",
      glow: "from-amber-600 to-orange-700",
      border: "border-amber-600/50 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
    }
  ];

  return (
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
            <div key={index} className={`bg-[#030811]/60 backdrop-blur-md p-8 rounded-3xl border ${winner.border} flex flex-col justify-between items-center text-center relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
              
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${winner.glow} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="relative z-10 w-full">
                <span className={`inline-block px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r ${winner.glow}`}>
                  {winner.place}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{winner.teamName}</h3>
                <p className="text-gray-400 font-semibold mb-6 uppercase tracking-wide text-sm">{winner.college}</p>
                
                <div className="bg-black/30 p-4 rounded-xl border border-white/5 w-full">
                  <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Winning Project</span>
                  <p className="text-white font-medium text-sm sm:text-base">{winner.project}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
