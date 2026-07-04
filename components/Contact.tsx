'use client';
import Link from "next/link";
import { sendContactEmail } from '@/app/actions';

export default function Contact() {
  async function handleSubmit(formData: FormData) {
    const result = await sendContactEmail(formData);
    if (result.success) {
      alert('Message sent successfully!');
    } else {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 relative z-10 mb-10 sm:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          {/* ADAPTIVE HEADING */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 font-heading text-white">Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Assistance?</span></h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-2">Reach out to our organizing team for queries regarding registration, tracks, or sponsorships.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          <div className="space-y-4 sm:space-y-6 flex flex-col justify-between">
            {/* Coordinator 1 */}
            <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.15)] flex-1 flex flex-col justify-center">
              <span className="text-electric text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">Event Coordinator 1</span>
              <p className="text-white font-extrabold text-lg sm:text-xl mb-1">A Ananda</p>
              <p className="text-gray-300 text-sm sm:text-base font-mono font-semibold mb-0.5">+91 8105793874</p>
              <p className="text-gray-300 text-sm sm:text-base font-medium break-all">ananda.a@ieee.org</p>
            </div>
            
            {/* Coordinator 2 */}
            <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-electric/40 shadow-[0_0_15px_rgba(14,124,196,0.15)] flex-1 flex flex-col justify-center">
              <span className="text-electric text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">Event Coordinator 2</span>
              <p className="text-white font-extrabold text-lg sm:text-xl mb-1">Sanchith Kumar Joshi</p>
              <p className="text-gray-300 text-sm sm:text-base font-mono font-semibold mb-0.5">+91 9686004644</p>
              <p className="text-gray-300 text-sm sm:text-base font-medium break-all">joshisanchith@gmail.com</p>
            </div>

            {/* General & Sponsorships Panel */}
            <div className="bg-[#030811]/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-cyan/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex-1 flex flex-col justify-center">
              <span className="text-cyan text-[10px] sm:text-xs font-bold tracking-widest uppercase block mb-1">General & Sponsorships</span>
              <p className="text-white font-extrabold text-lg sm:text-xl mb-1">IEEE SB BITM</p>
              <p className="text-gray-300 text-sm sm:text-base font-medium mb-3 break-all">neonexus36.0@gmail.com</p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="https://www.instagram.com/bitm_ieee?igsh=MTRqcjBmYTZtbG4wdQ==" target="_blank" className="text-cyan/80 hover:text-white transition-colors text-sm sm:text-base font-semibold underline">Instagram (@bitm_ieee)</Link>
                <Link href="https://www.linkedin.com/company/ieee-student-branch-bitm/" target="_blank" className="text-cyan/80 hover:text-white transition-colors text-sm sm:text-base font-semibold underline">LinkedIn</Link>
              </div>
            </div>
          </div>

          {/* Symmetrical Message Form Container */}
          <div className="bg-[#030811]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)] relative overflow-hidden mt-4 lg:mt-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-cyan"></div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-heading text-white">Send a Message</h3>
            
            <form action={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="absolute w-0 h-0 opacity-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <label htmlFor="fax">Fax Number</label>
                <input type="text" id="fax" name="fax" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-300 mb-1">Full Name *</label>
                <input type="text" name="name" required className="w-full bg-navy/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-electric transition-colors focus:ring-1 focus:ring-electric" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-300 mb-1">Email Address *</label>
                  <input type="email" name="email" required className="w-full bg-navy/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-electric transition-colors focus:ring-1 focus:ring-electric" />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-300 mb-1">Phone (Optional)</label>
                  <input type="tel" name="phone" className="w-full bg-navy/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-electric transition-colors focus:ring-1 focus:ring-electric" />
                </div>
              </div>
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-300 mb-1">Subject</label>
                <select name="subject" className="w-full bg-navy/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-electric transition-colors appearance-none bg-[url('/arrow-down.svg')] bg-no-repeat bg-right">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Press">Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-300 mb-1">Message * (Min 20 characters)</label>
                <textarea name="message" required minLength={20} rows={4} className="w-full bg-navy/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-electric transition-colors resize-none focus:ring-1 focus:ring-electric"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-electric to-cyan hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all shadow-[0_0_15px_rgba(14,124,196,0.3)] hover:shadow-[0_0_25px_rgba(14,124,196,0.5)] mt-1 sm:mt-2">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
