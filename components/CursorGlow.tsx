'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                // Subtract 300px to center the 600px orb on the cursor
                spotlightRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
            }
        };

        const handleMouseEnter = () => {
            if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div 
            ref={spotlightRef}
            className="fixed top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,124,196,0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-[1] opacity-0 transition-opacity duration-300"
        />
    );
}