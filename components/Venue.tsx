import Link from 'next/link';

export default function Venue() {
  return (
    <section id="venue" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading text-white">
            Venue & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Facilities</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need for an uninterrupted 36-hour hacking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* --- LEFT SIDE: FACILITIES & AMENITIES --- */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Main Highlight Card (Combined Accommodation & Catered Meals) */}
            <div className="bg-gradient-to-br from-[#030811]/90 to-electric/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-[0_0_20px_rgba(234,179,8,0.15)] flex items-start gap-4">
              <div className="bg-gold/20 p-3 rounded-full text-gold shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Free Accommodation & Food</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Designated rest areas and catered meals will be provided for all registered participants within the campus. <strong className="text-gold">No additional charges!</strong> Focus entirely on your project while we take care of your comfort.
                </p>
              </div>
            </div>

            {/* Smaller Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
              
              {/* Wi-Fi */}
              <div className="bg-[#030811]/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-cyan/30 transition-colors">
                <div className="text-cyan mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">High-Speed Wi-Fi</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Enterprise-grade connection to ensure uninterrupted coding.</p>
              </div>
              
              {/* Power Stations */}
              <div className="bg-[#030811]/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-electric/30 transition-colors">
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Power Stations</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Abundant power outlets and charging stations for all your devices.</p>
              </div>

              {/* Refreshments */}
              <div className="bg-[#030811]/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-neonPurple/30 transition-colors">
                <div className="text-neonPurple mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8v6M4 8h16M4 16h16M6 8v8a2 2 0 002 2h8a2 2 0 002-2V8m-9 4h4" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">24/7 Refreshments</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Continuous access to coffee, snacks, and brain food to fuel innovation.</p>
              </div>

              {/* Mentorship */}
              <div className="bg-[#030811]/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:border-success/30 transition-colors">
                <div className="text-success mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Expert Mentorship</h3>
                <p className="text-gray-400 text-xs sm:text-sm">On-site guidance and support from industry leaders and tech experts.</p>
              </div>

            </div>
          </div>

          {/* --- RIGHT SIDE: LOCATION DETAILS --- */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-electric/30 shadow-[0_0_25px_rgba(14,124,196,0.1)] flex flex-col justify-center">
            
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              How to reach us
            </h3>

            <div className="mb-6">
              <p className="text-gray-300 font-semibold mb-1 text-lg">Ballari Institute of Technology and Management (BITM)</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                "Jnana Gangothri" Campus, No. 873/2,<br/>
                Bellary-Hosapete Road, Near Allipura,<br/>
                Ballari, Karnataka - 583104
              </p>
            </div>

            <div className="mb-8">
              <p className="text-white font-bold mb-3 text-sm tracking-wide uppercase">Easily accessible from major transit hubs:</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-cyan text-xl">🚆</span> Ballari Cantonment
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan text-xl">🚉</span> Ballari Railway Station (Ballari Junction)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan text-xl">🚌</span> Ballari Bus Stand
                </li>
              </ul>
            </div>

            <Link 
              href="https://maps.app.goo.gl/cmwmFtbd9y9wE7sw8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto block w-full text-center bg-electric/20 hover:bg-electric text-white border border-electric/50 px-6 py-3.5 rounded-full text-sm font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(14,124,196,0.2)] hover:shadow-[0_0_25px_rgba(14,124,196,0.5)]"
            >
              Open in Google Maps
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
