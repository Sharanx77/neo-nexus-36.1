export default function Tracks() {
  const tracks = [
    { id: 'AI', title: 'AI for Humanitarian Tech', desc: 'AI-driven solutions for social good, health, disaster relief and inclusivity.', pdfPath: '/YOUR_PDF_FOLDER/ai-problem-statement.pdf' },
    { id: 'CKTD', title: 'Circuit Design', desc: 'Embedded systems, PCB design, VLSI and hardware engineering.', pdfPath: '/YOUR_PDF_FOLDER/circuit-design-problem-statement.pdf' },
    { id: 'UIT', title: 'Urban Intelligence Tech', desc: 'Urban planning algorithms, IoT networks, and sustainable infrastructure.', pdfPath: '/YOUR_PDF_FOLDER/urban-intelligence-problem-statement.pdf' },
    { id: 'AERO', title: 'Aerospace', desc: 'Drones, satellite technology, navigation systems and aerospace innovation.', pdfPath: '/YOUR_PDF_FOLDER/aerospace-problem-statement.pdf' },
    { id: 'MOB', title: 'Mobility', desc: 'EVs, autonomous vehicles, transportation and logistics solutions.', pdfPath: '/YOUR_PDF_FOLDER/mobility-problem-statement.pdf' },
    { id: 'CYBR', title: 'Cyber Security', desc: 'Threat detection, secure systems, ethical hacking and data privacy.', pdfPath: '' },
  ];

  return (
    <section id="tracks" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 font-heading text-white">
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Tracks</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-normal px-2">Each team must select exactly one domain track at registration.</p>
          <p className="text-cyan text-sm sm:text-base mt-2 font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">[ NOTE: Problem statements will be released soon ]</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track) => (
            /* PERFORMANCE UPDATE: Solidified mobile background, kept blur for desktop. Softened mobile shadows. */
            <div key={track.id} className="bg-[#030811]/90 md:bg-[#030811]/60 backdrop-blur-none md:backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan/50 shadow-md md:shadow-[0_0_15px_rgba(255,255,255,0.05)] md:hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-500 group cursor-pointer flex flex-col h-full relative overflow-hidden">
              
              <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-electric/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="text-cyan font-black text-xs sm:text-sm tracking-widest bg-cyan/10 border border-cyan/30 shadow-sm md:shadow-[0_0_10px_rgba(6,182,212,0.2)] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block w-max mb-4 sm:mb-6 relative z-10">
                [{track.id}]
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-heading tracking-wide text-white md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-cyan transition-all relative z-10">
                {track.title}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow relative z-10 mb-6">
                {track.desc}
              </p>

              <div className="relative z-10 mt-auto pt-2 border-t border-white/5 transition-colors">
                {track.pdfPath ? (
                  <a href={track.pdfPath} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-cyan/5 hover:bg-cyan/15 border border-cyan/30 text-cyan font-bold py-2.5 px-4 rounded-xl text-sm transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download Problem
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 w-full bg-gray-800/30 border border-gray-600/50 text-gray-400 font-semibold py-2.5 px-4 rounded-xl text-sm cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Will be released soon
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
