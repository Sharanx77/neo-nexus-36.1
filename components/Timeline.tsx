export default function Timeline() {
  const schedule = [
    { phase: 'Phase 1', date: '20th July -- 5th August 2026', title: 'Registration & Abstract', desc: 'Open registration, team formation, and abstract submission via website.', glow: 'hover:border-electric/50 hover:shadow-[0_0_25px_rgba(14,124,196,0.3)]', bar: 'bg-electric', textCol: 'text-electric' },
    { phase: 'Phase 2', date: '10th August -- 13th August', title: 'Abstract Shortlisting', desc: 'Abstracts reviewed; shortlisted teams notified by email.', glow: 'hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]', bar: 'bg-cyan', textCol: 'text-cyan' },
    { phase: 'Phase 3', date: '22nd August 2026', title: 'Final Hackathon Day 1', desc: 'Inauguration, check-in at BITM Ballari, and hackathon commencement.', glow: 'hover:border-gold/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]', bar: 'bg-gold', textCol: 'text-gold' },
    { phase: 'Phase 4', date: '23rd August 2026', title: 'Final Hackathon Day 2', desc: 'Hackathon ends, jury evaluation, presentations, results, and prize distribution.', glow: 'hover:border-gold/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]', bar: 'bg-gold', textCol: 'text-gold' },
  ];

  return (
    <section id="timeline" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          {/* ADAPTIVE HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 font-heading text-white">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Timeline</span>
          </h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {schedule.map((item, idx) => (
            <div key={idx} className={`bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center relative overflow-hidden group transition-all duration-300 ${item.glow}`}>
              
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 ${item.bar} opacity-70 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_currentColor]`}></div>

              <div className="md:w-1/4 text-left pl-3 sm:pl-4">
                <span className={`${item.textCol} text-base sm:text-lg font-extrabold block mb-0.5 sm:mb-1 tracking-widest uppercase drop-shadow-[0_0_8px_currentColor]`}>{item.phase}</span>
                <span className="text-sm sm:text-base font-semibold text-gray-400">{item.date}</span>
              </div>
              
              <div className="md:w-3/4 pl-3 sm:pl-0">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm sm:text-base font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
