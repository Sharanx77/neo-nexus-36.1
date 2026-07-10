import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// Removed Stats since they are now beautifully integrated into the About section!
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery"; // Updated to match our file name
import Sponsors from "../components/Sponsors";
import Host from "../components/Host";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scrolling issues */}
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Gallery /> 
        <Sponsors />
        <Host />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
