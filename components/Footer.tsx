import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 mb-8 relative z-10">
      {/* UPDATED: Footer Main Wrapper */}
      <footer className="bg-[#030811]/80 backdrop-blur-xl py-12 px-8 rounded-3xl flex flex-col items-center border-t-2 border-electric/50 shadow-[0_-10px_30px_rgba(14,124,196,0.15)] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric to-transparent opacity-50"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-10 border-b border-electric/20 pb-10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-black text-white mb-4 font-heading tracking-wider">NEO-NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">36.1</span></h2>
            <p className="text-gray-300 text-sm max-w-xs font-medium leading-relaxed mb-6">The flagship technical event bringing together the brightest minds to solve tomorrow&apos;s problems.</p>
            
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/bitm_ieee?igsh=MTRqcjBmYTZtbG4wdQ==" target="_blank" className="w-10 h-10 rounded-full bg-[#030811] border border-white/20 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all" aria-label="Instagram">
                {/* SVG Icon from source */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/ieee-student-branch-bitm/" target="_blank" className="w-10 h-10 rounded-full bg-[#030811] border border-white/20 flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric hover:shadow-[0_0_15px_rgba(14,124,196,0.4)] transition-all" aria-label="LinkedIn">
                {/* SVG Icon from source */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="https://www.bitm.edu.in/" target="_blank" className="w-10 h-10 rounded-full bg-[#030811] border border-white/20 flex items-center justify-center text-gray-400 hover:text-electric hover:border-electric hover:shadow-[0_0_15px_rgba(14,124,196,0.4)] transition-all" aria-label="Website">
                {/* SVG Icon from source */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-4 font-heading tracking-widest uppercase">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium">
              <Link href="#home" className="text-gray-400 hover:text-electric transition-colors">Home</Link>
              <Link href="#about" className="text-gray-400 hover:text-electric transition-colors">About</Link>
              <Link href="#tracks" className="text-gray-400 hover:text-electric transition-colors">Tracks</Link>
              <Link href="#timeline" className="text-gray-400 hover:text-electric transition-colors">Timeline</Link>
              <Link href="#gallery" className="text-gray-400 hover:text-electric transition-colors">Gallery</Link>
              <Link href="#sponsors" className="text-gray-400 hover:text-electric transition-colors">Sponsors</Link>
              <Link href="#host" className="text-gray-400 hover:text-electric transition-colors">Host Institution</Link>
              <Link href="#contact" className="text-gray-400 hover:text-electric transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-4 font-heading tracking-widest uppercase">Dev Info</h3>
            <p className="text-gray-400 text-sm mb-4 font-medium">Designed & Developed By:</p>
            
            <div className="mb-4 text-center md:text-left bg-white/5 p-3 rounded-xl border border-white/10 w-full max-w-[250px]">
              <p className="text-electric font-bold text-sm tracking-wide">B Sharana Basava</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <span className="text-gray-400 text-xs font-semibold">IEEE SB BITM</span>
                <span className="text-gray-600 text-xs">|</span>
                <Link href="https://www.linkedin.com/in/bsharanabasava2006/" target="_blank" className="text-cyan hover:text-white transition-colors text-xs font-bold underline">LinkedIn</Link>
              </div>
            </div>

            <div className="text-center md:text-left bg-white/5 p-3 rounded-xl border border-white/10 w-full max-w-[250px]">
              <p className="text-electric font-bold text-sm tracking-wide">Hattikal Sai Keerthi</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <span className="text-gray-400 text-xs font-semibold">IEEE SB BITM</span>
                <span className="text-gray-600 text-xs">|</span>
                <Link href="https://www.linkedin.com/in/hattikal-sai-keerthi-07ab7b36b/" target="_blank" className="text-cyan hover:text-white transition-colors text-xs font-bold underline">LinkedIn</Link>
              </div>
            </div>
          </div>

        </div>

        <p className="text-gray-500 text-xs tracking-wide text-center font-semibold uppercase">NeoNexus Hackathon 2026 | Organized by BITM IEEE Student Branch | Ballari Institute of Technology and Management.</p>
      </footer>
    </div>
  );
}