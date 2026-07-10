export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Banner */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-10 md:p-16 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 font-heading text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">About</span> Neo-Nexus
          </h2>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 font-normal">
            Neo-Nexus 36.1 is the second edition of the flagship national hackathon organized by IEEE Student Branch BITM and Ballari Institute of Technology and Management (BITM). Building on the legacy of Neo-Nexus 36.0, this event challenges student innovators from across India to solve real-world problems.
          </p>

          <div className="mb-6 sm:mb-8 max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <img src="/NN36.0/1.jpg" alt="Neo-Nexus 36.0 Group Photo" className="w-full h-auto object-cover" />
          </div>

          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
            <strong className="text-white font-bold">Our Mission:</strong> Empower student innovators to solve real-world multi-domain challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center border-t border-white/10 pt-8 sm:pt-10">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">200+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Registrations</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">40+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Teams Shortlisted</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">15+</span>
              <span className="text-xs sm:text-sm text-gray-400 font-extrabold uppercase tracking-widest">Colleges</span>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Color Neon Framed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-gold/40 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <h4 className="text-gold font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Prizes</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">50,000+</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Mentorship</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">Expert Guidance</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.1)]">
            <h4 className="text-electric font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Networking</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">National Level</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-success/40 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <h4 className="text-success font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Certificates</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">For all participants</p>
          </div>
          <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl text-center border border-neonPurple/40 shadow-[0_0_15px_rgba(168,85,247,0.1)] sm:col-span-2 lg:col-span-1">
            <h4 className="text-neonPurple font-bold text-base sm:text-lg mb-1 sm:mb-2 font-heading uppercase tracking-wider">Industry Connect</h4>
            <p className="text-sm sm:text-base font-semibold text-gray-300">Top Tech Leaders</p>
          </div>
        </div>

        {/* --- NEW: VIDEO SECTION --- */}
        <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-cyan"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 font-heading text-center text-white">
            Neo-Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">In Action</span>
          </h3>
          
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
            <video 
              src="/NN36.0/NN36video.mp4" 
              controls 
              muted 
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            {/* Subtle glow border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan/30 rounded-2xl transition-colors pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
