'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isSidebarOpen]);

    return (
        <>
            <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 block' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

            <aside className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#030811]/95 md:bg-[#030811]/90 backdrop-blur-none md:backdrop-blur-xl border-l border-electric/40 z-50 transform transition-transform duration-300 shadow-[-10px_0_30px_rgba(14,124,196,0.2)] flex flex-col ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-transparent">
                    <span className="text-white font-heading font-bold text-xl tracking-wider">NEO-NEXUS <span className="text-electric">36.1</span></span>
                    <button onClick={toggleSidebar} className="text-gray-400 hover:text-red-500 transition-colors p-1.5 bg-white/5 rounded-lg border border-white/10 hover:border-red-500/50">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-2 scrollbar-hide">
                    <Link href="#home" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Home</Link>
                    <Link href="#about" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">About</Link>
                    <Link href="#tracks" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Tracks</Link>
                    <Link href="#timeline" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Timeline</Link>
                    <Link href="#sponsors" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Sponsors</Link>
                    <Link href="#host" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Host Institution</Link>
                    <Link href="#contact" onClick={toggleSidebar} className="px-4 py-3 text-gray-300 hover:text-white hover:bg-electric/20 border border-transparent hover:border-electric/30 rounded-xl transition-all font-semibold flex items-center">Contact</Link>
                </nav>

                <div className="p-6 border-t border-white/10 bg-transparent">
                    <Link href="https://www.evynte.com/event/checkout/neo-nexus-361" target="_blank" rel="noopener noreferrer" onClick={toggleSidebar} className="block w-full text-center bg-gradient-to-r from-electric to-cyan hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-xl font-bold transition-all shadow-md md:shadow-[0_0_15px_rgba(14,124,196,0.4)]">
                        Register Now
                    </Link>
                </div>
            </aside>

            <nav className="fixed top-0 w-full z-30 bg-[#030811]/95 md:bg-[#030811]/85 backdrop-blur-none md:backdrop-blur-md border-b border-electric/40 shadow-lg md:shadow-[0_5px_20px_rgba(14,124,196,0.15)] py-2 sm:py-3 transition-colors">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-1 md:gap-6">
                        
                        <div className="flex items-center gap-1 sm:gap-2">
                            {/* 1. BITM Logo */}
                            <div className="bg-white p-1 sm:p-1.5 lg:p-2 rounded-lg sm:rounded-xl h-9 w-14 sm:h-12 sm:w-16 md:h-14 md:w-20 lg:h-16 lg:w-28 flex items-center justify-center border-2 border-electric/30 shadow-sm md:shadow-[0_0_10px_rgba(14,124,196,0.2)]">
                                <img src="/logo/bitm.png" alt="BITM Logo" className="max-h-full max-w-full object-contain" />
                            </div>
                            {/* 2. IEEE Bangalore Logo */}
                            <div className="bg-white p-1 sm:p-1.5 lg:p-2 rounded-lg sm:rounded-xl h-9 w-14 sm:h-12 sm:w-16 md:h-14 md:w-20 lg:h-16 lg:w-28 flex items-center justify-center border-2 border-electric/30 shadow-sm md:shadow-[0_0_10px_rgba(14,124,196,0.2)]">
                                <img src="/logo/bangl_ieee.jpeg" alt="IEEE Bangalore Logo" className="max-h-full max-w-full object-contain" />
                            </div>
                        </div>

                        <div className="hidden md:block text-center px-2 flex-1">
                            <Link href="/" className="font-heading md:text-2xl lg:text-3xl font-black tracking-widest block drop-shadow-[0_0_15px_rgba(14,124,196,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 hover:from-electric hover:to-cyan transition-all duration-300">
                                NEONEXUS 36.1
                            </Link>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                            {/* 3. IEEE SB BITM Logo */}
                            <div className="bg-white p-1 sm:p-1.5 lg:p-2 rounded-lg sm:rounded-xl h-9 w-14 sm:h-12 sm:w-16 md:h-14 md:w-20 lg:h-16 lg:w-28 flex items-center justify-center border-2 border-cyan/30 shadow-sm md:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                <img src="/logo/ieee_bitm.png" alt="IEEE SB Logo" className="max-h-full max-w-full object-contain" />
                            </div>

                            <button onClick={toggleSidebar} className="bg-[#030811]/80 hover:bg-electric/20 text-white hover:text-cyan p-1.5 sm:p-2.5 rounded-lg border border-electric/40 shadow-sm md:shadow-[0_0_10px_rgba(14,124,196,0.2)] transition-all">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}
