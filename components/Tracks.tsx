export default function Tracks() {
  const tracks = [
    { id: 'AI', title: 'AI for Humanitarian Tech', desc: 'AI-driven solutions for social good, health, disaster relief and inclusivity.' },
    { id: 'CKTD', title: 'Circuit Design', desc: 'Embedded systems, PCB design, VLSI and hardware engineering.' },
    { id: 'UIT', title: 'Urban Intelligence Tech', desc: 'Urban planning algorithms, IoT networks, and sustainable infrastructure.' },
    { id: 'AERO', title: 'Aerospace', desc: 'Drones, satellite technology, navigation systems and aerospace innovation.' },
    { id: 'MOB', title: 'Mobility', desc: 'EVs, autonomous vehicles, transportation and logistics solutions.' },
    { id: 'CYBR', title: 'Cyber Security', desc: 'Threat detection, secure systems, ethical hacking and data privacy.' },
  ];

  return (
    <section id="tracks" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-heading text-white">
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Tracks</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-normal">Each team must select exactly one domain track at registration (no changes after abstract deadline).</p>
          <p className="text-cyan text-base mt-2 font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">[ NOTE: Problem statements will be released soon ]</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="bg-[#030811]/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-500 group cursor-pointer flex flex-col h-full relative overflow-hidden">
              
              {/* Subtle hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glowing Domain Tag */}
              <div className="text-cyan font-black text-sm tracking-widest bg-cyan/10 border border-cyan/30 shadow-[0_0_10px_rgba(6,182,212,0.2)] px-4 py-1.5 rounded-full inline-block w-max mb-6 relative z-10">
                [{track.id}]
              </div>
              
              <h3 className="text-2xl font-bold mb-3 font-heading tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan transition-all relative z-10">
                {track.title}
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed flex-grow relative z-10 group-hover:text-gray-200">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}