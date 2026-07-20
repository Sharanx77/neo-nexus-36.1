import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 relative z-10 mb-10 sm:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 font-heading text-white">Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Assistance?</span></h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">Reach out to our organizing team for queries regarding registration, tracks, or sponsorships.</p>
        </div>
        
        {/* UPDATED: Changed to a 3-column grid for a perfectly balanced layout without the form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Event Coordinator */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.15)] flex flex-col justify-center hover:border-electric/70 transition-colors">
            <span className="text-electric text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">Event Coordinator</span>
            <p className="text-white font-extrabold text-xl sm:text-2xl mb-1">Dr Abdul Lateef Haroon P S</p>
            <p className="text-gray-300 text-sm sm:text-base font-mono font-semibold mb-0.5">+91 9738973034</p>
            <p className="text-gray-300 text-sm sm:text-base font-medium break-all">abdulbitm@ieee.org</p>
          </div>

          {/* Event Volunteer */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.15)] flex flex-col justify-center hover:border-electric/70 transition-colors">
            <span className="text-electric text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">Event Volunteer</span>
            <p className="text-white font-extrabold text-xl sm:text-2xl mb-1">A Ananda</p>
            <p className="text-gray-300 text-sm sm:text-base font-mono font-semibold mb-0.5">+91 8904282081</p>
            <p className="text-gray-300 text-sm sm:text-base font-medium break-all">ananda.a@ieee.org</p>
          </div>

          {/* General & Sponsorships Panel */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-cyan/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex flex-col justify-center hover:border-cyan/70 transition-colors">
            <span className="text-cyan text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">General & Sponsorships</span>
            <p className="text-white font-extrabold text-xl sm:text-2xl mb-1">IEEE SB BITM</p>
            <p className="text-gray-300 text-sm sm:text-base font-medium mb-3 break-all">neonexus36.0@gmail.com</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link href="https://www.instagram.com/bitm_ieee?igsh=MTRqcjBmYTZtbG4wdQ==" target="_blank" className="text-cyan/80 hover:text-white transition-colors text-sm sm:text-base font-semibold underline">Instagram (@bitm_ieee)</Link>
              <Link href="https://www.linkedin.com/company/ieee-student-branch-bitm/" target="_blank" className="text-cyan/80 hover:text-white transition-colors text-sm sm:text-base font-semibold underline">LinkedIn</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
