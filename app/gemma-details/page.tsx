'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function GemmaPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const flashcards = [
    {
      id: 1,
      title: "Community-Driven Innovation",
      desc: "Open access to models, world-class partners, and an extensive ecosystem foster collaboration and AI advancements."
    },
    {
      id: 2,
      title: "Extensibility and Optimization",
      desc: "TPU and GPU optimized, multi-framework support, seamless device compatibility, and model customization empower AI development."
    },
    {
      id: 3,
      title: "Unmatched Performance at Size",
      desc: "Gemma models achieve exceptional benchmark results at their sizes, even outperforming some larger open models."
    },
    {
      id: 4,
      title: "Responsible by Design",
      desc: "Incorporating comprehensive safety measures, these models help ensure responsible and trustworthy AI solutions through curated datasets and rigorous tuning."
    }
  ];

  return (
    <main className="min-h-screen bg-[#202124] text-white selection:bg-[#3186FF] selection:text-white pb-20 font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="w-full border-b border-white/10 bg-[#202124]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="font-semibold tracking-wide text-base">Back to Neo-Nexus</span>
          </Link>
          
          {/* LOGO: Build with Gemma (Horizontal Lockup) - INCREASED SIZE */}
          <img src="/logo/gemma2.png" alt="Build with Gemma" className="h-12 md:h-16 lg:h-20 object-contain py-2" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#3186FF]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* LOGO: Gemma Sparkle Icon - INCREASED SIZE */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo/gemma3.png" 
              alt="Gemma Sparkle" 
              className="h-32 md:h-48 lg:h-56 object-contain drop-shadow-[0_0_25px_rgba(49,134,255,0.6)] animate-pulse" 
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3186FF] via-[#346BF1] to-[#4FA0FF]">Gemma</span> Hackathon
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
            Build innovative AI solutions using Gemma, Google's family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models.
          </p>
        </div>
      </section>

      {/* GEMMA 4 ECOSYSTEM & CAPABILITIES SECTION */}
      <section className="py-12 px-4 relative z-10 border-t border-white/10 bg-[#202124]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            
            {/* LOGO: Build with Gemma (Horizontal Lockup) - INCREASED SIZE */}
            <div className="flex justify-center mb-6">
              <img src="/logo/gemma1.png" alt="Build with Gemma" className="h-16 md:h-20 lg:h-24 object-contain opacity-90" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Gemma 4 Ecosystem & Capabilities</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
              Explore the cutting-edge architectural advancements of the Gemma 4 family to power your hackathon solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Core Capabilities */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm lg:col-span-2">
              <h3 className="text-[#3186FF] font-bold text-2xl md:text-3xl mb-6">
                Gemma 4 Architecture
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-bold text-xl md:text-2xl">Multimodal Framework</h4>
                  <p className="text-gray-300 mt-3 text-lg md:text-xl leading-relaxed">
                    Gemma 4 models are natively multimodal, processing text and images across all tiers under the open Apache 2.0 license. The edge-focused models (E2B and E4B) explicitly integrate native audio capabilities designed for low-latency offline speech pipelines.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold text-xl md:text-2xl">Expanded Context & Agentic Tools</h4>
                  <p className="text-gray-300 mt-3 text-lg md:text-xl leading-relaxed">
                    Engineered for autonomous agent workflows, Gemma 4 provides deep out-of-the-box support for structured JSON generation, multi-step execution tracking, and complex function calling across a scalable context window reaching up to 256K tokens.
                  </p>
                </div>
              </div>
            </div>

            {/* Model Tiers */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-[#4FA0FF] font-bold text-2xl md:text-3xl mb-6">
                Deployment Tiers
              </h3>
              <ul className="space-y-6">
                <li className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  <strong className="text-white block mb-2 text-xl md:text-2xl">Mobile & Edge (E2B, E4B)</strong> 
                  Compact 2B and 4B parameters optimized for on-device applications, running locally on laptops, smartphones, or microcontroller units.
                </li>
                <li className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  <strong className="text-white block mb-2 text-xl md:text-2xl">Workstation (12B)</strong> 
                  A mid-weight unified architecture that links multi-sensory token streams directly into the internal embedding layer.
                </li>
                <li className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  <strong className="text-white block mb-2 text-xl md:text-2xl">Scale (26B MoE, 31B Dense)</strong> 
                  High-capacity versions designed for intensive developer environments, multi-turn reasoning, and system pipelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUILD WITH GEMMA SECTION (INTERACTIVE FLASHCARDS) */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Why Build with Gemma?</h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#3186FF]/20 to-transparent border border-[#3186FF]/30 p-10 rounded-3xl flex-1 backdrop-blur-sm">
                <h3 className="text-[#4FA0FF] font-bold text-base md:text-lg tracking-widest uppercase mb-4">Positioning</h3>
                <p className="text-gray-200 text-lg md:text-2xl leading-relaxed">
                  Gemma is a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#3186FF]/20 to-transparent border border-[#3186FF]/30 p-10 rounded-3xl flex-1 backdrop-blur-sm">
                <h3 className="text-[#4FA0FF] font-bold text-base md:text-lg tracking-widest uppercase mb-4">Value Proposition</h3>
                <p className="text-gray-200 text-lg md:text-2xl leading-relaxed">
                  Best-in-class open models for easy tuning, responsible development, and community-driven innovation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mb-8 tracking-widest uppercase text-sm md:text-base font-bold">Select cards to expand details</p>
          
          {/* INTERACTIVE FLASHCARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {flashcards.map((card) => (
              <div 
                key={card.id}
                className="relative h-56 md:h-64 w-full cursor-pointer group"
                onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
                style={{ perspective: '1000px' }}
              >
                <div 
                  className="absolute w-full h-full transition-all duration-500 ease-in-out"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* FRONT OF FLASHCARD */}
                  <div 
                    className="absolute w-full h-full bg-[#202124] border-2 border-[#3186FF]/30 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg group-hover:border-[#3186FF] group-hover:shadow-[0_0_25px_rgba(49,134,255,0.15)] transition-all"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-white">{card.title}</h3>
                  </div>

                  {/* BACK OF FLASHCARD */}
                  <div 
                    className="absolute w-full h-full bg-gradient-to-br from-[#3186FF] to-[#346BF1] rounded-3xl flex items-center justify-center p-8 shadow-xl"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <p className="text-white text-lg md:text-xl leading-relaxed text-center font-medium px-4">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NAMING GUIDELINES SECTION */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#3186FF]/10 to-transparent border border-[#3186FF]/20 rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
            Naming & Usage Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Correct Usage */}
            <div>
              <h3 className="text-[#4FA0FF] font-bold text-xl md:text-2xl mb-6">
                Correct Wording
              </h3>
              <ul className="space-y-4 text-gray-300 text-lg md:text-xl">
                <li className="flex items-start gap-3"><span className="text-[#4FA0FF] font-bold">-</span> Build with Gemma Hackathon</li>
                <li className="flex items-start gap-3"><span className="text-[#4FA0FF] font-bold">-</span> Powered by Gemma</li>
                <li className="flex items-start gap-3"><span className="text-[#4FA0FF] font-bold">-</span> Built using Gemma</li>
                <li className="flex items-start gap-3"><span className="text-[#4FA0FF] font-bold">-</span> Built on Gemma</li>
              </ul>
            </div>

            {/* Incorrect Usage */}
            <div>
              <h3 className="text-red-400 font-bold text-xl md:text-2xl mb-6">
                Usage Parameters to Avoid
              </h3>
              <ul className="space-y-4 text-gray-400 text-lg md:text-xl">
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">-</span> Do not designate variants under the project name "Gemma AI".</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">-</span> Avoid styling that simulates an official product line from Google.</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">-</span> Refrain from deploying the term "Gemma Open Source"; communicate it as an open family of models.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & ATTRIBUTION */}
      <footer className="mt-16 text-center px-4">
        <Link 
          href="https://www.evynte.com/event/checkout/neo-nexus-361" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#3186FF] hover:bg-[#346BF1] text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(49,134,255,0.4)] hover:shadow-[0_0_30px_rgba(49,134,255,0.6)] mb-12 hover:scale-105"
        >
          Register for the Hackathon
        </Link>
        
        {/* LOGO: Just the Wordmark - INCREASED SIZE */}
        <div className="flex justify-center mb-4">
          <img src="/logo/gemma2.png" alt="Gemma" className="h-10 md:h-14 lg:h-16 object-contain opacity-80" />
        </div>
        
        <p className="text-gray-500 text-base font-medium">
          Gemma is a trademark of Google LLC.
        </p>
      </footer>

    </main>
  );
}
