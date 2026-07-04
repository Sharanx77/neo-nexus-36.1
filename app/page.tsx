import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import MediaGallery from "../components/MediaGallery";
import Sponsors from "../components/Sponsors";
import Host from "../components/Host";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Tracks />
        <Timeline />
        <MediaGallery />
        <Sponsors />
        <Host />
        <Contact />
        <Footer />
      </main>
    </>
  );
}