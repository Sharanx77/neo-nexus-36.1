'use client';
import { useState } from 'react';
import Image from 'next/image'; // Imported Next.js high-performance Image component
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
        <>
            {/* The Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                {visibleImages.map((imagePath, i) => (
                    <div 
                        key={i} 
                        onClick={() => setIndex(i)}
                        className="glass-panel p-2 rounded-2xl border border-white/10 overflow-hidden cursor-pointer group relative will-change-transform"
                    >
                        {/* Wrapper to control sizes properly with Next.js Image */}
                        <div className="relative w-full h-56 rounded-xl overflow-hidden">
                            <Image 
                                src={imagePath} 
                                alt={`Memory ${i + 1}`} 
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={i < 3} // Pre-load the top 3 images for faster initial paints
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl m-2">
                            <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="glass-panel hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all border border-electric text-electric hover:text-white"
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
                    container: { backgroundColor: "rgba(3, 8, 17, 0.95)", backdropFilter: "blur(12px)" },
                    button: { filter: "drop-shadow(0 0 10px rgba(14,124,196,0.5))" }
                }}
            />
        </>
    );
}