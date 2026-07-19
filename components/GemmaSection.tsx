import Link from 'next/link';

export default function GemmaSection() {
  return (
    <section id="build-with-gemma" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="bg-[#030811]/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#3186FF]/40 shadow-[0_0_30px_rgba(49,134,255,0.15)] relative overflow-hidden">
          {/* Official Gemma Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3186FF] via-[#346BF1] to-[#4FA0FF]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-heading text-white">
                Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3186FF] to-[#4FA0FF]">Gemma</span>
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
                Build innovative AI solutions powered by Gemma 4, Google's family of open models.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Gemma 4 must be a core component of your solution. Your application should meaningfully leverage Gemma's capabilities, whether through reasoning, multimodal understanding, native function calling, or other AI-powered features.
              </p>
              
              {/* Button */}
              <div className="text-center md:text-left">
                <Link 
                  href="/gemma-details" 
                  className="inline-block bg-gradient-to-r from-[#3186FF] to-[#346BF1] hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(49,134,255,0.3)] hover:shadow-[0_0_25px_rgba(49,134,255,0.5)] border border-white/10 hover:scale-105 text-sm tracking-wide"
                >
                  Know More About Gemma ➔
                </Link>
              </div>
            </div>
            
            <div className="shrink-0">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_0_25px_rgba(49,134,255,0.25)] border border-[#3186FF]/20">
                <img src="/logo/gemma.png" alt="Gemma Logo" className="h-20 sm:h-28 md:h-32 w-auto object-contain" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Mandatory Trademark Attribution */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs sm:text-sm">
            Gemma is a trademark of Google LLC.
          </p>
        </div>

      </div>
    </section>
  );
}
