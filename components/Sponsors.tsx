import Link from "next/link";

export default function Sponsors() {
  const sponsorsList = [
    { logo: "/logo/bangl_ieee1.png", alt: "IEEE Bangalore Section" }, // Moved to the top
    { logo: "/logo/bangl_ieee.jpeg", alt: "IEEE Bangalore Section (Alt)" }, // Added at the 2nd place
    { logo: "/logo/mathworks.jpeg", alt: "MathWorks" },
    { logo: "/logo/coreEL.png", alt: "CoreEL" },
    { logo: "/logo/sight_ieee.png", alt: "IEEE SIGHT" },
    { logo: "/logo/smart_ieee.jpeg", alt: "IEEE Smart Village" },
    { logo: "/logo/naratech_bang.png", alt: "NaraTech" },
    { logo: "/logo/AESSBLR.jpeg", alt: "IEEE AESS Bangalore" }
  ];

  return (
    <section id="sponsors" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-heading text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Sponsors</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {sponsorsList.map((sponsor, index) => (
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

        <div className="text-center mt-12">
          <Link href="mailto:abdulbitm@ieee.org" className="inline-block bg-[#030811]/80 backdrop-blur-md hover:bg-white/10 text-cyan px-10 py-4 rounded-full font-bold transition-all border border-cyan/50 hover:border-white shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
