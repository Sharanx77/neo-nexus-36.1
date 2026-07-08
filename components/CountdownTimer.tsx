'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('August 22, 2026 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (num: number) => String(num).padStart(2, '0');

    return (
        <div className="flex gap-4 sm:gap-6 justify-center text-center">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center">
                    {/* Glowing neon boxes exactly matched to layout frames */}
                    <div className="bg-[#030811]/70 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl border border-electric shadow-[0_0_20px_rgba(14,124,196,0.35)] mb-2 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-electric/10 to-transparent opacity-50"></div>
                        <span className="text-2xl sm:text-3xl font-heading font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] relative z-10">
                            {format(value)}
                        </span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-electric font-extrabold uppercase tracking-widest">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
