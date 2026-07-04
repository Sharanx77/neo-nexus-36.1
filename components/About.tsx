export default function About() {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Banner */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-heading text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">About</span> Neo-Nexus
          </h2>
          <p className="text-gray-200 text-xl leading-relaxed mb-8 font-normal">
            Neo-Nexus 36.1 is the second edition of the flagship national hackathon organized by IEEE Student Branch BITM and Ballari Institute of Technology and Management (BITM). Building on the legacy of Neo-Nexus 36.0, this event challenges student innovators from across India to solve real-world problems.
          </p>

          <div className="mb-8 max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <img src="/NN36.0/1.jpg" alt="Neo-Nexus 36.0 Group Photo" className="w-full h-auto object-cover" />
          </div>

          <p className="text-gray-200 text-xl leading-relaxed mb-10">
            <strong className="text-white font-bold">Our Mission:</strong> Empower student innovators to solve real-world multi-domain challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-10">
            <div>
              <span className="block text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">200+</span>
              <span className="text-sm text-gray-400 font-extrabold uppercase tracking-widest">Registrations</span>
            </div>
            <div>
              <span className="block text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">40+</span>
              <span className="text-sm text-gray-400 font-extrabold uppercase tracking-widest">Teams Shortlisted</span>
            </div>
            <div>
              <span className="block text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">15+</span>
              <span className="text-sm text-gray-400 font-extrabold uppercase tracking-widest">Colleges Across States</span>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Color Neon Framed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-2xl text-center border border-gold/40 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <h4 className="text-gold font-bold text-lg mb-2 font-heading uppercase tracking-wider">Prizes</h4>
            <p className="text-base font-semibold text-gray-300">50,000+</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-lg mb-2 font-heading uppercase tracking-wider">Mentorship</h4>
            <p className="text-base font-semibold text-gray-300">Expert Guidance</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-lg mb-2 font-heading uppercase tracking-wider">Networking</h4>
            <p className="text-base font-semibold text-gray-300">National Level</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-2xl text-center border border-success/40 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <h4 className="text-success font-bold text-lg mb-2 font-heading uppercase tracking-wider">Certificates</h4>
            <p className="text-base font-semibold text-gray-300">For all participants</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-2xl text-center border border-neonPurple/40 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <h4 className="text-neonPurple font-bold text-lg mb-2 font-heading uppercase tracking-wider">Industry Connect</h4>
            <p className="text-base font-semibold text-gray-300">Top Tech Leaders</p>
          </div>
        </div>

      </div>
    </section>
  );
}