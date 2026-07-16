'use client';
import { useState, useEffect } from 'react';

export default function Tracks() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  useEffect(() => {
    if (activeDomain) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeDomain]);

  const openDomain = (domainId: string) => {
    setActiveDomain(domainId);
    setActiveProblem(null);
  };

  const closeModal = () => {
    setActiveDomain(null);
    setActiveProblem(null);
  };

  const toggleProblem = (problemId: string) => {
    setActiveProblem(activeProblem === problemId ? null : problemId);
  };

  const trackData = [
    {
      id: 'ai',
      tag: 'AI',
      name: 'AI for Humanitarian Tech',
      shortDesc: 'AI-driven solutions for social good, health, disaster relief and inclusivity.',
      problems: [
        { id: 'NN-AI-01', title: '[AI_PROBLEM_1_TITLE]', desc: '[INSERT_AI_PROBLEM_1_DESCRIPTION_HERE]' },
        { id: 'NN-AI-02', title: '[AI_PROBLEM_2_TITLE]', desc: '[INSERT_AI_PROBLEM_2_DESCRIPTION_HERE]' },
        { id: 'NN-AI-03', title: '[AI_PROBLEM_3_TITLE]', desc: '[INSERT_AI_PROBLEM_3_DESCRIPTION_HERE]' },
        { id: 'NN-AI-04', title: '[AI_PROBLEM_4_TITLE]', desc: '[INSERT_AI_PROBLEM_4_DESCRIPTION_HERE]' },
        { id: 'NN-AI-05', title: '[AI_PROBLEM_5_TITLE]', desc: '[INSERT_AI_PROBLEM_5_DESCRIPTION_HERE]' },
        { id: 'NN-AI-06', title: '[AI_PROBLEM_6_TITLE]', desc: '[INSERT_AI_PROBLEM_6_DESCRIPTION_HERE]' }
      ]
    },
    {
      id: 'circuit',
      tag: 'CKTD',
      name: 'Circuit Design',
      shortDesc: 'Embedded systems, PCB design, VLSI and hardware engineering.',
      problems: [
        { id: 'NN-CKTD-01', title: '[CIRCUIT_PROBLEM_1_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_1_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-02', title: '[CIRCUIT_PROBLEM_2_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_2_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-03', title: '[CIRCUIT_PROBLEM_3_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_3_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-04', title: '[CIRCUIT_PROBLEM_4_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_4_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-05', title: '[CIRCUIT_PROBLEM_5_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_5_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-06', title: '[CIRCUIT_PROBLEM_6_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_6_DESCRIPTION_HERE]' },
        { id: 'NN-CKTD-07', title: '[CIRCUIT_PROBLEM_7_TITLE]', desc: '[INSERT_CIRCUIT_PROBLEM_7_DESCRIPTION_HERE]' }
      ]
    },
    {
      id: 'uit',
      tag: 'UIT',
      name: 'Urban Intelligence Tech',
      shortDesc: 'Urban planning algorithms, IoT networks, and sustainable infrastructure.',
      problems: [
        { id: 'NN-UIT-01', title: '[UIT_PROBLEM_1_TITLE]', desc: '[INSERT_UIT_PROBLEM_1_DESCRIPTION_HERE]' },
        { id: 'NN-UIT-02', title: '[UIT_PROBLEM_2_TITLE]', desc: '[INSERT_UIT_PROBLEM_2_DESCRIPTION_HERE]' },
        { id: 'NN-UIT-03', title: '[UIT_PROBLEM_3_TITLE]', desc: '[INSERT_UIT_PROBLEM_3_DESCRIPTION_HERE]' },
        { id: 'NN-UIT-04', title: '[UIT_PROBLEM_4_TITLE]', desc: '[INSERT_UIT_PROBLEM_4_DESCRIPTION_HERE]' },
        { id: 'NN-UIT-05', title: '[UIT_PROBLEM_5_TITLE]', desc: '[INSERT_UIT_PROBLEM_5_DESCRIPTION_HERE]' },
        { id: 'NN-UIT-06', title: '[UIT_PROBLEM_6_TITLE]', desc: '[INSERT_UIT_PROBLEM_6_DESCRIPTION_HERE]' }
      ]
    },
    {
      id: 'aero',
      tag: 'AERO',
      name: 'Aerospace',
      shortDesc: 'Drones, satellite technology, navigation systems and aerospace innovation.',
      problems: [
        { id: 'NN-AERO-01', title: '[AERO_PROBLEM_1_TITLE]', desc: '[INSERT_AERO_PROBLEM_1_DESCRIPTION_HERE]' },
        { id: 'NN-AERO-02', title: '[AERO_PROBLEM_2_TITLE]', desc: '[INSERT_AERO_PROBLEM_2_DESCRIPTION_HERE]' },
        { id: 'NN-AERO-03', title: '[AERO_PROBLEM_3_TITLE]', desc: '[INSERT_AERO_PROBLEM_3_DESCRIPTION_HERE]' },
        { id: 'NN-AERO-04', title: '[AERO_PROBLEM_4_TITLE]', desc: '[INSERT_AERO_PROBLEM_4_DESCRIPTION_HERE]' },
        { id: 'NN-AERO-05', title: '[AERO_PROBLEM_5_TITLE]', desc: '[INSERT_AERO_PROBLEM_5_DESCRIPTION_HERE]' }
      ]
    },
    {
      id: 'mob',
      tag: 'MOB',
      name: 'Mobility',
      shortDesc: 'EVs, autonomous vehicles, transportation and logistics solutions.',
      problems: [
        { id: 'NN-MOB-01', title: '[MOBILITY_PROBLEM_1_TITLE]', desc: '[INSERT_MOBILITY_PROBLEM_1_DESCRIPTION_HERE]' },
        { id: 'NN-MOB-02', title: '[MOBILITY_PROBLEM_2_TITLE]', desc: '[INSERT_MOBILITY_PROBLEM_2_DESCRIPTION_HERE]' },
        { id: 'NN-MOB-03', title: '[MOBILITY_PROBLEM_3_TITLE]', desc: '[INSERT_MOBILITY_PROBLEM_3_DESCRIPTION_HERE]' },
        { id: 'NN-MOB-04', title: '[MOBILITY_PROBLEM_4_TITLE]', desc: '[INSERT_MOBILITY_PROBLEM_4_DESCRIPTION_HERE]' },
        { id: 'NN-MOB-05', title: '[MOBILITY_PROBLEM_5_TITLE]', desc: '[INSERT_MOBILITY_PROBLEM_5_DESCRIPTION_HERE]' }
      ]
    },
    {
      id: 'cybr',
      tag: 'CYBR',
      name: 'Cyber Security',
      shortDesc: 'Threat detection, secure systems, ethical hacking and data privacy.',
      problems: [
        { id: 'NN-CYBR-TBA', title: 'Problem Statements To Be Announced', desc: 'The official problem statements for the Cyber Security domain are currently locked. Check back soon for the official release!' }
      ]
    }
  ];

  const activeDomainData = trackData.find(d => d.id === activeDomain);

  // We wrap the return in a Fragment <> so the Modal escapes the <section>'s z-index
  return (
    <>
      <section id="tracks" className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 font-heading text-white">
              Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Tracks</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Select a domain below to explore its official problem statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {trackData.map((domain) => (
              <div 
                key={domain.id}
                onClick={() => openDomain(domain.id)}
                className="cursor-pointer bg-[#030811]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col text-left transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-cyan border border-cyan/40 rounded-full text-[10px] sm:text-xs font-bold tracking-widest bg-cyan/5 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                    [{domain.tag}]
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors duration-300">
                  {domain.name}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {domain.shortDesc}
                </p>

                <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-center sm:justify-start">
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-cyan group-hover:text-white transition-colors flex items-center gap-2">
                    View Problem Statements
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL IS NOW OUTSIDE THE SECTION TO FIX OVERLAP ISSUES */}
      {activeDomain && activeDomainData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          
          {/* Blurred Background */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-xl" 
            onClick={closeModal}
          ></div>
          
          {/* Modal Content Box */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-[#030811]/95 border-2 border-cyan/50 shadow-[0_0_50px_rgba(6,182,212,0.3)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 transform scale-100 transition-transform duration-300">
            
            {/* Close Button - Added higher z-index to ensure it is always clickable */}
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 p-1.5 sm:p-2 rounded-full border border-transparent hover:border-red-500/50 transition-all z-[110]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6 sm:mb-8 relative z-10 mt-3 sm:mt-0">
              <span className="inline-block px-3 py-1 text-cyan border border-cyan/40 rounded-full text-[10px] sm:text-xs font-bold tracking-widest bg-cyan/5 mb-3">
                [{activeDomainData.tag}]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeDomainData.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 relative z-10">
              {activeDomainData.problems.map((problem) => {
                const isProblemActive = activeProblem === problem.id;
                return (
                  <div 
                    key={problem.id}
                    onClick={() => toggleProblem(problem.id)}
                    className={`cursor-pointer rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col bg-[#030811] overflow-hidden
                      ${isProblemActive 
                        ? 'border-electric shadow-[0_0_20px_rgba(14,124,196,0.4)]' 
                        : 'border-white/10 hover:border-cyan/40 hover:bg-white/5'
                      }`}
                  >
                    <div className="p-4 sm:p-5 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-electric/20 text-cyan text-[10px] sm:text-xs font-mono font-bold border border-electric/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                          {problem.id}
                        </span>
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${isProblemActive ? 'bg-electric text-white shadow-[0_0_10px_rgba(14,124,196,0.8)]' : 'bg-white/5 text-gray-400'}`}>
                          <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isProblemActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <h4 className={`font-bold text-base sm:text-lg transition-colors pr-8 ${isProblemActive ? 'text-white' : 'text-gray-200'}`}>
                        {problem.title}
                      </h4>

                      <div className={`transition-all duration-500 ease-in-out ${isProblemActive ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                            {problem.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
