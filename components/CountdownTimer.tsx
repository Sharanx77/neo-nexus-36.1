'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // Set the target date to July 30, 2026 at 9:00 AM IST
  const targetDate = new Date('2026-07-30T09:00:00+05:30').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Prevents Next.js hydration mismatch errors
  if (!isMounted) return null; 

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#030811]/80 backdrop-blur-md border border-cyan/40 hover:border-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300">
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-cyan text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
        {label}
      </span>
    </div>
  );
}
