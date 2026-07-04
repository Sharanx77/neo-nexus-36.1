import Gallery from "./Gallery";

export default function MediaGallery() {
  return (
    <section id="gallery" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
            Memories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">36.0</span>
          </h2>
        </div>
        
        {/* UPDATED: Video Player Frame */}
        <div className="mb-16 bg-[#030811]/60 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-electric/40 shadow-[0_0_25px_rgba(14,124,196,0.2)] max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-cyan"></div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-inner">
                <video controls className="w-full h-full object-cover" poster="/NN36.0/screen.png">
                    <source src="/NN36.0/NN36video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className="text-center text-electric mt-6 font-extrabold text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(14,124,196,0.5)]">
              Relive the 36 hours of innovation (1 Min Highlight)
            </p>
        </div>

        <Gallery />
      </div>
    </section>
  );
}