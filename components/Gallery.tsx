'use client';
import { useState } from 'react';
import Image from 'next/image'; 
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// Your image paths
const imagePaths = [ 
    "/NN36.0/2.jpg", 
    "/NN36.0/3.jpg", 
    "/NN36.0/4.jpg", 
    "/NN36.0/5.jpg", 
    "/NN36.0/6.jpg",
];

const slides = imagePaths.map(src => ({ src }));

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [showAll, setShowAll] = useState(false);

    const visibleImages = showAll ? imagePaths : imagePaths.slice(0, 6);

    return (
        <section id="gallery" className="py-12 sm:py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 font-heading text-white">
                        Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Memories</span>
                    </h2>
                </div>

                {/* The Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                    {visibleImages.map((imagePath, i) => (
                        <div 
                            key={i} 
                            onClick={() => setIndex(i)}
                            className="bg-[#030811]/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 hover:border-cyan/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden cursor-pointer group relative transition-all duration-300"
                        >
                            {/* UPDATED: Replaced fixed "h-56" with "aspect-[4/3] sm:aspect-video" for perfect fluid scaling */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden">
                                <Image 
                                    src={imagePath} 
                                    alt={`Memory ${i + 1}`} 
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={i < 3} 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                                />
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2 pointer-events-none">
                                <svg className="w-12 h-12 text-cyan drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] scale-50 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                {imagePaths.length > 6 && (
                    <div className="mt-10 text-center">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="bg-transparent hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-all border border-cyan/50 hover:border-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        >
                            {showAll ? "View Less" : "View More"}
                        </button>
                    </div>
                )}

                {/* Lightbox Module */}
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Zoom]}
                    zoom={{
                        maxZoomPixelRatio: 3, 
                        zoomInMultiplier: 2,
                    }}
                    styles={{
                        container: { backgroundColor: "rgba(3, 8, 17, 0.98)", backdropFilter: "blur(15px)" },
                        button: { filter: "drop-shadow(0 0 10px rgba(6,182,212,0.5))" }
                    }}
                />
            </div>
        </section>
    );
}
