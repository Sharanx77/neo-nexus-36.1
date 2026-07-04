import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CursorGlow from "../components/CursorGlow";

// Automatically optimize and load Google Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: '--font-orbitron',
  weight: ['500', '700', '900'] 
});

export const metadata: Metadata = {
  title: "Neo-Nexus 36.1 | National Multi-Domain Hackathon",
  description: "36 Hours of relentless innovation. Build embedded systems, architect smart cities, and deploy humanitarian AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased bg-slateLight text-navy overflow-x-hidden relative`}>
        
        {/* Interactive Mouse Tracker */}
        <CursorGlow />

        {/* Global Ambient Background Orbs */}
        <div className="fixed top-[30%] left-[-10%] w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* Your Page Content Goes Here */}
        {children}
        
      </body>
    </html>
  );
}