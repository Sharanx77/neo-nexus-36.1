import Link from "next/link";

export default function Sponsors() {
  const titleSponsors = [
    { logo: "/logo/gemma.png", alt: "Gemma" },
    { logo: "/logo/bangl_ieee1.png", alt: "IEEE YP" }
  ];

  const technicalSponsors = [
    { logo: "/logo/bangl_ieee.jpeg", alt: "IEEE Bangalore Section" }, 
    { logo: "/logo/mathworks.jpeg", alt: "MathWorks" },
    { logo: "/logo/coreEL.png", alt: "CoreEL" },
    { logo: "/logo/sight_ieee.png", alt: "IEEE SIGHT" },
    { logo: "/logo/smart_ieee.jpeg", alt: "IEEE Smart Village" },
    { logo: "/logo/naratech_bang.png", alt: "NaraTech" },
    { logo: "/logo/AESSBLR.jpeg", alt: "IEEE AESS Bangalore" },
    { logo: "/logo/cadence.png", alt: "Cadence" }
  ];

  return (
    <section id="sponsors" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITLE SPONSORS SECTION */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-heading text-white">
              Title <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Sponsors</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {titleSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="bg-[#030811]/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:border-gold hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] flex justify-center items-center transition-all duration-300 group w-64 md:w-80"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.alt} 
                  className="max-w-full h-auto object-contain rounded-lg group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL SPONSORS SECTION */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-heading text-white">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Sponsors</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {technicalSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="bg-[#030811]/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] flex justify-center items-center transition-all duration-300 group"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.alt} 
                  className="max-w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="mailto:abdulbitm@ieee.org" className="inline-block bg-[#030811]/80 backdrop-blur-md hover:bg-white/10 text-cyan px-10 py-4 rounded-full font-bold transition-all border border-cyan/50 hover:border-white shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
