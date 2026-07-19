import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Winners from "../components/Winners"
import Tracks from "../components/Tracks";
import Venue from "../components/Venue";
import Sponsors from "../components/Sponsors";
import Host from "../components/Host";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GemmaSection from "../components/GemmaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Winners/>
        <GemmaSection/>
        <Tracks />
        <Venue/>
        <Sponsors />
        <Host />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
