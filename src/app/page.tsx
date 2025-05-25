import Community from "./components/Community";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoadMap from "./components/RoadMap";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <RoadMap />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
