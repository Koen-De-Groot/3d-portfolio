import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavBar";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import WayOfWorking from "./sections/WayOfWorking";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <WayOfWorking />
    <Footer />
    <Analytics />
  </>
);

export default App;
